import { PriorityDto } from "./priority.dto";
import { UserDto } from "./user.dto";

export interface TaskDataDto {
    title: string;
    description?: string;
    idDate: string;
    deadline: Date;
}

// create dto
export interface CreateTaskDto {
    title: string;
    description?: string;
    idDate: string;
    deadline: Date;
    idPriority: any;
    idUser: any;
}

// update dto
export interface UpdateTaskDto {
    title: string;
    description?: string;
    idDate: string;
    deadline: Date;
    idPriority: any;
    idUser: any;
}

export interface TaskDto {
    _id?: any;
    title: string;
    description?: string;
    idDate: string;
    deadline: Date;
    priority: PriorityDto;
    user: UserDto;
}