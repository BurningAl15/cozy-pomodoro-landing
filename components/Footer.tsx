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
            <div className="footer-links" style={{ marginTop: '2rem' }}>
                <span style={{ opacity: 0.6, fontSize: '0.9rem', marginRight: '1rem' }}>Our Other Apps:</span>
                <a href="https://play.google.com/store/apps/details?id=com.fatcatgamestudio.noxnotes" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Nox-Notes
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.FatCatGameStudio.SafeBite" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    SafeBite
                </a>
            </div>

            <div className="languages-list" role="group" aria-label="Select language" style={{ marginTop: '2rem' }}>
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