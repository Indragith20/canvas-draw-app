import { Link } from '@remix-run/react';
import React, { useState } from 'react';
import Modal from '../Common/Modal/Modal';
import { isTouchDevice } from '../utils/common';

function MobileWarning({ backLink, backLinkText }) {
  const isMobile = isTouchDevice();
  const [showMobileWarning, setShowMobileWarning] = useState(isMobile);
  return (
    <Modal
      show={showMobileWarning}
      close={() => setShowMobileWarning(false)}
    >
      <Modal.Header needCloseIcon={false}>
        <span className='popup-header'>Warning Message</span>
      </Modal.Header>
      <Modal.Content>
        <div className='content'>
          Please use the desktop version to access the drawing area as the
          Mobile Implementation in progress.
        </div>
      </Modal.Content>
      <Modal.Footer>
        <div className='footer-icons'>
          <Link to={backLink}>
            <button className='back-btn'>{backLinkText}</button>
          </Link>
          <button
            className='proceed-btn'
            onClick={() => setShowMobileWarning(false)}
          >
            Proceed
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default React.memo(MobileWarning);