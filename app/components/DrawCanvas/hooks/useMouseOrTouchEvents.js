import { isTouchDevice } from '~/components/utils/common';
import useEventListener from './useEventListener';
import { useRef } from 'react';
import throttle from '~/components/utils/throttle';
import { UPDATE_SCROLL_REGION } from '../DrawAreaContext';

function useMouseOrTouchEvents({ tempCanvas, onEvent, dispatch, selectedTool, changeToTextTool, tool, disableScroll }) {
  let dpr = useRef(typeof window !== 'undefined' && window.devicePixelRatio ? window.devicePixelRatio : 1);
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
    ev.preventDefault();
    if (ev.targetTouches.length === 1) {
      touchStartX = ev.targetTouches[0].clientX;
      touchStartY = ev.targetTouches[0].clientY;
      ev.x = ev.targetTouches[0].clientX;
      ev.y = ev.targetTouches[0].clientY;
      onEvent(ev);
    }
    //  else {
    //   onEvent(ev);
    // }
  }

  function onTouchEnd(ev) {
    ev.preventDefault();
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

  function onWheelMove(e) {
    if (disableScroll) {
      return;
    }

    if (selectedTool === 'text') {
      tool.current['onBlur']();
    }
    dispatch({
      type: UPDATE_SCROLL_REGION,
      payload: {
        deltaX: e.deltaX / dpr.current,
        deltaY: e.deltaY / dpr.current
      }
    });
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

    } 
    // else {
    //   onEvent(ev);
    // }
  };


  useEventListener('mousedown', filterEvent, tempCanvas, false);
  useEventListener('mousemove', filterEvent, tempCanvas, false);
  useEventListener('mouseup', filterEvent, tempCanvas, false);

  useEventListener('touchstart', onTouchStart, tempCanvas, false);
  useEventListener('touchmove', onTouchMove, tempCanvas, false);
  useEventListener('touchend', onTouchEnd, tempCanvas, false);
}

export default useMouseOrTouchEvents;