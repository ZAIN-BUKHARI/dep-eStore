import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const AllOrders = () => {
  const router=useRouter()
  const [order,setOrder]=useState([])
  // const [date,setDate]=useState('')
  useEffect(() => {
        const Orderemail = async ()=>{
          let user = await fetch(`/api/allorder`,{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({token:localStorage.getItem('token')})
          })
          let response = await user.json()
          setOrder(response.order)
          // const date=new Date(response.order)
          // console.log(response)
        }
     
    if(!localStorage.getItem('token')){
     router.push('/')
    }
    else{
        Orderemail()
    }
  
    
  }, [])
  const cli=()=>{
    console.log(order)
  }
  

  return (
    <div>
        <div className='container mx-auto mb-56  '>
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
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Amount
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Details
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {order.length>=0 && order.map(items=>{
               return <tr key={items._id} className="border-b border-pink-300">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{items.OrderId}</td>
              <td className="text-sm font-medium text-gray-900  px-6 py-4 whitespace-nowrap">
                {items.name}
              </td>
              <td className="text-sm font-medium text-gray-900  px-6 py-4 whitespace-nowrap">
                {items.email}
              </td>
              <td className="text-sm font-medium text-gray-900  px-6 py-4 whitespace-nowrap">
              {items.subTotal}
              </td>
              <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                <Link href={`/MyOrder?id=`+ items._id}>Details</Link>
              </td>
              <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                  {items.createdAt.slice(0,10)}
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
  )
}






export default AllOrders