import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const validateResult = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      ok: false,
      message: errors.array()
     });
  }
  next();
};
