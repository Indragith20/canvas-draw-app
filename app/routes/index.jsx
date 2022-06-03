import React, { useState, useEffect } from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
// import io from 'socket.io-client';

import { ConfigToolLinks } from '~/components/ConfigTool/ConfigTool';
import MainComponent, { MainComponentStyles } from '~/components/main';
import { SelectToolLinks } from '~/components/SelectTool/SelectTool';
import { TextToolLinks } from '~/components/TextTool/TextTool';
import { ZoomContainerLinks } from '~/components/ZoomContainer/ZoomContainer';
import { handleDataRequest } from '~/entry.server';
import styles from '../styles/styles.css';
import { SocketProvider } from '~/contexts/socketContext';

export const links = () => [
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  { rel: 'stylesheet', href: styles },
];

export const loader = async ({ request }) => {
  return handleDataRequest(
    request,
    (user) => {
      return json({ user });
    },
    () => {
      throw new Response('Unauthorized', { status: 401 });
    }
  );
};

export default function Index() {
  const data = useLoaderData();
  // const [socket, setSocket] = useState();

  // useEffect(() => {
  //   const socket = io();
  //   setSocket(socket);
  //   socket.emit('event', 'conenction success');
  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!socket) return;
  //   socket.on('confirmation', (data) => {
  //     console.log(data);
  //   });
  //   socket.on('mousemove', (data) => {
  //     console.log(data);
  //   });
  // });
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      {/* <SocketProvider socket={socket}> */}
      <MainComponent />
      {/* </SocketProvider> */}
    </div>
  );
}
