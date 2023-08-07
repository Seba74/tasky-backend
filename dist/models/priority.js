"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityModel = void 0;
const mongoose_1 = require("mongoose");
const prioritySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    level: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 1,
        min: 1,
        unique: true,
    },
    color: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 50,
    },
    color_code: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 50,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.PriorityModel = (0, mongoose_1.model)("Priority", prioritySchema);
