// src/routes/auth.routes.ts

import express, { RequestHandler } from 'express';
import { signup, login, forgotPassword } from '../controllers/auth.controller';
import { authenticateToken } from '../middlewares/auth.middleware';
import { createPost, getPostsByRestaurant } from '../controllers/post.controller';
import { verifyOwner } from '../middlewares/owner.middleware';
import { updateRestaurant } from '../controllers/restaurant.controller';
import { getUserPosts, getUserProfile, updateUserProfile } from '../controllers/user.controller';
import { resetPassword } from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', signup as RequestHandler); // Sign up
router.post('/login', login as RequestHandler); // Log in
router.post('/forgot-password', forgotPassword as RequestHandler); // Forgot Password
router.post('/reset-password', resetPassword as RequestHandler); // Reset Password
router.post('/posts', authenticateToken, createPost as RequestHandler); // Create Post
router.post('/owner/update-info', authenticateToken, verifyOwner, updateRestaurant); // Update Restaurant info
router.get('/restaurants/:id/posts', getPostsByRestaurant as RequestHandler); // Get reviewed post for each Restaurant
router.get('/users/:id/posts', getUserPosts as RequestHandler);
router.get('/users/:id/profile', getUserProfile as RequestHandler);
router.patch('/users/me', authenticateToken, updateUserProfile as RequestHandler);

export default router;

