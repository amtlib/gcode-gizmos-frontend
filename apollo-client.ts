import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client';
import fetch from 'isomorphic-unfetch';

const client = new ApolloClient({
    link: createUploadLink({ fetch, uri: process.env.NEXT_PUBLIC_API_URL, fetchOptions: { credentials: "include"} }),
    cache: new InMemoryCache({
        typePolicies: {
            Model: {
                keyFields: ['id']
            }
        }
    }),
});

export default client;