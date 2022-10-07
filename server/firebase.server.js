/* eslint-disable no-undef */

import {
  getApps as getServerApps,
  initializeApp as initializeServerApp,
  cert as serverCert,
} from 'firebase-admin/app';

import {
  getApps as getClientApps,
  initializeApp as initializeClientApp
} from 'firebase/app';

import { getAuth as getServerAuth } from 'firebase-admin/auth';
import { getAuth as getClientAuth } from 'firebase/auth';

if (getClientApps().length === 0) {
  let config;
  if (!process.env.CLIENT_CONFIG) {
    throw new Error('Missing CLIENT_CONFIG environment variable, ');
  } else {
    try {
      config = JSON.parse(process.env.CLIENT_CONFIG);
    } catch {
      throw Error('Invalid CLIENT_CONFIG environment variable');
    }
  }
  initializeClientApp(config);
}

if (getServerApps().length === 0) {
  let config;
  if (!process.env.SERVICE_ACCOUNT) {
    throw new Error('Missing SERVICE_ACCOUNT environment variable');
  } else {
    try {
      const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);
      config = {
        credential: serverCert(serviceAccount),
      };
    } catch {
      throw Error('Invalid SERVICE_ACCOUNT environment variable');
    }
  }
  initializeServerApp(config);
}

export {
  getServerAuth,
  getClientAuth
};