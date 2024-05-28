import Head from "next/head";
import Link from "next/link";
import Header from './../components/Header.js';
import Layout from "./../styles/layout.js";


export default function about() {
    return (
        <Layout>
            <Head>
              <title>Little Om Yoga - About</title>
              <meta
                  property="og:title"
                  content="Little Om Yoga - About"
                  key="title"
              />
            </Head>
            <Header 
            image = "./images/about.png"
            title = "About" />

            <div className="flex flex-col px-10">
                <div className="flex flex-col lg:flex-row w-full items-center lg:items-left">
                    <div className = "lg:w-[60%] p-[20px] md:p-[50px]">
                        <p className = "text-orange text-4xl font-bold font-serif leading-9">Alison's Story</p>
                        <hr className = "h-[2px] w-[120px] my-3 border-0 bg-orange"/>
                        <p className="text-black text-xl font-normal font-sans ">
                            I came to yoga as a result of a chronic illness in 2009.
                            It was through yoga and its sister science of Ayurveda
                            that I experienced a great deal of therapeutic benefits
                            and became captivated by holistic medicine and the
                            body’s amazing capacity to heal. Deeper studies
                            followed, including my 200 hour Teacher Training at Sol
                            Yoga as well as an intensive training in Ayurveda with
                            the esteemed Dr. Rosy Mann from the Kripalu School of
                            Ayurveda, which included the art and science of
                            Shirodhara, Abhyanga and other healing treatments.
                        </p>
                    </div>
                    <div className = "lg:w-[25%] pt-[50px]">
                        <img
                            className=""
                            src="./images/about2.png"
                        />
                    </div>
                </div>
                <div className="items-center mt-10 lg:mt-0 flex flex-col px-[20px] md:px-[50px] w-full  ">
                    <p className="text-black text-xl font-normal font-sans"> 
                        My awareness of the potential power of the somatic practice
                        of yoga deepened and I was drawn to study the
                        psychological and physiological fields including how
                        fascia profoundly impacts everything from one's posture
                        and movement to one's internal psycho-emotional rhythms.
                        I completed two Trauma Informed Yoga Teacher Trainings
                        at Sol Yoga with Alicia Barmon and Shelley Pentony,
                        Positional Therapy Training with Lee Albert from Kripalu
                        and Yin Yoga Teacher Training with Machelle Lee at Roots
                        & River Yoga.
                    </p>
                    <br/>
                    <p className="text-black text-xl font-normal font-sans"> 
                            From this passage into yoga and Ayurveda, it felt like
                            an organic evolution to the healing art of massage. I
                            attended and graduated from PMTI's 18 month professional
                            program in early 2021. The program reinforced my
                            passions and the joy of collaborating with clients to
                            facilitate access to a more calm, grounded and
                            parasympathetic state. Whether you are seeking yoga,
                            Ayurveda, massage or any combination thereof, it is my
                            heart's desire to provide a truly trauma informed,
                            compassionate, and client-centered experience. In
                            partnering with each client on their wellness journey, I
                            aspire to work collaboratively to bring balance, to
                            positively impact all aspects; body, mind and spirit.
                        </p>  

                </div>

                <br className="p-10" />
                <div className = "bg-orange py-8 w-full"></div>
                <br className="p-10" />

                <div className="flex flex-col items-center justify-center lg:flex-row w-full">
                    <div className="p-4 bg-darktan border-2 border-slate border-opacity-25 rounded-lg flex flex-col items-center lg:w-[70%]">
                        <img
                            className="w-16 h-16"
                            src="./images/flower.png"
                            alt="img4"
                        />
                        <p className="text-center text-lg w-full">
                            “I cannot but marvel at the human capacity to
                            overcome tremendous suffering and find a way to go
                            on. It would be one thing if we released all our
                            holdings right after the trauma, but that we
                            continue to carry them and still find the faith to
                            believe in a better tomorrow is simply heroic. I
                            think of the shadow material that takes up space
                            inside many of us--repressed emotions, unsaid words,
                            armored musculature, collective trama--and then
                            marvel at our capacity to weave optimism, faith and
                            determination into the heart of it. Minefields and
                            goldmines sitting side by side in the inner valley.
                            Let's stop looking for our heroes 'out there'. They
                            really are staring at us in the mirror.”
                        </p>
                        <p className = "text-center py-3">Jeff Brown</p>

                    </div>
                    
                </div>
            </div>

            <br className="p-10" />
        </Layout>
    );
}
