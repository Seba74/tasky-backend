import { TaskRepositoryInterface } from "../interfaces/task.interface";
import { Task, TaskModel } from "../../models/task";
import { CreateTaskDto, TaskDto, UpdateTaskDto } from "../../dtos/task.dto";
export class TaskRepository implements TaskRepositoryInterface {
  
  public async createTask(createTaskDto: CreateTaskDto): Promise<TaskDto> {
    const task: any = await TaskModel.create(createTaskDto);
    await task.populate("idPriority")
    await task.populate("idUser", "-password");
    const taskDto: TaskDto = {
      _id: task._id,
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      idDate: task.idDate,
      is_completed: task.is_completed,
      is_expired: task.is_expired,
      priority: task.idPriority,
      user: await task.idUser.populate("idRole"),
    };
    return taskDto;
  }

  public async getAllTasks(): Promise<TaskDto[]> {
    const tasks: Task[] = await TaskModel.find().populate("idPriority").populate("idUser", "-password");
    const tasksDto: Promise<TaskDto>[] = tasks.map(async (task: any) => {
      const taskDto: TaskDto = {
        _id: task._id,
        title: task.title,
        description: task.description,
        deadline: task.deadline,
        idDate: task.idDate,
        is_completed: task.is_completed,
      is_expired: task.is_expired,
        priority: task.idPriority,
        user: await task.idUser.populate("idRole"),
      };
      return taskDto;
    });

    return Promise.all(tasksDto);
  }

  public async getTasksByUserId(idUser: string): Promise<TaskDto[]> {
    const tasks: Task[] = await TaskModel.find({ idUser }).populate("idPriority").populate("idUser", "-password");

    const tasksDto: Promise<TaskDto>[] = tasks.map(async (task: any) => {
      const taskDto : TaskDto = {
        _id: task._id,
        title: task.title,
        description: task.description,
        deadline: task.deadline,
        idDate: task.idDate,
        is_completed: task.is_completed,
      is_expired: task.is_expired,
        priority: task.idPriority,
        user: await task.idUser.populate("idRole"),
      };
      return taskDto;
    });

    return Promise.all(tasksDto);
  }

  public async getUserTasksByDate(idUser: string, idDate: string): Promise<TaskDto[]> {
    const tasks: Task[] = await TaskModel.find({ idUser, idDate}).populate("idPriority").populate("idUser", "-password");

    const tasksDto: Promise<TaskDto>[] = tasks.map(async (task: any) => {
      const taskDto: TaskDto = {
        _id: task._id,
        title: task.title,
        description: task.description,
        deadline: task.deadline,
        idDate: task.idDate,
        is_completed: task.is_completed,
      is_expired: task.is_expired,
        priority: task.idPriority,
        user: await task.idUser.populate("idRole"),
      };
      return taskDto;
    });

    return Promise.all(tasksDto);
  }

  public async getTaskById(id: string): Promise<TaskDto> {
    const task: any | null = await TaskModel.findById(id);
    if (!task) throw new Error("La tarea no existe");

    await task.populate("idPriority");
    await task.populate("idUser", "-password");

    const taskDto: TaskDto = {
      _id: task._id,
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      idDate: task.idDate,
      is_completed: task.is_completed,
      is_expired: task.is_expired,
      priority: task.idPriority,
      user: await task.idUser.populate("idRole"),
    };
    return taskDto;
  }

  public async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<TaskDto> {
    const updatedTask: any | null = await TaskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).populate("idPriority").populate("idUser", "-password");

    if (!updatedTask) throw new Error("Error al actualizar la tarea");
    const taskDto: TaskDto = {
      _id: updatedTask._id,
      title: updatedTask.title,
      description: updatedTask.description,
      deadline: updatedTask.deadline,
      is_completed: updatedTask.is_completed,
      is_expired: updatedTask.is_expired,
      idDate: updatedTask.idDate,
      priority: updatedTask.idPriority,
      user: await updatedTask.idUser.populate("idRole"),
    };

    return taskDto;
  }

  public async deleteTask(id: string): Promise<TaskDto> {
    const deletedTask: any | null = await TaskModel.findByIdAndDelete(id).populate("idPriority").populate("idUser", "-password");

    if (!deletedTask) throw new Error("Error al eliminar la tarea");

    const taskDto: TaskDto = {
      _id: deletedTask._id,
      title: deletedTask.title,
      description: deletedTask.description,
      deadline: deletedTask.deadline,
      is_completed: deletedTask.is_completed,
      is_expired: deletedTask.is_expired,
      idDate: deletedTask.idDate,
      priority: deletedTask.idPriority,
      user: await deletedTask.idUser.populate("idRole"),
    };

    return taskDto;
  }

  public async taskExists(id: string): Promise<boolean> {
    const task: Task | null = await TaskModel.findById(id);
    if (task) {
      return true;
    }
    return false;
  }
}
