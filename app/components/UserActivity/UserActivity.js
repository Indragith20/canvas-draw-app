import React, { useRef, useEffect, useState } from 'react';
import styles from './UserActivity.css';
import { changeFromOneScalingFactor } from '../utils/redrawCanvas';
import { useTheme } from '~/contexts/themeContext';
import { drawText } from '../utils/drawShapes';
import useSocketListener from '../Common/hooks/useSocketListener';


export function UserActivityLinks() {
  return [{ rel: 'stylesheet', href: styles }]
}


//const userColorCodes = ['#ccdef5', '#cedecc', '#fdf6df', '#eee2fa', '#faf0b7', '#dadef9', '#f7d5bb'];
const userColorCodes = ["#FF38D1",
  "#8263FF",
  "#0095FF",
  "#00B874",
  "#FF3168",
  "#FFAB03"
];

function UserActivity({ scrollX, scrollY, scalingFactor, width, height, addShape, removeShape, deleteAllShapes, baseLineHeight, baseFontSize }) {
  const userActivityCanvasRef = useRef(null);
  const [users, updateUsers] = useState({});
  const { theme } = useTheme();

  useEffect(() => {

  }, []);

  useEffect(() => {
    let userActivityContext = userActivityCanvasRef.current.getContext('2d');
    userActivityContext.clearRect(0, 0, userActivityCanvasRef.current.width, userActivityCanvasRef.current.height);
    userActivityContext.strokeStyle = '#ccdef5';
    //
    userActivityContext.fillStyle = theme === 'dark' ? "#424242" : '#000000';
    userActivityContext.lineWidth = 1.0;
    //userActivityContext.current.globalAlpha = 0.75;
    Object.keys(users).forEach((user => {
      let x = changeFromOneScalingFactor(users.current[user].x, scalingFactor) + scrollX;
      let y = changeFromOneScalingFactor(users.current[user].y, scalingFactor) + scrollY;
      userActivityContext.strokeStyle = users.current[user].color ? users.current[user].color : 'red';
      userActivityContext.fillStyle = users.current[user].color ? users.current[user].color : 'red';
      userActivityContext.lineWidth = "1"
      userActivityContext.beginPath();
      userActivityContext.moveTo(x - 7, y - 7);
      userActivityContext.lineTo(x, y + 10);
      userActivityContext.lineTo(x + 10, y);

      userActivityContext.fill();
      //userActivityContext.current.closePath();


      drawText(users.current[user].name, userActivityContext, x + 5, y + 5, 40, baseLineHeight, users.current[user].color ? users.current[user].color : 'red', 14)

    }))
  }, [baseLineHeight, scalingFactor, scrollX, scrollY, theme, users])


  function onMouseMove(data) {
    if (users[data.user.id]) {
      updateUsers({ ...users, [data.user.id]: { ...users[data.user.id], x: data.x, y: data.y, ...data.user } })
    } else {
      updateUsers({ ...users, [data.user.id]: { x: data.x, y: data.y, ...data.user } })
    }
  }

  function onUpdateShape(data) {
    if (data.action === 'add') {
      addShape(data.shape);
    } else if (data.action === 'delete') {
      removeShape(data.shape);
    }
  }

  function onLiveUserAdded(data) {
    updateUsers({ ...users, [data.userDetails.id]: { ...data.userDetails, color: userColorCodes[Math.ceil(Math.random() * 6)] } })
  }

  function onRemoveLiveUser(data) {
    let idToBeFiltered = data.userDetails.id;

    if (users[idToBeFiltered]) {
      let { [idToBeFiltered]: _, ...filteredUsers } = users;
      updateUsers(filteredUsers);
    }
  }

  useSocketListener('mousemove', onMouseMove);
  useSocketListener('updateshape', onUpdateShape);
  useSocketListener('deleteAllShapes', deleteAllShapes);
  useSocketListener('setliveuser', onLiveUserAdded);
  useSocketListener('removeliveuser', onRemoveLiveUser);

  return (
    <canvas id="userActivityCanvas" ref={userActivityCanvasRef} width={width} height={height}></canvas>
  )
}

export default React.memo(UserActivity);