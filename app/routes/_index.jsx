import React from 'react';
import { Link } from '@remix-run/react';
import { createRoom } from '../../server/db';
import { json, redirect } from '@remix-run/node';
import { commitSession, getSession } from '../sessions';
import Header, { HeaderStyleLinks } from '~/components/MainHeader/Header';
import { LogoLinks } from '~/components/MainHeader/Logo';
import imageUrl from '../assets/HomePage3.png';
import brainstromDark from '../assets/idea-dark.png';
import brainstromLight from '../assets/idea-light.png';
import ideaDark from '../assets/idea-dark-2.png';
import ideaLight from '../assets/idea-light-2.png';
import designDark from '../assets/design-dark.png';
import designLight from '../assets/design-light.png';
import collaborationDark from '../assets/collaboration-dark.png';
import collaborationLight from '../assets/collaboration-light.png';
import styles from '../styles/styles.css';
import { useTheme } from '~/contexts/themeContext';
import { checkSessionCookie } from 'server/auth';
import { headerLinks } from '~/constants/signInLinks';
import Tooltip from '~/components/Tooltip/Tooltip';

export const links = () => [
  ...HeaderStyleLinks(),
  ...LogoLinks(),
  { rel: 'stylesheet', href: styles }
];

export async function loader({ request }) {
  const session = await getSession(request.headers.get('Cookie'));
  const { uid } = await checkSessionCookie(session);
  const headers = {
    'Set-Cookie': await commitSession(session)
  };
  if (uid) {
    return redirect('/rooms', { headers });
  }
  return json({}, { headers });
}

export async function action({ request }) {
  const body = await request.formData();
  let name = body.get('name');
  const draw = await createRoom(name);
  const session = await getSession(request.headers.get('Cookie'));
  // if (errors) {
  //   const values = Object.fromEntries(formData);
  //   return json({ errors, values });
  // }
  session.set('userId', draw.userId);

  return redirect(`/draw/${draw.id}`, {
    headers: {
      'Set-Cookie': await commitSession(session)
    }
  });
}

export default function Index() {
  const { theme } = useTheme();
  return (
    <div className='home-page'>
      <Header headerLinks={headerLinks} />
      <main>
        <div className='background-image-container'>
          <div className='main-content'>
            <div>
              <div className='text-content'>
                Everything you need <br />
                to{' '}
                <b>
                  <u>collaborate</u>
                </b>{' '}
                <br />
                Online with our tool
              </div>
              <div className='content-actions'>
                <Link to='/signup'>
                  <button className='btn-home sign-up-home'>Sign Up</button>
                </Link>
                <Link to='/draw/freedraw'>
                  <button className='btn-home without-login'>
                    Try Without Login
                  </button>
                </Link>
              </div>
              <div className='login-action'>
                Already have an account?{' '}
                <Link to='/signin' className='login-link-home'>
                  Login
                </Link>
              </div>
            </div>
            <div className='image-container'>
              <img src={imageUrl} alt='Home page' />
            </div>
          </div>
        </div>
        <div className='features-section'>
          <div className='features-header'>
            The Online Whiteboard <br />
            for <b className='highlight-text'>easy collboration</b>
          </div>
          <div className='secondary-features-content'>
            Draw Anything is a free and simple to use online whiteboard built
            <br />
            to help you collaborate with others any time, anywhere
          </div>
          <div className='main-features'>
            <div className='features-row'>
              <div className='features-column'>
                <div>
                  <img
                    src={theme === 'dark' ? brainstromDark : brainstromLight}
                    alt='BrainStrom Icon'
                    className='feature-img'
                  />
                </div>
                <div className='feature-heading'>BrainStrom</div>
                <div className='feature-section'>
                  Ideate with your team in real time
                </div>
              </div>
              <div className='features-column'>
                <div>
                  <img
                    src={theme === 'dark' ? ideaDark : ideaLight}
                    alt='Idea Icon'
                    className='feature-img'
                  />
                </div>
                <div className='feature-heading'>Idea</div>
                <div className='feature-section'>
                  Create a strategy and roadmap your work
                </div>
              </div>
            </div>
            <div className='features-row'>
              <div className='features-column'>
                <div>
                  <img
                    src={theme === 'dark' ? designDark : designLight}
                    alt='Design Icon'
                    className='feature-img'
                  />
                </div>
                <div className='feature-heading'>Design</div>
                <div className='feature-section'>
                  Go from brilliant idea to finished product with ease
                </div>
              </div>
              <div className='features-column'>
                <div>
                  <img
                    src={
                      theme === 'dark' ? collaborationDark : collaborationLight
                    }
                    alt='Design Icon'
                    className='feature-img'
                  />
                </div>
                <div className='feature-heading'>Meet</div>
                <div className='feature-section'>
                  Engage during meetings and collaborate in real time
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='footer'>
        Developed by <b>Indragith</b>
        <div className='footer-icons'>
          <a
            href='https://github.com/Indragith20'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Tooltip text='Github'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                <path d='M9 18c-4.51 2-5-2-7-2'></path>
              </svg>
            </Tooltip>
          </a>
          <a
            target='_blank'
            href='https://twitter.com/indragith2'
            rel='noopener noreferrer'
          >
            <Tooltip text='Twitter'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
              </svg>
            </Tooltip>
          </a>
          <a
            href='https://www.linkedin.com/in/indragith-manimaran/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Tooltip text='LinkedIn'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                <rect x='2' y='9' width='4' height='12'></rect>
                <circle cx='4' cy='4' r='2'></circle>
              </svg>
            </Tooltip>
          </a>
        </div>
      </footer>
    </div>
  );
}
