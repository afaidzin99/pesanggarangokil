import Image from "next/image"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPeopleGroup, FaHouse, FaWhatsapp } from "react-icons/fa6";
import { GiMountainRoad } from "react-icons/gi";
import { PiJeepBold } from "react-icons/pi";

export default function About() {
    return (
        <section className="h-[100vh] w-full bg-black relative flex flex-col items-center justify-evenly sm:flex-row sm:justify-center">
            <h2 className="text-[10vw] font-bold underline leading-none sm:hidden">TENTANG KAMI</h2>
            <p className="w-[80%] text-[3.3vw] text-justify sm:hidden"><span className="font-bold text-[4.4vw]">Wonderland Kemuning</span>&nbsp;adalah tour organizer yang menawarkan paket wisata lengkap di Kemuning, termasuk wisata alam, air, jeep adventure, tubing, edukasi teh dan satwa, serta rekomendasi villa dan penginapan. Dengan berbagai paket wisata, pengunjung dapat menikmati keindahan alam, air terjun, dan kebun teh. Kami berkomitmen memberikan pengalaman wisata terbaik dan tak terlupakan.</p>
            <section className="hidden w-[49.5vw] h-full bg-white relative sm:flex">
                <Image
                    src="/landing/about/teh.png"
                    alt="about"
                    fill={true}
                />
                <section className="absolute bg-black bg-opacity-50 w-[49.5vw] h-full flex flex-col justify-evenly px-[6.7vw]">
                    <h2 className="font-bold underline text-[2.1vw]">TENTANG KAMI</h2>
                    <p className="text-[1.5vw]"><span className="font-bold text-[2vw]">Wonderland Kemuning</span> adalah tour organizer yang menawarkan paket wisata lengkap di Kemuning, termasuk wisata alam, air, jeep adventure, tubing, edukasi teh dan satwa, serta rekomendasi villa dan penginapan. Dengan berbagai paket wisata, pengunjung dapat menikmati keindahan alam, air terjun, dan kebun teh. Kami berkomitmen memberikan pengalaman wisata terbaik dan tak terlupakan.</p>
                    <div className="h-[.5vw] rounded-full bg-white bg-opacity-50"></div>
                    <section className="flex w-[36.167vw] items-center">
                        <FaMapMarkerAlt className="h-[9.167vw] w-[6.389vw] scale-[.4]" />
                        <p className="text-[1.5vw]"><span className="font-bold text-[2vw]">Kemuning</span><br /> Ngargoyoso, Karanganyar, Indonesia</p>
                    </section>
                </section>
            </section>
            <section className="hidden sm:block w-[.8vw] h-full bg-[#4E7A25]"></section>
            <main className="h-[63.3vw] flex flex-col items-center justify-between sm:w-[49.5vw] sm:h-full">
                <h3 className="text-[4.4vw] sm:text-[1.67vw] sm:w-full sm:px-[7.5vw] sm:my-[2vw] sm:mt-[5vw]">Spesialis dalam</h3>
                <section className="h-[54.4vw] flex flex-col justify-between sm:h-full">
                    <section className="w-[82vw] h-[11.11vw] bg-white rounded-full flex justify-evenly items-center sm:w-[35vw] sm:h-[4vw] ">
                        <section className="w-[7.8vw] h-[7.8vw] sm:flex sm:justify-center sm:items-center"><FaPeopleGroup className=" h-full w-full sm:w-[3.125vw] sm:h-[3.125vw]" style={{ color: "black" }}></FaPeopleGroup></section>
                        <section className="w-[80%] text-[5.6vw] font-bold text-black flex justify-center sm:text-[2.1vw]">OUTBOND</section>
                    </section>
                    <section className="w-[82vw] h-[11.11vw] bg-[#4E7A25] rounded-full flex justify-evenly items-center sm:w-[35vw] sm:h-[4vw] ">
                        <section className="w-[7.8vw] h-[7.8vw] sm:flex sm:justify-center sm:items-center"><GiMountainRoad className=" h-full w-full sm:w-[3.125vw] sm:h-[3.125vw]"></GiMountainRoad></section>
                        <section className="w-[80%] text-[5.6vw] font-bold text-white flex justify-center sm:text-[2.1vw]">WISATA & TUBING</section>
                    </section>
                    <section className="w-[82vw] h-[11.11vw] bg-white rounded-full flex justify-evenly items-center sm:w-[35vw] sm:h-[4vw] ">
                        <section className="w-[7.8vw] h-[7.8vw] sm:flex sm:justify-center sm:items-center"><PiJeepBold className=" h-full w-full sm:w-[3.125vw] sm:h-[3.125vw]" style={{ color: "black" }}></PiJeepBold></section>
                        <section className="w-[80%] text-[5.6vw] font-bold text-black flex justify-center sm:text-[2.1vw]">JEEP ADVENTURE</section>
                    </section>
                    <section className="w-[82vw] h-[11.11vw] bg-[#4E7A25] rounded-full flex justify-evenly items-center sm:w-[35vw] sm:h-[4vw] ">
                        <section className="w-[7.8vw] h-[7.8vw] sm:flex sm:justify-center sm:items-center"><FaHouse className=" h-full w-full sm:w-[3.125vw] sm:h-[3.125vw]"></FaHouse></section>
                        <section className="w-[80%] text-[5.6vw] font-bold text-white flex justify-center sm:text-[2.1vw]">VILLA & PENGINAPAN</section>
                    </section>
                </section>
                <a href="https://wa.me/6282327911091" className="hidden h-[7.8vw] cursor-pointer flex items-center justify-center text-[2.5vw] border-[1vw] border-white rounded-full p-[1vw] px-[4vw] scale-[.5] mb-[8vw] sm:flex">
                    <FaWhatsapp />
                    <span className="ml-[1.5vw] font-bold">HUBUNGI SEKARANG</span>
                </a>
            </main>
            <a href="https://wa.me/6282327911091" className="h-[7.8vw] cursor-pointer flex items-center justify-center text-[2.5vw] border-[1vw] border-white rounded-full p-[1vw] px-[4vw] sm:hidden">
                <FaWhatsapp />
                <span className="ml-[1.5vw] font-bold">HUBUNGI SEKARANG</span>
            </a>
        </section>
    )
}
