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
    toast.success(' Your pass successfully chnanged', {
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
                    <form>
                  
                    <div className="mb-4">
                    <input
                        type="email"
                        className="form-control my-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                        id="email"
                        value={email}
                        name='email'
                        onChange={confirm}
                        placeholder="Email"
                      />
                      <input
                        type="password"
                        className="form-control my-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none"
                        id="newpassword"
                        value={newpassword}
                        onChange={confirm}
                        name='newpassword'
                        placeholder="New password"
                      />
                    {/* </div> */}
                    {/* <div className="mb-4"> */}
                      <input
                        type="password"
                        className="form-control block my-2 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                        id="confirmpassword"
                        name='confirmpassword'
                        onChange={confirm}
                        value={confirmpassword}
                        placeholder="confirm password"
                      />
                    </div>
                    
                    <div className="text-center pt-1 mb-12 pb-1">
                      <button
                        onClick={Emailsend}
                        className="inline-block  px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-pink-500"
                        type="button"
                        id='boxs'
                        onChange={confirm}
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                       
                      >
                        Change password
                      </button>
                      {newpassword!='' && newpassword==confirmpassword && <div className='text-green-400 ' >password match</div>}
                      {newpassword!=confirmpassword && <div className='text-red-600 ' >password match</div>}
                      <p className="text-sm font-light text-pink-500 ">
                        Already have an account?<Link href="/login" className="font-medium text-pink-700 hover:underline dark:text-primary-500"> Login here</Link>
                    </p>
                    </div>
                   
                  </form>
                 
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
  </>
  )
}

export default forgot