import React, { useRef, useEffect } from 'react';
import styles from './UserActivity.css';
import { useSocket } from '../../contexts/socketContext';


export function UserActivityLinks() {
  return [{ rel: 'stylesheet', href: styles }]
}

function UserActivity({ scrollX, scrollY, scalingFactor, width, height, addShape, removeShape, deleteAllShapes }) {
  const userActivityCanvasRef = useRef(null);
  //const [users, setUsers] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    console.log('Socket Changed');
  }, [socket])


  useEffect(() => {
    if (!socket) {
      return;
    }

    function onMouseMove(data) {
      //console.log('Mouse Move', data);
    }

    function onUpdateShape(data) {
      if (data.action === 'add') {
        addShape(data.shape);
      } else if (data.action === 'delete') {
        removeShape(data.shape);
      }
    }



    socket.on('mousemove', onMouseMove);
    socket.on('updateshape', onUpdateShape);
    socket.on('deleteAllShapes', deleteAllShapes);

    return () => {
      socket.off('mousemove', onMouseMove);
      socket.off('updateshape', onUpdateShape);
      socket.off('deleteAllShapes', deleteAllShapes);
    };
  }, [socket, addShape, removeShape, deleteAllShapes]);

  return (
    <canvas id="userActivityCanvas" ref={userActivityCanvasRef} width={width} height={height}></canvas>
  )
}

export default UserActivity;