import { NextFunction, Response } from "express";

export const isAdminMiddleware = (req: any, res: Response, next: NextFunction) => {
  const user = req.user;
  if (user.role.name === "admin") {
    next();
  } else {
    // json
    res.status(401).json({
      ok: false,
      message: "Unauthorized",
    });
  }
};
