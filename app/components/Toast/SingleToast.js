import React, { useEffect, useRef } from 'react';
import styles from './Toast.css';


export const ToastStyleLinks = () => ([
  { rel: 'stylesheet', href: styles }
])

function Toast({ message = 'Sucess Message', timeout = 5000, type, onDismiss, id }) {
  let timer = useRef(null);
  let toastRef = useRef(null);

  function afterTransition(element) {
    return new Promise(resolve => {
      console.log(element)
      console.log(getComputedStyle(element)
        .animationDuration);
      const duration = Number(
        getComputedStyle(element)
          .animationDuration
          .replace('s', '')
          .replace('m', '')
      ) * 1000;

      console.log('Duration ', duration);

      setTimeout(() => {
        resolve();
      }, duration);
    });
  }

  useEffect(() => {
    if (timeout !== Infinity) {
      timer.current = setTimeout(() => {
        toastRef.current.classList.add('exit-animation');
        requestAnimationFrame(() => {
          afterTransition(toastRef.current).then(() => {
            onDismiss(id)
          })
        })


      }, timeout);
    }

    return () => {
      timer.current && clearTimeout(timer.current);
    }
  }, [timeout, id, onDismiss]);

  function onClose() {
    clearTimeout(timer.current);
    toastRef.current.classList.add('exit-animation');
    requestAnimationFrame(() => {
      afterTransition(toastRef.current).then(() => {
        onDismiss(id)
      })
    })

  }

  return (
    <div className={`single-toast enter-animation`} ref={toastRef}>
      <div className='main-toast'>
        <span>{message}</span>
        <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </div>

    </div>
  );
}

export default React.memo(Toast);