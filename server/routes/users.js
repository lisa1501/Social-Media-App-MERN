import express from 'express';

const router = express.Router();
import { signin, signup } from '../controllers/user.js'
//http://localhost:8080/posts

router.post('/signin', signin);
router.post('/signup', signup);



export default router;