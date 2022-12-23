import React from 'react';
import styles from './ValidationMessage.css';

export const ValidationMessageLinks = () => ([
  { rel: 'stylesheet', href: styles }
])

function ValidationMessage({ isSubmitting, error }) {
  return (
    <div className='error-container'>{error}</div>
  )
}

export default ValidationMessage;