import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Task, type TaskStatus } from '../../interfaces';


interface TaskState {

  draggingTaskId?: number;
  tasks: Task[];

  addTask: (title: string, status: TaskStatus) => void;
  changeProgress: (taskId: number, status: TaskStatus) => void;

  setDraggingTaskId: (taskId: number) => void;
  removeDraggingTaskId: () => void;
  onTaskDrop: (status: TaskStatus) => void;
}


const storeApi: StateCreator<TaskState> = (set, get) => ({

  draggingTaskId: undefined,
  tasks: [
    { id: 1, title: 'Task 1', status: 'open' },
    { id: 2, title: 'Task 2', status: 'in-progress' },
    { id: 3, title: 'Task 3', status: 'open' },
    { id: 4, title: 'Task 4', status: 'open' },
  ],


  addTask: (title: string, status: TaskStatus) => {
    const newTask = { id: get().tasks.length + 1, title, status };

    set(state => ({
      tasks: [...state.tasks, newTask],
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

  setDraggingTaskId: (taskId: number) => {
    set({ draggingTaskId: taskId });
  },

  removeDraggingTaskId: () => {
    set({ draggingTaskId: undefined });
  },
  onTaskDrop: (status: TaskStatus) => {
    const taskId = get().draggingTaskId;
    if ( !taskId ) return;

    get().changeProgress(taskId, status);
    get().removeDraggingTaskId();
  }

});



export const useTaskStore = create<TaskState>()(
  devtools(
    persist(storeApi, { name: 'task-store' })
  )
);