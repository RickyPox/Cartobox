import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "Cartobox | Caixas que são a cara do seu negócio!",
    description:
        "Na Cartobox procuramos responder às necessidades individuais de cada empresa, personalizando a impressão, dimensão e estrutura de cada embalagem.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Toaster />
                <Footer />
            </body>
        </html>
    );
}
