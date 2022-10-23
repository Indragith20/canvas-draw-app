import { useOutletContext } from '@remix-run/react';
import React from 'react';
import SingleRoom, { RoomLinks } from '../../components/SingleRoom/SingleRoom';
import styles from '~/styles/room.css';

export const links = () => [
  ...RoomLinks(),
  { rel: 'stylesheet', href: styles }
];

export default function RoomsList() {
  let userData = useOutletContext();
  return (
    <div className='main-container'>
      <span className='room-header'>List of Rooms</span>
      <div className='roomContainer'>
        {userData.rooms.map((room) => {
          return <SingleRoom key={room.id} {...room} />;
        })}
      </div>
    </div>
  );
}
