function getElementsAtPosition(x, y, shapes) {
  let returnElement = null;
  let diffX = null;
  let diffY = null;
  if (shapes.length > 0) {
    shapes.forEach(shape => {
      if (shape.type === 'rectangle') {
        let width = shape.width;
        let height = shape.height;
        let endX = shape.x + width;
        let endY = shape.y + height;
        if (shape.x <= x && x <= endX) {
          if (shape.y <= y && y <= endY) {
            if (!diffX || !diffY) {
              returnElement = shape;
              diffX = Math.min(x - shape.x, endX - x);
              diffY = Math.min(y - shape.y, endY - y);
            } else {
              let currentDiffX = Math.min(x - shape.x, endX - x);
              let currentDiffY = Math.min(y - shape.y, endY - y);
              if (currentDiffX < diffX || currentDiffY < diffY) {
                returnElement = shape;
                diffX = currentDiffX;
                diffY = currentDiffY;
              }
            }

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
            if (!diffX || !diffY) {
              returnElement = shape;
              diffX = Math.min(x - minX, maxX - x);
              diffY = Math.min(y - minY, maxY - y);
            } else {
              let currentDiffX = Math.min(x - minX, maxX - x);
              let currentDiffY = Math.min(y - minY, maxY - y);
              if (currentDiffX < diffX || currentDiffY < diffY) {
                returnElement = shape;
                diffX = currentDiffX;
                diffY = currentDiffY;
              }
            }
          }
        }
      } else if (shape.type === 'text') {
        //
        if (shape.x <= x && x <= shape.endX) {
          if (shape.y <= y && y <= shape.endY) {
            if (!diffX || !diffY) {
              returnElement = shape;
              diffX = Math.min(x - shape.x, shape.endX - x);
              diffY = Math.min(y - shape.y, shape.endY - y);
            } else {
              let currentDiffX = Math.min(x - shape.x, shape.endX - x);
              let currentDiffY = Math.min(y - shape.y, shape.endY - y);
              if (currentDiffX < diffX || currentDiffY < diffY) {
                returnElement = shape;
                diffX = currentDiffX;
                diffY = currentDiffY;
              }
            }
          }
        }
      } else if (shape.type === 'circle') {
        let distancesquared = (x - shape.x) * (x - shape.x) + (y - shape.y) * (y - shape.y);
        if (distancesquared <= shape.radius * shape.radius) {
          // ??? how to calculate diff. buggy behaviour
          returnElement = shape;
        }

      } else if (shape.type === 'diamond') {
        // let startX = shape.x - (shape.width / 2);
        // let startY = shape.y;
        let width = shape.width;
        let height = shape.height;
        let endX = shape.startX + width;
        let endY = shape.startY + height;
        if (shape.startX <= x && x <= endX) {
          if (shape.startY <= y && y <= endY) {
            if (!diffX || !diffY) {
              returnElement = shape;
              diffX = Math.min(x - shape.startX, endX - x);
              diffY = Math.min(y - shape.startY, endY - y);
            } else {
              let currentDiffX = Math.min(x - shape.startX, endX - x);
              let currentDiffY = Math.min(y - shape.startY, endY - y);
              if (currentDiffX < diffX || currentDiffY < diffY) {
                returnElement = shape;
                diffX = currentDiffX;
                diffY = currentDiffY;
              }
            }
          }
        }
      } else if (shape.type === 'chalk') {
        // Implement divide and conquer ??
        let isMatched = false
        // shape.drawPoints.reduce((prev, curr) => {
        //   if ((prev.x < x && x > curr.x) && (prev.y < y && y > curr.y)) {
        //     isMatched = true;
        //   }
        // }, { x: 0, y: 0 });
        for (let i = 0; i < shape.drawPoints.length - 1; i++) {
          // let lessX = shape.drawPoints[i].x;
          // let greatX = shape.drawPoints[i + 1] ? shape.drawPoints[i + 1].x : shape.drawPoints[0]
          let isIncreasingX = shape.drawPoints[i].x <= shape.drawPoints[i + 1].x;
          let isIncreasingY = shape.drawPoints[i].y <= shape.drawPoints[i + 1].y;
          let firstCondition, secondCondition;
          if (isIncreasingX) {
            firstCondition = (shape.drawPoints[i].x <= x && x <= shape.drawPoints[i + 1].x);
          } else {
            firstCondition = (shape.drawPoints[i].x >= x && x >= shape.drawPoints[i + 1].x)
          }
          if (isIncreasingY) {
            secondCondition = (shape.drawPoints[i].y <= y && y <= shape.drawPoints[i + 1].y);
          } else {
            secondCondition = (shape.drawPoints[i].y >= y && y >= shape.drawPoints[i + 1].y);
          }
          if (firstCondition && secondCondition) {
            console.log("Matching coordintes", x, y);
            console.log("Matched coordintes - x ==>", shape.drawPoints[i].x, shape.drawPoints[i + 1].x);
            console.log("Matched coordintes - y ==>", shape.drawPoints[i].y, shape.drawPoints[i + 1].y);
            isMatched = true;
          }
        }
        if (isMatched) {
          returnElement = shape;
        }
      }

    })
  }
  return returnElement;
}

function getDistance(p1X, p1Y, p2X, p2Y) {
  return Math.sqrt(Math.pow(p1X - p2X, 2) + Math.pow(p1Y - p2Y, 2))
}

function getChalkRectValues(points) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const { x, y } of points) {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }

  return [minX, minY, maxX, maxY];
}


export { getElementsAtPosition, getDistance, getChalkRectValues };