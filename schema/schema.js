import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    courses: [Course!]!
    course(id: ID!): Course
    genres: [Genre!]!
    genre(id: ID!): Genre
  }

  type Course {
    id: ID!
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: Genre
  }

  type Genre {
    id: ID!
    name: String!
    courses: [Course!]!
  }
`;
