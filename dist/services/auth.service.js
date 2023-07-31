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
exports.AuthService = void 0;
const role_1 = require("../models/role");
const user_repository_1 = require("../repositories/implementation/user.repository");
const auth_repository_1 = require("../repositories/implementation/auth.repository");
const hasher_helper_1 = require("../helpers/hasher.helper");
class AuthService {
    constructor() {
        this.authRepository = new auth_repository_1.AuthRepository();
        this.userRepository = new user_repository_1.UserRepository();
    }
    login(loginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDto = yield this.userRepository.getUserByEmail(loginDto.email);
                if (!userDto)
                    throw new Error("Usuario o contraseña incorrecta");
                const token = yield this.authRepository.login(loginDto);
                if (!token)
                    throw new Error("Usuario o contraseña incorrecta");
                const authResponse = {
                    ok: true,
                    token,
                    user: userDto,
                    message: "Login exitoso",
                };
                return authResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    register(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userEmailExists = yield this.userRepository.emailExists(newUser.email);
                if (userEmailExists)
                    throw new Error("El email ya está registrado");
                const userUsernameExists = yield this.userRepository.usernameExists(newUser.username);
                if (userUsernameExists)
                    throw new Error("El nombre de usuario ya está registrado");
                const userRole = yield role_1.RoleModel.findOne({ name: "user" });
                if (!userRole)
                    throw new Error("No se pudo crear el usuario");
                newUser.password = (0, hasher_helper_1.hashPassword)(newUser.password);
                newUser.idRole = userRole._id;
                const token = yield this.authRepository.register(newUser);
                if (!token)
                    throw new Error("No se pudo crear el usuario");
                const authResponse = {
                    ok: true,
                    token,
                    user: yield this.userRepository.getUserByEmail(newUser.email),
                    message: "Usuario creado exitosamente",
                };
                return authResponse;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    validateToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tokenResponse = yield this.authRepository.validateToken(token);
                if (!tokenResponse)
                    throw new Error("Token no válido");
                const userAndToken = {
                    ok: true,
                    token: tokenResponse.token,
                    user: tokenResponse.user,
                };
                return userAndToken;
            }
            catch (error) {
                throw new Error('Token no válido');
            }
        });
    }
}
exports.AuthService = AuthService;
