import React from 'react';
import { Link, useLocation } from '@remix-run/react';
import styles from './Header.css';

import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

export const HeaderStyleLinks = () => [{ rel: 'stylesheet', href: styles }];

function Header({ headerLinks }) {
  const { pathname } = useLocation();

  return (
    <header className='main-header'>
      <Logo />
      {
        headerLinks.map((headerLink) => {
          return (
            <div key={headerLink.link} className='main-header-link'>
              <Link className={pathname === headerLink.link ? 'activeLink' : ''} to={headerLink.link}>{headerLink.text}</Link>
            </div>
          )
        })
      }
      <ThemeSwitcher />
    </header>
  )
}


export default React.memo(Header);