import React from 'react'
import Link from 'next/link';


const Footer= () => {
    return(
      <div className = "py-10 w-screen flex flex-col place-items-center ">
  
        <p className = "py-1 text-black text-2xl font-bold font-serif leading-norma">Little Om Yoga and Massage LLC</p>
  
        <div className = "py-3 lg:w-[40vw] hidden lg:flex flex-row justify-between">
          <Link href="/about" className="text-gray-900 text-base font-normal font-sans leading-normal">About</Link>
          <Link href="/masage"className="text-gray-900 text-base font-normal font-sans leading-normal">Massage</Link>
          <Link href="/treatments" className="text-gray-900 text-base font-normal font-sans leading-normal">Ayurvedic Treatments</Link>
          <Link href="/testimonials" className="text-gray-900 text-base font-normal font-sans leading-normal">Testimonials</Link>
          <Link href="/booksession" className="text-gray-900 text-base font-normal font-sans leading-normal">Book a session</Link>
        </div>
        <div className ="h-10 w-[80vw] "><hr className = "h-px my-8 border-0 bg-gray-700" /></div>
        <div className="w-full flex flew-row justify-between px-10 py-10">
          <div className="px-5 self-center grow shrink basis-0 text-gray-900 text-base font-normal font-sans leading-normal">© 2023 Little Om Yoga & Massage, LLC. All rights reserved.</div>
          <Link href = 'privacy' className="px-5 text-gray-900 text-base font-normal font-sans leading-normal">Privacy Policy</Link>
        </div>
  
      </div>
    );
  }
  
  

export default Footer