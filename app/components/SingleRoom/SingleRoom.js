import { Link } from '@remix-run/react';
import React from 'react';
import styles from './SingleRoom.css';


export function RoomLinks() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function SingleRoom({ roomId, roomName }) {
  return (
    <Link to={`/draw/${roomId}`} className="room">
      {roomName}
    </Link>
  )
}