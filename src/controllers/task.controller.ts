import { TaskService } from "../services/taskService";
import { Request, Response } from "express";

export class TaskController {
  private taskService: TaskService;
  constructor() {
    this.taskService = new TaskService();
  }

  public async createTask(req: Request, res: Response) {
    return await this.taskService.createTask(req, res);
  }

  public async updateTask(req: Request, res: Response) {
    return await this.taskService.updateTask(req, res);
  }

  public async deleteTask(req: Request, res: Response) {
    return await this.taskService.deleteTask(req, res);
  }

  public async getTasksByUserId(req: Request, res: Response) {
    return await this.taskService.getTasksByUser(req, res);
  }

  public async getAllTasks(req: Request, res: Response) {
    return await this.taskService.getAllTasks(req, res);
  }

  public async getTaskById(req: Request, res: Response) {
    return await this.taskService.getTaskById(req, res);
  }
}
