/* eslint-disable no-undef */
import { createClient } from 'redis';


// liveUserFetchNeeded -> true

let redisClient;


function initRedisConnection() {
  return new Promise((resolve, reject) => {
    let promise;

    redisClient = createClient({
      url: process.env.REDIS_URL
    });

    redisClient.on('error', (err) => {
      if (process.env.NODE_ENV !== 'development') {
        console.log('Failed to initialize redis client');
      }

    });

    promise = redisClient.connect();

    promise.then(() => {
      console.log('Redis connection successful');
      resolve();
    }).catch(err => {
      console.log('Redis connection Not successful');
      reject(err);
    })
  })
}


export function setDataForCaching(key, fieldName, fieldValue) {
  return new Promise((resolve, reject) => {
    if (redisClient) {
      redisClient.hSet(key, fieldName, fieldValue).then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      })
    }
  })
}


export function getCachedData(key, fieldValue) {
  return new Promise((resolve, reject) => {
    if (redisClient) {
      redisClient.hGet(key, fieldValue).then((data) => {
        resolve(data);
      }).catch(err => {
        reject(err);
      })
    }
  })
}

export function getAllCachedDataByKey(key) {
  return new Promise((resolve, reject) => {
    if (redisClient) {
      redisClient.hGetAll(key).then((data) => {
        resolve(data);
      }).catch(err => {
        reject(err);
      })
    }
  })
}


export function deleteAllCaches() {
  if (redisClient) {
    return redisClient.flushDb();
  } else {
    return null;
  }

}

export default initRedisConnection;