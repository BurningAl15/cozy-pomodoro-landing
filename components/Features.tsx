import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
    Flame,
    Camera,
    CloudRain,
    Cloud,
    BarChart3,
    Target,
    Timer,
    Coffee,
    CheckCircle2
} from 'lucide-react';

export default function Features() {
    const { t } = useLanguage();

    return (
        <>
            {/* Product Highlights */}
            <section className="social-proof container reveal" style={{ padding: '2rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', marginBottom: '4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', opacity: 0.8 }}>
                    <CheckCircle2 size={20} color="var(--primary-color)" />
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.02em' }}>{t('social_proof')}</span>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section container reveal" style={{ paddingTop: '0' }}>
                <div className="features-grid">
                    {/* Feature 1 */}
                    <div className="feature-card-lg">
                        <div className="feature-icon-wrapper">
                            <BarChart3 size={28} />
                        </div>
                        <h3>{t('feat_stats_title')}</h3>
                        <p>{t('feat_stats_desc')}</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-card-lg">
                        <div className="feature-icon-wrapper">
                            <Camera size={28} />
                        </div>
                        <h3>{t('feat_share_title')}</h3>
                        <p>{t('feat_share_desc')}</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card-lg">
                        <div className="feature-icon-wrapper">
                            <CloudRain size={28} />
                        </div>
                        <h3>{t('feat_rain_title')}</h3>
                        <p>{t('feat_rain_desc')}</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="feature-card-lg">
                        <div className="feature-icon-wrapper">
                            <Cloud size={28} />
                        </div>
                        <h3>{t('feat_sync_title')}</h3>
                        <p>{t('feat_sync_desc')}</p>
                    </div>
                </div>
            </section>

            {/* How It Works & Benefits */}
            <section className="section container" style={{ backgroundColor: 'var(--secondary-color)', borderRadius: 'var(--radius-lg)', padding: '4rem' }}>
                <div className="section-header text-center reveal" style={{ marginBottom: '3rem' }}>
                    <span className="badge-soft">{t('how_subtitle')}</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>{t('how_title')}</h2>
                </div>

                <div className="steps-grid reveal" style={{ marginBottom: '4rem' }}>
                    <div className="step-card" style={{ border: 'none', background: 'var(--surface-color)', boxShadow: 'var(--shadow-md)' }}>
                        <div className="step-number" style={{ position: 'absolute', top: '-15px', left: '20px', background: 'var(--primary-color)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                        <div className="step-icon" style={{ background: 'transparent', padding: 0 }}>
                            <Target size={32} />
                        </div>
                        <h3>{t('step1_title')}</h3>
                        <p>{t('step1_desc')}</p>
                    </div>
                    <div className="step-card" style={{ border: 'none', background: 'var(--surface-color)', boxShadow: 'var(--shadow-md)' }}>
                        <div className="step-number" style={{ position: 'absolute', top: '-15px', left: '20px', background: 'var(--primary-color)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                        <div className="step-icon" style={{ background: 'transparent', padding: 0 }}>
                            <Timer size={32} />
                        </div>
                        <h3>{t('step2_title')}</h3>
                        <p>{t('step2_desc')}</p>
                    </div>
                    <div className="step-card" style={{ border: 'none', background: 'var(--surface-color)', boxShadow: 'var(--shadow-md)' }}>
                        <div className="step-number" style={{ position: 'absolute', top: '-15px', left: '20px', background: 'var(--primary-color)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
                        <div className="step-icon" style={{ background: 'transparent', padding: 0 }}>
                            <Coffee size={32} />
                        </div>
                        <h3>{t('step3_title')}</h3>
                        <p>{t('step3_desc')}</p>
                    </div>
                </div>

                <div className="guarantee-section reveal" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '24px',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(0,0,0,0.05)'
                }}>
                    <div className="benefit-item" style={{ background: '#fff', padding: '12px 24px', borderRadius: 'var(--radius-pill)', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: 'var(--shadow-sm)' }}>
                        <CheckCircle2 size={18} color="#2e7d32" /> <span style={{ fontWeight: 600 }}>{t('benefit1')}</span>
                    </div>
                    <div className="benefit-item" style={{ background: '#fff', padding: '12px 24px', borderRadius: 'var(--radius-pill)', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: 'var(--shadow-sm)' }}>
                        <CheckCircle2 size={18} color="#2e7d32" /> <span style={{ fontWeight: 600 }}>{t('benefit2')}</span>
                    </div>
                    <div className="benefit-item" style={{ background: '#fff', padding: '12px 24px', borderRadius: 'var(--radius-pill)', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: 'var(--shadow-sm)' }}>
                        <CheckCircle2 size={18} color="#2e7d32" /> <span style={{ fontWeight: 600 }}>{t('benefit3')}</span>
                    </div>
                </div>
            </section>
        </>
    )
}