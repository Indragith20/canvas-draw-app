import useEventListener from './useEventListener';
import { v4 as uuidv4 } from 'uuid';
import { loadImage, saveImageToDb } from '~/components/utils/imgUtils';

function useImageHandler({ lastClickedRef, imgUpdate }) {


  function convertImage(item) {
    const blob = item.getAsFile();
    
    const reader = new FileReader();
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
          endY: imageEndY
        };
        imgUpdate(callbackObj);
      });
      saveImageToDb(imageId, e.target.result);
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

  useEventListener('paste', onPasteImage, document);
}

export default useImageHandler;