export interface PriorityDto {
  _id?: any;
  name: string;
  level: number;
  color: string;
  color_code: string;
}

export interface CreatePriorityDto {
  name: string;
  level: number;
  color: string;
  color_code: string;
}

export interface UpdatePriorityDto {
  name: string;
  level: number;
  color: string;
  color_code: string;
}
