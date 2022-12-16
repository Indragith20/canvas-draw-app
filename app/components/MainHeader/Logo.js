import React from 'react';
import styles from './Logo.css';
import { useTheme } from '~/contexts/themeContext';
import darkBanner from '../../assets/draw-dark.webp';
import lightBanner from '../../assets/draw-light.webp';
import { Link } from '@remix-run/react';

export const LogoLinks = () => [{
  rel: 'stylesheet',
  href: styles
}]

function Logo({ onLogoClick }) {
  const { theme } = useTheme();
  return (

    <div className='logo'>
      <Link to='/'>
        <img src={theme === 'dark' ? darkBanner : lightBanner} alt='' className='banner' />
      </Link>
    </div>
  )
}

export default React.memo(Logo);