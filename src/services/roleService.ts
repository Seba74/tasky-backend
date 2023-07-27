import { Request, Response } from "express";
import { RoleRepository } from "../repositories/implementation/role.repository";
import { RoleDto, UpdateRoleDto } from "../dtos/role.dto";

export class RoleService {
  private roleRepository: RoleRepository;

  constructor() {
    this.roleRepository = new RoleRepository();
  }

  public async getRoleById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const role: RoleDto | null = await this.roleRepository.getRoleById(id);
      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }

      res.status(200).json({
        message: "Role found",
        role,
      });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async getRoleByName(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const role: RoleDto | null = await this.roleRepository.getRoleByName(
        name
      );
      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }
      res.status(200).json({
        message: "Role found",
        role,
      });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async getRoles(req: Request, res: Response) {
    try {
      const roles: RoleDto[] = await this.roleRepository.getRoles();
      res.status(200).json({
        message: "Roles found",
        roles,
      });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async createRole(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const roleExists: boolean = await this.roleRepository.roleExists(name);
      if (roleExists) {
        return res.status(400).json({ message: "Role already exists" });
      }
      const newRole: RoleDto = await this.roleRepository.createRole(req.body);
      res.status(201).json({
        message: "Role created",
        newRole,
      });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async updateRole(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const role: RoleDto | null = await this.roleRepository.getRoleById(id);
      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }

      const updateRoleDto: UpdateRoleDto = {
        name: name || role.name,
      };

      const updatedRole: RoleDto | null = await this.roleRepository.updateRole(
        id,
        updateRoleDto
      );
      res.status(200).json({
        message: "Role updated",
        updatedRole,
      });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async deleteRole(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const role: RoleDto | null = await this.roleRepository.getRoleById(id);
      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }
      const deletedRole: RoleDto | null = await this.roleRepository.deleteRole(
        id
      );
      res.status(200).json({
        message: "Role deleted",
        deletedRole,
      });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}
