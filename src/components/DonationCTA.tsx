"use client";

import Link from "next/link";

export default function DonationCTA() {
  return (
    <section className="bg-[#FF4500] py-12 px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        
        {/* Teks Ajakan */}
        <h2 className="text-white text-xl md:text-2xl font-medium tracking-tight text-center lg:text-left">
          Jadilah donatur Gerakan Rakyat hari ini!
        </h2>

        {/* Grup Tombol Donasi */}
        <div className="flex items-center gap-4">
          
          {/* Tombol Nominal Cepat */}
          <Link 
            href="/donasi?amount=100000" 
            className="bg-[#222] text-white px-8 py-3 rounded-md font-black text-sm transition-all hover:bg-black hover:scale-105 active:scale-95 shadow-lg"
          >
            Rp100 Ribu
          </Link>

          {/* Tombol Nominal Lainnya */}
          <Link 
            href="/donasi" 
            className="bg-white text-[#FF4500] px-8 py-3 rounded-md font-black text-sm transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-lg"
          >
            Lainnya
          </Link>
          
        </div>
      </div>
    </section>
  );
}