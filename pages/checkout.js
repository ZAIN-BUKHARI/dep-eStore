import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
// import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { AiOutlineMinusCircle } from "@react-icons/all-files/ai/AiOutlineMinusCircle";
import { AiFillShopping } from "@react-icons/all-files/ai/AiFillShopping";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useState } from 'react';
import { useEffect } from 'react';
import { get } from 'mongoose';

const Checkout = ({cart,clearCart,  AddToCart,removeFromCart,subTotal}) => {
  const form = useRef();
  const router=useRouter()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  // const [disabled, setDisabled] = useState(true)
  const [cash, setCash] = useState(false)
  const [hide, setHide] = useState(true)
  const [disabled2, setDisabled2] = useState(true)
  const [matching, setMatching] = useState('')
  
  


  
  const selectionColor = (e) =>{
    e.preventDefault()
       setCash(true)
       setDisabled2(false)
  }
  const Cancel = () =>{
    setHide(false)

    

  }
  const  Modal = () =>{
    setHide(true)
  }
  
  const Capital = (word) =>{
    return word[0].toUpperCase()+ word.slice(1)
   // return word.charAt(0).toUpperCase()+ word.slice(1)
   
  
}

  const Change =  () =>{}

  const submitForm = async  (e) =>{
    e.preventDefault()
    
    const data = {email,cart,subTotal,name,email,phone,address,city}
    let response =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/order`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a = await response.json()
    if(a.success){
      clearCart()
       toast.success('Order Placed!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        router.push((`/MyOrder?id=`+a.redirect._id))
        emailjs.sendForm('service_h5bpa0s', 'template_ovxkehe', form.current, '5-nx-RnyRsbo3EWQ2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    else if(a.error){
      clearCart()
      setHide(true)
      toast.error(a.error, {
        position: "top-right",
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
  

   useEffect(()=>{
    const  getUserdata= async()=>{

   
    let response =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getUserdata`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({token:localStorage.getItem('token')})
    })
    let a = await response.json()
    
    
    setName(a.success.name)
    setPhone(a.success.phone)
    setAddress(a.success.address)
    setCity(a.success.city)
    setEmail(a.success.email)
  }
  getUserdata()

},[])
 
  return (
    <>
    
    <div  className='container px-2 sm:m-auto'>
       <h1 className='font-bold text-3xl my-8 text-center text-pink-500 '>Checkout</h1>
       <h2 className='text-xl font-semibold'>1.Delivery details</h2>
      <form ref={form}>
    <div className='mx-auto flex my-2'>
      <div className='px-2 w-1/2'>
        <div className=" mb-4">
          <label htmlFor="name"  className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" value={name} onChange={Change} id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </div>
      <div className='px-2 w-1/2'>
        <div className=" mb-4">
          <label htmlFor="email"  className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email"  value={email} onChange={Change} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
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
      </form>
      

      <h2 className='text-xl font-semibold'>2. Review cart items</h2>

      {/* CARTPRODUCT REVIEW SECTION  */}
      <div  className=' cart  bg-pink-100 p-10  px-8 '> 
          <ol className='list-decimal font-semibold'>
            {Object.keys(cart).length==0 && <div className='mb-2 mt-2'>No! Items in the cart </div>}
            {Object.keys(cart).map((K)=>{ 
    return  <li  key={K}  >
              <div className='md:flex inline-table my-5 text-center   '>
                <div className=' font-bold  md:w-40 '>{cart[K].name}</div>
                <div className='flex items-center font-semibold justify-center  md:w-1/2  text-sm '><AiOutlinePlusCircle  onClick={()=>{AddToCart(K,1,cart[K].name,cart[K].price,cart[K].size,cart[K].variant)}}  className='text-pink-500 cursor-pointer'/><span className='mx-2'>{cart[K].qty} </span><AiOutlineMinusCircle  onClick={()=>{removeFromCart(K,1,cart[K].price,cart[K].name,cart[K].size,cart[K].variant)}}  className='text-pink-500 cursor-pointer' /></div>
                <div className='subtotal   md:w-20 '>Price {cart[K].price}</div>
                <div className='subtotal mx-32   md:w-28'>Size '{cart[K].size}'</div>
                <div className='subtotal mx-10  md:w-40 '>Variant '{Capital(cart[K].variant)}'</div>
              </div>
                <div className='bg-white h-1 flex flex-col w-50'></div>
            </li> 
            })}  



            <div className='subtotal font-bold py-3  text-black'>Subtotal : Rs{subTotal}</div>
          </ol>
          
        </div>
          <div className='mx-4 mt-2 mb-2'>
          <Link href={'/checkout'}>
            <button  onClick={Cancel}  className=" flex mx-2 w-20 mb-4 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"><AiFillShopping className='mt-[3px] mr-[2px]' />₨ Pay</button>
            </Link>
          </div>
          {/* </form  > */}
    </div>
    <div  className={`${hide==true?'invisible':'visible'} md:relative md:top-[-1000px]  `}>
    <div   className=" container px-5 py-12   md:absolute md:right-[500px]  flex">
      <div className="lg:w-1/4 md:w-1/2 bg-white border-2 absolute right-[-0px] top-20  border-pink-500 rounded-lg p-8 flex flex-col md:ml-auto w-[250px] h-[500px] mr-[60px] md:mr-[-10px]   md:mt-0 md:relative z-10 shadow-md">
      <button onClick={Modal} className=' flex justify-end text-pink-400 text-2xl'>X</button>
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">  Payment method</h2>
        <p className="leading-relaxed mb-5 text-gray-600">currently available payment methods </p>
  
        <button onClick={selectionColor} disabled={cash}  className='disabled:border-pink-500  text-3xl py-10 mb-8 border-2 border-rounded rounded-2xl'>Cash on Delivery</button>
         <Link href={`#`}><button   disabled={disabled2} onClick={submitForm} method='POST'   className={`text-white  disabled:bg-pink-300  bg-pink-500 mt-20 border-0 py-2 px-6  focus:outline-none  ${cash==false?disabled2:''} hover:bg-pink-600 rounded text-lg`}>Proceed</button></Link>
        <p className="text-xs text-gray-500 mt-3">www.Zainy'sWear.com !  enjoy your shopping.</p>
      </div>
     </div>
     </div>
     </>
      

    
  )
}

export default Checkout