import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedoueslati.com"),
  title: "Ahmed Oueslati — AI Engineer & Full-Stack Developer",
  description:
    "I build data-driven products that turn complex AI systems into intuitive, elegant experiences.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ahmed Oueslati — AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of Ahmed Oueslati — AI engineering, full-stack product work, automation, and data-driven design.",
    url: "https://ahmedoueslati.com",
    siteName: "Ahmed Oueslati",
    images: [{ url: "/images/hero.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Oueslati — AI Engineer & Full-Stack Developer",
    description:
      "I build data-driven products that turn complex AI systems into intuitive, elegant experiences.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
