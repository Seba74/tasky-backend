import { Request, Response } from "express";
import { AuthService } from "../services/authService";

export class AuthController {
  private authService: AuthService;
  constructor() {
    this.authService = new AuthService();
  }

  public async login(req: Request, res: Response) {
    return await this.authService.login(req, res);
  }

  public async register(req: Request, res: Response) {
    return await this.authService.register(req, res);
  }

  public async validateToken(req: Request, res: Response) {
    return await this.authService.validateToken(req, res);
  }
}
