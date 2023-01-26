import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ModelType } from "../contexts/ModelContext";
import { UserContext } from "../contexts/UserContext";
import { ModelFragment } from "../graphql/apolloSchema/graphql";
import { Authenticate, ChangePassword, CheckToken, CreateUser, DislikeModel, EndSession, LikeModel } from "../graphql/operations/user";


export function UserContainer({ children }) {
    const [id, setId] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [likedModels, setLikedModels] = useState([]);
    const [createdModels, setCreatedModels] = useState([]);

    const [authenticateUserWithPassword, { data: authenticateData, loading: authenticateLoading }] = useMutation(Authenticate);
    const [createUser, { data: createUserData, loading: createAccountLoading }] = useMutation(CreateUser);
    const [likeModelMutation, { data: likeModelData, loading: likeModelLoading }] = useMutation(LikeModel);
    const [dislikeModelMutation, { data: dislikeModelData, loading: dislikeModelLoading }] = useMutation(DislikeModel);
    const [changePasswordMutation, { loading: changePasswordLoading}] = useMutation(ChangePassword);

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
            const { data, errors } = await createUser({ variables: { username, email, password } });
            if (errors) {
                return false;
            }
            if (data?.createUser?.__typename === "User") {
                return true;
            }
        } catch (e) {
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
        setLikedModels([]);
        setCreatedModels([]);
    };

    useEffect(() => {
        if (authenticateData &&
            authenticateData?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordSuccess" &&
            !authenticateLoading
        ) {
            const { item } = authenticateData.authenticateUserWithPassword;
            if (item) {
                setId(item.id);
                setUsername(item.username);
                setIsAdmin(item.isAdmin);
                setEmail(item.email);
                setLoggedIn(true);
                setLikedModels(item.likedModels);
                setCreatedModels(item.createdModels);
            }
        }
    }, [authenticateData, authenticateLoading]);

    useEffect(() => {
        console.log("check token", checkTokenData?.authenticatedItem)
        if (checkTokenData?.authenticatedItem && !checkTokenLoading) {
            const { id, username, email, isAdmin, likedModels: likedModelsAPI, createdModels: createdModelsAPI } = checkTokenData?.authenticatedItem;
            console.log(checkTokenData?.authenticatedItem && !checkTokenLoading)
            setId(id);
            setUsername(username);
            setEmail(email);
            setIsAdmin(isAdmin);
            setLoggedIn(true);
            setLikedModels(likedModelsAPI);
            setCreatedModels(createdModelsAPI);
        }
    }, [checkTokenData, checkTokenLoading]);

    const likeModel = async (modelSlug: string, username: string) => {
        const result = await likeModelMutation({
            variables: {
                modelSlug,
                username
            }
        });
        if (result?.data?.updateUser) {
            return true;
        }
        return false;
    }

    const dislikeModel = async (modelSlug: string, username: string) => {
        const result = await dislikeModelMutation({
            variables: {
                modelSlug,
                username
            }
        });
        if (result?.data?.updateUser) {
            return true;
        }
        return false;
    }

    const changePassword = async (newPassword: string) => {
        const result = await changePasswordMutation({ variables: { username, newPassword } });
        if (result.data) {
            return true;
        }

        return false;
    };

    return <UserContext.Provider value={{
        id,
        username,
        email,
        isAdmin,
        loggedIn,
        likedModels,
        createdModels,
        authenticate,
        authenticateLoading,
        unauthenticate,
        createAccount,
        createAccountLoading,
        likeModel,
        dislikeModel,
        changePassword,
        changePasswordLoading
    }}>{children}</UserContext.Provider>
}