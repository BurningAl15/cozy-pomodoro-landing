import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'cozyLight' | 'cozyDark' | 'nature' | 'pastel';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = {
    cozyLight: {
        '--bg-color': '#ffffff',
        '--text-main': 'rgba(0, 0, 0, 0.87)',
        '--text-muted': 'rgba(0, 0, 0, 0.6)',
        '--primary-color': '#ff5722',
        '--primary-hover': '#e64a19',
        '--secondary-color': '#fef0eb',
        '--surface-color': '#ffffff',
        '--surface-raised': '#fffbf7',
        '--border-color': '#ffe0b2',
        '--glass-bg': 'rgba(255, 255, 255, 0.75)',
        '--glass-border': 'rgba(255, 255, 255, 0.5)',
        '--shadow-accent': 'rgba(255, 87, 34, 0.25)',
    },
    cozyDark: {
        '--bg-color': '#1a1a1a',
        '--text-main': '#e0e0e0',
        '--text-muted': '#a0a0a0',
        '--primary-color': '#ff7043',
        '--primary-hover': '#f4511e',
        '--secondary-color': '#2d2d2d',
        '--surface-color': '#2d2d2d',
        '--surface-raised': '#333333',
        '--border-color': '#444',
        '--glass-bg': 'rgba(30, 30, 30, 0.8)',
        '--glass-border': 'rgba(255, 255, 255, 0.1)',
        '--shadow-accent': 'rgba(255, 112, 67, 0.25)',
    },
    nature: {
        '--bg-color': '#f1f8e9',
        '--text-main': '#1b5e20',
        '--text-muted': '#558b2f',
        '--primary-color': '#2e7d32',
        '--primary-hover': '#1b5e20',
        '--secondary-color': '#dcedc8',
        '--surface-color': '#ffffff',
        '--surface-raised': '#dcedc8',
        '--border-color': '#a5d6a7',
        '--glass-bg': 'rgba(241, 248, 233, 0.8)',
        '--glass-border': 'rgba(46, 125, 50, 0.2)',
        '--shadow-accent': 'rgba(46, 125, 50, 0.25)',
    },
    pastel: {
        '--bg-color': '#fff5f8',
        '--text-main': '#640d3e',
        '--text-muted': '#8d1046',
        '--primary-color': '#d81b60',
        '--primary-hover': '#ad1457',
        '--secondary-color': '#ffebee',
        '--surface-color': '#ffffff',
        '--surface-raised': '#ffebee',
        '--border-color': '#f8bbd0',
        '--glass-bg': 'rgba(255, 245, 248, 0.8)',
        '--glass-border': 'rgba(216, 27, 96, 0.2)',
        '--shadow-accent': 'rgba(216, 27, 96, 0.25)',
    }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('cozyLight');

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('cozy_theme', newTheme);

        const themeVars = themes[newTheme];
        if (themeVars) {
            const root = document.documentElement;
            Object.entries(themeVars).forEach(([key, value]) => {
                root.style.setProperty(key, value);
            });
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('cozy_theme') as Theme;
        if (savedTheme && themes[savedTheme]) {
            setTheme(savedTheme);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
}
