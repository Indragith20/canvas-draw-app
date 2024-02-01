import React, { useState, useEffect, useCallback } from 'react';
import { json, redirect } from '@remix-run/node';

import { useLoaderData, useFetcher, Link, useActionData } from '@remix-run/react';

import io from 'socket.io-client';
import ErrorBoundaryStyles from '../styles/errorBoundary.css';

import { ConfigToolLinks } from '~/components/ConfigTool/ConfigTool';
import MainComponent, { MainComponentStyles } from '~/components/main-revamped';
import { SelectToolLinks } from '~/components/SelectTool/SelectTool';
import { TextToolLinks } from '~/components/TextTool/TextTool';
import { ZoomContainerLinks } from '~/components/ZoomContainer/ZoomContainer';
import styles from '../styles/styles.css';
import { SocketProvider } from '~/contexts/socketContext';
import {
  addShape,
  deleteAllShapes,
  deleteShape,
  getInitialDrawData,
  getUser,
  updateShape,
  updateUser
} from '../../server/db';
import { Idb } from '~/components/utils/idb';
import { requireAuth } from '../../server/auth';
import { UserActivityLinks } from '~/components/UserActivity/UserActivity';
import Header, { HeaderStyleLinks } from '~/components/MainHeader/Header';
import { useTheme } from '~/contexts/themeContext';
import { LogoLinks } from '~/components/MainHeader/Logo';
import { ThemeSwitcherLinks } from '~/components/MainHeader/ThemeSwitcher';
import { ModalLinks } from '~/components/Common/Modal/Modal';
import { isTouchDevice } from '~/components/utils/common';
import { PopOverLinks } from '~/components/Common/Popover/PopOver';
import useEventListener from '~/components/Common/hooks/useEventListener';
import { useToast } from '~/components/Common/Toast/ToastContext';

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
  { rel: 'stylesheet', href: ErrorBoundaryStyles },
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

  try {
    if (action === 'add') {
      data = await addShape(params.drawId, actionData);
    } else if (action === 'delete') {
      data = await deleteShape(params.drawId, actionData);
    } else if (action === 'update') {
      data = await updateShape(params.drawId, actionData);
    } else if (action === 'deleteAll') {
      data = await deleteAllShapes(params.drawId);
    } else if (action === 'changePreference') {
      let preference = {};
      preference[body.get('preference')] = body.get('changedPreference');
      data = await updateUser(preference, body.get('userId'));
    }
    return json({ actionData: data, action, error: null });
  } catch (err) {
    return json({ action,  error: err })
  }
  

  
};

export function ErrorBoundary() {
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
  const actionData = useActionData();
  const { addToast } = useToast()
  const isMobile = isTouchDevice();
  const { currentUser, shapes, roomId } = useLoaderData();
  let { id, name, darkMode, lastSelected } = currentUser;
  const { theme, updateTheme } = useTheme();

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


  useEffect(() => {
    updateTheme(darkMode === 'true' ? 'dark' : 'light');
  }, [darkMode, updateTheme]);

  useEffect(() => {
    if (actionData && actionData.error) {
      addToast({ message: `Something Bad Happened. Please Reload the page` })
    }
  }, [actionData, addToast]);

  const updateShape = useCallback(
    (shape, action = 'add') => {
      let formData = new FormData();
      formData.set('data', JSON.stringify({ ...shape }));
      formData.set('action', action);
      submit(formData, { method: 'POST' });
      if (!socket) {
        return;
      }
      socket.emit('updateshape', { user: currentUser, roomId, shape, action });
    },
    [submit, socket, currentUser, roomId]
  );

  const onMouseMove = useCallback(
    (eventDetails) => {
      if (!socket) {
        return;
      }
      socket.emit('mousemove', {
        ...eventDetails,
        user: currentUser,
        roomId
      });
    },
    [socket, currentUser, roomId]
  );

  const onChangePreference = useCallback((e, preference) => {
    localStorage.setItem(preference, e.target.checked);
  }, []);

  function onVisibilityChange() {
    if (!socket) {
      return;
    }
    if (document.visibilityState === 'visible') {
      socket.emit('setliveuser', {
        roomId: roomId,
        userDetails: { id, name, isActive: true }
      });
    } else {
      socket.emit('removeliveuser', {
        roomId: roomId,
        userDetails: { id, name, isActive: false }
      });
    }
  }

  useEventListener('visibilitychange', onVisibilityChange)

  return (
    <div>
      <SocketProvider socket={socket}>
        <MainComponent
          roomId={roomId}
          shapes={shapes}
          mouseMove={onMouseMove}
          updateShape={updateShape}
          updateDb={Idb.updateDb}
          selectedTheme={theme}
          isMobile={isMobile}
          backLink={'/rooms'}
          keepLastSelected={lastSelected === 'true'}
          onChangePreference={onChangePreference}
        />
        {/* <MobileWarning backLink='/rooms' backLinkText='Back To Rooms' /> */}
      </SocketProvider>
    </div>
  );
}

export default React.memo(DrawIndex);
