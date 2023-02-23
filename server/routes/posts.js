import express from 'express';

const router = express.Router();
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js'
//http://localhost:8080/posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);


export default router;
