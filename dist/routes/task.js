"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("../controllers/task.controller");
// import { logMiddleware } from "../middleware/log";
const token_auth_1 = require("../middleware/token.auth");
const isAdmin_1 = require("../middleware/isAdmin");
const task_validators_1 = require("../validators/task.validators");
const router = (0, express_1.Router)();
const taskController = new task_controller_1.TaskController();
// Get All Tasks
router.get("/", token_auth_1.tokenAuthMiddleware, isAdmin_1.isAdminMiddleware, taskController.getAllTasks.bind(taskController));
// Get Task by Id
router.get("/:id", token_auth_1.tokenAuthMiddleware, task_validators_1.getTaskByIdValidator, taskController.getTaskById.bind(taskController));
// Get Tasks by User Id
router.get("/user/:idUser", token_auth_1.tokenAuthMiddleware, task_validators_1.getTasksByUserValidator, taskController.getTasksByUser.bind(taskController));
// Create Task
router.post("/", token_auth_1.tokenAuthMiddleware, task_validators_1.createTaskValidator, taskController.createTask.bind(taskController));
// Update Task
router.put("/:id", token_auth_1.tokenAuthMiddleware, task_validators_1.updateTaskValidator, taskController.updateTask.bind(taskController));
// Delete Task
router.delete("/:id", token_auth_1.tokenAuthMiddleware, task_validators_1.getTaskByIdValidator, taskController.deleteTask.bind(taskController));
exports.default = router;
