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
    getRoleByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                const role = yield roleService_1.RoleService.prototype.getRoleByName(name);
                if (!role) {
                    return res.status(404).json({ message: "Role not found" });
                }
                res.status(200).json({ message: "Role found", role });
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
                if (!name) {
                    return res.status(400).json({ message: "Name is required" });
                }
                const role = {
                    name,
                };
                const newRole = yield roleService_1.RoleService.prototype.createRole(role);
                res.status(200).json({ message: "Role Created", newRole });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.RoleController = RoleController;
