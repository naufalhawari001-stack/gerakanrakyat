"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-[1440px] mx-auto flex items-center px-8 py-6">
        
        {/* 1. LOGO SECTION - Ditambah teks Banyumas */}
        <Link href="/" className="flex flex-col items-start z-50 transition-transform hover:scale-105 group">
          <Image 
            src="/gr-logo.png" 
            alt="Logo Gerakan Rakyat" 
            width={350} 
            height={120} 
            className="h-12 md:h-16 w-auto object-contain drop-shadow-lg"
            priority
          />
          {/* Teks Banyumas di bawah logo */}
          <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mt-1 ml-1 opacity-90 group-hover:text-orange-400 transition-colors">
            Banyumas
          </span>
        </Link>
        
        {/* 2. MENU LINKS */}
        <div className="hidden lg:flex ml-auto items-center gap-x-8 text-white font-semibold text-[13px] uppercase tracking-wider mr-8">
          <Link href="/" className="relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange-500">
            Beranda
          </Link>
          
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-orange-300 transition py-1">
              Tentang Gerakan <ChevronDown size={14} className={`transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
            </div>
            {isAboutOpen && (
              <div className="absolute top-full right-0 mt-4 w-64 bg-white text-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] py-4 border-t-[6px] border-orange-600 animate-in fade-in slide-in-from-top-2 rounded-b-sm">
                <Link href="/profil" className="block px-6 py-2.5 hover:bg-orange-50 font-bold text-sm text-gray-800 hover:text-orange-700 transition">Profil Gerakan</Link>
                <Link href="/visi-misi" className="block px-6 py-2.5 hover:bg-orange-50 font-bold text-sm text-gray-800 hover:text-orange-700 transition">Visi dan Misi</Link>
                <Link href="/struktur" className="block px-6 py-2.5 hover:bg-orange-50 font-bold text-sm text-gray-800 hover:text-orange-700 transition border-b border-gray-100">Struktur Organisasi</Link>
                <Link href="/identitas" className="block px-6 py-2.5 hover:bg-orange-50 font-black text-xs text-orange-600 tracking-widest uppercase transition mt-2">→ Logo & Identitas</Link>
              </div>
            )}
          </div>

          <Link href="/suara" className="hover:text-orange-300 transition">Suara Rakyat</Link>
          <Link href="/pendaftaran" className="hover:text-orange-300 transition">Pendaftaran</Link>
          <Link href="/download" className="hover:text-orange-300 transition">Download</Link>
          <Link href="/kontak" className="hover:text-orange-300 transition">Kontak</Link>
        </div>

        {/* 3. DONASI BUTTON - Rounded Corner & Glow Effect */}
        <Link 
          href="/donasi" 
          className="hidden md:block bg-white text-orange-700 px-10 py-3 rounded-lg shadow-2xl font-black text-sm transition-all hover:-translate-y-1 hover:shadow-orange-500/30 active:scale-95"
        >
          DONASI
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white ml-auto hover:text-orange-300 transition">
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-orange-700 z-40 lg:hidden flex flex-col pt-32 px-10 space-y-6">
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="text-2xl font-black text-white border-b border-orange-600 pb-2">BERANDA</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/pendaftaran" className="text-2xl font-black text-white border-b border-orange-600 pb-2">PENDAFTARAN</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/donasi" className="bg-white text-orange-700 text-center py-4 rounded-lg font-black text-xl shadow-2xl mt-4">DONASI</Link>
        </div>
      )}
    </header>
  );
}