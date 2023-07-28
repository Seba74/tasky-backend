"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminMiddleware = void 0;
const isAdminMiddleware = (req, res, next) => {
    const user = req.user;
    if (user.role.name === "admin") {
        next();
    }
    else {
        // json
        res.status(401).json({
            ok: false,
            message: "Unauthorized",
        });
    }
};
exports.isAdminMiddleware = isAdminMiddleware;
