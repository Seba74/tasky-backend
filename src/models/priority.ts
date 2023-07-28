import { Document, Schema, model } from "mongoose";

export interface Priority extends Document {
  name: string;
  level: number;
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
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PriorityModel = model<Priority>("Priority", prioritySchema);
