import { json, redirect } from '@remix-run/node';
import { Link, useActionData, useTransition } from '@remix-run/react';
import { addCollaborator, addRoomToUser } from 'server/db';

import { checkSessionCookie, signIn } from '../../server/auth';
import { commitSession, getSession } from '../sessions';
import styles from '../styles/signIn.css';
import banner from '../assets/drawCrop.webp';

export const links = () => [{ rel: 'stylesheet', href: styles }];

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

export const action = async ({ request, params }) => {
  const form = await request.formData();
  //const idToken = form.get('idToken');
  try {
    const email = form.get('email');
    const password = form.get('password');
    const formError = json(
      { error: 'Please fill all fields!' },
      { status: 400 }
    );
    if (typeof email !== 'string') return formError;
    if (typeof password !== 'string') return formError;
    let { sessionCookie, user } = await signIn(email, password);
    const session = await getSession(request.headers.get('cookie'));
    session.set('session', sessionCookie);
    const url = new URL(request.url);
    const redirectUrl = url.searchParams.get('redirectTo');

    if (redirectUrl) {
      // shared url flow

      let promises = [];
      if (redirectUrl.indexOf('draw') === 1) {
        let roomId = redirectUrl.split('/').pop();
        promises.push(
          addCollaborator(roomId, {
            name: user.displayName,
            isActive: true,
            id: user.uid,
          })
        );
        promises.push(addRoomToUser(user.uid, roomId));
        await Promise.all(promises);
        return redirect(redirectUrl, {
          headers: {
            'Set-Cookie': await commitSession(session),
          },
        });
      } else {
        return redirect(redirectUrl, {
          headers: {
            'Set-Cookie': await commitSession(session),
          },
        });
      }
    } else {
      return redirect('/rooms', {
        headers: {
          'Set-Cookie': await commitSession(session),
        },
      });
    }
  } catch (error) {
    console.error(error);
    return json({ error: String(error) }, { status: 401 });
  }
};

export default function Login() {
  const transition = useTransition();
  const action = useActionData();

  return (
    <>
      <header className='main-header'>
        <div className='logo'>
          <img src={banner} alt='' className='banner' />
        </div>

        <div className='main-header-link'>
          <Link to='/SignUp'>About</Link>
        </div>
        <div className='main-header-link'>
          <Link to='/SignUp'>SignUp</Link>
        </div>
        <div className='main-header-link'>
          <Link to='/SignUp'>Help</Link>
        </div>
      </header>
      <div className='signin-container'>
        <div className='form-container'>
          <h1 className='form-header'>Sign In</h1>
          {action?.error && <p>{action?.error}</p>}
          <form method='post'>
            <fieldset
              className='fieldset'
              disabled={transition.state === 'submitting'}
            >
              <div className='form-field'>
                <label className='label'>Email Address</label>
                <input
                  className='input'
                  name='email'
                  placeholder='you@example.com'
                  type='email'
                />
              </div>
              <div className='form-field'>
                <label className='label'>Password</label>
                <input
                  className='input'
                  name='password'
                  placeholder='password'
                  type='password'
                />
              </div>

              <button className='button' type='submit'>
                {transition.state === 'submitting' ? 'Loginnggg...' : 'Login'}
              </button>
            </fieldset>
          </form>
          <p>
            Do you want to{' '}
            <Link className='join-link' to='/SignUp'>
              join
            </Link>
            ?
          </p>
          <p>
            <Link to='/draw/freedraw' className='join-link'>
              Try without Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
