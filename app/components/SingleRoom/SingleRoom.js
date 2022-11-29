import { Link } from '@remix-run/react';
import React, { useState } from 'react';
import PopOver from '../Common/Popover/PopOver';
import { formatDate } from '../utils/formatDate';
import styles from './SingleRoom.css';


export function RoomLinks() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function SingleRoom({ id, roomName, createdAt, createdBy }) {
  return (

    <div className='room'>
      <div className='additional-actions'>
        {/* Created At {createdAt} */}

        <PopOver position='right'>
          <PopOver.TriggerNode>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
          </PopOver.TriggerNode>
          <PopOver.Content>
            <ul className='actions-list'>
              <li className='actions-list-item'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <span>View Collaborators</span>
              </li>
              <li className='actions-list-item'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                <span>Delete</span>
              </li>
            </ul>
          </PopOver.Content>

        </PopOver>
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