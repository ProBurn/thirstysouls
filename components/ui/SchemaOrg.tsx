// components/SchemaOrg.tsx
// import { Head } from 'next/document';

import Head from "next/head";

const SchemaOrg = () => {
  const schemaData = {
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
    telephone: '+44 1642 901012',
    url: 'https://www.thirstysouls.co.uk',
    // image: 'https://www.thirstysouls.com/image.jpg',
    description:
      'Thirsty Souls is a vibrant bar located in the heart of Stockton-on-Tees, offering a wide selection of craft beers, cocktails, and live DJ performances every Friday and Saturday night.',
    openingHours: 'Fri-Sat 18:00-01:00',
    // menu: 'https://www.thirstysouls.com/menu',
    acceptsReservations: 'True',
    priceRange: '££',
    sameAs: [
      'https://www.facebook.com/ThirstySoulsTS',
      'https://www.instagram.com/thirstysoulsts',
    ],
  };

  const openGraphData: { [key: string]: string } = {
    'og:type': 'bar',
    'og:title': 'Thirsty Souls - Stockton-on-Tees Bar & Pub',
    'og:description':
      'Thirsty Souls is a vibrant bar located in the heart of Stockton-on-Tees, offering craft beers, cocktails, and live music every weekend.',
    'og:url': 'https://www.thirstysouls.co.uk',
    // 'og:image': 'https://www.thirstysouls.com/og-image.jpg',
    'og:image:alt': 'Thirsty Souls Bar & Pub in Stockton-on-Tees',
    'og:site_name': 'Thirsty Souls',
    'og:locale': 'en_GB',
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      {Object.keys(openGraphData).map((key: string) => (
        <meta key={key} property={key} content={openGraphData[key]} />
      ))}
    </Head>
  );
};

export default SchemaOrg;
