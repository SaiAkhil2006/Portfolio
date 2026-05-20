import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Akhil | Cinematic Portfolio",
  description: "A divine celestial archive created by an elite AI engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] overflow-x-hidden selection:bg-gold/30 selection:text-black cursor-none">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
