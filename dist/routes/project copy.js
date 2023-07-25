"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_controller_1 = require("../controllers/project.controller");
const log_1 = require("../middleware/log");
const router = (0, express_1.Router)();
// Create Project
router.post("/:idUser", log_1.logMiddleware, project_controller_1.ProjectController.prototype.createProject);
// Get Projects by User Id
router.get("/:idUser", project_controller_1.ProjectController.prototype.getProjectsByUserId);
exports.default = router;
