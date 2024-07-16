import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from "./../components/Header.js";
import {TextBox2} from "./../components/TextBox.js";
import Layout from "./../styles/layout.js";
export default function massage() {
  return (
    <Layout>
        <Head>
              <title>Little Om Yoga - Services</title>
              <meta
                  property="og:title"
                  content="Little Om Yoga - Services"
                  key="title"
              />
        </Head>
        <Header
          title = "Services"
          image = "./images/massage.png"
        />
        <div>
          <div className = "p-10 flex flex-col">
            <div className = "my-10 flex flex-col lg:flex-row justify-between">
              <img className="rounded-lg object-cover shadow shadow-lg" src = './images/massage2.png' alt='/'/>
              <div className = "flex my-7 lg:my-0 flex-col px-10 ">
                <p className = "text-orange align-left text-4xl font-bold font-['Boska'] justify-between">Swedish Massage</p>
                <hr className = "align-left h-[2px] w-[120px] my-3 border-0 bg-orange"/>
                <p className = "mt-10 text-black align-left text-2xl font-normal font-['GeneralSans-Variable']">A therapeutic full body massage that includes long sweeping strokes, as well as kneading, friction, vibration or tapping to release sore or tight musculature. It helps to improve circulation, move lymph, and create a deep state of relaxation.</p>
              </div>
              <TextBox2 
                text1 = {'"What lies before us and what lies behind us are small matters compared to what lies within us. And when you bring what is within out into the world, miracles happen."'}
                text2 = {'Henry David Thoreau'}
              />
            </div>

            <div className = "my-10 flex flex-col lg:flex-row">
              <img className="shadow shadow-lg" src = "./images/massage3.png"/>
              <div className = "flex flex-col my-7 lg:my-0">
                <p className = "ml-10 text-orange text-4xl font-bold font-['Boska'] leading-9">Deep Tissue</p>
                <hr className = " ml-10 h-[2px] w-[120px] my-3 border-0 bg-orange"/>
                <p className = "ml-10 mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable']">A deep tissue massage includes the Swedish techniques above, while also utilizing others such as compressions, glides, and friction to aid in slowly relaxing and softening focused areas of tension in the body. The depth of pressure is based on the tissue response and the client's individual needs.</p>
              </div>
            </div>

            <div className = "my-10 flex flex-col lg:flex-row">
              <img className="shadow shadow-lg" src = "./images/massage4.png"/>
              <div className = "flex flex-col my-7 lg:my-0">
                <p className = "ml-10 text-orange text-4xl font-bold font-['Boska'] leading-9">Myofascial Release</p>
                <hr className = " ml-10 h-[2px] w-[120px] my-3 border-0 bg-orange"/>
                <p className = "ml-10 mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable']">Fascia is connective tissue, an intricate webbing, that wraps muscle fibers, innervates bone and organs, and is woven all throughout the body. Oftentimes, there can be a stiffening and tension in the fascia, which can cause constriction, discomfort or pain, and restrict range of motion. Fascia acts as a support for the body. In myofascial release, light touch, which often feels like a gentle stretch, is applied to release constrictions in the body, bring fluidity, releasing tension and creating a greater sense of ease, while also allowing space for the muscles to relax into.</p>
              </div>
            </div>

            <div className = "my-10 flex flex-col  lg:flex-row">
              <div className = "rounded-lg">
              <img className="rounded-lg object-contain md:max-w-[400px] shadow shadow-lg align-center item-center" src = "./images/bcst.png"/>
              </div>
              <div className = "flex flex-col my-7 lg:my-0">
                <p className = "ml-10 text-orange text-4xl font-bold font-['Boska'] leading-9">Biodynamic Craniosacral Therapy</p>
                <hr className = " ml-10 h-[2px] w-[120px] my-3 border-0 bg-orange"/>
                <p className = "ml-10 mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable']">Biodynamic Cranial Sacral (BCST) is a gentle, hands-on therapy. As a BCST therapist, I combine centered, embodied presence, gentle, whole being awareness, and still or light touch to listen to your expressions of health through fluid fluctuations, membranous tissue patterns, and the nervous system, including energetic layers. Through this listening, I may discern tensions held in the tissues and nervous system due to inertial patterns, which can develop in response to your unique life experiences. They are a result of your own expression of health, diligently working to bring balance, as best it can, regardless of the many circumstances that arise throughout life. BCST can facilitate reorganization of these patterns according to your innate healing wisdom, releasing tensions and stress held, and helping to create a greater sense of ease, balance and wellbeing. If you are curious about BCST and would like to learn more, or book a session, please reach out and we can schedule a call to discuss or simply make an appointment.</p>
              </div>
            </div>

            <div className = "align-center px-[10px] flex flex-col lg:flex-row w-full">
            
              <div className = "lg:ml-10 p-10 mt-5 lg:mt-0  flex flex-col lg:flex-row shadow shadow-lg  bg-orange text-white rounded-lg">
                <div className = "self-center flex flex-col items-center shrink-0 w-[300px] ">
                  <p className = "text-center text-white text-4xl font-bold font-['Boska'] rounded-lg py-4">Pricing</p>
                  <div>
                    <p className = "py-2 text-center text-white text-2xl font-normal font-['GeneralSans-Variable']">45 Minute Session • $100</p>
                    <p className = "py-2 text-center text-white text-2xl font-normal font-['GeneralSans-Variable']">60 Minute Session • $120</p>
                    <p className = "py-2 text-center text-white text-2xl font-normal font-['GeneralSans-Variable']">75 Minute Session • $135</p>
                    <p className = "py-2 text-center text-white text-2xl font-normal font-['GeneralSans-Variable']">90 Minute Session • $160</p>
                  </div>
                  <Link href = 'booksession' className = "text-white text-center text-xl font-normal font-['GeneralSans-Variable'] my-[15px]">All treatments are by appointment only. To schedule yours, complete the form here</Link>
                </div>
                <div className = "mx-0 lg:mx-[70px] flex flex-col items-start ">
                  <p className = "text-white text-4xl font-bold font-['Boska'] rounded-lg py-4 self-center text-center">Cancellation Policy</p>
                  <p className = "text-white text-center lg:text-left text-xl font-normal font-['GeneralSans-Variable'] mb-[10px] mt-[15px]">All cancellations and/or rescheduling requests must be received with 24 hours’ notice prior to your scheduled appointment time. My full session rate will be charged for less than 24 hours’ notice. I hold the scheduled date and time for you; when an appointment is cancelled or missed with less than 24 hours’ notice, it is very difficult to fill and is a missed opportunity for another client who may have needed that therapeutic session, as well as lost income for me. Thank you for your consideration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}