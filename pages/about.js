import Head from 'next/head';
import Link from 'next/link';
import Logo from './index';
import MobileBar from './MobileBar';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

function Header (){
  return(
    <div className = "z-0 px-10 py-5 lg:pt-0 pb-5 bg-tan object-cover flex flex-col items-center">
      <img className="rounded-xl w-full h-[40vh] object-cover" src = './images/about.png' alt='/'/>
      <div className = "p-10 absolute top-[15%] flex flex-col text-white">
        <h1 className = "text-[50px] md:text-[64px] font semi-bold font-serif">Allison's Story</h1>
      </div>
    </div>
    )
}

export default function about() {
  return (
    <div className = 'bg-tan overflow-hidden'>
        <Navbar />
        <MobileBar />
        <Header/>

        <div className = "flex flex-col md:flex-row justify-between px-10 contain ">

          <div className = "items-center md:items-left flex flex-col flex-shrink w-full lg:w-[50%] ">
            <p className = "text-black text-xl font-normal font-sans">
            I came to yoga as a result of a chronic illness in 2009. It was through yoga and its sister science of Ayurveda that I experienced a great deal of therapeutic benefits and became captivated by holistic medicine and the body’s amazing capacity to heal. Deeper studies followed, including my 200 hour Teacher Training at Sol Yoga as well as an intensive training in Ayurveda with the esteemed Dr. Rosy Mann from the Kripalu School of Ayurveda, which included the art and science of Shirodhara, Abhyanga and other healing treatments. My awareness of the potential power of the somatic practice of yoga deepened and I was drawn to study the psychological and physiological fields including how fascia profoundly impacts everything from one's posture and movement to one's internal psycho-emotional rhythms. I completed two Trauma Informed Yoga Teacher Trainings at Sol Yoga with Alicia Barmon and Shelley Pentony, Positional Therapy Training with Lee Albert from Kripalu and Yin Yoga Teacher Training with Machelle Lee at Roots & River Yoga.
            </p>
            <br className = "p-5"/> 
            <p className = "text-black text-xl font-normal font-sans">
            From this passage into yoga and Ayurveda, it felt like an organic evolution to the healing art of massage. I attended and graduated from PMTI's 18 month professional program in early 2021. The program reinforced my passions and the joy of collaborating with clients to facilitate access to a more calm, grounded and parasympathetic state. Whether you are seeking yoga, Ayurveda, massage or any combination thereof, it is my heart's desire to provide a truly trauma informed, compassionate, and client-centered experience. In partnering with each client on their wellness journey, I aspire to work collaboratively to bring balance, to positively impact all aspects; body, mind and spirit.
            </p>
          </div>

          <div className = "flex flex-col items-end w-full lg:w-[40%] ">   
              <img className = "my-4 md:my-0 w-full "src='./images/about2.png'/> 
              <br className = "p-5"/>       
              <div className ="w-[100%] p-4 bg-darktan border-2 border-slate border-opacity-25 rounded-lg flex flex-col items-center w-[70%]">
                <img className="w-16 h-16" src="./images/flower.png" alt = 'img4' />
                <p className = "text-center text-lg">
                  “I cannot but marvel at the human capacity to overcome tremendous suffering and find a way to go on. It would be one thing if we released all our holdings right after the trauma, but that we continue to carry them and still find the faith to believe in a better tomorrow is simply heroic. I think of the shadow material that takes up space inside many of us--repressed emotions, unsaid words, armored musculature, collective trama--and then marvel at our capacity to weave optimism, faith and determination into the heart of it. Minefields and goldmines sitting side by side in the inner valley. Let's stop looking for our heroes 'out there'. They really are staring at us in the mirror.”
                </p>
            </div>
          </div>

        </div>
        <Footer />
    </div>
  );
}