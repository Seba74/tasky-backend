export interface PriorityDto {
  _id?: any;
  name: string;
  level: number;
}

export interface CreatePriorityDto {
  name: string;
  level: number;
}

export interface UpdatePriorityDto {
  name: string;
  level: number;
}
