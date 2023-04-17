import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { BsBox } from "react-icons/bs";

export const Logo = () => {
    return (
        <Flex dir='row' gap={3} align="center" mr={2}><Box minW="30px" minH="30px" ml={{ base: 2, xlg: 0 }}><BsBox style={{ width: "100%", height: "100%" }} /></Box> gcode gizmosddd</Flex>
    )
}