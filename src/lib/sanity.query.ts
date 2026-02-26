import { groq } from "next-sanity";

/**
 * 1. QUERY PENGATURAN GLOBAL (SINGLETON)
 * Mengambil data identitas situs, kontak, dan logo.
 */
export const settingsQuery = groq`
  *[_type == "settings"][0] {
    siteName,
    heroHeadline,
    heroTagline,
    contactInfo,
    socialMedia,
    "footerLogo": logos.footerLogo.asset->url,
    "mainLogo": logos.mainLogo.asset->url
  }
`;

/**
 * 2. QUERY DAFTAR BERITA
 * Mengambil ringkasan berita untuk homepage/listing.
 */
export const newsQuery = groq`
  *[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    "mainImage": mainImage.asset->url,
    publishedAt
  }
`;

/**
 * 3. QUERY DETAIL BERITA BERDASARKAN SLUG
 * Mengambil isi konten lengkap (body) untuk halaman detail.
 */
export const singleNewsQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    "mainImage": mainImage.asset->url,
    publishedAt,
    body // Rich Text dari Sanity Portable Text
  }
`;

/**
 * 4. QUERY ARRAY SLUG BERITA
 * Digunakan untuk generateStaticParams (SEO & Kecepatan).
 */
export const newsSlugsQuery = groq`
  *[_type == "news" && defined(slug.current)][].slug.current
`;

/**
 * 5. QUERY AGENDA & KTA
 * Mengambil informasi pendaftaran KTA.
 */
export const agendaQuery = groq`
  *[_type == "agenda"][0] {
    title,
    slogan,
    registrationLink
  }
`;

/**
 * 6. QUERY QUOTE KETUA UMUM
 * Mengambil kutipan inspiratif dan foto tokoh.
 */
export const quoteQuery = groq`
  *[_type == "quote"][0] {
    author,
    role,
    quoteText,
    "photo": photo.asset->url
  }
`;