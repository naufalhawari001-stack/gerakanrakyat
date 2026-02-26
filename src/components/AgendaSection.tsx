import { UserPlus, ArrowRight } from "lucide-react";

// 1. DAFTARKAN TIPE DATA (INTERFACE)
interface AgendaSectionProps {
  title?: string;
  slogan?: string;
  link?: string;
}

// 2. TERAPKAN TIPE DATA PADA KOMPONEN
export default function AgendaSection({ title, slogan, link }: AgendaSectionProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="bg-[#1a1a1a] rounded-[48px] p-12 md:p-20 relative overflow-hidden group">
          {/* Dekorasi Latar */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF4500] blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 transition-opacity"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <span className="text-[#FF4500] font-black tracking-[0.3em] uppercase text-sm block mb-6">
                Agenda Terdekat
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] mb-8">
                {title || "Pendaftaran KTA Digital"}
              </h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm max-w-md">
                {slogan || "Satu Komando, Satu Tujuan: Rakyat Sejahtera!"}
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <a 
                href={link || "#"} 
                target="_blank"
                className="bg-[#FF4500] hover:bg-white hover:text-black text-white px-10 py-6 rounded-2xl font-black uppercase tracking-widest flex items-center gap-4 transition-all duration-500 shadow-2xl group/btn"
              >
                Daftar Sekarang
                <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
              </a>
              <p className="mt-6 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
                *Terbuka untuk seluruh warga banyumas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}