import { useRef } from 'react';
import { UPDATE_SCROLL_REGION } from '../../DrawCanvas/DrawAreaConstants';
import useEventListener from './useEventListener';

function useWheelMove({ tempCanvas, disableScroll, dispatch, tool, selectedTool }) {

  let dpr = useRef(typeof window !== 'undefined' && window.devicePixelRatio ? window.devicePixelRatio : 1);

  function onWheelMove(e) {
    if (disableScroll) {
      return;
    }

    if (selectedTool === 'text') {
      tool.current['onBlur']();
    }
    e.preventDefault();
    dispatch({
      type: UPDATE_SCROLL_REGION,
      payload: {
        deltaX: e.deltaX / dpr.current,
        deltaY: e.deltaY / dpr.current
      }
    });
  }

  useEventListener('wheel', onWheelMove, tempCanvas);

  return onWheelMove;
}

export default useWheelMove