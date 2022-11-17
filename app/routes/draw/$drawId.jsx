import React, { useState, useEffect, useCallback } from 'react';
import { json, redirect } from '@remix-run/node';
import {
  useLoaderData,
  useFetcher,
  useActionData,
  useCatch,
  Link
} from '@remix-run/react';
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
  updateShape
} from '../../../server/db';
import Idb from '~/components/utils/idb';
import { requireAuth } from '../../../server/auth';
import { UserActivityLinks } from '~/components/UserActivity/UserActivity';
import Header, { HeaderStyleLinks } from '~/components/MainHeader/Header';
import { useTheme } from '~/contexts/themeContext';
import { LogoLinks } from '~/components/MainHeader/Logo';
import { ThemeSwitcherLinks } from '~/components/MainHeader/ThemeSwitcher';
import { ModalLinks } from '~/components/Modal/Modal';
import { useToast } from '~/components/Toast/ToastContext';

export const links = () => [
  ...HeaderStyleLinks(),
  ...LogoLinks(),
  ...ThemeSwitcherLinks(),
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  ...UserActivityLinks(),
  ...ModalLinks(),
  { rel: 'stylesheet', href: styles }
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
      ['redirectTo', `/draw/${params.drawId}`]
    ]);
    console.log('Redirectibng to signin');
    return redirect(`/SignUp?${searchParams}`, {
      headers: {
        referrer: `/draw/${params.drawId}`
      }
    });
  } else {
    try {
      let drawData = await getInitialDrawData(params.drawId);
      return json({
        ...drawData,
        currentUser: userData.data,
        roomId: params.drawId
      });
    } catch (err) {
      console.log('Inside Response', err);
      throw new Response('Not Found', {
        status: 404
      });
    }
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
  } else if (action === 'update') {
    console.log('update action called');
    data = await updateShape(params.drawId, actionData);
  }

  return json({ data, action });
};

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <>
      <Header headerLinks={[]} />
      <div className='error-container'>
        <div className='error-page'>
          <span>Requested Url Not Found</span>
          <p>
            Go Back to &nbsp;
            <Link className='join-link' to='/SignUp'>
              Home
            </Link>
            ?
          </p>
          Or
          <p>
            <Link to='/draw/freedraw' className='join-link'>
              Try without Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

function DrawIndex() {
  const fetcher = useFetcher();
  const { currentUser, shapes, users, roomId } = useLoaderData();
  let { id, name } = currentUser;
  const actionData = useActionData();
  const { theme } = useTheme();

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
        userDetails: { id, name, isActive: true }
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
      console.log('update shape called', shape, action);
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
          selectedTheme={theme}
        />
      </SocketProvider>
    </div>
  );
}

export default React.memo(DrawIndex);
