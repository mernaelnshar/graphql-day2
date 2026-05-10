import { gql } from "apollo-server-express";

const typeDefs = gql`

  type User {
    id: ID!
    name: String
    email: String
  }

  type Post {
    id: ID!
    title: String
    content: String
    userId: ID
  }

  type Comment {
    id: ID!
    text: String
    userId: ID
    postId: ID
  }

  type Query {
    getAllUsers: [User]
    getAllPosts: [Post]
    getAllComments: [Comment]
  }

  type Mutation {

    # USER
    addUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): String

    # POST
    addPost(title: String!, content: String!, userId: ID!): Post
    updatePost(id: ID!, title: String, content: String): Post
    deletePost(id: ID!): String

    # COMMENT
    addComment(text: String!, userId: ID!, postId: ID!): Comment
    updateComment(id: ID!, text: String): Comment
    deleteComment(id: ID!): String
  }

`;

export default typeDefs;