import { Box } from "@chakra-ui/layout";
import React, { ComponentPropsWithRef } from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const BaseLayout = ({ children, withSearch, ...rest }: {children: React.ReactNode; withSearch?: boolean } & ComponentPropsWithRef<typeof Box>) => {
    return (
        <>
            <Header withSearch={withSearch} />
            <Box py={4} px={{base: 4, xlg: 0}} maxW="960px" as="main" mx="auto" minH={{ base: "calc(100vh - 165px)", xsm: "calc(100vh - 130px)"}} {...rest}>
                {children}
            </Box>
            <Footer />
        </>
    )
}