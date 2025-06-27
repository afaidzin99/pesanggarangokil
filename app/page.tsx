"use client"

import Hero from "@/app/components/landing/hero";
import About from "./components/landing/about";
import Paket from "./components/landing/paket";
import Testimoni from "./components/landing/testimoni";
import Konsultasi from "./components/landing/konsultasi";
import Footer from "./components/landing/footer";

export default function Home() {
  return (
    <main className={`w-[100vw] overflow-x-hidden max-w-[100%]`}>
      <Hero />
      <About />
      <Paket />
      <Testimoni />
      <Konsultasi />
      <Footer />
    </main>
  );
}
