import { gql } from '../apolloSchema/gql';

export const ModelsQuery = gql(`
    query Models {
        models {
            id
            name
            description
            modelImage {
                url
            }
            slug
            doUserLikesIt
        }
    }
`);

export const ModelQuery = gql(`
    query Model($slug: String) {
        model(where: {slug: $slug}) {
            id
            name
            description
            modelImage {
                url
            }
            modelFile {
                url
            }
            createdAt
            createdBy {
                username
            }
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

export const LikeModel = gql(`
    mutation LikeModel($modelSlug: String!, $username: String!) {
        updateModel(where: {slug: $modelSlug}, data: {likedBy: {connect: {username: $username}}}) {
            id
            slug
        }
    }
`);

export const DislikeModel = gql(`
    mutation DislikeModel($modelSlug: String!, $username: String!) {
        updateModel(where: {slug: $modelSlug}, data: {likedBy: {disconnect: {username: $username}}}) {
            id
            slug
        }
    }
`);