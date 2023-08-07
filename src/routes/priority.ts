import { Handler, RequestHandler, Router } from "express";
import { tokenAuthMiddleware } from "../middleware/token.auth";
import { isAdminMiddleware } from "../middleware/isAdmin";
import { PriorityController } from "../controllers/priority.controller";
import { createPriorityValidator, getPriorityByIdValidator, getPriorityByLevelValidator, getPriorityByNameValidator, updatePriorityValidator } from "../validators/priority.validators";

const router = Router();
const priorityController = new PriorityController();

// Create Priority
router.post(
  "/",
  tokenAuthMiddleware, isAdminMiddleware, createPriorityValidator,
  priorityController.createPriority.bind(priorityController)
);
// Get Priorities
router.get(
  "/",
  tokenAuthMiddleware,
  priorityController.getPriorities.bind(priorityController)
);
// Get Priority by Id
router.get(
  "/:id",
  tokenAuthMiddleware, getPriorityByIdValidator,
  priorityController.getPriorityById.bind(priorityController)
);
// Get Priority by Name
router.get(
  "/name/:name",
  tokenAuthMiddleware, getPriorityByNameValidator,
  priorityController.getPriorityByName.bind(priorityController)
);
// Get Priority by Level
router.get(
  "/level/:level",
  tokenAuthMiddleware, getPriorityByLevelValidator,
  priorityController.getPriorityByLevel.bind(priorityController)
);
// Update Priority
router.put(
  "/:id",
  tokenAuthMiddleware, isAdminMiddleware, updatePriorityValidator,
  priorityController.updatePriority.bind(priorityController)
);
// Delete Priority
router.delete(
  "/:id",
  tokenAuthMiddleware, isAdminMiddleware, getPriorityByIdValidator,
  priorityController.deletePriority.bind(priorityController)
);

export default router;
