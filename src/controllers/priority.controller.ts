import { Request, Response } from "express";
import { PriorityService } from "../services/priority.service";
import { CommonResponse } from "../dtos/common.dto";
import { CreatePriorityDto } from "../dtos/priority.dto";

export class PriorityController {
  private priorityService: PriorityService;

  constructor() {
    this.priorityService = new PriorityService();
  }

  public async getPriorityById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const priorityResponse: CommonResponse = await this.priorityService.getPriorityById(id);
      return res.status(200).json(priorityResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async getPriorityByName(req: Request, res: Response) {
    try{
      const { name } = req.params;

      const priorityResponse : CommonResponse = await this.priorityService.getPriorityByName(name);

      return res.status(200).json(priorityResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async getPriorityByLevel(req: Request, res: Response) {
    try{
      const { level } = req.params;
      
      const priorityResponse : CommonResponse = await this.priorityService.getPriorityByLevel(parseInt(level));

      return res.status(200).json(priorityResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async getPriorities(req: Request, res: Response) {
    try{
      const priorityResponse: CommonResponse = await this.priorityService.getPriorities();
      return res.status(200).json(priorityResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async createPriority(req: Request, res: Response) {
    try{
      const { name, level, color, color_code } = req.body;
      const newPriority : CreatePriorityDto = { name, level, color, color_code };
      const priorityResponse : CommonResponse = await this.priorityService.createPriority(newPriority);
      
      return res.status(200).json(priorityResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async updatePriority(req: Request, res: Response) {
    try{
      const { id } = req.params;
      const data = req.body;


      const priorityResponse : CommonResponse = await this.priorityService.updatePriority(id, data);

      return res.status(200).json(priorityResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }

  public async deletePriority(req: Request, res: Response) {
    try{
      const { id } = req.params;

      const priorityResponse : CommonResponse = await this.priorityService.deletePriority(id);

      return res.status(200).json(priorityResponse);
    }catch (error: any) {
      console.error(error);
      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }
}
