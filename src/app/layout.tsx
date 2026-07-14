import type { Metadata } from "next";
import { Archivo, Instrument_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cartobox — Embalagens de cartão canelado à medida",
  description:
    "Na Cartobox respondemos às necessidades individuais de cada empresa, personalizando a impressão, a dimensão e a estrutura de cada embalagem de cartão canelado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${archivo.variable} ${instrumentSans.variable} ${spaceMono.variable}`}
    >
      <body className="antialiased overflow-x-clip">{children}</body>
    </html>
  );
}
