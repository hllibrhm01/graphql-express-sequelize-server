// Imports
import { GraphQLObjectType } from 'graphql';

// App Imports
import * as post from './posts/fields/query';

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...post,
  }),
});

export default query;
