import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    courses(filter: CoursesFilter): [Course!]!
    course(id: ID!): Course    
    genres: [Genre!]!
    genre(id: ID!): Genre
    reviews: [Review!]!
  }

  input CoursesFilter {
    discount: Boolean
  }

  type Course {
    id: ID!
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: Genre
    reviews: [Review!]!
  }

  type Genre {
    id: ID!
    name: String!
    courses: [Course!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
`;
