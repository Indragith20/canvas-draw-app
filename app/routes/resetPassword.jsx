import React from 'react';
import { Link, useFetcher } from '@remix-run/react';
import { checkSessionCookie, confirmResetpassword } from '../../server/auth';
import { commitSession, getSession } from '../sessions';
import Header, { HeaderStyleLinks } from '~/components/MainHeader/Header';
import { LogoLinks } from '~/components/MainHeader/Logo';
import ValidationMessage, {
  ValidationMessageLinks
} from '~/components/ValidationMessage/ValidationMessage';
import { ThemeSwitcherLinks } from '~/components/MainHeader/ThemeSwitcher';
import formStyles from '../styles/form.css';
import { handleException } from '~/components/utils/AuthException';
import { json, redirect } from '@remix-run/node';

export const links = () => [
  ...HeaderStyleLinks(),
  ...LogoLinks(),
  ...ThemeSwitcherLinks(),
  ...ValidationMessageLinks(),
  { rel: 'stylesheet', href: formStyles }
];

export const loader = async ({ request, params }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const { uid } = await checkSessionCookie(session);
  const headers = {
    'Set-Cookie': await commitSession(session)
  };
  if (uid) {
    return redirect('/rooms', { headers });
  }
  return json({});
};

export const action = async ({ request, params }) => {
  const form = await request.formData();

  let oobCode = new URL(request.url).searchParams.get('oobCode');
  try {
    const password = form.get('password');
    const confirmPassword = form.get('confirmpassword');
    const formError = json(
      { error: 'Please fill all fields!' },
      { status: 400 }
    );
    if (typeof password !== 'string' || typeof confirmPassword !== 'string')
      return formError;
    if (password !== confirmPassword) {
      return json({ error: `Password don't match` }, { status: 400 });
    }
    let res = await confirmResetpassword(oobCode, password);

    return json({
      status: 'success',
      originalRes: res,
      errors: null,
      displayText: 'Password Reset Successful. Please login again'
    });
  } catch (error) {
    return json({
      status: 'error',
      errors: {
        error: String(handleException(error)),
        firebaseError: error,
        errorDetails: {
          form: 'Password reset not successfull'
        }
      }
    });
  }
};

export default function SignupRoute() {
  const forgotPassword = useFetcher();
  const hasUsernameOrEmailError = forgotPassword.data?.errors?.error;
  const hasEmailSent = forgotPassword.data?.status === 'success';

  return (
    <div>
      <Header headerLinks={[]} />
      <div className='form-main-container'>
        <div className='form-container'>
          <h1 className='form-header'>Reset Password</h1>
          {hasUsernameOrEmailError && (
            <ValidationMessage error={hasUsernameOrEmailError} />
          )}
          {hasEmailSent && (
            <ValidationMessage success={forgotPassword.data.displayText} />
          )}
          <forgotPassword.Form method='post'>
            <fieldset
              className='fieldset'
              disabled={forgotPassword.state === 'submitting'}
            >
              <div className='form-field'>
                <label className='label'>Password</label>
                <input
                  className='input'
                  name='password'
                  placeholder='password'
                  type='password'
                />
              </div>
              <div className='form-field'>
                <label className='label'>Confirm Password</label>
                <input
                  className='input'
                  name='confirmpassword'
                  placeholder='confirm password'
                  type='password'
                />
              </div>

              <button
                className='button'
                type='submit'
                disabled={forgotPassword.state === 'submitting'}
              >
                {forgotPassword.state === 'submitting'
                  ? 'Submitting...'
                  : 'Submit'}
              </button>
            </fieldset>
          </forgotPassword.Form>
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
    </div>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}
