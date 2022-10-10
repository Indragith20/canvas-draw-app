import React from 'react';

function ValidationMessage({ isSubmitting, error }) {
  return (
    <div>{error}</div>
  )
}

export default ValidationMessage;