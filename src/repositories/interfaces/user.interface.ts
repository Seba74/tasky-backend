import { UserDto } from "../../dtos/user.dto";

export interface UserRepositoryInterface {
  getUserById: (id: string) => Promise<UserDto>;
  getUserByUsername: (username: string) => Promise<UserDto>;
  getUserByEmail: (email: string) => Promise<UserDto>;
  userExists: (id: string) => Promise<boolean>;
  usernameExists: (username: string) => Promise<boolean>;
  emailExists: (email: string) => Promise<boolean>;
}
