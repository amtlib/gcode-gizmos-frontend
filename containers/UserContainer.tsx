import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Authenticate, CheckToken, CreateUser, EndSession } from "../graphql/operations/user";


export function UserContainer({ children }) {
    const [id, setId] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const [authenticateUserWithPassword, { data: authenticateData, loading: authenticateLoading }] = useMutation(Authenticate);
    const [createUser, { data: createUserData, loading: createUserLoading }] = useMutation(CreateUser);

    const { data: checkTokenData, loading: checkTokenLoading } = useQuery(CheckToken);
    const [endSession] = useMutation(EndSession);


    const authenticate = async (username: string, password: string) => {
        const { data, errors } = await authenticateUserWithPassword({ variables: { username, password } });
        if (data.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordFailure") {
            throw new Error("Invalid username or password");
        }

        if (data.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordSuccess") {
            return true;
        }

        if (errors) {
            throw new Error("Error during authentication. Try again later");
        }
        return false;
    };

    const createAccount = async (username: string, email: string, password: string) => {
        try {
            const { data, errors } = await createUser({ variables: {username, email, password}});
            if (errors) {
                return false;
            }
            if (data?.createUser?.__typename === "User") {
                return true;
            }
        } catch(e) {
            if (e.message === "Prisma error: Unique constraint failed on the fields: (`email`)") {
                throw new Error("This email is already in our system");
            }
            if (e.message === "Prisma error: Unique constraint failed on the fields: (`username`)") {
                throw new Error("Username is already taken");
            }
            return false;
        }
        
        return false;
    }

    const unauthenticate = () => {
        endSession();
        setUsername(null);
        setEmail(null);
        setIsAdmin(null);
        setId(null);
        setLoggedIn(false);
    };

    useEffect(() => {
        if (authenticateData &&
            authenticateData?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordSuccess"&&
            !authenticateLoading
            ) {
            const { item } = authenticateData.authenticateUserWithPassword;
            if (item) {
                setId(item.id);
                setUsername(item.username);
                setIsAdmin(item.isAdmin);
                setEmail(item.email);
                setLoggedIn(true);
            }
        }
    }, [authenticateData, authenticateLoading]);

    useEffect(() => {
        if (checkTokenData?.authenticatedItem && !checkTokenLoading) {
            const { id, username, email, isAdmin } = checkTokenData?.authenticatedItem;
            setId(id);
            setUsername(username);
            setEmail(email);
            setIsAdmin(isAdmin);
            setLoggedIn(true);
        }
    }, [checkTokenData, checkTokenLoading]);


    return <UserContext.Provider value={{
        id,
        username,
        email,
        isAdmin,
        loading: authenticateLoading || checkTokenLoading,
        loggedIn,
        authenticate,
        unauthenticate,
        createAccount
    }}>{children}</UserContext.Provider>
}