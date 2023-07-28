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
    getRoleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const role = yield this.roleRepository.getRoleById(id);
                if (!role)
                    throw new Error("role not found");
                const roleResponse = {
                    ok: true,
                    message: "role found",
                    data: role,
                };
                return roleResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getRoleByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const role = yield this.roleRepository.getRoleByName(name);
                if (!role)
                    throw new Error("role not found");
                const roleResponse = {
                    ok: true,
                    message: "role found",
                    data: role,
                };
                return roleResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roles = yield this.roleRepository.getRoles();
                const roleResponse = {
                    ok: true,
                    message: "roles found",
                    data: roles,
                };
                return roleResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    createRole(role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roleExists = yield this.roleRepository.roleExists(role.name);
                if (roleExists)
                    throw new Error("role already exists");
                const newRole = yield this.roleRepository.createRole(role);
                const roleResponse = {
                    ok: true,
                    message: "role created",
                    data: newRole,
                };
                return roleResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    updateRole(id, RoleToUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roleExists = yield this.roleRepository.roleExists(id);
                if (!roleExists)
                    throw new Error("role not found");
                const updatedRole = yield this.roleRepository.updateRole(id, RoleToUpdate);
                const roleResponse = {
                    ok: true,
                    message: "role updated",
                    data: updatedRole,
                };
                return roleResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    deleteRole(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const roleExists = yield this.roleRepository.roleExists(id);
                if (!roleExists)
                    throw new Error("role not found");
                const deletedRole = yield this.roleRepository.deleteRole(id);
                const roleResponse = {
                    ok: true,
                    message: "role deleted",
                    data: deletedRole,
                };
                return roleResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.RoleService = RoleService;
