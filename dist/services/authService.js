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
const role_1 = require("../models/role");
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_repository_1 = require("../repositories/implementation/user.repository");
const auth_repository_1 = require("../repositories/implementation/auth.repository");
class AuthService {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                if (!email || !password)
                    return res
                        .status(400)
                        .json({ message: "Email y contraseña requeridos" });
                const userDto = yield user_repository_1.UserRepository.prototype.getUserByEmail(email);
                if (!userDto)
                    throw new Error("Usuario o contraseña incorrecta");
                const loginUser = {
                    email,
                    password,
                };
                const token = yield auth_repository_1.AuthRepository.prototype.login(loginUser);
                if (!token)
                    return res
                        .status(400)
                        .json({ message: "Usuario o contraseña incorrecta" });
                const authResponse = {
                    token,
                    user: userDto,
                    message: "Login exitoso",
                };
                res.status(200).json(authResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, lastname, username, email, password } = req.body;
                if (!name || !username || !email || !password || !lastname) {
                    return res.status(400).json({
                        message: "Todos los campos son requeridos",
                    });
                }
                const userEmailExists = yield user_repository_1.UserRepository.prototype.emailExists(email);
                if (userEmailExists)
                    return res.status(400).json({ message: "El email ya está registrado" });
                const userUsernameExists = yield user_repository_1.UserRepository.prototype.usernameExists(username);
                if (userUsernameExists)
                    return res
                        .status(400)
                        .json({ message: "El username ya está registrado" });
                const userRole = yield role_1.RoleModel.findOne({ name: "user" });
                if (!userRole)
                    return res.status(500).json({ message: "No se pudo crear el usuario" });
                // hash password
                const salt = bcrypt_1.default.genSaltSync();
                const hashPassword = bcrypt_1.default.hashSync(password, salt);
                const user = {
                    name,
                    lastname,
                    username,
                    email,
                    password: hashPassword,
                    idRole: userRole._id,
                };
                const token = yield auth_repository_1.AuthRepository.prototype.register(user);
                if (!token)
                    return res.status(500).json({ message: "No se pudo crear el usuario" });
                const authResponse = {
                    token,
                    user: yield user_repository_1.UserRepository.prototype.getUserByEmail(email),
                    message: "Usuario creado exitosamente",
                };
                res.json(authResponse);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    validateToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userToken = req.headers["authorization"] || "";
                if (!userToken)
                    return res.status(400).json({ message: "Token no válido" });
                const token = userToken.split(" ")[1];
                const newToken = yield auth_repository_1.AuthRepository.prototype.validateToken(token);
                if (!newToken)
                    return res.status(400).json({ message: "Token no válido" });
                res.json({ token });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.AuthService = AuthService;
