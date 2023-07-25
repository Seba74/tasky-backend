import { User, UserModel } from "../models/user";
import { Role, RoleModel } from "../models/role";
import { userAuth } from "../models/auth";
import bcrypt from "bcrypt";
import Token from "../jwt/jwt.config";

export class AuthService {
  public async login(user: userAuth): Promise<string> {
    const userDB: User | null = await UserModel.findOne({ email: user.email });

    if (!userDB) {
      throw new Error("User not found");
    }

    if (!userDB.comparePassword(user.password)) {
      throw new Error("Password is incorrect");
    }

    const token = Token.getJwtToken({
      _id: userDB._id,
      username: userDB.name,
      email: userDB.email,
      idRole: userDB.idRole,
    });

    return token;
  }

  public async register(user: User | any): Promise<string> {
    const userDB: User | null = await UserModel.findOne({ email: user.email });

    if (userDB) {
      throw new Error("User already exists");
    }

    const role = await RoleModel.findOne({ name: "user" });

    if (!role) {
      throw new Error("Role not found");
    }

    const salt = bcrypt.genSaltSync();
    const savePassword = bcrypt.hashSync(user.password, salt);

    const userToCreate = {
      name: user.name,
      username: user.username,
      email: user.email,
      password: savePassword,
      idRole: role._id,
    };

    const newUser = await UserModel.create(userToCreate);

    const token = Token.getJwtToken({
      _id: newUser._id,
      username: newUser.name,
      email: newUser.email,
      idRole: newUser.idRole,
    });

    return token;
  }
}
