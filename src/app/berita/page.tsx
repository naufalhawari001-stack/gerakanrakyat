import { getHomePageData } from "@/lib/sanity.fetch";
import NewsList from "@/components/NewsList";
import Footer from "@/components/Footer";

export default async function BeritaPage() {
  const data = await getHomePageData();

  return (
    <main className="bg-[#f8f9fa] min-h-screen">
      {/* Header Halaman */}
      <div className="bg-[#1a1a1a] text-white pt-40 pb-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <span className="text-[#FF4500] font-black tracking-[0.3em] uppercase text-sm block mb-4">
            Gerakan Rakyat Banyumas
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            Arsip Berita <br /> & Suara Rakyat
          </h1>
        </div>
      </div>

      {/* Komponen List dengan Fitur Search */}
      <NewsList initialNews={data.news} />

      <Footer settings={data.settings} />
    </main>
  );
}