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
const role_service_1 = require("../services/role.service");
class RoleController {
    constructor() {
        this.roleService = new role_service_1.RoleService();
    }
    getRoleById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const roleResponse = yield this.roleService.getRoleById(id);
                return res.status(200).json(roleResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    getRoleByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                const roleResponse = yield this.roleService.getRoleByName(name);
                return res.status(200).json(roleResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    getRoles(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roleResponse = yield this.roleService.getRoles();
                return res.status(200).json(roleResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    createRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const newRole = { name };
                const roleResponse = yield this.roleService.createRole(newRole);
                return res.status(200).json(roleResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    updateRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name } = req.body;
                const roleToUpdate = { name };
                const roleResponse = yield this.roleService.updateRole(id, roleToUpdate);
                return res.status(200).json(roleResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
    deleteRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const roleResponse = yield this.roleService.deleteRole(id);
                return res.status(200).json(roleResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    ok: false,
                    message: error.message,
                });
            }
        });
    }
}
exports.RoleController = RoleController;
