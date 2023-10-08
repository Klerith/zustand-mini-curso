import { StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, type TaskStatus } from '../../interfaces';


interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  changeProgress: (taskId: number, status: TaskStatus) => void;
}


const storeApi: StateCreator<TaskState> = (set) => ({

  tasks: [
    { id: 1, title: 'Task 1', status: 'open' },
    { id: 2, title: 'Task 2', status: 'in-progress' },
    { id: 3, title: 'Task 3', status: 'open' },
    { id: 4, title: 'Task 4', status: 'open' },
  ],


  addTask: (task: Task) => {
    set(state => ({
      tasks: [...state.tasks, task],
    }));
  },

  changeProgress: (taskId: number, status: TaskStatus) => {
    
    set(state => ({
      tasks: state.tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, status };
        }
        return task;
      }),
    }));
  },


});



export const useTaskStore = create<TaskState>()(
  persist(storeApi, { name: 'task-store' })
);