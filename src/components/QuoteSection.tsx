import Image from "next/image";

// 1. DAFTARKAN TIPE DATA (INTERFACE)
interface QuoteSectionProps {
  quoteData?: {
    author: string;
    role: string;
    quoteText: string;
    photo: string;
  };
}

// 2. TERAPKAN TIPE DATA PADA KOMPONEN
export default function QuoteSection({ quoteData }: QuoteSectionProps) {
  // Jika data belum ada, jangan tampilkan apa-apa
  if (!quoteData) return null;

  return (
    <section className="bg-[#1a1a1a] py-24 md:py-32 overflow-hidden relative">
      {/* Efek Cahaya Latar */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF4500] blur-[150px] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* FOTO TOKOH */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[40px] overflow-hidden border-2 border-white/10 shadow-2xl">
              <Image
                src={quoteData.photo || "/placeholder-profile.jpg"}
                alt={quoteData.author}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Badge Oranye di belakang foto */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF4500] -z-10 rounded-3xl rotate-12"></div>
          </div>

          {/* TEKS KUTIPAN */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block bg-white/5 border border-white/10 px-6 py-2 rounded-full">
              <span className="text-[#FF4500] font-black uppercase tracking-[0.3em] text-xs">
                Pesan Perjuangan
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight italic tracking-tighter uppercase">
              "{quoteData.quoteText}"
            </h2>

            <div className="pt-8 border-t border-white/10">
              {/* PERBAIKAN: Tag pembuka h4 sekarang ditutup dengan h4 */}
              <h4 className="text-2xl font-black text-white uppercase tracking-tighter">
                {quoteData.author}
              </h4>
              <p className="text-[#FF4500] font-black uppercase tracking-[0.2em] text-sm mt-1">
                {quoteData.role}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}