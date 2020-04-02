// Imports
import { GraphQLString, GraphQLInt } from 'graphql';

// App Imports
import PostType from '../type';
import { create, remove } from '../resolvers';

// Thought create
export const postCreate = {
  type: PostType,
  args: {
    post_id: {
      name: 'post_id',
      type: GraphQLString,
    },
    post_title: {
      name: 'post_title',
      type: GraphQLString,
    },
    post: {
      name: 'post',
      type: GraphQLString,
    },
  },
  resolve: create,
};

// Thought remove
export const postRemove = {
  type: PostType,
  args: {
    id: {
      name: 'post_id',
      type: GraphQLInt,
    },
  },
  resolve: remove,
};
