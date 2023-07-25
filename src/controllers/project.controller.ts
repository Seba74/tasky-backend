import { Request, Response } from "express";
import { Project } from "../models/project";
import { User } from "../models/user";
import { ProjectPerUser } from "../models/projectPerUser";
import { ProjectService } from "../services/projectService";
import { ProjectPerUserService } from "../services/projectPerUserService";
import { UserService } from "../services/userService";

export class ProjectController {
  public async getProjectsByUserId(req: Request, res: Response) {
    try {
      const { idUser } = req.params;

      if (!idUser) {
        throw new Error("Missing fields");
      }

      const user: User | null = await UserService.prototype.getUserById(idUser);
      if (!user) {
        throw new Error("User not found");
      }

      const projectPerUser: ProjectPerUser[] | null =
        await ProjectPerUserService.prototype.getProjectsByUserId(idUser);
      if (!projectPerUser) {
        throw new Error("Project not found");
      }

      const projects: Project[] = [];

      for (const project of projectPerUser) {
        const projectFound = await ProjectService.prototype.getProjectById(
          project.idProject.toString()
        );
        if (projectFound) {
          projects.push(projectFound);
        }
      }

      res.status(200).json({ message: "Projects found", projects });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async getAllProjects(req: Request, res: Response) {
    try {
      const projects: Project[] | null =
        await ProjectService.prototype.getAllProjects();

      if (!projects) {
        throw new Error("Projects not found");
      }

      res.status(200).json({ message: "Projects found", projects });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async updateProject(req: Request, res: Response) {
    try {
      const { idProject } = req.params;
      const body = req.body;

      if (!idProject) {
        throw new Error("Missing fields");
      }
      const project: Project | null =
        await ProjectService.prototype.getProjectById(idProject);
      if (!project) {
        throw new Error("Project not found");
      }

      const projectUpdated = await ProjectService.prototype.updateProject(
        idProject,
        body
      );
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  public async createProject(req: Request, res: Response) {
    try {
      const { title, description } = req.body;
      const { idUser } = req.params;

      if (!title || !description || !idUser) {
        throw new Error("Missing fields");
      }

      const user: User | null = await UserService.prototype.getUserById(idUser);
      if (!user) {
        throw new Error("User not found");
      }

      const project = {
        title,
        description,
        deadline: new Date(),
      };

      const newProject: Project = await ProjectService.prototype.createProject(
        project
      );

      const projectPerUser = {
        idProject: newProject._id,
        idUser,
      };

      const newProjectPerUser: ProjectPerUser =
        await ProjectPerUserService.prototype.createProjectPerUser(
          projectPerUser
        );
      await newProjectPerUser.save();

      res.status(201).json({ message: "Project created", project: newProject });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
}
