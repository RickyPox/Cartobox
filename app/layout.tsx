import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: {
        default: "Cartobox | Caixas que são a cara do seu negócio!",
        template: "%s | Cartobox",
    },
    description:
        "Na Cartobox desenvolvemos embalagens personalizadas à medida do seu negócio. Impressão, dimensão e estrutura adaptadas às suas necessidades.",
    keywords: [
        "embalagens personalizadas",
        "caixas personalizadas",
        "embalagens por medida",
        "caixas para empresas",
        "embalagens Cartobox",
        "caixas com impressão personalizada",
        "cartobox",
    ],
    authors: [{ name: "Cartobox" }],
    creator: "Cartobox",
    publisher: "Cartobox",

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },

    openGraph: {
        type: "website",
        locale: "pt_PT",
        url: "https://cartobox.pt", // altera se necessário
        siteName: "Cartobox",
        title: "Cartobox | Caixas que são a cara do seu negócio!",
        description:
            "Na Cartobox desenvolvemos embalagens personalizadas à medida do seu negócio. Impressão, dimensão e estrutura adaptadas às suas necessidades.",
        images: [
            {
                url: "/og-image.png", // ideal: 1200x630
                width: 1200,
                height: 630,
                alt: "Cartobox - Embalagens Personalizadas",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Cartobox | Caixas que são a cara do seu negócio!",
        description:
            "Na Cartobox desenvolvemos embalagens personalizadas à medida do seu negócio. Impressão, dimensão e estrutura adaptadas às suas necessidades.",
        images: ["/og-image.png"],
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    metadataBase: new URL("https://cartobox.vercel.app/"),
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
