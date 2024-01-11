import React, { useMemo } from 'react';
import useEventListener from '../Common/hooks/useEventListener';
import { DELETE_SHAPE, REDO_ACTION, UNDO_ACTION, UPDATE_MODAL_TYPE } from '../DrawCanvas/DrawAreaConstants';


// Note: shortcutkey can be hook instead of component but there will be need of UI. hence it is added as component
function ShortcutKeys({ disableShortcut, dispatch }) {

  let keyMapping = useMemo(() => ({
    'ctrl+z': () => dispatch({ type: UNDO_ACTION }),
    'ctrl+shift+z': () => dispatch({ type: REDO_ACTION }),
    'ctrl+shift+p': () => {
      dispatch({
        type: UPDATE_MODAL_TYPE,
        payload: {
          modalType: 'preferences'
        }
      })
    },
    'backspace': () => dispatch({ type: DELETE_SHAPE }),
    'delete': () => dispatch({ type: DELETE_SHAPE })
  }), [dispatch]);

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
      keyMapping[keyPressed]();
    }


  }

  useEventListener('keydown', onKeydown);

  return null;
}

export default React.memo(ShortcutKeys);