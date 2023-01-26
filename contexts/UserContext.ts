import { createContext } from "react";
import { ModelType } from "./ModelContext";

export type UserContextType = {
    id?: string;
    loggedIn: boolean;
    username?: string;
    email?: string;
    isAdmin?: boolean;
    authenticate: (username?: string, password?: string) => Promise<Boolean>;
    unauthenticate: () => void;
    createAccount: (username: string, email: string, password: string) => Promise<Boolean>;
    likeModel: (modelSlug: string, username: string) => Promise<boolean>;
    dislikeModel: (modelSlug: string, username: string) => Promise<boolean>;
    changePassword: (newPassword: string) => Promise<boolean>;
    changePasswordLoading: boolean;
    createAccountLoading: boolean;
    authenticateLoading: boolean;
    likedModels: ModelType[];
    createdModels: ModelType[];
};

export const UserContext = createContext<UserContextType>({
    loggedIn: false,
    authenticate: () => Promise.resolve(false),
    unauthenticate: () => {},
    createAccount: () => Promise.resolve(false),
    likeModel: () => Promise.resolve(false),
    dislikeModel: () => Promise.resolve(false),
    changePassword: () => Promise.resolve(false),
    changePasswordLoading: false,
    createAccountLoading: false,
    authenticateLoading: false,
    createdModels: [],
    likedModels: []
});
