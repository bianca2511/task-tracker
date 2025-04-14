export interface TaskCard {
    id?: string;
    title: string;
    description?: string;
    dueDate: Date | null;
    completed: boolean;
  }
  