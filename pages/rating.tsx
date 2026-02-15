import { useLanguage } from '@/contexts/LanguageContext';
import PageTemplate from '@/components/PageTemplate';
import { ShieldCheck, Heart, EyeOff } from 'lucide-react';

export default function Rating() {
    const { t } = useLanguage();

    return (
        <PageTemplate
            title={t('nav_rating')}
            badge={t('badge_rating')}
            icon="🛡️"
        >
            <div dangerouslySetInnerHTML={{ __html: t('rating_html') }} />

            <div className="steps-grid" style={{ marginTop: '4rem' }}>
                <div className="step-card">
                    <div className="step-icon">
                        <ShieldCheck size={28} />
                    </div>
                    <h3>{t('rating_safe_title')}</h3>
                    <p>{t('rating_safe_description')}</p>
                </div>
                <div className="step-card">
                    <div className="step-icon">
                        <EyeOff size={28} />
                    </div>
                    <h3>{t('benefit3') || '100% Private'}</h3>
                    <p>{t('meta_desc')}</p>
                </div>
                <div className="step-card">
                    <div className="step-icon">
                        <Heart size={28} />
                    </div>
                    <h3>{t('benefit1') || 'No Ads'}</h3>
                    <p>{t('hero_note')}</p>
                </div>
            </div>
        </PageTemplate>
    );
}
