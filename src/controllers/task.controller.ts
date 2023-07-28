import { CommonResponse } from "../dtos/common.dto";
import { CreateTaskDto, UpdateTaskDto } from "../dtos/task.dto";
import { TaskService } from "../services/task.service";
import { Request, Response } from "express";

export class TaskController {
  private taskService: TaskService;
  constructor() {
    this.taskService = new TaskService();
  }

  public async getTaskById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const taskResponse: CommonResponse = await this.taskService.getTaskById(id);
      return res.status(200).json(taskResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async getTasksByUser(req: Request, res: Response) {
    try{
      const { idUser } = req.params;

      const taskResponse : CommonResponse = await this.taskService.getTasksByUser(idUser);

      return res.status(200).json(taskResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async getAllTasks(_req: Request, res: Response) {
    try{
      const taskResponse: CommonResponse = await this.taskService.getAllTasks();
      return res.status(200).json(taskResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async createTask(req: Request, res: Response) {
    try{
      
      const { title, description, deadline, idDate, idPriority, idUser} = req.body;
      const newTask : CreateTaskDto = { title, description, deadline, idDate, idPriority, idUser};
      const taskResponse : CommonResponse = await this.taskService.createTask(newTask);
      
      return res.status(200).json(taskResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async updateTask(req: Request, res: Response) {
    try{
      const { id } = req.params;
      const data = req.body;

      const taskResponse : CommonResponse = await this.taskService.updateTask(id, data);
      return res.status(200).json(taskResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async deleteTask(req: Request, res: Response) {
    try{
      const { id } = req.params;

      const taskResponse : CommonResponse = await this.taskService.deleteTask(id);

      return res.status(200).json(taskResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }
}
