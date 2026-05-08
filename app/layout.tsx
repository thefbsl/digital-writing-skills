import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { BackgroundEffects } from "@/components/layout/background-effects";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

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
  title: "WriteLab — Digital Tools & Writing Skills",
  description:
    "A modern learning space for English writing—structure, clarity, and confidence with guided practice and analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-sans flex min-h-full flex-col antialiased">
        <div className="relative flex min-h-screen flex-1 flex-col overflow-x-hidden">
          <BackgroundEffects />
          <Navbar />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
