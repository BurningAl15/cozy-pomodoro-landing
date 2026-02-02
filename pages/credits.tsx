import Link from 'next/link';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Credits() {
    const { t, language } = useLanguage();

    return (
        <Layout title="Credits - Cozy Pomodoro">
            <div className="cozy-page-wrapper">
                <div className="privacy-modal-card" id="credits-text">
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.5rem' }}>❤️</span>
                    </div>
                    <div
                        className="credits-content"
                        dangerouslySetInnerHTML={{ __html: t('credits_html') }}
                    />

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link href="/" style={{
                            display: 'inline-block',
                            padding: '12px 32px',
                            background: 'var(--primary-color)',
                            color: 'white',
                            borderRadius: '50px',
                            fontWeight: '600',
                            boxShadow: '0 4px 12px rgba(255, 87, 34, 0.3)',
                            textDecoration: 'none',
                            transition: 'transform 0.2s'
                        }}>
                            &larr; {t('hero_title') ? (language === 'es' ? 'Volver al Inicio' : 'Back to Home') : 'Back'}
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
