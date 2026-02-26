import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { getHomePageData } from "@/lib/sanity.fetch";
import Footer from "@/components/Footer";

export default async function KontakPage() {
  const { settings } = await getHomePageData();

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <div className="bg-[#1a1a1a] text-white pt-40 pb-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <span className="text-[#FF4500] font-black tracking-[0.3em] uppercase text-sm block mb-4">
            Hubungi Kami
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            Suarakan <br /> Aspirasimu
          </h1>
          <p className="mt-8 text-gray-400 font-bold uppercase tracking-widest text-sm max-w-xl">
            Kami siap mendengar setiap keluhan, saran, dan semangat perjuangan dari seluruh rakyat Banyumas.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* 2. CONTACT INFO */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-[#FF4500]"></span>
                Informasi Kontak
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="bg-[#f8f9fa] p-5 rounded-2xl text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-white transition-all duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Telepon / WhatsApp</p>
                    <p className="text-xl font-bold text-gray-900">{settings?.contactInfo?.phone || "+62 812-3456-7890"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-[#f8f9fa] p-5 rounded-2xl text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-white transition-all duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Email Resmi</p>
                    <p className="text-xl font-bold text-gray-900">{settings?.contactInfo?.email || "kontak@gerakanrakyat.id"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-[#f8f9fa] p-5 rounded-2xl text-[#FF4500] group-hover:bg-[#FF4500] group-hover:text-white transition-all duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Markas Besar</p>
                    <p className="text-xl font-bold text-gray-900 leading-relaxed">
                      {settings?.contactInfo?.address || "Purwokerto, Banyumas, Jawa Tengah"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Link */}
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <h3 className="font-black uppercase tracking-widest text-sm mb-4">Ikuti Pergerakan</h3>
              <div className="flex gap-4">
                {/* Kamu bisa mapping socialMedia dari settings di sini */}
                <p className="text-gray-500 italic text-sm font-medium">@gerakanrakyat_bms</p>
              </div>
            </div>
          </div>

          {/* 3. CONTACT FORM */}
          <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[40px] p-10 md:p-14 border border-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-gray-50 opacity-10">
              <MessageSquare size={120} />
            </div>
            
            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Nama Lengkap</label>
                  <input type="text" className="w-full bg-[#f8f9fa] border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#FF4500] transition-all outline-none font-bold" placeholder="Tulis namamu..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Alamat Email</label>
                  <input type="email" className="w-full bg-[#f8f9fa] border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#FF4500] transition-all outline-none font-bold" placeholder="email@anda.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Subjek Pesan</label>
                <input type="text" className="w-full bg-[#f8f9fa] border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#FF4500] transition-all outline-none font-bold" placeholder="Aspirasi / Pertanyaan" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Isi Pesan</label>
                <textarea rows={5} className="w-full bg-[#f8f9fa] border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#FF4500] transition-all outline-none font-bold resize-none" placeholder="Tuliskan aspirasimu di sini..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#1a1a1a] hover:bg-[#FF4500] text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl">
                Kirim Pesan Sekarang
                <Send size={18} className="transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

        </div>
      </div>

      <Footer settings={settings} />
    </main>
  );
}