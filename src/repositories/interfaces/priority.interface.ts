import { PriorityDto, CreatePriorityDto, UpdatePriorityDto } from '../../dtos/priority.dto';

export interface PriorityRepositoryInterface {
    getPriorityById(id: string): Promise<PriorityDto | null>;
    getPriorityByName(name: string): Promise<PriorityDto | null>;
    getPriorityByLevel(level: number): Promise<PriorityDto | null>;
    getPriorities(): Promise<PriorityDto[]>;
    createPriority(PriorityDto: CreatePriorityDto): Promise<PriorityDto>;
    updatePriority(id: string, PriorityDto: UpdatePriorityDto): Promise<PriorityDto | null>;
    deletePriority(id: string): Promise<PriorityDto | null>;
    priorityIdExists(id: string): Promise<boolean>;
    priorityExists(name: string): Promise<boolean>;
}