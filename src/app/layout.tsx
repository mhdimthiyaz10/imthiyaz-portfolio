import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohammedimthiyaz.com"),
  title: "Mohammed Imthiyaz | AI & ML Engineer",
  description:
    "Portfolio of Mohammed Imthiyaz — AI & ML Engineer and Web Developer building intelligent, real-world solutions with Python, Generative AI, and modern web technologies.",
  keywords: [
    "Mohammed Imthiyaz",
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "Web Developer",
    "Kathakali AI",
    "Next.js Portfolio",
    "Python Developer",
  ],
  authors: [{ name: "Mohammed Imthiyaz" }],
  openGraph: {
    title: "Mohammed Imthiyaz | AI & ML Engineer",
    description:
      "AI/ML engineering student building intelligent, real-world solutions with Python, Generative AI and modern web technologies.",
    url: "https://mohammedimthiyaz.com",
    siteName: "Mohammed Imthiyaz Portfolio",
    images: [
      {
        url: "/imthiyaz-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Imthiyaz — AI & ML Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Imthiyaz | AI & ML Engineer",
    description:
      "AI/ML engineering student building intelligent, real-world solutions with Python, Generative AI and modern web technologies.",
    images: ["/imthiyaz-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <body className="bg-black text-white antialiased min-h-screen selection:bg-[#ff4d00] selection:text-white font-[family-name:var(--font-montserrat)]">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
