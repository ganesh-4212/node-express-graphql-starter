import { gql } from 'apollo-server-express';
import { BookService, AuthorService } from '../service';

const typeDefs = gql`
  type Book {
    isbn: String
    title: String
    subTitle: String
    description: String
    genre: String
    publishDate: String
    publisher: String
    price: Float
    edition: Int
    copiesSold: Int
    numberOfPages: Int
    url: String
    language: String
    authors: [Author]
  }
  input BookInput {
    isbn: String
    title: String
    subTitle: String
    description: String
    genre: String
    publishDate: String
    publisher: String
    price: Float
    edition: Int
    copiesSold: Int
    numberOfPages: Int
    url: String
    language: String
  }
  extend type Query {
    books: [Book]
    book(isbn: ID!): Book
  }

  extend type Mutation {
    createBook(book: BookInput): Book
  }
`;

const resolvers = {
  Query: {
    books: () => BookService.getAllBooks(),
    book: (_, { isbn }) => BookService.getBookByISBN(isbn)
  },
  Book: {
    authors: book => AuthorService.findByIds(book.authors)
  },
  Mutation: {
    createBook: (_, { book }) => {
      console.log(book);
      return BookService.createBook(book);
    }
  }
};

export { typeDefs, resolvers };
