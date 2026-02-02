import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ReleaseNotes from "@/components/ReleaseNotes";
import Features from "@/components/Features";
import ThemeStore from "@/components/ThemeStore";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <Layout title={t('meta_title')}>
      <Hero />
      <ReleaseNotes />
      <Features />
      <ThemeStore />
      <FAQ />
      <Footer />
    </Layout>
  );
}
