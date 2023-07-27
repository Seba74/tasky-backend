import { Role } from "../models/role";
import { UserDto } from "./user.dto";

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  idRole: any;
}

export interface AuthResponse {
  token: string;
  user: UserDto;
  message: string;
}
