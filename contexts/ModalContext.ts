import { createContext } from "react";

export type ModalContextType = {
    isModelModalOpen: boolean;
    launchModelModal: (action: "create" | "update", data?: any) => void,
    onModelModalClose: () => void;
};

export const ModalContext = createContext<ModalContextType>({
    isModelModalOpen: false,
    launchModelModal: () => {},
    onModelModalClose: () => {},
});
