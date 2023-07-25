"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
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
    idTask: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Task",
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.CommentModel = (0, mongoose_1.model)("Comment", commentSchema);
