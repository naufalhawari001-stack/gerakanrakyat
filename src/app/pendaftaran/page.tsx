import { UserPlus, FileCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { getHomePageData } from "@/lib/sanity.fetch";
import Footer from "@/components/Footer";

export default async function PendaftaranPage() {
  const { settings, agenda } = await getHomePageData();

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HEADER SECTION */}
      <div className="bg-[#1a1a1a] text-white pt-40 pb-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <span className="text-[#FF4500] font-black tracking-[0.3em] uppercase text-sm block mb-4">
            Gabung Barisan
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            Menjadi Bagian <br /> Perubahan
          </h1>
          <p className="mt-8 text-gray-400 font-bold uppercase tracking-widest text-sm max-w-2xl">
            Daftarkan dirimu secara resmi untuk mendapatkan Kartu Tanda Anggota (KTA) Gerakan Rakyat Banyumas dan ikut serta dalam aksi nyata.
          </p>
        </div>
      </div>

      {/* 2. REGISTRATION INFO & LINK */}
      <div className="max-w-[1440px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Kenapa Harus Ber-KTA?</h2>
              <p className="text-gray-600 leading-relaxed font-medium">
                KTA bukan sekadar kartu, tapi simbol komitmen kita untuk bergotong-royong memperbaiki Banyumas. Sebagai anggota resmi, kamu akan mendapatkan akses prioritas ke agenda gerakan.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-[#FF4500] shrink-0"><ShieldCheck size={32} /></div>
                <div>
                  <h4 className="font-black uppercase text-sm mb-1 tracking-wide">Data Terlindungi</h4>
                  <p className="text-xs text-gray-500 font-bold">Privasi anggota adalah prioritas utama kami.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-[#FF4500] shrink-0"><FileCheck size={32} /></div>
                <div>
                  <h4 className="font-black uppercase text-sm mb-1 tracking-wide">Proses Digital</h4>
                  <p className="text-xs text-gray-500 font-bold">Pendaftaran mudah dilakukan secara daring.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="bg-[#f8f9fa] p-12 rounded-[40px] border-2 border-[#1a1a1a] border-dashed text-center">
            <UserPlus size={64} className="mx-auto text-[#FF4500] mb-6" />
            <h3 className="text-2xl font-black uppercase mb-4">{agenda?.title || "Pendaftaran KTA Digital"}</h3>
            <p className="text-gray-500 font-bold text-sm mb-10 uppercase tracking-widest leading-relaxed">
              {agenda?.slogan || "Satu Komando, Satu Tujuan: Rakyat Sejahtera!"}
            </p>
            
            <a 
              href={agenda?.registrationLink || "#"} 
              target="_blank" 
              className="inline-flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#FF4500] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-500 shadow-2xl group"
            >
              Daftar Sekarang
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <p className="mt-6 text-[10px] text-gray-400 font-black uppercase tracking-widest italic">
              *Pastikan data sesuai KTP yang berlaku
            </p>
          </div>

        </div>
      </div>

      <Footer settings={settings} />
    </main>
  );
}