import React from 'react';
import Modal from '../Common/Modal/Modal';
import styles from './DeleteRoom.css';


export const DeleteRoomLinks = () => ([
  { rel: 'stylesheet', href: styles }
])


function DeleteRoom({ showPopup, onCancel, onDeleteRoom, transitionState }) {
  return (
    <Modal show={showPopup} close={onCancel}>
      <Modal.Header needCloseIcon={true}>Confirmation</Modal.Header>
      <Modal.Content>
        <span className='delete-msg'>
          Are You sure you want to delete this Room ?
        </span>
      </Modal.Content>
      <Modal.Footer>
        <div className='delete-footer'>
          <button className='btn cancel-delete-btn' onClick={onCancel}>
            Cancel
          </button>
          <button className='btn delete-btn' onClick={onDeleteRoom}>
            {transitionState === 'submitting' ? 'Deleting...' : 'Delete Room'}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteRoom;