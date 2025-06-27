import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://wonderlandkemuning.com/"),
  title: {
    default: "Wonderland Kemuning",
    template: "%s | Wonderland Kemuning",
  },
  description:
    "Wonderland Kemuning adalah tour organizer yang menawarkan paket wisata lengkap di Kemuning, termasuk wisata alam, air, jeep adventure, tubing, edukasi teh dan satwa, serta rekomendasi villa dan penginapan. Dengan berbagai paket wisata, pengunjung dapat menikmati keindahan alam, air terjun, dan kebun teh. Kami berkomitmen memberikan pengalaman wisata terbaik dan tak terlupakan.",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative w-[100vw] max-w-[100%] text-white bg-black">
          <Navbar limit={0.8} />
          {children}
        </main>
      </body>
    </html>
  );
}
