import React from 'react';
import SingleToast from './SingleToast';


function ToastContainer({ messages, onDismiss }) {

  if (!messages || messages.length === 0) {
    return null;
  }

  return (
    <div className='toast-container'>
      {
        messages.map(msg => {
          return (
            <SingleToast key={msg.id} id={msg.id} message={msg.message} type={msg.type} timeout={msg.timeout} onDismiss={onDismiss} />
          )
        })
      }
    </div>
  )
}

export default React.memo(ToastContainer);