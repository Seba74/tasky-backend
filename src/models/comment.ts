import { Document, Schema, model } from "mongoose";

export interface Comment extends Document {
  title: string;
  description: string;
  idTask: Schema.Types.ObjectId;
}

const commentSchema = new Schema(
  {
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
      type: Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const CommentModel = model<Comment>("Comment", commentSchema);
