import { addLiveUsers, getLiveUsers, removeLiveUsers, resetAllLiveUsers } from "./db";
//const { addLiveUsers, getLiveUsers, removeLiveUsers } = require('./db');

function emitData(io, socket, key, data) {
  if (data.roomId) {
    getLiveUsers(data.roomId).then((clients) => {
      clients.forEach((client) => {
        if (client.id !== socket.id) {
          io.to(client.id).emit(key, data);
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

  socket.on('updateshape', (data) => {
    console.log('Updating shape');
    emitData(io, socket, 'updateshape', data);
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