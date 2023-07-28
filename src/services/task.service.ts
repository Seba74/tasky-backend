import { Request, Response } from "express";
import { TaskRepository } from "../repositories/implementation/task.repository";
import { UserRepository } from "../repositories/implementation/user.repository";
import { CreateTaskDto, TaskDto, UpdateTaskDto } from '../dtos/task.dto';
import { CommonResponse } from "../dtos/common.dto";

export class TaskService {
  private taskRepository: TaskRepository;
  private userRepository: UserRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
    this.userRepository = new UserRepository();
  }

  public async getAllTasks() {
    try {
      const tasks: TaskDto[] = await this.taskRepository.getAllTasks();
      const tasksResponse: CommonResponse = {
        ok: true,
        message: "Tareas Encontradas",
        data: tasks,
      }

      return tasksResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getTasksByUser(idUser: string) {
    try {

      const userExists: boolean = await this.userRepository.userExists(idUser);
      if (!userExists) throw new Error("El usuario no existe");

      const tasks: TaskDto[] = await this.taskRepository.getTasksByUserId(idUser);

      const tasksResponse: CommonResponse = {
        ok: true,
        message: "Tareas Encontradas",
        data: tasks,
      };
      return tasksResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getTaskById(id: string) {
    try {
      const taskExists: boolean = await this.taskRepository.taskExists(id);
      if (!taskExists) throw new Error("La tarea no existe");

      const task: TaskDto = await this.taskRepository.getTaskById(id);

      const taskResponse: CommonResponse = {
        ok: true,
        message: "Tarea Encontrada",
        data: task,
      }
      return taskResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async createTask(newTask: CreateTaskDto) {
    try {

      const userExists: boolean = await this.userRepository.userExists(newTask.idUser);
      if (!userExists) throw new Error("El usuario no existe");

      const task: TaskDto = await this.taskRepository.createTask(newTask);

      const taskResponse: CommonResponse = {
        ok: true,
        message: "Tarea Creada",
        data: task,
      }
      return taskResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async updateTask(id: string, data: any) {
    try {
      const actualTask: TaskDto = await this.taskRepository.getTaskById(id);
      if (!actualTask) throw new Error("La tarea no existe");

      const taskToUpdate : UpdateTaskDto = {
        title: data.title || actualTask.title,
        description: data.description || actualTask.description,
        idDate: data.idDate || actualTask.idDate,
        deadline: data.deadline || actualTask.deadline,
        idUser: actualTask.user._id,
        idPriority: actualTask.priority._id,
      }

      const task: TaskDto = await this.taskRepository.updateTask(id, taskToUpdate);

      const taskResponse: CommonResponse = {
        ok: true,
        message: "Tarea Actualizada",
        data: task,
      }

      return taskResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async deleteTask(id: string) {
    try {

      const taskExists: boolean = await this.taskRepository.taskExists(id);
      if (!taskExists) throw new Error("La tarea no existe");

      const task: TaskDto = await this.taskRepository.deleteTask(id);

      const taskResponse: CommonResponse = {
        ok: true,
        message: "Tarea Eliminada",
        data: task,
      }
      return taskResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
