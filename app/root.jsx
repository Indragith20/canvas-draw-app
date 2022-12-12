import React, { useContext, useState } from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';
import styles from './styles/global.css';
import { ThemeContext, ThemeProvider, useTheme } from './contexts/themeContext';
import { GlobalLoading, LoaderLinks } from './components/Common/Loader/Loader';
import Toast, { ToastStyleLinks } from './components/Common/Toast/SingleToast';
import ToastProvider from './components/Common/Toast/ToastContext';
import ToastContainer from './components/Common/Toast/ToastContainer';

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
      crossorgin: 'true'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Mali:ital,wght@0,200;0,300;0,400;0,700;1,200;1,400&display=swap'
    },
    ...LoaderLinks(),
    ...ToastStyleLinks()
  ];
}
export function meta() {
  return { title: 'Draw Anything' };
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <title>Draw Anything</title>
        <Meta />
        <Links />
      </head>
      <ThemeProvider defaultTheme={'dark'}>
        <ThemeContext.Consumer>
          {({ theme }) => {
            console.log(theme);
            return (
              <body
                className={
                  theme === 'dark' ? 'dark-background' : 'light-background'
                }
              >
                <ToastProvider>
                  <GlobalLoading />
                  <Outlet />
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
