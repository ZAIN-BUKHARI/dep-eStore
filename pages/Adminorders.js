import React from 'react'
import FullLayout from "../src/layouts/FullLayout";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from 'react';
import { useState } from 'react';
import mongoose from 'mongoose'
import Order from '../models/Order'
import Link from 'next/link';


const orders = (admin) => {
  const orders=admin.order

    return (
      <ThemeProvider theme={theme}>
           <style jsx global>{`
      footer{
      display:none;
        }
    `}</style>
    
    { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 text-center'>Only Zainy'sWear admins allow here</h1>}
      { admin.admin.value &&  <FullLayout>
       
     <div>
        <div className='container mx-auto  '>
            <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
            <h1 className='font-bold text-3xl p-8 text-pink-500 text-center' >My Orders History</h1>
        <table className="min-w-full">
          <thead className="border-b">
            <tr className='border-pink-300 border-b'  >
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #OrderID
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Phone
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Amount
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                City
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Details
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Date
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(orders).map((items)=>{
               return <tr key={orders[items]._id} className="border-b border-pink-300">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{orders[items].OrderId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{orders[items].name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{orders[items].phone}</td>
              <td className="text-sm font-medium text-gray-900  px-6 py-4 whitespace-nowrap">
                {orders[items].email}
              </td>
              <td className="text-sm font-medium text-gray-900  px-6 py-4 whitespace-nowrap">
              {orders[items].subTotal}
              </td>
              <td className="text-sm font-medium text-gray-900  px-6 py-4 whitespace-nowrap">
              {orders[items].city}
              </td>
              <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                <Link href={`/MyOrder?id=`+ orders[items]._id}>Details</Link>
              </td>
              <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                  {orders[items].createdAt.slice(0,10)}
              </td>
              <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                  {orders[items].address}
              </td>
            </tr  >
            })}
           
           
            

            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
        </FullLayout>}
        </ThemeProvider>
      );
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let order = await Order.find()
  
    
    

  
        
  
  return {
    props: {order:JSON.parse(JSON.stringify(order))}, // will be passed to the page component as props
  }
}


export default orders