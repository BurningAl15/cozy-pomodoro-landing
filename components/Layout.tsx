import React, { ReactNode } from 'react';
import Head from 'next/head';
import RadioWidget from './RadioWidget';
import ScrollReveal from './ScrollReveal';

interface Props {
    children: ReactNode;
    title?: string;
    description?: string;
}

const OG_IMAGE = 'https://cozy-pomodoro-landing.vercel.app/assets/og-image.png';
const SITE_URL = 'https://cozy-pomodoro-landing.vercel.app';

export default function Layout({
    children,
    title = 'Cozy Pomodoro – Focus Comfortably',
    description = 'A minimalist Pomodoro timer for calm productivity. Full experience is free. No ads, no subscriptions.',
}: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <link rel="canonical" href={SITE_URL} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={OG_IMAGE} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Cozy Pomodoro" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={OG_IMAGE} />
            </Head>
            <ScrollReveal />
            <main>{children}</main>
            <RadioWidget />
        </>
    );
}