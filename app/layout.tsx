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
  keywords: "estate planning, probate, conservatorships, estate administration, San Jose attorney, Silicon Valley lawyer",
  authors: [{ name: "Jason L. Pintar" }],
  creator: "Law Offices of Jason L. Pintar",
  publisher: "Law Offices of Jason L. Pintar",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Pintar Law',
  },
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jasonpintar.vercel.app',
    title: 'Law Offices of Jason L. Pintar - San Jose Estate Planning Attorney',
    description: 'Expert estate planning, administration, conservatorships, and probate services in San Jose, CA.',
    siteName: 'Law Offices of Jason L. Pintar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Law Offices of Jason L. Pintar - San Jose Estate Planning Attorney',
    description: 'Expert estate planning, administration, conservatorships, and probate services in San Jose, CA.',
  },
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
