import React, { useMemo, useState } from 'react';
import { useActionData, useFetcher, useOutletContext } from '@remix-run/react';
import styles from '../styles/form.css';
import userProfileStyles from '../styles/userProfile.css';
import { updateUser } from 'server/db';
import { json } from '@remix-run/node';
import { useTheme } from '~/contexts/themeContext';
import DrawBoardPreferences, {
  DrawBoardPreferencesLinks
} from '~/components/DrawBoardPreferences/DrawBoardPreferences';

export const links = () => [
  ...DrawBoardPreferencesLinks(),
  {
    rel: 'stylesheet',
    href: styles
  },
  {
    rel: 'stylesheet',
    href: userProfileStyles
  }
];

export async function action({ request }) {
  const body = await request.formData();
  let action = body.get('action');
  let userId = body.get('userId');
  let preference = {};
  if (action === 'changeName') {
    preference['name'] = body.get('userName');
  } else if (action === 'changePreference') {
    preference[body.get('preference')] = body.get('changedPreference');
  }
  const draw = await updateUser(preference, userId);

  return json({ draw });
}

export default function Profile() {
  const userData = useOutletContext();
  const actionData = useActionData();
  const [name, setName] = useState(userData.name);
  const [lastSelected, setLastSelected] = useState(
    userData.lastSelected === 'true' ? Boolean(userData.lastSelected) : false
  );
  const { theme, updateTheme } = useTheme();
  const [editMode, setEditMode] = useState(false);
  const fetcher = useFetcher();

  function onClickSubmit() {
    let formData = new FormData();
    formData.set('userName', name);
    formData.set('userId', userData.id);
    formData.set('action', 'changeName');
    fetcher.submit(formData, { method: 'POST' });
    toggleEditMode();
  }

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function onChangePreference(e, preference) {
    if (preference === 'keepLastSelected') {
      setLastSelected(e.target.checked);
      let formData = new FormData();
      formData.set('preference', 'lastSelected');
      formData.set('changedPreference', e.target.checked);
      formData.set('userId', userData.id);
      formData.set('action', 'changePreference');
      fetcher.submit(formData, { method: 'post' });
    } else if (preference === 'darkMode') {
      updateTheme();
    }
    //localStorage.setItem(preference, String(e.target.checked));
  }

  const preferences = useMemo(() => {
    return {
      darkMode: {
        type: 'checkbox',
        checked: theme === 'dark',
        displayName: 'Dark Mode'
      },
      keepLastSelected: {
        type: 'checkbox',
        checked: lastSelected,
        displayName: 'Keep last selected tool'
      }
    };
  }, [theme, lastSelected]);

  return (
    <div className='form-main-container'>
      <div className='card-wrapper'>
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
                    defaultValue={
                      actionData ? actionData.values.name : undefined
                    }
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
              <>
                <button className='btn success-btn' onClick={onClickSubmit}>
                  Save Changes
                </button>
                <button className='btn success-btn' onClick={toggleEditMode}>
                  Cancel
                </button>
              </>
            ) : (
              <button className='btn success-btn' onClick={toggleEditMode}>
                Edit
              </button>
            )}
            {/* <button className='btn delete-btn'>Delete Account</button> */}
          </div>
        </div>
        <div className='card'>
          <div className='card-heading'>Draw Board Preferences</div>
          <div className='card-content'>
            <DrawBoardPreferences
              preferences={preferences}
              onChange={onChangePreference}
            />
            {/* <div className='preference-row'>
              <span className='main-checkbox'>
                <input
                  type='checkbox'
                  className='checkbox-style'
                  checked={lastSelected}
                  onChange={(e) => {
                    setLastSelected(e.target.checked);
                    let formData = new FormData();
                    formData.set('preference', 'lastSelected');
                    formData.set('changedPreference', e.target.checked);
                    formData.set('userId', userData.id);
                    formData.set('action', 'changePreference');
                    fetcher.submit(formData, { method: 'post' });
                  }}
                />
              </span>
              <span className='label'>Keep last selected tool</span>
            </div>
            <div className='preference-row'>
              <span className='main-checkbox'>
                <input
                  type='checkbox'
                  className='checkbox-style'
                  checked={theme === 'dark'}
                  onChange={(e) => {
                    updateTheme();
                    // let formData = new FormData();
                    // formData.set('preference', 'darkMode');
                    // formData.set('changedPreference', e.target.checked);
                    // formData.set('userId', userData.id);
                    // formData.set('action', 'changePreference');
                    // fetcher.submit(formData, { method: 'post' });
                  }}
                />
              </span>
              <span className='label'>Dark Mode</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
