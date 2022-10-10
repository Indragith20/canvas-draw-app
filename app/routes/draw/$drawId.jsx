import React, { useState, useEffect, useCallback } from 'react';
import { json, redirect } from '@remix-run/node';
import { useLoaderData, useFetcher, useActionData } from '@remix-run/react';
import io from 'socket.io-client';

import { ConfigToolLinks } from '~/components/ConfigTool/ConfigTool';
import MainComponent, { MainComponentStyles } from '~/components/main';
import { SelectToolLinks } from '~/components/SelectTool/SelectTool';
import { TextToolLinks } from '~/components/TextTool/TextTool';
import { ZoomContainerLinks } from '~/components/ZoomContainer/ZoomContainer';
import styles from '../../styles/styles.css';
import { SocketProvider } from '~/contexts/socketContext';
import {
  addShape,
  deleteShape,
  getInitialDrawData,
  getUser,
} from '../../../server/db';
import Idb from '~/components/utils/idb';
import { requireAuth } from '../../../server/auth';
import { UserActivityLinks } from '~/components/UserActivity/UserActivity';

export const links = () => [
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  ...UserActivityLinks(),
  { rel: 'stylesheet', href: styles },
];

export const loader = async ({ request, params }) => {
  console.log(params);
  const { uid } = await requireAuth(request);
  console.log('uid', uid);
  const userData = await getUser(uid);
  console.log('Errorsssssssss', userData.error);
  if (userData.error) {
    // Not signed in user
    const searchParams = new URLSearchParams([
      ['redirectTo', `/draw/${params.drawId}`],
    ]);
    console.log('Redirectibng to signin');
    return redirect(`/SignUp?${searchParams}`, {
      headers: {
        referrer: `/draw/${params.drawId}`,
      },
    });
  } else {
    let drawData = await getInitialDrawData(params.drawId);
    return json({
      ...drawData,
      currentUser: userData.data,
      roomId: params.drawId,
    });
  }
};

export const action = async ({ request, params }) => {
  const body = await request.formData();
  let actionData = body.get('data');
  let action = body.get('action');
  let data = null;
  if (action === 'add') {
    data = await addShape(params.drawId, actionData);
  } else if (action === 'delete') {
    console.log('delete action called');
    data = await deleteShape(params.drawId, actionData);
  }

  return json({ data, action });
};

function DrawIndex() {
  const fetcher = useFetcher();
  const { currentUser, shapes, users, roomId } = useLoaderData();
  let { id, name } = currentUser;
  const actionData = useActionData();

  console.log(shapes, users, currentUser, roomId);
  console.log(actionData);

  const [socket, setSocket] = useState();

  useEffect(() => {
    const socket = io();
    setSocket(socket);
    socket.emit('event', 'conenction success');

    function onConfirm() {
      socket.emit('setliveuser', {
        roomId: roomId,
        userDetails: { id, name, isActive: true },
      });
    }

    socket.on('confirmation', onConfirm);

    return () => {
      socket.off('confirmation', onConfirm);
      socket.close();
    };
  }, [roomId, id, name]);

  // useEffect(() => {
  //   if (!socket) {
  //     return;
  //   }

  //   function onConfirm() {
  //     socket.emit('setliveuser', { roomId: roomId, userDetails: currentUser });
  //   }

  //   socket.on('confirmation', onConfirm);

  //   return () => {
  //     socket.off('confirmation', onConfirm);
  //   };
  // }, [socket, currentUser, roomId]);

  const updateShape = useCallback(
    (shape, action = 'add') => {
      let formData = new FormData();
      formData.set('data', JSON.stringify({ ...shape }));
      formData.set('action', action);
      const data = fetcher.submit(formData, { method: 'post' });
      console.log('fetcher data', data);
      socket.emit('updateshape', { user: currentUser, roomId, shape, action });
    },
    [fetcher, socket, currentUser, roomId]
  );

  const onMouseMove = useCallback(
    (eventDetails) => {
      socket.emit('mousemove', { ...eventDetails, user: currentUser, roomId });
    },
    [socket, currentUser, roomId]
  );

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <SocketProvider socket={socket}>
        <MainComponent
          shapes={shapes}
          mouseMove={onMouseMove}
          updateShape={updateShape}
          updateDb={Idb.updateDb}
        />
      </SocketProvider>
    </div>
  );
}

export default React.memo(DrawIndex);
