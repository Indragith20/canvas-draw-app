import { useCallback, useEffect, useRef } from 'react';
import { UPDATE_SCROLL_REGION } from '../DrawAreaContext';
import useEventListener from './useEventListener';

function useWheelMove({ tempCanvas, disableScroll, dispatch, tool, selectedTool }) {

  let dpr = useRef(window.devicePixelRatio || 1);

  function onWheelMove(e) {
    if (disableScroll) {
      return;
    }

    if (selectedTool === 'text') {
      // Drawing text on canvas before scroll move
      console.log(tool.current);
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

  useEventListener('wheel', onWheelMove, tempCanvas, false);
}

export default useWheelMove