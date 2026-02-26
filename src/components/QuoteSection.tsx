"use client";

import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="bg-[#1a1a1a] py-20 lg:py-0 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Sisi Kiri: Foto Figur (Lingkaran sudah ada di dalam file PNG) */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* CATATAN: Lingkaran CSS telah dihapus karena gambar PNG 
                sudah memiliki bulatan merah bawaan.
            */}
            
            <div className="relative z-10 w-[280px] md:w-[450px] lg:pt-16 lg:pb-10">
              <Image 
                src="/Sahrin-Hamid-Gerakan-Rakyat.png" 
                alt="Sahrin Hamid - Ketua Umum Gerakan Rakyat" 
                width={600} 
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Sisi Kanan: Teks Quote */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left pb-10 lg:pb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight mb-8">
              Kekuatan Utama <span className="text-[#FF4500]">Rakyat</span> adalah <span className="text-[#FF4500]">Gotong Royong.</span>
            </h2>
            
            <div className="space-y-1">
              <p className="text-xl md:text-2xl font-bold tracking-wide uppercase">
                Sahrin Hamid
              </p>
              <p className="text-gray-400 font-medium uppercase tracking-[0.2em] text-sm md:text-base">
                Ketua Umum Gerakan Rakyat
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}