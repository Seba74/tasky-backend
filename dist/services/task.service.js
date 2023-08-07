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
exports.TaskService = void 0;
const task_repository_1 = require("../repositories/implementation/task.repository");
const user_repository_1 = require("../repositories/implementation/user.repository");
class TaskService {
    constructor() {
        this.taskRepository = new task_repository_1.TaskRepository();
        this.userRepository = new user_repository_1.UserRepository();
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield this.taskRepository.getAllTasks();
                const tasksResponse = {
                    ok: true,
                    message: "Tareas Encontradas",
                    data: tasks,
                };
                return tasksResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getTasksByUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userExists = yield this.userRepository.userExists(idUser);
                if (!userExists)
                    throw new Error("El usuario no existe");
                const tasks = yield this.taskRepository.getTasksByUserId(idUser);
                const tasksResponse = {
                    ok: true,
                    message: "Tareas Encontradas",
                    data: tasks,
                };
                return tasksResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getUserTasksByDate(idUser, idDate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userExists = yield this.userRepository.userExists(idUser);
                if (!userExists)
                    throw new Error("El usuario no existe");
                const tasks = yield this.taskRepository.getUserTasksByDate(idUser, idDate);
                const tasksResponse = {
                    ok: true,
                    message: "Tareas Encontradas",
                    data: tasks,
                };
                return tasksResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskExists = yield this.taskRepository.taskExists(id);
                if (!taskExists)
                    throw new Error("La tarea no existe");
                const task = yield this.taskRepository.getTaskById(id);
                const taskResponse = {
                    ok: true,
                    message: "Tarea Encontrada",
                    data: task,
                };
                return taskResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    createTask(newTask) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userExists = yield this.userRepository.userExists(newTask.idUser);
                if (!userExists)
                    throw new Error("El usuario no existe");
                const task = yield this.taskRepository.createTask(newTask);
                const taskResponse = {
                    ok: true,
                    message: "Tarea Creada",
                    data: task,
                };
                return taskResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    updateTask(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const actualTask = yield this.taskRepository.getTaskById(id);
                if (!actualTask)
                    throw new Error("La tarea no existe");
                const taskToUpdate = {
                    title: data.title || actualTask.title,
                    description: data.description || actualTask.description,
                    idDate: data.idDate || actualTask.idDate,
                    is_completed: data.is_completed || actualTask.is_completed,
                    is_expired: data.is_expired || actualTask.is_expired,
                    deadline: data.deadline || actualTask.deadline,
                    idUser: data.idUser || actualTask.user._id,
                    idPriority: data.idPriority || actualTask.priority._id,
                };
                const task = yield this.taskRepository.updateTask(id, taskToUpdate);
                const taskResponse = {
                    ok: true,
                    message: "Tarea Actualizada",
                    data: task,
                };
                return taskResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskExists = yield this.taskRepository.taskExists(id);
                if (!taskExists)
                    throw new Error("La tarea no existe");
                const task = yield this.taskRepository.deleteTask(id);
                const taskResponse = {
                    ok: true,
                    message: "Tarea Eliminada",
                    data: task,
                };
                return taskResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.TaskService = TaskService;
