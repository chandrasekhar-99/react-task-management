import {useDrag} from 'react-dnd'

const TaskItem = ({task}) => {
  const [{opacity}, drag] = useDrag(()=>({
    type :'task',
    item : {id:task.id},
    collect : (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })

  }))

  return(
    <div ref={drag} style={{ opacity }}>
      <h2>{task.taskTitle}</h2>
      <p>{task.taskDescription}</p>
      <p>Status : {task.status}</p>
    </div>
  )
}

export default TaskItem