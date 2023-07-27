import { Document, Schema, model } from "mongoose";
import bcrypt from "bcrypt";

export interface User extends Document {
  name: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  idRole: Schema.Types.ObjectId;

  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      maxlength: 250,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    idRole: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.method("comparePassword", function (password: string = ""): boolean {
  return bcrypt.compareSync(password, this.password);
});

export const UserModel = model<User>("User", userSchema);
