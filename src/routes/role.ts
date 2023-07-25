import { Router } from "express";
import { RoleController } from "../controllers/role.controller";
import { logMiddleware } from "../middleware/log";
import { tokenAuthMiddleware } from "../middleware/token.auth";

const router = Router();

// Create Role
router.post("/", tokenAuthMiddleware, RoleController.prototype.createRole);

export default router;
