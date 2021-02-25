import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
         <div className="bg-white h-screen flex flex-col justify-center items-center hr">
             <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black text-gray-500 mb-14">
                 Welcome To Japan
             </h1>
             <Link className="py-3 px-5 bg-red-500 rounded-full text-3xl text-gray-100 hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce">Visit Now<svg className="h-6 w-6 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
</svg></Link>
         </div>
        )
}

export default Hero
