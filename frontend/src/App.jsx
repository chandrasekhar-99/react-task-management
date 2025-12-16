import {BrowserRouter as Router, Routes, Route } from  "react-router-dom"

import AdminLoginPage from "./pages/AdminLoginPage"
import UserLoginPage from "./pages/UserLoginPage"

import AdminDashBoard from "./pages/AdminDashBoard"
import UserDashBoard from "./pages/UserDashBoard"



const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<AdminLoginPage/>}/>
        <Route path="/user-login" element={<UserLoginPage/>}/>
        <Route path = "/admin-dashboard" element={<AdminDashBoard/>}/>
        <Route path="/user-dashboard" element={<UserDashBoard/>}/>
      </Routes>
    </Router>
  )
}

export default App