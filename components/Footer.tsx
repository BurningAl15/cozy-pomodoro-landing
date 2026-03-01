import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
    const { t, language, setLanguage } = useLanguage();

    const languages = [
        { code: 'en', label: '🇺🇸 English' },
        { code: 'es', label: '🇪🇸 Español' },
        { code: 'fr', label: '🇫🇷 Français' },
        { code: 'de', label: '🇩🇪 Deutsch' },
        { code: 'it', label: '🇮🇹 Italiano' },
        { code: 'pt', label: '🇧🇷 Português' },
        { code: 'ja', label: '🇯🇵 日本語' },
        { code: 'ko', label: '🇰🇷 한국어' }
    ];

    return (
        <footer className="footer container">
            <div className="footer-links">
                <Link href="/privacy" className="nav-link">
                    {t('nav_privacy')}
                </Link>
                <Link href="/terms" className="nav-link">
                    {t('nav_terms')}
                </Link>
                <Link href="/rating" className="nav-link">
                    {t('nav_rating')}
                </Link>
                <Link href="/credits" className="nav-link">
                    {t('credits')}
                </Link>
                <Link href="/support" className="nav-link">
                    {t('nav_support')}
                </Link>
            </div>

            <div className="languages-list" role="group" aria-label="Select language" style={{ marginTop: '3rem' }}>
                {languages.map(lang => (
                    <button
                        key={lang.code}
                        className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                        onClick={() => setLanguage(lang.code as any)}
                        aria-label={`Switch language to ${lang.label}`}
                        aria-current={language === lang.code ? 'true' : undefined}
                        style={{ border: 'none' }}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>

            <p className="copyright" style={{ marginTop: '4rem', opacity: 0.6 }}>
                <span>{t('footer_made_with')}</span> <span style={{ color: '#ff5e3a' }}>&hearts;</span> <span>{t('footer_by')}</span> <a href="mailto:aldhairvera15@gmail.com"
                    style={{ fontWeight: '600', color: 'inherit' }}>Aldhair Vera</a> <br />
                &copy; 2025 Cozy Pomodoro.
            </p>
        </footer>
    )
}