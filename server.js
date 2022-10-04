/* eslint-disable no-undef */
require('dotenv/config')

const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const { createRequestHandler } = require("@remix-run/express");

const { auth } = require('./server/firebase.server');


const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');

const BUILD_DIR = path.join(process.cwd(), "build");



const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer);

//Initializing the firebase server
auth.server;

let clients = [];


io.on('connection', (socket) => {
  console.log(socket.id, 'connected');


  socket.emit('confirmation', 'connected!');

  socket.on('event', (data) => {
    console.log(socket.id, data);
    //clients.push(socket.id);
    socket.emit('event', 'pong');
  });


  socket.on('mousemove', (data) => {
    // console.log(clients);
    // clients.forEach((clientId) => {
    //   if (clientId !== socket.id) {
    //     io.to(clientId).emit('mousemove', data);
    //   }
    // })
  })

  socket.on('disconnect', (data) => {
    //clients = clients.filter(clientId => clientId !== socket.id);
    console.log(socket.id, "diconnected");
  })
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
      console.log(require(BUILD_DIR));
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
httpServer.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});


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
