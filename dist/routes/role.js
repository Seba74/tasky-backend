"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = require("../controllers/role.controller");
const token_auth_1 = require("../middleware/token.auth");
const router = (0, express_1.Router)();
// Create Role
router.post("/", token_auth_1.tokenAuthMiddleware, role_controller_1.RoleController.prototype.createRole);
exports.default = router;
