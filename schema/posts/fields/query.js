// Imports
import { GraphQLInt, GraphQLList } from 'graphql';

// App Imports
import PostType from '../type';
import { getAll, getById } from '../resolvers';

// Thoughts All
export const posts = {
  type: new GraphQLList(PostType),
  resolve: getAll,
};

// Thought By ID
export const post = {
  type: PostType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getById,
};
