import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollBackground from "@/components/ScrollBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ameera | Administrative Executive",
    description:
        "Ameera – Administrative Professional specializing in Executive Support, Office Management, and Organizational Efficiency. Explore my experience and professional highlights.",
    keywords: [
        "Administrative Executive",
        "Administrative Officer",
        "Office Management",
        "Executive Support",
        "Process Optimization",
        "Project Coordination",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
            >
                <CustomCursor />
                <ScrollBackground />
                <Navbar />
                <main className="flex min-h-screen flex-col items-center selection:bg-emerald-500/30 selection:text-white">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
