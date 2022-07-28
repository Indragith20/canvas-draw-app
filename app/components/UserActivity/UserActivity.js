import React, { useRef, useState, useContext, useEffect } from 'react';
import { useSocket } from '../../contexts/socketContext';


function UserActivity({ scrollX, scrollY, scalingFactor, width, height }) {
  const userActivityCanvasRef = useRef(null);
  const [users, setUsers] = useState([]);
  const socket = useSocket();

  useEffect(() => {

    function onMouseMove(data) {
      console.log(data);
    }

    socket.on('mousemove', onMouseMove);

    return () => {
      socket.off('mousemove', onMouseMove);
    }
  }, [])

  return (
    <canvas id="userActivityCanvas" ref={userActivityCanvasRef} width={width} height={height}></canvas>
  )
}