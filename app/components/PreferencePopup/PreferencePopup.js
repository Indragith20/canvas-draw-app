import React from 'react';
import Modal from '../Common/Modal/Modal';
import styles from './PreferencePopup.css';
import DrawBoardPreferences, { DrawBoardPreferencesLinks } from '../DrawBoardPreferences/DrawBoardPreferences';
import { useFetcher, useLoaderData } from 'react-router-dom';
import { useTheme } from '~/contexts/themeContext';

export const PreferencePopupLinks = () => (
  [
    ...DrawBoardPreferencesLinks(),
    { rel: 'stylesheet', href: styles }
  ]
);

const defaultpreferences = {
  'darkMode': {
    type: 'checkbox',
    checked: true
  },
  'keepLastSelected': {
    type: 'checkbox',
    checked: true
  }
};

function PreferencePopup({ showPreferencePopup, onCancel, preferences = defaultpreferences, onChangePreference }) {
  const { submit, state } = useFetcher();
  const { theme, updateTheme } = useTheme();
  const { currentUser } = useLoaderData();
  function onChange(e, preference) {

    if (preference === 'keepLastSelected') {
      if (currentUser && currentUser.id !== null) {
        let formData = new FormData();
        formData.set('preference', 'lastSelected');
        formData.set('changedPreference', e.target.checked);
        formData.set('userId', currentUser.id);
        formData.set('action', 'changePreference');
        submit(formData, { method: 'post' });
      }
    } else if (preference === 'darkMode') {
      let formData = new FormData();
      formData.set('preference', 'darkMode');
      formData.set('changedPreference', theme === 'dark' ? 'true' : 'false');
      formData.set('userId', currentUser.id);
      formData.set('action', 'changePreference');
      submit(formData, { method: 'POST' });
      updateTheme();
    }
    onChangePreference && onChangePreference(e, preference);
  }

  return (
    <Modal show={showPreferencePopup} close={onCancel}>
      <Modal.Header needCloseIcon={true}>
        <div className='preference-header'>
          <span>Preferences</span>
          <span className='loader-text'>
            {state !== 'idle' ? (
              <>
                <div className='preference-loader'>
                  <div className='loader-2'>
                    <span></span>
                  </div>
                  <span>Updating Preferences</span>
                </div>
              </>
            ) : null}
          </span>
        </div>
      </Modal.Header>
      <Modal.Content>
        <div className='preference-container'>
          <DrawBoardPreferences preferences={preferences} onChange={onChange} />

        </div>
      </Modal.Content>

    </Modal>
  )
}

export default React.memo(PreferencePopup);