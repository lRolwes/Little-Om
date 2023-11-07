import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import {TextBox, TextBox2} from './../components/Textbox.js';
import Header from './../components/Header.js';
import Layout from "./../styles/layout.js";

export default function booksession(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const[treatment, setTreatment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
     e.preventDefault()
     console.log('sending')
      let data = {
        name,
        email,
        treatment,
        message
      } 
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 250) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
          setTreatment('')
        }
      }
      
      )
  }

  return (
    <Layout>
      <Head>
              <title>Little Om Yoga - Book</title>
              <meta
                  property="og:title"
                  content="Little Om Yoga - Book Session"
                  key="title"
              />
        </Head>
        <Header
          image = "./images/book.png"
          title = "Book Your Treatment"
        />
        <div className = "flex flex-col lg:flex-row m-10 justify-between">
          <div className = "flex flex-col items-center p-[60px] w-full lg:w-[60%]">
            <p className = "px-0 lg:px-[80px] text-center text-gray-900 text-2xl font-normal font-['GeneralSans-Variable'] w-full ">To book a session, please complete the form below and we will be in touch with you as soon as possible.</p>
            <p className = "px-0 lg:px-[80px] mt-[50px] text-center text-gray-900 text-2xl font-bold font-['GeneralSans-Variable']">Please note, most sessions must be booked 30+ days out due to high demand.</p>
          </div>
          <div className = "flex flex-col lg:w-[55%] items-center p-6 rounded-lg text-black bg-darktan border-2 border-slate border-opacity-25">
            <img className="w-16 h-16" src="./images/flower.png" alt = 'img4' />
            <p className = "py-3 text-center text-black text-[32px] font-bold font-['Boska-Variable']">“In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.”</p>
            <p className = "text-center text-black text-2xl font-normal font-['GeneralSans-Variable']">Budhha</p>
          </div>
        </div>
          < form className="text-xl font-['GeneralSans-Variable'] pt-[100px] border-4 m-10 border-orange rounded-lg border-opacity-50" >
          <div className="flex flex-col lg:flex-row mx-0 lg:mx-[100px] align-center ">
            <div className = "flex flex-col">
              < div className="p-[10px]" >
                < label htmlFor='name'>Name: </label>
                <br/>
                < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className="self-center px-[10px] py-[5px] bg-darktan border-2 border-slate border-opacity-25 rounded my-[15px] w-full h-[40px]" />  
              </div>
              < div className="p-[10px]" >
                < label htmlFor='email'>Email: </label>
                <br/>
                < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className="self-center px-[10px] py-[5px] bg-darktan border-2 border-slate border-opacity-25 rounded my-[15px] w-full h-[40px]" />

              </div>

            </div>
            <div className = "flex flex-col pl-0 lg:pl-[100px] lg:flex-grow ">
              < div className="p-[10px]" >
                < label htmlFor='treatment'>Is there a specific treatment you're interested in?</label>
                <br/>
                < input type='text' onChange={(e)=>{setTreatment(e.target.value)}} name='treatment' className="self-center px-[10px] py-[5px] bg-darktan border-2 border-slate border-opacity-25 rounded my-[15px] w-full h-[40px]" />
              </div>
              <div className="p-[10px]" >
                < label htmlFor='message'>Other notes to share: </label>
                <br/>
                <textarea type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className="self-center px-[10px] py-[5px] bg-darktan border-2 border-slate border-opacity-25 my-[15px] rounded w-full h-[100px]" />
              </div>
              < input type='submit' className='transition duration-200 self-center lg:self-end text-lg my-[20px] w-[90%] lg:w-[100px] align-right py-1 px-3 text-white border-2 border-orange rounded-l-full rounded-r-full bg-orange hover:bg-white hover:text-orange' onClick={(e)=>{handleSubmit(e)}}/>
              <div className = "p-[10px]">
              </div>
            </div>
            </div>
          </form >
    </Layout>
  );
}
