// src/routes/auth.routes.ts

import express, { RequestHandler } from 'express';
import { signup, login } from '../controllers/auth.controller';
import { authenticateToken } from '../middlewares/auth.middleware';
import { createPost, getPostsByRestaurant } from '../controllers/post.controller';
import { verifyOwner } from '../middlewares/owner.middleware';
import { updateRestaurant } from '../controllers/restaurant.controller';


const router = express.Router();

router.post('/signup', signup as RequestHandler);
console.log(typeof signup);
router.post('/login', login as RequestHandler);
router.post('/posts', authenticateToken, createPost);
router.post('/owner/update-info', authenticateToken, verifyOwner, updateRestaurant);
router.get('/restaurants/:id/posts', getPostsByRestaurant as RequestHandler);

export default router;

