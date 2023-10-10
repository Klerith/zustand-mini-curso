import { DragEvent, useState } from 'react';
import { IoAddOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

import classNames from 'classnames';
import Swal from 'sweetalert2';

import { Task, TaskStatus } from '../../interfaces';
import { SingleTask } from './SingleTask';
import { useTaskStore } from '../../stores';




interface Props {
  title: string;
  tasks: Task[];
  status: TaskStatus;
}


export const JiraTasks = ( { title, status, tasks }: Props ) => {

  const isDragging = useTaskStore( state => !!state.draggingTaskId );
  const onTaskDrop = useTaskStore( state => state.onTaskDrop );
  const addTask = useTaskStore( state => state.addTask );

  const [onDragOver, setOnDragOver] = useState(false)

  const handleAddTask = async() => {

    const { isConfirmed, value } = await Swal.fire({
      title: 'Nueva tarea',
      input: 'text',
      inputLabel: 'Nombre de la tarea',
      inputPlaceholder: 'Ingrese el nombre de la tarea',
      showCancelButton: true,
      inputValidator: (value) => {
        if ( !value ) {
          return 'Debe de ingresar un nombre para la tarea'
        }
      }
    });

    if ( !isConfirmed ) return;
    addTask(value, status);
  }


  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(false)
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(false);
    onTaskDrop(status);
  };



  return (
    <div
      onDragOver={ handleDragOver }
      onDragLeave={ handleDragLeave }
      onDrop={ handleDrop }
      className={
        classNames("!text-black border-4  relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px]", {
          'border-blue-500 border-dotted': isDragging,
          'border-green-500 border-dotted': isDragging && onDragOver,
        })
      }>


      {/* Task Header */ }
      <div className="relative flex flex-row justify-between">

        <div className="flex items-center justify-center">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
            <span className="flex justify-center items-center h-6 w-6 text-brand-500">
              <IoCheckmarkCircleOutline style={ { fontSize: '50px' } } />
            </span>
          </div>

          <h4 className="ml-4 text-xl font-bold text-navy-700">{ title }</h4>
        </div>

        <button onClick={ handleAddTask }>
          <IoAddOutline />
        </button>

      </div>

      {/* Task Items */ }
      <div className="h-full w-full">


        {
          tasks.map( task => (
            <SingleTask key={ task.id } task={ task } />
          ) )
        }



      </div>
    </div>
  );
};