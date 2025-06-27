"use client"

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import paket from "@/app/data/paket.json"
import Image from "next/image"
import { namapaket } from "../lib/namapaket";

const Navbar = ({ limit }: { limit: number }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [hideNav, setHideNav] = useState(true)
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        const changeColor = () => {
            // console.log(window.scrollY)
            if (window.scrollY >= window.innerHeight * limit) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    const hide = () => {
        setHideNav(!hideNav)
    }

    const expand = () => {
        setExpanded(!expanded)
    }

    return (
        <nav className={`fixed w-[100vw] ${isScrolled ? "h-[10vw] bg-[#4E7A25]" : "h-[19.17vw]"} transition-all duration-100 z-30 sm:h-[5.89vw]`}>
            {/* <figure className="h-[8.05vw] w-[26.1vw] absolute z-30 top-[50%] -translate-y-[50%] left-[8.9vw] bg-white flex justify-center items-center rounded-md text-black">LOGO</figure> */}
            <a href="/" className={`h-[12vw] w-[12vw] absolute z-30 top-[50%] -translate-y-[50%] flex flex-col justify-between items-center ${isScrolled ? "scale-[0.6] left-[3vw] sm:" : "left-[8.9vw] sm:left-[3vw]"} transition-all duration-100 sm:scale-[.4]`}>
                <Image
                    src="/logo.png"
                    alt="logo"
                    fill={true}
                />
                {/* <div className="text-[2.7vw] font-light">WONDERLAND</div>
                <div className="w-full h-[6%] bg-white"></div>
                <div className="text-[2.7vw] font-bold text-justify">K E M U N I N G</div> */}
            </a>
            <section className={`w-[8.9vw] ${hideNav ? "h-[5.6vw]" : "h-[9.8vw]"} absolute z-30 top-[50%] -translate-y-[50%] transition-all transition-500 cursor-pointer ${isScrolled ? "scale-[0.6] right-[3vw]" : "right-[8.9vw]"} duration-100 sm:hidden`} onClick={hide}>
                <div className={`w-[8.9vw] h-[1.1vw] absolute ${hideNav ? "top-0" : "top-[50%] -translate-y-[50%] rotate-45"} bg-white rounded-md transition-all transition-500`}></div>
                <div className={`w-[8.9vw] h-[1.1vw] absolute top-[50%] -translate-y-[50%] bg-white ${hideNav ? "" : "opacity-0"} rounded-md transition-all transition-500`}></div>
                <div className={`w-[8.9vw] h-[1.1vw] absolute ${hideNav ? "bottom-0" : "bottom-[50%] translate-y-[50%] -rotate-45"} bg-white rounded-md transition-all transition-500`}></div>
            </section>
            <section className={`h-[100vh] w-[100vw] bg-[#4E7A25] absolute z-20 ${hideNav ? "translate-x-[100%]" : ""} transition-all duration-500 pt-[24.72vw] sm:hidden`}>
                <main className="h-[130.28vw] flex flex-col justify-between items-center text-[5vw] font-bold">
                    {paket.map((item) => (
                        <a href={`/${item.nama_paket}`} className="underline cursor-pointer uppercase" key={item.nama_paket}>{namapaket(item.nama_paket)}</a>
                    ))}
                    {/* <a href="" className="underline cursor-pointer">OUTBOND</a>
                    <a href="" className="underline cursor-pointer">JEEP ADVENTURE</a>
                    <a href="" className="underline cursor-pointer">WISATA</a>
                    <a href="" className="underline cursor-pointer">MINI ZOO</a>
                    <a href="" className="underline cursor-pointer">KEBUN TEH</a>
                    <a href="" className="underline cursor-pointer">COMPLETE</a> */}
                    <a href="/" className="underline cursor-pointer">RENCANAMU</a>
                    <a href="/" className="underline cursor-pointer">BLOG</a>
                    <a href="https://wa.me/6282327911091" className="cursor-pointer flex items-center text-[3.33vw] border-[1vw] border-white rounded-full p-[1vw] px-[4vw]">
                        <FaWhatsapp />
                        <span className="ml-[1.5vw]">HUBUNGI SEKARANG</span>
                    </a>
                </main>
            </section>
            <section className={`hidden absolute h-full w-[45vw] right-[8.9vw] justify-between text-[1.25vw] font-bold items-center sm:flex`}>
                <section className="cursor-pointer flex items-center" onClick={expand}>
                    <p className="underline">PAKET WISATA</p>
                    &nbsp;
                    <IoIosArrowForward className={`${expanded ? "rotate-90" : ""} duration-300 w-[1.25vw] h-[1.25vw]`} />
                </section>
                <section className="underline cursor-pointer">RENCANAMU</section>
                <section className="underline cursor-pointer">BLOG</section>
                <a href="https://wa.me/6282327911091" className="cursor-pointer flex items-center text-[1.25vw] border-[.4vw] border-white rounded-full p-[.1vw] px-[.6vw]">
                    <FaWhatsapp />
                    <span className="ml-[.4vw]">HUBUNGI SEKARANG</span>
                </a>
            </section>
            <section className={`hidden h-[.2vw] left-1/2 -translate-x-1/2 rounded-full absolute bottom-0 bg-white ${isScrolled ? "w-full" : "w-[85vw]"} duration-300 sm:block`}>
                <section className={`w-[13.5vw] text-right flex flex-col text-[1.25vw] p-[1vw] bg-[#4E7A25] top-[.4vw] absolute font-bold ${isScrolled ? "left-[44vw]" : "left-[36.5vw]"} uppercase ${expanded ? "" : "hidden"} duration-300 border-[.2vw] rounded-[.4vw]`}>
                    {paket.map((item) => (
                        <a href={`/${item.nama_paket}`} key={item.nama_paket}>{namapaket(item.nama_paket)}</a>
                    ))}
                </section>
            </section>
        </nav>
    );
}

export default Navbar;
