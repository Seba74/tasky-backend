import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import {
  loginValidator,
  registerValidator,
} from "../validators/auth.validator";

const router = Router();
const authController = new AuthController();

router.post(
  "/login",
  loginValidator,
  authController.login.bind(authController)
);

router.post(
  "/register",
  registerValidator,
  authController.register.bind(authController)
);

router.get(
  "/validate-token",
  authController.validateToken.bind(authController)
);

export default router;
