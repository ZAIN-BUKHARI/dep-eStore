import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import passwordupdater from './api/passwordupdater';




const myaccount = () => {

  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [matching, setMatching] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [newpassword, setnewpassword] = useState('')
  

  const Change = async (e) =>{
     if(e.target.name=='name'){
      setName(e.target.value)
    }
    else if(e.target.name=='address'){
      setAddress(e.target.value)
    }
    else if(e.target.name=='phone'){
      setPhone(e.target.value)
      
    }
    else if(e.target.name=='city'){
      setCity(e.target.value)
    }
    else if(e.target.name=='password'){
      setPassword(e.target.value)
    }
    else if(e.target.name=='confirmpassword'){
      setConfirmpassword(e.target.value)
    }
    else if(e.target.name=='newpassword'){
      setnewpassword(e.target.value)
    }
    
   
  }

useEffect(()  => {
  const changing =async ()=>{

  
   let user = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/findUserEmail`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({token:localStorage.getItem('token')})
    })
    let response = await user.json()
    setMatching(response.order[0].email)
  }
  changing()
    
  
}, [])


 

  
  const submitForm = async  (e) =>{
    e.preventDefault()
    
    const data = {address,phone,city,name,token:localStorage.getItem('token')}
    let response =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/accountsetting`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a = await response.json()
    if(a.success){
       toast.success('successfully updated!', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else if(a.error){
      toast.error(a.error, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
    
     
    
  }
  const Passwordupdater= async  (e) =>{
    e.preventDefault()
    if(newpassword!='' && confirmpassword!=''){
    if(newpassword==confirmpassword){

    const data = {newpassword,password,confirmpassword,token:localStorage.getItem('token')}
    let response =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/passwordupdater`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a = await response.json()
   

    if(a.success){
       toast.success('successfully updated password!', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else if(a.error){
      toast.error(a.error, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }
  }else{
    toast.error('Password not matched', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  }
}else{
  toast.error('Cannot set empty', {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  
}
    setPassword('')
    setConfirmpassword('')
    setnewpassword('')
     
    
  }
   
     
  return (
    <>
    <div className='container mx-auto my-9 ' >
      <h1 className='text-3xl text-center font-bold text-pink-500 ' >Update your account</h1>
    </div>
    <div className='mx-auto flex my-2'>
      <div className='px-2 w-1/2'>
        <div className=" mb-4">
          <label htmlFor="name"  className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" value={name} onChange={Change} id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className='px-2 w-1/2'>
        <div className=" mb-4">
          <label htmlFor="email"  className="leading-7 text-sm text-gray-600">Email (Cannot be updated)</label>
          <input type="email" readOnly  value={matching}  id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      </div>
      <div className='mx-auto flex my-2'>
      <div className='px-2 w-1/2'>
        <div className=" mb-4">
          <label htmlFor="phone"  className="leading-7 text-sm text-gray-600">Phone</label>
          <input type="number"value={phone} onChange={Change} id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div><div className='px-2 w-1/2'>
        <div className=" mb-4">
          <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
          <input type="text" id="city" onChange={Change} value={city} name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      </div>
      <div className='px-2 w-1/2'>
        <div className=" mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea type="text" value={address}  onChange={Change} cols='10' rows='5' id="address" name="address" className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' ></textarea>
        </div>
      </div>
      <button onClick={submitForm}  className=" disabled:bg-pink-300 flex mx-4 w-20 text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm">Submit</button>
    
       
        



      <h2 className='text-3xl text-center font-bold text-pink-500 ' > Change password</h2>
      <div className='mx-auto flex my-2'>
      <div className='px-2 w-1/2'>
        <div className=" mb-4">
          <label htmlFor="name"  className="leading-7 text-sm text-gray-600">Password</label>
          <input type="text" value={password} onChange={Change} id="name" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className='px-2 w-1/2'>
        <div className=" mb-4">
          <label htmlFor="newpasswordpassword"  className="leading-7 text-sm text-gray-600">New password</label>
          <input type="text" value={newpassword} onChange={Change} id="newpassword" name="newpassword" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
     
      </div>
      <div className='px-2 w-1/2'>
        <div className=" mb-4">
          <label htmlFor="confirmpassword"  className="leading-7 text-sm text-gray-600">Confirm password</label>
          <input type="text" value={confirmpassword} onChange={Change} id="confirmpassword" name="confirmpassword" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      
      
      
      <button onClick={Passwordupdater }    className=" disabled:bg-pink-300 flex mx-4 w-20 text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm">Submit</button>
    </>
  )
}

export default myaccount