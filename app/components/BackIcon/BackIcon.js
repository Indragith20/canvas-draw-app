import { Link } from '@remix-run/react';
import React from 'react';
import styles from './BackIcon.css';

export const BackIconStyles = () => ([
  { href: styles, rel: 'stylesheet' }
])

function BackIcon() {
  return (
    <Link to={`/rooms`} className='room-link' replace={true}>
      <div
        className='back-icon-container'
      >

        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='11 17 6 12 11 7'></polyline>
          <polyline points='18 17 13 12 18 7'></polyline>
        </svg>
        <span>Back</span>

      </div>
    </Link>
  )
}

export default React.memo(BackIcon)