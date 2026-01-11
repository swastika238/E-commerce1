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
      <h2>
            Login
      </h2>
      <form>
        <input type="email"placeholder='Email'value={email} onChange={(e)=>setEmail(e.targetvalue)}/>
        <imput type=" password"placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
