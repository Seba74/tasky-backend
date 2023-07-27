import { TaskRepositoryInterface } from "../interfaces/task.interface";
import { Task, TaskModel } from "../../models/task";
import { CreateTaskDto, TaskDto, UpdateTaskDto } from "../../dtos/task.dto";
import { UserModel, User } from "../../models/user";

export class TaskRepository implements TaskRepositoryInterface {
  public async createTask(
    idUser: string,
    createTaskDto: CreateTaskDto
  ): Promise<TaskDto> {
    const task: Task = await TaskModel.create({ ...createTaskDto, idUser });

    const taskDto: TaskDto = {
      _id: task._id,
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      idDate: task.idDate,
      idPriority: task.idPriority.transform.toString(),
      user: UserModel.findById(task.idUser).select("-password"),
    };
    return taskDto;
  }

  public async getAllTasks(): Promise<TaskDto[]> {
    const tasks: Task[] = await TaskModel.find();

    const tasksDto: TaskDto[] = tasks.map((task: Task) => {
      return {
        _id: task._id,
        title: task.title,
        description: task.description,
        deadline: task.deadline,
        idDate: task.idDate,
        idPriority: task.idPriority.transform.toString(),
        user: UserModel.findById(task.idUser).select("-password"),
      };
    });

    return tasksDto;
  }

  public async getTasksByUserId(idUser: string): Promise<TaskDto[]> {
    const tasks: Task[] = await TaskModel.find({ idUser });

    const tasksDto: TaskDto[] = tasks.map((task: Task) => {
      return {
        _id: task._id.transform.toString(),
        title: task.title,
        description: task.description,
        deadline: task.deadline,
        idDate: task.idDate,
        idPriority: task.idPriority.transform.toString(),
        user: UserModel.findById(task.idUser).select("-password"),
      };
    });

    return tasksDto;
  }

  public async getTaskById(id: string): Promise<TaskDto> {
    const task: Task | null = await TaskModel.findById(id);

    if (!task) {
      throw new Error("La tarea no existe");
    }

    const taskDto: TaskDto = {
      _id: task._id.transform.toString(),
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      idDate: task.idDate,
      idPriority: task.idPriority.transform.toString(),
      user: UserModel.findById(task.idUser).select("-password"),
    };

    return taskDto;
  }

  public async updateTask(
    id: string,
    updateTaskDto: UpdateTaskDto
  ): Promise<TaskDto> {
    const updatedTask: Task | null = await TaskModel.findByIdAndUpdate(
      id,
      updateTaskDto,
      { new: true }
    );

    if (!updatedTask) {
      throw new Error("Error al actualizar la tarea");
    }

    const taskDto: TaskDto = {
      _id: updatedTask._id.transform.toString(),
      title: updatedTask.title,
      description: updatedTask.description,
      deadline: updatedTask.deadline,
      idDate: updatedTask.idDate,
      user: UserModel.findById(updatedTask.idUser).select("-password"),
      idPriority: updatedTask.idPriority.transform.toString(),
    };

    return taskDto;
  }

  public async deleteTask(id: string): Promise<TaskDto> {
    const deletedTask: Task | null = await TaskModel.findByIdAndDelete(id);

    if (!deletedTask) {
      throw new Error("Error al eliminar la tarea");
    }

    const taskDto: TaskDto = {
      _id: deletedTask._id.transform.toString(),
      title: deletedTask.title,
      description: deletedTask.description,
      deadline: deletedTask.deadline,
      idDate: deletedTask.idDate,
      user: UserModel.findById(deletedTask.idUser).select("-password"),
      idPriority: deletedTask.idPriority.transform.toString(),
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
