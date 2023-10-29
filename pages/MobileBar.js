import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export function Logo() {
    return (
        <div className="absolute mt-[10px] lg:mt-[0px] bg-stone-200 rounded-[10px] border-2 border-slate border-opacity-50">
            <img
                className="w-[61px] h-[70px] lg:w-[122px] lg:h-[139.24px]"
                src="./images/logo.png"
                alt="logo"
            />
        </div>
    );
}

const MobileBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex lg:hidden pb-0">
            <FaBars
                onClick={handleNav}
                className=" text-orange m-4 z-20 text-2xl"
            />
            <div
                className={`transition overflow-hidden absolute duration-300 bg-tan text-4xl flex flex-col items-center text-orange bg-opacity-95 ease-in ${
                    nav ? "z-10 w-[100%] h-[100vh]" : "w-[0%] h-[0vh]"
                }`}
            >
                <div className="items-center z-10 flex flex-col ml-10 ">
                    <div className="p-6 ">
                        <Link href="/" className="p-4">
                            Home
                        </Link>
                    </div>
                    <div className="p-6 ">
                        <Link href="/about" className="p-4 ">
                            About
                        </Link>
                    </div>
                    <div className="p-6">
                        <Link href="/masage" className="p-4 ">
                            Massage
                        </Link>
                    </div>
                    <div className="p-6 ">
                        <Link href="/treatments" className="p-4 ">
                            Ayurvedic
                        </Link>
                    </div>
                    <div className="p-6 ">
                        <Link href="/testimonials" className="p-4 ">
                            Testimonials
                        </Link>
                    </div>
                    <div className="p-6">
                        <Link href="/booksession" className="p-4">
                            Book Session
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileBar;
