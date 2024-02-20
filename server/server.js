/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import * as config from './config';
import express from 'express';
import path from 'path';

import compression from "compression";
import morgan from "morgan";
import { createRequestHandler } from '@remix-run/express';
import { broadcastDevReady } from "@remix-run/node";
import { createServer } from 'http';
import { Server } from 'socket.io';
import { onSocketConnect } from './socket';


// eslint-disable-next-line import/first
import { getServerAuth } from './firebase.server';
import initRedisConnection, { deleteAllCaches } from './redis';


const BUILD_DIR = path.join(process.cwd(), "build");



const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer);

//Initializing the firebase server
getServerAuth();


//Initializing the redis connection
initRedisConnection();


io.on('connection', (socket) => {
  console.log("Socket connection established");
  onSocketConnect(socket, io);
});

io.sockets.on("disconnect", () => {
  console.log("Socket connection closed");
  io.sockets.disconnect();
});


app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by');

// Remix fingerprints its assets so we can cache forever.
app.use(
  '/build',
  express.static('public/build', { immutable: true, maxAge: '1y' })
);

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static('public/build', { maxAge: '1h' }));

app.use(morgan('tiny'));

app.all(
  "*",
  process.env.NODE_ENV === "development"
    ? (req, res, next) => {
      purgeRequireCache();
      return createRequestHandler({
        build: require(BUILD_DIR),
        mode: process.env.NODE_ENV,
      })(req, res, next);
    }
    : createRequestHandler({
      build: require(BUILD_DIR),
      mode: process.env.NODE_ENV,
    })
);

const port = process.env.PORT || 3000;
httpServer.listen(port, async () => {
  // Think of an alternate way 
  //resetAllLiveUsers();
  if (process.env.NODE_ENV === 'development') {
    broadcastDevReady(await import(BUILD_DIR));
  }
  deleteAllCaches();
  console.log(`Express server listening on port ${port}`);
});


process.on('beforeExit', () => {
  deleteAllCaches();
})


function purgeRequireCache() {
  // purge require cache on requests for "server side HMR" this won't let
  // you have in-memory objects between requests in development,
  // alternatively you can set up nodemon/pm2-dev to restart the server on
  // file changes, but then you'll have to reconnect to databases/etc on each
  // change. We prefer the DX of this, so we've included it for you by default
  for (let key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
}


//module.exports = httpServer;
