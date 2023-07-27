// TaskBodyDto
export interface TaskBodyDto {
    title: string;
    description: string;
    idDate: string;
    codePriority: number;
    deadline: Date;
}


// create dto
export interface CreateTaskDto {
    title: string;
    description: string;
    idDate: string;
    idPriority: string;
    deadline: Date;
}

// update dto
export interface UpdateTaskDto {
    title: string;
    description: string;
    idPriority: string;
    deadline: Date;
}


export interface TaskDto {
    _id?: any;
    title: string;
    description: string;
    idDate: string;
    idPriority: string;
    deadline: Date;
    user: any;
}