import Image from "next/image"
import Sliding1 from "./galeri/slide1"
import Sliding2 from "./galeri/slide2"

const Galeri = ({ images }: { images: string[] }) => {
    return (
        <section className="w-full relative flex flex-col items-center">
            <h2 className="text-[10vw] underline font-bold sm:text-[2.5vw]">GALERI</h2>
            <p className="text-[4.4vw] sm:text-[1.875vw]">kegiatan dan aktivitas</p>
            <main className="hidden sm:block">
                <Sliding1 images={images} />
                <Sliding2 images={images} />
                <Sliding1 images={images} />
                <Sliding2 images={images} />
            </main>
            <main className="sm:hidden">
                <Sliding1 images={images.slice(0, 3)} />
                <Sliding2 images={images.slice(3, 6)} />
                <Sliding1 images={images.slice(6, 9)} />
                <Sliding2 images={images.slice(9, 12)} />
            </main>
        </section>
    )
}

export default Galeri