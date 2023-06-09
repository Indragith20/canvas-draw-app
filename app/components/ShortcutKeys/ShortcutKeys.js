import React, { useEffect } from 'react';


const defaultkeyMapping = {
  'ctrl+s': () => { console.log('save callback truggerd') },
  'ctrl+z': () => { console.log('undo action trigger keymapping') },
  'ctrl+shift+z': () => { console.log('redo action trigger keymapping') },
  'backspace': () => { console.log('Backspace action trigger keymapping') }
}

function ShortcutKeys({ disableShortcut, keyMapping = defaultkeyMapping }) {

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
      console.log(keyMapping[keyPressed]);
      if (keyMapping[keyPressed]) {
        console.log('Insdie')
        keyMapping[keyPressed]();
      }


      console.log("keyCombo", keyCombo.join('+'), "code", ev.code);
    }
    document.addEventListener('keydown', onKeydown);

    return () => {
      document.removeEventListener('keydown', onKeydown);
    }
  }, [disableShortcut, keyMapping])

  return null;
}

export default React.memo(ShortcutKeys);