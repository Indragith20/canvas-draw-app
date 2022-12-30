import React from 'react';
import { Link, useFetcher } from '@remix-run/react';
import {
  checkSessionCookie,
  generatePasswordResetLink
} from '../../server/auth';
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
import { getResetPasswordTemplate } from 'server/resetPasswordTemplate';
import { sendPasswordResetMail } from 'server/mailerService';

export const links = () => [
  ...HeaderStyleLinks(),
  ...LogoLinks(),
  ...ThemeSwitcherLinks(),
  ...ValidationMessageLinks(),
  { rel: 'stylesheet', href: formStyles }
];

export const loader = async ({ request }) => {
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

export const action = async ({ request }) => {
  const form = await request.formData();
  //const idToken = form.get('idToken');
  try {
    const email = form.get('email');
    const formError = json(
      { error: 'Please fill all fields!' },
      { status: 400 }
    );
    if (typeof email !== 'string') return formError;
    let resetLink = await generatePasswordResetLink(email);
    let mailContent = getResetPasswordTemplate(resetLink);
    let res = await sendPasswordResetMail(email, mailContent);
    return json({
      status: 'success',
      originalRes: res,
      errors: null,
      displayText: 'Great! Check your email for a link to continue'
    });
  } catch (error) {
    return json({
      status: 'error',
      errors: {
        error: String(handleException(error)),
        firebaseError: error,
        errorDetails: {
          form: 'Email not sent successfully',
          usernameOrEmail: null
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
          <h1 className='form-header'>Forgot Password</h1>
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
                <label className='label'>Email Address</label>
                <input
                  className='input'
                  name='email'
                  placeholder='you@example.com'
                  type='email'
                />
              </div>

              <button className='button' type='submit'>
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
