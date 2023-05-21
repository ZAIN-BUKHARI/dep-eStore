import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { useEffect } from 'react'



const login = () => {
  useEffect(() => {
     if(localStorage.getItem('token')){
      router.push('/')
     }
  }, [])
  
  const router =useRouter()
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const submitHandler = async (e) =>{
    e.preventDefault()
    
    const data = {email,password}
    let response =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a =await response.json()
    
     
   
   
    setEmail('')
    setPassword('')
    if(a.success){
      router.push(`${process.env.NEXT_PUBLIC_HOST}`)
      localStorage.setItem('token',a.token)
      
      setTimeout(()=>{toast.success('You are successfully logged in', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      },100)
    }else{
      toast.error('Invalid Credentials', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
      
      
    
   


  }
  const clickHandler = (e) =>{
     if(e.target.name=='email'){
      setEmail(e.target.value)
    }
     else if(e.target.name=='password'){
      setPassword(e.target.value)
      
    }

  }
    
  return (
    <>
     <style jsx global>{`
navbar{
display:none;
}
footer{
display:none;
 }
`}</style>
<div className='topper'>
    <div className='box'>
      <span className='borderLine'></span>
      <form  >
        <h2>Sign in</h2>
        <div className='inputBox'>
          <input onChange={clickHandler} value={email} name='email' type='email' required='required' />
          <span>Email</span>
          <i></i>
        </div>
        <div className='inputBox'>
          <input onChange={clickHandler} value={password} name='password'  type='password' required='required' />
          <span>Password</span>
          <i></i>
        </div>
        <div className='Link' >
              <Link href={'/forgot'}>Forgot password</Link>
              <Link href={'/signup'}>Signup</Link>
        </div>
        <input onClick={submitHandler} className='but' type='button' value='login' />
      </form>
    </div>
    </div>
   
    
    

  </>
 
  )
}

export default login