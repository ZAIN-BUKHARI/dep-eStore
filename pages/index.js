import Head from 'next/head'
import Section from '../components/Section'
import { FaTshirt } from 'react-icons/fa'
import { FaShuttleVan } from 'react-icons/fa'
import { TbCurrencyReal } from 'react-icons/tb'


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Zainy'sWear</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" sizes="57x57" href="/favicons.ico"/> */}

      </Head>
      
      <Section/>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-pink-500 tracking-widest font-medium title-font mb-1">www.Zainy'sWear.com</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Wear the code with Zainy'sWear.com</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Wear whatever you want? What do you want? you want code? so why not wear the code </p>
    </div>








    <div className="flex flex-wrap">
    <section className="text-gray-600 body-font">
  <div className="container px-5 py- mx-auto">
    
    <div className="flex flex-wrap mx-12">
      <div className="p-4 md:w-1/3 ">
        <div className="flex rounded-lg md:h-[150px] h-[200px] text-center   bg-pink-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                <FaTshirt className='' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Premium Tshirts</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Our products quality are very good.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg md:h-[150px] h-[200px] text-center  bg-pink-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
              <FaShuttleVan/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Free Delivery</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">We ship all over pakistan free.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg md:h-[150px] h-[200px] text-center bg-pink-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
              <TbCurrencyReal/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Exciting Offers</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">We provide amazing discounts.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
     
     
    </div>
    
  </div>
</section>
      
           
     
     
    </div>
  )
}
