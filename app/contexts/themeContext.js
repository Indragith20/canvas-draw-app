
import { useLoaderData, useMatches } from '@remix-run/react';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

export const ThemeContext = createContext('dark');

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ defaultTheme, children }) {
  let [theme, setTheme] = useState(defaultTheme);
  let loaderData = useLoaderData();
  const matches = useMatches()
  console.log("Loader Data", loaderData, matches);

  const updateTheme = useCallback((theme) => {
    if (theme && typeof theme === 'string') {
      setTheme(theme);
    } else {
      setTheme((prevTheme) => {
        return prevTheme === 'dark' ? 'light' : 'dark'
      });
    }
  }, []);

  const contextValue = useMemo(() => {
    return { theme, updateTheme }
  }, [theme, updateTheme]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}