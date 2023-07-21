import { getEdges } from "../utils/common";
import { drawArrow } from "../utils/drawArrow";
import { drawDiamond, drawText } from "../utils/drawShapes";

class DrawShapeOnCanvas {
  constructor() {
    this.drawExisitingElementOnTemp = this.drawExisitingElementOnTemp.bind(this);
    this.strokeOuterRect = this.strokeOuterRect.bind(this);
  }


  strokeOuterRect(x, y, scaledWidth, scaledHeight, elementType = 'rectangle') {
    let edges = getEdges({
      type: elementType,
      x: x,
      y: y,
      endX: x + scaledWidth,
      endY: y + scaledHeight,
      width: scaledWidth,
      height: scaledHeight
    });
    this.tempContext.lineWidth = 2;
    this.tempContext.strokeStyle = "#9b9ef3";
    this.tempContext.strokeRect(x - 5, y - 5, scaledWidth + 10, scaledHeight + 10);
    edges.filter(([x, y]) => x !== null && y !== null).forEach(([x, y]) => {
      this.tempContext.setLineDash([]);
      this.tempContext.strokeStyle = "#9b9ef3";
      this.tempContext.beginPath();
      this.tempContext.arc(x, y, 5, 0, 2 * Math.PI);
      this.tempContext.stroke();
    })
  }


  drawExisitingElementOnTemp() {
    this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
    if (this.element.type === 'rectangle') {
      this.tempContext.beginPath();
      this.tempContext.strokeRect(this.element.x, this.element.y, this.element.width, this.element.height);
    } else if (this.element.type === 'arrow') {
      let { x, y, endX, endY } = this.element;
      drawArrow(x, y, endX, endY, this.tempContext);
    } else if (this.element.type === 'line') {
      this.tempContext.beginPath();
      this.tempContext.moveTo(this.element.x, this.element.y);
      this.tempContext.lineTo(this.element.endX, this.element.endY);
      this.tempContext.stroke();
      this.tempContext.closePath();
    } else if (this.element.type === 'circle') {
      this.tempContext.beginPath();
      this.tempContext.arc(this.element.x, this.element.y, this.element.radius, 0, 2 * Math.PI);
      this.tempContext.stroke();
    } else if (this.element.type === 'diamond') {
      let xCenter = this.element.x;
      let yCenter = this.element.y;
      let size = this.element.x - this.element.endX;
      drawDiamond(xCenter, yCenter, size, this.tempContext);
    } else if (this.element.type === 'text') {
      let color = this.selectedTheme === 'dark' ? '#FFFFFF' : '#000000';
      drawText(this.element.textContent, this.tempContext, this.element.x, this.element.y, this.element.width, undefined, color);
    }
  }


  restoreContext() {
    this.tempContext.strokeStyle = this.selectedTheme === 'dark' ? "#FFFFFF" : '#000000';
    this.tempContext.fillStyle = this.selectedTheme === 'dark' ? "#424242" : '#000000';
    this.tempContext.lineWidth = this.lineWidth;
  }
}


export default DrawShapeOnCanvas;