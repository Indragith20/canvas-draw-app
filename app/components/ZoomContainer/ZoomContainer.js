import React from 'react';
import styles from './ZoomContainer.css';

export function ZoomContainerLinks() {
  return [{ rel: 'stylesheet', href: styles }];
}

function ZoomContainer({ zoomRange, zoomIn, zoomOut }) {
  return (
    <div className='zoomContainer'>
      <span id='minus' className='zoom-sign' onClick={zoomIn}>
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
          <line x1='5' y1='12' x2='19' y2='12'></line>
        </svg>
      </span>
      <span id='zoomRange' className='zoom-range'>
        {Math.floor(zoomRange * 100)}
      </span>
      <span id='plus' className='zoom-sign' onClick={zoomOut}>
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
          <line x1='12' y1='5' x2='12' y2='19'></line>
          <line x1='5' y1='12' x2='19' y2='12'></line>
        </svg>
      </span>
    </div>
  );
}

export default ZoomContainer;
