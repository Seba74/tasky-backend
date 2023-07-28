"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const task_service_1 = require("../services/task.service");
class TaskController {
    constructor() {
        this.taskService = new task_service_1.TaskService();
    }
    getTaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const taskResponse = yield this.taskService.getTaskById(id);
                return res.status(200).json(taskResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    getTasksByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUser } = req.params;
                const taskResponse = yield this.taskService.getTasksByUser(idUser);
                return res.status(200).json(taskResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    getAllTasks(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskResponse = yield this.taskService.getAllTasks();
                return res.status(200).json(taskResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, deadline, idDate, idPriority, idUser } = req.body;
                const newTask = { title, description, deadline, idDate, idPriority, idUser };
                const taskResponse = yield this.taskService.createTask(newTask);
                return res.status(200).json(taskResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = req.body;
                const taskResponse = yield this.taskService.updateTask(id, data);
                return res.status(200).json(taskResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const taskResponse = yield this.taskService.deleteTask(id);
                return res.status(200).json(taskResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
}
exports.TaskController = TaskController;
