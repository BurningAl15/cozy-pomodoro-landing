import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from './Layout';

interface PageTemplateProps {
    title: string;
    badge: string;
    icon: string;
    children: ReactNode;
}

export default function PageTemplate({ title, badge, icon, children }: PageTemplateProps) {
    const { t } = useLanguage();

    return (
        <Layout title={`${title} - Cozy Pomodoro`}>
            <div className="cozy-page-wrapper" style={{ padding: '80px 20px' }}>
                <div className="premium-card reveal active" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="page-badge-icon" style={{ fontSize: '3rem', marginBottom: '1rem', display: 'block' }}>{icon}</span>
                        <div className="badge-soft" style={{ display: 'inline-flex', margin: '0 auto 1rem' }}>
                            {badge}
                        </div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{title}</h1>
                    </div>

                    <div className="page-content-flow">
                        {children}
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                        <Link href="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                            &larr; {t('back_to_home')}
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
