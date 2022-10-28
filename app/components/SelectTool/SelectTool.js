import React from 'react';
import styles from './SelectTool.css';

export function SelectToolLinks() {
  return [{ rel: 'stylesheet', href: styles }];
}

function SelectTool({ selectedTool, updateTool }) {
  return (
    <div className='selectTool'>
      <span
        className={`tool-icon ${selectedTool === 'select' ? 'selected' : ''}`}
        id='select'
        onClick={updateTool}
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
          <polyline points='5 9 2 12 5 15'></polyline>
          <polyline points='9 5 12 2 15 5'></polyline>
          <polyline points='15 19 12 22 9 19'></polyline>
          <polyline points='19 9 22 12 19 15'></polyline>
          <line x1='2' y1='12' x2='22' y2='12'></line>
          <line x1='12' y1='2' x2='12' y2='22'></line>
        </svg>
      </span>
      <span
        className={`tool-icon ${selectedTool === 'rect' ? 'selected' : ''}`}
        id='rect'
        onClick={updateTool}
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
          <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
        </svg>
      </span>
      <span
        className={`tool-icon ${selectedTool === 'circle' ? 'selected' : ''}`}
        id='circle'
        onClick={updateTool}
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
          <circle cx='12' cy='12' r='10'></circle>
        </svg>
      </span>
      <span
        className={`tool-icon ${selectedTool === 'arrow' ? 'selected' : ''}`}
        id='arrow'
        onClick={updateTool}
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
          <line x1='5' y1='12' x2='19' y2='12'></line>
          <polyline points='12 5 19 12 12 19'></polyline>
        </svg>
      </span>
      <span
        className={`tool-icon ${selectedTool === 'line' ? 'selected' : ''}`}
        id='line'
        onClick={updateTool}
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
          <line x1='5' y1='12' x2='19' y2='12'></line>
        </svg>
      </span>
      <span
        className={`tool-icon ${selectedTool === 'diamond' ? 'selected' : ''}`}
        id='diamond'
        onClick={updateTool}
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
          <rect
            x='12'
            y='1'
            width='15.56'
            height='15.56'
            rx='2.41'
            transform='rotate(45 12 1)'
          ></rect>
        </svg>
      </span>
      <span
        className={`tool-icon ${selectedTool === 'chalk' ? 'selected' : ''}`}
        id='chalk'
        onClick={updateTool}
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
          <line x1='18' y1='2' x2='22' y2='6'></line>
          <path d='M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z'></path>
        </svg>
      </span>
    </div>
  );
}

export default SelectTool;
