import React from 'react';
import styles from './Logo.css';
import { useTheme } from '~/contexts/themeContext';
import darkBanner from '../../assets/draw-dark.webp';
import lightBanner from '../../assets/draw-light.webp';

export const LogoLinks = () => [{
  rel: 'stylesheet',
  href: styles
}]

function Logo() {
  const { theme } = useTheme();
  return (
    <div className='logo'>
      <img src={theme === 'dark' ? darkBanner : lightBanner} alt='' className='banner' />
    </div>
  )
}

export default React.memo(Logo);