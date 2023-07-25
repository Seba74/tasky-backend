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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const user_1 = require("../models/user");
const role_1 = require("../models/role");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_config_1 = __importDefault(require("../jwt/jwt.config"));
class AuthService {
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDB = yield user_1.UserModel.findOne({ email: user.email });
            if (!userDB) {
                throw new Error("User not found");
            }
            if (!userDB.comparePassword(user.password)) {
                throw new Error("Password is incorrect");
            }
            const token = jwt_config_1.default.getJwtToken({
                _id: userDB._id,
                username: userDB.name,
                email: userDB.email,
                idRole: userDB.idRole,
            });
            return token;
        });
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDB = yield user_1.UserModel.findOne({ email: user.email });
            if (userDB) {
                throw new Error("User already exists");
            }
            const role = yield role_1.RoleModel.findOne({ name: "user" });
            if (!role) {
                throw new Error("Role not found");
            }
            const salt = bcrypt_1.default.genSaltSync();
            const savePassword = bcrypt_1.default.hashSync(user.password, salt);
            const userToCreate = {
                name: user.name,
                username: user.username,
                email: user.email,
                password: savePassword,
                idRole: role._id,
            };
            const newUser = yield user_1.UserModel.create(userToCreate);
            const token = jwt_config_1.default.getJwtToken({
                _id: newUser._id,
                username: newUser.name,
                email: newUser.email,
                idRole: newUser.idRole,
            });
            return token;
        });
    }
}
exports.AuthService = AuthService;
