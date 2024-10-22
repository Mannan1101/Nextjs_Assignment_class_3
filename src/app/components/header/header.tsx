import React from 'react'
import Link from 'next/link'


const header = () => {
    return (
        <div className=' bg-indigo-500 rounded-sm  font-bold text-teal-950 text-left  '>
            <ul className='space-x-5'>
                <Link href="about">ABOUT</Link>
                <Link href="portfolio">PORTFOLIO</Link>
                <Link href="contact">CONTACT</Link>
            </ul>
        </div>
    )
}

export default header