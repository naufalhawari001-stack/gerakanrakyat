import { client } from "./sanity.client";
import { 
  settingsQuery, 
  newsQuery, 
  agendaQuery, 
  quoteQuery,
  singleNewsQuery,  // Query baru untuk detail
  newsSlugsQuery    // Query baru untuk static params
} from "./sanity.queries";

/**
 * MENGAMBIL DATA HALAMAN UTAMA
 * Digunakan di app/page.tsx untuk performa maksimal dengan Promise.all
 */
export async function getHomePageData() {
  const [settings, news, agenda, quote] = await Promise.all([
    client.fetch(settingsQuery),
    client.fetch(newsQuery),
    client.fetch(agendaQuery),
    client.fetch(quoteQuery),
  ]);

  return { settings, news, agenda, quote };
}

/**
 * MENGAMBIL DETAIL BERITA BERDASARKAN SLUG
 * Digunakan di app/berita/[slug]/page.tsx
 */
export async function getNewsBySlug(slug: string) {
  return client.fetch(singleNewsQuery, { slug });
}

/**
 * MENGAMBIL SEMUA SLUG BERITA
 * Digunakan untuk generateStaticParams (SEO & Kecepatan)
 */
export async function getAllNewsSlugs() {
  return client.fetch(newsSlugsQuery);
}