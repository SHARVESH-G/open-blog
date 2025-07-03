import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'Unknown',
  },
  img: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const Post = mongoose.model('Post', PostSchema);
