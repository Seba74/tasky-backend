import { Role } from "../models/role";

export interface UserDto {
    _id?: string;
    name: string;
    lastname: string;
    username: string;
    email: string;
    role: Role | null; 
}

