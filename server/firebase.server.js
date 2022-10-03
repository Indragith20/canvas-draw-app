/* eslint-disable no-undef */
const {
  getApps: getServerApps,
  initializeApp: initializeServerApp,
  cert: serverCert,
} = require('firebase-admin/app');
const {
  getApps: getClientApps,
  initializeApp: initializeClientApp,
} = require('firebase/app');
const { getAuth: getServerAuth } = require('firebase-admin/auth');
const { getAuth: getClientAuth } = require('firebase/auth');
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

module.exports = {
  auth: {
    server: getServerAuth(),
    client: getClientAuth(),
  }
};