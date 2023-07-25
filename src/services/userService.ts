import { User, UserModel } from "../models/user";

export class UserService {
  public async getUserById(id: string) {
    const user: User | null = await UserModel.findById(id);
    return user;
  }

  public async getUserByEmail(email: string) {
    const user: User | null = await UserModel.findOne({ email });
    return user;
  }
}
