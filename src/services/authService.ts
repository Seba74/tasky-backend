import { Request, Response } from "express";
import { Role, RoleModel } from "../models/role";
import bcrypt from "bcrypt";
import { AuthResponse, LoginDto, RegisterDto } from "../dtos/auth.dto";
import { UserRepository } from "../repositories/implementation/user.repository";
import { AuthRepository } from "../repositories/implementation/auth.repository";
import { UserDto } from "../dtos/user.dto";

export class AuthService {
  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password)
        return res
          .status(400)
          .json({ message: "Email y contraseña requeridos" });

      const userDto: UserDto = await UserRepository.prototype.getUserByEmail(
        email
      );
      if (!userDto) throw new Error("Usuario o contraseña incorrecta");
      const loginUser: LoginDto = {
        email,
        password,
      };

      const token: string | null = await AuthRepository.prototype.login(
        loginUser
      );
      if (!token)
        return res
          .status(400)
          .json({ message: "Usuario o contraseña incorrecta" });

      const authResponse: AuthResponse = {
        token,
        user: userDto,
        message: "Login exitoso",
      };

      res.status(200).json(authResponse);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async register(req: Request, res: Response) {
    try {
      const { name, lastname, username, email, password } = req.body;

      if (!name || !username || !email || !password || !lastname) {
        return res.status(400).json({
          message: "Todos los campos son requeridos",
        });
      }

      const userEmailExists: boolean =
        await UserRepository.prototype.emailExists(email);
      if (userEmailExists)
        return res.status(400).json({ message: "El email ya está registrado" });

      const userUsernameExists: boolean =
        await UserRepository.prototype.usernameExists(username);
      if (userUsernameExists)
        return res
          .status(400)
          .json({ message: "El username ya está registrado" });

      const userRole: Role | null = await RoleModel.findOne({ name: "user" });
      if (!userRole)
        return res.status(500).json({ message: "No se pudo crear el usuario" });

      // hash password
      const salt = bcrypt.genSaltSync();
      const hashPassword = bcrypt.hashSync(password, salt);

      const user = {
        name,
        lastname,
        username,
        email,
        password: hashPassword,
        idRole: userRole._id,
      };

      const token: string | null = await AuthRepository.prototype.register(
        user
      );
      if (!token)
        return res.status(500).json({ message: "No se pudo crear el usuario" });

      const authResponse: AuthResponse = {
        token,
        user: await UserRepository.prototype.getUserByEmail(email),
        message: "Usuario creado exitosamente",
      };

      res.json(authResponse);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async validateToken(req: Request, res: Response) {
    try {
      const userToken: string = req.headers["authorization"] || "";
      if (!userToken)
        return res.status(400).json({ message: "Token no válido" });

      const token: string = userToken.split(" ")[1];

      const newToken: string | null =
        await AuthRepository.prototype.validateToken(token);

      if (!newToken)
        return res.status(400).json({ message: "Token no válido" });
      res.json({ token });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}
