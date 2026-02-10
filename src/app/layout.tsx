import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DS Education Consultancy",
  description: "Grab The Great Opportunity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}
      >
        {/* Global Top Bar */}
        <TopBar />

        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp */}
        <FloatingContact />
      </body>
    </html>
  );
}
