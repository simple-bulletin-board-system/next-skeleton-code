export enum EPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface ITodo {
  id?: number;
  content: string;
  completed?: boolean;
  priority?: EPriority;
  categoryIds?: number[];
}
