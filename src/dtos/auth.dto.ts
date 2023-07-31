import { UserDto } from "./user.dto";

export interface TokenValidatorDto {
  user: UserDto | null;
  token: string;
}

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
  ok: boolean;
  token: string;
  user: UserDto;
  message: string;
}
