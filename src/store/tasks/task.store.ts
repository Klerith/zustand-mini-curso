import { StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task } from '../../interfaces';


interface TaskState {
  tasks: Task[];
  addTask: ( task: Task ) => void;
  updateTask: ( task: Task ) => void;
  deleteTask: ( id: number ) => void;
}


const storeApi:StateCreator<TaskState> = ( set ) => ( {

  tasks: [
    { id: 1, title: 'Task 1', status: 'open' },
    { id: 2, title: 'Task 2', status: 'in-progress' },
    { id: 3, title: 'Task 3', status: 'open' },
    { id: 4, title: 'Task 4', status: 'open' },
  ],


  addTask: ( task: Task ) => {
    set( state => ( {
      tasks: [ ...state.tasks, task ],
    } ) );
  },

  updateTask: ( task: Task ) => {
    set( state => ( {
      tasks: state.tasks.map( t => t.id === task.id ? task : t ),
    } ) );
  },

  deleteTask: ( id: number ) => {
    set( state => ( {
      tasks: state.tasks.filter( t => t.id !== id ),
    } ) );
  }

} );



export const useTaskStore = create<TaskState>()(
  persist(storeApi, { name: 'task-store' })
);