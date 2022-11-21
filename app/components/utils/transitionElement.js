function afterTransition(element) {
  return new Promise(resolve => {
    const duration = Number(
      getComputedStyle(element)
        .animationDuration
        .replace('s', '')
        .replace('m', '')
    ) * 1000;


    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default afterTransition;