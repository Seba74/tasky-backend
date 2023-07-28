import { Router } from "express";
import { RoleController } from "../controllers/role.controller";
import { tokenAuthMiddleware } from "../middleware/token.auth";
import { isAdminMiddleware } from "../middleware/isAdmin";
import { roleValidator } from "../validators/role.validators";

const router = Router();
const roleController = new RoleController();

// Create Role
router.post(
  "/",
  tokenAuthMiddleware, isAdminMiddleware, roleValidator,
  roleController.createRole.bind(roleController)
);
// Get Roles
router.get(
  "/",
  [tokenAuthMiddleware, isAdminMiddleware],
  roleController.getRoles.bind(roleController)
);
// Get Role by Id
router.get(
  "/:id",
  tokenAuthMiddleware,
  roleController.getRoleById.bind(roleController)
);
// Get Role by Name
router.get(
  "/name/:name",
  tokenAuthMiddleware, roleValidator,
  roleController.getRoleByName.bind(roleController)
);
// Update Role
router.put(
  "/:id",
  tokenAuthMiddleware, isAdminMiddleware, roleValidator,
  roleController.updateRole.bind(roleController)
);
// Delete Role
router.delete(
  "/:id",
  tokenAuthMiddleware, isAdminMiddleware,
  roleController.deleteRole.bind(roleController)
);

export default router;
