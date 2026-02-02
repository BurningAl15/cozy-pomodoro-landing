import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { useLanguage } from '@/contexts/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function ThemeStore() {
    const { t } = useLanguage();

    const sliderImages = [
        "alpine_marketing-carousel.webp", "autumn_warmth_marketing-carousel.webp",
        "calm_lake_marketing-carousel.webp", "city_lights_marketing-carousel.webp",
        "cosmic_vibe_marketing-carousel.webp", "cozy_cafe_marketing-carousel.webp",
        "cozy_dark_marketing-carousel.webp", "cozy_light_marketing-carousel.webp",
        "cyberpunk_marketing-carousel.webp", "forest_house_marketing-carousel.webp",
        "forest_vibes_marketing-carousel.webp", "golden_hour_marketing-carousel.webp",
        "lavender_dreams_marketing-carousel.webp", "minimal_cozy_marketing-carousel.webp",
        "mountain_mist_marketing-carousel.webp", "nature_marketing-carousel.webp",
        "neon_city_marketing-carousel.webp", "ocean_breeze_marketing-carousel.webp",
        "ocean_marketing-carousel.webp", "pastel_marketing-carousel.webp",
        "rainy_day_marketing-carousel.webp", "rainy_window_marketing-carousel.webp",
        "royal_library_marketing-carousel.webp", "sakura_garden_marketing-carousel.webp",
        "sakura_season_marketing-carousel.webp", "secret_garden_marketing-carousel.webp",
        "spring_marketing-carousel.webp", "storm_window_marketing-carousel.webp",
        "summer_vibes_marketing-carousel.webp", "sunny_day_marketing-carousel.webp",
        "sunset_serenity_marketing-carousel.webp", "winter_home_marketing-carousel.webp"
    ];

    return (
        <section id="theme-pack" className="section container theme-store-section" style={{ background: 'var(--surface-raised)', borderRadius: '32px', padding: '3rem 1.5rem', marginBottom: '4rem' }}>
            <div className="section-header text-center reveal active">
                <span className="badge-soft" style={{ background: '#fff', border: '1px solid var(--border-color)' }}>{t('premium_badge')}</span>
                <h2 style={{ marginTop: '1rem', color: 'var(--primary-color)' }}>{t('premium_title')}</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>
                    {t('premium_desc')}
                </p>
            </div>

            <div className="pricing-grid reveal active">
                {/* Vibe Styles */}
                <div className="pricing-card">
                    <div className="card-header">
                        <span className="card-icon">🎨</span>
                        <h3>{t('card1_title')}</h3>
                    </div>
                    <p className="card-benefit">{t('card1_benefit')}</p>
                    <div className="price-compact"><span className="currency">$</span>0.49</div>
                    <p className="card-sub">{t('card1_desc')}</p>
                </div>

                {/* Animated Scapes */}
                <div className="pricing-card featured-border">
                    <div className="card-header">
                        <span className="card-icon">🌊</span>
                        <h3>{t('card2_title')}</h3>
                    </div>
                    <p className="card-benefit">{t('card2_benefit')}</p>
                    <div className="price-compact"><span className="currency">$</span>0.99</div>
                    <p className="card-sub">{t('card2_desc')}</p>
                </div>

                {/* Value Packs */}
                <div className="pricing-card">
                    <div className="card-header">
                        <span className="card-icon">📦</span>
                        <h3>{t('card3_title')}</h3>
                    </div>
                    <p className="card-benefit">{t('card3_benefit')}</p>
                    <div className="price-compact"><span className="currency">$</span>1.99</div>
                    <p className="card-sub">{t('card3_desc')}</p>
                </div>

                {/* Ultimate Bundle */}
                <div className="pricing-card" style={{ background: 'var(--primary-color)', color: '#fff' }}>
                    <div className="card-header">
                        <span className="card-icon">👑</span>
                        <h3 style={{ color: '#fff' }}>{t('card4_title')}</h3>
                    </div>
                    <p className="card-benefit" style={{ color: 'rgba(255,255,255,0.9)' }}>{t('card4_benefit')}</p>
                    <div className="price-compact" style={{ color: '#fff' }}><span className="currency">$</span>2.49</div>
                    <p className="card-sub" style={{ color: 'rgba(255,255,255,0.8)' }}>{t('card4_desc')}</p>
                </div>
            </div>

            {/* Carousel & New Themes */}
            <div className="new-themes-container" style={{ marginTop: '3rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1.5rem', opacity: 0.8 }}>{t('new_themes_title')}</h3>

                <div className="swiper-container-wrapper" style={{ maxWidth: '320px', margin: '0 auto' }}>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        className="mySwiper"
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                    >
                        {sliderImages.map((img, index) => (
                            <SwiperSlide key={index} style={{ borderRadius: '18px' }}>
                                <img src={`assets/carousel/${img}`} alt={`Theme Preview ${index}`} style={{ width: '100%', height: 'auto', borderRadius: '18px' }} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="store-cta-container">
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.7 }}>
                        {t('guarantee')}
                    </p>
                    <a href="https://play.google.com/store/apps/details?id=com.fatcatgamestudio.cozypomodoro" className="cta-button primary" style={{ minWidth: '200px' }}>
                        {t('visit_store')}
                    </a>
                </div>
            </div>
        </section>
    );
}