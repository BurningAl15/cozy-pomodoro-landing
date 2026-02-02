import React, { ReactNode } from 'react';
import Head from 'next/head';
import RadioWidget from './RadioWidget';

interface Props {
    children: ReactNode;
    title?: string;
}

export default function Layout({ children, title = "Cozy Pomodoro" }: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, intial-scale=1" />
            </Head>
            <main>{children}</main>
            <RadioWidget />
        </>
    )
}