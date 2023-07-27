import { AuthResponse, LoginDto, RegisterDto } from "../../dtos/auth.dto";

export interface AuthRepositoryInterface {
  register: (registerDto: RegisterDto) => Promise<string | null>;
  login: (loginDto: LoginDto) => Promise<string | null>;

  createToken: (payload: any) => Promise<string | null>;
  validateToken: (userToken: string) => Promise<string | null>;
}
