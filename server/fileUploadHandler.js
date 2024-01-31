import { getStorage } from 'firebase-admin/storage';

export const getSignedUrl = async (filePath, action = 'read') => {
  const expires = Date.now() + 10 * 60 * 1000; // 10 minutes from now
  // eslint-disable-next-line no-undef
  let { storageBucket } = JSON.parse(process.env.CLIENT_CONFIG);
  let signedUrl = await getStorage().bucket(storageBucket).file(filePath).getSignedUrl({
    action,
    version: 'v4',
    expires
  });

  return signedUrl;
}