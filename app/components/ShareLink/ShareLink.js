import React from 'react';
import Modal from '../Modal/Modal';
import { useToast } from '../Toast/ToastContext';
import styles from './ShareLink.css';

export const ShareLinks = () => (
  [
    { href: styles, rel: 'stylesheet' }
  ]
)

function ShareLink({ showShareLink, onCancel }) {
  let { addToast } = useToast();
  if (typeof window === "undefined") {
    return null;
  }
  let link = window.location.href;


  function copyLink() {
    navigator.clipboard.writeText(link);
    addToast({ message: 'Link Copied', timeout: 5000 })
    onCancel();
  }

  return (
    <Modal show={showShareLink}>
      <Modal.Header needCloseIcon={true} close={onCancel}>
        Sharable Link
      </Modal.Header>
      <Modal.Content>
        <div className='main-container' onClick={copyLink}>
          <div className='link-container'>
            <span>{link}</span>

          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>
        </div>

      </Modal.Content>
    </Modal>
  )
}


export default React.memo(ShareLink);