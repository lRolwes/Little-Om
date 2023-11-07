import 'tailwindcss/tailwind.css'
import Image from "next/image";
import Navbar from "./../components/Navbar.js";
import Footer from "./../components/Footer.js";
import MobileBar from "./../components/MobileBar.js";
import {Textbox, Textbox2} from "./../components/Textbox.js";
import Header from "./../components/Header.js";

export default function Layout({ children }) {
    return (
        <div className="bg-tan relative overflow-hidden">
            <div className="absolute z-0 w-full h-full">
                <Image src="/images/wood-pattern.png" fill alt="" />
            </div>
            <div className="max-w-7xl mx-auto relative w-full h-full z-10">
                <Navbar />
                <MobileBar/>
                {children}
                <Footer />
            </div>
        </div>
    );
}
