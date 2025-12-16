import {useDrop} from 'react-dnd'
import TaskItem from './TaskItem'


const Tasks = ({userName, tasks, onDropTask}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => onDropTask(item.id, userName),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));



  return(
     <div
      ref={drop}
      className={` flex flex-row gap-4 m-4  min-h-50 p-4 rounded border ${
        isOver ? 'bg-green-100' : 'bg-gray-50'
      }`}
    >
      <h3 className="font-bold mb-2">{userName}</h3>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default Tasks