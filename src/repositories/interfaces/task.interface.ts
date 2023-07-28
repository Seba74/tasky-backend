import { CreateTaskDto, TaskDto, UpdateTaskDto } from '../../dtos/task.dto';

export interface TaskRepositoryInterface {
    createTask: (createTaskDto: CreateTaskDto) => Promise<TaskDto | null>;
    updateTask: (idTask: string, updateTaskDto: UpdateTaskDto) => Promise<TaskDto | null>;
    deleteTask: (idTask: string) => Promise<TaskDto | null>;
    getTasksByUserId: (idUser: string) => Promise<TaskDto[]>;
    getAllTasks: () => Promise<TaskDto[]>;
    getTaskById: (idTask: string) => Promise<TaskDto | null>;
    taskExists: (idTask: string) => Promise<boolean>;
}