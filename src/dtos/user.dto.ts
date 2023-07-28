import { RoleDto } from "./role.dto";
export interface UserDto {
    _id?: any;
    name: string;
    lastname: string;
    username: string;
    email: string;
    idRole?: RoleDto | null; 
}

