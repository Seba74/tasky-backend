import { Project, ProjectModel } from "../models/project";

export class ProjectService {
  public async getProjectById(id: string) {
    const project: Project | null = await ProjectModel.findById(id);
    return project; 
  }

  public async getAllProjects() {
    const projects: Project[] | null = await ProjectModel.find();
    return projects;
  }

  public async updateProject(id: string, data: any) {

    const projectUpdated = await ProjectModel.findByIdAndUpdate(id, data, { new: true });
    return projectUpdated;
  }

  public async createProject(project: Project | any) {
    const newProject: Project = new ProjectModel(project);
    await newProject.save();
    return newProject;
  }
}
