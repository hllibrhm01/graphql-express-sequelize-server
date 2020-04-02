// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

// Thought type
const PostType = new GraphQLObjectType({
  name: 'post',
  description: '...',

  fields: () => ({
    post_id: { type: GraphQLInt },
    post_title: { type: GraphQLString },
    post: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

export default PostType;
