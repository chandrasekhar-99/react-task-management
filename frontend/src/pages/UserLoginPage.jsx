
import {useEffect, useState} from 'react'

import {Link,useNavigate} from 'react-router-dom'




const UserLoginPage = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("")
  const [userLoginErrorMessage, setUserLoginErrorMessage] = useState("")

  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("userLogCred")){
      const userLogCred = {
        userName : "user Mani",
        userPassword : "user@321"
      }
      localStorage.setItem("userLogCred", JSON.stringify(userLogCred))
    }
  },[])
  


  const userLoginForm = (event) => {
    event.preventDefault()

    const userLogCred = JSON.parse( localStorage.getItem("userLogCred"))

    if (userLogCred && userLogCred.userName === userName && userLogCred.userPassword === userPassword){
      localStorage.setItem("loggedInUser", JSON.stringify({role:"USER", name:userName}))
      navigate("/user-dashboard")
    }else{
      setUserLoginErrorMessage("Invalid Name or Password")
    }
  }


  const handleUserName = (event) => {
    setUserName(event.target.value)
  }

  const handleUserPassword = (event) => {
    setUserPassword(event.target.value)
  }

  return(
    <div className='h-screen bg-amber-50 flex flex-col items-center justify-center'>
      <form className='flex flex-col items-center bg-white p-20 rounded-lg border-2 border-blue-400' onSubmit={userLoginForm}>
        <h1 className="mb-6 text-3xl font-bold ">User Login</h1>
        <input type="text" name="userName" value={userName} onChange={handleUserName} placeholder="Enter Name" className="w-70 p-3 mb-6 border border-gray-300 rounded focus:border-blue-400 focus:outline-none"/>
        <input type="password" name="userPassword" value={userPassword} onChange={handleUserPassword} placeholder="Enter Password" className="w-70 p-3 mb-6 border border-gray-300 rounded focus:border-blue-400 focus:outline-none"/>
        <button type="submit" className="bg-blue-400 text-white p-2 rounded-sm cursor-pointer">User Login</button>
        <p>Login as <Link to="/">Admin</Link>?</p>
        <p>{userLoginErrorMessage}</p>
      </form>
    </div>
  )

}

export default UserLoginPage