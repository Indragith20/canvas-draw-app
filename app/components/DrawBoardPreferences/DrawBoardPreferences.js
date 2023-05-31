import React from 'react';
import styles from './DrawBoardPreferences.css';


export const DeleteDrawBoardPreferencesLinks = () => ([
  { rel: 'stylesheet', href: styles }
])


// const preferences = {
//   'darkMode': {
//     type: 'checkbox',
//     checked: true
//   },
//   'keepLastSelected': {
//     type: 'checkbox',
//     checked: true
//   }
// };

// Currently preferences support only checkbox type

function DrawBoardPreferences({ preferences, onChange }) {
  return (
    <>
      {Object.keys(preferences).map((preferenceKey) => {
        return (
          <div className='preference-row' key={preferenceKey}>
            {preferences[preferenceKey].type === 'checkbox' ? (
              <>
                <span className='main-checkbox'>
                  <input
                    type='checkbox'
                    className='checkbox-style'
                    checked={preferences[preferenceKey].checked}
                    onChange={(e) => {
                      onChange(e, preferenceKey);
                    }}
                  />
                </span>
                <span className='label'>{preferences[preferenceKey].displayName}</span>
              </>
            ) : null}
          </div>
        )
      })}
    </>
  )
}

export default DrawBoardPreferences;