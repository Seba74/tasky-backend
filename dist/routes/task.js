"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("../controllers/task.controller");
// import { logMiddleware } from "../middleware/log";
const token_auth_1 = require("../middleware/token.auth");
const router = (0, express_1.Router)();
const taskController = new task_controller_1.TaskController();
// Create Task
router.post("/:idUser", token_auth_1.tokenAuthMiddleware, taskController.createTask);
// Get Tasks by User Id
router.get("/:idUser", token_auth_1.tokenAuthMiddleware, taskController.getTasksByUserId);
// Get All Tasks
router.get("/", token_auth_1.tokenAuthMiddleware, taskController.getAllTasks);
exports.default = router;
