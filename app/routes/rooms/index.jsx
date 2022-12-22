import React, { useEffect, useState } from 'react';
import { useActionData, useFetcher, useOutletContext } from '@remix-run/react';

import SingleRoom, { RoomLinks } from '../../components/SingleRoom/SingleRoom';
import styles from '~/styles/room.css';
import { deleteRoom } from 'server/db';
import { json } from '@remix-run/node';
import Modal, { ModalLinks } from '~/components/Common/Modal/Modal';
import { useToast } from '~/components/Common/Toast/ToastContext';

export const links = () => [
  ...RoomLinks(),
  ...ModalLinks(),
  { rel: 'stylesheet', href: styles }
];

export async function action({ request }) {
  const body = await request.formData();
  let action = body.get('action');
  let userId = body.get('userId');
  let roomId = body.get('roomId');
  let data = null;
  if (action === 'deleteRoom') {
    try {
      data = await deleteRoom(userId, roomId);
      console.log('Room Deleted Successfully');
    } catch (err) {
      console.log('Room Not Deleted', err);
      return json({ actionData: err });
    }
  }

  console.log('actionData', data);
  return json({ actionData: data, action });
}

export default function RoomsList() {
  let userData = useOutletContext();
  const { addToast } = useToast();
  let [deleteRoom, setDeleteRoom] = useState({
    roomId: null,
    showConfirmPopup: false
  });
  let { submit, data, state } = useFetcher();
  let action = useActionData();

  console.log('ActionResult', action);

  function onDeleteRoom() {
    if (deleteRoom.roomId) {
      let formData = new FormData();

      formData.set('roomId', deleteRoom.roomId);
      formData.set('userId', userData.id);
      formData.set('action', 'deleteRoom');
      submit(formData, { method: 'post' });
    }
  }

  function showPopUp(roomId) {
    setDeleteRoom({ roomId, showConfirmPopup: true });
  }

  useEffect(() => {
    if (data && data.action === 'deleteRoom') {
      let { actionData } = data;
      if (actionData && actionData.message === 'success') {
        addToast({ message: 'Room Deleted Successfully', timeout: 5000 });
        setDeleteRoom({ roomId: null, showConfirmPopup: false });
      }
    }
  }, [data, addToast]);

  function onCancel() {
    setDeleteRoom({ roomId: null, showConfirmPopup: false });
  }
  return (
    <div className='main-container'>
      <span className='room-header'>List of Rooms</span>
      <div className='roomContainer'>
        {userData.rooms.map((room) => {
          return (
            <SingleRoom key={room.id} {...room} onDeleteRoom={showPopUp} />
          );
        })}
      </div>
      <Modal show={deleteRoom.showConfirmPopup} close={onCancel}>
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
              {state === 'submitting' ? 'Deleting...' : 'Delete Room'}
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
