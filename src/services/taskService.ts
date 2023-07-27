import { Request, Response } from "express";
import { TaskRepository } from "../repositories/implementation/task.repository";
import { UserRepository } from "../repositories/implementation/user.repository";
import { CreateTaskDto, TaskDto, UpdateTaskDto } from "../dtos/task.dto";

export class TaskService {
  private taskRepository: TaskRepository;
  private userRepository: UserRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
    this.userRepository = new UserRepository();
  }

  public async createTask(req: Request, res: Response) {
    try {
      const { idUser } = req.params;
      const body = req.body;

      if (!idUser || !body) throw new Error("Faltan campos por completar");

      const userExists: boolean = await this.userRepository.userExists(idUser);
      if (!userExists) throw new Error("El usuario no existe");

      const createTask: CreateTaskDto = {
        title: body.title,
        description: body.description,
        deadline: body.deadline,
        idDate: body.idDate,
        idPriority: body.idPriority,
      };

      const task: TaskDto = await this.taskRepository.createTask(
        idUser,
        createTask
      );

      res.status(200).json({ message: "Tarea Creada", task });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async updateTask(req: Request, res: Response) {
    try {
      const { idTask } = req.params;
      const body = req.body;

      if (!idTask || !body) throw new Error("Faltan campos por completar");

      const taskExists: boolean = await this.taskRepository.taskExists(idTask);
      if (!taskExists) throw new Error("La tarea no existe");

      const updateTask: UpdateTaskDto = {
        title: body.title,
        description: body.description,
        deadline: body.deadline,
        idPriority: body.idPriority,
      };

      const task: TaskDto = await this.taskRepository.updateTask(
        idTask,
        updateTask
      );

      res.status(200).json({ message: "Tarea Actualizada", task });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async deleteTask(req: Request, res: Response) {
    try {
      const { idTask } = req.params;

      if (!idTask) throw new Error("Faltan campos por completar");

      const taskExists: boolean = await this.taskRepository.taskExists(idTask);
      if (!taskExists) throw new Error("La tarea no existe");

      const task: TaskDto = await this.taskRepository.deleteTask(idTask);

      res.status(200).json({ message: "Tarea Eliminada", task });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async getTasksByUser(req: Request, res: Response) {
    try {
      const { idUser } = req.params;
      if (!idUser) throw new Error("Faltan campos por completar");

      const userExists: boolean = await this.userRepository.userExists(idUser);
      if (!userExists) throw new Error("El usuario no existe");

      const tasks: TaskDto[] = await this.taskRepository.getTasksByUserId(
        idUser
      );

      res.status(200).json({ message: "Tareas Encontradas", tasks });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async getAllTasks(req: Request, res: Response) {
    try {
      const tasks: TaskDto[] = await this.taskRepository.getAllTasks();
      if (!tasks) throw new Error("Tareas no encontradas");

      res.status(200).json({ message: "Tareas Encontradas", tasks });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async getTaskById(req: Request, res: Response) {
    try {
      const { idTask } = req.params;
      if (!idTask) throw new Error("Faltan campos por completar");

      const taskExists: boolean = await this.taskRepository.taskExists(idTask);
      if (!taskExists) throw new Error("La tarea no existe");

      const task: TaskDto = await this.taskRepository.getTaskById(idTask);

      res.status(200).json({ message: "Tarea Encontrada", task });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}
