import { createContext } from "react";

export type UserContextType = {
    id?: string;
    loggedIn: boolean;
    loading: boolean;
    username?: string;
    email?: string;
    isAdmin?: boolean;
    authenticate: (username?: string, password?: string) => Promise<Boolean>;
    unauthenticate: () => void;
    createAccount: (username: string, email: string, password: string) => Promise<Boolean>
};

export const UserContext = createContext<UserContextType>({
    loggedIn: false,
    loading: false,
    authenticate: () => Promise.resolve(false),
    unauthenticate: () => {},
    createAccount: () => Promise.resolve(false)
});
