// src/routes/auth.routes.ts

import express from 'express';
import { signup, login } from '../controllers/auth.controller';
import { authenticateToken } from '../middlewares/auth.middleware';
import { createPost, getPostsByRestaurant } from '../controllers/post.controller';
import { verifyOwner } from '../middlewares/owner.middleware';
import { updateRestaurant } from '../controllers/restaurant.controller';
import { getUserPosts } from '../controllers/user.controller';


const router = express.Router();

router.post('/signup', signup);
console.log(typeof signup);
router.post('/login', login);
router.post('/posts', authenticateToken, createPost);
router.post('/owner/update-info', authenticateToken, verifyOwner, updateRestaurant);
router.get('/restaurants/:id/posts', getPostsByRestaurant);
router.get('/users/:id/posts', getUserPosts);

export default router;

