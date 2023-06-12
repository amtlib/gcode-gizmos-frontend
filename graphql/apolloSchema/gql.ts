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
    "\n    query Models($query: String) {\n        models(where: {name: {contains: $query, mode: insensitive}}) {\n            id\n            name\n            description {\n                document\n            }\n            images {\n                id\n                image {\n                    url\n                }\n            }\n            files {\n                id\n                file {\n                    url\n                }\n            }\n            createdBy {\n                username\n            }\n            likedBy {\n                username\n            }\n            ratingsAvg\n            userRating\n            slug\n            doUserLikesIt\n            recommendedInfill\n            recommendedMaterial\n            supports\n        }\n    }\n": types.ModelsDocument,
    "\n    query Model($slug: String) {\n        model(where: {slug: $slug}) {\n            id\n            name\n            description {\n                document\n            }\n            images {\n                id\n                image {\n                    url\n                }\n            }\n            files {\n                id\n                file {\n                    url\n                }\n            }\n            comments {\n                author {\n                    username\n                }\n                content {\n                    document\n                }\n                createdAt\n            }\n            createdAt\n            createdBy {\n                username\n            }\n            ratingsAvg\n            userRating\n            likedByCount\n            doUserLikesIt\n            recommendedInfill\n            recommendedMaterial\n            supports\n        }\n    }\n": types.ModelDocument,
    "\n    mutation CreateModel($data: ModelCreateInput!) {\n        createModel(data: $data) {\n            id\n            slug\n        }\n    }\n": types.CreateModelDocument,
    "\n    mutation UpdateModel($slug: String, $data: ModelUpdateInput!) {\n        updateModel(where: {slug: $slug}, data: $data) {\n            id\n            slug\n        }\n    }\n": types.UpdateModelDocument,
    "\n    mutation DeleteModel($slug: String!) {\n        deleteModel(where: {slug: $slug}) {\n            id\n            slug\n        }\n    }\n": types.DeleteModelDocument,
    "\n    mutation CreateComment($data: CommentCreateInput!) {\n        createComment(data: $data) {\n            id\n        }\n    }\n": types.CreateCommentDocument,
    "\n    mutation RateModel($slug: String!, $score: Int!) {\n        rateModel(score: $score, modelSlug: $slug)\n    }\n": types.RateModelDocument,
    "\n    fragment Model on Model {\n        id\n        name\n        description {\n            document\n        }\n        images {\n            image {\n                url\n            }\n        }\n        createdBy {\n            username\n        }\n        likedBy {\n            username\n        }\n        slug\n        doUserLikesIt\n    }\n": types.ModelFragmentDoc,
    "\n    mutation Authenticate($username: String!, $password: String!) {\n        authenticateUserWithPassword(username: $username, password: $password) {\n            ... on UserAuthenticationWithPasswordSuccess {\n                sessionToken\n                item {\n                    id\n                    username\n                    email\n                    isAdmin\n                    createdModels {\n                        ...Model\n                    }\n                    likedModels {\n                        ...Model\n                    }\n                }\n            }\n        }\n    }\n": types.AuthenticateDocument,
    "\n    query CheckToken {\n        authenticatedItem {\n            ... on User {\n                id\n                username\n                email\n                isAdmin\n                createdModels {\n                    ...Model\n                }\n                likedModels {\n                    ...Model\n                }\n            }\n        }\n    }\n": types.CheckTokenDocument,
    "\n    mutation EndSession {\n        endSession\n    }\n": types.EndSessionDocument,
    "\n    mutation CreateUser($username: String!, $email: String!, $password: String!) {\n        createUser(data: {username: $username, email: $email, password: $password}) {\n            id\n        }\n    }\n": types.CreateUserDocument,
    "\n    mutation ChangePassword($username: String!, $newPassword: String!) {\n        updateUser(where: {username: $username}, data: {password: $newPassword}) {\n            id\n        }\n    }\n": types.ChangePasswordDocument,
    "\n    mutation LikeModel($modelSlug: String!, $username: String!) {\n        updateUser(where: {username: $username}, data: {likedModels: {connect: {slug: $modelSlug}}}) {\n            id\n        }\n    }\n": types.LikeModelDocument,
    "\n    mutation DislikeModel($modelSlug: String!, $username: String!) {\n        updateUser(where: {username: $username}, data: {likedModels: {disconnect: {slug: $modelSlug}}}) {\n            id\n        }\n    }\n": types.DislikeModelDocument,
    "\n    query LikedModels($username: String!) {\n        models(where: {likedBy: {some: {username: {equals: $username}}}}) {\n            id\n            name\n        }\n    }\n": types.LikedModelsDocument,
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
export function gql(source: "\n    query Models($query: String) {\n        models(where: {name: {contains: $query, mode: insensitive}}) {\n            id\n            name\n            description {\n                document\n            }\n            images {\n                id\n                image {\n                    url\n                }\n            }\n            files {\n                id\n                file {\n                    url\n                }\n            }\n            createdBy {\n                username\n            }\n            likedBy {\n                username\n            }\n            ratingsAvg\n            userRating\n            slug\n            doUserLikesIt\n            recommendedInfill\n            recommendedMaterial\n            supports\n        }\n    }\n"): (typeof documents)["\n    query Models($query: String) {\n        models(where: {name: {contains: $query, mode: insensitive}}) {\n            id\n            name\n            description {\n                document\n            }\n            images {\n                id\n                image {\n                    url\n                }\n            }\n            files {\n                id\n                file {\n                    url\n                }\n            }\n            createdBy {\n                username\n            }\n            likedBy {\n                username\n            }\n            ratingsAvg\n            userRating\n            slug\n            doUserLikesIt\n            recommendedInfill\n            recommendedMaterial\n            supports\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Model($slug: String) {\n        model(where: {slug: $slug}) {\n            id\n            name\n            description {\n                document\n            }\n            images {\n                id\n                image {\n                    url\n                }\n            }\n            files {\n                id\n                file {\n                    url\n                }\n            }\n            comments {\n                author {\n                    username\n                }\n                content {\n                    document\n                }\n                createdAt\n            }\n            createdAt\n            createdBy {\n                username\n            }\n            ratingsAvg\n            userRating\n            likedByCount\n            doUserLikesIt\n            recommendedInfill\n            recommendedMaterial\n            supports\n        }\n    }\n"): (typeof documents)["\n    query Model($slug: String) {\n        model(where: {slug: $slug}) {\n            id\n            name\n            description {\n                document\n            }\n            images {\n                id\n                image {\n                    url\n                }\n            }\n            files {\n                id\n                file {\n                    url\n                }\n            }\n            comments {\n                author {\n                    username\n                }\n                content {\n                    document\n                }\n                createdAt\n            }\n            createdAt\n            createdBy {\n                username\n            }\n            ratingsAvg\n            userRating\n            likedByCount\n            doUserLikesIt\n            recommendedInfill\n            recommendedMaterial\n            supports\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateModel($data: ModelCreateInput!) {\n        createModel(data: $data) {\n            id\n            slug\n        }\n    }\n"): (typeof documents)["\n    mutation CreateModel($data: ModelCreateInput!) {\n        createModel(data: $data) {\n            id\n            slug\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateModel($slug: String, $data: ModelUpdateInput!) {\n        updateModel(where: {slug: $slug}, data: $data) {\n            id\n            slug\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateModel($slug: String, $data: ModelUpdateInput!) {\n        updateModel(where: {slug: $slug}, data: $data) {\n            id\n            slug\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteModel($slug: String!) {\n        deleteModel(where: {slug: $slug}) {\n            id\n            slug\n        }\n    }\n"): (typeof documents)["\n    mutation DeleteModel($slug: String!) {\n        deleteModel(where: {slug: $slug}) {\n            id\n            slug\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateComment($data: CommentCreateInput!) {\n        createComment(data: $data) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateComment($data: CommentCreateInput!) {\n        createComment(data: $data) {\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation RateModel($slug: String!, $score: Int!) {\n        rateModel(score: $score, modelSlug: $slug)\n    }\n"): (typeof documents)["\n    mutation RateModel($slug: String!, $score: Int!) {\n        rateModel(score: $score, modelSlug: $slug)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment Model on Model {\n        id\n        name\n        description {\n            document\n        }\n        images {\n            image {\n                url\n            }\n        }\n        createdBy {\n            username\n        }\n        likedBy {\n            username\n        }\n        slug\n        doUserLikesIt\n    }\n"): (typeof documents)["\n    fragment Model on Model {\n        id\n        name\n        description {\n            document\n        }\n        images {\n            image {\n                url\n            }\n        }\n        createdBy {\n            username\n        }\n        likedBy {\n            username\n        }\n        slug\n        doUserLikesIt\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Authenticate($username: String!, $password: String!) {\n        authenticateUserWithPassword(username: $username, password: $password) {\n            ... on UserAuthenticationWithPasswordSuccess {\n                sessionToken\n                item {\n                    id\n                    username\n                    email\n                    isAdmin\n                    createdModels {\n                        ...Model\n                    }\n                    likedModels {\n                        ...Model\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation Authenticate($username: String!, $password: String!) {\n        authenticateUserWithPassword(username: $username, password: $password) {\n            ... on UserAuthenticationWithPasswordSuccess {\n                sessionToken\n                item {\n                    id\n                    username\n                    email\n                    isAdmin\n                    createdModels {\n                        ...Model\n                    }\n                    likedModels {\n                        ...Model\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query CheckToken {\n        authenticatedItem {\n            ... on User {\n                id\n                username\n                email\n                isAdmin\n                createdModels {\n                    ...Model\n                }\n                likedModels {\n                    ...Model\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query CheckToken {\n        authenticatedItem {\n            ... on User {\n                id\n                username\n                email\n                isAdmin\n                createdModels {\n                    ...Model\n                }\n                likedModels {\n                    ...Model\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation EndSession {\n        endSession\n    }\n"): (typeof documents)["\n    mutation EndSession {\n        endSession\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateUser($username: String!, $email: String!, $password: String!) {\n        createUser(data: {username: $username, email: $email, password: $password}) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateUser($username: String!, $email: String!, $password: String!) {\n        createUser(data: {username: $username, email: $email, password: $password}) {\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation ChangePassword($username: String!, $newPassword: String!) {\n        updateUser(where: {username: $username}, data: {password: $newPassword}) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation ChangePassword($username: String!, $newPassword: String!) {\n        updateUser(where: {username: $username}, data: {password: $newPassword}) {\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation LikeModel($modelSlug: String!, $username: String!) {\n        updateUser(where: {username: $username}, data: {likedModels: {connect: {slug: $modelSlug}}}) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation LikeModel($modelSlug: String!, $username: String!) {\n        updateUser(where: {username: $username}, data: {likedModels: {connect: {slug: $modelSlug}}}) {\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DislikeModel($modelSlug: String!, $username: String!) {\n        updateUser(where: {username: $username}, data: {likedModels: {disconnect: {slug: $modelSlug}}}) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation DislikeModel($modelSlug: String!, $username: String!) {\n        updateUser(where: {username: $username}, data: {likedModels: {disconnect: {slug: $modelSlug}}}) {\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query LikedModels($username: String!) {\n        models(where: {likedBy: {some: {username: {equals: $username}}}}) {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query LikedModels($username: String!) {\n        models(where: {likedBy: {some: {username: {equals: $username}}}}) {\n            id\n            name\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;