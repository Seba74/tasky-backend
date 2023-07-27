import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/authService";

const router = Router();
const authController = new AuthController();


router.post("/login", AuthService.prototype.login);

router.post("/register", AuthService.prototype.register);

router.get("/validate-token", AuthService.prototype.validateToken);

export default router;
