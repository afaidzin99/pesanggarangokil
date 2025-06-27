"use client";

import data from "@/app/data/paket.json";
import type { Paket } from "@/app/type";
import { normalizeUrl } from "@/app/lib/url";
import Level from "../components/paket/level";
import Galeri from "../components/paket/galeri";
import Konsultasi from "../components/paket/konsultasi";
import { useEffect } from "react";
import Footer from "../components/landing/footer";
import { notFound } from "next/navigation";

// TO DO: Add dynamic SEO metadata for each paket

const Paket = ({ params: { paket } }: { params: { paket: string } }) => {
  useEffect(() => {
    console.log("paket");
  }, []);

  paket = normalizeUrl(paket);

  var dataPaket: Paket = {
    nama_paket: "",
    deskripsi: "",
    background: "",
    kelas: [],
    galeri: [],
  };

  for (var i = 0; i < data.length; i++) {
    // console.log(data[i].nama_paket, paket);
    if (data[i].nama_paket == paket) {
      // console.log("masuk");
      dataPaket = data[i];
      break;
    }
  }

  if (dataPaket.nama_paket == "") {
    return notFound();
  }

  // console.log(dataPaket);
  return (
    <div className={`w-[100vw] min-h-[100vh] overflow-x-hidden max-w-[100%]`}>
      <Level dataPaket={dataPaket} />
      <Galeri images={dataPaket.galeri} />
      <Konsultasi />
      <Footer />
    </div>
  );
};

export default Paket;
