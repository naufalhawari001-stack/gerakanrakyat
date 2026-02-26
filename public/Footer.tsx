"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook, 
  MessageCircle 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          
          {/* KOLOM 1: LOGO & COPYRIGHT */}
          <div className="flex flex-col items-start">
            <div className="mb-8">
              <Image 
                src="/gr-putih.png" 
                alt="Gerakan Rakyat" 
                width={220} 
                height={70}
                className="w-auto h-12 object-contain"
              />
            </div>
            {/* Copyright Box Identik Referensi */}
            <div className="border border-white/20 px-6 py-3 rounded-sm">
              <p className="text-xs font-medium tracking-widest uppercase opacity-80">
                Copyright {currentYear}, Gerakan Rakyat
              </p>
            </div>
          </div>

          {/* KOLOM 2: KONTAK & SOSMED */}
          <div>
            <h4 className="text-lg font-bold mb-1 relative inline-block">
              Kontak
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#FF4500]"></span>
            </h4>
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="text-[#FF4500] group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <span className="text-sm font-medium opacity-90 group-hover:text-orange-400 transition-colors">
                  0852-8232-5183
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="text-[#FF4500] group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="text-sm font-medium opacity-90 group-hover:text-orange-400 transition-colors lowercase">
                  humasmedia@gerakan-rakyat.or.id
                </span>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="text-[#FF4500] mt-1 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <span className="text-sm font-medium opacity-90 leading-relaxed group-hover:text-orange-400 transition-colors">
                  Jl. Brawijaya X, Pulo, Kebayoran Baru,<br />Jakarta Selatan
                </span>
              </div>
            </div>

            {/* Ikon Sosial Media Bulat */}
            <div className="flex items-center gap-3 mt-10">
              {[
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Youtube size={18} />, href: "#" },
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <MessageCircle size={18} />, href: "#" },
              ].map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FF4500] hover:border-[#FF4500] transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* KOLOM 3: LINK POPULER */}
          <div>
            <h4 className="text-lg font-bold mb-1 relative inline-block">
              Link Populer
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#FF4500]"></span>
            </h4>
            <ul className="mt-8 flex flex-col">
              {[
                "Beranda", 
                "Berita Gerakan Rakyat", 
                "Tentang Gerakan", 
                "Logo dan Identitas"
              ].map((link, idx) => (
                <li key={idx} className="border-b border-white/10 last:border-0">
                  <Link 
                    href="#" 
                    className="block py-3 text-sm font-medium opacity-80 hover:opacity-100 hover:text-orange-400 hover:pl-2 transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Garis Bawah Tipis */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">
            Gerakan Rakyat Banyumas &bull; Gotong Royong Untuk Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}