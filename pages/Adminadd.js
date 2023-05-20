import React from 'react'
import FullLayout from "../src/layouts/FullLayout";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {useState }from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { flushSync } from 'react-dom';
import {
  Grid,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";
import { File } from 'react-feather';
const addProducts = (admin) => {
 
  const [slug, setslug] = useState('')
  const [delslug, setdelslug] = useState('')
  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [price, setprice] = useState('')
  const [color, setcolor] = useState('')
  const [file, setFile] = useState('')
  const [size, setsize] = useState('')
  const [AvailableQty, setAvailableQty] = useState('')
  const [category, setcategory] = useState('')
  const [Profit, setprofit] = useState('')
  const handleChange = async  (e) =>{
      if(e.target.name=='slug'){
        setslug(e.target.value)
      }
      else if(e.target.name=='delslug'){
        setdelslug(e.target.value)
      }
      else if(e.target.name=='title'){
        settitle(e.target.value)
      }
      else if(e.target.name=='desc'){
        setdesc(e.target.value)
      }
     else if(e.target.name=='category'){
        setcategory(e.target.value)
      }
      else if(e.target.name=='AvailableQty'){
        setAvailableQty(e.target.value)
      }
      else if(e.target.name=='size'){
        setsize(e.target.value)
      }
      else if(e.target.name=='color'){
        setcolor(e.target.value)
      }
      else if(e.target.name=='Profit'){
        setprofit(e.target.value)
      }
      else if(e.target.name=='file'){
        const img = new FormData()
          img.append('file',e.target.files[0])
         let b= await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/IMG`,img)
           setFile(`/uploads/`+ b.data.success.filename)
           
        
      }
     
      else if(e.target.name=='price'){
        setprice(e.target.value)
      }
     
  }
  const imgLink=(e)=>{
    if(e.target.name=='file'){
      setFile(e.target.value)
    }
  }
  const submitform = async (e) =>{
    e.preventDefault()
   
  
       
        if( slug!='' && title!='' && desc!='' && price!='' && size!=''&& color!='' && AvailableQty!='' && category!=''&& Profit!=''){
        const data = {slug,title,file,desc,price,size,color,AvailableQty,category,Profit}
        console.log(data)
        
    let response =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/AddProducts`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a = await response.json()
    console.log(a)
    if(a.success){
       toast.success('Successfully product added!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
       
    }else if(a.error){
      toast.info('You put some wrong info! Try again ', {
        position: "bottom-center",
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
  else{
    toast.error('Cannot set empty field', {
      position: "bottom-center",
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
  const DELETE = async (e) =>{
        e.preventDefault()
        if(delslug!=''){
        const data = {delslug}
    let response =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Delproduct`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    let a = await response.json()
    
    if(a.success){
       toast.success('Successfully deleted!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setdelslug('')
        
       
    }
    else if(a.error){
      toast.error('There is no product with this slug ', {
        position: "bottom-center",
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
  else{
    toast.error('Cannot set empty field', {
      position: "bottom-center",
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
  
    return (
      
      <ThemeProvider theme={theme}>
           <style jsx global>{`
      footer{
      display:none;
        }
    `}</style>
       <FullLayout>
        { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 font-bold text-center'>Only Zainy'sWear admins allow here</h1>}
        { !admin.admin.value && <Grid container spacing={0}>
        <h1 className='text-3xl font-bold text-pink-500 text-center' >Add Product</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
         
            <TextField onChange={handleChange} value={slug}  name="slug" label="Slug" variant="outlined"  />
            <TextField onChange={handleChange} value={title} name="title" label="Title" variant="outlined" />
            <TextField onChange={handleChange} value={color} name="color" label="Color" variant="outlined" />
            <TextField onChange={handleChange} value={size} name="size" label="Size" variant="outlined" />
            <TextField onChange={handleChange} value={price} type='number' name="price" label="Price" variant="outlined" />
            <TextField onChange={handleChange} value={AvailableQty} type='number' name="AvailableQty" label="Quantity" variant="outlined" />
            <TextField onChange={handleChange} value={category} name="category" label="Category" variant="outlined" />
            <TextField onChange={handleChange} value={desc} name="desc" label="Description" variant="outlined" multiline rows={4} /> 
            <TextField onChange={handleChange} value={Profit} name="Profit" type='number' label="Profit" variant="outlined"  />
            <TextField onChange={handleChange}  name="file" type='file' label="" variant="outlined"  />
            <h1 className='text-center text-2xl font-bold text-pink-500' >Or</h1>
            <TextField onChange={imgLink}  name="file" type='text' label="Image Link" variant="outlined"  />
            
            
            
           
          </Stack>
          <br />
          <Button onClick={submitform} variant="outlined" mt={2}>
            Submit
          </Button>
          
        </BaseCard>
      </Grid>

      {/* DEL ANY PRODUCT BY THIER SLUG */}
       <h1 className='text-3xl text-pink-500 font-bold my-5 text-center'>DELETE PRODUCT BY SLUG</h1>
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
          
            <TextField onChange={handleChange} value={delslug}  name="delslug" label="Slug" variant="outlined"  />       
          </Stack>
          <br />
          <Button onClick={DELETE} variant="outlined" mt={2}>
            DELETE
          </Button>
        </BaseCard>
      </Grid>

     
    </Grid>}
  
        </FullLayout>
        </ThemeProvider>
      );
}

export default addProducts