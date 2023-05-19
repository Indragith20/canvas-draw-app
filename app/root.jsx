import React from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';
import styles from './styles/global.css';
import { ThemeContext, ThemeProvider } from './contexts/themeContext';
import { GlobalLoading, LoaderLinks } from './components/Common/Loader/Loader';
import { ToastStyleLinks } from './components/Common/Toast/SingleToast';
import ToastProvider from './components/Common/Toast/ToastContext';

import FavIcon16 from './assets/favicon-16x16.png';
import FavIcon32 from './assets/favicon-32x32.png';
import FavIcon96 from './assets/favicon-96x96.png';
import AppleTouchIcon180 from './assets/apple-icon-180x180.png';
import AppleTouchIcon152 from './assets/apple-icon-152x152.png';
import AppleTouchIcon144 from './assets/apple-icon-144x144.png';
import AppleTouchIcon120 from './assets/apple-icon-120x120.png';
import AppleTouchIcon114 from './assets/apple-icon-114x114.png';
import AppleTouchIcon76 from './assets/apple-icon-76x76.png';
import AppleTouchIcon72 from './assets/apple-icon-72x72.png';
import AppleTouchIcon60 from './assets/apple-icon-60x60.png';
import AppleTouchIcon57 from './assets/apple-icon-57x57.png';
import AndroidTouchIcon48 from './assets/android-icon-48x48.png';
import AndroidTouchIcon192 from './assets/android-icon-192x192.png';

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Mali:ital,wght@0,200;0,300;0,400;0,700;1,200;1,400&display=swap'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: AppleTouchIcon180
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: AppleTouchIcon152
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: AppleTouchIcon144
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: AppleTouchIcon120
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: AppleTouchIcon114
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: AppleTouchIcon76
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: AppleTouchIcon72
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: AppleTouchIcon60
    },
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: AppleTouchIcon57
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: FavIcon32
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: FavIcon16
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: FavIcon96
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '48x48',
      href: AndroidTouchIcon48
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: AndroidTouchIcon192
    },
    ...LoaderLinks(),
    ...ToastStyleLinks()
  ];
}
export function meta() {
  return [{ title: 'Draw Anything' }];
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=1.0, user-scalable=0'
        />
        <title>Draw Anything</title>
        <Meta />
        <Links />
      </head>
      <ThemeProvider defaultTheme={'dark'}>
        <ThemeContext.Consumer>
          {({ theme }) => {
            return (
              <body
                className={
                  theme === 'dark' ? 'dark-background' : 'light-background'
                }
              >
                <ToastProvider>
                  <Outlet />
                  <GlobalLoading />
                  <ScrollRestoration />
                  <Scripts />
                  <LiveReload />
                  <div id='modal-root'></div>
                </ToastProvider>
              </body>
            );
          }}
        </ThemeContext.Consumer>
      </ThemeProvider>
    </html>
  );
}
