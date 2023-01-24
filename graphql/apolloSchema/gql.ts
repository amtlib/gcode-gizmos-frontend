/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n    query Models {\n        models {\n            id\n            name\n            description\n            modelImage {\n                url\n            }\n            slug\n            doUserLikesIt\n        }\n    }\n": types.ModelsDocument,
    "\n    query Model($slug: String) {\n        model(where: {slug: $slug}) {\n            id\n            name\n            description\n            modelImage {\n                url\n            }\n            modelFile {\n                url\n            }\n            createdAt\n            createdBy {\n                username\n            }\n            likedByCount\n            doUserLikesIt\n            recommendedInfill\n            recommendedMaterial\n            supports\n        }\n    }\n": types.ModelDocument,
    "\n    mutation CreateModel($data: ModelCreateInput!) {\n        createModel(data: $data) {\n            id\n            slug\n        }\n    }\n": types.CreateModelDocument,
    "\n    mutation LikeModel($modelSlug: String!, $username: String!) {\n        updateModel(where: {slug: $modelSlug}, data: {likedBy: {connect: {username: $username}}}) {\n            id\n            slug\n        }\n    }\n": types.LikeModelDocument,
    "\n    mutation DislikeModel($modelSlug: String!, $username: String!) {\n        updateModel(where: {slug: $modelSlug}, data: {likedBy: {disconnect: {username: $username}}}) {\n            id\n            slug\n        }\n    }\n": types.DislikeModelDocument,
    "\n    mutation Authenticate($username: String!, $password: String!) {\n        authenticateUserWithPassword(username: $username, password: $password) {\n            ... on UserAuthenticationWithPasswordSuccess {\n                sessionToken\n                item {\n                    id\n                    username\n                    email\n                    isAdmin\n                }\n            }\n        }\n    }\n": types.AuthenticateDocument,
    "\n    query CheckToken {\n        authenticatedItem {\n            ... on User {\n                id\n                username\n                email\n                isAdmin\n            }\n        }\n    }\n": types.CheckTokenDocument,
    "\n    mutation EndSession {\n        endSession\n    }\n": types.EndSessionDocument,
    "\n    mutation CreateUser($username: String!, $email: String!, $password: String!) {\n        createUser(data: {username: $username, email: $email, password: $password}) {\n            id\n        }\n    }\n": types.CreateUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Models {\n        models {\n            id\n            name\n            description\n            modelImage {\n                url\n            }\n            slug\n            doUserLikesIt\n        }\n    }\n"): (typeof documents)["\n    query Models {\n        models {\n            id\n            name\n            description\n            modelImage {\n                url\n            }\n            slug\n            doUserLikesIt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Model($slug: String) {\n        model(where: {slug: $slug}) {\n            id\n            name\n            description\n            modelImage {\n                url\n            }\n            modelFile {\n                url\n            }\n            createdAt\n            createdBy {\n                username\n            }\n            likedByCount\n            doUserLikesIt\n            recommendedInfill\n            recommendedMaterial\n            supports\n        }\n    }\n"): (typeof documents)["\n    query Model($slug: String) {\n        model(where: {slug: $slug}) {\n            id\n            name\n            description\n            modelImage {\n                url\n            }\n            modelFile {\n                url\n            }\n            createdAt\n            createdBy {\n                username\n            }\n            likedByCount\n            doUserLikesIt\n            recommendedInfill\n            recommendedMaterial\n            supports\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateModel($data: ModelCreateInput!) {\n        createModel(data: $data) {\n            id\n            slug\n        }\n    }\n"): (typeof documents)["\n    mutation CreateModel($data: ModelCreateInput!) {\n        createModel(data: $data) {\n            id\n            slug\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation LikeModel($modelSlug: String!, $username: String!) {\n        updateModel(where: {slug: $modelSlug}, data: {likedBy: {connect: {username: $username}}}) {\n            id\n            slug\n        }\n    }\n"): (typeof documents)["\n    mutation LikeModel($modelSlug: String!, $username: String!) {\n        updateModel(where: {slug: $modelSlug}, data: {likedBy: {connect: {username: $username}}}) {\n            id\n            slug\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DislikeModel($modelSlug: String!, $username: String!) {\n        updateModel(where: {slug: $modelSlug}, data: {likedBy: {disconnect: {username: $username}}}) {\n            id\n            slug\n        }\n    }\n"): (typeof documents)["\n    mutation DislikeModel($modelSlug: String!, $username: String!) {\n        updateModel(where: {slug: $modelSlug}, data: {likedBy: {disconnect: {username: $username}}}) {\n            id\n            slug\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Authenticate($username: String!, $password: String!) {\n        authenticateUserWithPassword(username: $username, password: $password) {\n            ... on UserAuthenticationWithPasswordSuccess {\n                sessionToken\n                item {\n                    id\n                    username\n                    email\n                    isAdmin\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation Authenticate($username: String!, $password: String!) {\n        authenticateUserWithPassword(username: $username, password: $password) {\n            ... on UserAuthenticationWithPasswordSuccess {\n                sessionToken\n                item {\n                    id\n                    username\n                    email\n                    isAdmin\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query CheckToken {\n        authenticatedItem {\n            ... on User {\n                id\n                username\n                email\n                isAdmin\n            }\n        }\n    }\n"): (typeof documents)["\n    query CheckToken {\n        authenticatedItem {\n            ... on User {\n                id\n                username\n                email\n                isAdmin\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation EndSession {\n        endSession\n    }\n"): (typeof documents)["\n    mutation EndSession {\n        endSession\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateUser($username: String!, $email: String!, $password: String!) {\n        createUser(data: {username: $username, email: $email, password: $password}) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateUser($username: String!, $email: String!, $password: String!) {\n        createUser(data: {username: $username, email: $email, password: $password}) {\n            id\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;