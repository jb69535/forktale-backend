// src/middlewares/owner.middleware.ts

import { Request, Response, NextFunction } from 'express';

export const verifyOwner = (req: Request, res: Response, next: NextFunction): void => {
  const user = (req as any).user;

  if (user?.user_type !== 'owner') {
    res.status(403).json({ message: 'You must be a verified owner.' });
    return;
  }

  next();
};
