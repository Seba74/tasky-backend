import { Role, RoleModel } from "../models/role";

export class RoleService {
  public async createRole(role: Role | any) {
    const newRole: Role = await RoleModel.create(role);
    return newRole;
  }

  public async getRoleById(id: string) {
    const role: Role | null = await RoleModel.findById(id);
    return role;
  }

  public async getRoleByName(name: string) {
    const role: Role | null = await RoleModel.findOne({ name: name });
    return role;
  }
}
