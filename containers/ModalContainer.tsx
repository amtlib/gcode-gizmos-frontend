import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ModalContext } from "../contexts/ModalContext";


export function ModalContainer({ children }) {
    const { isOpen: isCreateModelModalOpen, onOpen: onCreateModelModalOpen, onClose: onCreateModelModalClose } = useDisclosure();

    return <ModalContext.Provider value={{
        isCreateModelModalOpen,
        onCreateModelModalOpen,
        onCreateModelModalClose
    }}>{children}</ModalContext.Provider>
}

