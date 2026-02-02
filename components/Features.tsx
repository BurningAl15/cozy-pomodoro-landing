import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Features() {
    const { t } = useLanguage();

    return (
        <>
            {/* Product Highlights */}
            <section className="social-proof container reveal active">
                <p>{t('social_proof')}</p>
            </section>

            {/* Features Grid */}
            <section className="section container reveal active" style={{ paddingTop: '1rem' }}>
                <div className="features-grid">
                    {/* Feature 1 */}
                    <div className="feature-card-lg" style={{ background: 'linear-gradient(135deg, var(--surface-raised) 0%, var(--surface-color) 100%)' }}>
                        <div className="feature-icon">🔥</div>
                        <h3>{t('feat_stats_title')}</h3>
                        <p>{t('feat_stats_desc')}</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-card-lg" style={{ background: 'linear-gradient(135deg, var(--surface-raised) 0%, var(--surface-color) 100%)' }}>
                        <div className="feature-icon">📸</div>
                        <h3>{t('feat_share_title')}</h3>
                        <p>{t('feat_share_desc')}</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card-lg" style={{ background: 'linear-gradient(135deg, var(--surface-raised) 0%, var(--surface-color) 100%)' }}>
                        <div className="feature-icon">🌧️</div>
                        <h3>{t('feat_rain_title')}</h3>
                        <p>{t('feat_rain_desc')}</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="feature-card-lg" style={{ background: 'linear-gradient(135deg, var(--surface-raised) 0%, var(--surface-color) 100%)' }}>
                        <div className="feature-icon">☁️</div>
                        <h3>{t('feat_sync_title')}</h3>
                        <p>{t('feat_sync_desc')}</p>
                    </div>

                    {/* Feature 5 */}
                    <div className="feature-card-lg" style={{ background: 'linear-gradient(135deg, var(--surface-raised) 0%, var(--surface-color) 100%)' }}>
                        <div className="feature-icon">📊</div>
                        <h3>{t('feat_heatmap_title')}</h3>
                        <p>{t('feat_heatmap_desc')}</p>
                    </div>
                </div>
            </section>

            {/* How It Works & Benefits */}
            <section className="section container">
                <div className="section-header text-center reveal active">
                    <h2>{t('how_title')}</h2>
                    <p>{t('how_subtitle')}</p>
                </div>

                <div className="steps-grid reveal active">
                    <div className="step-card">
                        <div className="step-icon">🎯</div>
                        <h3>{t('step1_title')}</h3>
                        <p>{t('step1_desc')}</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">⏱️</div>
                        <h3>{t('step2_title')}</h3>
                        <p>{t('step2_desc')}</p>
                    </div>
                    <div className="step-card">
                        <div className="step-icon">☕</div>
                        <h3>{t('step3_title')}</h3>
                        <p>{t('step3_desc')}</p>
                    </div>
                </div>

                <div className="benefits-list reveal active">
                    <div className="benefit-item">
                        <span className="check-icon">✓</span> <span>{t('benefit1')}</span>
                    </div>
                    <div className="benefit-item">
                        <span className="check-icon">✓</span> <span>{t('benefit2')}</span>
                    </div>
                    <div className="benefit-item">
                        <span className="check-icon">✓</span> <span>{t('benefit3')}</span>
                    </div>
                </div>
            </section>
        </>
    )
}