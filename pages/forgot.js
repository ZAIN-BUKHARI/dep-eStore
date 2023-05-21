import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'


const forgot = () => {

  const router=useRouter()
  const [email, setemail] = useState('')
  const [newpassword, setnewpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  // const [token, settoken] = useState(false)
  // const [serverpass, setServerpass] = useState('')
  useEffect(() => {
    if(localStorage.getItem('token')){
     router.push('/')
    }
    
 }, [])


// EMAIL SEND FOR RESET PASS
const Emailsend = async (e)=>{
  e.preventDefault()
      
  const data = {email,newpassword,confirmpassword}
  let response =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgotpassword`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })
  let a =await response.json()
  if(a.success){
    toast.success(' Your pass successfully changed', {
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
      
  }else{
      toast.error('Invalid Email', {
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

 // onChange={confirm}
 const confirm = (e)=>{
  if(e.target.name=='newpassword'){
    setnewpassword(e.target.value)
  }
 else  if(e.target.name=='confirmpassword'){
    setconfirmpassword(e.target.value)
  }
  else if(e.target.name=='email'){
    setemail(e.target.value)
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
        <h2>Forgot </h2>
        <div className='inputBox'>
          <input onChange={confirm} value={email}  name='email' type='email' required='required' />
          <span>Email</span>
          <i></i>
        </div>
        <div className='inputBox'>
          <input onChange={confirm} value={newpassword} name='newpassword' type='password' required='required' />
          <span>New password</span>
          <i></i>
        </div>
        <div className='inputBox'>
          <input onChange={confirm} value={confirmpassword} name='confirmpassword'  type='password' required='required' />
          <span>Confrim password</span>
          <i></i>
        </div>
        <div className='Link' >
              {/* <Link href={'/forgot'}>Forgot password</Link> */}
              <Link href={'/login'}>Login</Link>
        {newpassword!='' && newpassword==confirmpassword && <div className='text-green-400 ' >password match</div>}
        {newpassword!=confirmpassword && <div className='text-red-600 ' >password match</div>}
        </div>
        <input  onClick={Emailsend} className='but ' type='button' value='Forgot' />
      </form>
    </div>
    </div>
     
   
   
  </>
  )
}

export default forgot