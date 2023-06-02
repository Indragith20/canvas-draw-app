
import { useLoaderData, useMatches } from '@remix-run/react';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export const ThemeContext = createContext('dark');

export function useTheme() {
  return useContext(ThemeContext);
}


export function ThemeProvider({ defaultTheme, children }) {
  let [theme, setTheme] = useState(defaultTheme);

  const updateTheme = useCallback((theme) => {
    if (theme && typeof theme === 'string') {
      setTheme(theme);
    } else {
      setTheme((prevTheme) => {
        let themeToBeUpdated = prevTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('darkMode', themeToBeUpdated === 'dark')
        return themeToBeUpdated;
      });
    }
  }, []);

  useEffect(() => {
    let isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode === 'false' && theme === 'dark') {
      updateTheme();
    }
  }, [theme, updateTheme])

  const contextValue = useMemo(() => {
    return { theme, updateTheme }
  }, [theme, updateTheme]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}