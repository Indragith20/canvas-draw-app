import { Link } from '@remix-run/react';
import React from 'react';
import { formatDate } from '../utils/formatDate';
import styles from './SingleRoom.css';


export function RoomLinks() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function SingleRoom({ id, roomName, createdAt, createdBy }) {
  return (

    <div className='room'>
      <div>
        {/* Created At {createdAt} */}
      </div>
      <div className='room-name'>
        <Link to={`/draw/${id}`} className='room-link' replace={true}>
          {roomName}
        </Link>
      </div>

      <div className='room-details'>
        Created on {formatDate(createdAt)} By {createdBy}
      </div>
    </div>
  )
}