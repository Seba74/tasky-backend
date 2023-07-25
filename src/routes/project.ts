import { Router } from "express";
import { ProjectController } from "../controllers/project.controller";
import { logMiddleware } from "../middleware/log";
import { tokenAuthMiddleware } from "../middleware/token.auth";

const router = Router();

// Create Project
router.post("/:idUser", tokenAuthMiddleware, ProjectController.prototype.createProject);

// Get Projects by User Id
router.get("/:idUser", tokenAuthMiddleware, ProjectController.prototype.getProjectsByUserId);

// Get All Projects
router.get("/", tokenAuthMiddleware, ProjectController.prototype.getAllProjects);

export default router;
