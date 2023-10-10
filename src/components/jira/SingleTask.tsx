import { IoReorderTwoOutline } from 'react-icons/io5';
import { Task } from '../../interfaces';
import { useTaskStore } from '../../stores';


interface Props {
  task: Task;
}


export const SingleTask = ( { task }: Props ) => {

  const setDraggingTaskId = useTaskStore( state => state.setDraggingTaskId );
  const removeDraggingTaskId = useTaskStore( state => state.removeDraggingTaskId );

  return (
    <div 
      draggable
      onDragStart={ () => setDraggingTaskId(task.id ) }
      onDragEnd={ () => removeDraggingTaskId() }
      className="mt-5 flex items-center justify-between p-2">
      <div className="flex items-center justify-center gap-2">
        <p className="text-base font-bold text-navy-700">
          { task.title }
        </p>
      </div>
      <span className=" h-6 w-6 text-navy-700 cursor-pointer">
        <IoReorderTwoOutline />
      </span>
    </div>
  );
};