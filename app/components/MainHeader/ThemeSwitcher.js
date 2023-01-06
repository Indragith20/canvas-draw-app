import React from 'react';
import { useTheme } from '~/contexts/themeContext';
import styles from './ThemeSwitcher.css';

export const ThemeSwitcherLinks = () => [{
  rel: 'stylesheet',
  href: styles
}]

function ThemeSwitcher() {
  const { theme, updateTheme } = useTheme();
  return (
    <div className='theme-switcher' onClick={updateTheme}>
      {
        theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className='icon-style' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className='icon-style' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
        )
      }
    </div>
  )
}

export default React.memo(ThemeSwitcher);