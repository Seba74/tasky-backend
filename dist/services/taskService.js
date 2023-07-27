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
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUser } = req.params;
                const body = req.body;
                if (!idUser || !body)
                    throw new Error("Faltan campos por completar");
                const userExists = yield this.userRepository.userExists(idUser);
                if (!userExists)
                    throw new Error("El usuario no existe");
                const createTask = {
                    title: body.title,
                    description: body.description,
                    deadline: body.deadline,
                    idDate: body.idDate,
                    idPriority: body.idPriority,
                };
                const task = yield this.taskRepository.createTask(idUser, createTask);
                res.status(200).json({ message: "Tarea Creada", task });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idTask } = req.params;
                const body = req.body;
                if (!idTask || !body)
                    throw new Error("Faltan campos por completar");
                const taskExists = yield this.taskRepository.taskExists(idTask);
                if (!taskExists)
                    throw new Error("La tarea no existe");
                const updateTask = {
                    title: body.title,
                    description: body.description,
                    deadline: body.deadline,
                    idPriority: body.idPriority,
                };
                const task = yield this.taskRepository.updateTask(idTask, updateTask);
                res.status(200).json({ message: "Tarea Actualizada", task });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idTask } = req.params;
                if (!idTask)
                    throw new Error("Faltan campos por completar");
                const taskExists = yield this.taskRepository.taskExists(idTask);
                if (!taskExists)
                    throw new Error("La tarea no existe");
                const task = yield this.taskRepository.deleteTask(idTask);
                res.status(200).json({ message: "Tarea Eliminada", task });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    getTasksByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUser } = req.params;
                if (!idUser)
                    throw new Error("Faltan campos por completar");
                const userExists = yield this.userRepository.userExists(idUser);
                if (!userExists)
                    throw new Error("El usuario no existe");
                const tasks = yield this.taskRepository.getTasksByUserId(idUser);
                res.status(200).json({ message: "Tareas Encontradas", tasks });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    getAllTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield this.taskRepository.getAllTasks();
                if (!tasks)
                    throw new Error("Tareas no encontradas");
                res.status(200).json({ message: "Tareas Encontradas", tasks });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    getTaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idTask } = req.params;
                if (!idTask)
                    throw new Error("Faltan campos por completar");
                const taskExists = yield this.taskRepository.taskExists(idTask);
                if (!taskExists)
                    throw new Error("La tarea no existe");
                const task = yield this.taskRepository.getTaskById(idTask);
                res.status(200).json({ message: "Tarea Encontrada", task });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.TaskService = TaskService;
