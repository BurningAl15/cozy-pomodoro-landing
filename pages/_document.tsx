import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Cozy Pomodoro",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": ["Android", "iOS"],
    "description": "A minimalist Pomodoro timer for calm productivity. Full experience is free. No ads, no subscriptions.",
    "url": "https://cozy-pomodoro-landing.vercel.app",
    "offers": [
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "name": "Free tier"
      },
      {
        "@type": "Offer",
        "price": "0.79",
        "priceCurrency": "USD",
        "name": "Individual themes"
      }
    ],
    "author": {
      "@type": "Person",
      "name": "Aldhair Vera",
      "email": "aldhairvera15@gmail.com"
    }
  };

  return (
    <Html lang="en">
      <Head>
        {/* Preload LCP hero image — browser fetches before JS/React executes */}
        <link
          rel="preload"
          as="image"
          href="/assets/carousel/cozy_light_marketing-carousel.webp"
          type="image/webp"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Fonts: async non-blocking — media=print trick avoids FCP blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700;800&display=optional"
          media="print"
          onLoad={(e) => { (e.currentTarget as HTMLLinkElement).media = 'all'; }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700;800&display=optional"
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
