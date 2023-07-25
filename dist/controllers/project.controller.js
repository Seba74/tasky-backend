"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const projectService_1 = require("../services/projectService");
const projectPerUserService_1 = require("../services/projectPerUserService");
const userService_1 = require("../services/userService");
class ProjectController {
    getProjectsByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idUser } = req.params;
                if (!idUser) {
                    throw new Error("Missing fields");
                }
                const user = yield userService_1.UserService.prototype.getUserById(idUser);
                if (!user) {
                    throw new Error("User not found");
                }
                const projectPerUser = yield projectPerUserService_1.ProjectPerUserService.prototype.getProjectsByUserId(idUser);
                if (!projectPerUser) {
                    throw new Error("Project not found");
                }
                const projects = [];
                for (const project of projectPerUser) {
                    const projectFound = yield projectService_1.ProjectService.prototype.getProjectById(project.idProject.toString());
                    if (projectFound) {
                        projects.push(projectFound);
                    }
                }
                res.status(200).json({ message: "Projects found", projects });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    getAllProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield projectService_1.ProjectService.prototype.getAllProjects();
                if (!projects) {
                    throw new Error("Projects not found");
                }
                res.status(200).json({ message: "Projects found", projects });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    updateProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idProject } = req.params;
                const body = req.body;
                if (!idProject) {
                    throw new Error("Missing fields");
                }
                const project = yield projectService_1.ProjectService.prototype.getProjectById(idProject);
                if (!project) {
                    throw new Error("Project not found");
                }
                const projectUpdated = yield projectService_1.ProjectService.prototype.updateProject(idProject, body);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    createProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description } = req.body;
                const { idUser } = req.params;
                if (!title || !description || !idUser) {
                    throw new Error("Missing fields");
                }
                const user = yield userService_1.UserService.prototype.getUserById(idUser);
                if (!user) {
                    throw new Error("User not found");
                }
                const project = {
                    title,
                    description,
                    deadline: new Date(),
                };
                const newProject = yield projectService_1.ProjectService.prototype.createProject(project);
                const projectPerUser = {
                    idProject: newProject._id,
                    idUser,
                };
                const newProjectPerUser = yield projectPerUserService_1.ProjectPerUserService.prototype.createProjectPerUser(projectPerUser);
                yield newProjectPerUser.save();
                res.status(201).json({ message: "Project created", project: newProject });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.ProjectController = ProjectController;
