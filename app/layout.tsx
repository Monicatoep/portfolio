import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "./components/topbar";
import Sidebar from "./components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monica Frank | Developer",
  description:
    "Newly graduated full-stack developer with experience in React, Next.js, TypeScript, and C#/.NET. Explore my projects and experience.",
  keywords: [
    "Monica Frank",
    "developer",
    "full-stack developer",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "C#",
    ".NET",
    "Tailwind CSS",
    "portfolio",
  ],
  alternates: {
    canonical: "https://monicatoepfer.dk",
  },
  metadataBase: new URL("https://monicatoepfer.dk"),
  openGraph: {
    title: "Monica Frank | Developer",
    description:
      "Newly graduated full-stack developer with experience in React, Next.js, TypeScript, and C#/.NET. Explore my projects and experience.",
    url: "https://monicatoepfer.dk",
    siteName: "Monica Frank Portfolio",
    images: [
      {
        url: "/portfolio.png",
        alt: "Monica Frank Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monica Frank | Developer",
    description:
      "Newly graduated full-stack developer with experience in React, Next.js, TypeScript, and C#/.NET. Explore my projects and experience.",
    images: ["/portfolio.png"],
  },
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
      <body className="min-h-full flex flex-col pt-14">
        <Topbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
