import { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'



function MyApp({ Component, pageProps
 }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({value:null})
  const [key, setKey] = useState()
  const [admin, setadmin] = useState({value:null})
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(70)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
    
    try{
      if(localStorage.getItem("cart")){
        setCart(JSON.parse((localStorage.getItem("cart"))))
        saveCart(JSON.parse((localStorage.getItem("cart"))))
      }
    }
    catch(error){
      
      localStorage.clear("cart" )

    }
    const token=localStorage.getItem('token')
    if(token){
      setUser({value:token})
      setKey(Math.random())
    }
    const admin=localStorage.getItem('adminToken')
    if(admin){
      setadmin({value:admin})
    }
    
  }, [router.query])

  
  
  const saveCart = (myCart) =>{
    localStorage.setItem("cart",JSON.stringify(myCart))
    let subt=0;
    let keys=Object.keys(myCart);
    let i=0;
    for(i; i<keys.length; i++ ){
      subt += myCart[keys[i]]["price"] * myCart[keys[i]]["qty"];
    }
    setSubTotal(subt)
    
  }
  const AddToCart  =  (itemCode,qty,price,name,size,variant) =>{ 
    toast.success('Added to cart ', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    let newCart = JSON.parse(JSON.stringify(cart)); 
    if(itemCode in cart){
      newCart[itemCode].qty= cart[itemCode].qty + qty
    }
    else{
      newCart[itemCode]= {qty: 1 ,price , name, size, variant}
    }
      setCart(newCart)
     console.log(newCart)
     saveCart(newCart)
     
  }
  const buyNow = (itemCode,qty,price , name, size, variant) =>{
      let newCart = {}
     newCart[itemCode]={qty: 1 ,price, name , size, variant} 
    
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
          
  
  }
  const logout = () =>{
     localStorage.removeItem('token')
     setUser({value:null})
     router.push('/')
     setKey(Math.random())
     
     
   
    }
  

  
  const clearCart = () =>{
    saveCart({})
    setCart({})
  }
  const removeFromCart = (itemCode,qty,price , name , size , variant) =>{
    let newCart = JSON.parse(JSON.stringify(cart));
    if(itemCode in cart){
      newCart[itemCode].qty= cart[itemCode].qty - qty
    }
    if(newCart[itemCode]["qty"]<=0){
        delete newCart [itemCode]
      }

      
    
   
    
    saveCart(newCart)
    setCart(newCart)
    
  }

  return(
  
<>
  <LoadingBar color='white'progress={progress} waitingTime={400} onLoaderFinished={() => setProgress(0)}/>
   <Navbar logout={logout} user={user} key={key} cart={cart} AddToCart={AddToCart} removeFromCart={removeFromCart} subTotal={subTotal} clearCart={clearCart}  />
   {/* {key &&  <Navbar logout={logout} user={user} key={key} cart={cart} AddToCart={AddToCart} removeFromCart={removeFromCart} subTotal={subTotal} clearCart={clearCart}  />} */}
  <Component admin={admin}  buyNow={buyNow} user={user} cart={cart} AddToCart={AddToCart}  removeFromCart={removeFromCart} subTotal={subTotal} clearCart={clearCart} {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
