import React from 'react';


function TextTool() {
  return (
    <div style={{ color: 'black' }} className="textTool" id="textBoxContainerId">
      <div className="textarea" id="textAreaId" role="textbox" contentEditable />
    </div>
  );
}


export default TextTool;