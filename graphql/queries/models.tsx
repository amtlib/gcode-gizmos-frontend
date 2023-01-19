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
            
        }
    }
`);
