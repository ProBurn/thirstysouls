import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'



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
  
};

const jsonLd = {
  '@context': 'https://schema.org',
    '@type': 'BarOrPub',
    name: 'Thirsty Souls',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1-3 Regency West Mall',
      addressLocality: 'Stockton-on-Tees',
      postalCode: 'TS18 1EF',
      addressCountry: 'GB',
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 54.5635814,
        longitude: -1.3149429
      },
    telephone: '+44 1642 901012',
    url: 'https://www.thirstysouls.co.uk',
    // image: 'https://www.thirstysouls.com/image.jpg',
    description: 'Thirsty Souls is a vibrant bar located in the heart of Stockton-on-Tees, offering a wide selection of craft beers, cocktails, and live DJ performances every Friday and Saturday night.',
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Friday",
          "Saturday"
        ],
        opens: "18:00",
        closes: "01:00"
      },
    ],


    // menu: 'https://www.thirstysouls.com/menu',

    // priceRange: '££',
    sameAs: [
      'https://www.facebook.com/ThirstySoulsTS',
      'https://www.instagram.com/thirstysoulsts',
    ],



};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MXSX3JZ2" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
