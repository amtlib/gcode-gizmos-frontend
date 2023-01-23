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
        }
    }
`);

export const ModelQuery = gql(`
    query Model($slug: String) {
        model(where: {slug: $slug}) {
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
            slug
        }
    }
`);