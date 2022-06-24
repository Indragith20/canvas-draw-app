import { getFirestore } from 'firebase-admin/firestore';

const dataPoint = (collectionPath) => {
  return getFirestore().collection(collectionPath)
};


const db = {
  rooms: () => dataPoint('rooms'),
  room: (roomId) => dataPoint(`rooms/${roomId}`),
  shapeCollection: (roomId) => dataPoint(`rooms/${roomId}/shapes`),
  collaborators: (roomId) => dataPoint(`rooms/${roomId}/collaborators`)
}


async function createRoom(name) {
  const newRoomRef = db.rooms().doc();
  await db.collaborators(newRoomRef.id).doc().set({ name: name, color: 'blue', isActive: true });
  await newRoomRef.set({ id: newRoomRef.id });
  return { id: newRoomRef.id };
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


export {
  createRoom,
  getInitialDrawData,
  addShape,
  deleteShape,
  addCollaborator,
  deleteCollaborator
}