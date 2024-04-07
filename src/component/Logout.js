import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate=useNavigate()
    useEffect(()=>{
        localStorage.removeItem("login");
        navigate("/signin")
    },[])
  return (
    <div>
      Logged out sucessfully
    </div>
  )
}
export default Logout