import React, { useContext, useState } from 'react';
import {
  useActionData,
  Form,
  useTransition,
  Link,
  useOutletContext,
  useFetcher
} from '@remix-run/react';
import styles from '../../styles/form.css';
import { createRoom } from '../../../server/db';
import { json, redirect } from '@remix-run/node';
import { commitSession, getSession } from '../../sessions';
import ValidationMessage from '~/components/ValidationMessage/ValidationMessage';

// export async function loader({ request }) {
//   const session = await getSession(request.headers.get('Cookie'));
//   console.log(session.has('__session'));
//   if (session.has('__session')) {
//     console.log('Isnndie UserId');
//     // Redirect to the home page if they are already signed in.
//     return redirect('/rooms');
//   }

//   return null;
// }

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
];

export async function action({ request }) {
  const body = await request.formData();
  let name = body.get('roomName');
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

export default function CreateRoom() {
  const actionData = useActionData();
  const userData = useOutletContext();
  const [name, setName] = useState('');
  const fetcher = useFetcher();

  console.log('user', userData);

  function onClickSubmit() {
    let formData = new FormData();
    formData.set('userName', userData.name);
    formData.set('userId', userData.id);
    formData.set('roomName', name);
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
              <label className='label'>Name: </label>
              <input
                name='name'
                type='text'
                className='input'
                value={name}
                defaultValue={actionData ? actionData.values.name : undefined}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {actionData?.errors.name ? (
              <ValidationMessage
                isSubmitting={fetcher.state === 'submitting'}
                error={actionData?.errors?.name}
              />
            ) : null}

            <p>
              <button className='button' onClick={onClickSubmit}>
                {fetcher.state === 'submitting'
                  ? 'Configuring...'
                  : 'Create Room'}
              </button>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
