import { Box } from "@chakra-ui/layout";
import React, { ComponentPropsWithRef } from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";


export const BaseLayout = ({ children, ...rest }: {children: React.ReactNode } & ComponentPropsWithRef<typeof Box>) => {
    return (
        <>
            <Header />
            <Box py={4} px={{base: 4, xlg: 0}} maxW="960px" as="main" mx="auto" minH={{ base: "calc(100vh - 165px)", xsm: "calc(100vh - 130px)"}} {...rest}>
                {children}
            </Box>
            <Footer />
        </>
    )
}