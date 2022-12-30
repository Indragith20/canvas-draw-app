import React from 'react';
import styles from './ValidationMessage.css';

export const ValidationMessageLinks = () => ([
  { rel: 'stylesheet', href: styles }
])

function ValidationMessage({ isSubmitting, error, success }) {
  return (
    <>
      {
        error ? (<div className='error-container'>{error}</div>) : null
      }
      {
        success ? (<div className='success-container'>{success}</div>) : null
      }
    </>

  )
}

ValidationMessage.defaultProps = {
  error: null,
  success: null
}

export default ValidationMessage;