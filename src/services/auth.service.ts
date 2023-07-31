import { Request, Response } from "express";
import { Role, RoleModel } from "../models/role";
import { AuthResponse, LoginDto, RegisterDto, TokenValidatorDto } from "../dtos/auth.dto";
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
        ok: true,
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
      if (userUsernameExists) throw new Error("El nombre de usuario ya está registrado");

      const userRole: Role | null = await RoleModel.findOne({ name: "user" });
      if (!userRole) throw new Error("No se pudo crear el usuario");

      newUser.password = hashPassword(newUser.password);
      newUser.idRole = userRole._id;

      const token: string | null = await this.authRepository.register(newUser);
      if (!token) throw new Error("No se pudo crear el usuario");

      const authResponse: AuthResponse = {
        ok: true,
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
      const tokenResponse: TokenValidatorDto = await this.authRepository.validateToken(token);
      if (!tokenResponse) throw new Error("Token no válido");

      const userAndToken: any = {
        ok: true,
        token: tokenResponse.token,
        user: tokenResponse.user,
      };
      return userAndToken;
    } catch (error: any) {
      throw new Error('Token no válido');
    }
  }
}
