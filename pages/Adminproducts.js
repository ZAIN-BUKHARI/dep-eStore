import React from 'react'
import FullLayout from "../src/layouts/FullLayout";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import mongoose from 'mongoose';
import Product from '../models/Product';
import { useEffect } from 'react';
import { useState } from 'react';



const products = (admin) => {
  const [products,setProducts]=useState([])
  useEffect(() => {
    const product =async ()=>{

      let response =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/gettingadminproducts`)  
      let a =await response.json()
      setProducts(a.products)
      // console.log(a.products)
    }
    product()
  }, [])
  
 
    return (
        <ThemeProvider theme={theme}>
           <style jsx global>{`
      footer{
      display:none;
        }
    `}</style>
        
        { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 text-center'>Only Zainy'sWear admins allow here</h1>}
        { !admin.admin.value && <FullLayout>
          <h1 className='text-3xl font-bold text-pink-500 text-center' >view all products</h1>
          <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap -m-4">
      {products.map((items)=>{
     return <div key={items._id} className="lg:w-1/4 md:w-1/2 p-4 w-full text-center border-b-2 border-pink-500 ">
        <span className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={items.image?items.image:'https://dummyimage.com/420x260'}/>
        </span>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{items.category}</h3>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{items.AvailableQty}[Available quantity]</h3>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{items.slug}[slug]</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{items.title}</h2>
          <p className="mt-1">Rs{items.price}</p>
        </div>
      </div>})}

    </div>
  </div>
</section>
        </FullLayout>}
        </ThemeProvider>
      );
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find()
  
  
    
    

  
        
  
  return {
    props: {products:JSON.parse(JSON.stringify(products))}, // will be passed to the page component as props
  }
}

export default products