// src/controllers/restaurant.controller.ts

import { Request, Response } from 'express';

export const updateRestaurant = async (req: Request, res: Response) => {
 res.status(200).json({ message: 'Restaurant info updated (placeholder)' });
};
