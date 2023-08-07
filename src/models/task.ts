import { Document, Schema, model } from "mongoose";

export interface Task extends Document {
  title: string;
  description: string;
  deadline: Date;
  is_completed: boolean;
  is_expired: boolean;
  idDate: string;
  idUser: Schema.Types.ObjectId;
  idPriority: Schema.Types.ObjectId;
}

const taskSchema = new Schema(
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
      maxlength: 250,
    },

    deadline: {
      type: Date,
      required: true,
    },

    is_completed: {
      type: Boolean,
      required: true,
      default: false,
    },

    is_expired: {
      type: Boolean,
      required: true,
      default: false,
    },

    idDate: {
      type: String,
      required: true,
      unique: false,
    },

    idUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    idPriority: {
      type: Schema.Types.ObjectId,
      ref: "Priority",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TaskModel = model<Task>("Task", taskSchema);
