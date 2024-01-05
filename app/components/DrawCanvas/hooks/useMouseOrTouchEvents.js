import { isTouchDevice } from '~/components/utils/common';
import useEventListener from './useEventListener';
import { useRef } from 'react';
import throttle from '~/components/utils/throttle';

function useMouseOrTouchEvents({ tempCanvas, onEvent, onWheelMove, selectedTool, changeToTextTool }) {

  let touchStartX = useRef(null);
  let touchStartY = useRef(null);
  let touchStartTimer = useRef(null);
  let DELTA_TIME_THRESHOLD_MS = 700;

  function filterEvent(e) {
    if (isTouchDevice()) {
      return;
    }
    onEvent(e);
  }

  function onTouchStart(ev) {
    if (ev.targetTouches.length === 1) {
      touchStartX = ev.targetTouches[0].clientX;
      touchStartY = ev.targetTouches[0].clientY;
      ev.x = ev.targetTouches[0].clientX;
      ev.y = ev.targetTouches[0].clientY;
      onEvent(ev);
    } else {
      onEvent(ev);
    }
  }

  function onTouchEnd(ev) {
    if (ev.changedTouches.length === 1) {
      if (touchStartTimer === null) {
        touchStartTimer = setTimeout(() => {
          touchStartTimer = null;
        }, DELTA_TIME_THRESHOLD_MS);
        ev.x = ev.changedTouches[0].clientX;
        ev.y = ev.changedTouches[0].clientY;
        onEvent(ev);
      } else {
        if ((Math.abs(ev.changedTouches[0].clientX - touchStartX) < 10) && (Math.abs(ev.changedTouches[0].clientY - touchStartY) < 10)) {
          ev.preventDefault();
          ev.x = ev.changedTouches[0].clientX;
          ev.y = ev.changedTouches[0].clientY;
          changeToTextTool(ev);
        }
      }

    }
  }

  function onTouchMove(ev) {
    ev.preventDefault();
    if (ev.targetTouches.length === 1) {
      let deltaX = ev.targetTouches[0].clientX - touchStartX;
      let deltaY = ev.targetTouches[0].clientY - touchStartY;
      ev.deltaX = -(deltaX);
      ev.deltaY = -(deltaY);
      if (selectedTool === 'select') {
        onWheelMove(ev);
      } else {
        ev.x = ev.targetTouches[0].clientX;
        ev.y = ev.targetTouches[0].clientY;
        onEvent(ev);
      }

    } else {
      onEvent(ev);
    }
  };


  useEventListener('mousedown', filterEvent, tempCanvas, false);
  useEventListener('mousemove', filterEvent, tempCanvas, false);
  useEventListener('mouseup', filterEvent, tempCanvas, false);

  useEventListener('touchstart', onTouchStart, tempCanvas, { passive: true });
  useEventListener('touchmove', onTouchMove, tempCanvas, { passive: true });
  useEventListener('touchend', onTouchEnd, tempCanvas, { passive: true });
}

export default useMouseOrTouchEvents;