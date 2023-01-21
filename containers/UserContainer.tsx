import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Authenticate, CheckToken, EndSession } from "../graphql/operations/user";


export function UserContainer({ children }) {
    const [id, setId] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const [authenticateUserWithPassword, { data: authenticateData, loading: authenticateLoading }] = useMutation(Authenticate);

    const { data: checkTokenData, loading: checkTokenLoading } = useQuery(CheckToken);
    const [endSession] = useMutation(EndSession);


    const authenticate = async (username?: string, password?: string) => {
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
            console.log(checkTokenData)
            // const { firstName, lastName, type, id, birthDate, district } = checkTokenData?.authenticatedItem;
            // setFirstName(firstName);
            // setLastName(lastName);
            // setType(type);
            // setLoggedIn(true);
            // setBirthDate(birthDate);
            // setDistrict(district.id)
            // setUserId(id);
        }
    }, [checkTokenData, checkTokenLoading])


    return <UserContext.Provider value={{
        id,
        username,
        email,
        isAdmin,
        loading: authenticateLoading || checkTokenLoading,
        loggedIn,
        authenticate,
        unauthenticate
    }}>{children}</UserContext.Provider>
}