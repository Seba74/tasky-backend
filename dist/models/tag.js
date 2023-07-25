"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagModel = void 0;
const mongoose_1 = require("mongoose");
const tagSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
    },
    idTask: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Task",
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.TagModel = (0, mongoose_1.model)("Tag", tagSchema);
