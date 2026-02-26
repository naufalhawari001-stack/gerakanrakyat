import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getNewsBySlug, getAllNewsSlugs } from "@/lib/sanity.fetch";
import Footer from "@/components/Footer";

// Generate halaman statis saat build agar sangat cepat
export async function generateStaticParams() {
  const slugs = await getAllNewsSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = await getNewsBySlug(params.slug);

  // Jika berita tidak ditemukan di Sanity
  if (!news) {
    notFound();
  }

  const formattedDate = new Date(news.publishedAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HEADER SECTION */}
      <div className="bg-[#1a1a1a] text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8">
          <Link 
            href="/berita" 
            className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-widest mb-8 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} /> Kembali ke Berita
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#FF4500] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              {news.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight uppercase mb-8">
            {news.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-[#FF4500]" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-2">
              <Tag size={18} className="text-[#FF4500]" />
              Gerakan Rakyat
            </div>
          </div>
        </div>
      </div>

      {/* 2. IMAGE & CONTENT SECTION */}
      <article className="max-w-4xl mx-auto px-8 -mt-10 pb-24">
        {/* Gambar Utama */}
        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl mb-12 border-4 border-white">
          <Image
            src={news.mainImage || "/placeholder-news.jpg"}
            alt={news.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Isi Berita (Portable Text) */}
        <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-gray-700 prose-orange">
          <PortableText value={news.body} />
        </div>

        {/* Tag & Share */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-bold italic text-sm">
            #GerakanRakyat #BanyumasBersatu #GotongRoyong
          </p>
          <div className="flex gap-4">
             {/* Kamu bisa tambahkan tombol Share Sosmed di sini */}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}