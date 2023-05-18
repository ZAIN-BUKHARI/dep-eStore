import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../models/Product'

const Stickers = ({products}) => {
  // const color=['red','blue','pink','black']
  return (
    <div>
        <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
      {Object.keys(products).length===0 && <p>Sorry! currently the stock is unavailable. It will soon restock please stay tunned !</p>}
        {Object.keys(products).map((P)=>{
         return <div key={products[P]._id} className="lg:w-1/5 mx-6 mb-4 md:w-1/2 p-4 w-full shadow-lg   ">
        <Link passHref={true} href={`/product/${products[P].slug}`}>
          <div className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="md:h-[36vh] md:w-[40vh] block h-[30vh] m-auto  " src="https://m.media-amazon.com/images/I/51BWqto4jCL._AC_.jpg"/>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stickers</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{products[P].title}</h2>
            <p className="mt-1">Rs{products[P].price}</p>
            <div className="mt-1">
            {products[P].size.includes('S')   && <span className='border border-gray-300 mx-1 px-1'>S</span>}
            {products[P].size.includes('M')   && <span className='border border-gray-300 mx-1 px-1'>M</span>}
            {products[P].size.includes('L')   && <span className='border border-gray-300 mx-1 px-1'>L</span>}
            {products[P].size.includes('XL')  && <span className='border border-gray-300 mx-1 px-1'>XL</span>}
            {products[P].size.includes('XXL') && <span className='border border-gray-300 mx-1 px-1'>XXL</span>}
            </div> 
            <div className="mt-1">
            {products[P].color.includes('red') && <button className={`border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
            {products[P].color.includes('black')   && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('blue')  && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
            {products[P].color.includes('pink')  && <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
             </div> 
          </div>
          </Link>
        </div>
        })}
       
      </div>
    </div>
  </section>
  </div>
  )
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
    
  }
  let products = await Product.find({ category : 'Stickers'})
  let Stickers={}
  for(let item of products){
    if(item.title in Stickers){
      if(!Stickers[item.title].color.includes(item.color) && item.AvailableQty>0){
        Stickers[item.title].color.push(item.color)
        
      }
      if(!Stickers[item.title].size.includes(item.size) && item.AvailableQty>0){
        Stickers[item.title].size.push(item.size)
        
      }

    }
    else{
      Stickers[item.title]=JSON.parse(JSON.stringify(item))
      if(item.AvailableQty>0){
        Stickers[item.title].color =[item.color]
        Stickers[item.title].size =[item.size]
      }

    }
  }
        
  
  return {
    props: {products:JSON.parse(JSON.stringify(Stickers))}, // will be passed to the page component as props
  }
}

export default Stickers