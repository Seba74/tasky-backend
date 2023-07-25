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
exports.ProjectService = void 0;
const project_1 = require("../models/project");
class ProjectService {
    getProjectById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield project_1.ProjectModel.findById(id);
            return project;
        });
    }
    getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield project_1.ProjectModel.find();
            return projects;
        });
    }
    updateProject(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectUpdated = yield project_1.ProjectModel.findByIdAndUpdate(id, data, { new: true });
            return projectUpdated;
        });
    }
    createProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProject = new project_1.ProjectModel(project);
            yield newProject.save();
            return newProject;
        });
    }
}
exports.ProjectService = ProjectService;
