import { useLoaderData } from '@remix-run/react';
import useEventListener from './useEventListener';
import { v4 as uuidv4 } from 'uuid';
import { getSignedUrl, loadImage, saveImageToDb } from '~/components/utils/imgUtils';

function useImageHandler({ lastClickedRef, imgUpdate }) {
  const { roomId } = useLoaderData();

  async function uploadImage(blob, imageId, imageType) {
    let signedUrl = await getSignedUrl(roomId, imageId, imageType, 'write');

    fetch(signedUrl, {
      method: 'PUT',
      body: blob,
    }).then(() => {
      console.log('File uploaded successfully!');
    })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  }

  function convertImage(item) {
    const blob = item.getAsFile();
    const reader = new FileReader();
    let [,imageType] = blob.type.split('/');
    reader.onload = function (e) {
      let imageId = uuidv4();
      loadImage(e.target.result, (img) => {
        let { x, y } = lastClickedRef.current;
        let imageX = x || window.innerWidth / 2;
        let imageY =  y || window.innerHeight / 2;
        let imageEndX = x + img.width;
        let imageEndY = y + img.height;
        let callbackObj = {
          id: uuidv4(),
          imageId,
          type: 'image',
          x: imageX,
          y: imageY,
          width: img.width,
          height: img.height,
          endX: imageEndX,
          endY: imageEndY,
          imageType
        };
        imgUpdate(callbackObj);
      });
      saveImageToDb(imageId, e.target.result);
      roomId !== null && uploadImage(blob, imageId, imageType);
    };
    reader.readAsDataURL(blob);
  }

  function onPasteImage(e) {
    e.preventDefault();
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (const clipboardItem of items) {
      if (clipboardItem.type.indexOf('image/') !== -1) {
        // Do something with the image file.
        console.log(clipboardItem);
        convertImage(clipboardItem);
      }
    }
  }

  useEventListener('paste', onPasteImage);
}

export default useImageHandler;