"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectPerUserModel = void 0;
const mongoose_1 = require("mongoose");
const projectPerUserSchema = new mongoose_1.Schema({
    idProject: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    idUser: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.ProjectPerUserModel = (0, mongoose_1.model)("ProjectPerUser", projectPerUserSchema);
