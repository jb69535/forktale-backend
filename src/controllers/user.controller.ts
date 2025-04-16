// src/controllers/user.controller.ts

import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const getUserPosts = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({ message: 'Invalid user ID.' });
  }

  try {
    const posts = await prisma.posts.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
      include: {
        restaurants: {
          select: {
            id: true,
            name: true,
            category: true,
            city: true,
          },
        },
      },
    });

    res.status(200).json({ posts });
  } catch (error) {
    console.error('Get User Posts Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
  
    if (isNaN(userId)) {
      res.status(400).json({ message: 'Invalid user ID.' });
    }
  
    try {
      const user = await prisma.users.findUnique({
        where: { id: userId },
        select: {
          id: true,
          username: true,
          tier: true,
          profile_image_url: true,
          created_at: true,
        },
      });
  
      if (!user) {
        res.status(404).json({ message: 'User not found.' });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      console.error('Get User Profile Error:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  };
