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
exports.AuthRepository = void 0;
const jwt_config_1 = __importDefault(require("../../jwt/jwt.config"));
const role_1 = require("../../models/role");
const user_1 = require("../../models/user");
class AuthRepository {
    login(loginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findOne({
                email: loginDto.email,
            });
            if (!user)
                throw new Error("Usuario o contraseña incorrecta");
            if (!user.comparePassword(loginDto.password))
                throw new Error("Usuario o contraseña incorrecta");
            const token = jwt_config_1.default.createJwtToken({
                id: user._id,
                username: user.name,
                email: user.email,
                role: yield role_1.RoleModel.findById(user.idRole),
            });
            return token;
        });
    }
    register(registerDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.create(registerDto);
            const token = jwt_config_1.default.createJwtToken({
                id: user._id,
                username: user.name,
                email: user.email,
                role: yield role_1.RoleModel.findById(user.idRole),
            });
            return token;
        });
    }
    createToken(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield jwt_config_1.default.createJwtToken(payload);
            return token;
        });
    }
    validateToken(userToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const newToken = yield jwt_config_1.default.validateToken(userToken);
            return newToken;
        });
    }
}
exports.AuthRepository = AuthRepository;
