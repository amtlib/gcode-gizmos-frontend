import { CodegenConfig } from '@graphql-codegen/cli';
import { API_URL } from './config';

const config: CodegenConfig = {
  schema: API_URL,
  documents: ['./**/*.tsx'],
  generates: {
    './graphql/apolloSchema/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;