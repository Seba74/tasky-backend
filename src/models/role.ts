import { Document, Schema, model } from "mongoose";

export interface Role extends Document {
  name: string;
}

const roleSchema = new Schema(
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

export const RoleModel = model<Role>("Role", roleSchema);
