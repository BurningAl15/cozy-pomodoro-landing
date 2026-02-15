import { useLanguage } from '@/contexts/LanguageContext';
import PageTemplate from '@/components/PageTemplate';

export default function Support() {
    const { t } = useLanguage();

    return (
        <PageTemplate
            title={t('nav_support')}
            badge={t('support_badge')}
            icon="🎧"
        >
            <div className="support-content">
                <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>{t('support_how')}</h2>
                <p style={{ marginBottom: '2rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{t('support_desc')}</p>

                <div style={{ marginBottom: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    <div className="step-card" style={{ padding: '24px' }}>
                        <h3 style={{ marginBottom: '1rem', fontWeight: 600 }}>{t('support_purch_t')}</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{t('support_purch_d')}</p>
                    </div>
                    <div className="step-card" style={{ padding: '24px' }}>
                        <h3 style={{ marginBottom: '1rem', fontWeight: 600 }}>{t('support_sync_t')}</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{t('support_sync_d')}</p>
                    </div>
                </div>

                <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>{t('support_cont_t')}</h2>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{t('support_cont_d')}</p>

                <a href="mailto:fatcatgamestudio.oc@gmail.com" className="cta-button primary" style={{ width: 'auto', display: 'inline-flex', padding: '12px 32px' }}>
                    {t('support_email')}
                </a>
            </div>
        </PageTemplate>
    );
}
