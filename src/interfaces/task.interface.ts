export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

export type TaskStatus = 'open' | 'in-progress' | 'done';

