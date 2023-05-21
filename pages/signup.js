import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Signup = () => {
  const router=useRouter()
  useEffect(() => {
    if(localStorage.getItem('token')){
     router.push('/')
    }
 }, [])
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  


  const submitHandler = async (e) =>{
  
    if(name!='' && email!=''&& password!=''){
    e.preventDefault()
    const data = {name,email,password}
    let response =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a= await response.json()
    console.log(a)
   
    setName('')
    setEmail('')
    setPassword('')
    if(a.success){
    toast.success('Your account has been created!', {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      router.push('/login')
    }
    else{
      toast.error('your email is not unique', {
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
    else{
      toast.error('Cannot set empty fields!', {
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
    if(e.target.name=='name'){
        setName(e.target.value)
    }
    else if(e.target.name=='email'){
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
        <h2>Sign Up</h2>
        <div className='inputBox'>
          <input onChange={clickHandler} value={name}  name='name' type='text' required='required' />
          <span>Username</span>
          <i></i>
        </div>
        <div className='inputBox'>
          <input onChange={clickHandler} value={email} name='email' type='Email' required='required' />
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
              <Link href={'/login'}>Login</Link>
        </div>
        <input  onClick={submitHandler} className='but ' type='button' value='Signup' />
      </form>
    </div>
    </div>
   </>
  )
}

export default Signup

           