import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "../theme/theme";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Head from "next/head";
import { UserContainer } from "../containers/UserContainer";

export default function MyApp({ Component, pageProps }) {
    return (<>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <title>gcode gizmos</title>
        </Head>
        <ApolloProvider client={client}>
            <UserContainer>
                <ChakraProvider theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </UserContainer>
        </ApolloProvider>
    </>);
}