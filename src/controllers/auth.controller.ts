import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { AuthResponse, LoginDto, RegisterDto } from "../dtos/auth.dto";

export class AuthController {
  private authService: AuthService;
  constructor() {
    this.authService = new AuthService();
  }

  public async login(req: Request, res: Response) {
    try{

      const { email, password } = req.body;
      const loginData: LoginDto = { email, password };

      const authResponse: AuthResponse = await this.authService.login(loginData);
      return res.status(200).json({
        ok: true,
        authResponse
      });
    }catch(error: any){
      return res.status(500).json({
        ok: false,
        message: error.message
      });
    }
  }

  public async register(req: Request, res: Response) {
    try{
      const { name, lastname, username, email, password } = req.body;

      const registerData: RegisterDto = { name, lastname, username, email, password, idRole: '' };
      
      const authResponse: AuthResponse = await this.authService.register(registerData);
      return res.status(200).json({
        ok: true,
        authResponse
      });
    }catch(error: any){
      return res.status(500).json({
        ok: false,
        message: error.message
      });
    }
  }

  public async validateToken(req: Request, res: Response) {
    try{
      const userToken: string = req.headers["authorization"] || "";
      if (!userToken)
        return res.status(400).json({ message: "Token no válido" });
      const token: string = userToken.split(" ")[1];

      const newToken: string = await this.authService.validateToken(token);
      return res.status(200).json({
        ok: true,
        token: newToken
      });
    }catch(error: any){
      return res.status(500).json({
        ok: false,
        message: error.message
      });
    }
  }
}
