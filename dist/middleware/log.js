"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (req, res, next) => {
    console.log("Request logged:", req.method, req.path);
    next();
};
exports.logMiddleware = logMiddleware;
