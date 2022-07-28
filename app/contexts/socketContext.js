import React, { createContext, useContext } from 'react';

export const SocketContext = createContext(undefined);

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ socket, children }) {
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}
