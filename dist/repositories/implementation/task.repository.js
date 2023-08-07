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
class TaskRepository {
    createTask(createTaskDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield task_1.TaskModel.create(createTaskDto);
            yield task.populate("idPriority");
            yield task.populate("idUser", "-password");
            const taskDto = {
                _id: task._id,
                title: task.title,
                description: task.description,
                deadline: task.deadline,
                idDate: task.idDate,
                is_completed: task.is_completed,
                is_expired: task.is_expired,
                priority: task.idPriority,
                user: yield task.idUser.populate("idRole"),
            };
            return taskDto;
        });
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield task_1.TaskModel.find().populate("idPriority").populate("idUser", "-password");
            const tasksDto = tasks.map((task) => __awaiter(this, void 0, void 0, function* () {
                const taskDto = {
                    _id: task._id,
                    title: task.title,
                    description: task.description,
                    deadline: task.deadline,
                    idDate: task.idDate,
                    is_completed: task.is_completed,
                    is_expired: task.is_expired,
                    priority: task.idPriority,
                    user: yield task.idUser.populate("idRole"),
                };
                return taskDto;
            }));
            return Promise.all(tasksDto);
        });
    }
    getTasksByUserId(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield task_1.TaskModel.find({ idUser }).populate("idPriority").populate("idUser", "-password");
            const tasksDto = tasks.map((task) => __awaiter(this, void 0, void 0, function* () {
                const taskDto = {
                    _id: task._id,
                    title: task.title,
                    description: task.description,
                    deadline: task.deadline,
                    idDate: task.idDate,
                    is_completed: task.is_completed,
                    is_expired: task.is_expired,
                    priority: task.idPriority,
                    user: yield task.idUser.populate("idRole"),
                };
                return taskDto;
            }));
            return Promise.all(tasksDto);
        });
    }
    getUserTasksByDate(idUser, idDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield task_1.TaskModel.find({ idUser, idDate }).populate("idPriority").populate("idUser", "-password");
            const tasksDto = tasks.map((task) => __awaiter(this, void 0, void 0, function* () {
                const taskDto = {
                    _id: task._id,
                    title: task.title,
                    description: task.description,
                    deadline: task.deadline,
                    idDate: task.idDate,
                    is_completed: task.is_completed,
                    is_expired: task.is_expired,
                    priority: task.idPriority,
                    user: yield task.idUser.populate("idRole"),
                };
                return taskDto;
            }));
            return Promise.all(tasksDto);
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield task_1.TaskModel.findById(id);
            if (!task)
                throw new Error("La tarea no existe");
            yield task.populate("idPriority");
            yield task.populate("idUser", "-password");
            const taskDto = {
                _id: task._id,
                title: task.title,
                description: task.description,
                deadline: task.deadline,
                idDate: task.idDate,
                is_completed: task.is_completed,
                is_expired: task.is_expired,
                priority: task.idPriority,
                user: yield task.idUser.populate("idRole"),
            };
            return taskDto;
        });
    }
    updateTask(id, updateTaskDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedTask = yield task_1.TaskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).populate("idPriority").populate("idUser", "-password");
            if (!updatedTask)
                throw new Error("Error al actualizar la tarea");
            const taskDto = {
                _id: updatedTask._id,
                title: updatedTask.title,
                description: updatedTask.description,
                deadline: updatedTask.deadline,
                is_completed: updatedTask.is_completed,
                is_expired: updatedTask.is_expired,
                idDate: updatedTask.idDate,
                priority: updatedTask.idPriority,
                user: yield updatedTask.idUser.populate("idRole"),
            };
            return taskDto;
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedTask = yield task_1.TaskModel.findByIdAndDelete(id).populate("idPriority").populate("idUser", "-password");
            if (!deletedTask)
                throw new Error("Error al eliminar la tarea");
            const taskDto = {
                _id: deletedTask._id,
                title: deletedTask.title,
                description: deletedTask.description,
                deadline: deletedTask.deadline,
                is_completed: deletedTask.is_completed,
                is_expired: deletedTask.is_expired,
                idDate: deletedTask.idDate,
                priority: deletedTask.idPriority,
                user: yield deletedTask.idUser.populate("idRole"),
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
