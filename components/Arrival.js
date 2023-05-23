import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import Center from './Center';
import Link from 'next/link'
import Button from './Button'
import axios from 'axios';

const StyleDiv = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr ;
gap:20px;
padding-top:20px;
@media (max-width: 768px) {
  grid-template-columns:1fr 1fr;
}
`;
const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;
const Box = styled.div`
background-color: #fff;
// padding: 20px;
// height: 120px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
// img{
//   max-width: 100px;
//   max-height: 80px;
// }
`;

const TitleTWO = styled.div`
  font-weight: bold;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
  // font:bold;
`;
const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;
const DIVONE=styled.div`
`
const DIVTWO=styled.div`
`

const NewProducts = ({AddToCart}) => {
  const [feature,setfeature]=useState()
  useEffect(()=>{
     axios.get('/api/feature').then(res=>{
      setfeature(res.data.product)
      console.log(res.data.product)
     })
  },[])
  return (
    <Center>
        <Title>New Arrivals</Title>
    <StyleDiv className='font-bold'>
        {feature && feature.map(products=>(
            // <ProductBox {...products} />
            <Link key={products.id} href={`/product/${products.id}`}>
 <DIVONE>
    <Box>
        <DIVTWO>
        <img src={products.image} alt="" />
        </DIVTWO>
    </Box>
    <ProductInfoBox>
      <TitleTWO  className='font-bold' href={'/'}>{products.title.slice(0,16)}</TitleTWO>
      <PriceRow>
        <Price>${products.price}</Price>
        <Button  block primary outline onClick={()=>{AddToCart(
          products.name,
          products.variant,
          products.size,
          products.price,
          1,


        )}} >Add to cart</Button>
        </PriceRow>    
    </ProductInfoBox>
    </DIVONE>
    </Link>
        ))}
    </StyleDiv>
    </Center>
  )
}

export default NewProducts



const products=[
    {id:"1",title:"Iphone 14 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:199,color:"black",image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487386_sd.jpg"},
    {id:"2",title:"Samsun galaxy S9",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:299,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuGlnk_ueOi9Xl2vSmTlfLIZ97RrfDoASSQ&usqp=CAU"},
    {id:"3",title:"Oppo F28",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:399,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CT_-Z8jVyWmzlneIb1Zi_f-h5uNxMGLq5Q&usqp=CAU"},
    {id:"4",title:"Nikia 3310",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:499,color:"black",image:"https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"},
    {id:"5",title:"Iphone se ",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:599,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYrC2fBAudUmtnda_YbskB1xAkjcTb-7_0A&usqp=CAU"},
    {id:"6",title:"Ipad mini 5 pro",desc:"The MacBook Pro 14-inch (2023) is another fantastic Apple laptop, designed with those who need serious power on the go in mind. The upgrades over the previous version are minimal, but that doesn't stop this from being one of the best laptops you can buy.",price:999,color:"black",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Qqo-UdIX054vewX_mGqeZBSTnbWwooaifg&usqp=CAU"},
]