import { UPDATE_CANVAS_AREA } from '../DrawAreaContext';
import useEventListener from './useEventListener';

function useResize({ dispatch }) {

  function onResize() {
    dispatch({
      type: UPDATE_CANVAS_AREA,
      payload: {
        canvasWidth: window.visualViewport.width,
        canvasHeight: window.visualViewport.height
      }
    })
  }

  useEventListener('resize', onResize);
}

export default useResize;