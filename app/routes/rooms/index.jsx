import React, { useEffect, useState } from 'react';
import {
  useActionData,
  useFetcher,
  useLoaderData,
  useOutletContext
} from '@remix-run/react';

import SingleRoom, { RoomLinks } from '../../components/SingleRoom/SingleRoom';
import styles from '~/styles/room.css';
import { deleteRoom, getCollaboratorsList } from 'server/db';
import { json } from '@remix-run/node';
import Modal, { ModalLinks } from '~/components/Common/Modal/Modal';
import { useToast } from '~/components/Common/Toast/ToastContext';
import DeleteRoom, {
  DeleteRoomLinks
} from '~/components/DeleteRoom/DeleteRoom';
import CollaboratorListPopup, {
  CollaboratorsListPopupLinks
} from '~/components/CollaboratorListPopup/CollaboratorListPopup';

export const links = () => [
  ...RoomLinks(),
  ...ModalLinks(),
  ...DeleteRoomLinks(),
  ...CollaboratorsListPopupLinks(),
  { rel: 'stylesheet', href: styles }
];

export async function loader({ request, params }) {
  const url = new URL(request.url);
  const roomId = url.searchParams.get('roomId');
  const getApiAction = url.searchParams.get('action');
  if (roomId && getApiAction === 'getCollaborator') {
    let data = await getCollaboratorsList(roomId);
    return json({ ...data, action: 'getCollaborator' });
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
  let [collaborators, setCollaborators] = useState({
    showPopup: false,
    list: []
  });
  let { submit, data, state, load } = useFetcher();
  console.log(data);
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
    console.log('action data changes', data);
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

  function showCollaborators(roomId) {
    setCollaborators({ showPopup: true, list: [] });
    // let formData = new FormData();

    // formData.set('roomId', roomId);
    // formData.set('userId', userData.id);
    // formData.set('action', 'getCollaborator');
    // submit(formData, { method: 'post' });
    let data = load(`/rooms?roomId=${roomId}&action=getCollaborator&index`);
  }

  function hideCollaborators() {
    setCollaborators({ showPopup: false, list: [] });
  }

  return (
    <div className='main-container'>
      <span className='room-header'>List of Rooms</span>
      <div className='roomContainer'>
        {userData.rooms.map((room) => {
          return (
            <SingleRoom
              key={room.id}
              {...room}
              onDeleteRoom={showPopUp}
              showCollaborators={showCollaborators}
            />
          );
        })}
      </div>
      <DeleteRoom
        onCancel={onCancel}
        transitionState={state}
        onDeleteRoom={onDeleteRoom}
        showPopup={deleteRoom.showConfirmPopup}
      />
      <CollaboratorListPopup
        showPopup={collaborators.showPopup}
        onCancel={hideCollaborators}
        transitionState={state}
        collaboratorList={data && data.collaborators ? data.collaborators : []}
      />
    </div>
  );
}
