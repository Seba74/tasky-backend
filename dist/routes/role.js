"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = require("../controllers/role.controller");
const token_auth_1 = require("../middleware/token.auth");
const router = (0, express_1.Router)();
const roleController = new role_controller_1.RoleController();
// Create Role
router.post("/", token_auth_1.tokenAuthMiddleware, roleController.createRole);
// Get Roles
router.get("/", token_auth_1.tokenAuthMiddleware, roleController.getRoles);
// Get Role by Id
router.get("/:id", token_auth_1.tokenAuthMiddleware, roleController.getRoleById);
// Get Role by Name
router.get("/name/:name", token_auth_1.tokenAuthMiddleware, roleController.getRoleByName);
// Update Role
router.put("/:id", token_auth_1.tokenAuthMiddleware, roleController.updateRole);
// Delete Role
router.delete("/:id", token_auth_1.tokenAuthMiddleware, roleController.deleteRole);
exports.default = router;
