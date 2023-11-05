import Head from 'next/head';
import Link from 'next/link';
import Header from './components/Header.js';
import Layout from "./../styles/layout.js";
import {TextBox, TextBox2} from './components/Textbox.js';


export default function testimonials() {
  return (
    <Layout>
      <Head>
              <title>Little Om Yoga - Testimonials</title>
              <meta
                  property="og:title"
                  content="Little Om Yoga - Testimonials"
                  key="title"
              />
        </Head>
        <Header
          image = "./images/testimonials.png"
          title = "Testimonials"
        />
        <div>
        <div className = " m-10 flex flex-col lg:flex-row">

          <div className = "lg:mr-5 items-center flex flex-col flex-grow">
            <TextBox2
              text1 = {'"I have health challenges that make getting massages rather difficult--often a wonderful, relaxing massage leads to a full blown migraine afterwards. From the beginning, Alison listened attentively and now she carefully plans how to treat me best with each visit. She is extremely knowledgeable, compassionate, and most importantly, Alison has earned my trust."'}
              text2 = {'Melanie G.'}
            /> 
            <br className = "h-[5px]"/>
            < TextBox 
              text1 ={'“This was my first massage and I will definitely be back to see Alison. She was very communicative and ensured I was comfortable during the entire massage. I loved how she did the myofascial release first and I could feel her intention throughout. Highly highly recommend.”'}
              text2 = {'Rachel G.'}
            />
            <br className = "h-[5px]"/>
            <TextBox2
              text1 = {'"I have used Alison regularly to help alleviate pain from my very physical job. My pain points vary from week to week depending upon my work schedule. I like that when I show up for my massage, I can discuss my needs with Alison and then she plans my massage accordingly. She is an excellent listener and every time I leave her table, I feel "loose as a goose". She is a fabulous massage therapist and a fabulous human being."'}
              text2 = {'Matt G.'}
            /> 
            <br className = "h-[5px]"/>
            <TextBox2
              text1 = {'"Alison Kennedy is not only an extremely delightful human being, but she is an amazing healer and practitioner of Ayuerveda. It was suggested to me to receive Shirodhara in preparation for a major surgery that I had last fall and I found it to be very helpful in prepping not only my nervous system and body but also my mind. Alison’s demeanor could put even Mr. Grinch at ease; she is lovely, calm, smiley and compassionate. The ‘shiro’ was extremely helpful for me in preparation for a surgery that I was very afraid. I felt calm after ‘shiro’, I was able to sleep and feel more grounded and Alison touched based with me regularly during the time that I received treatments to see how I was and how I felt physically. She even followed up with me before surgery and after to see how I was doing; truly a caring practitioner! Alison is the real deal and I would recommend her to anyone. I even have her cards in my office!"'}
              text2 = {'Claire W.'}
            /> 
            <br className = "h-[5px]"/>
            < TextBox 
              text1 ={'"My Ayurvedic body work treatments with Alison have always been simply divine. She provides a tranquil and comfortable environment (complete with a heated table!), so that I am able to relax right away. I\'ve had both shirodhara and abhyanga and enjoyed both immensely. I\'ve never had any other treatments that left me feeling so grounded, relaxed and restored not only during the treatment but for days afterwards! In addition to being highly skilled in conducting the treatments, she is also so knowledgeable in all things Ayurveda and always takes the time to answer all my questions before, after and during the treatments. I feel so blessed that I have found such an amazing practitioner of Ayurvedic body work. "'}
              text2 = {'Melissa K.'}
            />
            <br className = "h-[5px] lg:hidden"/>

          </div>


          <div className = "flex flex-col flex-grow items-center lg:mt-0 md:mt-5 sm:mt-5">
            <TextBox2
              text1 = {'"Alison Kennedy has ruined me for all other massage therapists. I will forever be comparing all others to her. She is simply the best. Her calm and connected presence, deep knowledge of the body and trauma-informed care approach make the experience so much more than a “massage”. Huge fan of the magic of her myofascial release massage. I arrive stressed and often in pain. I leave feeling grounded, relaxed, and at ease in my body."'}
              text2 = {'Kaylah M.'}
            />
            <br className = "h-[5px]"/>
            <TextBox2
              text1 = {'"My first experience with any Ayurvedic treatment was with Alison. She was careful to make sure I was comfortable and the treatment room was very clean and relaxing. The shirodhara was amazing and the abhyanga was heavenly. The session left me feeling reenergized and ready for a new week. I am new to Ayurveda, but now I can\'t wait for more."'}
              text2 = {'Shannon S.'}
            />
            <br className = "h-[5px]"/>
             < TextBox 
              text1 ={'"Alison was a breath of fresh air! She made me comfortable and it was absolutely a wonderful massage. I felt like a ton of stress dropped off and I could relax under her professional technique. I would recommend her to friends and family and would love to see her again."'}
              text2 = {'Jacynta D.'}
            />
            <br className = "h-[5px]"/>
            <TextBox2
              text1 = {'"Alison has such a warm and tranquil energy. It’s no surprise that her space was equally as inviting. When I came for a treatment the room provided me with a sense of calm. It was both private and beautifully inviting. Alison made sure the table was comfortable for me and at a temperature of my choosing. I was given an Abhyanga and Shirodhara treatment. Alison took her time and was able to put my stressful mind & body at ease. I was in such a deep state of relaxation that I dozed off a few times. If you want to melt your stress away or be completely relaxed, I would highly recommend Alison. Thank you Alison- I can’t wait until my next treatment!"'}
              text2 = {'Julie S.'}
            />
            <br className = "h-[5px]"/>
            <TextBox2
              text1 = {'"I was so excited to have Shirodhara with Alison as I had already received awesome reviews from my wife. I was new to aryuvvedic treatments and a little unsure of what to expect. I was transitioning from a high stress situation to one of calm and was having difficulty adjusting. The environment was very calming and Alison\'s energy and voice are very soothing and opened my mind to relaxation and openess before the actual treatment began. The Shirodhara itself was absolutely amazing, and by the end of the first session my body and soul felt much less encumbered by stresses and matters of the flesh. I felt very relaxed afterwards, and it was an evening session so after returning home, I slipped into one of the best nights sleep I had in ages. I completely encourage you to treat yourself or a loved one to Alison\'s care and watch her peel back layers of stress and environmental complexities to enlighten the body and soul to a truer more natural human experience."'}
              text2 = {'Tony K.'}
            />
  
          </div>
        </div>
      </div>
      <div className = "bg-orange  py-10 h-20 w-full"></div>
    </Layout>
  );
}