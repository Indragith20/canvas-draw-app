import React, { useState, useEffect, useCallback } from 'react';
import { json, redirect } from '@remix-run/node';
import { useLoaderData, useFetcher, Link } from '@remix-run/react';
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
  deleteAllShapes,
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
import { ModalLinks } from '~/components/Common/Modal/Modal';
import { isTouchDevice } from '~/components/utils/common';
import { PopOverLinks } from '~/components/Common/Popover/PopOver';
import MobileWarning from '~/components/MobileWarning/MobileWarning';

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
  ...PopOverLinks(),
  { rel: 'stylesheet', href: styles }
];

export const loader = async ({ request, params }) => {
  const { uid } = await requireAuth(request);

  const userData = await getUser(uid);
  if (userData.error) {
    // Not signed in user
    const searchParams = new URLSearchParams([
      ['redirectTo', `/draw/${params.drawId}`]
    ]);
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
    data = await deleteShape(params.drawId, actionData);
  } else if (action === 'update') {
    data = await updateShape(params.drawId, actionData);
  } else if (action === 'deleteAll') {
    data = await deleteAllShapes(params.drawId);
  }

  return json({ actionData: data, action });
};

export function CatchBoundary() {
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
  const { submit } = useFetcher();
  const isMobile = isTouchDevice();
  const { currentUser, shapes, roomId } = useLoaderData();
  let { id, name } = currentUser;
  const { theme } = useTheme();

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

    function removeLiveUser() {
      socket.emit('removeliveuser', {
        roomId: roomId,
        userDetails: { id, name, isActive: false }
      });
    }

    function onVisibilityChange() {
      if (document.visibilityState === 'visible') {
        onConfirm();
      } else {
        removeLiveUser();
      }
    }

    socket.on('confirmation', onConfirm);
    window.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      socket.off('confirmation', onConfirm);
      window.removeEventListener('visibilitychange', onVisibilityChange);
      socket.close();
    };
  }, [roomId, id, name]);

  const updateShape = useCallback(
    (shape, action = 'add') => {
      let formData = new FormData();
      formData.set('data', JSON.stringify({ ...shape }));
      formData.set('action', action);
      submit(formData, { method: 'post' });
      socket.emit('updateshape', { user: currentUser, roomId, shape, action });
    },
    [submit, socket, currentUser, roomId]
  );

  const onMouseMove = useCallback(
    (eventDetails) => {
      socket.emit('mousemove', {
        ...eventDetails,
        user: currentUser,
        roomId
      });
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
          isMobile={isMobile}
          backLink={'/rooms'}
        />
        {/* <MobileWarning backLink='/rooms' backLinkText='Back To Rooms' /> */}
      </SocketProvider>
    </div>
  );
}

export default React.memo(DrawIndex);
