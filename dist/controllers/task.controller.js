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
const taskService_1 = require("../services/taskService");
class TaskController {
    constructor() {
        this.taskService = new taskService_1.TaskService();
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.createTask(req, res);
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.updateTask(req, res);
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.deleteTask(req, res);
        });
    }
    getTasksByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.getTasksByUser(req, res);
        });
    }
    getAllTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.getAllTasks(req, res);
        });
    }
    getTaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskService.getTaskById(req, res);
        });
    }
}
exports.TaskController = TaskController;
