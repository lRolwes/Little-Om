import React from "react";
import Head from "next/head";
import Link from "next/link";
import './nav.module.css'
import 'tailwindcss/tailwind.css'


export function Logo() {
    return (
        <div className="absolute z-10 mt-[10px] lg:mt-[0px] bg-stone-200 rounded-[10px] border-2 border-slate border-opacity-50">
            <img
                className="w-[61px] h-[70px] lg:w-[122px] lg:h-[139.24px]"
                src="./images/logo.png"
                alt="logo"
            />
        </div>
    );
}

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-4 font-[GeneralSans-Variable] text-lg  font-semibold">
            
            <div className="hidden lg:flex">
                <Logo />
            </div>
            <div className="hidden lg:flex text-black">
                <Link className = "transition duration-200 hover:-translate-y-1 hover:underline" href="/">
                    <div href = "/" className="px-6 py-4">Home</div>
                </Link>
                <Link className = "transition duration-200 hover:-translate-y-1 hover:underline" href="/about">
                    <div className="px-6 py-4  "> About</div>
                </Link>
                <Link href="/massage" className = "transition duration-200 hover:-translate-y-1 hover:underline">
                    <div className="px-6 py-4 ">Massage</div>
                </Link>
                {/*<Link href="/treatments" className = "transition duration-200 hover:-translate-y-1 hover:underline">
                    <div className="px-6 py-4 "> Ayurvedic Treatments</div>
    </Link>*/}
                <Link href="testimonials" className = "transition duration-200 hover:-translate-y-1 hover:underline">
                    <div className="px-6 py-4 ">Testimonials</div>
                </Link>
                <div className="px-3  py-4 rounded-l-full rounded-r-full">
                    <Link
                        href="/booksession"
                        className="transition duration-200 rounded-l-full text-sm rounded-r-full px-3 py-2 bg-orange text-white border-2 border-orange hover:bg-white hover:text-orange"
                    >
                        Book a Session
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
