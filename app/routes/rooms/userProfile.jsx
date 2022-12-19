import React, { useState } from 'react';
import { useActionData, useFetcher, useOutletContext } from '@remix-run/react';
import styles from '../../styles/form.css';
import userProfileStyles from '../../styles/userProfile.css';
import UserImage from '../../assets/user.png';
import ValidationMessage from '~/components/ValidationMessage/ValidationMessage';

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  },
  {
    rel: 'stylesheet',
    href: userProfileStyles
  }
];
export default function Profile() {
  const userData = useOutletContext();
  const actionData = useActionData();
  const [name, setName] = useState(userData.name);
  const [editMode, setEditMode] = useState(false);
  const fetcher = useFetcher();

  console.log('user', userData);

  function onClickSubmit() {
    let formData = new FormData();
    formData.set('userName', userData.name);
    formData.set('userId', userData.id);
    formData.set('roomName', name);
    fetcher.submit(formData, { method: 'post' });
  }

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  return (
    <div className='form-main-container'>
      <div className='card'>
        <div className='card-heading'>Profile</div>
        <div className='card-content'>
          <div className='row'>
            <span className='label'>CONTACT NAME</span>
            <span className='main-text'>
              {editMode ? (
                <input
                  name='name'
                  type='text'
                  className={`input ${
                    fetcher?.data?.error ? 'form-error' : ''
                  }`}
                  value={name}
                  defaultValue={actionData ? actionData.values.name : undefined}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                userData.name
              )}
            </span>
          </div>
          <div className='row'>
            <span className='label'>CONTACT EMAIL</span>
            <span className='main-text'>{userData.email}</span>
          </div>
        </div>
        <div className='card-footer'>
          {editMode ? (
            <button className='btn success-btn' onClick={toggleEditMode}>
              Save Changes
            </button>
          ) : (
            <button className='btn success-btn' onClick={toggleEditMode}>
              Edit
            </button>
          )}
          <button className='btn delete-btn'>Delete Account</button>
        </div>
      </div>
    </div>
  );
}
