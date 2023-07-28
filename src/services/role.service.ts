import { RoleRepository } from "../repositories/implementation/role.repository";
import { CreateRoleDto, RoleDto, UpdateRoleDto } from "../dtos/role.dto";
import { CommonResponse } from "../dtos/common.dto";

export class RoleService {
  private roleRepository: RoleRepository;

  constructor() {
    this.roleRepository = new RoleRepository();
  }

  public async getRoleById(id: string) {
    try {
      const role: RoleDto | null = await this.roleRepository.getRoleById(id);
      if (!role) throw new Error("role not found");

      const roleResponse: CommonResponse = {
        ok: true,
        message: "role found",
        data: role,
      };

      return roleResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getRoleByName(name: string) {
    try {
      const role: RoleDto | null = await this.roleRepository.getRoleByName(name);
      if (!role) throw new Error("role not found");

      const roleResponse: CommonResponse = {
        ok: true,
        message: "role found",
        data: role,
      };

      return roleResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getRoles() {
    try {
      const roles: RoleDto[] = await this.roleRepository.getRoles();
      const roleResponse: CommonResponse = {
        ok: true,
        message: "roles found",
        data: roles,
      };

      return roleResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async createRole(role : CreateRoleDto) {
    try {
      const roleExists: boolean = await this.roleRepository.roleExists(role.name);
      if (roleExists) throw new Error("role already exists");
      
      const newRole: RoleDto = await this.roleRepository.createRole(role);

      const roleResponse: CommonResponse = {
        ok: true,
        message: "role created",
        data: newRole,
      }

      return roleResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async updateRole(id: string, RoleToUpdate : UpdateRoleDto) {
    try {
      const roleExists: boolean = await this.roleRepository.roleExists(id);
      if (!roleExists) throw new Error("role not found");

      const updatedRole: RoleDto | null = await this.roleRepository.updateRole(id, RoleToUpdate);

      const roleResponse: CommonResponse = {
        ok: true,
        message: "role updated",
        data: updatedRole,
      }

      return roleResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async deleteRole(id: string) {
    try {
      const roleExists: boolean = await this.roleRepository.roleExists(id);
      if (!roleExists) throw new Error("role not found");

      const deletedRole: RoleDto | null = await this.roleRepository.deleteRole(id);

      const roleResponse: CommonResponse = {
        ok: true,
        message: "role deleted",
        data: deletedRole,
      }

      return roleResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
