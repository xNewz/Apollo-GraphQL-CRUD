import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    _id: ID!
    title: String!
    rating: Float!
    year: Int!
  }

  type Query {
    getMovies: [Movie!]!,
    getMovie(id: ID!): Movie!
  }

  input UpdateMovieInput {
    title: String!
    rating: Float!
    year: Int!
  }

  type Mutation {
    createMovie(title: String!, rating: Float!, year: Int!): Movie!
    deleteMovie(_id: ID!): Movie!
    updateMovie(_id: ID!, input: UpdateMovieInput): Movie!
  }
`;
