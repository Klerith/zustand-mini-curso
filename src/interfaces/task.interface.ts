export interface Task {
  id: number;
  title: string;
  status: 'open' | 'in-progress' | 'done';
}

