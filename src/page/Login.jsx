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
    <div className='max-w-md mx-auto mr-12 p-6 bg-white rounded-lg shadpw-md'>
      <h2 className='text-lg font-bold mb-6 text-center '>
            Login
      </h2>
      <form onSubmit={handleLogin}className='space-y-4'> 
        <input type="email"placeholder='Email'value={email} onChange={(e)=>setEmail(e.targetvalue)}/>
        <imput type=" password"placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
         <button className="w-full bg-blue-500 text-white py-2 rounded-md">
          Login
        </button>   
      </form>
      {error && <p className='mt-3.5 text-gray-500'>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  )
}

export default Login
