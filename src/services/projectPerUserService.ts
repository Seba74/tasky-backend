import { ProjectPerUser, ProjectPerUserModel } from "../models/projectPerUser";

export class ProjectPerUserService {
  public async getProjectsByUserId(id: string) {
    const projectsPerUser: ProjectPerUser[] | null = await ProjectPerUserModel.find({ idUser: id });
    return projectsPerUser;
  }

  public async createProjectPerUser(projectPerUser: ProjectPerUser | any) {
    const newProjectPerUser: ProjectPerUser = new ProjectPerUserModel(projectPerUser);
    await newProjectPerUser.save();
    return newProjectPerUser;
  }

}
