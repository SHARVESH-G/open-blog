// src/routes/postRoutes.js
import express from 'express';
import { createPost, getAllPosts , getPostById  ,deletePostById } from '../controllers/postController.js';

const router = express.Router();

router.post('/newpost', createPost);
router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);
router.delete('/posts/:id', deletePostById);

export default router;
