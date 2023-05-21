import React from 'react'
import Order from '../models/Order'
import mongoose from 'mongoose'
import { useRouter } from 'next/router'
import Image from 'next/image'



const MYOrder = (order) => {
  const products=order.order.products
    
  
  const router=useRouter()
  const {id}=router.query

  
  
 

  
  
  const Capital = (word) =>{
    return word[0].toUpperCase()+ word.slice(1)
   
   
  
}

  
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Zainy'sWear</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id#{order.order.OrderId}</h1>
        <div className="flex mb-4">
          <a className="flex-grow border-b-2   py-2 text-lg px-1">Item description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Item Total</a>
        </div>
        <p className="leading-relaxed mb-4">Your order has been successfully placed.</p>
        {Object.keys(products).map((item)=>{
           return <> 
           <div   className="flex border-t border-gray-200 py-2">
           <span className="text-gray-500">{products[item].name}({products[item].size}/{Capital(products[item].variant)})</span>
           <span className="m-auto text-gray-900">{products[item].qty}</span>
           <span className="m-auto text-gray-900">Rs {products[item].price}</span>
         </div>

         </>
        })}
         
            <div  className="flex">
            
          <span  className="title-font font-medium text-2xl text-gray-900">SubTotal Rs{order.order.subTotal}</span>
          <button className="flex ml-auto  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track order</button>
         
        </div>
      </div>
      <Image src="/x.png" priority pr='true' alt="zainyswear order page" width={500} height={500} className="lg:w-1/2 w-full text-pink-400 lg:h-auto h-64 object-cover object-center rounded" />
    </div>
  </div>
</section>
    </div>
  )
}
// GET SERVER SIDE PROPS 
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
    
  }
  let order = await Order.findById(context.query.id)
  
  
 
  
 
        
  
  return {
    props: {order:JSON.parse(JSON.stringify(order))}, // will be passed to the page component as props
  }
}


export default MYOrder