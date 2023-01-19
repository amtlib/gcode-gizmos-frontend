import { Flex } from "@chakra-ui/react";
import React from "react";
import { BsBox } from "react-icons/bs";

export const Logo = () => {
    return (
        <Flex dir='row' gap={3} align="center"><BsBox /> gcode gizmos</Flex>
    )
}