import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { translations } from '../locales/translations';

type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ja' | 'ko';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        // Load from localStorage or browser preference
        const savedLang = localStorage.getItem('cozy_lang') as Language;
        if (savedLang && Object.keys(translations).includes(savedLang)) {
            setLanguage(savedLang);
        } else {
            const browserLang = navigator.language.slice(0, 2) as Language;
            if (Object.keys(translations).includes(browserLang)) {
                setLanguage(browserLang);
            }
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('cozy_lang', lang);
        document.documentElement.lang = lang;
    };

    const t = (key: string): string => {
        const langData = (translations as any)[language] || translations['en'];
        return (langData as any)[key] || translations['en'][key as keyof typeof translations['en']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
