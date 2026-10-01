import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate,useParams} from 'react-router-dom'



function Dashboard() {
  const navigate=useNavigate()
  const [state,setState]=useState(null)
  const {id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${id}`)
    .then((response)=>{
       setState(response.data)
    })
    .catch((error)=>{
  console.log(error)
    })

  },[id])


return (
  <div className="dashboard">
    <h1>Hai {state?.name}</h1>

    <button
      onClick={() => {
        navigate("/")
      }}
    >
      Logout
    </button>
  </div>
)}

export default Dashboard