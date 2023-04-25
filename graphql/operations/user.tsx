import { gql } from '../apolloSchema/gql';
const ModelFragment = gql(`
    fragment Model on Model {
        id
        name
        description {
            document
        }
        images {
            image {
                url
            }
        }
        createdBy {
            username
        }
        likedBy {
            username
        }
        slug
        doUserLikesIt
    }
`)
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
                    createdModels {
                        ...Model
                    }
                    likedModels {
                        ...Model
                    }
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
                createdModels {
                    ...Model
                }
                likedModels {
                    ...Model
                }
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

export const ChangePassword = gql(`
    mutation ChangePassword($username: String!, $newPassword: String!) {
        updateUser(where: {username: $username}, data: {password: $newPassword}) {
            id
        }
    }
`);

export const LikeModel = gql(`
    mutation LikeModel($modelSlug: String!, $username: String!) {
        updateUser(where: {username: $username}, data: {likedModels: {connect: {slug: $modelSlug}}}) {
            id
        }
    }
`);

export const DislikeModel = gql(`
    mutation DislikeModel($modelSlug: String!, $username: String!) {
        updateUser(where: {username: $username}, data: {likedModels: {disconnect: {slug: $modelSlug}}}) {
            id
        }
    }
`);

export const LikedModels = gql(`
    query LikedModels($username: String!) {
        models(where: {likedBy: {some: {username: {equals: $username}}}}) {
            id
            name
        }
    }
`)
