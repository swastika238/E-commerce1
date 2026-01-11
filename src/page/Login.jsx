import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getAuth } from 'firebase/auth'

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=("");
    const[error,setError]=useState("");
    const[success,setSuccess]=useState("")
    const handleLogin=async(e)=>{
        e.preventDefault("");
        setError("");
        setSuccess("");
    }
  return (
    <div>
      
    </div>
  )
}

export default Login
