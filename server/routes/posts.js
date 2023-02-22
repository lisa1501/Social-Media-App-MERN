import express from 'express';

const router = express.Router();
import { getPosts, createPost} from '../controllers/posts.js'
//http://localhost:8080/posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;