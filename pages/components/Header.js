import React from "react";
import Head from "next/head";
import Link from "next/link";

const Header = ({title, image}) => {
    return (
        <div className="z-0 px-10 py-5 lg:pt-0 pb-5 bg-tan object-cover flex flex-col items-center relative">
            <img
                className="rounded-xl w-full h-[40vh] object-cover"
                src={image}
                alt="/"
            />
            <div className="p-10 absolute top-[15%] flex flex-col text-white text-center">
                <h1 className="text-[50px] md:text-[64px] font-bold font-['Boska-Variable']">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Header;
