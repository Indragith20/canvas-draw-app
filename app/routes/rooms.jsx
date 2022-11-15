import { json, redirect } from '@remix-run/node';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import React from 'react';
import Header, { HeaderStyleLinks } from '~/components/MainHeader/Header';
import { LogoLinks } from '~/components/MainHeader/Logo';
import { ThemeSwitcherLinks } from '~/components/MainHeader/ThemeSwitcher';
import { ModalLinks } from '~/components/Modal/Modal';
import { requireAuth } from '../../server/auth';
import { getRoomDetails, getUser } from '../../server/db';

export const links = () => [
  ...HeaderStyleLinks(),
  ...LogoLinks(),
  ...ModalLinks(),
  ...ThemeSwitcherLinks()
];

export async function loader({ request }) {
  const { displayName, uid } = await requireAuth(request);
  console.log('uid', uid);
  const userData = await getUser(uid);
  console.log('Error', userData.error);
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
      return json({ ...userData.data, rooms: roomData });
    } else {
      return json({ ...userData.data, rooms: [] });
    }
  }
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
  }
];

function Rooms() {
  const data = useLoaderData();
  console.log('Isndie Rooms', data);
  return (
    <>
      <Header headerLinks={MainRoomLinks} />
      <Outlet context={data} />
    </>
  );
}

export default Rooms;
