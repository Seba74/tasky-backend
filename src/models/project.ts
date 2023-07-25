import { Document, Schema, model } from "mongoose";

export interface Project extends Document {
  title: string;
  description: string;
  deadline: Date;
}

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,

    deadline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ProjectModel = model<Project>("Project", projectSchema);
