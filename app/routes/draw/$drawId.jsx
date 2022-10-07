import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { json, redirect } from '@remix-run/node';
import {
  useLoaderData,
  useFetcher,
  useTransition,
  useActionData,
} from '@remix-run/react';
import io from 'socket.io-client';

import { ConfigToolLinks } from '~/components/ConfigTool/ConfigTool';
import MainComponent, { MainComponentStyles } from '~/components/main';
import { SelectToolLinks } from '~/components/SelectTool/SelectTool';
import { TextToolLinks } from '~/components/TextTool/TextTool';
import { ZoomContainerLinks } from '~/components/ZoomContainer/ZoomContainer';
import { handleDataRequest } from '~/entry.server';
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

export const links = () => [
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  { rel: 'stylesheet', href: styles },
];

export const loader = async ({ request, params }) => {
  console.log(params);
  const { displayName, uid } = await requireAuth(request);
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

  return json({ data });
};

function DrawIndex() {
  const fetcher = useFetcher();
  const { currentUser, shapes, users, roomId } = useLoaderData();
  // const actionData = useActionData();

  console.log(shapes, users, currentUser, roomId);
  // console.log(actionData);

  console.log('render called');
  const [socket, setSocket] = useState();

  useEffect(() => {
    const socket = io();
    setSocket(socket);
    socket.emit('event', 'conenction success');

    return () => {
      socket.close();
    };
  }, [roomId, currentUser]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    function onConfirm() {
      socket.emit('setliveuser', { roomId: roomId, userDetails: currentUser });
    }

    function onMouseMove(data) {
      console.log(data);
    }

    socket.on('confirmation', onConfirm);
    socket.on('mousemove', onMouseMove);

    return () => {
      socket.off('confirmation', onConfirm);
      socket.off('mousemove', onMouseMove);
    };
  }, [socket, currentUser, roomId]);

  const updateShape = useCallback(
    (shape, action = 'add') => {
      let formData = new FormData();
      formData.set('data', JSON.stringify({ ...shape }));
      formData.set('action', action);
      fetcher.submit(formData, { method: 'post' });
    },
    [fetcher]
  );

  const onMouseMove = useCallback(
    (eventDetails) => {
      socket.emit('mousemove', eventDetails);
    },
    [socket]
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
