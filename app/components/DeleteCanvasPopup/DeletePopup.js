import { useFetcher, useLoaderData } from '@remix-run/react';
import React, { useEffect, useState } from 'react';
import { useSocket } from '~/contexts/socketContext';
import Modal from '../Common/Modal/Modal';
import { useToast } from '../Common/Toast/ToastContext';
import styles from './DeletePopup.css';

export const DeletePopupLinks = () => (
  [
    { rel: 'stylesheet', href: styles }
  ]
);

function DeletePopup({ showDeletePopup, onCancel, deleteCanvas }) {
  const { submit, data = {} } = useFetcher();
  const { addToast } = useToast();
  const socket = useSocket();
  const { currentUser, roomId } = useLoaderData();
  const [submission, setSubmission] = useState(false);
  let { action = '', actionData = {} } = data;
  let { message } = actionData;

  function onDelete() {
    if (!currentUser || !roomId) {
      addToast({ message: 'Canvas Deleted Successfully', timeout: 5000 })
      deleteCanvas();
    } else {
      let formData = new FormData();
      formData.set('action', 'deleteAll');
      submit(formData, { method: 'POST' });
      setSubmission(true);
    }

  }

  useEffect(() => {
    if (action === 'deleteAll' && submission === true) {
      if (message && message === 'success') {
        socket.emit('deleteAllShapes', { user: currentUser, roomId, action: 'deleteAll' })
        addToast({ message: 'Canvas Deleted Successfully',timeout: 5000 })
        deleteCanvas();
      }
      setSubmission(false);

    }
  }, [addToast, socket, deleteCanvas, action, currentUser, submission, message, roomId]);



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