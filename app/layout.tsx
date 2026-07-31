import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SELAMAT DATANG DI BOLADEWA88",
  description: "WEBSITE RESMI AGENT BOLADEWA88",
  // Tambahkan openGraph agar preview WhatsApp & Medsos muncul sempurna
  openGraph: {
    title: "SELAMAT DATANG DI BOLADEWA88",
    description: "WEBSITE RESMI AGENT BOLADEWA88",
    url: "https://boladewa.vercel.app/",
    siteName: "BOLADEWA88",
    images: [
      {
        url: "https://boladewa.vercel.app/icon.png", // Menggunakan icon.png di folder app kamu
        width: 800,
        height: 600,
        alt: "BOLADEWA88 Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}