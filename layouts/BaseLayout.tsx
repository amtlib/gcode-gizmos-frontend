import { Box } from "@chakra-ui/layout";
import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";


export const BaseLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Box py={4} px={{base: 4, xlg: 0}} maxW="960px" as="main" mx="auto" >
                {children}
            </Box>
            <Footer />
        </>
    )
}