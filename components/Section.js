import React from 'react'

const Section = () => {
  return (
    <div>
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
    </div>
  )
}

export default Section