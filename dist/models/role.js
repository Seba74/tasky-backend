"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = void 0;
const mongoose_1 = require("mongoose");
const roleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.RoleModel = (0, mongoose_1.model)("Role", roleSchema);
