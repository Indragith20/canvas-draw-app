import React, { useEffect, useState } from 'react';
import {
  useFetcher,
  useLoaderData,
  useOutletContext,
  useNavigation
} from '@remix-run/react';

import styles from '~/styles/room.css';
import {
  deleteRoom,
  getCollaboratorsList,
  getRoomDetails,
  updateRoom
} from 'server/db';
import { json } from '@remix-run/node';
import { ModalLinks } from '~/components/Common/Modal/Modal';
import { useToast } from '~/components/Common/Toast/ToastContext';
import DeleteRoom, {
  DeleteRoomLinks
} from '~/components/DeleteRoom/DeleteRoom';

export const links = () => [
  ...ModalLinks(),
  ...DeleteRoomLinks(),
  { rel: 'stylesheet', href: styles }
];

export async function loader({ request, params }) {
  if (params.roomId) {
    console.log('Inside RoomId Loader', params.roomId);
    try {
      let [roomDetails, data] = await Promise.all([
        getRoomDetails(params.roomId),
        getCollaboratorsList(params.roomId)
      ]);
      if (!roomDetails || !roomDetails.id) {
        throw new Error(`Room Does not Exist ${JSON.stringify(roomDetails)}`);
      } else {
        return json({ ...data, ...roomDetails });
      }
    } catch (err) {
      throw new Response(err, {
        status: 404
      });
    }
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
  } else if (action === 'changeRoomName') {
    try {
      const room = { roomName: body.get('roomName') };
      data = await updateRoom(roomId, room);
    } catch (err) {
      return json({ actionData: err });
    }
  }

  return json({ actionData: data, action, roomId });
}

export default function RoomsDetailContainer() {
  let userData = useOutletContext();
  const loaderData = useLoaderData();
  const transition = useNavigation();
  console.log(loaderData);
  const { addToast } = useToast();
  let [deleteRoom, setDeleteRoom] = useState({
    roomId: null,
    showConfirmPopup: false
  });
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  let { submit, data, state } = useFetcher();

  function onCancel() {
    setDeleteRoom({ roomId: null, showConfirmPopup: false });
  }

  function onDeleteRoom() {
    if (deleteRoom.roomId) {
      let formData = new FormData();

      formData.set('roomId', deleteRoom.roomId);
      formData.set('userId', userData.id);
      formData.set('action', 'deleteRoom');
      submit(formData, { method: 'POST' });
    }
  }

  function onChangeRoomName() {
    if (inputValue !== '') {
      let formData = new FormData();

      formData.set('roomId', loaderData.id);
      formData.set('userId', userData.id);
      formData.set('roomName', inputValue);
      formData.set('action', 'changeRoomName');
      submit(formData, { method: 'POST' });
    }
  }

  useEffect(() => {
    if (data && data.action === 'deleteRoom') {
      let { actionData } = data;
      if (actionData && actionData.message === 'success') {
        addToast({ message: 'Room Deleted Successfully', timeout: 5000 });
        setDeleteRoom({ roomId: null, showConfirmPopup: false });
      }
    } else if (data && data.action === 'changeRoomName') {
      let { actionData } = data;
      if (actionData && actionData.message === 'success') {
        setEditMode(false);
      }
    }
  }, [data, addToast]);

  return (
    <div className='room-detail-container'>
      <span className='room-header'>Room Details</span>
      <div className='content'>
        <div className='secondary-content'>
          <div className='secondary-heading'>Room Name</div>
          <div className='secondary-details'>
            <div className='room-container'>
              {editMode ? (
                <>
                  <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className='room-edit-box'
                    autoFocus={true}
                    disabled={state === 'submitting'}
                  />
                  {state === 'submitting' ? (
                    <span>Updating room Name</span>
                  ) : (
                    <>
                      <svg
                        onClick={onChangeRoomName}
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='var(--success-color)'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-check'
                      >
                        <polyline points='20 6 9 17 4 12'></polyline>
                      </svg>
                      <svg
                        onClick={() => {
                          setEditMode(false);
                        }}
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='var(--failure-color)'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-x'
                      >
                        <line x1='18' x2='6' y1='6' y2='18'></line>
                        <line x1='6' x2='18' y1='6' y2='18'></line>
                      </svg>
                    </>
                  )}
                </>
              ) : (
                <>
                  <span className=''>{loaderData?.roomName}</span>
                  <svg
                    onClick={() => {
                      setEditMode(true);
                      setInputValue(loaderData.roomName);
                    }}
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-edit'
                  >
                    <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
                    <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
                  </svg>
                </>
              )}
            </div>
          </div>
        </div>

        <div className='secondary-content'>
          <div className='secondary-heading'>Collaborators</div>
          <div className='secondary-details'>
            {loaderData?.collaborators && transition.state !== 'loading' ? (
              loaderData.collaborators.map((collaborator) => {
                return (
                  <li key={collaborator.id} className='collaborator-item'>
                    <span className='avatar'>
                      {collaborator.name.split('')[0].toUpperCase()}
                    </span>
                    {collaborator.name}
                  </li>
                );
              })
            ) : (
              <>Loading Collaborators...</>
            )}
          </div>
        </div>
      </div>
      <div className='room-footer'>
        <button>Delete Room</button>
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
