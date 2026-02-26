"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Search, Filter } from "lucide-react";

interface NewsListProps {
  initialNews: any[];
}

export default function NewsList({ initialNews }: NewsListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Daftar kategori unik dari data berita
  const categories = ["Semua", ...new Set(initialNews.map((item) => item.category).filter(Boolean))];

  // Logika filter ganda (Search + Kategori)
  const filteredNews = initialNews.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Semua" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-8 pb-24">
      <div className="flex flex-col lg:flex-row gap-8 mb-16 -mt-10">
        
        {/* 1. Search Bar */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="Cari berita..."
            className="w-full bg-white border border-gray-100 shadow-xl rounded-2xl py-5 pl-14 pr-6 text-gray-900 focus:ring-2 focus:ring-[#FF4500] outline-none transition-all font-bold"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 2. Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 mr-2 text-gray-500 font-bold uppercase text-xs tracking-widest">
            <Filter size={16} /> Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md ${
                activeCategory === cat
                  ? "bg-[#FF4500] text-white scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Berita */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <article 
              key={item._id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src={item.mainImage || "/placeholder-news.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF4500] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-4 uppercase tracking-widest">
                  <Calendar size={14} />
                  {formatDate(item.publishedAt)}
                </div>
                <h3 className="text-xl font-black text-gray-900 leading-snug group-hover:text-[#FF4500] transition-colors line-clamp-2">
                  <Link href={`/berita/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>
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
          <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 text-lg font-bold italic">
              Tidak ada berita di kategori "{activeCategory}" yang sesuai pencarian.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}