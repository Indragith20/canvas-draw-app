import { useState } from 'react';
import { useIsomorphicLayoutEffect } from '~/components/Common/hooks/useIsomorphicLayoutEffect';

function getDefaultMatch(query) {
  if (typeof window === "undefined") {
    return global.isMobile || false;
  }
  let media = window.matchMedia && window.matchMedia(query);
  return media ? media.matches : false;
}

export function useMatchMedia(query) {
  const [match, setMatch] = useState(getDefaultMatch(query));
  useIsomorphicLayoutEffect(() => {
    let mediaQuery = window.matchMedia(query)

    function onMediaQueryChange(e) {
      if (e.matches) {
        setMatch(true);
      } else {
        setMatch(false);
      }
    }

    /* addEventListener not supported in safari lesser than 14 version. so, adding try catch with addListener */
    try {
      mediaQuery.addEventListener('change', onMediaQueryChange);
    } catch (e1) {
      try {
        mediaQuery.addListener(onMediaQueryChange);
      } catch (e2) {
        console.error(e2);
      }
    }

    return () => {
      mediaQuery.removeEventListener &&
        mediaQuery.removeEventListener('change', onMediaQueryChange);
      mediaQuery.removeListener && mediaQuery.removeListener(onMediaQueryChange);
    };
  }, [query]);

  return match;
}