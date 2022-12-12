import React from 'react';
import { useActionData, Form, useTransition, Link } from '@remix-run/react';
import { createRoom } from '../../server/db';
import { redirect } from '@remix-run/node';
import { commitSession, getSession } from '../sessions';
import ValidationMessage from '~/components/ValidationMessage/ValidationMessage';
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

export const links = () => [
  ...HeaderStyleLinks(),
  ...LogoLinks(),
  { rel: 'stylesheet', href: styles }
];

export async function loader({ request }) {
  const session = await getSession(request.headers.get('Cookie'));
  console.log(session.has('__session'));
  if (session.has('__session')) {
    console.log('Isnndie UserId');
    // Redirect to the home page if they are already signed in.
    return redirect('/rooms');
  }

  return null;
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

  console.log(draw);
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
      <Header headerLinks={[]} />
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
              <button className='btn-home sign-up-home'>Sign Up</button>
              <button className='btn-home without-login'>
                Try Without Login
              </button>
            </div>
            <div className='login-action'>Already have an account ? Login</div>
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
    </div>
  );
}
