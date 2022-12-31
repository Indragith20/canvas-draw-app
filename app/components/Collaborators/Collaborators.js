import { useLoaderData } from '@remix-run/react';
import React from 'react';
import styles from './Collaborators.css';
import PopOver from '../Common/Popover/PopOver';
import DisabledDiv from '../Common/DisabledDiv/DisabledDiv';

export const CollaboratorsLinks = () => ([
  { rel: 'stylesheet', href: styles }
])

function Collaborators() {
  const { users, currentUser } = useLoaderData();
  if (!currentUser) {
    return (
      <DisabledDiv><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></DisabledDiv>
    );
  }

  return (
    <div>
      <PopOver position='right'>
        <PopOver.TriggerNode>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </PopOver.TriggerNode>
        <PopOver.Content>
          <ul className='actions-list'>
            {
              users.map(user => {
                return (
                  <li key={user.id} className='actions-list-item'>
                    <span className='avatar'>{user.name.split('')[0].toUpperCase()}</span>
                    {user.id === currentUser.id ? 'You' : user.name}
                  </li>
                )
              })
            }
          </ul>
        </PopOver.Content>

      </PopOver>
    </div>
  )
}

export default React.memo(Collaborators);