import React from 'react'
// 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400'
// 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400'
// 'https://www.pexels.com/photo/close-up-photo-of-sneakers-2529146/'
// https://www.youtube.com/watch?v=yVCEb9Cnpz4
// https://www.youtube.com/watch?v=0KKOjFULFZ4
const Section = () => {
  return (
    <div className='main body-font shadow-lg shadow-gray-600 '>
      <div className='overlay  md:h-[721px]' > </div>
      <video className='videocss' src='shoe.mp4 ' autoPlay muted loop />
      <div className='content'>
        <h1 className='text-5xl' >Welcome</h1>
        <p className='text-sm' >To Zainy'sWear.</p>
      </div>
     
    </div>

  )
}

export default Section
// .videocss{
//   height: 100vh;
//   width: 100vw;
//   object-fit: cover;
// }
// /* .main{
//     height: 500px;
//     width: 100vw;
// } */
// .overlay{
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 653px;
//     background-color: rgb(0,0,0,.3);
// }
// .content{
//     font-size: 30px;
//     position: absolute;
//     width: 100%;
//     height: 500px;
//     top: 0;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     color: white;
// }


{/* <div>
<section className="text-gray-600 py-4 body-font shadow-lg shadow-pink-500">
<div className="container px-5 py-2 mx-auto flex flex-wrap">

<div className="flex flex-wrap md:-m-2 -m-1">
<div className="flex flex-wrap w-1/2">
<div className="md:p-2 p-1 w-1/2 shadow-lg ">
  <img alt="gallery" className="w-full object-cover h-full object-center block" src="a.jpg"/>
</div>
<div className="md:p-2 p-1 w-1/2 shadow-lg ">
  <img alt="gallery" className="w-full object-cover h-full object-center block" src="b.jpg"/>
</div>
<div className="md:p-2 p-1 w-full">
  <img alt="gallery" className="w-full h-full object-cover object-center block shadow-2xl" src="i.jpg"/>
</div>
</div>
<div className="flex flex-wrap w-1/2">
<div className="md:p-2 p-1 w-full">
  <img alt="gallery" className="w-full h-full object-cover object-center block " src="g.jpg"/>
</div>
<div className="md:p-2 p-1 w-1/2 shadow-lg ">
  <img alt="gallery" className="w-full object-cover h-full object-center block" src="c.jpg"/>
</div>
<div className="md:p-2 p-1 w-1/2 shadow-lg ">
  <img alt="gallery" className="w-full object-cover h-full object-center block " src="h.jpg"/>
</div>
</div>
</div>
</div>
</section>
</div> */}