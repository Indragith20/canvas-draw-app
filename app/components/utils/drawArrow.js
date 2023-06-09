function drawArrow(startX, startY, endX, endY, ctx) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);


  let arrowAngle = Math.atan2(endY - startY, endX - startX);
  let arrowLength = 20;
  let arrowhead1X =
    endX - arrowLength * Math.cos(arrowAngle - Math.PI / 6);
  let arrowhead1Y =
    endY - arrowLength * Math.sin(arrowAngle - Math.PI / 6);
  let arrowhead2X =
    endX - arrowLength * Math.cos(arrowAngle + Math.PI / 6);
  let arrowhead2Y =
    endY - arrowLength * Math.sin(arrowAngle + Math.PI / 6);
  ctx.moveTo(endX, endY);
  ctx.lineTo(arrowhead1X, arrowhead1Y);
  ctx.moveTo(endX, endY);
  ctx.lineTo(arrowhead2X, arrowhead2Y);
  ctx.stroke();
  ctx.closePath();
}


export { drawArrow };