import Button from '../components/Button'
import Center from '../components/Center'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Table from '../components/Table'
import Input from '../components/Input'
import theme from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import FullLayout from "../src/layouts/FullLayout";
import axios from 'axios'

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
    // margin-right:60px
  }
  // gap: 10px;
  margin-top: 10px;
  border:2px solid gray
  
  
 
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  // margin-right:-20px;

`;
const BoxTWo = styled.div`
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



const Adminsales = (admin) => {
  console.log(admin)
  const [product,setproduct]=useState([])
  useEffect(()=>{
      function Order(){
        axios.get('/api/getorder').then(res=>{
          setproduct(res.data.orders)
        })
      }
      Order()
     
  },[])

 
// total of all orders 
 let total = 0;
  for (const productId of product) {
    const price = productId.subTotal;
    total += price;
  }
// length of marked orders 
 let marked = 0;
  for (const productId of product) {
    if(productId.status=='done')
        marked++;
  }
  //price of marked orders
  let markedproduct=0;
  for (const productId of product) {
    if(productId.status=='done')
    markedproduct+=productId.subTotal
  }
  //length of payment orders
  let lengthofallproduct = 0;
  for (const productId of product) {
    if(productId.payment=='done')
      lengthofallproduct++;
  }
    //price of pay orders
    let pay=0;
    for (const productId of product) {
      if(productId.payment=='done')
      pay+=productId.subTotal
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
        { !admin.admin.value && <FullLayout>
      <h1 className='text-4xl text-pink-500 font-bold' >Orders</h1>
    <Center>
      <ColumnsWrapper className='font-bold'>
        <Box className='' >
        {/* <h2>Sales</h2> */}
           {/* {!cartDisplay?.length && (
            <div className='flex justify-center text-center pt-20 text-3xl'  >Your cart is empty</div>
           )} */}
           
           <Table>
           <thead>
                  {/* <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr> */}
                </thead>
                <tbody>
                 
               
                <tr>
                <ProductInfoCell >
                  <ProductImageBox><img src='https://images.unsplash.com/photo-1603880921125-88ce2fc04673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JkZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'/></ProductImageBox>
                  Number of product Sold</ProductInfoCell>
                <ProductInfoCell> 
                    {/* <Button  >-</Button> */}
                    <QuantityLabel>{product.length}
                    </QuantityLabel>
                    {/* <Button >+</Button> */}
                </ProductInfoCell>
                <ProductInfoCell>Rs{total}</ProductInfoCell>  
                  </tr>
                  
                <tr>
                <ProductInfoCell >
                  <ProductImageBox><img src='https://media.istockphoto.com/id/1317087986/photo/dollar-currency-growth-concept-with-upward-arrows-on-charts-and-coins-background.jpg?b=1&s=170667a&w=0&k=20&c=gvk20jhUQUlHxn84ilKGj2aPgyE9sr-8c7tNnvUvS-I='/></ProductImageBox>
                  Profit </ProductInfoCell>
                <ProductInfoCell> 
                    {/* <Button  >-</Button> */}
                    <QuantityLabel>{product.length}
                    </QuantityLabel>
                    {/* <Button >+</Button> */}
                </ProductInfoCell>
                <ProductInfoCell>Rs1200</ProductInfoCell>  
                  </tr>

                   <tr>
                    <td></td>
                    <td></td>
                    {/* <td>total</td> */}
                    </tr>    
              
                </tbody>
                
           </Table>
           
          
        </Box>
        <BoxTWo className='w-[370px] '  >
        <Table >
           <thead>
                </thead>
                <tbody>
                 
               
                <tr>
                <ProductInfoCell >
                  <ProductImageBox><img src='https://media.istockphoto.com/id/1324465031/photo/high-angle-view-close-up-asian-woman-using-meal-delivery-service-ordering-food-online-with.jpg?b=1&s=170667a&w=0&k=20&c=PdIhDg9OT_qTFuSaavfhPDRyABCJL7X0MDBlyqasYQ0='/></ProductImageBox>
                  Number of orders Marked</ProductInfoCell>
                <ProductInfoCell> 
                    <QuantityLabel>{marked}
                    </QuantityLabel>
                </ProductInfoCell>
                <ProductInfoCell>Rs{markedproduct}</ProductInfoCell>  
                  </tr>
                  
                <tr>
                <ProductInfoCell >
                  <ProductImageBox><img src='https://media.istockphoto.com/id/1450667766/photo/from-vision-through-strategy-and-execution-to-success.jpg?b=1&s=170667a&w=0&k=20&c=XMHCkr9U0Co8K9lZM__vFebGK2JOzNvjjPzuYLzpWxY='/></ProductImageBox>
                  Orders Payment Marked </ProductInfoCell>
                <ProductInfoCell> 
                    <QuantityLabel>{lengthofallproduct}
                    </QuantityLabel>
                </ProductInfoCell>
                <ProductInfoCell>Rs{pay}</ProductInfoCell>  
                  </tr>

                   <tr>
                    <td></td>
                    <td></td>
                    {/* <td>total</td> */}
                    </tr>    
              
                </tbody>
                
           </Table>
           </BoxTWo>
      </ColumnsWrapper>
    </Center>
    </FullLayout>}
    </ThemeProvider>
    </>
  )
}

export default Adminsales

