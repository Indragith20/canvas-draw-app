import { json, redirect } from '@remix-run/node';
import {
  Link,
  Outlet,
  useFetcher,
  useLoaderData,
  useRouteError
} from '@remix-run/react';
import React, { useEffect } from 'react';
import ErrorBoundaryStyles from '../styles/errorBoundary.css';
import Header, { HeaderStyleLinks } from '~/components/MainHeader/Header';
import { LogoLinks } from '~/components/MainHeader/Logo';
import { ThemeSwitcherLinks } from '~/components/MainHeader/ThemeSwitcher';
import { ModalLinks } from '~/components/Common/Modal/Modal';
import { requireAuth } from '../../server/auth';
import { getRoomDetails, getUser, updateUser } from '../../server/db';
import { PopOverLinks } from '~/components/Common/Popover/PopOver';
import { useTheme } from '~/contexts/themeContext';

export const links = () => [
  ...HeaderStyleLinks(),
  ...LogoLinks(),
  ...ModalLinks(),
  ...PopOverLinks(),
  ...ThemeSwitcherLinks(),
  { rel: 'stylesheet', href: ErrorBoundaryStyles }
];

export async function loader({ request }) {
  const { uid } = await requireAuth(request);
  const userData = await getUser(uid);
  if (userData.error) {
    return redirect('/');
  } else {
    let roomIds = userData.data.rooms;

    if (roomIds && roomIds.length > 0) {
      let promises = [];
      roomIds.forEach((id) => {
        promises.push(getRoomDetails(id));
      });
      let roomData = await Promise.all(promises);
      let filteredRooms = roomData.filter((room) => {
        if (room.id) {
          return room;
        } else {
          return null;
        }
      });
      return json({ ...userData.data, rooms: filteredRooms });
    } else {
      return json({ ...userData.data, rooms: [] });
    }
  }
}

export async function action({ request }) {
  const body = await request.formData();
  let action = body.get('action');
  let userId = body.get('userId');
  let draw = {};
  if (action === 'changePreference') {
    let preference = {};
    preference[body.get('preference')] = body.get('changedPreference');
    draw = await updateUser(preference, userId);
  }

  return json({ draw });
}

const MainRoomLinks = [
  {
    link: '/rooms/createRoom',
    text: 'Create Room'
  },
  {
    link: '/rooms/enterRoom',
    text: 'Enter Room'
  },
  {
    link: '/rooms',
    text: 'Room List'
  },
  {
    link: '/rooms/userProfile',
    text: 'Profile'
  }
];

function Rooms() {
  const data = useLoaderData();
  const { theme, updateTheme } = useTheme();
  const { submit } = useFetcher();
  const { id } = data;

  useEffect(() => {
    let formData = new FormData();
    formData.set('preference', 'darkMode');
    formData.set('changedPreference', theme === 'dark' ? 'true' : 'false');
    formData.set('userId', id);
    formData.set('action', 'changePreference');
    submit(formData, { method: 'POST' });
  }, [theme, id, submit]);

  useEffect(() => {
    updateTheme(data.darkMode === 'true' ? 'dark' : 'light');
  }, [data.darkMode, updateTheme]);

  return (
    <>
      <Header headerLinks={MainRoomLinks} isLoggedInUser={true} />
      <Outlet context={data} />
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <Header headerLinks={[]} />
      <div className='error-container'>
        <div className='error-page'>
          <span>Something Bad Happened</span>
          <p>{error?.data}</p>
          <p>
            Go Back to &nbsp;
            <Link className='join-link' to='/rooms'>
              Home
            </Link>
            ?
          </p>
        </div>
      </div>
    </>
  );
}

export default Rooms;
