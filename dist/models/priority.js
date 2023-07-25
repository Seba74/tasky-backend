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
}, {
    timestamps: true,
    versionKey: false,
});
exports.PriorityModel = (0, mongoose_1.model)("Priority", prioritySchema);
