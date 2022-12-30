import { redirect } from '@remix-run/node';
import { confirmPasswordReset, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';

import { destroySession, getSession } from '~/sessions';
import { addUser } from './db';
import { getServerAuth, getClientAuth } from './firebase.server';

export const checkSessionCookie = async (session) => {
  try {
    const decodedIdToken = await getServerAuth().verifySessionCookie(
      session.get('session') || ''
    );
    return decodedIdToken;
  } catch {
    return { uid: undefined };
  }
};

export const requireAuth = async (request, redirectTo = new URL(request.url).pathname) => {
  const session = await getSession(request.headers.get('cookie'));

  const { uid } = await checkSessionCookie(session);
  if (!uid) {
    const searchParams = new URLSearchParams([
      ["redirectTo", redirectTo],
    ]);
    throw redirect(`/signIn?${searchParams}`);
  }
  return getServerAuth().getUser(uid);
};

export const signIn = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(
    getClientAuth(),
    email,
    password
  );
  const idToken = await user.getIdToken();
  const expiresIn = 1000 * 60 * 60 * 24 * 7; // 1 week
  const sessionCookie = await getServerAuth().createSessionCookie(idToken, {
    expiresIn,
  });
  return { sessionCookie, user };
};

export const signUp = async (name, email, password) => {
  let { uid } = await getServerAuth().createUser({
    email,
    password,
    displayName: name,
  });
  console.log("added user success", uid);
  await addUser(name, uid, email);
  return await signIn(email, password);
};

export const generatePasswordResetLink = async (email) => {
  console.log('Resetting password', email);
  return await getServerAuth().generatePasswordResetLink(email);
  // return await sendPasswordResetEmail(getClientAuth(), email);
}

export const confirmResetpassword = async (code, newPassword) => {
  await confirmPasswordReset(getClientAuth(), code, newPassword);
}