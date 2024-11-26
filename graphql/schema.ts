
export const typeDefs = `#graphql 
  scalar Date
  scalar Time
  scalar DateTime

  type User {
  id: ID!
  email: String!
  name: String
  workspaces: [Workspace!]!
  todos: [Todo!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Workspace {
  id: ID!
  name: String!
  description: String
  userId: ID!
  todos: [Todo!]!
  categories: [Category!]!
  tags: [Tag!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Todo {
  id: ID!
  title: String!
  description: String
  completed: Boolean!
  priority: Int
  dueDate: DateTime
  user: User!
  workspace: Workspace!
  category: Category
  tags: [Tag!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Category {
  id: ID!
  name: String!
  workspace: Workspace!
  todos: [Todo!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Tag {
  id: ID!
  name: String!
  workspace: Workspace!
  todos: [Todo!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Query {
  users: [User!]!
  user(id: ID!): User
  workspaces: [Workspace!]!
  workspace(id: ID!): Workspace
  todos: [Todo!]!
  todo(id: ID!): Todo
  categories: [Category!]!
  category(id: ID!): Category
  tags: [Tag!]!
  tag(id: ID!): Tag
}

type Mutation {
  createUser(email: String!, password: String!, name: String): User!
  updateUser(id: ID!, email: String, name: String): User!
  deleteUser(id: ID!): User!

  createWorkspace(name: String!, description: String, userId: ID!): Workspace!
  updateWorkspace(id: ID!, name: String, description: String): Workspace!
  deleteWorkspace(id: ID!): Workspace!

  createTodo(
    title: String!
    description: String
    completed: Boolean
    priority: Int
    dueDate: DateTime
    userId: ID!
    workspaceId: ID!
    categoryId: ID
  ): Todo!
  updateTodo(
    id: ID!
    title: String
    description: String
    completed: Boolean
    priority: Int
    dueDate: DateTime
    categoryId: ID
  ): Todo!
  deleteTodo(id: ID!): Todo!

  createCategory(name: String!, workspaceId: ID!): Category!
  updateCategory(id: ID!, name: String!): Category!
  deleteCategory(id: ID!): Category!

  createTag(name: String!, workspaceId: ID!): Tag!
  updateTag(id: ID!, name: String!): Tag!
  deleteTag(id: ID!): Tag!
}
`;
