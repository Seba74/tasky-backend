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
exports.RoleRepository = void 0;
const role_1 = require("../../models/role");
class RoleRepository {
    getRoleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield role_1.RoleModel.findById(id);
            return role;
        });
    }
    getRoleByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield role_1.RoleModel.findOne({ name });
            return role;
        });
    }
    getRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield role_1.RoleModel.find();
            return roles;
        });
    }
    createRole(roleDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield role_1.RoleModel.create(roleDto);
            return role;
        });
    }
    updateRole(id, roleDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const roleUpdated = yield role_1.RoleModel.findByIdAndUpdate(id, roleDto, { new: true });
            return roleUpdated;
        });
    }
    deleteRole(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const roleDeleted = yield role_1.RoleModel.findByIdAndDelete(id);
            return roleDeleted;
        });
    }
    roleExists(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield role_1.RoleModel.findOne({ name });
            if (role) {
                return true;
            }
            return false;
        });
    }
}
exports.RoleRepository = RoleRepository;
