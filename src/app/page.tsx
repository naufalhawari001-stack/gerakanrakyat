import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import AgendaSection from "@/components/AgendaSection";
import DonationCTA from "@/components/DonationCTA";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import { getHomePageData } from "@/lib/sanity.fetch"; //

export default async function HomePage() {
  // Menarik seluruh data dari Sanity secara paralel
  const data = await getHomePageData(); 

  return (
    <main className="relative bg-white">
      {/* 1. HERO SECTION 
          Data: Headline dan Tagline dari Pengaturan Global
      */}
      <Hero 
        headline={data.settings?.heroHeadline} 
        tagline={data.settings?.heroTagline} 
      />
      
      {/* 2. HIGHLIGHT BERITA
          Data: List berita terbaru yang diurutkan berdasarkan tanggal
      */}
      <NewsSection news={data.news} />

      {/* 3. AGENDA GERAKAN
          Data: Judul agenda, slogan, dan link pendaftaran KTA
      */}
      <AgendaSection 
        title={data.agenda?.title}
        slogan={data.agenda?.slogan}
        link={data.agenda?.registrationLink}
      />

      {/* 4. DONATION CTA BAR 
          Bagian ini tetap statis karena nominal donasi biasanya tetap
      */}
      <DonationCTA />

      {/* 5. QUOTE SECTION (PESAN KETUA UMUM)
          Data: Nama, jabatan, isi quote, dan foto PNG Sahrin Hamid
      */}
      <QuoteSection quoteData={data.quote} />

      {/* 6. FOOTER SECTION
          Data: Alamat, kontak, sosmed, dan logo putih dari Settings
      */}
      <Footer settings={data.settings} />
    </main>
  );
}