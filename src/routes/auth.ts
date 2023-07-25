import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

const router = Router();

router.post("/login", AuthController.prototype.login);

router.post("/register", AuthController.prototype.register);

export default router;