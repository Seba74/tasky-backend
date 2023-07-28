import { User, UserModel } from "../models/user";
import { UserRepository } from "../repositories/implementation/user.repository";
export class UserService {

  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  public async getUserById(id: string): Promise<User | null> {
    const user: User | null = await UserModel.findById(id);
    return user;
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    const user: User | null = await UserModel.findOne({ email });
    return user;
  }

  public async emailExists(email: string): Promise<boolean> {
    const user: User | null = await UserModel.findOne({ email });
    if (user) {
      return true;
    }
    return false;
  }

  public async usernameExists(username: string): Promise<boolean> {
    const user: User | null = await UserModel.findOne({ username });
    if (user) {
      return true;
    }
    return false;
  }
}
