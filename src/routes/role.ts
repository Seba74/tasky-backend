import { Router } from "express";
import { RoleController } from "../controllers/role.controller";
import { logMiddleware } from "../middleware/log";
import { tokenAuthMiddleware } from "../middleware/token.auth";

const router = Router();
const roleController = new RoleController();

// Create Role
router.post("/", tokenAuthMiddleware, roleController.createRole);
// Get Roles
router.get("/", tokenAuthMiddleware, roleController.getRoles);
// Get Role by Id
router.get("/:id", tokenAuthMiddleware, roleController.getRoleById);
// Get Role by Name
router.get("/name/:name", tokenAuthMiddleware, roleController.getRoleByName);
// Update Role
router.put("/:id", tokenAuthMiddleware, roleController.updateRole);
// Delete Role
router.delete("/:id", tokenAuthMiddleware, roleController.deleteRole);

export default router;
