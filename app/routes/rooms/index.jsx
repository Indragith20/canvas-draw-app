import { useActionData, useFetcher, useOutletContext } from '@remix-run/react';
import React from 'react';
import SingleRoom, { RoomLinks } from '../../components/SingleRoom/SingleRoom';
import styles from '~/styles/room.css';
import { deleteRoom } from 'server/db';
import { json } from '@remix-run/node';

export const links = () => [
  ...RoomLinks(),
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
  let { submit } = useFetcher();
  let action = useActionData();

  console.log('ActionResult', action);

  function onDeleteRoom(roomId) {
    let formData = new FormData();
    formData.set('roomId', roomId);
    formData.set('userId', userData.id);
    formData.set('action', 'deleteRoom');
    submit(formData, { method: 'post' });
  }
  return (
    <div className='main-container'>
      <span className='room-header'>List of Rooms</span>
      <div className='roomContainer'>
        {userData.rooms.map((room) => {
          return (
            <SingleRoom key={room.id} {...room} onDeleteRoom={onDeleteRoom} />
          );
        })}
      </div>
    </div>
  );
}
