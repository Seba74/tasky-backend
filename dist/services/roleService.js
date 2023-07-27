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
exports.RoleService = void 0;
const role_repository_1 = require("../repositories/implementation/role.repository");
class RoleService {
    constructor() {
        this.roleRepository = new role_repository_1.RoleRepository();
    }
    getRoleById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const role = yield this.roleRepository.getRoleById(id);
                if (!role) {
                    return res.status(404).json({ message: "Role not found" });
                }
                res.status(200).json({
                    message: "Role found",
                    role,
                });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    getRoleByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                const role = yield this.roleRepository.getRoleByName(name);
                if (!role) {
                    return res.status(404).json({ message: "Role not found" });
                }
                res.status(200).json({
                    message: "Role found",
                    role,
                });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    getRoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roles = yield this.roleRepository.getRoles();
                res.status(200).json({
                    message: "Roles found",
                    roles,
                });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    createRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const roleExists = yield this.roleRepository.roleExists(name);
                if (roleExists) {
                    return res.status(400).json({ message: "Role already exists" });
                }
                const newRole = yield this.roleRepository.createRole(req.body);
                res.status(201).json({
                    message: "Role created",
                    newRole,
                });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    updateRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name } = req.body;
                const role = yield this.roleRepository.getRoleById(id);
                if (!role) {
                    return res.status(404).json({ message: "Role not found" });
                }
                const updateRoleDto = {
                    name: name || role.name,
                };
                const updatedRole = yield this.roleRepository.updateRole(id, updateRoleDto);
                res.status(200).json({
                    message: "Role updated",
                    updatedRole,
                });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    deleteRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const role = yield this.roleRepository.getRoleById(id);
                if (!role) {
                    return res.status(404).json({ message: "Role not found" });
                }
                const deletedRole = yield this.roleRepository.deleteRole(id);
                res.status(200).json({
                    message: "Role deleted",
                    deletedRole,
                });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.RoleService = RoleService;
