import { Author } from '../models';

export function getById(id) {
  return Author.findById(id).exec();
}

export function getAll() {
  return Author.find().exec();
}

export function createAuthor(authorDoc) {
  return Author.create(authorDoc);
}

export function findByIds(ids) {
  return Author.find({
    _id: {
      $in: ids
    }
  }).exec();
}

export function updateAuthor(id, author) {
  return Author.findByIdAndUpdate(id, author, { new: true }).exec();
}
