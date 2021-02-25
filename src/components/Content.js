import React from 'react'
import ImageOne from '../images/mount-fuji.jpg'
import ImageTwo from '../images/red-torii.jpg'
const Content = () => {
    return ( 
        <>
        <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-48">
            <img src={ImageOne} alt="mount fujji" className="h-full rounded mb-20 shadow"/>
        
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-2">Mount Fuji</h2>
            <p className="mb-2">A divine beauty from a far</p>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white font-mono h-screen py-48">
            <img src={ImageTwo} alt="mount fujji" className="h-full rounded mb-20 shadow"/>
        
        <div className="flex flex-col justify-center items-center ">
            <h2 className="text-3xl font-bold mb-2">red torii</h2>
            <p className="ml-2">A divine beauty from a far</p>
        </div>
        </div>
        </>
    )
}

export default Content
