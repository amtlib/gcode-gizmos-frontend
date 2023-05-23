import { gql } from '../apolloSchema/gql';

export const ModelsQuery = gql(`
    query Models($query: String) {
        models(where: {name: {contains: $query, mode: insensitive}}) {
            id
            name
            description {
                document
            }
            images {
                id
                image {
                    url
                }
            }
            files {
                id
                file {
                    url
                }
            }
            createdBy {
                username
            }
            likedBy {
                username
            }
            ratingsAvg
            userRating
            slug
            doUserLikesIt
            recommendedInfill
            recommendedMaterial
            supports
        }
    }
`);

export const ModelQuery = gql(`
    query Model($slug: String) {
        model(where: {slug: $slug}) {
            id
            name
            description {
                document
            }
            images {
                id
                image {
                    url
                }
            }
            files {
                id
                file {
                    url
                }
            }
            comments {
                author {
                    username
                }
                content {
                    document
                }
                createdAt
            }
            createdAt
            createdBy {
                username
            }
            ratingsAvg
            userRating
            likedByCount
            doUserLikesIt
            recommendedInfill
            recommendedMaterial
            supports
        }
    }
`);

export const CreateModel = gql(`
    mutation CreateModel($data: ModelCreateInput!) {
        createModel(data: $data) {
            id
            slug
        }
    }
`);

export const UpdateModel = gql(`
    mutation UpdateModel($slug: String, $data: ModelUpdateInput!) {
        updateModel(where: {slug: $slug}, data: $data) {
            id
            slug
        }
    }
`);


export const DeleteModel = gql(`
    mutation DeleteModel($slug: String!) {
        deleteModel(where: {slug: $slug}) {
            id
            slug
        }
    }
`);

export const CreateComment = gql(`
    mutation CreateComment($data: CommentCreateInput!) {
        createComment(data: $data) {
            id
        }
    }
`)