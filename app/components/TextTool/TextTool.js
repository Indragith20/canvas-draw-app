import React from 'react';
import styles from './TextTool.css';

export function TextToolLinks() {
  return [{ rel: 'stylesheet', href: styles }]
}

function TextTool() {
  return (
    <div className="textTool" id="textBoxContainerId">
      <div className="textarea" id="textAreaId" role="textbox" contentEditable />
    </div>
  );
}


export default TextTool;