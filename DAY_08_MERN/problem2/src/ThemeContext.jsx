// ThemeContext.js
import React, { createContext, useState } from 'react';

export const themes = {
    light: {
        background: '#ffffff',
        text: '#000000',
    },
    dark: {
        background: '#333333',
        text: '#ffffff',
    },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('light');

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
