import { json, redirect } from '@remix-run/node';
import { Form, Link, useActionData, useTransition } from '@remix-run/react';
import Header, { HeaderStyleLinks } from '~/components/MainHeader/Header';
import { LogoLinks } from '~/components/MainHeader/Logo';
import { ThemeSwitcherLinks } from '~/components/MainHeader/ThemeSwitcher';
import { handleException } from '~/components/utils/AuthException';
import ValidationMessage, {
  ValidationMessageLinks
} from '~/components/ValidationMessage/ValidationMessage';
import { headerLinks } from '~/constants/signInLinks';
import styles from '~/styles/form.css';

import { checkSessionCookie, signUp } from '../../server/auth';
import { commitSession, getSession } from '../sessions';

export const links = () => [
  ...HeaderStyleLinks(),
  ...LogoLinks(),
  ...ThemeSwitcherLinks(),
  ...ValidationMessageLinks(),
  { rel: 'stylesheet', href: styles }
];

export const loader = async ({ request }) => {
  const session = await getSession(request.headers.get('cookie'));
  const { uid } = await checkSessionCookie(session);
  const headers = {
    'Set-Cookie': await commitSession(session)
  };
  if (uid) {
    return redirect('/rooms', { headers });
  }
  return json(null, { headers });
};

export const action = async ({ request }) => {
  const form = await request.formData();
  const name = form.get('name');
  const email = form.get('email');
  const password = form.get('password');
  const formError = json({ error: 'Please fill all fields!' }, { status: 400 });
  if (typeof name !== 'string') return formError;
  if (typeof email !== 'string') return formError;
  if (typeof password !== 'string') return formError;
  try {
    const { sessionCookie } = await signUp(name, email, password);
    const session = await getSession(request.headers.get('cookie'));
    session.set('session', sessionCookie);
    return redirect('/rooms', {
      headers: {
        'Set-Cookie': await commitSession(session)
      }
    });
  } catch (error) {
    console.error(error);
    return json({ error: String(handleException(error)) }, { status: 401 });
  }
};

export default function Login() {
  const action = useActionData();
  const transition = useTransition();
  return (
    <>
      <Header headerLinks={headerLinks} />
      <div className='form-main-container'>
        <div className='form-container'>
          <h1 className='form-header'>Join</h1>
          {action?.error && <ValidationMessage error={action?.error} />}
          <Form method='post'>
            <fieldset
              className='fieldset'
              disabled={transition.state === 'submitting'}
            >
              <div className='form-field'>
                <label className='label'>Name</label>
                <input
                  className='input'
                  name='name'
                  placeholder='Peter'
                  type='text'
                />
              </div>
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
                Join
              </button>
            </fieldset>
          </Form>
          <p>
            Do you want to <Link to='/SignIn'>login</Link>?
          </p>
        </div>
      </div>
    </>
  );
}
