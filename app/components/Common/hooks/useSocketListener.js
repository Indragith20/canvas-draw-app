import { useEffect, useRef } from 'react';
import { useSocket } from '~/contexts/socketContext';

function useSocketListerner(listenerKey, callback) {
  const socket = useSocket();
  const listenerRef = useRef(callback);

  useEffect(() => {
    listenerRef.current = callback
  }, [callback]);

  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.on(listenerKey, listenerRef.current);

    return () => {
      socket.off(listenerKey, listenerRef.current);
    }
  }, [socket, listenerKey])

}

export default useSocketListerner;