import { ImageIdb } from './idb';

let imgCache = new Map();

function loadImage(imgUrl, onLoadCallback, width = null, height = null) {
  const img = new Image();
  img.onload = function () {
    onLoadCallback({ image: img, error: null });
    img.width = width || img.naturalWidth;
    img.height = height || img.naturalHeight;
  };
  img.onerror = function(err) {
    onLoadCallback({ error: 'Unable to load Image from db' })
  }
  img.src = imgUrl;
}

function saveImageToDb(id, imgUrl) {
  return ImageIdb.updateDb(imgUrl, id);
}

function getImageFromDb(id) {
  return ImageIdb.getDataFromIdb(id);
}

function deleteImageFromDb(id) {
  return ImageIdb.deleteFromDb(id);
}

function dataURLToBlob(dataURL) {
  return new Promise((resolve, reject) => {
    fetch(dataURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        resolve(blob);
      })
      .catch(error => {
        reject(error);
      });
  });
}

async function getSignedUrl(roomId, imageId, imageType, action) {
  let { url: signedUrl } = await fetch(`/getSignedUploadUrl?filePath=${roomId}/${imageId}.${imageType}&action=${action}`).then(res => res.json());

  return signedUrl;
}

async function uploadImage(blob, imageId, imageType, roomId) {
  let signedUrl = await getSignedUrl(roomId, imageId, imageType, 'write');

  fetch(signedUrl, {
    method: 'PUT',
    body: blob,
  }).then(() => {
    console.log('File uploaded successfully!');
  }).catch((error) => {
    console.error('Error uploading file:', error);
  });
}

function drawImage({ imageId, width, height, x, y, roomId, imageType }, context) {
  return new Promise((resolve, reject) => {
    let imageInCache = imgCache.get(imageId);
    if (imageInCache) {
      if (!imageInCache.error) {
        context.drawImage(imageInCache.image, x, y, width, height);
        resolve();
      } else {
        resolve();
      }
    } else {
      getImageFromDb(imageId).then(async (imgUrl) => {
        if (!imgUrl && roomId) {
          try {
            imgUrl = await getSignedUrl(roomId, imageId, imageType, 'read');
          } catch(err) {
            reject();
          }
        }
        loadImage(imgUrl, ({image: img, error = null}) => {
          if (error) {
            imgCache.set(imageId, { error });
            resolve();
          } else {
            context.drawImage(img, x, y, width, height);
            imgCache.set(imageId, { image: img, width: width, height: height, src: img.src });
            resolve();
          }
          
        }, width, height);
      }).catch(err => {
        resolve(err);
      })
    }
  })
}

async function updateImageForUndoRedoAction({ imageId, imageType, roomId }) {
  let imageInCache = imgCache.get(imageId);
  if (imageInCache) {
    let { src: dataURL } = imageInCache;
    let imageBlob = dataURLToBlob(dataURL);
    let promises = [];
    if (roomId) {
      promises.push(uploadImage(imageBlob, imageId, imageType, roomId));
    }
    promises.push(saveImageToDb(imageId, dataURL));
    await Promise.all(promises);
  }
}

async function deleteImageAction({ imageId }) {
  let promises = [];
  promises.push(deleteImageFromDb(imageId));
  await Promise.all(promises);
}

export { 
  loadImage, saveImageToDb, getImageFromDb, 
  drawImage, getSignedUrl, uploadImage, 
  dataURLToBlob, updateImageForUndoRedoAction,
  deleteImageAction
};
