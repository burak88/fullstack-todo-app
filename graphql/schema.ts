export const typeDefs = `#graphql 
    type Post {
      id: ID!
      title: String
      content: String
      published: Boolean
    }

  type Query {
    posts: [Post]
  }

  type Mutation {
    addPost (content:String, title:String, published : Boolean) : Post
  }
`;
