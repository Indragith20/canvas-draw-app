import { ImageIdb } from './idb';

let imgCache = new Map();

function loadImage(imgUrl, onLoadCallback, width = null, height = null) {
  const img = new Image();
  img.onload = function () {
    onLoadCallback(img);
  };
  img.src = imgUrl;
  img.width = width || (window.innerWidth / 4);
  img.height = height || (window.innerHeight / 4);
}

function saveImageToDb(id, imgUrl) {
  ImageIdb.updateDb(imgUrl, id);
}

function getImageFromDb(id) {
  return ImageIdb.getDataFromIdb(id);
}

function drawImage({ imageId, width, height, x, y }, context) {
  return new Promise((resolve, reject) => {
    let imageInCache = imgCache.get(imageId);
    if (imageInCache) {
      context.drawImage(imageInCache.image, x, y, width, height);
      resolve();
    } else {
      getImageFromDb(imageId).then((imgUrl) => {
        loadImage(imgUrl, (img) => {
          context.drawImage(img, x, y, width, height);
          imgCache.set(imageId, { image: img, width: width, height: height });
          resolve();
        }, width, height);
      }).catch(err => {
        resolve(err);
      })
    }
  })
}

export { loadImage, saveImageToDb, getImageFromDb, drawImage };