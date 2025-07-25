import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ClientNav } from "./components/ClientNav";
import { ClientFooter } from "./components/ClientFooter";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Law Offices of Jason L. Pintar - San Jose Estate Planning Attorney",
  description: "Expert estate planning, administration, conservatorships, and probate services in San Jose, CA. Protect your legacy with experienced Silicon Valley estate planning attorneys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans`}>
        {/* Navigation */}
        <ClientNav />
        {children}
        {/* Footer */}
        <ClientFooter />
      </body>
    </html>
  );
}
