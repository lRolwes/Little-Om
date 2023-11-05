import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from './components/Header.js';
import Layout from "./../styles/layout.js";
import {TextBox, TextBox2} from './components/Textbox.js';

export default function massage() {
  return (
    <Layout>
        <Head>
              <title>Little Om Yoga - Massage</title>
              <meta
                  property="og:title"
                  content="Little Om Yoga - Massage"
                  key="title"
              />
        </Head>
        <Header
          title = "Massage"
          image = "./images/massage.png"
        />
        <div>
          <div className = "p-10 flex flex-col">
            <div className = "my-10 flex flex-col lg:flex-row justify-between">
              <img className="rounded-lg object-cover" src = './images/massage2.png' alt='/'/>
              <div className = "flex my-7 lg:my-0 flex-col px-10 ">
                <p className = "text-orange align-left text-4xl font-bold font-['Boska'] justify-between">Swedish Massage</p>
                <hr className = "align-left h-[2px] w-[120px] my-3 border-0 bg-orange"/>
                <p className = "mt-10 text-black align-left text-2xl font-normal font-['GeneralSans-Variable']">A therapeutic full body massage that includes long sweeping strokes, as well as kneading, friction, vibration or tapping to release sore or tight musculature. It helps to improve circulation, move lymph, and create a deep state of relaxation.</p>
              </div>
              <TextBox2 
                text1 = {'"What lies before us and what lies behind us are small matters compared to what lies within us. And when you bring what is within out into the world, miracles happen.'}
                text2 = {'Henry David Thoreau'}
              />
            </div>

            <div className = "my-10 flex flex-col lg:flex-row">
              <img src = "./images/massage3.png"/>
              <div className = "flex flex-col my-7 lg:my-0">
                <p className = "ml-10 text-orange text-4xl font-bold font-['Boska'] leading-9">Deep Tissue</p>
                <hr className = " ml-10 h-[2px] w-[120px] my-3 border-0 bg-orange"/>
                <p className = "ml-10 mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable']">A deep tissue massage includes the Swedish techniques above, while also utilizing others such as compressions, glides, and friction to aid in slowly relaxing and softening focused areas of tension in the body. The depth of pressure is based on the tissue response and the client's individual needs.</p>
              </div>
            </div>

            <div className = "my-10 flex flex-col lg:flex-row">
              <img src = "./images/massage4.png"/>
              <div className = "flex flex-col my-7 lg:my-0">
                <p className = "ml-10 text-orange text-4xl font-bold font-['Boska'] leading-9">Myofascial Release</p>
                <hr className = " ml-10 h-[2px] w-[120px] my-3 border-0 bg-orange"/>
                <p className = "ml-10 mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable']">Fascia is connective tissue, an intricate webbing, that wraps muscle fibers, innervates bone and organs, and is woven all throughout the body. Oftentimes, there can be a stiffening and tension in the fascia, which can cause constriction, discomfort or pain, and restrict range of motion. Fascia acts as a support for the body. In myofascial release, light touch, which often feels like a gentle stretch, is applied to release constrictions in the body, bring fluidity, releasing tension and creating a greater sense of ease, while also allowing space for the muscles to relax into.</p>
              </div>
            </div>

            <div className = "align-center px-[10px] flex flex-col lg:flex-row w-full">
              <div className = "self-center flex flex-col lg:w-[550px]  lg:h-[400px] shrink-0 items-center p-6 rounded-lg text-black bg-darktan text-center text-black text-2xl font-normal font-sans border-2 border-slate border-opacity-25 ">
                <p className = "text-center text-orange text-2xl lg:text-4xl font-bold font-['Boska']">Biodynamic Craniosacral Therapy</p>
                <hr className = "h-[2px] w-[120px] my-3 border-0 bg-orange"/>
                <p className = "text-center text-black text-2xl font-normal font-['GeneralSans-Variable'] ">I am currently in the midst of a two year training and am enthralled with this profound work. It support's the body's innate capacity for healing and helps you return to optimal health. If you would like to learn more, or to sample some BCST, please mention it when you schedule.</p>
              </div>
              <div className = "lg:ml-10 p-10 mt-5 lg:mt-0  flex flex-col lg:flex-row bg-orange text-white rounded-lg flex-grow">
                <div className = "self-center flex flex-col items-center shrink-0 w-[300px]">
                  <p className = "text-center text-white text-4xl font-bold font-['Boska'] rounded-lg py-4">Pricing</p>
                  <div>
                    <p className = "py-2 text-center text-white text-2xl font-normal font-['GeneralSans-Variable']">60 min. treatment • $100</p>
                    <p className = "py-2 text-center text-white text-2xl font-normal font-['GeneralSans-Variable']">75 min. treatment • $115</p>
                    <p className = "py-2 text-center text-white text-2xl font-normal font-['GeneralSans-Variable']">90 min. treatment • $130</p>
                  </div>
                  <Link href = 'booksession' className = "text-white text-center text-xl font-normal font-['GeneralSans-Variable'] my-[15px]">All treatments are by appointment only. To schedule yours, complete the form here</Link>
                </div>
                <div className = "mx-0 lg:mx-[30px] flex flex-col items-start ">
                  <p className = "text-white text-4xl font-bold font-['Boska'] rounded-lg py-4 self-center text-center">Cancellation Policy</p>
                  <p className = "text-white text-center lg:text-left text-xl font-normal font-['GeneralSans-Variable'] mb-[10px] mt-[15px]">Should you need to cancel your treatment, a 24 hour notice is required. Treatments cancelled with less than 24 hours notice may result in a 50% charge of the treatment price and no shows will be charged the full treatment price.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}