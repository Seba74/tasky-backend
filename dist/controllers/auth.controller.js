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
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthController {
    constructor() {
        this.authService = new auth_service_1.AuthService();
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const loginData = { email, password };
                const authResponse = yield this.authService.login(loginData);
                return res.status(200).json({
                    ok: true,
                    authResponse
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: error.message
                });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, lastname, username, email, password } = req.body;
                const registerData = { name, lastname, username, email, password, idRole: '' };
                const authResponse = yield this.authService.register(registerData);
                return res.status(200).json({
                    ok: true,
                    authResponse
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: error.message
                });
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
                const newToken = yield this.authService.validateToken(token);
                return res.status(200).json({
                    ok: true,
                    token: newToken
                });
            }
            catch (error) {
                return res.status(500).json({
                    ok: false,
                    message: error.message
                });
            }
        });
    }
}
exports.AuthController = AuthController;
