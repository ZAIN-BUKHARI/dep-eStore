import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { AiFillCloseCircle } from "@react-icons/all-files/ai/AiFillCloseCircle";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { AiOutlineMinusCircle } from "@react-icons/all-files/ai/AiOutlineMinusCircle";
import { AiFillShopping } from "@react-icons/all-files/ai/AiFillShopping";
import { MdAccountCircle } from "@react-icons/all-files/md/MdAccountCircle";
import { useRef } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import { FaArrowDown } from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai';


const Navbar = ({logout, user ,clearCart, cart, AddToCart, removeFromCart, subTotal }) => {
  const [drop, setDrop] = useState({value:false})
  // const [drop1st, setDrop1st] = useState({value:false})
  // const [drop2nd, setDrop2nd] = useState({value:false})
  // const [drop3rd, setDrop3rd] = useState({value:false})
  // const [drop4th, setDrop4th] = useState({value:false})
  // USER LI DROP DOWN
  const onMouseOver = () =>{
    if(drop.value==false){
    setDrop({value:true})
    }
    else{
      setDrop({value:false})
    }
    
  }
  const onMouseLeave= () =>{
    setDrop({value:false})
  }
  //  // LIST 1ST LI DROP DOWN
  // const onMouseli1O = () =>{
  //   if(drop1st.value==false){

  //     setDrop1st({value:true})
  //     setDrop2nd({value:false})
  //     setDrop3rd({value:false})
  //     setDrop4th({value:false})
  //   }
  //   else{
  //     setDrop1st({value:false})
  //   }
    
  // }
  // const onMouseli1L= () =>{
  //   setDrop1st({value:false})
  // }
  // // LIST 2ST LI DROP DOWN
  // const onMouseli2O = () =>{
  //   if(drop2nd.value==false){
  //   setDrop2nd({value:true})
  //   setDrop1st({value:false})
  //   setDrop3rd({value:false})
  //   setDrop4th({value:false})
  // }
  // else{
  //   setDrop2nd({value:false})
  // }
  
    
  // }
  // const onMouseli2L= () =>{
  //   setDrop2nd({value:false})
  // }
  // // LIST 3RD LI DROP DOWN
  // const onMouseli3O = () =>{
  //   if(drop3rd.value==false){
  //   setDrop3rd({value:true})
  //   setDrop2nd({value:false})
  //   setDrop1st({value:false})
  //   setDrop4th({value:false})
  // }
  // else{
  //   setDrop3rd({value:false})
  // }
  
    
  // }
  // const onMouseli3L= () =>{
  //   setDrop3rd({value:false})
  // }
  // const onMouseli4O = () =>{
  //   if(drop4th.value==false){
  //   setDrop4th({value:true})
  //   setDrop2nd({value:false})
  //   setDrop3rd({value:false})
  //   setDrop1st({value:false})
  // }
  // else{
  //   setDrop4th({value:false})
  // }
    
  // }
  // const onMouseli4L= () =>{
  //   setDrop4th({value:false})
  // }
  const Capital = (word) =>{
    return word[0].toUpperCase()+ word.slice(1)
   // return word.charAt(0).toUpperCase()+ word.slice(1)
   
  
}

 
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <div  className=" py-2 shadow-pink-500 md:h-11 h-[100px] bg-pink-500 shadow-md sticky z-10 top-0 flex md:justify-start  md:text-xl md:flex-row flex-col items-center justify-between">
      <div className="logo mx-5">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
        { user.value && <Link href={"/"}> <Image alt="Zainy'sWear" width={30} height={30} className='text-white rounded-full ' src="/l4.jpeg"/></Link>}
        { !user.value && <Link href={"/"}> <Image alt="Zainy'sWear" width={30} height={30} className='text-white rounded-full ' src="/l4.jpeg"/></Link>}
        
      </div>
      <div className="nav ">
        <ul className=" space-x-3 md:space-x-10  font-bold flex cursor-pointer   items-center md:text-md ">
          
            <Link href={'/Tshirts'}><li className="flex hover:text-white  " 
            // onClick={onMouseli1O}
            >
            Men 
            <FaArrowDown className="my-2  mx-2 font-bold text-[15px] hover:text-white " />
              {/* <span className="cart absolute left-[90px] md:left-[35px] top-2 items-center rounded-md mx-5 flex my-8 md:my-1  ">
              { drop1st.value == true &&   <ul   onMouseLeave={onMouseli1L} onClick={onMouseli1L} className="absolute   bg-pink-300   top-14 rounded-md px-12 md:px-5 w-40 md:w-28 " >
             <Link href={'/Tshirts'}>  <li className="py-2 hover:text-white    text-black hover:p-2 cursor-pointer font-bold text-sm">Tshirts</li></Link> 
             <hr/>
             <Link href={'#'}> <li className="py-2 hover:text-white text-black hover:p-2  cursor-pointer font-bold text-sm">Shirts</li></Link>
             <hr/>
             <Link href={'#'}> <li className="py-2 hover:text-white text-black hover:p-2  cursor-pointer font-bold text-sm">Pants</li></Link>
             <hr/>
             <Link href={'#'}> <li className="py-2 hover:text-white text-black hover:p-2  cursor-pointer font-bold text-sm">Jackets</li></Link>
             <hr/>
             <Link href={'#'}> <li className="py-2 hover:text-white text-black hover:p-2  cursor-pointer font-bold text-sm">Srousers</li></Link>
             <hr/>
             <Link href={'#'}> <li className="py-2 hover:text-white text-black hover:p-2  cursor-pointer font-bold text-sm">Shalwar kameez</li></Link>
             <hr/>
             <Link href={'#'}> <li className="py-2 hover:text-white text-black hover:p-2  cursor-pointer font-bold text-sm">Shoes</li></Link>
             <hr/>
             <Link href={'#'}> <li className="py-2 hover:text-white text-black hover:p-2  cursor-pointer font-bold text-sm">Accessories</li></Link>
             <hr/>
             <Link href={'#'}> <li className="py-2 hover:text-white text-black hover:p-2 cursor-pointer font-bold text-sm">Watches</li></Link>
             <hr className="py-2"/>
                </ul>}
              </span> */}
            </li>
            </Link>
            
          
          
            <li className="flex cursor-pointer  hover:text-white" 
            // onClick={onMouseli2O}
            >Women<FaArrowDown className="my-2 mx-2 font-bold text-[15px] hover:text-white " />
            {/* <span className="cart absolute left-[90px] md:left-[155px] top-2 items-center rounded-md mx-5 flex my-8 md:my-1  ">
              { drop2nd.value == true &&   <ul   onMouseLeave={onMouseli2L} onClick={onMouseli2L} className="absolute   bg-pink-300   top-10 rounded-md px-12 md:px-5 w-40 md:w-28 " >
             <Link href={'#'}>  <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">Kurtis</li></Link> 
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">Pajamas</li></Link>
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">2 pc suits</li></Link>
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">3pc suits</li></Link>
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">Sandals</li></Link>
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">Heels</li></Link>
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">Bags</li></Link>
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">Night suits</li></Link>
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">Jewelry</li></Link>
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">Accessories</li></Link>
             <hr className="py-2"/>
                </ul>}
              </span> */}
            </li>
        
          
            <li className="flex cursor-pointer  hover:text-white" 
            // onClick={onMouseli3O}
            >Kids<FaArrowDown className="my-2 mx-2 font-bold text-[15px] hover:text-white " />
            {/* <span onMouseLeave={onMouseli3L} onClick={onMouseli3L}  className="cart absolute left-[90px] md:left-[280px] top-2 items-center rounded-md mx-5 flex my-8 md:my-1   ">
              { drop3rd.value == true &&   <ul   className="absolute   bg-pink-300   top-10 rounded-md px-12 md:px-5 w-40 md:w-28 " >
             <Link href={'#'}>  <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">Bags</li></Link> 
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">Sandals</li></Link>
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">suits</li></Link>
             <hr className="py-2"/>
                </ul>}
              </span> */}
            </li>
          
          
            <li className="flex hover:text-white" 
            // onClick={onMouseli4O}
            >Electronics<FaArrowDown className="my-2 mx-2 font-bold text-[15px] hover:text-white " />
            {/* <span className="cart absolute left-[90px] md:left-[430px] top-2 items-center rounded-md mx-5 flex my-8 md:my-1 ">
              { drop4th.value == true &&   <ul   onMouseLeave={onMouseli4L} onClick={onMouseli4L} className="absolute   bg-pink-300   top-10 rounded-md px-12 md:px-5 w-40 md:w-28 " >
             <Link href={'#'}>  <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">BJHBJH</li></Link> 
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">Sandals</li></Link>
             <hr className=""/>
             <Link href={'#'}> <li className="py-2 hover:text-white hover:p-2  text-black cursor-pointer font-bold text-sm">suits</li></Link>
             <hr className="py-2"/>
                </ul>}
              </span> */}
            </li>
        
        </ul>
      </div>

      <div className="cart absolute right-0 top-2 items-center mx-5 flex my-1 ">
        { drop.value == true && <div  onMouseLeave={onMouseLeave} className="absolute right-8 bg-pink-300   top-10 rounded-md px-5 w-36 ">
          <ul>
            
           <Link href={'/AllOrders'}> <li className="py-2 hover:text-white hover:p-2 text-black cursor-pointer font-bold text-sm">Orders</li></Link>
           <hr className=""/>
           <Link href={'/myaccount'}> <li className="py-2 hover:text-white hover:p-2 text-black cursor-pointer font-bold text-sm">Accounts</li></Link>
           <hr className=""/>
            <li onClick={logout} className="py-1 font-bold cursor-pointer hover:p-2 hover:text-white text-sm">Log out</li>
            <hr className="py-2"/>
          </ul>
        </div>}
        {user.value  && <MdAccountCircle onClick={onMouseOver}  className="text-xl    md:text-3xl  cursor-pointer mx-4"></MdAccountCircle>}
        {!user.value &&<Link href={'/login'}> <button className=" px-2 py-1 rounded-md text-xl   md:text-2xl  mx-2  text-black"><AiOutlineLogin/></button></Link>}
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-xl  md:text-3xl cursor-pointer"
        />
      </div>
      <div
        ref={ref}
        className=" md:w-[450px] h-[100vh] cart overflow-y-auto absolute top-0 right-0 bg-pink-100 p-10 transform transition-transform px-8 translate-x-full"
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 text-pink-500 cursor-pointer text-2xl"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="mb-2 mt-2">No! Items in the cart </div>
          )}
          {Object.keys(cart).map((K) => {
            return (
              <li key={K}>
                <div className="flex my-5">
                  
                  <div className="w-2/3 font-semibold">{cart[K].name}({cart[K].size}/{Capital(cart[K].variant)})</div>
                  
                  <div className="flex items-center font-semibold justify-center w-1/3  text-sm ">
                    <AiOutlinePlusCircle
                      onClick={() => {
                        AddToCart(
                          K,
                          1,
                          cart[K].name ,
                          cart[K].price,
                          cart[K].size,
                          cart[K].variant
                        );
                      }}
                      className="text-pink-500 cursor-pointer"
                    />
                    <span className="mx-2">{cart[K].qty} </span>
                    <AiOutlineMinusCircle
                      onClick={() => {
                        removeFromCart(
                          K,
                          1,
                          cart[K].price,
                          cart[K].name,
                          cart[K].size,
                          cart[K].variant
                        );
                      }}
                      className="text-pink-500 cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <span className="subtotal ">Subtotal : {subTotal}</span>
        <div className="flex mb-4 mt-4">
          {user.value && <Link href={"/checkout"}>
            <button disabled={Object.keys(cart).length===0} className="flex mx-2 text-white disabled:bg-pink-300 bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
              <AiFillShopping className="mt-[3px] mr-[2px]" /> Checkout
            </button>
          </Link> }
          <button
          disabled={Object.keys(cart).length===0}
            onClick={clearCart}
            className="flex mx-2 disabled:bg-pink-300  text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
