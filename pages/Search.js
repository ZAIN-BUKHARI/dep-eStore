import React from 'react'
import { useState,useEffect } from 'react'



const Search = () => {
  
  const [SearchBar, setsearch] = useState('')
  const Search=(e)=>{
      setsearch(e.target.value)
  } 
  return (  
    <>
    
         <form className='flex justify-center my-2 '>   
            <label for="default-search" class="mb-2 text-sm font-medium  text-gray-900 sr-only ">Search</label>
                <input  onChange={Search} name='search' type="search" id="default-search" class=" w-80 h-10 text-black p-4 pl-10 text-sm  border border-gray-300 rounded-lg bg-gray-50  focus:border-pink-500 outline-none    " placeholder="Search" required/>
                {/* <button type="submit" class="text-white mx-2  h-10 w-20  bg-pink-500  font-medium rounded-lg text-sm ">Search</button> */}
            
        </form>
</>
  )
}

export default Search