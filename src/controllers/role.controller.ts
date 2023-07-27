import { Request, Response } from "express";
import { RoleService } from "../services/roleService";

export class RoleController {
  private roleService: RoleService;

  constructor() {
    this.roleService = new RoleService();
  }

  public async getRoleById(req: Request, res: Response) {
    return this.roleService.getRoleById(req, res);
  }

  public async getRoleByName(req: Request, res: Response) {
    return this.roleService.getRoleByName(req, res);
  }

  public async getRoles(req: Request, res: Response) {
    return this.roleService.getRoles(req, res);
  }

  public async createRole(req: Request, res: Response) {
    return this.roleService.createRole(req, res);
  }

  public async updateRole(req: Request, res: Response) {
    return this.roleService.updateRole(req, res);
  }

  public async deleteRole(req: Request, res: Response) {
    return this.roleService.deleteRole(req, res);
  }
}
