import React from 'react';
import styles from './DrawBoardPreferences.css';


export const DrawBoardPreferencesLinks = () => ([
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
        const preference = preferences[preferenceKey];
        return (
          <div className='preference-row' key={preferenceKey}>
            <span className='label'>{preference.displayName}</span>
            {preference.type === 'checkbox' ? (
              <span className='main-checkbox'>
                <input
                  type='checkbox'
                  className='checkbox-style'
                  checked={preference.checked}
                  onChange={(e) => {
                    onChange(e.target.checked, preferenceKey, 'checked');
                  }}
                />
              </span>
            ) : preference.type === 'color' ? (
              <input
                type='color'
                className='color-picker-style'
                value={preference.value}
                onChange={(e) => {
                  onChange(e.target.value, preferenceKey, 'value');
                }}
              />
            ) : preference.type === 'dropdown' ? (
              <select
                className='dropdown-style'
                value={preference.value}
                onChange={(e) => {
                  onChange(e.target.value, preferenceKey, 'value');
                }}
              >
                {preference.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
        );
      })}
    </>
  );
}

export default DrawBoardPreferences;