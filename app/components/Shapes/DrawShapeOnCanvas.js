import { drawArrow } from "../utils/drawArrow";
import { drawDiamond, drawText } from "../utils/drawShapes";

class DrawShapeOnCanvas {
  constructor() {
    this.drawExisitingElementOnTemp = this.drawExisitingElementOnTemp.bind(this);
  }


  drawExisitingElementOnTemp() {
    this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
    console.log('drawing existiong elemet', this.element);
    if (this.element.type === 'rectangle') {
      console.log('stroking rect');
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
}


export default DrawShapeOnCanvas;