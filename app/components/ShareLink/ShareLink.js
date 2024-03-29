import React from 'react';
import Modal from '../Common/Modal/Modal';
import { useToast } from '../Common/Toast/ToastContext';
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
    <Modal show={showShareLink} close={onCancel}>
      <Modal.Header needCloseIcon={true} >
        Sharable Link
      </Modal.Header>
      <Modal.Content>
        <div className='main-container' onClick={copyLink}>
          <div className='link-container'>
            <span className='link-text'>{link}</span>

          </div>
          <div className='icon-container'>
            <svg xmlns="http://www.w3.org/2000/svg" className='icon-style' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>
            <button className='share-btn'>Copy Link</button>
          </div>

        </div>

      </Modal.Content>
    </Modal>
  )
}


export default React.memo(ShareLink);