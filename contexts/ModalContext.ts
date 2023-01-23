import { createContext } from "react";

export type ModalContextType = {
    isCreateModelModalOpen: boolean;
    onCreateModelModalOpen: () => void;
    onCreateModelModalClose: () => void;
};

export const ModalContext = createContext<ModalContextType>({
    isCreateModelModalOpen: false,
    onCreateModelModalOpen: () => {},
    onCreateModelModalClose: () => {},
});
