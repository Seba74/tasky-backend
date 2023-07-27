import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
// import { logMiddleware } from "../middleware/log";
import { tokenAuthMiddleware } from "../middleware/token.auth";

const router = Router();
const taskController = new TaskController();

// Create Task
router.post("/:idUser", tokenAuthMiddleware, taskController.createTask);

// Get Tasks by User Id
router.get("/:idUser", tokenAuthMiddleware, taskController.getTasksByUserId);

// Get All Tasks
router.get("/", tokenAuthMiddleware, taskController.getAllTasks);

export default router;
