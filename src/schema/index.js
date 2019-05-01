import { merge } from 'lodash';
import { makeExecutableSchema, gql } from 'apollo-server-express';
import { typeDefs as Book, resolvers as bookResolvers } from './books';
import { typeDefs as Author, resolvers as authorResolvers } from './author';

const Query = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const typeDefs = [Query, Book, Author];
const resolvers = merge({}, bookResolvers, authorResolvers);

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
