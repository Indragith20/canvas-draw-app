import React, { useState } from 'react';
import { Link, useLocation } from '@remix-run/react';
import styles from './Header.css';

import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import { useMatchMedia } from '../Common/hooks/useMatchMedia';

export const HeaderStyleLinks = () => [{ rel: 'stylesheet', href: styles }];

function Header({ headerLinks, isLoggedInUser = false }) {
  const { pathname } = useLocation();
  const [menu, toggleMenu] = useState(false);
  const isMobile = useMatchMedia('(min-width: 320px) and (max-width: 767px)');

  function showMenus() {
    toggleMenu(!menu);
  }

  function closeMenu() {
    toggleMenu(false);
  }

  function getHeaderLinks() {
    return (
      headerLinks.map((headerLink) => {
        return (
          <div key={headerLink.link} className='main-header-link' onClick={closeMenu}>
            <Link className={pathname === headerLink.link ? 'activeLink' : ''} to={headerLink.link}>{headerLink.text}</Link>
          </div>
        )
      })
    )
  }

  return (
    <header className='header'>
      <div className='main-header'>
        <Logo />
        <div className={`header-links-container ${isMobile ? 'hide' : ''}`}>
          {getHeaderLinks()}
        </div>

        <ThemeSwitcher />
        {isLoggedInUser ? <Link to='/logout' className='logout'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
        </Link> : null}

        {headerLinks && headerLinks.length > 0 ? <div className='mobile-icon' onClick={showMenus}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div> : null}
      </div>
      {
        isMobile ? (
          <div className='mobile-header-links'>
            {menu ? (
              <div className={`mobile-header-links-container`}>
                {getHeaderLinks()}
              </div>
            ) : null}
          </div>
        ) : null
      }

    </header>
  )
}


export default React.memo(Header);