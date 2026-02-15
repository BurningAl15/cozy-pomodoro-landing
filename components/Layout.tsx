import React, { ReactNode } from 'react';
import Head from 'next/head';
import RadioWidget from './RadioWidget';
import ScrollReveal from './ScrollReveal';

interface Props {
    children: ReactNode;
    title?: string;
}

export default function Layout({ children, title = "Cozy Pomodoro" }: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <ScrollReveal />
            <main>{children}</main>
            <RadioWidget />
        </>
    )
}