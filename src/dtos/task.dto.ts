import { PriorityDto } from "./priority.dto";
import { UserDto } from "./user.dto";

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
    is_completed: boolean;
    is_expired: boolean;
    idPriority: any;
    idUser: any;
}

export interface TaskDto {
    _id?: any;
    title: string;
    description?: string;
    idDate: string;
    is_completed: boolean;
    is_expired: boolean;
    deadline: Date;
    priority: PriorityDto;
    user: UserDto;
}