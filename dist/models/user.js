"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 50,
    },
    password: {
        type: String,
        required: true,
        maxlength: 250,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    idRole: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Role",
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
userSchema.method("comparePassword", function (password = "") {
    return bcrypt_1.default.compareSync(password, this.password);
});
exports.UserModel = (0, mongoose_1.model)("User", userSchema);
