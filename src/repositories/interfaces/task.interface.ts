import { CreateTaskDto, TaskDto, UpdateTaskDto } from '../../dtos/task.dto';

export interface TaskRepositoryInterface {
    createTask: (idUser: string, createTaskDto: CreateTaskDto) => Promise<TaskDto>;
    updateTask: (idTask: string, updateTaskDto: UpdateTaskDto) => Promise<TaskDto>;
    deleteTask: (idTask: string) => Promise<TaskDto>;
    getTasksByUserId: (idUser: string) => Promise<TaskDto[]>;
    getAllTasks: () => Promise<TaskDto[]>;
    getTaskById: (idTask: string) => Promise<TaskDto>;
    taskExists: (idTask: string) => Promise<boolean>;
}