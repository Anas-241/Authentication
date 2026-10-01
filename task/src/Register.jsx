import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [confpassword,setConfpassword]= useState("")

  const navigate=useNavigate()

  function handleSubmit(e){
e.preventDefault()
if (name ==="" || email ==="" || password ==="" || confpassword ===""){
  alert("complete every field")
}else if (password !== confpassword){
  alert("enter correct password")
}else{
  axios.post("http://localhost:3000/users",{
    name :name,
    email :email,
    password :password
    
  })
  .then(()=>{
    navigate("/")
    console.log("registered successfully")
  })
  .catch((error)=>{
    console.log(error)
  })
}
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <h2>Name:</h2>
    <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
    <h2>Email :</h2>
    <input type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
    <h2>password :</h2>
    <input type='password' onChange={(e)=>{setPassword(e.target.value)}}/>
    <h2>Confirm Password :</h2>
    <input type='password' onChange={(e)=>{setConfpassword(e.target.value)}}/>
    <button type='submit'>Register</button>
    </form>
    <div>already have an account <Link to="/">Login</Link></div>
    </>
  )
}

export default Register