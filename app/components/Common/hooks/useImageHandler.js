import useEventListener from './useEventListener';


function useImageHandler({ tempCanvas }) {

  function convertImage(item) {
    const blob = item.getAsFile();
    const img = new Image();
    console.log(blob);
    const reader = new FileReader();
    reader.onload = function (e) {
      img.onload = function () {
        let tempContext = tempCanvas.current.getContext('2d');
        tempContext.drawImage(img, tempCanvas.current.width / 2, tempCanvas.current.height / 2, img.width, img.height);
      };
      console.log(e.target.result);
      img.src = e.target.result;
      img.width = window.innerWidth / 4;
      img.height = window.innerHeight / 4;
    };

    reader.readAsDataURL(blob);
  }
  function onPasteImage(e) {
    e.preventDefault();
    console.log('paste image event called');
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (const clipboardItem of items) {
      console.log(clipboardItem);
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