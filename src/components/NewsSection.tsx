"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

// Interface untuk tipe data berita dari Sanity
interface NewsItem {
  _id: string;
  title: string;
  slug: string;
  category: string;
  mainImage: string;
  publishedAt: string;
}

interface NewsSectionProps {
  news?: NewsItem[];
}

export default function NewsSection({ news }: NewsSectionProps) {
  // Fungsi untuk memformat tanggal agar rapi
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-[1440px] mx-auto px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#FF4500] font-black tracking-[0.3em] uppercase text-sm block mb-3">
              Kabar Terbaru
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none uppercase">
              Highlight Berita
            </h2>
          </div>
          <Link 
            href="/berita" 
            className="group flex items-center gap-2 text-gray-900 font-bold hover:text-[#FF4500] transition-colors"
          >
            LIHAT SEMUA BERITA 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* News Grid Dinamis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news && news.length > 0 ? (
            news.map((item) => (
              <article 
                key={item._id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(255,69,0,0.2)] transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Wrapper dengan gambar dari Sanity */}
                <div className="relative h-[250px] w-full overflow-hidden bg-gray-200">
                  <Image
                    src={item.mainImage || "/placeholder-news.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Badge Kategori Dinamis */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#FF4500] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                      {item.category || "Berita"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-4 uppercase tracking-wider">
                    <Calendar size={14} />
                    {formatDate(item.publishedAt)}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 leading-snug group-hover:text-[#FF4500] transition-colors line-clamp-2">
                    <Link href={`/berita/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>
                  
                  {/* Action Link menggunakan slug asli */}
                  <Link 
                    href={`/berita/${item.slug}`} 
                    className="mt-6 inline-flex items-center gap-2 text-[#FF4500] font-black text-xs uppercase tracking-widest group/link"
                  >
                    Baca Selengkapnya 
                    <span className="w-8 h-[2px] bg-[#FF4500] transition-all group-hover/link:w-12"></span>
                  </Link>
                </div>
              </article>
            ))
          ) : (
            // Tampilan jika berita belum ada di Sanity
            <p className="text-gray-500 italic">Belum ada berita terbaru.</p>
          )}
        </div>
      </div>
    </section>
  );
}