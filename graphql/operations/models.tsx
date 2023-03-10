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
            createdBy {
                username
            }
            likedBy {
                username
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
            slug
        }
    }
`);