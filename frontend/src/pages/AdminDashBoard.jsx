
import {useState} from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import AdminTaskForm from '../components/AdminTaskForm'
import Tasks from '../components/Tasks'

import {getTasks, getUsers, saveTasks} from '../utils/storage'

const AdminDashBoard = () => {
  const [tasks, setTasks] = useState(() => getTasks());
  const [users] = useState(() => {
    const storedUsers = getUsers();

    if (!storedUsers || storedUsers.length === 0) {
      const defaultUsers = [
        { userName: 'user Hari' },
        { userName: 'user Mani' },
        { userName: 'user test' },
      ];
      localStorage.setItem('users', JSON.stringify(defaultUsers));
      return defaultUsers;
    } 
    return storedUsers
  });
  

   const handleUpdatedTasks = (newTasks) => {
    setTasks(newTasks);
    saveTasks(newTasks);
  };

   const handleDropTask = (taskId, newUser) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, taskAssigned: newUser } : task
    );
    handleUpdatedTasks(newTasks);
  };


  const handleAddTask = (newTask) => {
    const newTasks = [...tasks, newTask];
    handleUpdatedTasks(newTasks)

  }

  return(
    <DndProvider backend={HTML5Backend}>
      
      <div className='bg-amber-50 h-screen flex flex-col items-center gap-4 p-10'>
        <div>
          <h1>Admin Dash Board</h1>
          <AdminTaskForm users={users} onAddTask={handleAddTask}/>
        </div>
        <div>
          {users.map((user)=>{
            const userTasks = tasks.filter((t)=>t.taskAssigned === user.userName)
             console.log(user.userName, userTasks);
            return(
              <Tasks key={user.userName} userName={user.userName} tasks={userTasks} onDropTask={handleDropTask}/>
            )
          })}
        </div>
      </div>
    </DndProvider>
  )
}

export default AdminDashBoard