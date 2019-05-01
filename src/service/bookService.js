import { Book } from '../models';

export function getBook(id) {
  return Book.findById(id).exec();
}

export function getBookByISBN(isbn) {
  return Book.findOne({ isbn }).exec();
}

export function createBook(book) {
  return Book.create(book);
}

export function getAllBooks() {
  return Book.find().exec();
}

export function findByIds(ids) {
  return Book.find({
    _id: {
      $in: ids
    }
  }).exec();
}
