import { CreateRoleDto, RoleDto, UpdateRoleDto } from "../../dtos/role.dto";
import { RoleModel } from "../../models/role";
import { RoleRepositoryInterface } from "../interfaces/role.interface";

export class RoleRepository implements RoleRepositoryInterface {
  public async getRoleById(id: string): Promise<RoleDto | null> {
    const role: RoleDto | null = await RoleModel.findById(id);
    return role;
  }

  public async getRoleByName(name: string): Promise<RoleDto | null> {
    const role: RoleDto | null = await RoleModel.findOne({ name });
    return role;
  }

  public async getRoles(): Promise<RoleDto[]> {
    const roles: RoleDto[] = await RoleModel.find();
    return roles;
  }

  public async createRole(roleDto: CreateRoleDto): Promise<RoleDto> {
    const role: RoleDto = await RoleModel.create(roleDto);
    return role;
  }

  public async updateRole(id: string, roleDto: UpdateRoleDto): Promise<RoleDto | null> {
    const roleUpdated : RoleDto | null = await RoleModel.findByIdAndUpdate(id, roleDto, {new: true});
    return roleUpdated;
  }

  public async deleteRole(id: string): Promise<RoleDto | null> {
    const roleDeleted : RoleDto | null = await RoleModel.findByIdAndDelete(id);
    return roleDeleted;
  }

  public async roleExists(name: string): Promise<boolean> {
    const role: RoleDto | null = await RoleModel.findOne({ name });
    if (role) {
      return true;
    }
    return false;
  }

}
