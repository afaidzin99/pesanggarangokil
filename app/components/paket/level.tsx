"use client"

import Kelas from '@/app/components/paket/level/kelas'
import type { Paket } from '@/app/type'
import { useEffect } from 'react'
import { namapaket } from "@/app/lib/namapaket"

const Level = ({ dataPaket }: { dataPaket: Paket }) => {
    useEffect(() => {
        console.log("level");
    }, []);

    return (
        <div className="relative pt-[30vw] sm:pt-[10vw]">
            <h2 className='text-center text-[10vw] font-bold underline uppercase sm:text-[2.5vw]'>{namapaket(dataPaket.nama_paket)}</h2>
            <p className='text-[4.4vw] p-[8.33vw] sm:text-[2vw] text-justify sm:p-[1.875vw] sm:px-[20vw]'>{dataPaket.deskripsi}</p>
            <main className='flex flex-col items-center sm:flex-row sm:px-[10vw] sm:justify-between sm:items-start sm:flex-wrap'>
                {dataPaket.kelas.map((item, i) => (
                    <Kelas kelas={item} prev={i == 0 ? "dasar" : dataPaket.kelas[i - 1].level} name={dataPaket.nama_paket} key={item.level} />
                ))}
            </main>
        </div>
    )
}

export default Level