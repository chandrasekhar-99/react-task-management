
import { useState, useEffect} from 'react'
import {getTasks, saveTasks} from '../utils/storage'
import UserTaskItem from '../components/UserTaskItem';

const UserDashBoard = () => {

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || "{}" ).name || "";

   const [userTasks, setUserTasks] = useState([]);

    useEffect(() => {
      const allTasks = getTasks() || [];
      const filteredTasks = allTasks.filter(task => task.taskAssigned === loggedInUser);
      setUserTasks(filteredTasks);
    }, [loggedInUser]);

  console.log(userTasks)

  

   const handleStatusUpdate = (taskId) => {
    const allTasks = getTasks() || [];

    const updatedTaskList = allTasks.map(task =>
      task.id === taskId ? { ...task, status: "Completed" } : task
    );

    
    saveTasks(updatedTaskList);

    const filteredTasks = updatedTaskList.filter(task => task.taskAssigned === loggedInUser);
    setUserTasks(filteredTasks);
  };

  return(
    <div className='bg-amber-50 h-screen flex flex-col items-center gap-4 p-10'>
      <h1>User Dash Board</h1>
      <h2>{loggedInUser}</h2>
      <div className='flex flex-row flex-wrap gap-6'>
        {userTasks.map((task) => (
          <UserTaskItem
            key={task.id}
            task={task}
            onTaskComplete={handleStatusUpdate}
          />
        ))}
      </div>
      

    </div>
  )
}

export default UserDashBoard