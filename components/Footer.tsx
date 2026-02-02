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
            <div className="footer-links" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <Link href="/privacy" className="cta-button secondary" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>
                    {t('nav_privacy')}
                </Link>
                <Link href="/credits" className="cta-button secondary" style={{ fontSize: '0.9rem', padding: '10px 20px' }}>
                    {t('credits')}
                </Link>
            </div>

            <div className="languages-list" style={{ marginBottom: '2rem' }}>
                {languages.map(lang => (
                    <button
                        key={lang.code}
                        className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                        onClick={() => setLanguage(lang.code as any)}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>

            <p className="copyright">
                <span>{t('footer_made_with')}</span> <span style={{ color: 'red' }}>&hearts;</span> <span>{t('footer_by')}</span> <a href="mailto:aldhairvera15@gmail.com"
                    style={{ fontWeight: 'bold' }}>Aldhair Vera</a> <br />
                &copy; 2025 Cozy Pomodoro.
            </p>
        </footer>
    )
}