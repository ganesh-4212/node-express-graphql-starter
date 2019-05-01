import mongoose, { Schema } from 'mongoose';

const Book = new Schema({
  isbn: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  publishDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  edition: {
    type: Number,
    required: true,
    default: 1
  },
  copiesSold: {
    type: Number,
    required: true,
    default: 0
  },
  numberOfPages: {
    type: Number,
    required: true,
    default: 0
  },
  url: {
    type: String
  },
  language: {
    type: String,
    required: true
  },
  authors: {
    type: [Schema.Types.ObjectId]
  }
});

export default mongoose.model('Book', Book);
