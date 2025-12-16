
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


const AdminTaskForm = ({users, onAddTask}) => {
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskAssigned, setTaskAssigned] = useState(users.length>0 ? users[0].userName:'')
  const [taskError, setTaskError] = useState("")


  const taskFormSubmit = (event) => {
    event.preventDefault();

    if (!taskTitle || !taskAssigned){
      setTaskError("provide task or assign task to user")
      return;
    }

    const newTask = {
      id : uuidv4(),
      taskTitle : taskTitle,
      taskDescription:taskDescription,
      taskAssigned:taskAssigned,
      status:"Pending",
    }

   

    onAddTask(newTask)

    setTaskTitle('')
    setTaskDescription('')
    setTaskAssigned(users.length>0 ? users[0].userName:'')
    setTaskError('')
  }

  const assignTask = (event) => {
    setTaskAssigned(event.target.value)
  }


  const handleTaskTitle = (event) => {
    setTaskTitle(event.target.value)
  }

  const handleTaskDescription = (event) => {
    setTaskDescription(event.target.value)
  }

  return(
    <div>
      <form onSubmit={taskFormSubmit} className='bg-white flex flex-col items-center justify-center p-20 rounded-lg border-2 border-green-400'>
        <h1>Enter Tasks</h1>
        <input type="text" placeholder="Enter Task Title" onChange={handleTaskTitle} value={taskTitle} className="w-70 p-3 mb-6 border border-gray-300 rounded focus:border-green-400 focus:outline-none"/>
        <input type="text" placeholder="Enter Task Description" onChange={handleTaskDescription} value={taskDescription} className="w-70 p-3 mb-6 border border-gray-300 rounded focus:border-green-400 focus:outline-none"/>
        <select value={taskAssigned} onChange={assignTask} className='w-50 mb-6 h-9'>
          {users.map((user)=>(
            <option key={user.userName} value={user.userName}>
              {user.userName}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-green-400 text-white p-2 rounded-sm cursor-pointer">Add Task</button>
        <p>{taskError}</p>
      </form>
    </div>
  )
}

export default AdminTaskForm