import { TChildren } from "@/types";
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
  title: {
    default: "My Blog",
    template: "%s | My Blog",
  },
  description: "A collection of articles and tutorials",
  openGraph: {
    title: "My Blog",
    description: "A collection of articles and tutorials",
    url: "https://www.hablu-programmer.com",
    siteName: "Hablu Programmer Blog",
    images: [
      {
        url: "/next.svg",
        width: 800,
        height: 600,
        alt: "My Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Blog",
    description: "A collection of articles and tutorials",
    images: ["/next.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
  keywords: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
};

const RootLayout = ({ children }: TChildren) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen `}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
