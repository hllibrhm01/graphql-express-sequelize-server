import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Post {
    post_id: String
    post_title: String
    post: String
  }
  type Query {
    getPosts: [Post]
    getPostInfo(id: String!): Post
  }
`);
/*
  type Mutation {
    createPost(post_id: ID!, post_title:String!, post: String!, post_date: Date!): Post!
    updatePost(id: ID!, post_title: String, post:String!): Boolean
    deletePost(id: ID!): Boolean
  }
  */
