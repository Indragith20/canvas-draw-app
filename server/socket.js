import { addLiveUsers, getLiveUsers, removeLiveUsers } from "./db";
//const { addLiveUsers, getLiveUsers, removeLiveUsers } = require('./db');

function emitData(io, socket, key, data) {
  if (data.roomId) {
    getLiveUsers(data.roomId).then((clients) => {
      clients.forEach((clientId) => {
        if (clientId !== socket.id) {
          io.to(clientId).emit(key, data);
        }
      })
    })
  }
}

function onSocketConnect(socket, io) {
  console.log(socket.id, 'connected');


  socket.emit('confirmation', 'connected!');

  socket.on('event', (data) => {
    console.log(socket.id, data);
    //clients.push(socket.id);
    socket.emit('event', 'pong');
  });


  socket.on('mousemove', (data) => {
    emitData(io, socket, 'mousemove', data);
  })

  socket.on('update', (data) => {
    emitData(io, socket, 'update', data);
  });

  socket.on('setliveuser', (data) => {
    console.log(data.userDetails);
    addLiveUsers(data.roomId, socket.id, data.userDetails);
  });

  socket.on('disconnect', (data) => {
    console.log('socket disconnected');
    removeLiveUsers(socket.id);
  })
}


export { onSocketConnect };