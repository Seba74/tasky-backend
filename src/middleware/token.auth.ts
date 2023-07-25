import { Response, NextFunction } from "express";

export const tokenAuthMiddleware = (req: any, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(401).json({
            ok: false,
            message: "No token provided"
        });
    }

    // if (token !== "Bearer user-token") {
    //     return res.status(401).json({
    //         ok: false,
    //         message: "Invalid token"
    //     });
    // }

    next();
}