import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lotfy Mohamed — Software Engineer | Full-Stack Developer",
  description:
    "Software Engineer specializing in building modern, scalable web applications. Experienced in Next.js, Laravel, React, and Python. View my projects and get in touch.",
  keywords: [
    "Lotfy Mohamed",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Laravel",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Lotfy Mohamed" }],
  creator: "Lotfy Mohamed",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Lotfy Mohamed — Software Engineer | Full-Stack Developer",
    description:
      "Software Engineer specializing in building modern, scalable web applications. View my projects and get in touch.",
    siteName: "Lotfy Mohamed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotfy Mohamed — Software Engineer",
    description:
      "Full-Stack Developer building modern web applications with Next.js, Laravel, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-[#0c0c0e] text-gray-200 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
