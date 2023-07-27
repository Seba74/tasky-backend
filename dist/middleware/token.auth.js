"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenAuthMiddleware = void 0;
const jwt_config_1 = __importDefault(require("../jwt/jwt.config"));
const tokenAuthMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({
            ok: false,
            message: "No token provided",
        });
    }
    const justToken = token.split(" ")[1];
    const verifyToken = jwt_config_1.default.validateToken(justToken);
    if (!verifyToken) {
        return res.status(401).json({
            ok: false,
            message: "Unauthorized",
        });
    }
    next();
};
exports.tokenAuthMiddleware = tokenAuthMiddleware;
