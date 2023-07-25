import { Document, Schema, model } from "mongoose";

export interface Task extends Document {
  title: string;
  description: string;
  deadline: Date;
  idProject: Schema.Types.ObjectId;
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

    idProject: {
      type: Schema.Types.ObjectId,
      ref: "Project",
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