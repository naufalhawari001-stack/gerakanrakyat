"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AgendaSection() {
  return (
    <section className="bg-[#fcfcfc] py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Header Agenda */}
        <h2 className="text-[#FF4500] text-2xl md:text-3xl font-[900] uppercase tracking-[0.25em] mb-3">
          Agenda Gerakan
        </h2>
        <h3 className="text-gray-900 text-lg md:text-xl font-extrabold mb-14 tracking-tight">
          Peluncuran Kartu Tanda Anggota (KTA)
        </h3>

        {/* Kartu Utama Agenda */}
        <div className="relative bg-white rounded-[45px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-6 md:p-14 border border-gray-50 overflow-hidden group">
          
          {/* Frame Garis Putus-putus */}
          <div className="border-[2px] border-dashed border-gray-200 rounded-[35px] p-8 md:p-20 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-orange-400">
            
            {/* Logo Gerakan Rakyat */}
            <div className="w-full max-w-2xl mb-2 transition-transform duration-700 group-hover:scale-[1.03]">
              <Image 
                src="/gr-logo.png" 
                alt="Logo Gerakan Rakyat" 
                width={800} 
                height={250}
                className="w-full h-auto object-contain brightness-105"
                priority
              />
            </div>
          </div>

          {/* Slogan & Tombol (Sesuai image_ddb158.png) */}
          <div className="mt-10 flex flex-col items-center">
            <p className="text-gray-800 italic text-sm md:text-base font-semibold mb-8 tracking-wide">
              &quot;Menyatukan Barisan, Mengawal Kesejahteraan&quot;
            </p>

            {/* Tombol DAFTAR SEKARANG - Persis seperti image_ddb158.png */}
            <Link 
              href="https://daftar.gerakanrakyat.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF4500] hover:bg-orange-600 text-white flex items-center gap-3 px-8 py-3.5 rounded-lg font-black text-sm md:text-base uppercase tracking-widest shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Calendar size={22} strokeWidth={2.5} />
              DAFTAR SEKARANG
            </Link>
          </div>

          {/* Aksentuasi Dekoratif */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-full -ml-16 -mb-16 blur-2xl" />
        </div>
      </div>

      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
    </section>
  );
}