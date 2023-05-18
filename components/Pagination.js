import React from 'react'
import Link from 'next/link'

const Pagination = () => {

    const a='localhost:3000/api/getpro/?page=1&limit=1'
  return (
    <div className="  border-t border-pink-200 bg-white  py-5 sm:px-6">
      
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
           <Link
              href="#"
              className="relative inline-flex items-center rounded-l-md border border-pink-300 bg-white px-2 py-2 text-sm font-medium text-pink-500 hover:bg-pink-50 focus:z-20"
            >
              {/* <span className="sr-only">Previous</span> */}
              {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
          </Link>
            {/* Current: "z-10border-pink-500 border-pink-500 text-pink-600", Default: "bg-white border-pink-300 text-pink-500 hover:bg-pink-50" */}
           <Link
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center border border-pink-500 px-4 py-2 text-sm font-medium text-pink-600 focus:z-20"
            >
              1
          </Link>
           <Link
              href="localhost:3000/api/getpro/?page=1&limit=2"
              className="relative inline-flex items-center border border-pink-300 bg-white px-4 py-2 text-sm font-medium text-pink-500 hover:bg-pink-50 focus:z-20"
            >
              2
          </Link>
           <Link
              href="#"
              className="relative hidden items-center border border-pink-300 bg-white px-4 py-2 text-sm font-medium text-pink-500 hover:bg-pink-50 focus:z-20 md:inline-flex"
            >
              3
          </Link>
           
           <Link
              href="#"
              className="relative hidden items-center border border-pink-300 bg-white px-4 py-2 text-sm font-medium text-pink-500 hover:bg-pink-50 focus:z-20 md:inline-flex"
            >
              8
          </Link>
           <Link
              href="#"
              className="relative inline-flex items-center border border-pink-300 bg-white px-4 py-2 text-sm font-medium text-pink-500 hover:bg-pink-50 focus:z-20"
            >
              9
          </Link>
           <Link
              href="#"
              className="relative inline-flex items-center border border-pink-300 bg-white px-4 py-2 text-sm font-medium text-pink-500 hover:bg-pink-50 focus:z-20"
            >
              10
          </Link>
           <Link
              href="#"
              className="relative inline-flex items-center rounded-r-md border border-pink-300 bg-white px-2 py-2 text-sm font-medium text-pink-500 hover:bg-pink-50 focus:z-20"
            >
              {/* <span className="sr-only">Next</span> */}
              {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
          </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
