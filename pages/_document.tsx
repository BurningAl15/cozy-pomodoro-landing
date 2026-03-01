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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Fonts: preconnect + display=optional to avoid render-blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700;800&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
