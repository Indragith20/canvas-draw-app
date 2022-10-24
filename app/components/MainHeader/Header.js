import React from 'react';
import { Link, useLocation } from '@remix-run/react';
import styles from './Header.css';
import darkBanner from '../../assets/draw-dark.webp';
import lightBanner from '../../assets/draw-light.webp';
import { useTheme } from '~/contexts/themeContext';

export const HeaderStyleLinks = () => [{ rel: 'stylesheet', href: styles }];

function Header({ headerLinks }) {
  const { pathname } = useLocation();
  const { theme, updateTheme } = useTheme();

  return (
    <header className='main-header'>
      <div className='logo'>
        <img src={theme === 'dark' ? darkBanner : lightBanner} alt='' className='banner' />
      </div>
      {
        headerLinks.map((headerLink) => {
          return (
            <div key={headerLink.link} className='main-header-link'>
              <Link className={pathname === headerLink.link ? 'activeLink' : ''} to={headerLink.link}>{headerLink.text}</Link>
            </div>
          )
        })
      }
      <div className='theme-icon' onClick={updateTheme}>
        {
          theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
          )
        }
      </div>
    </header>
  )
}


export default React.memo(Header);