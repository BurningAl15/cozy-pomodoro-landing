import Head from "next/head";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ReleaseNotes from "@/components/ReleaseNotes";
import Features from "@/components/Features";
import ThemeStore from "@/components/ThemeStore";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <Layout title={t('meta_title')} description={t('meta_desc')}>
      <Hero />
      <ReleaseNotes />
      <Features />
      <ThemeStore />
      <FAQ />
      <Footer />
    </Layout>
  );
}
