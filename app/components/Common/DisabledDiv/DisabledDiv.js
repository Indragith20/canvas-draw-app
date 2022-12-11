import React from 'react';

function DisabledDiv({ children }) {
  return (
    <div style={{ opacity: '0.5', cursor: 'not-allowed' }}>
      {children}
    </div>
  )
}

export default DisabledDiv;