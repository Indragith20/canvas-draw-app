import { json, redirect } from '@remix-run/node';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import React from 'react';
import { requireAuth } from '../../server/auth';
import { getUser } from '../../server/db';

export async function loader({ request }) {
  console.log('rooms loader');
  const { displayName, uid } = await requireAuth(request);
  console.log('uid', uid);
  const userData = await getUser(uid);
  console.log('Error', userData.error);
  if (userData.error) {
    return redirect('/');
  } else {
    return json({ ...userData.data });
  }
}

function Rooms() {
  const data = useLoaderData();
  console.log('Isndie Rooms', data);
  return (
    <>
      <p>
        <Link to='/rooms/createRoom'>Create Room</Link>
      </p>
      <p>
        <Link to='/rooms/enterRoom'>Enter Room</Link>
      </p>
      <p>Rooms List</p>
      <Outlet context={data} />
    </>
  );
}

export default Rooms;
