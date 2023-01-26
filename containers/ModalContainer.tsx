import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ModalContext } from "../contexts/ModalContext";
import { ModelModal } from "../components/Modal/ModelModal";


export function ModalContainer({ children }) {
    const { isOpen: isModelModalOpen, onOpen: onModelModalOpen, onClose: onModelModalClose } = useDisclosure();
    const [modelDatadata, setModelData] = useState<any>();
    const [modelAction, setModelAction] = useState<"create" | "update" | null>(null);
    const launchModelModal = (action: "create" | "update", data?: any) => {
        setModelData(data);
        setModelAction(action);
        onModelModalOpen();
    }

    return <ModalContext.Provider value={{
        isModelModalOpen,
        launchModelModal,
        onModelModalClose
    }}><>
            {children}
            {isModelModalOpen && <ModelModal action={modelAction} data={modelDatadata} /> }
        </></ModalContext.Provider>
}

