import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const heroImages = [
    // ... (truncated)
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
                <div className="hero-text">
                    <span className="badge-soft">{t('version_badge')}</span>
                    <h1 className="hero-title">{t('hero_title')}</h1>
                    <p className="hero-subtitle">
                        <span>{t('hero_subtitle')}</span> <br />
                        <strong>{t('hero_subtitle_bold')}</strong>
                    </p>
                    <div className="hero-actions">
                        <a href="https://play.google.com/store/apps/details?id=com.fatcatgamestudio.cozypomodoro"
                            target="_blank" className="cta-button primary" rel="noreferrer">{t('cta_download')}</a>
                        {/* Note: anchor link might need handling if we want smooth scroll with Next Link, but standard hash works */}
                        <a href="#theme-pack" className="cta-button secondary">{t('cta_explore')}</a>
                    </div>
                    <p className="hero-note">{t('hero_note')}</p>

                    {/* Theme Switcher Mini */}
                    <div className="theme-switcher-mini">
                        <p className="theme-label-sm">{t('try_theme')}</p>
                        <div className="theme-buttons">
                            <button className="theme-btn" onClick={() => setTheme('cozyLight')} title="Cozy Light"
                                style={{ backgroundColor: '#ff5722' }}></button>
                            <button className="theme-btn" onClick={() => setTheme('cozyDark')} title="Cozy Dark"
                                style={{ backgroundColor: '#333', borderColor: '#555' }}></button>
                            <button className="theme-btn" onClick={() => setTheme('nature')} title="Nature"
                                style={{ backgroundColor: '#2E4033' }}></button>
                            <button className="theme-btn" onClick={() => setTheme('pastel')} title="Pastel"
                                style={{ backgroundColor: '#FFB7B2' }}></button>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <img src={`assets/carousel/${heroImage}`} alt="Cozy Pomodoro App"
                        className="hero-mockup animate-float" />
                </div>
            </div>
        </section>
    )
}