class SelectTool {
  constructor(shapes) {
    this.shapes = shapes;
  }

  getElementsAtPosition(x, y) {
    let returnElement = null;
    if (this.shapes.length > 0) {
      this.shapes.forEach(shape => {
        if (shape.type === 'rectangle') {
          if (shape.x <= x && x <= shape.endX) {
            console.log('Iside1 ');
            if (shape.y <= y && y <= shape.endY) {
              console.log('Iside2')
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