import React, { useEffect } from 'react';

function ShortcutKeys({ disableShortcut, keyMapping }) {

  useEffect(() => {
    function onKeydown(ev) {
      if (disableShortcut) {
        return;
      }
      let keyCombo = []
      let ctrlKeyPressed = ev.ctrlKey || ev.metaKey;
      let shiftKeyPressed = ev.shiftKey;
      if (ctrlKeyPressed) {
        keyCombo.push('ctrl')
      }
      if (shiftKeyPressed) {
        keyCombo.push('shift')
      }

      if (['shift', 'Shift', 'Meta'].includes(ev.key) === false) {
        keyCombo.push(ev.key);
      }


      const keyPressed = keyCombo.join('+').toLowerCase();
      if (keyMapping[keyPressed]) {
        console.log('Insdie')
        keyMapping[keyPressed]();
      }


    }
    document.addEventListener('keydown', onKeydown);

    return () => {
      document.removeEventListener('keydown', onKeydown);
    }
  }, [disableShortcut, keyMapping])

  return null;
}

export default React.memo(ShortcutKeys);