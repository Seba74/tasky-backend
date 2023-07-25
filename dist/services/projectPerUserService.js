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
exports.ProjectPerUserService = void 0;
const projectPerUser_1 = require("../models/projectPerUser");
class ProjectPerUserService {
    getProjectsByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectsPerUser = yield projectPerUser_1.ProjectPerUserModel.find({ idUser: id });
            return projectsPerUser;
        });
    }
    createProjectPerUser(projectPerUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProjectPerUser = new projectPerUser_1.ProjectPerUserModel(projectPerUser);
            yield newProjectPerUser.save();
            return newProjectPerUser;
        });
    }
}
exports.ProjectPerUserService = ProjectPerUserService;
