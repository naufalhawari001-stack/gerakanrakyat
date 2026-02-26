import Image from "next/image";
import Link from "next/link";

// Mendefinisikan interface agar TypeScript mengenali data dari Sanity
interface HeroProps {
  headline?: string;
  tagline?: string;
}

export default function Hero({ headline, tagline }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-orange-700 font-montserrat">
      
      {/* 1. BACKGROUND LAYER - DIOPTIMASI UNTUK VISUAL TEKSTUR */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg" 
          alt="Gerakan Rakyat"
          fill
          priority
          className="object-cover object-center brightness-125 contrast-125 grayscale-[30%]"
        />
        
        {/* VIBRANT ORANGE OVERLAY (Multiply agar detail massa tetap terlihat) */}
        <div className="absolute inset-0 bg-orange-600 mix-blend-multiply opacity-90" />
        
        {/* ======================================================== */}
        {/* TEKSTUR KAIN PDL / RIPSTOP RUGGED (KUNCI ESTETIKA)       */}
        {/* ======================================================== */}
        
        {/* LAYER 1: Micro-Ripstop Grid (Serat Kotak-Kotak Mikro) */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.4] mix-blend-multiply"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4a1500 1px, transparent 1px),
              linear-gradient(to bottom, #4a1500 1px, transparent 1px)
            `,
            backgroundSize: '3px 3px' 
          }}
        />

        {/* LAYER 2: Digital Noise (Memberikan kesan 'berpasir' khas kain lapangan) */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none opacity-[0.2] mix-blend-overlay"
          style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}
        />
      </div>

      {/* 2. HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen text-center text-white px-6">
        
        {/* H1: Mengambil data headline dari Sanity dengan fallback teks default */}
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-extrabold tracking-[-0.05em] leading-[1] drop-shadow-2xl max-w-4xl uppercase">
          {headline || "Hanya untuk Rakyat"}
        </h1>

        {/* Hashtag: Mengambil data tagline dari Sanity dengan fallback default */}
        <p className="mt-6 text-sm md:text-lg font-bold tracking-[0.8em] uppercase opacity-100 pl-[0.8em]">
          {tagline || "#GotongRoyong"}
        </p>

        {/* TOMBOL: Ringkas, Proporsional, dan Modern */}
        <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">
          <Link 
            href="/pendaftaran" 
            className="bg-[#FF4500] text-white px-10 py-3.5 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl border border-orange-500 min-w-[180px] flex items-center justify-center"
          >
            DAFTAR KTA
          </Link>

          <Link 
            href="/berita" 
            className="border-2 border-white bg-white/10 backdrop-blur-md text-white px-10 py-3.5 rounded-xl font-bold text-lg hover:scale-105 transition-all min-w-[180px] flex items-center justify-center"
          >
             LIHAT BERITA
          </Link>
        </div>
      </div>
    </section>
  );
}