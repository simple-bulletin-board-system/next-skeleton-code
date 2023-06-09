export enum EPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface ITodo {
  id?: string;
  content: string;
  completed?: boolean;
  priority?: EPriority;
  categoryIds?: string[];
}
