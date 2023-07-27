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
exports.UserService = void 0;
const user_1 = require("../models/user");
const user_repository_1 = require("../repositories/implementation/user.repository");
class UserService {
    constructor() {
        this.userRepository = new user_repository_1.UserRepository();
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findById(id);
            return user;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findOne({ email });
            return user;
        });
    }
    emailExists(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findOne({ email });
            if (user) {
                return true;
            }
            return false;
        });
    }
    usernameExists(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.UserModel.findOne({ username });
            if (user) {
                return true;
            }
            return false;
        });
    }
}
exports.UserService = UserService;
