"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    deadline: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.ProjectModel = (0, mongoose_1.model)("Project", projectSchema);
