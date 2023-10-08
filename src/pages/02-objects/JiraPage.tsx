import { JiraTasks } from '../../components';
import { useTaskStore } from '../../store';

export const JiraPage = () => {

  const tasks = useTaskStore( state => state.tasks );

  const pendingTasks = tasks.filter( task => task.status === 'open' );
  const inProgressTasks = tasks.filter( task => task.status === 'in-progress' );
  const doneTasks = tasks.filter( task => task.status === 'done' );

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <JiraTasks title='Pendientes' value='pending' tasks={ pendingTasks } />
          
          <JiraTasks title='Avanzando' value='in-progress' tasks={ inProgressTasks } />
          
          <JiraTasks title='Terminadas' value='done' tasks={ doneTasks } />

      </div>

      



    </>
  );
};