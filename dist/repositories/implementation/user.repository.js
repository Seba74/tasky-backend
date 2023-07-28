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
exports.UserRepository = void 0;
const user_1 = require("../../models/user");
const role_1 = require("../../models/role");
class UserRepository {
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findById(id);
            if (!user)
                throw new Error("No se encontró el usuario");
            const userDto = {
                _id: user._id.transform.toString(),
                name: user.name,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                role: yield role_1.RoleModel.findById(user.idRole),
            };
            return userDto;
        });
    }
    getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findOne({ username });
            if (!user)
                throw new Error("No se encontró el usuario");
            const userDto = {
                _id: user._id,
                name: user.name,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                role: yield role_1.RoleModel.findById(user.idRole),
            };
            return userDto;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findOne({ email });
            if (!user)
                throw new Error("No existe un usuario con ese email");
            const userDto = {
                _id: user._id,
                name: user.name,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                role: yield role_1.RoleModel.findById(user.idRole),
            };
            return userDto;
        });
    }
    userExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findById(id);
            if (!user)
                return false;
            return true;
        });
    }
    usernameExists(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExists = yield user_1.UserModel.exists({ username });
            if (!userExists)
                return false;
            return true;
        });
    }
    emailExists(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExists = yield user_1.UserModel.exists({ email });
            if (!userExists)
                return false;
            return true;
        });
    }
}
exports.UserRepository = UserRepository;
