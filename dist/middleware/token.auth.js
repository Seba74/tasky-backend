"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenAuthMiddleware = void 0;
const tokenAuthMiddleware = (req, res, next) => {
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
};
exports.tokenAuthMiddleware = tokenAuthMiddleware;
