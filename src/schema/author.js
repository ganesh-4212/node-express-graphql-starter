import { gql } from 'apollo-server-express';
import { AuthorService } from '../service';

const typeDefs = gql`
  type Author {
    _id: ID
    name: String
    email: String
    url: String
    books: [Book]
  }
  input AuthorInput {
    name: String
    email: String
    url: String
    books: [BookInput]
  }
  extend type Query {
    authors: [Author]
    author(id: ID!): Author
  }

  extend type Mutation {
    author(author: AuthorInput): Author
    updateAuthor(id: ID!, author: AuthorInput): Author
  }
`;

const resolvers = {
  Query: {
    authors: () => AuthorService.getAll(),
    author: (_, { id }) => AuthorService.getById(id)
  },
  Author: {
    books: author => AuthorService.findByIds(author.books)
  },
  Mutation: {
    author: (_, { author }) => AuthorService.createAuthor(author),
    updateAuthor: (_, { id, author }) => AuthorService.updateAuthor(id, author)
  }
};

export { typeDefs, resolvers };
