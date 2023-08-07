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
class UserRepository {
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findById(id).populate("idRole");
            if (!user)
                throw new Error("No se encontró el usuario");
            const userDto = {
                _id: user._id,
                name: user.name,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                role: user.idRole
            };
            return userDto;
        });
    }
    getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findOne({ username }).populate("idRole");
            if (!user)
                throw new Error("No se encontró el usuario");
            const userDto = {
                _id: user._id,
                name: user.name,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                role: user.idRole,
            };
            return userDto;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findOne({ email }).populate("idRole");
            if (!user)
                throw new Error("No existe un usuario con ese email");
            const userDto = {
                _id: user._id,
                name: user.name,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
                role: user.idRole,
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
