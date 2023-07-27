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
const userService_1 = require("../services/userService");
class TaskController {
    constructor(taskService, userService) {
        this.taskService = taskService;
        this.userService = userService;
    }
    getTasksByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUser } = req.params;
                if (!idUser) {
                    throw new Error("Faltan campos por completar");
                }
                const userExists = yield this.userService.userExists(idUser);
                if (!userExists) {
                    throw new Error("El usuario no existe");
                }
                const tasks = yield this.taskService.getTasksByUserId(idUser);
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
                const tasks = yield this.taskService.getAllTasks();
                if (!tasks) {
                    throw new Error("Tareas no encontradas");
                }
                res.status(200).json({ message: "Tareas Encontradas", tasks });
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
                if (!idTask) {
                    throw new Error("Faltan campos por completar");
                }
                const task = yield this.taskService.getTaskById(idTask);
                if (!task) {
                    throw new Error("La tarea no existe");
                }
                const taskUpdated = yield this.taskService.updateTask(idTask, body);
                if (!taskUpdated) {
                    throw new Error("Error al actualizar la tarea");
                }
                res.status(200).json({ message: "Tarea actualizada", taskUpdated });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, idDate, idPriority } = req.body;
                const { idUser } = req.params;
                if (!title || !description || !idUser) {
                    throw new Error("Missing fields");
                }
                const user = yield userService_1.UserService.prototype.getUserById(idUser);
                if (!user) {
                    throw new Error("User not found");
                }
                const project = {
                    title,
                    description,
                    deadline: new Date(),
                };
                const newProject = yield ProjectService.prototype.createProject(project);
                const projectPerUser = {
                    idProject: newProject._id,
                    idUser,
                };
                const newProjectPerUser = yield ProjectPerUserService.prototype.createProjectPerUser(projectPerUser);
                yield newProjectPerUser.save();
                res.status(201).json({ message: "Project created", project: newProject });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.TaskController = TaskController;
