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
        '--surface-color': '#ffffff',
        '--surface-raised': '#fffbf7',
        '--border-color': '#ffe0b2',
    },
    cozyDark: {
        '--bg-color': '#1a1a1a',
        '--text-main': '#e0e0e0',
        '--text-muted': '#a0a0a0',
        '--primary-color': '#ff7043',
        '--surface-color': '#2d2d2d',
        '--surface-raised': '#333333',
        '--border-color': '#444',
    },
    nature: {
        '--bg-color': '#f1f8e9',
        '--text-main': '#1b5e20',
        '--text-muted': '#558b2f',
        '--primary-color': '#2e7d32',
        '--surface-color': '#ffffff',
        '--surface-raised': '#dcedc8',
        '--border-color': '#a5d6a7',
    },
    pastel: {
        '--bg-color': '#fff0f5',
        '--text-main': '#880e4f',
        '--text-muted': '#ad1457',
        '--primary-color': '#ec407a',
        '--surface-color': '#ffffff',
        '--surface-raised': '#f8bbd0',
        '--border-color': '#f48fb1',
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
