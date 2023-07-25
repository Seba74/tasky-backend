"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_controller_1 = require("../controllers/project.controller");
const token_auth_1 = require("../middleware/token.auth");
const router = (0, express_1.Router)();
// Create Project
router.post("/:idUser", token_auth_1.tokenAuthMiddleware, project_controller_1.ProjectController.prototype.createProject);
// Get Projects by User Id
router.get("/:idUser", token_auth_1.tokenAuthMiddleware, project_controller_1.ProjectController.prototype.getProjectsByUserId);
// Get All Projects
router.get("/", token_auth_1.tokenAuthMiddleware, project_controller_1.ProjectController.prototype.getAllProjects);
exports.default = router;
