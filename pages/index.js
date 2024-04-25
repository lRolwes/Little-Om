import 'tailwindcss/tailwind.css'
import Head from "next/head";
import Link from "next/link";
import Layout from "./../styles/layout.js";

function Quote() {
    return (
        <div className="w-full lg:w-[390px] p-6 rounded-[10px] bg-darktan border-2 border-slate border-opacity-25 flex justify-center flex-col items-center">
            <p className="text-center text-black text-[28px] font-bold font-['Boska-Variable']">
                “The quieter you become, the more you hear.”
            </p>
            <p className="text-center text-black text-2xl font-normal font-['GeneralSans-Variable'] my-[20px]">
                Ram Dass
            </p>
        </div>
    );
}

function Pricing() {
    return (
        <div className=" w-full h-[250px] lg:w-[390px] my-[20px] lg:my-[0px] bg-orange rounded-lg">
            <div className="p-8 w-full flex flex-col justify-between">
                <p className="text-center text-white text-4xl font-bold font-['Boska-Variable']">
                    Pricing
                </p>
                <p className = "py-1 text-center text-white text-xl font-normal font-['GeneralSans-Variable']">45 Minute Session • $100</p>
                    <p className = "py-1 text-center text-white text-xl font-normal font-['GeneralSans-Variable']">60 Minute Session • $120</p>
                    <p className = "py-1 text-center text-white text-xl font-normal font-['GeneralSans-Variable']">75 Minute Session • $135</p>
                    <p className = "py-1 text-center text-white text-xl font-normal font-['GeneralSans-Variable']">90 Minute Session • $160</p>
            </div>
        </div>
    );
}

function Profilepic() {
    return (
        <div className="">
            <img
                className="cover rounded-lg  w-full lg:w-[390px] border-2 border-slate border-opacity-25 "
                src="./images/profile.png"
                alt="img3"
            />
        </div>
    );
}

function Waterfall() {
    return (
        <div className="px-10 pb-5 relative object-cover m">
            <img
                className="z-0 rounded-xl w-full mt-[20px] lg:mt-[0px] h-[85vh] object-cover"
                src="./images/waterfall.jpg"
                alt="/"
            />
            <div className="absolute z-2 p-10 top-[30%] lg:top-[50%] flex flex-col text-white">
                <h1 className="z-0 text-[32px] lg:text-[64px] font semi-bold font-bold font-['Boska-Variable']">
                    Little Om Yoga & Massage
                </h1>
                <h2 className="text-xl font-normal font-['GeneralSans-Variable'] ">
                    Bringing balance to the body, mind, and spirit
                </h2>
                <div className="gap-4 py-2 flex flex-col lg:flex-row ">
                    <Link
                        className="py-1 px-3 mt-[15px] mr-2 md:mr-0 whitespace-nowrap lg:mt-[0px] flex-none rounded-l-full rounded-r-full bg-orange hover:bg-white hover:text-orange transition duration-200"
                        href="/booksession"
                    >
                        Book a session
                    </Link>
                    <Link
                        className="py-1 px-3 mr-2 md:mr-0 mt-[15px] lg:mt-[0px] border-2 border-orange rounded-full hover:bg-orange transition duration-200"
                        href="/massage"
                    >
                        Explore Treatments
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <Layout>
            <Head>
              <title>Little Om Yoga</title>
              <meta
                  property="og:title"
                  content="Little Om Yoga"
                  key="title"
              />
            </Head>
            <div className="">
                <Waterfall className="z-0" />
            </div>
            <div className="w-full p-10 justify-between flex flex-col lg:flex-row">
                <Profilepic />
                <Pricing />
                <Quote />
            </div>
        </Layout>
    );
}
