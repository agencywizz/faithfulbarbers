import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faithful Barbers | Premium Barbershop in Castlerea, Co. Roscommon",
  description:
    "Experience the art of traditional barbering with a modern touch. Faithful Barbers offers premium haircuts, beard grooming, and hot towel shaves in Castlerea, Co. Roscommon.",
  keywords: [
    "barber",
    "barbershop",
    "Castlerea",
    "Roscommon",
    "haircut",
    "beard trim",
    "hot towel shave",
    "men's grooming",
  ],
  openGraph: {
    title: "Faithful Barbers | Premium Barbershop",
    description:
      "Premium haircuts and grooming in Castlerea, Co. Roscommon. Book your appointment today.",
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
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
        <CookieConsent />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
