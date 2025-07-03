// src/controllers/postController.js
import { Post } from '../models/Post.js';

export const createPost = async (req, res) => {
  try {
    const { title, author, imgBase64, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and Description are required' });
    }

    const newPost = new Post({
      title,
      author,
      img: imgBase64,
      description,
    });

    await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    res.status(200).json(post);
  } catch (err) {
    console.error('Error fetching post by ID:', err);
    res.status(500).json({ error: 'Server error' });
  }
};


export const deletePostById = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error('Error deleting post by ID:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

