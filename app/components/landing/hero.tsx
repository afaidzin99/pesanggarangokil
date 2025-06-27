import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

export default function Hero() {
    return (
        <section className="h-[100vh] w-[100vw] relative overflow-hidden">
            <div className="h-[15vh] w-[100vw] opacity-[.6] absolute z-[2] bg-gradient-to-b from-black"></div>
            <div className="h-[15vh] w-[100vw] opacity-[.6] absolute bottom-0 z-[2] bg-gradient-to-t from-black"></div>
            <figure className="w-[130vw] h-[130vw] border-[20vw] border-black opacity-[.2] absolute z-[2] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full sm:scale-[.5]"></figure>
            <figure className="absolute z-[1] h-full w-full">
                <Image
                    className="sm:hidden"
                    src="/landing/hero.png"
                    alt="hero"
                    fill={true}
                />
                <Image
                    className="hidden sm:block"
                    src="/landing/hero_desk.png"
                    alt="hero"
                    fill={true}
                />
            </figure>
            <section className="h-[70vw] w-[70vw] absolute  z-[2] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  flex flex-col justify-between items-center sm:scale-[.5]">
                <h1 className="h-[54vw] w-[54vw]  relative flex flex-col justify-between items-center leading-none">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        fill={true}
                    />
                    {/* <div className="text-[8vw] font-light  ">WONDERLAND</div>
                    <div className="w-full h-[3%] bg-white  "></div>
                    <div className="text-[8vw] font-bold text-justify  ">K E M U N I N G</div> */}
                </h1>
                <article className="  text-[3.3vw] italic text-nowrap tracking-wider text-center">Temukan Pesona Alam&nbsp;<span className="font-bold">Kemuning:<br className="sm:hidden"></br></span>&nbsp;Tempat Liburan Impian Anda</article>
                <a href="https://wa.me/6282327911091" className="h-[7.8vw] cursor-pointer flex items-center justify-center text-[2.5vw] border-[1vw] border-white rounded-full p-[1vw] px-[4vw]">
                    <FaWhatsapp />
                    <span className="ml-[1.5vw] font-bold">HUBUNGI SEKARANG</span>
                </a>
            </section>
        </section>
    )
}
