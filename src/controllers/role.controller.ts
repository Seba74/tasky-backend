import { Request, Response } from "express";
import { Role } from "../models/role";
import { RoleService } from "../services/roleService";

export class RoleController {
  public async getRoleByName(req: Request, res: Response) {
    try {
      const { name } = req.params;

      const role: Role | null = await RoleService.prototype.getRoleByName(name);

      if (!role) {
        return res.status(404).json({ message: "Role not found" });
      }

      res.status(200).json({ message: "Role found", role });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async createRole(req: Request, res: Response) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ message: "Name is required" });
      }

      const role = {
        name,
      };

      const newRole = await RoleService.prototype.createRole(role);

      res.status(200).json({ message: "Role Created", newRole });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}
