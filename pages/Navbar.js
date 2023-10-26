import React from 'react'
import Head from 'next/head';
import Link from 'next/link';

export function Logo(){
    return(
    <div className="absolute z-10 mt-[10px] lg:mt-[0px] bg-stone-200 rounded-[10px] border-2 border-slate border-opacity-50">
      <img className="w-[61px] h-[70px] lg:w-[122px] lg:h-[139.24px]" src='./images/logo.png'  alt = "logo"/>
    </div>
    );
  }

const Navbar = () => {
    
    return(
        <div className="flex justify-between items-center px-4 bg-tan font-sans text-lg  font-semibold">
            <Head>
                <title>Little Om Yoga</title>
                <meta property="og:title" content="Little Om Yoga" key="title" />
            </Head>
            <div className = "hidden lg:flex">
                < Logo/>
            </div>
            <div className='hidden lg:flex text-orange'>
                <div className = 'px-6 py-4  hover:bg-darktan'>
                    <Link className = '' href = '/'> Home</Link>
                </div>
                <div className = 'px-6 py-4  hover:bg-darktan'>
                    <Link href = '/about'> About</Link>
                </div>
                <div className = 'px-6 py-4 hover:bg-darktan'>
                    <Link href = '/masage '> Massage</Link>
                </div>
                <div className = 'px-6 py-4  hover:bg-darktan'>
                    <Link href = '/treatments'> Ayurvedic Treatments</Link>
                </div>
                <div className = 'px-6 py-4  hover:bg-darktan'>
                    <Link href = 'testimonials'> Testimonials</Link>
                </div>
                <div className = 'px-3  py-4 rounded-l-full rounded-r-full'>
                    <Link href = '/booksession' className='rounded-l-full text-sm rounded-r-full px-3 py-2 bg-orange text-white border-2 border-orange hover:bg-white hover:text-orange'> Book a Session</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar