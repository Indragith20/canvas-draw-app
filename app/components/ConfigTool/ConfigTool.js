import React from 'react';


function ConfigTool({ toggleTheme }) {
  return (
    <div className="configTool">
      <div className="wrapper" >
        <span className="configLabel">Dark Mode</span>
        <label className="switch">

          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round" id="toggleDarkMode"></span>
        </label>
      </div>
    </div>
  )
}

export default ConfigTool;