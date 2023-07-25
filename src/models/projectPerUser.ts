import { Document, Schema, model } from "mongoose";

export interface ProjectPerUser extends Document {
  idProject: Schema.Types.ObjectId;
  idUser: Schema.Types.ObjectId;
}

const projectPerUserSchema = new Schema<ProjectPerUser>(
  {
    idProject: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    idUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ProjectPerUserModel = model<ProjectPerUser>(
  "ProjectPerUser",
  projectPerUserSchema
);
