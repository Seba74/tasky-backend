import { Document, Schema, model } from "mongoose";

export interface Priority extends Document {
  name: string;
}

const prioritySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PriorityModel = model<Priority>("Priority", prioritySchema);
