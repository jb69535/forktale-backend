// src/controllers/auth.controller.ts

import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../config/prisma';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Make sure you load .env!

export const signup = async (req: Request, res: Response) => { // Signup
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      res.status(400).json({ message: 'All fields are required.' });
      return;
    }

    const existingUser = await prisma.users.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      res.status(409).json({ message: 'Email or username already in use.' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        email,
        username,
        password_hash: hashedPassword,
      },
    });

    res.status(201).json({
      message: 'User created successfully!',
      userId: newUser.id,
    });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const login = async (req: Request, res: Response) => { // Login
  console.log('🔥 Full request body:', req.body);

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required.' });
      return;
    }

    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(401).json({ message: 'Invalid email or password.' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid email or password.' });
      return;
    }

    if (!req.body) {
      return res.status(400).json({ message: 'Missing request body' });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
        tier: user.tier,
        user_type: user.user_type,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      message: 'Login successful!',
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        tier: user.tier,
        user_type: user.user_type,
      },
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
