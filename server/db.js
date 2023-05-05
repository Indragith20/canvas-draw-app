import { getFirestore, FieldValue, Timestamp } from 'firebase-admin/firestore';
const dataPoint = (collectionPath) => {
  return getFirestore().collection(collectionPath);
};


const db = {
  rooms: () => dataPoint('rooms'),
  roomDetails: () => dataPoint('roomDetails'),
  users: () => dataPoint('users'),
  activeUsers: () => dataPoint('activeUsers'),
  room: (roomId) => dataPoint(`rooms/${roomId}`),
  user: (userId) => dataPoint(`users/${userId}`),
  shapeCollection: (roomId) => dataPoint(`rooms/${roomId}/shapes`),
  collaborators: (roomId) => dataPoint(`rooms/${roomId}/collaborators`),
}

/**
 * Collbaorator data sample
 * name: userName, color: 'blue', isActive: true, id: userId
 */


async function createRoom(userId, userName, roomName) {
  return new Promise((resolve, reject) => {
    const newRoomDetailsRef = db.roomDetails().doc();
    const newRoomRef = db.rooms().doc(newRoomDetailsRef.id);
    addRoomToUser(userId, newRoomRef.id).then(() => {
      let mainRoomPromise = newRoomRef.set({ isCreated: true });
      let collaboratorPromise = db.collaborators(newRoomRef.id).doc(userId).set({ name: userName, color: 'blue', isActive: true, id: userId });
      let roomPromise = newRoomDetailsRef.set({ id: newRoomRef.id, roomName, createdAt: new Date(Timestamp.now().toDate()), createdBy: userName, createdUserId: userId });
      let shapePromise = db.shapeCollection(newRoomRef.id).doc('shapeList').set({ shapeList: [] })
      Promise.all([mainRoomPromise, collaboratorPromise, roomPromise, shapePromise]).then(() => {
        resolve({ id: newRoomRef.id, userId: userId });
      }).catch(err => {
        reject({ message: err });
      })
    })
  })
}

function updateRoom(roomId, updatedRoom) {
  return new Promise((resolve, reject) => {
    db.roomDetails().doc(roomId).update(updatedRoom).then(() => {
      resolve({ id: roomId, message: 'success' });
    }).catch(err => {
      reject({ message: err })
    })
  })
}

function deleteRoom(userId, roomId) {
  return new Promise((resolve, reject) => {
    // delete room requires delete from three collection and two subcollection. Check whether there is an alternative way
    let userRef = db.users().doc(userId);
    userRef.get().then((snapshot) => {
      if (snapshot.exists) {
        let { rooms } = snapshot.data();
        let updatedRooms = rooms.filter(room => room !== roomId);
        userRef.update({ rooms: updatedRooms }).then(() => {
          let promises = [];
          let roomRef = db.rooms().doc(roomId);
          let roomDetailsRef = db.roomDetails().doc(roomId);
          roomDetailsRef.get().then(doc => {
            if (!doc.exists) {
              resolve({ message: 'success' });
            } else {
              let data = doc.data();
              if (data.createdUserId === userId) {
                promises.push(db.roomDetails().doc(roomId).delete());
                promises.push(roomRef.collection('collaborators').get().then((snapshot) => {
                  let collectionDeletePromise = [];
                  snapshot.docs.forEach(doc => {
                    collectionDeletePromise.push(doc.ref.delete());
                  });
                  return collectionDeletePromise;
                }))
                promises.push(roomRef.collection('shapes').doc('shapeList').delete());
                promises.push(roomRef.delete());
                Promise.all(promises).then(() => {
                  resolve({ message: 'success' })
                }).catch(err => {
                  reject({ message: err })
                })
              } else {
                promises.push(roomRef.collection('collaborators').get().then((snapshot) => {
                  let collectionDeletePromise = [];
                  snapshot.docs.forEach(doc => {
                    let collaboratorId = doc.id;
                    if (collaboratorId === userId) {
                      collectionDeletePromise.push(doc.ref.delete());
                    }
                  });
                  return collectionDeletePromise;
                }))
                Promise.all(promises).then(() => {
                  resolve({ message: 'success' })
                }).catch(err => {
                  reject({ message: err })
                })
              }
            }
          })

        }).catch(err => {
          reject({ message: err });
        })
      }
    });
  })
}

function addShape(roomId, shape) {
  const shapeJSON = JSON.parse(shape);
  //const newShapeRef = db.shapeCollection(roomId).doc(`${shape.id}`);
  return new Promise((resolve, reject) => {
    db.shapeCollection(roomId).doc('shapeList').update({
      shapeList: FieldValue.arrayUnion({ ...shapeJSON })
    }).then(() => {
      resolve({ id: shapeJSON.id })
    }).catch(err => {
      reject({ error: err })
    })
  });
}

async function deleteShape(roomId, shapeTobeDeleted) {
  return new Promise((resolve, reject) => {
    const shapeJSON = JSON.parse(shapeTobeDeleted);
    let docRef = db.shapeCollection(roomId).doc('shapeList');
    docRef.get().then((snapshot) => {
      if (snapshot.exists) {
        let { shapeList } = snapshot.data();
        let updatedShapeList = shapeList.filter(shape => shape.id !== shapeJSON.id);
        docRef.set({ shapeList: updatedShapeList }).then(() => {
          resolve({ message: 'success' });
        }).catch((err) => {
          reject(err);
        });
      }
    })
  })

  //return await db.shapeCollection(roomId).doc(`${shapeJSON.id}`).delete();
}

function deleteAllShapes(roomId) {
  return new Promise((resolve, reject) => {
    let docRef = db.shapeCollection(roomId).doc('shapeList');
    docRef.set({ shapeList: [] }).then(() => {
      resolve({ message: 'success' });
    }).catch(err => {
      reject(err);
    })
  })
}

async function updateShape(roomId, shapeTobeUpdated) {
  const shapeJSON = JSON.parse(shapeTobeUpdated);
  return new Promise((resolve, reject) => {
    let docRef = db.shapeCollection(roomId).doc('shapeList');
    docRef.get().then((snapshot) => {
      if (snapshot.exists) {
        let { shapeList } = snapshot.data();
        let updatedShapeList = shapeList.map(shape => {
          if (shape.id === shapeJSON.id) {
            return { ...shapeJSON }
          } else {
            return shape;
          }
        });
        docRef.set({ shapeList: [...updatedShapeList] }).then(() => {
          resolve({ message: 'success' });
        }).catch((err) => {
          reject(err);
        });
      }
    })
  })
  //return await db.shapeCollection(roomId).doc(`${shapeJSON.id}`).update({ ...shapeJSON });
}

async function addCollaborator(roomId, collaborator) {
  const newCollaboratorRef = db.collaborators(roomId).doc(collaborator.id);
  return await newCollaboratorRef.set({ ...collaborator });
}

async function updateCollaborator(roomId, collaborator) {
  return await db.collaborators(roomId).doc(collaborator.id).update({ ...collaborator })
}

function getCollaboratorsList(roomId) {
  return new Promise((resolve, reject) => {
    db.collaborators(roomId).get().then((snapshot) => {
      let collaboratorsList = [];
      if (snapshot.empty) {
        resolve({ collaborators: collaboratorsList });
      } else {
        snapshot.docs.forEach(doc => {
          collaboratorsList.push(doc.data());
        });
        resolve({ collaborators: collaboratorsList });
      }
    }).catch(err => {
      reject({ message: err });
    })
  })
}

function getShapes(roomId) {
  return new Promise((resolve, reject) => {
    db.shapeCollection(roomId).get().then((snapshot) => {
      let data = [];
      if (snapshot.empty) {
        data = [];
      } else {
        snapshot.forEach(doc => {
          data.push(doc.data());
        })
      }
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}


function getUsers(roomId) {
  return new Promise((resolve, reject) => {
    db.collaborators(roomId).get().then((snapshot) => {
      let data = [];
      if (snapshot.empty) {
        data = [];
      } else {
        snapshot.forEach(doc => {
          data.push(doc.data());
        })
      }
      resolve(data);
    }).catch(err => {
      reject(err);
    })
  })
}

function getInitialDrawData(roomId) {
  return new Promise((resolve, reject) => {
    isRoomExist(roomId).then(() => {
      Promise.all([getShapes(roomId), getUsers(roomId)]).then(([shapes, users]) => {
        resolve({ shapes: shapes && shapes.length > 0 ? shapes[0].shapeList : [], users: users && users.length > 0 ? users : [] })
      }).catch((err) => {
        reject({ message: err });
      })
    }).catch(() => {
      reject({ message: 'Room Does not Exist' })
    });
  });
}

function isRoomExist(roomId) {
  return new Promise((resolve, reject) => {
    db.rooms().doc(roomId).get().then((snapshot) => {
      if (snapshot.exists) {
        resolve(true)
      } else {
        reject(false);
      }
    })
  });
}

function addBulkShapes(shapes, roomId) {
  return new Promise((resolve, reject) => {
    let promises = [];
    shapes.forEach((shape) => {
      let newShapeRef = db.shapeCollection(roomId).doc();
      promises.push(newShapeRef.set({ ...shape, id: newShapeRef.id }))
    })
    Promise.all(promises).then(() => {
      resolve({ message: 'Shapes Added' });
    }).catch(err => {
      reject({ message: err })
    })
  })
}

async function deleteCollaborator(roomId, collaborator) {
  let collaboratorRef = db.shapeCollection(roomId).doc(collaborator.id);
  return await collaboratorRef.update({ isActive: false });
}

async function addUser(name, userId, email) {
  return new Promise((resolve, reject) => {
    let newUserRef = db.users().doc(userId);
    newUserRef.set({ name, id: userId, rooms: [], email }).then(() => {
      resolve({ userId: newUserRef.id });
    }).catch(err => {
      reject(err);
    })
  })
}

async function updateUser(preferences, userId) {
  return new Promise((resolve, reject) => {
    let newUserRef = db.users().doc(userId);
    newUserRef.update({ ...preferences, id: userId }).then(() => {
      resolve({ userId: newUserRef.id });
    }).catch(err => {
      reject(err);
    })
  })
}

function addRoomToUser(userId, roomId) {
  return new Promise((resolve, reject) => {
    let userRef = db.users().doc(userId);
    userRef.update({ rooms: FieldValue.arrayUnion(roomId) }).then(() => {
      resolve();
    }).catch(err => {
      reject(err);
    });
  })
}

function getUser(userId) {
  return new Promise((resolve, reject) => {
    let userRef = db.users().doc(userId);
    userRef.get().then((doc) => {
      if (!doc.exists) {
        resolve({ error: 'No such document!' });
      } else {
        resolve({ data: doc.data() });
      }
    }).catch(err => {
      reject(err);
    })

  })
}


function getRoomDetails(roomId) {
  return new Promise((resolve, reject) => {
    db.roomDetails().doc(roomId).get().then((doc) => {
      if (!doc.exists) {
        resolve({ data: {} });
      } else {
        let data = doc.data();
        resolve({ ...data, createdAt: data.createdAt.toDate() });
      }
    }).catch(err => {
      reject({ error: err })
    })
  })
}

function addLiveUsers(roomId, socketId, userDetails) {
  // TODO: cache in redis
  return new Promise((resolve, reject) => {

    Promise.all([
      addCollaborator(roomId, { ...userDetails, isActive: true }),
      db.activeUsers().doc(socketId).set({ id: socketId, collaboratorId: userDetails.id, roomId: roomId })
    ]).then(() => {
      resolve('Success');
    }).catch(err => {
      reject(err);
    })
  })
}

function getLiveUsers(roomId) {
  // TODO: cache in redis
  return new Promise((resolve, reject) => {
    db.activeUsers().where('roomId', '==', roomId).get().then((snapshot) => {
      if (snapshot.empty) {
        resolve([]);
      } else {
        let users = []
        snapshot.forEach(doc => {
          users.push(doc.data());
        });
        resolve(users);
      }
    }).catch(err => {
      reject(err);
    });
  })
}

function removeLiveUsers(socketId) {
  // TODO: cache in redis
  return new Promise((resolve, reject) => {
    let docRef = db.activeUsers().doc(socketId);
    docRef.get().then((snapshot) => {
      if (snapshot.exists) {
        let socketDetails = snapshot.data();
        Promise.all([
          updateCollaborator(socketDetails.roomId, { id: socketDetails.collaboratorId, isActive: false }),
          docRef.delete()
        ]).then(() => {
          resolve();
        }).catch(err => {
          reject(err);
        });
      } else {
        resolve();
      }
    }).catch(err => {
      reject(err);
    })
  })
}

async function deleteQueryBatch(db, query, resolve) {
  const snapshot = await query.get();

  const batchSize = snapshot.size;
  if (batchSize === 0) {
    // When there are no documents left, we are done
    resolve();
    return;
  }

  // Delete documents in a batch
  const batch = getFirestore().batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();

  // Recurse on the next process tick, to avoid
  // exploding the stack.
  // eslint-disable-next-line no-undef
  process.nextTick(() => {
    deleteQueryBatch(db, query, resolve);
  });
}

function resetAllLiveUsers() {
  // Think of alternate way
  return new Promise((resolve, reject) => {
    const collectionRef = db.activeUsers();
    const query = collectionRef.limit(50);

    deleteQueryBatch(db, query, resolve).catch(reject);
  })
}

export {
  isRoomExist,
  addUser,
  updateRoom,
  updateUser,
  addLiveUsers,
  addRoomToUser,
  createRoom,
  deleteRoom,
  getInitialDrawData,
  addShape,
  deleteShape,
  updateShape,
  addCollaborator,
  deleteCollaborator,
  deleteAllShapes,
  getUser,
  getRoomDetails,
  getUsers,
  getLiveUsers,
  removeLiveUsers,
  resetAllLiveUsers,
  addBulkShapes,
  getCollaboratorsList
}