import React, { useRef, useEffect, useState } from 'react';
import styles from './UserActivity.css';
import { useSocket } from '../../contexts/socketContext';
import { changeFromOneScalingFactor } from '../utils/redrawCanvas';
import { useTheme } from '~/contexts/themeContext';
import { drawText } from '../utils/drawShapes';


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
  const userActivityContext = useRef(null);
  const users = useRef({});
  const socket = useSocket();
  const { theme } = useTheme();
  const [redraw, setRedraw] = useState(false);

  useEffect(() => {
    userActivityContext.current = userActivityCanvasRef.current.getContext('2d');
  }, []);

  useEffect(() => {
    userActivityContext.current.clearRect(0, 0, userActivityCanvasRef.current.width, userActivityCanvasRef.current.height);
    userActivityContext.current.strokeStyle = '#ccdef5';
    //
    userActivityContext.current.fillStyle = theme === 'dark' ? "#424242" : '#000000';
    userActivityContext.current.lineWidth = 1.0;
    //userActivityContext.current.globalAlpha = 0.75;
    Object.keys(users.current).forEach((user => {
      let x = changeFromOneScalingFactor(users.current[user].x, scalingFactor) + scrollX;
      let y = changeFromOneScalingFactor(users.current[user].y, scalingFactor) + scrollY;
      userActivityContext.current.strokeStyle = users.current[user].color ? users.current[user].color : 'red';
      userActivityContext.current.fillStyle = users.current[user].color ? users.current[user].color : 'red';
      userActivityContext.current.lineWidth = "1"
      userActivityContext.current.beginPath();
      userActivityContext.current.moveTo(x - 7, y - 7);
      userActivityContext.current.lineTo(x, y + 10);
      userActivityContext.current.lineTo(x + 10, y);

      userActivityContext.current.fill();
      //userActivityContext.current.closePath();


      drawText(users.current[user].name, userActivityContext.current, x + 5, y + 5, 40, baseLineHeight, users.current[user].color ? users.current[user].color : 'red', 14)
      // userActivityContext.current.strokeRect(x + 5, y + 5, userActivityContext.current.measureText(users.current[user].name).width + 10, 30);
      // userActivityContext.current.stroke();

    }))
  }, [baseLineHeight, scalingFactor, scrollX, scrollY, theme, redraw])



  useEffect(() => {
    if (!socket) {
      return;
    }

    function onMouseMove(data) {
      if (users.current[data.user.id]) {
        users.current = { ...users.current, [data.user.id]: { ...users.current[data.user.id], x: data.x, y: data.y, ...data.user } };
      } else {
        users.current = { ...users.current, [data.user.id]: { x: data.x, y: data.y, ...data.user } };
      }

      setRedraw(redraw => !redraw);
    }

    function onUpdateShape(data) {
      if (data.action === 'add') {
        addShape(data.shape);
      } else if (data.action === 'delete') {
        removeShape(data.shape);
      }
    }

    function onLiveUserAdded(data) {
      users.current = { ...users.current, [data.userDetails.id]: { ...data.userDetails, color: userColorCodes[Math.ceil(Math.random() * 6)] } };
      setRedraw(redraw => !redraw);
    }

    function onRemoveLiveUser(data) {
      delete users.current[data.userDetails.id];
      setRedraw(redraw => !redraw);
    }


    socket.on('mousemove', onMouseMove);
    socket.on('updateshape', onUpdateShape);
    socket.on('deleteAllShapes', deleteAllShapes);
    socket.on('setliveuser', onLiveUserAdded);
    socket.on('removeliveuser', onRemoveLiveUser);
    console.log('Listener added');
    return () => {
      socket.off('mousemove', onMouseMove);
      socket.off('updateshape', onUpdateShape);
      socket.off('deleteAllShapes', deleteAllShapes);
      socket.off('setliveuser', onLiveUserAdded);
      socket.off('removeliveuser', onRemoveLiveUser);
    };
  }, [socket, addShape, removeShape, deleteAllShapes]);

  return (
    <canvas id="userActivityCanvas" ref={userActivityCanvasRef} width={width} height={height}></canvas>
  )
}

export default React.memo(UserActivity);