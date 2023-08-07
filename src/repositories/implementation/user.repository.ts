import { UserModel, User } from "../../models/user";
import { UserRepositoryInterface } from "../interfaces/user.interface";
import { UserDto } from "../../dtos/user.dto";

export class UserRepository implements UserRepositoryInterface {
  
  public async getUserById(id: any): Promise<UserDto> {
    
    const user: User | null = await UserModel.findById(id).populate("idRole");
    if (!user) throw new Error("No se encontró el usuario");

    const userDto: any = {
      _id: user._id,
      name: user.name,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      role: user.idRole
    }

    return userDto;
  }

  public async getUserByUsername(username: string): Promise<UserDto> {
    const user: User | null = await UserModel.findOne({ username }).populate("idRole");
    if (!user) throw new Error("No se encontró el usuario");

    const userDto: any = {
      _id: user._id,
      name: user.name,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      role: user.idRole,
    }

    return userDto;
  }

  public async getUserByEmail(email: string): Promise<UserDto> {
    const user: User | null = await UserModel.findOne({ email }).populate("idRole");
    if (!user) throw new Error("No existe un usuario con ese email");

    const userDto: any = {
      _id: user._id,
      name: user.name,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      role: user.idRole,
    }
    return userDto;
  }

  public async userExists(id: string): Promise<boolean>{
    const user: User | null = await UserModel.findById(id);
    if (!user) return false;
    return true;
  }

  public async usernameExists(username: string): Promise<boolean>{
    const userExists = await UserModel.exists({ username });
    if(!userExists) return false;
    return true;
  }

  public async emailExists(email: string): Promise<boolean>{
    const userExists = await UserModel.exists({ email });
    if(!userExists) return false;
    return true;
  }

}
