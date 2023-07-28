"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = (password) => {
    const salt = bcrypt_1.default.genSaltSync();
    const hashPassword = bcrypt_1.default.hashSync(password, salt);
    return hashPassword;
};
exports.hashPassword = hashPassword;
