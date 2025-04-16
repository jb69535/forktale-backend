// src/controllers/post.controller.ts

import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const createPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { restaurant_id, rating, photo_url, caption, language = 'ko' } = req.body;
    const user = (req as any).user;

    // Input validation
    if (!restaurant_id || !rating || !photo_url) {
      res.status(400).json({ message: 'restaurant_id, rating, and photo_url are required.' });
      return;
    }

    if (rating < 0.5 || rating > 5.0) {
      res.status(400).json({ message: 'Rating must be between 0.5 and 5.0' });
      return;
    }

    const post = await prisma.posts.create({
      data: {
        user_id: user.id,
        restaurant_id,
        rating,
        photo_url,
        caption,
        language,
      },
    });

    res.status(201).json({
      message: 'Post created successfully!',
      post,
    });
  } catch (error) {
    console.error('Create Post Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const getPostsByRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurantId = parseInt(req.params.id);

    if (isNaN(restaurantId)) {
      res.status(400).json({ message: 'Invalid restaurant ID' });
      return;
    }

    const posts = await prisma.posts.findMany({
      where: {
        restaurant_id: restaurantId,
        is_visible: true,
      },
      include: {
        users: {
          select: {
            id: true,
            username: true,
            tier: true,
            profile_image_url: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    res.status(200).json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};