import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import StoreButton from './StoreButton';
import { Sparkles, Layout, Leaf, Palette } from 'lucide-react';

const LCP_IMAGE = "cozy_light_marketing-carousel.webp";

const heroImages = [
    "alpine_marketing-carousel.webp", "autumn_warmth_marketing-carousel.webp",
    "calm_lake_marketing-carousel.webp", "city_lights_marketing-carousel.webp",
    "cosmic_vibe_marketing-carousel.webp", "cozy_cafe_marketing-carousel.webp",
    "cozy_dark_marketing-carousel.webp", LCP_IMAGE,
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

    const [displayImage, setDisplayImage] = useState(LCP_IMAGE);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * heroImages.length);
        const picked = heroImages[randomIndex];
        if (picked === LCP_IMAGE) return;

        const preloader = new window.Image();
        preloader.onload = () => {
            setFading(true);
            setTimeout(() => {
                setDisplayImage(picked);
                setFading(false);
            }, 300);
        };
        preloader.src = `/assets/carousel/${picked}`;
    }, []);

    return (
        <section className="hero container">
            <div className="hero-content">
                <div className="hero-text reveal">
                    <span className="badge-soft">
                        <Sparkles size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} aria-hidden="true" />
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
                    <div style={{ marginTop: '24px' }}>
                        <a href="#theme-pack" className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-color)' }}>
                            {t('cta_explore')} <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <p className="hero-note" style={{ marginTop: '24px' }}>{t('hero_note')}</p>

                    {/* Theme Switcher Mini */}
                    <div className="theme-switcher-mini" style={{ marginTop: '40px' }}>
                        <p className="theme-label-sm" style={{ marginBottom: '12px', fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>{t('try_theme')}</p>
                        <div className="theme-buttons" role="group" aria-label="Preview app themes" style={{ display: 'flex', gap: '12px' }}>
                            <button className="theme-btn" onClick={() => setTheme('cozyLight')}
                                aria-label="Switch to Cozy Light theme"
                                style={{ backgroundColor: '#ffffff', border: '1px solid #ddd', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Layout size={18} color="#ff5722" aria-hidden="true" />
                            </button>
                            <button className="theme-btn" onClick={() => setTheme('cozyDark')}
                                aria-label="Switch to Cozy Dark theme"
                                style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Layout size={18} color="#ff7043" aria-hidden="true" />
                            </button>
                            <button className="theme-btn" onClick={() => setTheme('nature')}
                                aria-label="Switch to Nature theme"
                                style={{ backgroundColor: '#f1f8e9', border: '1px solid #a5d6a7', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Leaf size={18} color="#2e7d32" aria-hidden="true" />
                            </button>
                            <button className="theme-btn" onClick={() => setTheme('pastel')}
                                aria-label="Switch to Pastel theme"
                                style={{ backgroundColor: '#fff5f8', border: '1px solid #f8bbd0', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Palette size={18} color="#d81b60" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={`/assets/carousel/${displayImage}`}
                        alt="Cozy Pomodoro App – productivity timer with beautiful themes"
                        className="hero-mockup animate-float"
                        {...{ fetchpriority: 'high' }}
                        width={420}
                        height={560}
                        style={{
                            width: '90%',
                            maxWidth: '420px',
                            height: 'auto',
                            opacity: fading ? 0 : 1,
                            transition: 'opacity 0.3s ease',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}