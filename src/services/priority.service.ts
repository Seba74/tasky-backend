import { PriorityRepository } from "../repositories/implementation/priority.repository";
import { CreatePriorityDto, PriorityDto, UpdatePriorityDto } from "../dtos/priority.dto";
import { CommonResponse } from '../dtos/common.dto';

export class PriorityService {
  private priorityRepository: PriorityRepository;

  constructor() {
    this.priorityRepository = new PriorityRepository();
  }

  public async getPriorityById(id: string) {
    try {
      const priority: PriorityDto | null = await this.priorityRepository.getPriorityById(id);
      if (!priority) throw new Error("priority not found");

      const priorityResponse: CommonResponse = {
        ok: true,
        message: "priority found",
        data: priority,
      };

      return priorityResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getPriorityByName(name: string) {
    try {
      const priority: PriorityDto | null = await this.priorityRepository.getPriorityByName(name);
      if (!priority) throw new Error("priority not found");

      const priorityResponse: CommonResponse = {
        ok: true,
        message: "priority found",
        data: priority,
      };

      return priorityResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getPriorityByLevel(level: number) {
    try {
      const priority: PriorityDto | null = await this.priorityRepository.getPriorityByLevel(level);
      if (!priority) throw new Error("priority not found");

      const priorityResponse: CommonResponse = {
        ok: true,
        message: "priority found",
        data: priority,
      };

      return priorityResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getPriorities() {
    try {
      const priorities: PriorityDto[] = await this.priorityRepository.getPriorities();
      const priorityResponse: CommonResponse = {
        ok: true,
        message: "priorities found",
        data: priorities,
      };

      return priorityResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async createPriority(priority : CreatePriorityDto) {
    try {
      const priorityExists: boolean = await this.priorityRepository.priorityExists(priority.name);
      if (priorityExists) throw new Error("priority already exists");
      
      const newpriority: PriorityDto = await this.priorityRepository.createPriority(priority);

      const priorityResponse: CommonResponse = {
        ok: true,
        message: "priority created",
        data: newpriority,
      }

      return priorityResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async updatePriority(id: string, data : any) {
    try {
      const actualPriority: PriorityDto | null = await this.priorityRepository.getPriorityById(id);
      if (!actualPriority) throw new Error("priority not found");

      const priorityToUpdate: UpdatePriorityDto = {
        name: data.name || actualPriority.name,
        level: data.level || actualPriority.level,
        color: data.color || actualPriority.color,
        color_code: data.color_code || actualPriority.color_code,
      }
      
      const updatedPriority: PriorityDto | null = await this.priorityRepository.updatePriority(id, priorityToUpdate);

      const priorityResponse: CommonResponse = {
        ok: true,
        message: "priority updated",
        data: updatedPriority,
      }

      return priorityResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async deletePriority(id: string) {
    try {
      const priorityExists: boolean = await this.priorityRepository.priorityIdExists(id);
      if (!priorityExists) throw new Error("priority not found");

      const deletedPriority: PriorityDto | null = await this.priorityRepository.deletePriority(id);

      const priorityResponse: CommonResponse = {
        ok: true,
        message: "priority deleted",
        data: deletedPriority,
      }

      return priorityResponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
