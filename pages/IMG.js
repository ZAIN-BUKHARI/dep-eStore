import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const IMG = () => {
    const[IMG,setIMG]=useState()
   
    const lickHandle2 = (e) =>{
        if(e.target.name=='file'){
         setIMG(e.target.files[0])
        
       }
       
    }
    const lickHandle= (e)=>{
        e.preventDefault()
        const data = new FormData()
        data.append('file',IMG)
       axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/IMG`,data)
      .then(success=>{console.log(success)})
         
    
    }


  return (
    <>
    <form>
  <input type='file' name='file' onChange={lickHandle2}/>
  <button onClick={lickHandle}>upload</button>
  </form>
  
  </>
  )
}

export default IMG