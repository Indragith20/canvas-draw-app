import useEventListener from './useEventListener';

function useMouseOrTouchEvents({ tempCanvas, onEvent }) {
  useEventListener('mousedown', onEvent, false);
  useEventListener('mousemove', onEvent, false);
  useEventListener('mouseup', onEvent, false);
}

export default useMouseOrTouchEvents;