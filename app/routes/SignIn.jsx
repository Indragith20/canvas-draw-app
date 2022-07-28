import { json, redirect } from '@remix-run/node';
import {
  Link,
  useActionData,
  useLoaderData,
  useSubmit,
} from '@remix-run/react';
import { useCallback, useState } from 'react';

import { checkSessionCookie, signIn } from '../../server/auth';
import { commitSession, getSession } from '../sessions';

export const loader = async ({ request }) => {
  const session = await getSession(request.headers.get('cookie'));
  const { uid } = await checkSessionCookie(session);
  const headers = {
    'Set-Cookie': await commitSession(session),
  };
  if (uid) {
    return redirect('/rooms', { headers });
  }
  return json({}, { headers });
};

export const action = async ({ request }) => {
  const form = await request.formData();
  const idToken = form.get('idToken');
  try {
    const email = form.get('email');
    const password = form.get('password');
    const formError = json(
      { error: 'Please fill all fields!' },
      { status: 400 }
    );
    if (typeof email !== 'string') return formError;
    if (typeof password !== 'string') return formError;
    let { sessionCookie } = await signIn(email, password);
    const session = await getSession(request.headers.get('cookie'));
    session.set('session', sessionCookie);
    return redirect('/rooms', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    });
  } catch (error) {
    console.error(error);
    return json({ error: String(error) }, { status: 401 });
  }
};

export default function Login() {
  const action = useActionData();

  return (
    <div>
      <h1>Login</h1>
      {action?.error && <p>{action?.error}</p>}
      <form method='post'>
        <input
          style={{ display: 'block' }}
          name='email'
          placeholder='you@example.com'
          type='email'
        />
        <input
          style={{ display: 'block' }}
          name='password'
          placeholder='password'
          type='password'
        />
        <button style={{ display: 'block' }} type='submit'>
          Login
        </button>
      </form>
      <p>
        Do you want to <Link to='/SignUp'>join</Link>?
      </p>
      <p>
        <Link to='/draw/freedraw' className='text-xl text-blue-600 underline'>
          Try without Login
        </Link>
      </p>
    </div>
  );
}
