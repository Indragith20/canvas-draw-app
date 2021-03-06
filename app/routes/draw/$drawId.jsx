import React, { useState, useEffect, useMemo, useRef } from 'react';
import { json } from '@remix-run/node';
import {
  useLoaderData,
  useFetcher,
  useTransition,
  useActionData,
} from '@remix-run/react';
import io from 'socket.io-client';

import { ConfigToolLinks } from '~/components/ConfigTool/ConfigTool';
import MainComponent, { MainComponentStyles } from '~/components/main';
import { SelectToolLinks } from '~/components/SelectTool/SelectTool';
import { TextToolLinks } from '~/components/TextTool/TextTool';
import { ZoomContainerLinks } from '~/components/ZoomContainer/ZoomContainer';
import { handleDataRequest } from '~/entry.server';
import styles from '../../styles/styles.css';
import { SocketProvider } from '~/contexts/socketContext';
import { addShape, getInitialDrawData } from '../../../server/db';
import Idb from '~/components/utils/idb';

export const links = () => [
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  { rel: 'stylesheet', href: styles },
];

export const loader = async ({ request, params }) => {
  console.log(params);
  let drawData = await getInitialDrawData(params.drawId);
  return json({ drawData });
};

export const action = async ({ request, params }) => {
  const body = await request.formData();
  let name = body.get('data');
  const data = await addShape(params.drawId, name);
  return json({ data });
};

export default function DrawIndex() {
  const fetcher = useFetcher();
  const data = useLoaderData();
  const actionData = useActionData();

  console.log(actionData);
  const [socket, setSocket] = useState();
  const idb = useMemo(() => {
    return new Idb();
  });

  useEffect(() => {
    const socket = io();
    setSocket(socket);
    socket.emit('event', 'conenction success');
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on('confirmation', (data) => {
      console.log(data);
    });
    socket.on('mousemove', (data) => {
      console.log(data);
    });
  });

  function updateShape(shape) {
    let formData = new FormData();
    formData.set('data', JSON.stringify({ ...shape }));
    fetcher.submit(formData, { method: 'post' });
  }

  function onMouseMove(eventDetails) {
    socket.emit('mousemove', eventDetails);
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <SocketProvider socket={socket}>
        <MainComponent mouseMove={onMouseMove} updateShape={updateShape} />
      </SocketProvider>
    </div>
  );
}
