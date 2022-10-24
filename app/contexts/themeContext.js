import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

export const ThemeContext = createContext(null);

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ defaultTheme, children }) {
  let [theme, setTheme] = useState(defaultTheme);

  const updateTheme = useCallback(() => {
    setTheme((prevTheme) => {
      return prevTheme === 'dark' ? 'light' : 'dark'
    });
  }, []);

  const contextValue = useMemo(() => {
    return { theme, updateTheme }
  }, [theme, updateTheme]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}