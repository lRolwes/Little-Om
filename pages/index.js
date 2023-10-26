import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {Img} from 'react-image'
import Navbar from './Navbar.js'
import nav from './MobileBar.js'
import { useState } from 'react';
import Footer from './Footer.js'
import MobileBar from './MobileBar.js'




function Quote(){
  return(
  <div className="h-[262px] w-[412px] p-6 rounded-[10px] bg-darktan border-2 border-slate border-opacity-25  flex flex-col items-center">
``
      <p className="text-center text-black text-[28px] font-bold font-serif">“The quieter you become, the more you hear.”</p>
      <p className="text-center text-black text-2xl font-normal font-sans my-[20px]">Ram Dass</p>
    </div>
  );
}

function Pricing(){
  return(
  <div className="w-[412px] my-[20px] lg:my-[0px] bg-orange rounded-lg">
    <div className="p-8 w-full h-full flex flex-col justify-between">
      <p className="text-center text-white text-4xl font-serif">Pricing</p>
      <p className="text-center text-white text-2xl font-normal font-Sans">60 min. treatment • $100</p>
      <p className="text-center text-white text-2xl font-normal font-Sans">75 min. treatment • $115</p>
      <p className="pb-5 text-center text-white text-2xl font-normal font-Sans">90 min. treatment • $130</p>
    </div>
  </div>
  );
}

function Profilepic(){
  return(
<div className = "">
  <img className="cover rounded-lg w-[412px] border-2 border-slate border-opacity-25 " src="./images/profile.png" alt= 'img3'/>
</div>);
}

function Waterfall(){
  return(
  <div className="px-10 pb-5 bg-tan object-cover m">
    <img className="z-0 rounded-xl w-full mt-[20px] lg:mt-[0px] h-[85vh] object-cover" src = './images/waterfall.jpg' alt='/'/>
    <div className ="absolute z-2 p-10 top-[30%] lg:top-[60%] flex flex-col text-white">
      <h1 className = "z-0 text-[32px] lg:text-[64px] font semi-bold font-serif">Little Om Yoga & Massage</h1>
      <h2 className = "text-xl font-normal font-sans">Bringing balance to the body, mind, and spirit</h2>
      <div className = "justify-between w-[20vw] py-2 flex flex-col lg:flex-row">
        <Link className = "py-1 px-3 mt-[15px] lg:mt-[0px] w-[130px] flex-none rounded-l-full rounded-r-full bg-orange hover:bg-white hover:text-orange" href='/booksession'>Book a session</Link>
        <Link className = "py-1 px-3 mt-[15px] lg:mt-[0px] w-[165px] border-2 border-orange rounded-full hover:bg-orange" href='/treatments'>Explore Treatments</Link>
      </div>
    </div>
  </div>
  )
}

export default function Home() {
  return (
<div className="bg-tan overflow-hidden">
  <div className="bg-tan">
    < Navbar/>
    <MobileBar className = "z-10"/>
    < Waterfall className = "z-0" />
  </div>
  <div className="w-full p-10 justify-between flex flex-col lg:flex-row">
    <Profilepic />
    <Pricing />
    < Quote />
  </div>
  <Footer/>
</div>

  );
}
