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
    <style jsx>
     {`
      #box{
        // background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
     }
     #boxs{
        // background: linear-gradient(   to right, #ee7724, #d8363a, #dd3675, #b44593 );
     }
     `}
   </style>
    <form>
    <div className="container py-12 px-6 ">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="xl:w-10/12">
          <div className="block bg-white shadow-lg rounded-lg">
            <div className="lg:flex lg:flex-wrap g-0">
              <div className="lg:w-6/12 px-4 md:px-0">
                <div className="md:p-12 md:mx-6">
                  <div className="text-center">
                    <img
                      className="mx-auto w-48"
                      src="l3.png"
                      alt="logo"
                    />
                    <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">You are at Zainy'sWear.com</h4>
                  </div>
                   
                  <div className="mb-4">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                        id="name"
                        name='name'
                        onChange={clickHandler}
                        value={name}
                        placeholder="Name"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                        id="email"
                        name='email'
                        onChange={clickHandler}
                        value={email}
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        autoComplete='off'
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"
                        id="newpassword"
                        onChange={clickHandler}
                        value={password}
                        name='password'
                        placeholder="Password"
                      />
                    </div>
                    
                    
                    <div className="text-center pt-1 mb-12 pb-1">
                    
                    <button
                        onClick={submitHandler}
                        className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-pink-500"
                        type="button"
                        id='boxs'
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                       
                      >
                        Sign up
                      </button> 
                      <p className="text-sm font-light text-pink-500 ">
                        Already have an account?<Link href="/login" className="font-medium text-pink-700 hover:underline dark:text-primary-500"> Login here</Link>
                    </p>
                      
                      
                     
                    </div>
                    
                   
                  
                 
                </div>
              </div>
              <div
                className="lg:w-6/12 flex items-center lg:rounded-r-lg  rounded-b-lg lg:rounded-bl-none bg-pink-500 " id='box'>
                <div className="text-white px-4 py-6 md:p-12 md:mx-6 shadow-2xl border-pink-500 ">
                  <h4 className="text-xl font-semibold mb-6">www.Zainy'sWera.com</h4>
                  <p className="text-sm">
                  In the past few decades, online shopping has gone from being non-existent to becoming a multibillion-dollar industry. Buying things online has become a common practice among millions of people around the world. Recently the number of people buying goods and services online has increased more than ever before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</>
  )
}

export default Signup

           