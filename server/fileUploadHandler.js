import { getStorage } from 'firebase-admin/storage';


function getStorageBucketUrl() {
  // eslint-disable-next-line no-undef
  let { storageBucket } = JSON.parse(process.env.CLIENT_CONFIG);
  return storageBucket;
}

export const getSignedUrl = async (filePath, action = 'read') => {
  const expires = Date.now() + 10 * 60 * 1000; // 10 minutes from now
  let signedUrl = await getStorage().bucket(getStorageBucketUrl()).file(filePath).getSignedUrl({
    action,
    version: 'v4',
    expires
  });

  return signedUrl;
}


export const deleteImage = async (filePath) => {
  return new Promise((resolve, reject) => {
    getStorage().bucket(getStorageBucketUrl()).file(filePath).delete().then((value) => {
      resolve('File Deleted Successfully');
    }).catch(err => {
      console.log('Error while deleting image from firebase');
      console.log(err);
      reject('Error while deleting Image');
    })
  })
}

export const deleteFolder = async(folderName) => {
  return new Promise((resolve, reject) => {
    getStorage().bucket(getStorageBucketUrl()).deleteFiles({
      prefix: `${folderName}/`
    }).then(() => {
      resolve('Files Deleted Successfully');
    }).catch(err => {
      console.log('Error while deleting folder from firebase');
      console.log(err);
      reject('Error while deleting Images');
    })
  })
}