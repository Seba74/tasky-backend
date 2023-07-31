import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
// import { logMiddleware } from "../middleware/log";
import { tokenAuthMiddleware } from "../middleware/token.auth";
import { isAdminMiddleware } from "../middleware/isAdmin";
import { getUserTasksByDateValidator } from '../validators/task.validators';
import {
  createTaskValidator,
  getTaskByIdValidator,
  getTasksByUserValidator,
  updateTaskValidator,
} from "../validators/task.validators";

const router = Router();
const taskController = new TaskController();

// Get All Tasks
router.get(
  "/",
  tokenAuthMiddleware,
  isAdminMiddleware,
  taskController.getAllTasks.bind(taskController)
);

// Get Task by Id
router.get(
  "/:id",
  tokenAuthMiddleware,
  getTaskByIdValidator,
  taskController.getTaskById.bind(taskController)
);

// Get Tasks by User Id
router.get(
  "/user/:idUser",
  tokenAuthMiddleware,
  getTasksByUserValidator,
  taskController.getTasksByUser.bind(taskController)
);

// Get Tasks per day by User Id
router.get(
  "/user/:idUser/date/:idDate",
  tokenAuthMiddleware,
  getUserTasksByDateValidator,
  taskController.getUserTasksByDate.bind(taskController)
);

// Create Task
router.post(
  "/",
  tokenAuthMiddleware,
  createTaskValidator,
  taskController.createTask.bind(taskController)
);

// Update Task
router.put(
  "/:id",
  tokenAuthMiddleware,
  updateTaskValidator,
  taskController.updateTask.bind(taskController)
);

// Delete Task
router.delete(
  "/:id",
  tokenAuthMiddleware,
  getTaskByIdValidator,
  taskController.deleteTask.bind(taskController)
);

export default router;
