import { useCallback, useEffect } from 'react';
import { UPDATE_SCROLL_REGION } from '../DrawAreaContext';

function useWheelMove({ tempCanvas, disableScroll, dispatch, tool, selectedTool }) {

  let dpr = 1;

  if (typeof window !== 'undefined') {
    dpr = window.devicePixelRatio || 1
  }

  const onWheelMove = useCallback((e) => {
    if (disableScroll) {
      return;
    }

    if (selectedTool === 'text') {
      // Drawing text on canvas before scroll move
      tool.current['onBlur']();
    }
    dispatch({
      type: UPDATE_SCROLL_REGION,
      payload: {
        deltaX: e.deltaX / dpr,
        deltaY: e.deltaY / dpr
      }
    });
  }, [disableScroll, dispatch, selectedTool, tool, dpr]);

  useEffect(() => {
    let canvasRef = tempCanvas.current;

    canvasRef.addEventListener('wheel', onWheelMove, false);

    return () => {
      canvasRef.addEventListener('wheel', onWheelMove, false);
    }
  }, [tempCanvas, onWheelMove]);
}

export default useWheelMove