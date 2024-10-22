import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const contactpage = () => {
    return (
        <div className="box-content h-32 w-32 p-44 border-4 m-24 container mx-auto flex-wrap rounded-lg
         bg-indigo-400">
            <h1 className='font-mono text-3xl -m-28 place-self-center'>CONTACT US</h1>
            <h1 className='font-medium m-55 text-black my-36 text-center place-self-center' >Support@customercare.com</h1>
            <h1 className='font-medium m-55 my-20 text-center text-lg place-self-center  text-red-950'>LIVE CHAT</h1>

        </div>
    )
}

export default contactpage
