import Head from "next/head";
//import styles from '../styles/Home.module.css';
import Link from "next/link";
import Image from "next/image.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import MobileBar from "./MobileBar.js";
import Layout from "./layout.js";

function Quote() {
    return (
        <div className="h-[262px] w-[412px] p-6 rounded-[10px] bg-darktan border-2 border-slate border-opacity-25 flex justify-center flex-col items-center">
            <p className="text-center text-black text-[28px] font-bold font-serif">
                “The quieter you become, the more you hear.”
            </p>
            <p className="text-center text-black text-2xl font-normal font-sans my-[20px]">
                Ram Dass
            </p>
        </div>
    );
}

function Pricing() {
    return (
        <div className="w-[412px] my-[20px] lg:my-[0px] bg-orange rounded-lg">
            <div className="p-8 w-full h-full flex flex-col justify-between">
                <p className="text-center text-white text-4xl font-serif">
                    Pricing
                </p>
                <p className="text-center text-white text-2xl font-normal font-Sans">
                    60 min. treatment • $100
                </p>
                <p className="text-center text-white text-2xl font-normal font-Sans">
                    75 min. treatment • $115
                </p>
                <p className="pb-5 text-center text-white text-2xl font-normal font-Sans">
                    90 min. treatment • $130
                </p>
            </div>
        </div>
    );
}

function Profilepic() {
    return (
        <div className="">
            <img
                className="cover rounded-lg w-[412px] border-2 border-slate border-opacity-25 "
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
            <div className="absolute z-2 p-10 top-[30%] lg:top-[60%] flex flex-col text-white">
                <h1 className="z-0 text-[32px] lg:text-[64px] font semi-bold font-serif">
                    Little Om Yoga & Massage
                </h1>
                <h2 className="text-xl font-normal font-sans">
                    Bringing balance to the body, mind, and spirit
                </h2>
                <div className="gap-4 py-2 flex flex-col lg:flex-row">
                    <Link
                        className="py-1 px-3 mt-[15px] whitespace-nowrap lg:mt-[0px] flex-none rounded-l-full rounded-r-full bg-orange hover:bg-white hover:text-orange transition duration-200"
                        href="/booksession"
                    >
                        Book a session
                    </Link>
                    <Link
                        className="py-1 px-3 mt-[15px] lg:mt-[0px] border-2 border-orange rounded-full hover:bg-orange transition duration-200"
                        href="/treatments"
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
            <div className="">
                <MobileBar className="z-10" />
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
