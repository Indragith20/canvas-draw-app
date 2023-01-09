import React, { useEffect, useRef } from 'react';
import styles from './TextTool.css';

export function TextToolLinks() {
  return [{ rel: 'stylesheet', href: styles }]
}

function TextTool() {
  const textAreaRef = useRef();

  useEffect(() => {
    function onPaste(e) {
      e.preventDefault();

      // Get the copied text from the clipboard
      const text = e.clipboardData
        ? (e.originalEvent || e).clipboardData.getData('text/plain')
        : // For IE
        window.clipboardData
          ? window.clipboardData.getData('Text')
          : '';

      if (document.queryCommandSupported('insertText')) {
        document.execCommand('insertText', false, text);
      } else {
        // Insert text at the current position of caret
        const range = document.getSelection().getRangeAt(0);
        range.deleteContents();

        const textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.selectNodeContents(textNode);
        range.collapse(false);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }

    const editableEle = textAreaRef.current;
    editableEle.addEventListener('paste', onPaste);

    return () => {
      editableEle.removeEventListener('paste', onPaste);
    }
  }, [])
  return (
    <div className="textTool" id="textBoxContainerId">
      <div className="textarea" id="textAreaId" role="textbox" contentEditable ref={textAreaRef} />
    </div>
  );
}


export default TextTool;