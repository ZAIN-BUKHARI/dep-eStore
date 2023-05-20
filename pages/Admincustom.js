import React,{useState}from 'react'
import FullLayout from "../src/layouts/FullLayout";
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Center from '../components/Center'
import styled from 'styled-components'
import Table from '../components/Table'
import {
    Grid,
    Stack,
    TextField,
    Button,
  } from "@mui/material";
  import BaseCard from "../src/components/baseCard/BaseCard";
import axios from 'axios';


const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
    // margin-right:60px
  }
  gap: 30px;
  margin-top: 30px;
  
  
 
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  // margin-right:-20px;

`;


const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
 
  
  
  
  @media screen and (min-width: 768px) {
    
    img{
      max-width: 120px;
      max-height: 100px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const Admincustom = (admin) => {
    const [search,setsearch]=useState('')
    const [product,setproduct]=useState([])
  console.log(search)
    const handleChange=(e)=>{
      if(e.target.name=='search'){
        setsearch(e.target.value)
      }
    }
    const Search=async(e)=>{
     e.preventDefault()
     axios.post('/api/Admin/search',{search}).then(res=>{
        console.log(res)
        setproduct(res.data.product)
     })
    }
  return (
    <>
    <ThemeProvider theme={theme}>
    <style jsx global>{`
footer{
display:none;
 }
`}</style>

{ !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 text-center'>Only Zainy'sWear admins allow here</h1>}
{ admin.admin.value &&  <FullLayout>
    
    {/* <h1 className='text-3xl text-pink-500 font-bold my-5 text-center'>SEARCH PRODUCT BY SLUG</h1> */}
      <Grid item xs={12} lg={12}>
        <BaseCard >
          <Stack spacing={3}>
          
            <TextField onChange={handleChange} value={search} type='text'  name="search" label="Search" variant="outlined"  />       
          </Stack>
          <br />
          <Button onClick={Search} variant="outlined" mt={2}>
            Search
          </Button>
        </BaseCard>
      </Grid>
      {product.length==0  && <h1 className='text-3xl text-pink-500 font-bold my-5 text-center'>SEARCH PRODUCT BY SLUG</h1>}
      {product.length!=0 &&  <Center>
      <ColumnsWrapper className=''>
        <Box className='' >
           
           <Table>
           <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Color</th>
                    <th>Size</th>
                  </tr>
                </thead>
                <tbody>
                 
               
                <tr>
                <ProductInfoCell >
                  <ProductImageBox><img src={product.image}/></ProductImageBox>
                  {product.slug}</ProductInfoCell>
                <ProductInfoCell> 
                    {/* <Button  >-</Button> */}
                    <QuantityLabel>{product.AvailableQty}
                    </QuantityLabel>
                    {/* <Button >+</Button> */}
                </ProductInfoCell>
                <ProductInfoCell>Rs{product.price}</ProductInfoCell>  
                <ProductInfoCell>{product.color}</ProductInfoCell>  
                <ProductInfoCell>{product.size}</ProductInfoCell>  
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    {/* <td>{search.slug}</td> */}
                    </tr>    
              
                </tbody>
                
           </Table>
           
          
        </Box>
       
      </ColumnsWrapper>
    </Center>}     
     

    </FullLayout>}
    </ThemeProvider>
    </>
  )
}

export default Admincustom