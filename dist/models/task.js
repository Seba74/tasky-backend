"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    description: {
        type: String,
        trim: true,
        maxlength: 50,
    },
    deadline: {
        type: Date,
        required: true,
    },
    idProject: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    idPriority: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Priority",
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.TaskModel = (0, mongoose_1.model)("Task", taskSchema);
