import { Document, Schema, model } from "mongoose";

export interface Task extends Document {
  title: string;
  description: string;
  deadline: Date;
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
      maxlength: 50,
    },

    deadline: {
      type: Date,
      required: true,
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
