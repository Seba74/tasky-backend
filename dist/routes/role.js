"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = require("../controllers/role.controller");
const token_auth_1 = require("../middleware/token.auth");
const isAdmin_1 = require("../middleware/isAdmin");
const role_validators_1 = require("../validators/role.validators");
const router = (0, express_1.Router)();
const roleController = new role_controller_1.RoleController();
// Create Role
router.post("/", token_auth_1.tokenAuthMiddleware, isAdmin_1.isAdminMiddleware, role_validators_1.roleValidator, roleController.createRole.bind(roleController));
// Get Roles
router.get("/", [token_auth_1.tokenAuthMiddleware, isAdmin_1.isAdminMiddleware], roleController.getRoles.bind(roleController));
// Get Role by Id
router.get("/:id", token_auth_1.tokenAuthMiddleware, roleController.getRoleById.bind(roleController));
// Get Role by Name
router.get("/name/:name", token_auth_1.tokenAuthMiddleware, role_validators_1.roleValidator, roleController.getRoleByName.bind(roleController));
// Update Role
router.put("/:id", token_auth_1.tokenAuthMiddleware, isAdmin_1.isAdminMiddleware, role_validators_1.roleValidator, roleController.updateRole.bind(roleController));
// Delete Role
router.delete("/:id", token_auth_1.tokenAuthMiddleware, isAdmin_1.isAdminMiddleware, roleController.deleteRole.bind(roleController));
exports.default = router;
