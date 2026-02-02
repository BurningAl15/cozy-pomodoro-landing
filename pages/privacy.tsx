import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';

export default function Privacy() {
    const { t, language } = useLanguage();

    return (
        <Layout title="Privacy Policy - Cozy Pomodoro">
            <div className="cozy-page-wrapper">
                <div className="privacy-modal-card" id="privacy-text">
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.5rem' }}>🛡️</span>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: t('privacy_html') }}
                    />
                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <a href="/" style={{
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
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}