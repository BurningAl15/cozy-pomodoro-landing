import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { useLanguage } from '@/contexts/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import StoreButton from './StoreButton';
import {
    Palette,
    Wind,
    Box,
    Crown,
    X,
    Maximize2
} from 'lucide-react';

const themePacks = {
    "pack01": [
        "golden_hour_marketing-carousel.webp",
        "neon_city_marketing-carousel.webp",
        "cosmic_vibe_marketing-carousel.webp",
        "sakura_season_marketing-carousel.webp"
    ],
    "pack02": [
        "city_lights_marketing-carousel.webp",
        "spring_marketing-carousel.webp",
        "calm_lake_marketing-carousel.webp"
    ],
    "pack03": [
        "alpine_marketing-carousel.webp",
        "sunny_day_marketing-carousel.webp",
        "winter_home_marketing-carousel.webp"
    ],
    "pack04": [
        "royal_library_marketing-carousel.webp",
        "forest_house_marketing-carousel.webp",
        "secret_garden_marketing-carousel.webp",
        "sakura_garden_marketing-carousel.webp"
    ]
};

const allThemes = [
    ...themePacks.pack01,
    ...themePacks.pack02,
    ...themePacks.pack03,
    ...themePacks.pack04
];

const packThemes = {
    "pack01": [
        { name: "Golden Hour Theme", img: "themes/BasicThemes/premium_golden_hour.jpg" },
        { name: "Neon City Theme", img: "themes/BasicThemes/premium_neon_city.jpg" },
        { name: "Cosmic Vibe Theme", img: "themes/BasicThemes/premium_cosmic_vibe.jpg" },
        { name: "Sakura Season Theme", img: "themes/BasicThemes/premium_sakura_season.jpg" }
    ],
    "pack02": [
        { name: "City Lights Theme", img: "themes/NewThemes/landscape_a_city_lights.jpg" },
        { name: "Spring Meadow Theme", img: "themes/NewThemes/landscape_a_spring_meadow.jpg" },
        { name: "Calm Lake Theme", img: "themes/NewThemes/landscape_a_calm_lake.jpg" }
    ],
    "pack03": [
        { name: "Alpine Peaks Theme", img: "themes/NewThemes/landscape_b_alpine_peaks.jpg" },
        { name: "Sunny Day Theme", img: "themes/NewThemes/landscape_b_sunny_day.jpg" },
        { name: "Winter Lodge Theme", img: "themes/NewThemes/landscape_b_winter_lodge.jpg" }
    ],
    "pack04": [
        { name: "Royal Library Theme", img: "themes/NewThemes/landscape_c_royal_cabin.jpg" },
        { name: "Forest Cabin Theme", img: "themes/NewThemes/landscape_c_forest_cabin.jpg" },
        { name: "Secret Garden Theme", img: "themes/NewThemes/landscape_c_secret_garden.jpg" },
        { name: "Sakura Garden Theme", img: "themes/NewThemes/landscape_c_sakura_garden.jpg" }
    ]
};

export default function ThemeStore() {
    const { t } = useLanguage();
    const [selectedPack, setSelectedPack] = useState<keyof typeof themePacks>("pack01");
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <section id="theme-pack" className="section container">
            <div className="section-header text-center reveal" style={{ marginBottom: 'var(--spacing-lg)' }}>
                <span className="badge-soft">{t('premium_badge')}</span>
                <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('premium_title')}</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
                    {t('premium_desc')}
                </p>
            </div>

            <div className="pricing-grid reveal" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-xl)'
            }}>
                {/* Pack 01 */}
                <div
                    className={`pricing-card ${selectedPack === 'pack01' ? 'featured-border' : ''}`}
                    onClick={() => {
                        setSelectedPack('pack01');
                        setIsLightboxOpen(true);
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="card-header">
                        <div className="step-icon" style={{ margin: '0 auto 1.5rem', background: selectedPack === 'pack01' ? 'var(--primary-color)' : '', color: selectedPack === 'pack01' ? '#fff' : '' }}>
                            <Palette size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{t('card1_title')}</h3>
                    </div>
                    <p style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{t('card1_benefit')}</p>
                    <div className="price" style={{ fontSize: '2.5rem' }}><span className="currency">$</span>2.99</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{t('card1_desc')}</p>

                    <div className="pack-contents-mini" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                        {packThemes.pack01.map((theme, i) => (
                            <div key={i} className="glass-badge" style={{ padding: '4px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src={`assets/${theme.img}`} alt={theme.name} title={theme.name} loading="lazy" width={69} height={144} style={{ width: '100%', height: 'auto', borderRadius: '4px', display: 'block' }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pack 02 */}
                <div
                    className={`pricing-card ${selectedPack === 'pack02' ? 'featured-border' : ''}`}
                    onClick={() => {
                        setSelectedPack('pack02');
                        setIsLightboxOpen(true);
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="card-header">
                        <div className="step-icon" style={{ margin: '0 auto 1.5rem', background: selectedPack === 'pack02' ? 'var(--primary-color)' : '', color: selectedPack === 'pack02' ? '#fff' : '' }}>
                            <Wind size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{t('card2_title')}</h3>
                    </div>
                    <p style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{t('card2_benefit')}</p>
                    <div className="price" style={{ fontSize: '2.5rem' }}><span className="currency">$</span>2.99</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{t('card2_desc')}</p>

                    <div className="pack-contents-mini" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                        {packThemes.pack02.map((theme, i) => (
                            <div key={i} className="glass-badge" style={{ padding: '4px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src={`assets/${theme.img}`} alt={theme.name} title={theme.name} loading="lazy" width={97} height={205} style={{ width: '100%', height: 'auto', borderRadius: '4px', display: 'block' }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pack 03 */}
                <div
                    className={`pricing-card ${selectedPack === 'pack03' ? 'featured-border' : ''}`}
                    onClick={() => {
                        setSelectedPack('pack03');
                        setIsLightboxOpen(true);
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="card-header">
                        <div className="step-icon" style={{ margin: '0 auto 1.5rem', background: selectedPack === 'pack03' ? 'var(--primary-color)' : '', color: selectedPack === 'pack03' ? '#fff' : '' }}>
                            <Box size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{t('card3_title')}</h3>
                    </div>
                    <p style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{t('card3_benefit')}</p>
                    <div className="price" style={{ fontSize: '2.5rem' }}><span className="currency">$</span>2.99</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{t('card3_desc')}</p>

                    <div className="pack-contents-mini" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                        {packThemes.pack03.map((theme, i) => (
                            <div key={i} className="glass-badge" style={{ padding: '4px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src={`assets/${theme.img}`} alt={theme.name} title={theme.name} loading="lazy" width={97} height={205} style={{ width: '100%', height: 'auto', borderRadius: '4px', display: 'block' }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pack 04 - Ultimate Scenery */}
                <div
                    className={`pricing-card ${selectedPack === 'pack04' ? 'featured-border' : ''}`}
                    onClick={() => {
                        setSelectedPack('pack04');
                        setIsLightboxOpen(true);
                    }}
                    style={{
                        background: 'var(--surface-raised)',
                        color: 'var(--text-main)',
                        border: selectedPack === 'pack04' ? '1px solid var(--primary-color)' : '1px solid var(--border-color)',
                        cursor: 'pointer'
                    }}
                >
                    <div className="card-header">
                        <div className="step-icon" style={{
                            margin: '0 auto 1.5rem',
                            background: 'var(--secondary-color)',
                            color: 'var(--primary-color)'
                        }}>
                            <Crown size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)' }}>{t('card4_title')}</h3>
                    </div>
                    <p style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{t('card4_benefit')}</p>
                    <div className="price" style={{ fontSize: '2.5rem' }}><span className="currency">$</span>3.49</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{t('card4_desc')}</p>

                    <div className="pack-contents-mini" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                        {packThemes.pack04.map((theme, i) => (
                            <div key={i} className="glass-badge" style={{ padding: '4px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <img src={`assets/${theme.img}`} alt={theme.name} title={theme.name} loading="lazy" width={69} height={144} style={{ width: '100%', height: 'auto', borderRadius: '4px', display: 'block' }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Individual Themes Card */}
                <div className="pricing-card" style={{ border: '2px dashed var(--border-color)', background: 'transparent' }}>
                    <div className="card-header">
                        <div className="step-icon" style={{ margin: '0 auto 1.5rem' }}>
                            <Palette size={28} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{t('single_themes_title')}</h3>
                    </div>
                    <p style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{t('one_time')} $0.79</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('single_themes_desc')}</p>
                </div>
            </div>

            {/* Carousel & New Themes */}
            <div className="new-themes-container" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{t('new_themes_title')}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{t('premium_preview_subtitle') || 'Explore our full premium collection'}</p>

                <div className="swiper-container-wrapper" style={{ maxWidth: '380px', margin: '0 auto', marginBottom: '3rem', position: 'relative' }}>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        className="mySwiper"
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        {allThemes.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div style={{ position: 'relative' }}>
                                    <img src={`assets/carousel/${img}`} alt={`Theme Preview ${index}`} loading="lazy" width={372} height={372} style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="store-cta-container">
                    <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                        {t('guarantee')}
                    </p>
                    <div className="hero-actions" style={{ justifyContent: 'center' }}>
                        <StoreButton platform="android" />
                        <StoreButton platform="ios" />
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
                    <div className="lightbox-container" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)}>
                            <X size={40} />
                        </button>
                        <div className="lightbox-swiper-wrapper">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards, Autoplay]}
                                className="lightbox-swiper"
                                loop={true}
                                autoplay={{ delay: 3000 }}
                            >
                                {themePacks[selectedPack].map((img: string, index: number) => (
                                    <SwiperSlide key={index}>
                                        <img src={`assets/carousel/${img}`} alt={`Large Preview ${index}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="lightbox-info">
                            <h3>{t(`card${selectedPack.toString().slice(-1)}_title`)}</h3>
                            <p>{t(`card${selectedPack.toString().slice(-1)}_desc`)}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}