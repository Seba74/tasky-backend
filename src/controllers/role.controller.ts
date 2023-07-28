import { Request, Response } from "express";
import { RoleService } from "../services/role.service";
import { CommonResponse } from "../dtos/common.dto";
import { CreateRoleDto, UpdateRoleDto } from "../dtos/role.dto";

export class RoleController {
  private roleService: RoleService;

  constructor() {
    this.roleService = new RoleService();
  }

  public async getRoleById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const roleResponse: CommonResponse = await this.roleService.getRoleById(id);
      return res.status(200).json(roleResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async getRoleByName(req: Request, res: Response) {
    try{
      const { name } = req.params;

      const roleResponse : CommonResponse = await this.roleService.getRoleByName(name);

      return res.status(200).json(roleResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async getRoles(_req: Request, res: Response) {
    try{
      const roleResponse: CommonResponse = await this.roleService.getRoles();
      return res.status(200).json(roleResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async createRole(req: Request, res: Response) {
    try{
      const { name } = req.body;
      const newRole : CreateRoleDto = { name };
      const roleResponse : CommonResponse = await this.roleService.createRole(newRole);
      
      return res.status(200).json(roleResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async updateRole(req: Request, res: Response) {
    try{
      const { id } = req.params;
      const { name} = req.body;

      const roleToUpdate : UpdateRoleDto = { name };

      const roleResponse : CommonResponse = await this.roleService.updateRole(id, roleToUpdate);

      return res.status(200).json(roleResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async deleteRole(req: Request, res: Response) {
    try{
      const { id } = req.params;

      const roleResponse : CommonResponse = await this.roleService.deleteRole(id);

      return res.status(200).json(roleResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }
}
