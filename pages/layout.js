import Image from "next/image";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

export default function Layout({ children }) {
    return (
        <div className="bg-tan relative overflow-hidden">
            <div className="absolute z-0 w-full h-full">
                <Image src="/images/wood-pattern.png" fill alt="" />
            </div>
            <div className="max-w-7xl mx-auto relative w-full h-full z-10">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}
