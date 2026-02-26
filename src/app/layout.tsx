import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Konfigurasi Font Montserrat agar tipografi terlihat bold dan profesional
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gerakan Rakyat BMS",
  description: "Website resmi Gerakan Rakyat BMS Daerah",
  keywords: ["Gerakan Rakyat", "BMS", "Gotong Royong", "Perubahan"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/* Menerapkan montserrat.className ke body. 
        Menghapus 'text-dark' dan menggantinya dengan 'antialiased' agar font lebih tajam.
      */}
      <body className={`${montserrat.className} bg-white antialiased`}>
        {/* Navbar diletakkan di sini agar muncul di semua halaman */}
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}