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
exports.RoleController = void 0;
const roleService_1 = require("../services/roleService");
class RoleController {
    constructor() {
        this.roleService = new roleService_1.RoleService();
    }
    getRoleById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roleService.getRoleById(req, res);
        });
    }
    getRoleByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roleService.getRoleByName(req, res);
        });
    }
    getRoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roleService.getRoles(req, res);
        });
    }
    createRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roleService.createRole(req, res);
        });
    }
    updateRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roleService.updateRole(req, res);
        });
    }
    deleteRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.roleService.deleteRole(req, res);
        });
    }
}
exports.RoleController = RoleController;
