import { Grid as ChakraGrid } from "@chakra-ui/layout";
import React from "react";

export const Grid = ({ children }) => {
    return (
        <ChakraGrid templateColumns={{base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)'}} gap={6} pr="6px">
            {children}
        </ChakraGrid>
    )
}