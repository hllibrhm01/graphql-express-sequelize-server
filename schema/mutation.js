// Imports
import { GraphQLObjectType } from 'graphql';

// App Imports
import * as post from './posts/fields/mutations';

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...post,
  },
});

export default mutation;
