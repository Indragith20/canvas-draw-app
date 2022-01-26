/** This file can be Removed. Not Necessary. Need opnly for reference or backup */
class SelectTool {
  constructor(shapes) {
    this.shapes = shapes;
  }

  getElementsAtPosition(x, y, shapes) {
    let returnElement = null;
    if (shapes.length > 0) {
      shapes.forEach(shape => {
        if (shape.type === 'rectangle') {
          let width = shape.width;
          let height = shape.height;
          let endX = shape.x + width;
          let endY = shape.y + height;
          if (shape.x <= x && x <= endX) {
            if (shape.y <= y && y <= endY) {
              returnElement = shape;
            }
          }
        } else if (shape.type === 'line' || shape.type === 'arrow') {
          let startingXBuffer = shape.x - 10;
          let endingXBuffer = shape.endX + 10;
          let startingYBuffer = shape.y - 10;
          let endingYBuffer = shape.endY + 10;

          let maxX = Math.max(startingXBuffer, endingXBuffer);
          let maxY = Math.max(startingYBuffer, endingYBuffer);

          let minX = Math.min(startingXBuffer, endingXBuffer);
          let minY = Math.min(startingYBuffer, endingYBuffer);

          if (minX <= x && x <= maxX) {
            if (minY <= y && y <= maxY) {
              returnElement = shape;
            }
          }
        } else if (shape.type === 'text') {
          //
        }

      })
    }
    return returnElement;
  }
}


export default SelectTool;