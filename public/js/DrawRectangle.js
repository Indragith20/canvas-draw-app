function drawRectangle(canvas, width, height, x, y) {
  canvas.clearRect(0, 0, width, height);
  canvas.strokeRect(x, y, width, height);
}

export { drawRectangle }