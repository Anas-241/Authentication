import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  { useState } from 'react'
import axios from "axios"

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const navigate=useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(!email || !password){
      alert("Please enter Email and Password")
      return;
    }
    try{
      const response=await axios.get("http://localhost:3000/users");
      console.log("All users",response.data);

      const user=response.data.find((user)=>
        user.email===email && user.password===password
      );
      console.log("Matching Users:",user)
      if(!user){
        alert("Invalid email or password")
      }
      alert("Login Successful")
      
      navigate(`/dashboard/${user.id}`);
    }
    catch(error){
      console.log(error)

    }
  }
    
  return (
    <>
    <form onSubmit={handleSubmit}>
    <h2>Email:</h2>
    <input type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
    <h2>Password:</h2>
    <input type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
    <button type='submit'>Login</button>
    </form>
    <div>Don't have an account<Link to="/register">Register</Link></div>
    </>
  )
}

export default Login