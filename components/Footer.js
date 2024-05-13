import 'tailwindcss/tailwind.css'
import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="py-10 w-full flex flex-col place-items-center ">
            <p className="py-1 text-black text-2xl font-bold font-['Boska-Variable'] leading-norma">
                Little OM Yoga and Massage LLC
            </p>

            <div className="py-3 lg:w-[40vw] hidden lg:flex flex-row justify-between">
                <Link
                    href="/about"
                    className="text-gray-900 text-base font-normal font-['GeneralSans-Variable'] leading-normal"
                >
                    About
                </Link>
                <Link
                    href="/massage"
                    className="text-gray-900 text-base font-normal font-['GeneralSans-Variable'] leading-normal"
                >
                    Services
                </Link>
                {/*<Link
                    href="/treatments"
                    className="text-gray-900 text-base font-normal font-['GeneralSans-Variable'] leading-normal"
                >
                    Ayurvedic Treatments
    </Link>*/}
                <Link
                    href="/testimonials"
                    className="text-gray-900 text-base font-normal font-['GeneralSans-Variable'] leading-normal"
                >
                    Testimonials
                </Link>
                <Link
                    href="/booksession"
                    className="text-gray-900 text-base font-normal font-['GeneralSans-Variable'] leading-normal"
                >
                    Book a session
                </Link>
            </div>
            <div className="h-10 w-9/12 ">
                <hr className="h-px my-8 border-0 bg-gray-700" />
            </div>
            <div className="w-full flex flew-row justify-between px-10 py-10">
                <div className="px-5 self-center grow shrink basis-0 text-gray-900 text-base font-normal font-['GeneralSans-Variable'] leading-normal">
                    © 2023 Little OM Yoga & Massage, LLC. All rights reserved.
                </div>
                <Link
                    href="privacy"
                    className="px-5 text-gray-900 text-base font-normal font-['GeneralSans-Variable'] leading-normal"
                >
                    Privacy Policy
                </Link>
            </div>
        </div>
    );
};

export default Footer;
