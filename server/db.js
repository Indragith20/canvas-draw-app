import { getFirestore, FieldValue } from 'firebase-admin/firestore';
const dataPoint = (collectionPath) => {
  return getFirestore().collection(collectionPath)
};


const db = {
  rooms: () => dataPoint('rooms'),
  roomDetails: () => dataPoint('roomDetails'),
  users: () => dataPoint('users'),
  room: (roomId) => dataPoint(`rooms/${roomId}`),
  user: (userId) => dataPoint(`users/${userId}`),
  shapeCollection: (roomId) => dataPoint(`rooms/${roomId}/shapes`),
  collaborators: (roomId) => dataPoint(`rooms/${roomId}/collaborators`)
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
      let collaboratorPromise = db.collaborators(newRoomRef.id).doc().set({ name: userName, color: 'blue', isActive: true, id: userId });
      let roomPromise = newRoomDetailsRef.set({ id: newRoomRef.id, roomName });
      Promise.all([collaboratorPromise, roomPromise]).then(() => {
        console.log("Resolbve", userId);
        resolve({ id: newRoomRef.id, userId: userId });
      }).catch(err => {
        reject({ message: err });
      })
    })
  })
}

function addShape(roomId, shape) {
  const newShapeRef = db.shapeCollection(roomId).doc();
  console.log('New Id', newShapeRef.id)
  const shapeJSON = JSON.parse(shape);
  console.log('Addding Shape Called', roomId, shape);
  return new Promise((resolve, reject) => {
    newShapeRef.set({ ...shapeJSON, id: newShapeRef.id }).then((doc) => {
      console.log('Inside THen');
      resolve({ id: newShapeRef.id });
    }).catch(err => {
      reject({ error: err });
    });
  });
}

async function deleteShape(roomId, shape) {
  return await db.shapeCollection(roomId).doc(shape.id).delete();
}

async function addCollaborator(roomId, collaborator) {
  const newCollaboratorRef = db.collaborators(roomId).doc(collaborator.id);
  return await newCollaboratorRef.set({ ...collaborator });
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

function getRoom(roomId) {
  return new Promise((resolve, reject) => {

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
    Promise.all([getShapes(roomId), getUsers(roomId)]).then(([shapes, users]) => {
      resolve({ shapes: shapes && shapes.length > 0 ? shapes : [], users: users && users.length > 0 ? users : [] })
    }).catch((err) => {
      reject({ message: err });
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
      console.log(doc.data());
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
        resolve({ ...doc.data() });
      }
    }).catch(err => {
      reject({ error: err })
    })
  })
}

export {
  addUser,
  addRoomToUser,
  createRoom,
  getInitialDrawData,
  addShape,
  deleteShape,
  addCollaborator,
  deleteCollaborator,
  getUser,
  getRoomDetails
}