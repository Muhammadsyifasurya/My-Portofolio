import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Syifa Surya Saputra | Front End Developer",
  description:
    "Portfolio of Muhammad Syifa Surya Saputra — Frontend Developer focused on user-centered design, accessible web experiences, and modern React/Next.js applications.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Muhammad Syifa Surya Saputra",
  ],
  authors: [{ name: "Muhammad Syifa Surya Saputra" }],
  icons: {
    icon: "/assets/logo1.png",
  },
  openGraph: {
    title: "Muhammad Syifa Surya Saputra | Front End Developer",
    description:
      "Building responsive, accessible, and performant web applications with React and Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-navy text-slate antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
