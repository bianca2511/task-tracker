export interface TaskCard {
  id?: string;
  title: string;
  description?: string;
  dueDate: Date | null;
  completed: boolean;
  subtasks?: Subtask[];
}

export interface Subtask {
  title: string;
  completed: boolean;
}
