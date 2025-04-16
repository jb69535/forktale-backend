// src/controllers/auth.controller.ts

import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../config/prisma';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';
import { addMinutes } from 'date-fns';

dotenv.config(); // Make sure you load .env!

export const signup = async (req: Request, res: Response) => { // Signup
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const existingUser = await prisma.users.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return res.status(409).json({ message: 'Email or username already in use.' });
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
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
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

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: 'Email is required.' });
  }

  try {
    const user = await prisma.users.findUnique({ where: { email } });

    if (!user) {
      res.status(200).json({
        message: 'If that email exists, a reset link has been sent.',
      });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = addMinutes(new Date(), 15);

    // ✅ Update the users table with the token
    await prisma.users.update({
      where: { email },
      data: {
        password_reset_token: token,
        password_reset_token_expiration: expiresAt,
      },
    });

    res.status(200).json({
      message: 'Password reset token generated.',
      resetLink: `http://localhost:3000/reset-password?token=${token}`,
    });
  } catch (error) {
    console.error('Forgot Password Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { token, new_password } = req.body;

  if (!token || !new_password) {
    res.status(400).json({ message: 'Token and new password are required.' });
  }

  try {
    const user = await prisma.users.findFirst({
      where: {
        password_reset_token: token,
        password_reset_token_expiration: {
          gte: new Date(), // token not expired
        },
      },
    });

    if (!user) {
      res.status(400).json({ message: 'Invalid or expired token.' });
      return;
    }

    const hashedPassword = await bcrypt.hash(new_password, 10);

    console.log('🔐 Plain Password:', new_password);
    console.log('🔐 Hashed Password:', hashedPassword);

    await prisma.users.update({
      where: { id: user.id },
      data: {
        password_hash: hashedPassword,
        password_reset_token: null,
        password_reset_token_expiration: null,
      },
    });

    res.status(200).json({ message: 'Password has been reset successfully!' });
  } catch (error) {
    console.error('Reset Password Error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};