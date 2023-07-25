import { Document, Schema, model } from "mongoose";

export interface Tag extends Document {
  name: string;
  idTask: Schema.Types.ObjectId;
}

const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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

export const TagModel = model<Tag>("Tag", tagSchema);
