function afterTransition(element) {
  return new Promise(resolve => {
    console.log(element)
    console.log(getComputedStyle(element)
      .animationDuration);
    const duration = Number(
      getComputedStyle(element)
        .animationDuration
        .replace('s', '')
        .replace('m', '')
    ) * 1000;

    console.log('Duration ', duration);

    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default afterTransition;