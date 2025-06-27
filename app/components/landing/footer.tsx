import Image from "next/image"
import { FaMapMarkerAlt, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <section className="relative w-[100vw] min-h-[100vh] py-[10vw] flex flex-col justify-between items-center sm:h-[61vw]  sm:py-[3vw]">
            <h2 className="h-[18vw] flex flex-col justify-between items-center leading-none sm:hidden">
                <div className="text-[8vw] font-light  ">WONDERLAND</div>
                <div className="w-[57.5vw] h-[3%] bg-white"></div>
                <div className="text-[8vw] font-bold text-justify  ">K E M U N I N G</div>
            </h2>
            <section className="flex flex-col items-center sm:hidden">
                <h3 className="text-[4.44vw] font-bold text-center mt-[4vw]">Alamat</h3>
                <section className="flex w-[82.5vw]">
                    <FaMapMarkerAlt className="h-[9.167vw] w-[6.389vw] mx-[2vw]" />
                    <p className="text-[3.33vw] mx-[2vw]">Kemuning, Ngargoyoso, Karanganyar lorem ipsum dolor sit amet</p>
                </section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63276.5250947021!2d111.07016237299968!3d-7.598599558485433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e798ab3f438c809%3A0x7672c9cd05cbfd1!2sKemuning%2C%20Kec.%20Ngargoyoso%2C%20Kabupaten%20Karanganyar%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1722278426670!5m2!1sid!2sid"
                    className="w-[61.67vw] h-[53.89vw] rounded-[2vw] my-[4vw]"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </section>
            <h3 className="text-[4.44vw] font-bold sm:hidden">Kontak</h3>
            <a href="https://wa.me/6282327911091" className="flex w-[82.5vw] items-center sm:hidden">
                <FaWhatsapp className="h-[9.167vw] w-[6.389vw] mx-[2vw]" />
                <p className="text-[3.33vw]">088123456789</p>
            </a>
            <section className="flex w-[82.5vw] items-center sm:hidden">
                <MdEmail className="h-[9.167vw] w-[6.389vw] mx-[2vw]" />
                <p className="text-[3.33vw]">wonderlandkemuning@gmail.com</p>
            </section>
            <h3 className="text-[4.44vw] font-bold mt-[4vw] sm:hidden">Media Sosial</h3>
            <section className="flex justify-center sm:hidden">
                <FaInstagram className="h-[9.167vw] w-[6.389vw] mx-[2vw]" />
                <FaTiktok className="h-[9.167vw] w-[6.389vw] mx-[2vw]" />
            </section>
            <section className="w-full h-[50vw] hidden sm:flex">
                <section className="h-full w-[50%]  px-[5vw]">
                    <h2 className="h-[18vw] flex flex-col justify-between items-start leading-none sm:h-[7vw]">
                        <div className="text-[8vw] font-light sm:text-[2.5vw]">WONDERLAND</div>
                        <div className="w-[57.5vw] h-[3%] bg-white sm:h-[.2vw] sm:w-[17.5vw]"></div>
                        <div className="text-[8vw] font-bold text-justify sm:text-[2.5vw]">K E M U N I N G</div>
                    </h2>
                    <section className="flex flex-col items-start">
                        <h3 className="text-[4.44vw] font-bold text-center mt-[4vw] sm:text-[2.5vw]">Alamat</h3>
                        <section className="flex w-[40vw]  items-center">
                            <FaMapMarkerAlt className="h-[9.167vw] w-[6.389vw] mx-[2vw] scale-[.6]" />
                            <p className="text-[1.875vw]">Kemuning, Ngargoyoso, Karanganyar, Indonesia</p>
                        </section>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63276.5250947021!2d111.07016237299968!3d-7.598599558485433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e798ab3f438c809%3A0x7672c9cd05cbfd1!2sKemuning%2C%20Kec.%20Ngargoyoso%2C%20Kabupaten%20Karanganyar%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1722278426670!5m2!1sid!2sid"
                            className="w-[18vw] h-[18vw] rounded-[2vw] my-[4vw]"
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </section>
                </section>
                <section className="h-full w-[50%] flex flex-col justify-evenly items-start py-[10vw]">
                    <h3 className="text-[2.5vw] font-bold ">Kontak</h3>
                    <a href="https://wa.me/6282327911091" className="flex w-[50vw]  items-center">
                        <FaWhatsapp className="h-[3vw] w-[3vw] mx-[2vw]" />
                        <p className="text-[2.5vw]">088123456789</p>
                    </a>
                    <section className="flex w-[82.5vw] items-center">
                        <MdEmail className="h-[3vw] w-[3vw] mx-[2vw]" />
                        <p className="text-[2.5vw]">wonderlandkemuning@gmail.com</p>
                    </section>
                    <h3 className="text-[2.5vw] font-bold">Media Sosial</h3>
                    <section className="flex justify-center">
                        <FaInstagram className="h-[3vw] w-[3vw] mx-[2vw]" />
                        <FaTiktok className="h-[3vw] w-[3vw] mx-[2vw]" />
                    </section>
                </section>
            </section>
            <section className="w-[82.5vw] h-[1vw] bg-[#4E7A25] my-[4vw] sm:my-[0] sm:w-[90vw] sm:h-[.5vw]"></section>
            <section className="text-[4.44vw] sm:text-[1.875vw]">© 2024 Menjamu Lawu</section>
        </section>
    )
}
