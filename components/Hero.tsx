import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import StoreButton from './StoreButton';
import { Apple, PlayCircle, Sparkles, Layout, Leaf, Palette } from 'lucide-react';

const heroImages = [
    // ... (rest of the images)
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

export default function Hero() {
    const { t } = useLanguage();
    const { setTheme } = useTheme();
    const [heroImage, setHeroImage] = useState("alpine_marketing-carousel.webp");

    useEffect(() => {
        const randomHeroIndex = Math.floor(Math.random() * heroImages.length);
        setHeroImage(heroImages[randomHeroIndex]);
    }, []);

    return (
        <section className="hero container">
            <div className="hero-content">
                <div className="hero-text reveal">
                    <span className="badge-soft">
                        <Sparkles size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                        {t('version_badge')}
                    </span>
                    <h1 className="hero-title">{t('hero_title')}</h1>
                    <p className="hero-subtitle">
                        <span>{t('hero_subtitle')}</span> <br />
                        <strong>{t('hero_subtitle_bold')}</strong>
                    </p>
                    <div className="hero-actions">
                        <StoreButton platform="android" />
                        <StoreButton platform="ios" />
                    </div>
                    {/* Explore link as a clean sub-action */}
                    <div style={{ marginTop: '24px' }}>
                        <a href="#theme-pack" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-color)' }}>
                            {t('cta_explore')} <span>→</span>
                        </a>
                    </div>
                    <p className="hero-note" style={{ marginTop: '24px' }}>{t('hero_note')}</p>

                    {/* Theme Switcher Mini */}
                    <div className="theme-switcher-mini" style={{ marginTop: '40px' }}>
                        <p className="theme-label-sm" style={{ marginBottom: '12px', fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>{t('try_theme')}</p>
                        <div className="theme-buttons" style={{ display: 'flex', gap: '12px' }}>
                            <button className="theme-btn" onClick={() => setTheme('cozyLight')} title="Cozy Light"
                                style={{ backgroundColor: '#ffffff', border: '1px solid #ddd', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Layout size={18} color="#ff5722" />
                            </button>
                            <button className="theme-btn" onClick={() => setTheme('cozyDark')} title="Cozy Dark"
                                style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Layout size={18} color="#ff7043" />
                            </button>
                            <button className="theme-btn" onClick={() => setTheme('nature')} title="Nature"
                                style={{ backgroundColor: '#f1f8e9', border: '1px solid #a5d6a7', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Leaf size={18} color="#2e7d32" />
                            </button>
                            <button className="theme-btn" onClick={() => setTheme('pastel')} title="Pastel"
                                style={{ backgroundColor: '#fff5f8', border: '1px solid #f8bbd0', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Palette size={18} color="#d81b60" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hero-visual reveal">
                    <img src={`assets/carousel/${heroImage}`} alt="Cozy Pomodoro App"
                        className="hero-mockup animate-float" />
                </div>
            </div>
        </section>
    )
}