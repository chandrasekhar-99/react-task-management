export const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
} 

export const getTasks = () => {
  const storageTasks = localStorage.getItem('tasks');
  return storageTasks ? JSON.parse(storageTasks) : [];
}

export const storeUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users))
}

export const getUsers = () => {
  const storedUsers = localStorage.getItem('users')
  return storedUsers ? JSON.parse(storedUsers) : []
}