import React, { useState } from 'react';
import {
  useActionData,
  useOutletContext,
  useFetcher,
  useLoaderData
} from '@remix-run/react';
import styles from '../styles/form.css';
import enterRoomStyles from '../styles/enterRoom.css';
import { json, redirect } from '@remix-run/node';
import { commitSession, getSession } from '../sessions';
import ValidationMessage from '~/components/ValidationMessage/ValidationMessage';
import { addRoomToUser, isRoomExist } from 'server/db';

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  },
  {
    rel: 'stylesheet',
    href: enterRoomStyles
  }
];

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  return json({ origin: url.origin });
};

export async function action({ request }) {
  const body = await request.formData();
  let roomId = body.get('roomId');
  let userId = body.get('userId');
  //const draw = await createRoom(userId, userName, name);
  const session = await getSession(request.headers.get('Cookie'));

  try {
    await isRoomExist(roomId);
    await addRoomToUser(userId, roomId);
    return redirect(`/draw/${roomId}`, {
      headers: {
        'Set-Cookie': await commitSession(session)
      }
    });
  } catch (err) {
    return json({ error: 'Please Enter Valid Room Code' }, { status: 401 });
  }
}

export default function EnterRoom() {
  const actionData = useActionData();
  const userData = useOutletContext();
  const { origin } = useLoaderData();
  const [room, setRoom] = useState('');
  const fetcher = useFetcher();

  function onClickSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.set('userName', userData.name);
    formData.set('userId', userData.id);
    formData.set('roomId', room);
    fetcher.submit(formData, { method: 'POST' });
  }

  return (
    <div className='form-main-container'>
      <div className='form-container'>
        <form>
          <fieldset
            disabled={fetcher.state === 'submitting'}
            className='fieldset'
          >
            <div className='form-field'>
              <label className='label'>Room Unique Code </label>
              <div className='url-field'>
                <span className='origin-url'>{`${origin}/draw/`}</span>
                <div className='input-with-error'>
                  <input
                    name='name'
                    type='text'
                    className={`input ${
                      fetcher?.data?.error ? 'form-error' : ''
                    }`}
                    value={room}
                    defaultValue={
                      actionData ? actionData.values.name : undefined
                    }
                    onChange={(e) => setRoom(e.target.value)}
                  />
                  {fetcher?.data?.error && (
                    <span className='error-msg'>{fetcher?.data?.error}</span>
                  )}
                </div>
              </div>
            </div>

            {actionData?.errors.name ? (
              <ValidationMessage
                isSubmitting={fetcher.state === 'submitting'}
                error={actionData?.errors?.name}
              />
            ) : null}

            <p>
              <button className='button' onClick={onClickSubmit}>
                {fetcher.state === 'submitting' ? 'Entering...' : 'Enter Room'}
              </button>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
