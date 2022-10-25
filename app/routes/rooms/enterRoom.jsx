import React, { useState } from 'react';
import {
  useActionData,
  useOutletContext,
  useFetcher,
  useLocation,
  useLoaderData
} from '@remix-run/react';
import styles from '../../styles/form.css';
import enterRoomStyles from '../../styles/enterRoom.css';
import { createRoom } from '../../../server/db';
import { json, redirect } from '@remix-run/node';
import { commitSession, getSession } from '../../sessions';
import ValidationMessage from '~/components/ValidationMessage/ValidationMessage';

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
  let userName = body.get('userName');
  const draw = await createRoom(userId, userName, name);
  const session = await getSession(request.headers.get('Cookie'));

  console.log(draw);
  return redirect(`/draw/${draw.id}`, {
    headers: {
      'Set-Cookie': await commitSession(session)
    }
  });
}

export default function EnterRoom() {
  const actionData = useActionData();
  const location = useLocation();
  const userData = useOutletContext();
  const { origin } = useLoaderData();
  const [room, setRoom] = useState('');
  const fetcher = useFetcher();

  function onClickSubmit() {
    let formData = new FormData();
    formData.set('userName', userData.name);
    formData.set('userId', userData.id);
    formData.set('roomId', room);
    fetcher.submit(formData, { method: 'post' });
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
                <input
                  name='name'
                  type='text'
                  className='input'
                  value={room}
                  defaultValue={actionData ? actionData.values.name : undefined}
                  onChange={(e) => setRoom(e.target.value)}
                />
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
