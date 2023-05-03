import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client';
import fetch from 'isomorphic-unfetch';
import { API_URL } from "./config";

const client = new ApolloClient({
    link: createUploadLink({ fetch, uri: API_URL, fetchOptions: { credentials: "include"} }),
    cache: new InMemoryCache({
        typePolicies: {
            Model: {
                keyFields: ['id', 'slug']
            }
        }
    }),
});

export default client;