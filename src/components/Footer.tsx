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

interface FooterProps {
  settings?: {
    siteName?: string;
    contactInfo?: {
      phone?: string;
      email?: string;
      address?: string;
    };
    socialMedia?: {
      instagram?: string;
      twitter?: string;
      youtube?: string;
      facebook?: string;
      whatsapp?: string;
    };
    footerLogo?: string;
  };
}

export default function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          
          {/* KOLOM 1: LOGO & COPYRIGHT */}
          <div className="flex flex-col items-start">
            <div className="mb-12">
              <Image 
                // Mengambil logo dari Sanity atau fallback ke lokal
                src={settings?.footerLogo || "/gr-putih.png"} 
                alt="Gerakan Rakyat" 
                width={600} 
                height={200}
                // Tetap mempertahankan skala raksasa yang gagah
                className="h-24 md:h-32 w-auto object-contain transition-transform hover:scale-105"
                priority
              />
            </div>
            <div className="border border-white/20 px-8 py-4 rounded-sm">
              <p className="text-sm font-bold tracking-[0.2em] uppercase opacity-90">
                Copyright {currentYear}, Gerakan Rakyat
              </p>
            </div>
          </div>

          {/* KOLOM 2: KONTAK & SOSMED DINAMIS */}
          <div>
            <h4 className="text-xl font-black mb-1 relative inline-block uppercase tracking-wider">
              Kontak
              <span className="absolute -bottom-2 left-0 w-10 h-[3px] bg-[#FF4500]"></span>
            </h4>
            <div className="mt-10 space-y-6">
              {/* WhatsApp */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="text-[#FF4500] group-hover:scale-110 transition-transform">
                  <Phone size={22} strokeWidth={2.5} />
                </div>
                <span className="text-base font-bold opacity-90 group-hover:text-orange-400 transition-colors">
                  {settings?.contactInfo?.phone || "0852-8232-5183"}
                </span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="text-[#FF4500] group-hover:scale-110 transition-transform">
                  <Mail size={22} strokeWidth={2.5} />
                </div>
                <span className="text-base font-bold opacity-90 group-hover:text-orange-400 transition-colors lowercase">
                  {settings?.contactInfo?.email || "humasmedia@gerakan-rakyat.or.id"}
                </span>
              </div>
              {/* Alamat */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="text-[#FF4500] mt-1 group-hover:scale-110 transition-transform">
                  <MapPin size={22} strokeWidth={2.5} />
                </div>
                <span className="text-base font-bold opacity-90 leading-relaxed group-hover:text-orange-400 transition-colors whitespace-pre-line">
                  {settings?.contactInfo?.address || "Jl. Brawijaya X, Pulo, Kebayoran Baru,\nJakarta Selatan"}
                </span>
              </div>
            </div>

            {/* Ikon Sosial Media Dinamis */}
            <div className="flex items-center gap-4 mt-12">
              {[
                { icon: <Instagram size={20} />, href: settings?.socialMedia?.instagram },
                { icon: <Twitter size={20} />, href: settings?.socialMedia?.twitter },
                { icon: <Youtube size={20} />, href: settings?.socialMedia?.youtube },
                { icon: <Facebook size={20} />, href: settings?.socialMedia?.facebook },
                { icon: <MessageCircle size={20} />, href: settings?.socialMedia?.whatsapp },
              ].map((social, idx) => (
                social.href && (
                  <Link 
                    key={idx} 
                    href={social.href}
                    target="_blank"
                    className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-[#FF4500] hover:border-[#FF4500] transition-all duration-300 shadow-lg"
                  >
                    {social.icon}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* KOLOM 3: LINK POPULER */}
          <div>
            <h4 className="text-xl font-black mb-1 relative inline-block uppercase tracking-wider">
              Link Populer
              <span className="absolute -bottom-2 left-0 w-10 h-[3px] bg-[#FF4500]"></span>
            </h4>
            <ul className="mt-10 flex flex-col">
              {[
                { title: "Beranda", path: "/" },
                { title: "Berita Gerakan Rakyat", path: "/berita" },
                { title: "Tentang Gerakan", path: "/tentang" },
                { title: "Logo dan Identitas", path: "/branding" }
              ].map((link, idx) => (
                <li key={idx} className="border-b border-white/5 last:border-0">
                  <Link 
                    href={link.path} 
                    className="block py-4 text-base font-bold opacity-70 hover:opacity-100 hover:text-orange-400 hover:pl-3 transition-all tracking-wide"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Branding Wilayah Dinamis */}
        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-[11px] text-gray-500 uppercase tracking-[0.4em] font-black">
            Gerakan Rakyat {settings?.siteName || "Banyumas"} &bull; Gotong Royong Untuk Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}