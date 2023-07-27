import { Response, NextFunction } from "express";
import Token from "../jwt/jwt.config";

export const tokenAuthMiddleware = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      ok: false,
      message: "No token provided",
    });
  }

  const justToken = token.split(" ")[1];
  const verifyToken = Token.validateToken(justToken);

  if (!verifyToken) {
    return res.status(401).json({
      ok: false,
      message: "Unauthorized",
    });
  }

  next();
};
