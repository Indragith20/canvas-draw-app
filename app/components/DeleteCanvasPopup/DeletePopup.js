import { useFetcher, useTransition } from '@remix-run/react';
import React, { useEffect } from 'react';
import Modal from '../Common/Modal/Modal';
import { useToast } from '../Common/Toast/ToastContext';
import styles from './DeletePopup.css';

export const DeletePopupLinks = () => (
  [
    { rel: 'stylesheet', href: styles }
  ]
);

function DeletePopup({ showDeletePopup, onCancel, deleteCanvas }) {
  const { submit, data } = useFetcher();
  const { addToast } = useToast();


  function onDelete() {
    let formData = new FormData();
    formData.set('action', 'deleteAll');
    submit(formData, { method: 'post' });
  }



  useEffect(() => {
    if (data && data.action === 'deleteAll') {
      let { actionData } = data;
      if (actionData && actionData.message === 'success') {
        addToast({ message: 'Canvas Deleted Successfully', timeout: 5000 })
        deleteCanvas();
      }
    }
  }, [data, addToast, deleteCanvas])
  return (
    <Modal show={showDeletePopup} close={onCancel}>
      <Modal.Header needCloseIcon={true}>
        Confirmation
      </Modal.Header>
      <Modal.Content>
        <span className='delete-msg'>Are You sure you want to delete this canvas ?</span>
      </Modal.Content>
      <Modal.Footer>
        <div className='delete-footer'>
          <button className='btn cancel-delete-btn' onClick={onCancel}>Cancel</button>
          <button className='btn delete-btn' onClick={onDelete}>Delete</button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default React.memo(DeletePopup);