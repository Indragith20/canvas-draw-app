import React, { useEffect, useState } from 'react';
import { Link, useFetcher, useOutletContext } from '@remix-run/react';

import SingleRoom, { RoomLinks } from '../components/SingleRoom/SingleRoom';
import styles from '~/styles/room.index.css';
import { deleteRoom, getCollaboratorsList, getRoomDetails } from 'server/db';
import { json } from '@remix-run/node';
import { ModalLinks } from '~/components/Common/Modal/Modal';
import { useToast } from '~/components/Common/Toast/ToastContext';
import DeleteRoom, {
  DeleteRoomLinks
} from '~/components/DeleteRoom/DeleteRoom';

export const links = () => [
  ...RoomLinks(),
  ...ModalLinks(),
  ...DeleteRoomLinks(),
  { rel: 'stylesheet', href: styles }
];

export async function loader({ request, params }) {
  const url = new URL(request.url);
  const roomId = url.searchParams.get('roomId');
  const getApiAction = url.searchParams.get('action');
  if (roomId && getApiAction === 'getRoomDetails') {
    let [roomDetails, data] = await Promise.all([
      getRoomDetails(roomId),
      getCollaboratorsList(roomId)
    ]);
    return json({ ...data, ...roomDetails, action: 'getRoomDetails' });
  }
  return json({ message: 'Success' });
}

export async function action({ request }) {
  const body = await request.formData();
  let action = body.get('action');
  let userId = body.get('userId');
  let roomId = body.get('roomId');
  let data = null;
  if (action === 'deleteRoom') {
    try {
      data = await deleteRoom(userId, roomId);
    } catch (err) {
      return json({ actionData: err });
    }
  }

  return json({ actionData: data, action, roomId });
}

export default function RoomsList() {
  let userData = useOutletContext();
  const { addToast } = useToast();
  let [deleteRoom, setDeleteRoom] = useState({
    roomId: null,
    showConfirmPopup: false
  });
  let { submit, data, state } = useFetcher();

  function onDeleteRoom() {
    if (deleteRoom.roomId) {
      let formData = new FormData();

      formData.set('roomId', deleteRoom.roomId);
      formData.set('userId', userData.id);
      formData.set('action', 'deleteRoom');
      submit(formData, { method: 'POST' });
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
      <span className='room-header'>
        {userData.rooms && userData.rooms.length > 0 ? 'List of Rooms' : null}
      </span>
      <div className='roomContainer'>
        {userData.rooms && userData.rooms.length > 0 ? (
          userData.rooms.map((room) => {
            return (
              <SingleRoom key={room.id} {...room} onDeleteRoom={showPopUp} />
            );
          })
        ) : (
          <div className='empty-room-container'>
            <div className='empty-room'>
              <span className='error-msg'>No Rooms Found</span>
              <Link to='/rooms/createRoom' className='error-link'>
                {' '}
                + Create Room
              </Link>
            </div>
          </div>
        )}
      </div>
      <DeleteRoom
        onCancel={onCancel}
        transitionState={state}
        onDeleteRoom={onDeleteRoom}
        showPopup={deleteRoom.showConfirmPopup}
      />
    </div>
  );
}
