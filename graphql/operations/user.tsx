import { gql } from '../apolloSchema/gql';

export const Authenticate = gql(`
    mutation Authenticate($username: String!, $password: String!) {
        authenticateUserWithPassword(username: $username, password: $password) {
            ... on UserAuthenticationWithPasswordSuccess {
                sessionToken
                item {
                    id
                    username
                    email
                    isAdmin
                }
            }
        }
    }
`);

export const CheckToken = gql(`
    query CheckToken {
        authenticatedItem {
            ... on User {
                id
                username
                email
                isAdmin
            }
        }
    }
`);

export const EndSession = gql(`
    mutation EndSession {
        endSession
    }
`);

export const CreateUser = gql(`
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
        createUser(data: {username: $username, email: $email, password: $password}) {
            id
        }
    }
`);
