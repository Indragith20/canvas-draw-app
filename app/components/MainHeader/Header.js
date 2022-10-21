import React from 'react';
import { Link } from '@remix-run/react';
import styles from './Header.css';
import banner from '../../assets/drawCrop.webp';

export const HeaderStyleLinks = () => [{ rel: 'stylesheet', href: styles }];

function Header() {
  return (
    <header className='main-header'>
      <div className='logo'>
        <img src={banner} alt='' className='banner' />
      </div>

      <div className='main-header-link'>
        <Link to='/SignUp'>About</Link>
      </div>
      <div className='main-header-link'>
        <Link to='/SignUp'>SignUp</Link>
      </div>
      <div className='main-header-link'>
        <Link to='/SignUp'>Help</Link>
      </div>
    </header>
  )
}


export default Header;