import mongoose, { Schema } from 'mongoose';

const Author = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true
  },
  books: {
    type: [Schema.Types.ObjectId]
  }
});

export default mongoose.model('Author', Author);
