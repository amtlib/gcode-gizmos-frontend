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
};

export const UserContext = createContext<UserContextType>({
    loggedIn: false,
    loading: false,
    authenticate: () => Promise.resolve(false),
    unauthenticate: () => {},
});
