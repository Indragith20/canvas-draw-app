import { useState } from 'react';
import useEventListener from './useEventListener';

function getDefaultWidthAndHeight() {
  if (typeof window === 'undefined') {
    return { width: 1400 , height: 600 };
  }
  return { width: window.innerWidth, height: window.innerHeight }
}

function useWindowSize() {
  const [ coords, updateCoords ] = useState(getDefaultWidthAndHeight())

  function onResize() {
    updateCoords({ width: window.innerWidth, height: window.innerHeight })
  }

  useEventListener('resize', onResize);

  return [coords.width, coords.height];
}

export { useWindowSize };