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
exports.TaskRepository = void 0;
const task_1 = require("../../models/task");
const user_1 = require("../../models/user");
class TaskRepository {
    createTask(idUser, createTaskDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield task_1.TaskModel.create(Object.assign(Object.assign({}, createTaskDto), { idUser }));
            const taskDto = {
                _id: task._id,
                title: task.title,
                description: task.description,
                deadline: task.deadline,
                idDate: task.idDate,
                idPriority: task.idPriority.transform.toString(),
                user: user_1.UserModel.findById(task.idUser).select("-password"),
            };
            return taskDto;
        });
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield task_1.TaskModel.find();
            const tasksDto = tasks.map((task) => {
                return {
                    _id: task._id,
                    title: task.title,
                    description: task.description,
                    deadline: task.deadline,
                    idDate: task.idDate,
                    idPriority: task.idPriority.transform.toString(),
                    user: user_1.UserModel.findById(task.idUser).select("-password"),
                };
            });
            return tasksDto;
        });
    }
    getTasksByUserId(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield task_1.TaskModel.find({ idUser });
            const tasksDto = tasks.map((task) => {
                return {
                    _id: task._id.transform.toString(),
                    title: task.title,
                    description: task.description,
                    deadline: task.deadline,
                    idDate: task.idDate,
                    idPriority: task.idPriority.transform.toString(),
                    user: user_1.UserModel.findById(task.idUser).select("-password"),
                };
            });
            return tasksDto;
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield task_1.TaskModel.findById(id);
            if (!task) {
                throw new Error("La tarea no existe");
            }
            const taskDto = {
                _id: task._id.transform.toString(),
                title: task.title,
                description: task.description,
                deadline: task.deadline,
                idDate: task.idDate,
                idPriority: task.idPriority.transform.toString(),
                user: user_1.UserModel.findById(task.idUser).select("-password"),
            };
            return taskDto;
        });
    }
    updateTask(id, updateTaskDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedTask = yield task_1.TaskModel.findByIdAndUpdate(id, updateTaskDto, { new: true });
            if (!updatedTask) {
                throw new Error("Error al actualizar la tarea");
            }
            const taskDto = {
                _id: updatedTask._id.transform.toString(),
                title: updatedTask.title,
                description: updatedTask.description,
                deadline: updatedTask.deadline,
                idDate: updatedTask.idDate,
                user: user_1.UserModel.findById(updatedTask.idUser).select("-password"),
                idPriority: updatedTask.idPriority.transform.toString(),
            };
            return taskDto;
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedTask = yield task_1.TaskModel.findByIdAndDelete(id);
            if (!deletedTask) {
                throw new Error("Error al eliminar la tarea");
            }
            const taskDto = {
                _id: deletedTask._id.transform.toString(),
                title: deletedTask.title,
                description: deletedTask.description,
                deadline: deletedTask.deadline,
                idDate: deletedTask.idDate,
                user: user_1.UserModel.findById(deletedTask.idUser).select("-password"),
                idPriority: deletedTask.idPriority.transform.toString(),
            };
            return taskDto;
        });
    }
    taskExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield task_1.TaskModel.findById(id);
            if (task) {
                return true;
            }
            return false;
        });
    }
}
exports.TaskRepository = TaskRepository;
