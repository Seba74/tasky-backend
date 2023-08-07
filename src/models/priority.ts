import { Document, Schema, model } from "mongoose";

export interface Priority extends Document {
  name: string;
  level: number;
  color: string;
  color_code: string;
}

const prioritySchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PriorityModel = model<Priority>("Priority", prioritySchema);
