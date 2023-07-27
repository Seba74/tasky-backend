import { LoginDto, RegisterDto } from "../../dtos/auth.dto";
import Token from "../../jwt/jwt.config";
import { RoleModel } from "../../models/role";
import { User, UserModel } from "../../models/user";
import { AuthRepositoryInterface } from "../interfaces/auth.interface";

export class AuthRepository implements AuthRepositoryInterface {
  public async login(loginDto: LoginDto): Promise<string | null> {
    const user: User | null = await UserModel.findOne({
      email: loginDto.email,
    });
    if (!user) throw new Error("Usuario o contraseña incorrecta");

    if (!user.comparePassword(loginDto.password))
      throw new Error("Usuario o contraseña incorrecta");

    const token = Token.createJwtToken({
      id: user._id,
      username: user.name,
      email: user.email,
      role: await RoleModel.findById(user.idRole),
    });

    return token;
  }

  public async register(registerDto: RegisterDto): Promise<string | null> {
    const user: User = await UserModel.create(registerDto);

    const token = Token.createJwtToken({
      id: user._id,
      username: user.name,
      email: user.email,
      role: await RoleModel.findById(user.idRole),
    });

    return token;
  }

  public async createToken(payload: any): Promise<string | null> {
    const token = await Token.createJwtToken(payload);
    return token;
  }

  public async validateToken(userToken: string): Promise<string | null> {
    return Token.validateToken(userToken);
  }
}
