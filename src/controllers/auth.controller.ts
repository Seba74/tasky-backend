import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { AuthService } from "../services/authService";

export class AuthController {
  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      const token = await AuthService.prototype.login({ email, password });

      res.json({
        ok: true,
        token,
      });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async register(req: Request, res: Response) {
    try {
      const { name, username, email, password } = req.body;

      if (!name || !email || !password) {
        throw new Error("Name, email and password are required");
      }

      const token = await AuthService.prototype.register({ name, username, email, password });

      res.json({
        ok: true,
        token,
      });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}
