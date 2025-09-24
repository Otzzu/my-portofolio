import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const workSans = Work_Sans({ subsets: ["latin"], display: "swap" });

const siteUrl = "https://portofolio.mesach.pro";

export const metadata: Metadata = {
  title: "Mesach Harmasendro - Fullstack Web Developer",
  description:
    "Welcome to the portfolio website of Mesach Harmasendro, a full-stack web developer with experience in front-end and back-end technologies including Next.js, React, Golang, and more.",
  keywords: [
    "Mesach Harmasendro",
    "Fullstack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mesach Harmasendro - Fullstack Web Developer",
    description:
      "Explore the portfolio of Mesach Harmasendro, showcasing projects in web development, software engineering, and more.",
    images: [
      {
        url: `${siteUrl}/assets/img/og.png`,
        width: 1200,
        height: 630,
        alt: "Mesach Harmasendro portfolio cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mesach Harmasendro - Fullstack Web Developer",
    description:
      "Explore the portfolio of Mesach Harmasendro, showcasing projects in web development, software engineering, and more.",
    images: [`${siteUrl}/assets/img/og.png`],
  },
  icons: {
    icon: "/assets/img/logo.png",
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-slate-950 text-slate-100`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
