import Head from 'next/head';
import Link from 'next/link';
import Header from "./../components/Header.js";
import {TextBox2} from "./../components/TextBox.js";
import Layout from "./../styles/layout.js";


export default function treatments() {
  return (
    <Layout>
        <Head>
              <title>Little Om Yoga - Ayurvedic</title>
              <meta
                  property="og:title"
                  content="Little Om Yoga - Ayurverdic"
                  key="title"
              />
        </Head>
        <Header
          image = "./images/ayurveda.png"
          title = "Ayurveda (Coming Soon)"
        />
        <div className = "m-10 justify-between flex flex-col lg:flex-row ">
          <div className = "lg:w-[70%] mr-[5px] p-5">
            <p className = "text-orange text-4xl font-bold font-['Boska-Variable']">About Ayurveda</p>
            <hr className = "h-[2px] w-[120px] my-3 border-0 bg-orange"/>
            <p className = "mr-5 text-black text-2xl mt-8 font-normal font-['GeneralSans-Variable']">Ayurveda is an ancient system of holistic medicine, dating back to over 5,000 years ago and originating in India. Its meaning translates to knowledge or science of life. The goal of Ayurveda is to bring balance and health to the entirety of one's being; body, mind and spirit.</p>
            <br/>
            <p className = "my-8 mr-5 text-black text-2xl font-normal font-['GeneralSans-Variable']">Ayurveda teaches that we are a microcosm of a macrocosm; meaning that the elements, which make up the universe (macrocosm), also exist within our bodies (microcosm). These elements, ether, air, fire, water, and earth, reside in each individual in different quantities. The combination of these elements form 3 Doshas: Vata, Pita, and Kapha. Vata consists of ether and air, Pitta contains fire and water, while Kapha is composed of earth and water. An individual's constitution or prakriti is made up of one or more of these three Doshas.</p>
            <br/>
            <p className = "mr-5 text-black text-2xl font-normal font-['GeneralSans-Variable']">Ayurveda maintains the principle that like increases like. By identifying your constitution and becoming aware of which elements are most present in your body, you can utilize this principle, incorporating diet and lifestyle changes that bring balance. For example, if a person has a primarily Vata constitution, ether and air, incorporating moist foods and grounding activities would help to balance the very mobile and dry qualities of Vata.</p>
            <br/>
            <p className = "my-8 mr-5 text-black text-2xl font-normal font-['GeneralSans-Variable']">Ayurveda promotes harmony in body. mind, and spirit through proper nutrition, lifestyle, and awareness. An Ancient Ayurvedic Proverb proclaims, "If diet is wrong, medicine is of no use. If diet is correct, medicine is of no need." Ayurvedic body treatments, help to facilitate relaxation, detoxify the body, and increase circulation to the muscles, tissues and organs, to aid and actify the body's natural healing processes.</p>
          </div>
          <div className = "flex flex-col lg:w-[30%]">
            <div className = "bg-darktan mb-[20px] p-10 flex flex-col items-center p-6 rounded-lg text-black bg-tan text-center text-black text-2xl font-normal font-['GeneralSans-Variable'] border-2 border-slate border-opacity-25 ">
              <p className = "text-center text-orange text-2xl font-bold font-['Boska-Variable']">My Ayurvedic Services have been paused for the time being while I find the perfect place to offer this powerfully restorative work. I will update the site as soon as these services are available again. Thank you for your interest in these therapeutic treatments!</p>
            </div>
            <div className = "text-white mb-[20px] items-center p-6 rounded-lg text-2xl font-normal font-sans bg-orange text-center">
              <p className = "text-center text-white text-4xl font-bold font-['Boska-Variable']">Tips for treatment</p>
              <p className = "text-center py-3 text-white text-2xl font-normal font-['GeneralSans-Variable']">Wear loose, comfortable clothing and bring a head-covering, such as a bandana or hat (that you don't mind getting oily).</p>
              <p className = "text-center py-3 text-white text-2xl font-normal font-['GeneralSans-Variable']">Eat lightly before treatment.</p>
              <p className = "text-center py-3 text-white text-2xl font-normal font-['GeneralSans-Variable']">Avoid abhyanga during menstruation.</p>
            </div>    
            <TextBox2
              text1 = {'“The most creative act you will ever undertake is the act of creating yourself.”'}
              text2 = {'Depak Chopra'}
            /> 
          </div>
        </div>
        <div className = "w-full h-[100px] bg-orange"></div>
        <div className = "flex flex-col m-10 "> 
          <div className = "flex flex-col md:flex-row">
            <img src = "./images/ayurveda2.png"/>
            <div className = "mt-4 md:mt-0 flex flex-col">
              <p className = "ml-10 text-orange text-4xl font-bold font-['Boska-Variable'] leading-9">Abhyanga</p>
              <hr className = " ml-10 h-[2px] w-[120px] my-3 border-0 bg-orange"/>
              <p className = "ml-10 mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable']">A full body treatment where warm oil is applied to the body. Gentle pressure with strokes away from the heart are used to move lymph and improve circulation. This aids in the removal of toxins, nourishes the skin, and activates the body’s healing systems.</p>
            </div>
          </div>
          <p className = "ml-10 mt-10 text-orange text-4xl font-bold font-['Boska-Variable'] leading-9">Benefits of abhyanga:</p>
          <p className = "ml-[60px] mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable'] leading-9">• Greatly diminishes the aging process, increasing longevity and the sturdiness of the body</p>
          <p className = "ml-[60px] mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable'] leading-9">• Reduces and helps to overcome fatigue</p>
          <p className = "ml-[60px] mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable'] leading-9">• Promotes better eyesight</p>
          <p className = "ml-[60px] mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable'] leading-9">• Nurtures the nervous system; aiding in the improvement of its afflictions and preventing additional illness</p>
          <p className = "ml-[60px] mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable'] leading-9">• Improves sleep and can help with insomnia</p>
        </div>
        <div className = "flex flex-col m-10 "> 
          <div className = "flex flex-col lg:flex-row">
            <img src = "./images/ayurveda3.png"/>
            <div className = "flex flex-col flex-col mt-4 lg:mt-0 ">
              <p className = "ml-10 text-orange text-4xl font-bold font-['Boska-Variable'] leading-9">Shirodhara</p>
              <hr className = " ml-10 h-[2px] w-[120px] my-3 border-0 bg-orange"/>
              <p className = "ml-10 mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable']">A gentle stream of warm herbalized oil is continuously poured onto the forehead from a copper vessel. Shirodhara deeply stills the nervous system, quieting the mind, while increasing and improving cerebral circulation. It integrates brain function and creates brain wave coherence. After this occurs, energy, oxygen and nutrients can flow more freely to the brain.</p>
            </div>
          </div>
          <p className = "ml-10 mt-10 text-orange text-4xl font-bold font-['Boska-Variable'] leading-9">Benefits of shirodhara:</p>
          <p className = "ml-[60px] mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable'] leading-9">• Improves memory</p>
          <p className = "ml-[60px] mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable'] leading-9">• Nourishes hair and scalp</p>
          <p className = "ml-[60px] mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable'] leading-9">• Treats insomnia; promotes sound sleep</p>
          <p className = "ml-[60px] mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable'] leading-9">• Calms body, mind, and spirit</p>
          <p className = "ml-[60px] mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable'] leading-9">• Activates pituitary and pineal glands, as well as the hypothalamus, which regulates all the body’s hormones</p>
          <p className = "ml-[60px] mt-5 text-black text-2xl font-normal font-['GeneralSans-Variable'] leading-9">• Opens the 3rd eye (6th Chakra), increasing spiritual awareness.</p>
        </div>
    </Layout>
  );
}