
import {useEffect, useState} from 'react'

import {Link, useNavigate} from 'react-router-dom'




const AdminLoginPage = () => {
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("")
  const [adminLoginErrorMessage, setAdminLoginErrorMessage] = useState("")

  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("adminLogCred")){
      const adminLogCred = {
        adminName : "admin",
        adminPassword : "admin@123"
      }
      localStorage.setItem("adminLogCred", JSON.stringify(adminLogCred))
    }
  },[])

  

  const adminLogForm = (event) => {
    event.preventDefault()

    const adminLogCred = JSON.parse( localStorage.getItem("adminLogCred"))

    if (adminLogCred && adminName === adminLogCred.adminName && adminPassword === adminLogCred.adminPassword){
      localStorage.setItem("AdminLoggedIn", JSON.stringify({role:"ADMIN", name:adminName}))
      navigate("/admin-dashboard")
    }else{
      setAdminLoginErrorMessage("Invalid Name or Password")
    }
  }


  const handleAdminName = (event) => {
    setAdminName(event.target.value)
  }

  const handleAdminPassword = (event) => {
    setAdminPassword(event.target.value)
  }

  return(
    <div className='h-screen bg-amber-50 flex flex-col items-center justify-center'>
      <form onSubmit={adminLogForm} className='flex flex-col items-center bg-white p-20 rounded-lg border-2 border-green-400'>
        <h1 className="mb-6 text-3xl font-bold ">Admin Login</h1>
        <input type="text" name="adminName" value={adminName} onChange={handleAdminName} placeholder="Enter Name" className="w-70 p-3 mb-6 border border-gray-300 rounded focus:border-green-400 focus:outline-none"/>
        <input type="password" name="adminPassword" value={adminPassword} onChange={handleAdminPassword} placeholder="Enter Password" className="w-70 p-3 mb-6 border border-gray-300 rounded focus:border-green-400 focus:outline-none"/>
        <button type="submit" className="bg-green-400 text-white p-2 rounded-sm cursor-pointer">Admin Login</button>
        <p>Login as <Link to="/user-login">User</Link>?</p>
        <p>{adminLoginErrorMessage}</p>
      </form>
    </div>
    
  )

}

export default AdminLoginPage