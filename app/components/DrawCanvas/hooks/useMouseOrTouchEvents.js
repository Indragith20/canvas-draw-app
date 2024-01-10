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
      console.log('Touch Start Event Called');
      touchStartX.current = ev.targetTouches[0].clientX;
      touchStartY.current = ev.targetTouches[0].clientY;
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
      if (touchStartTimer.current === null) {
        touchStartTimer.current = setTimeout(() => {
          touchStartTimer.current = null;
        }, DELTA_TIME_THRESHOLD_MS);
        ev.x = ev.changedTouches[0].clientX;
        ev.y = ev.changedTouches[0].clientY;
        console.log('Touch End Event Called');
        onEvent(ev);
      } else {
        console.log('else case');
        if ((Math.abs(ev.changedTouches[0].clientX - touchStartX.current) < 10) && (Math.abs(ev.changedTouches[0].clientY - touchStartY.current) < 10)) {
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
    console.log('dispatching', e.deltaX / dpr.current, e.deltaY / dpr.current)
    dispatch({
      type: UPDATE_SCROLL_REGION,
      payload: {
        deltaX: e.deltaX * dpr.current,
        deltaY: e.deltaY * dpr.current
      }
    });
  }

  function onTouchMove(ev) {
    ev.preventDefault();
    if (ev.targetTouches.length === 1) {

      let deltaX = ev.targetTouches[0].clientX - touchStartX.current;
      let deltaY = ev.targetTouches[0].clientY - touchStartY.current;
      touchStartX.current = ev.targetTouches[0].clientX;
      touchStartY.current = ev.targetTouches[0].clientY;
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