import { HStack, Input } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { ModelContext } from "../../contexts/ModelContext";

const PLACEHOLDER = "find gizmo..."

export const Search = ({ mobile, setMaxW }: { mobile?: boolean; setMaxW?: Dispatch<SetStateAction<string>> }) => {
    const { setSearchQuery } = useContext(ModelContext);
    if (mobile) {
        return (
            <Input type="search" placeholder={PLACEHOLDER} onChange={(e) => setSearchQuery(e.target.value)} />
        )
    }
    return (
        <HStack spacing={8} justify="center" mx="8" flexGrow={1} display={{ base: "none", md: "block" }}>
            <Input rounded={0} type="search" placeholder={PLACEHOLDER} onBlur={() => setMaxW("960px")} onFocus={() => setMaxW("full")} onChange={(e) => setSearchQuery(e.target.value)} />
        </HStack>
    )
}