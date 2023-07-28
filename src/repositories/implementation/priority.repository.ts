import { CreatePriorityDto, PriorityDto, UpdatePriorityDto } from "../../dtos/priority.dto";
import { PriorityModel } from "../../models/priority";
import { PriorityRepositoryInterface } from "../interfaces/priority.interface";

export class PriorityRepository implements PriorityRepositoryInterface {
  public async getPriorityById(id: string): Promise<PriorityDto | null> {
    const priority: PriorityDto | null = await PriorityModel.findById(id);
    return priority;
  }

  public async getPriorityByName(name: string): Promise<PriorityDto | null> {
    const priority: PriorityDto | null = await PriorityModel.findOne({ name });
    return priority;
  }

  public async getPriorityByLevel(level: number): Promise<PriorityDto | null> {
    const priority: PriorityDto | null = await PriorityModel.findOne({ level });
    return priority;
  }

  public async getPriorities(): Promise<PriorityDto[]> {
    const priorities: PriorityDto[] = await PriorityModel.find();
    return priorities;
  }

  public async createPriority(priorityDto: CreatePriorityDto): Promise<PriorityDto> {
    const priority: PriorityDto = await PriorityModel.create(priorityDto);
    return priority;
  }

  public async updatePriority(id: string, priorityDto: UpdatePriorityDto): Promise<PriorityDto | null> {
    const priorityUpdated : PriorityDto | null = await PriorityModel.findByIdAndUpdate(id, priorityDto, {new: true});
    return priorityUpdated;
  }

  public async deletePriority(id: string): Promise<PriorityDto | null> {
    const priorityDeleted : PriorityDto | null = await PriorityModel.findByIdAndDelete(id);
    return priorityDeleted;
  }

  public async priorityIdExists(id: string): Promise<boolean> {
    const priority: PriorityDto | null = await PriorityModel.findById(id);
    if (priority) {
      return true;
    }
    return false;
  }

  public async priorityExists(name: string): Promise<boolean> {
    const priority: PriorityDto | null = await PriorityModel.findOne({ name });
    if (priority) {
      return true;
    }
    return false;
  }

}
