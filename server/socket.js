import { addLiveUsers, getLiveUsers, removeLiveUsers } from "./db";
import { getAllCachedDataByKey, getCachedData, setDataForCaching } from "./redis";
//const { addLiveUsers, getLiveUsers, removeLiveUsers } = require('./db');

function emitData(io, socket, key, data) {
  if (data.roomId) {
    getAllCachedDataByKey(data.roomId).then((value) => {
      if (value.liveUserFetchNeeded === 'true') {
        getLiveUsers(data.roomId).then((clients) => {
          if (clients && clients.length > 0) {
            setDataForCaching(data.roomId, 'liveUsers', JSON.stringify(clients));
            setDataForCaching(data.roomId, 'liveUserFetchNeeded', 'false');
            clients.forEach((client) => {
              if (client.id !== socket.id) {
                io.to(client.id).emit(key, data);
              }
            })
          } else {
            setDataForCaching(data.roomId, 'liveUsers', JSON.stringify([]));
            setDataForCaching(data.roomId, 'liveUserFetchNeeded', 'false');
          }
        })
      } else {
        getCachedData(data.roomId, 'liveUsers').then((clients) => {
          if (clients) {
            let parsedClients = JSON.parse(clients);
            if (parsedClients && parsedClients.length > 0) {
              parsedClients.forEach((client) => {
                if (client.id !== socket.id) {
                  io.to(client.id).emit(key, data);
                }
              })
            }
          }
        })
      }
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
    if (data.roomId) {
      setDataForCaching(data.roomId, 'liveUserFetchNeeded', 'true');
      addLiveUsers(data.roomId, socket.id, data.userDetails);
    }
  });

  socket.on('disconnect', (data) => {
    console.log('socket disconnected');
    removeLiveUsers(socket.id);
  })
}


export { onSocketConnect };