import { Request, Response } from "express";
import { Role, RoleModel } from "../models/role";
import { AuthResponse, LoginDto, RegisterDto } from "../dtos/auth.dto";
import { UserRepository } from "../repositories/implementation/user.repository";
import { AuthRepository } from "../repositories/implementation/auth.repository";
import { UserDto } from "../dtos/user.dto";
import { hashPassword } from "../helpers/hasher.helper";

export class AuthService {
  private authRepository: AuthRepository;
  private userRepository: UserRepository;
  constructor() {
    this.authRepository = new AuthRepository();
    this.userRepository = new UserRepository();
  }

  public async login(loginDto: LoginDto) {
    try {
      const userDto: UserDto = await this.userRepository.getUserByEmail(
        loginDto.email
      );
      if (!userDto) throw new Error("Usuario o contraseña incorrecta");

      const token: string | null = await this.authRepository.login(loginDto);
      if (!token) throw new Error("Usuario o contraseña incorrecta");

      const authResponse: AuthResponse = {
        token,
        user: userDto,
        message: "Login exitoso",
      };
      return authResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async register(newUser: RegisterDto) {
    try {
      const userEmailExists: boolean = await this.userRepository.emailExists(
        newUser.email
      );
      if (userEmailExists) throw new Error("El email ya está registrado");

      const userUsernameExists: boolean =
        await this.userRepository.usernameExists(newUser.username);
      if (userUsernameExists) throw new Error("El username ya está registrado");

      const userRole: Role | null = await RoleModel.findOne({ name: "user" });
      if (!userRole) throw new Error("No se pudo crear el usuario");

      newUser.password = hashPassword(newUser.password);
      newUser.idRole = userRole._id;

      const token: string | null = await this.authRepository.register(newUser);
      if (!token) throw new Error("No se pudo crear el usuario");

      const authResponse: AuthResponse = {
        token,
        user: await this.userRepository.getUserByEmail(newUser.email),
        message: "Usuario creado exitosamente",
      };

      return authResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async validateToken(token: string) {
    try {
      const newToken: string | null = await this.authRepository.validateToken(token);
      if (!newToken) throw new Error("Token no válido");

      return newToken;
    } catch (error: any) {
      throw new Error('Token no válido');
    }
  }
}
