import Image from "next/image"
import paket from "@/app/data/paket.json"
import { useRouter } from "next/navigation"
import type { Paket } from "@/app/type"
import { namapaket } from "@/app/lib/namapaket"
import { useEffect } from "react";

export default function Paket() {
    const router = useRouter();
    useEffect(() => {
        router.refresh();
    }, []);

    return (
        <section className="relative w-[100vw] bg-[#4E7A25] py-[10vw] flex flex-col justify-between items-center sm:h-auto sm:py-[3vw]">
            <h2 className="text-[10vw] underline font-bold leading-none sm:text-[2.5vw] sm:leading-[2]">PAKET</h2>
            <h3 className="mt-[2vw] text-[3.89vw] leading-none sm:text-[1.67vw] sm:font-light sm:mt-0">yang kami tawarkan</h3>
            <div className="h-[.5vw] w-[30vw] bg-white rounded-full hidden sm:block sm:mt-[3vw]"></div>
            <main className="h-[240vw] flex flex-col justify-between items-center mt-[8vw] sm:flex-row sm:flex-wrap sm:h-[40vw] sm:justify-evenly sm:mt-[0]">
                {paket.map((item) => (
                    <a href={`/${item.nama_paket}`} key={item.nama_paket}>
                        <section className="h-[25vw] w-[69vw] relative cursor-pointer sm:w-[29vw] sm:h-[10.4vw]" key={item.nama_paket}>
                            <Image
                                src={item.background}
                                alt={item.nama_paket}
                                fill={true}
                            />
                            <h4 className="absolute text-[5.56vw] font-bold bottom-0 right-0 uppercase sm:text-[2.5vw]">{namapaket(item.nama_paket)} »&nbsp;</h4>
                        </section>
                    </a>
                ))}
            </main>
            <div className="h-[.5vw] w-[90vw] bg-white rounded-full hidden sm:flex justify-center">
                <div className="h-[.5vw] w-[30vw] bg-[#4E7A25] rounded-full hidden sm:block"></div>
            </div>
        </section>
    );
}
