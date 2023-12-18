import { addLiveUsers, getLiveUsers, removeLiveUsers } from "./db";
import { getAllCachedDataByKey, getCachedData, setDataForCaching } from "./redis";

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

  socket.emit('confirmation', 'connected!');

  socket.on('event', (data) => {
    //clients.push(socket.id);
    socket.emit('event', 'pong');
  });


  socket.on('mousemove', (data) => {
    emitData(io, socket, 'mousemove', data);
  })

  socket.on('updateshape', (data) => {
    emitData(io, socket, 'updateshape', data);
  });

  socket.on('deleteAllShapes', (data) => {
    emitData(io, socket, 'deleteAllShapes', data);
  })

  socket.on('setliveuser', (data) => {
    if (data.roomId) {
      setDataForCaching(data.roomId, 'liveUserFetchNeeded', 'true');
      emitData(io, socket, 'setliveuser', data);
      addLiveUsers(data.roomId, socket.id, data.userDetails);

    }
  });

  socket.on('removeliveuser', (data) => {
    if (data.roomId) {
      emitData(io, socket, 'removeliveuser', data);
      removeLiveUsers(socket.id);

    }
  })

  socket.on('disconnect', (data) => {
    removeLiveUsers(socket.id);
  })
}


export { onSocketConnect };