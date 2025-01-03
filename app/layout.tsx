import type { Metadata as NextMetadata } from "next";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Metadata extends NextMetadata {
  other?: Record<string, any>;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import SchemaOrg from "@/components/ui/SchemaOrg";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thirsty Souls Bar | Stockton-on-Tees",
  description: "Thirsty Souls is a vibrant bar located in the heart of Stockton-on-Tees, offering craft beers, cocktails.",
  metadataBase: new URL("https://www.thirstysouls.co.uk"),
  keywords: ["bar", "pub", "stockton-on-tees", "thirsty souls"],
  openGraph: {
    type: 'website',
    title: 'Thirsty Souls - Stockton-on-Tees Bar & Pub',
    description:
      'Thirsty Souls is a vibrant bar located in the heart of Stockton-on-Tees, offering craft beers, cocktails, and live music every weekend.',
    url: 'https://www.thirstysouls.co.uk',
    // images: [{ url: 'https://www.thirstysouls.com/og-image.jpg', alt: 'Thirsty Souls Bar & Pub in Stockton-on-Tees' }],
    siteName: 'Thirsty Souls',
    locale: 'en_GB',

  },
  other: {
    "application/ld+json": {
      "application/ld+json": {
        "@context": "https://schema.org",
        "@type": "BarOrPub",
        "name": "Thirsty Souls",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1-3 Regency West Mall",
          "addressLocality": "Stockton-on-Tees",
          "addressRegion": "ENG",
          "postalCode": "TS18 1EF",
          "addressCountry": "GB"
        },
        "url": "https://www.thirstysouls.co.uk",
        "telephone": "+44 1642 901012",
        // "image": "https://www.thirstysouls.co.uk/og-image.jpg",
        "description": "Thirsty Souls is a vibrant bar located in the heart of Stockton-on-Tees, offering craft beers, cocktails, and live music every weekend.",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "54.5635814",
          "longitude": "-1.3149429"
        },
        "openingHours": "Fr, Sa 18:00-01:00",
        "sameAs": [
          "https://www.facebook.com/thirstysouls",
          "https://www.instagram.com/thirstysouls"
        ]
      }
    }
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MXSX3JZ2" />
      <SchemaOrg />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
