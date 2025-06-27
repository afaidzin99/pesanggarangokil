"use client"

import type { Kelas } from '@/app/type'
import { use, useEffect, useState } from 'react'
import { convertHarga } from '@/app/lib/harga'
import { FaWhatsapp } from 'react-icons/fa'

const Kelas = ({ kelas, prev, name }: { kelas: Kelas, prev: string, name: string }) => {
    // let heightStringNormal = "h-[15vw] border-2 flex flex-col items-center relative mb-[6vw] transition-all w-[83.3vw] rounded-[2vw] overflow-hidden"
    // let height = 48 + 5 * kelas.benefit.length
    // let heightString = `h-[${height.toString()}vw] border-2 flex flex-col items-center relative mb-[6vw] transition-all w-[83.3vw] rounded-[2vw] overflow-hidden`

    let heightStringNormal = "15vw"
    let height = 48 + 5 * kelas.benefit.length
    let heightString = ``

    const [show, setShow] = useState(false)
    const [heightClass, setHeightClass] = useState(heightStringNormal)

    useEffect(() => {
        setHeightClass(heightStringNormal)
    }, [])

    const handleClick = () => {
        console.log(heightString, "halo")
        setShow(!show)
        if (heightClass === heightStringNormal) {
            setHeightClass(heightString)
        } else {
            setHeightClass(heightStringNormal)
        }
    }

    return (
        // <div className={"border-2 flex flex-col items-center relative mb-[6vw] transition-all w-[83.3vw] rounded-[2vw] overflow-hidden cursor-pointer"} style={{ height: heightClass }} key={kelas.level} onClick={handleClick}>
        //     <section className='w-[83.3vw] rounded-t-[2vw] h-[2vw] bg-white absolute z-10'></section>
        //     <h3 className={`w-[83.3vw] absolute z-10 top-[2vw] p-[2.5vw] pb-0 flex justify-between items-center bg-[#4E7A25] ${show ? "" : "rounded-b-[2vw]"}`}>
        //         <section className='text-[6.67vw] font-bold capitalize'>{kelas.level}</section>
        //         <section className={`w-[4.4vw] h-[4.4vw] relative cursor-pointer ${show ? "" : "rotate-90"} transition-all duration-300`}>
        //             <div className='w-full h-[1vw] bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
        //             <div className={`${show ? "opacity-[0]" : ""} w-full h-[1vw] bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-90 duration-300`}></div>
        //         </section>
        //     </h3>
        //     <main className={` ${show ? "rounded-b-[2vw]" : "rounded-[2vw]"} absolute bottom-0 w-[83.3vw] p-[2.5vw] pt-0 bg-[#4E7A25] rounded-b-[2vw] duration-300`}>
        //         <p className='text-[3.3vw]'>{kelas.deskripsi}</p>
        //         <h4 className='text-[5.5vw] font-bold'>Rp {convertHarga(kelas.harga)}<span className='text-[3.3vw] font-light'>/orang</span></h4>
        //         <section className='w-full flex justify-center'>
        //             <a href="https://wa.me/6282327911091" className="w-[38vw] h-[7.8vw] cursor-pointer flex items-center justify-center text-[2.5vw] border-[1vw] border-white rounded-full p-[1vw] px-[4vw] m-[2vw]">
        //                 <FaWhatsapp className="w-[3vw] h-[3vw]" />
        //                 <span className="ml-[1.5vw] font-bold">PESAN SEKARANG</span>
        //             </a>
        //         </section>
        //         <h4 className='text-[4.4vw] font-bold'>{prev == "dasar" ? "Benefit yang didapatkan" : "Semua di " + prev + " tambah"}</h4>
        //         {kelas.benefit.map((item) => (
        //             <p className='text-[3.3vw]' key={item}>✔ {item}</p>
        //         ))}
        //     </main>
        // </div>\
        <>
            <div className={"border-2 flex flex-col items-center relative mb-[6vw] overflow-hidden transition-all duration-300 w-[83.3vw] rounded-[2vw] cursor-pointer sm:w-[25vw] sm:rounded-[.5vw] sm:hidden"} style={{ height: heightClass }} key={kelas.level} onClick={handleClick}>
                <section className='w-[83.3vw] rounded-t-[2vw] h-[2vw] bg-white text-white sm:w-[25vw] sm:rounded-t-[.5vw] sm:h-[.5vw]'>.</section>
                <h3 className={`w-[83.3vw] p-[2.5vw] pb-0 flex justify-between items-center bg-[#4E7A25] sm:w-[25vw] sm:px-[1vw] sm:py-0`}>
                    <section className='text-[6.67vw] font-bold capitalize sm:text-[1.875vw]'>{kelas.level}</section>
                    <section className={`w-[4.4vw] h-[4.4vw] relative cursor-pointer ${show ? "" : "rotate-90"} transition-all duration-300 sm:hidden`}>
                        <div className='w-full h-[1vw] bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
                        <div className={`${show ? "opacity-[0]" : ""} w-full h-[1vw] bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-90 duration-300`}></div>
                    </section>
                </h3>
                <main className={`w-[83.3vw] p-[2.5vw] pt-0 bg-[#4E7A25] duration-300 sm:w-[25vw] sm:px-[1vw]`}>
                    <p className='text-[3.3vw] sm:text-[1vw]'>{kelas.deskripsi}</p>
                    <h4 className='text-[5.5vw] font-bold sm:text-[1.875vw]'>Rp {convertHarga(kelas.harga)}<span className='text-[3.3vw] font-light sm:text-[1vw]'>{name == "jeep-adventure" ? "/jeep" : "/orang"}</span></h4>
                    <section className='w-full flex justify-center sm:w-[23vw]'>
                        <a href="https://wa.me/6282327911091" className="w-[38vw] h-[7.8vw] cursor-pointer flex items-center justify-center text-[2.5vw] border-[1vw] border-white rounded-full p-[1vw] px-[4vw] m-[2vw] sm:border-[.5vw] sm:p-0 sm:text-[1.3vw] sm:px-[.5vw] sm:h-[3vw] sm:m-[1vw]">
                            <FaWhatsapp className="w-[3vw] h-[3vw] sm:w-[1.5vw] sm:h-[1.5vw]" />
                            <span className="ml-[1.5vw] font-bold sm:ml-[.5vw]">PESAN SEKARANG</span>
                        </a>
                    </section>
                    <h4 className='text-[4.4vw] font-bold sm:text-[1.5vw]'>{name == "Jeep Adventure" ? "Pilihan rute" : (prev == "dasar" ? "Benefit yang didapatkan" : "Semua di " + prev + " tambah")}</h4>
                    {kelas.benefit.map((item) => (
                        <p className='text-[3.3vw] sm:text-[1vw]' key={item}>✔ {item}</p>
                    ))}
                </main>
            </div>
            <div className={"hidden border-2 flex flex-col items-center relative mb-[6vw] overflow-hidden transition-all duration-300 w-[83.3vw] rounded-[2vw] cursor-pointer sm:w-[25vw] sm:rounded-[.5vw] sm:flex"} key={kelas.level}>
                <section className='w-[83.3vw] rounded-t-[2vw] h-[2vw] bg-white text-white sm:w-[25vw] sm:rounded-t-[.5vw] sm:h-[.5vw]'>.</section>
                <h3 className={`w-[83.3vw] p-[2.5vw] pb-0 flex justify-between items-center bg-[#4E7A25] sm:w-[25vw] sm:px-[1vw] sm:py-0`}>
                    <section className='text-[6.67vw] font-bold capitalize sm:text-[1.875vw]'>{kelas.level}</section>
                    <section className={`w-[4.4vw] h-[4.4vw] relative cursor-pointer ${show ? "" : "rotate-90"} transition-all duration-300 sm:hidden`}>
                        <div className='w-full h-[1vw] bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
                        <div className={`${show ? "opacity-[0]" : ""} w-full h-[1vw] bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-90 duration-300`}></div>
                    </section>
                </h3>
                <main className={`w-[83.3vw] p-[2.5vw] pt-0 bg-[#4E7A25] duration-300 sm:w-[25vw] sm:px-[1vw]`}>
                    <p className='text-[3.3vw] sm:text-[1vw]'>{kelas.deskripsi}</p>
                    <h4 className='text-[5.5vw] font-bold sm:text-[1.875vw]'>Rp {convertHarga(kelas.harga)}<span className='text-[3.3vw] font-light sm:text-[1vw]'>{name == "jeep-adventure" ? "/jeep" : "/orang"}</span></h4>
                    <section className='w-full flex justify-center sm:w-[23vw]'>
                        <a href="https://wa.me/6282327911091" className="w-[38vw] h-[7.8vw] cursor-pointer flex items-center justify-center text-[2.5vw] border-[1vw] border-white rounded-full p-[1vw] px-[4vw] m-[2vw] sm:border-[.5vw] sm:p-0 sm:text-[1.3vw] sm:px-[.5vw] sm:h-[3vw] sm:m-[1vw]">
                            <FaWhatsapp className="w-[3vw] h-[3vw] sm:w-[1.5vw] sm:h-[1.5vw]" />
                            <span className="ml-[1.5vw] font-bold sm:ml-[.5vw]">PESAN SEKARANG</span>
                        </a>
                    </section>
                    <h4 className='text-[4.4vw] font-bold sm:text-[1.5vw]'>{name == "Jeep Adventure" ? "Pilihan rute" : (prev == "dasar" ? "Benefit yang didapatkan" : "Semua di " + prev + " tambah")}</h4>
                    {kelas.benefit.map((item) => (
                        <p className='text-[3.3vw] sm:text-[1vw]' key={item}>✔ {item}</p>
                    ))}
                </main>
            </div>
        </>
    )
}

export default Kelas