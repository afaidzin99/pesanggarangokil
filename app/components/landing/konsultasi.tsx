import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa6"

export default function Konsultasi() {
    return (
        <section className="relative w-[100vw] h-[122.2vw] sm:h-[100vh]">
            <figure className="h-full w-full absolute">
                <Image
                    src="/landing/konsultasi/back.png"
                    alt="hero"
                    fill={true}
                />
            </figure>
            <main className="absolute h-full w-full flex flex-col items-center justify-center sm:scale-[.6]">
                <p className="text-[3.89vw] text-center">Masih ragu dengan rencanamu</p>
                <h2 className="text-[6.6vw] font-bold underline">KONSULTASI GRATIS</h2>
                <article className="text-[3.89vw] text-center w-[74.72vw]">Wujudkan rencana impianmu!</article>
                <a href="https://wa.me/6282327911091" className="h-[7.8vw] cursor-pointer flex items-center justify-center text-[2.5vw] border-[1vw] border-white rounded-full p-[1vw] px-[4vw] my-[6vw]">
                    <FaWhatsapp className="w-[4vw] h-[4vw]" />
                    <span className="ml-[1.5vw] font-bold">HUBUNGI SEKARANG</span>
                </a>
            </main>
        </section>
    )
}
