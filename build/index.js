var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// server/firebase.server.js
var require_firebase_server = __commonJS({
  "server/firebase.server.js"(exports, module2) {
    init_react();
    var {
      getApps: getServerApps,
      initializeApp: initializeServerApp,
      cert: serverCert
    } = require("firebase-admin/app");
    var {
      getApps: getClientApps,
      initializeApp: initializeClientApp
    } = require("firebase/app");
    var { getAuth: getServerAuth } = require("firebase-admin/auth");
    var { getAuth: getClientAuth } = require("firebase/auth");
    if (getClientApps().length === 0) {
      let config;
      if (!process.env.CLIENT_CONFIG) {
        throw new Error("Missing CLIENT_CONFIG environment variable, ");
      } else {
        try {
          config = JSON.parse(process.env.CLIENT_CONFIG);
        } catch {
          throw Error("Invalid CLIENT_CONFIG environment variable");
        }
      }
      initializeClientApp(config);
    }
    if (getServerApps().length === 0) {
      let config;
      if (!process.env.SERVICE_ACCOUNT) {
        throw new Error("Missing SERVICE_ACCOUNT environment variable");
      } else {
        try {
          const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);
          config = {
            credential: serverCert(serviceAccount)
          };
        } catch {
          throw Error("Invalid SERVICE_ACCOUNT environment variable");
        }
      }
      initializeServerApp(config);
    }
    module2.exports = {
      auth: {
        server: getServerAuth(),
        client: getClientAuth()
      }
    };
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
  handleDataRequest: () => handleDataRequest
});
init_react();
var import_server = require("react-dom/server");
var import_react = require("@remix-run/react");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
var handleDataRequest = (response, { request, params, context }) => {
  console.log("Initakl", params);
  return response;
};

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_react2 = __toESM(require("react"));
var import_react3 = require("@remix-run/react");
function meta() {
  return { title: "New Remix App" };
}
function App() {
  return /* @__PURE__ */ import_react2.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react2.default.createElement("head", null, /* @__PURE__ */ import_react2.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react2.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ import_react2.default.createElement("title", null, "Whiteboard Application"), /* @__PURE__ */ import_react2.default.createElement(import_react3.Meta, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.Links, null)), /* @__PURE__ */ import_react2.default.createElement("body", null, /* @__PURE__ */ import_react2.default.createElement(import_react3.Outlet, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.Scripts, null), /* @__PURE__ */ import_react2.default.createElement(import_react3.LiveReload, null)));
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/rooms/createRoom.jsx
var createRoom_exports = {};
init_react();

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/rooms/enterRoom.jsx
var enterRoom_exports = {};
__export(enterRoom_exports, {
  action: () => action,
  default: () => EnterRoom,
  loader: () => loader
});
init_react();
var import_react4 = __toESM(require("react"));
var import_react5 = require("@remix-run/react");

// server/db.js
init_react();
var import_firestore = require("firebase-admin/firestore");
var dataPoint = (collectionPath) => {
  return (0, import_firestore.getFirestore)().collection(collectionPath);
};
var db = {
  rooms: () => dataPoint("rooms"),
  users: () => dataPoint("users"),
  room: (roomId) => dataPoint(`rooms/${roomId}`),
  user: (userId) => dataPoint(`users/${userId}`),
  shapeCollection: (roomId) => dataPoint(`rooms/${roomId}/shapes`),
  collaborators: (roomId) => dataPoint(`rooms/${roomId}/collaborators`)
};
async function createRoom(userId, roomName, userName) {
  return new Promise((resolve, reject) => {
    const newRoomRef = db.rooms().doc();
    addRoomToUser(userId, newRoomRef.id, roomName).then(() => {
      let collaboratorPromise = db.collaborators(newRoomRef.id).doc().set({ name: userName, color: "blue", isActive: true, id: userId });
      let roomPromise = newRoomRef.set({ id: newRoomRef.id, roomName });
      Promise.all([collaboratorPromise, roomPromise]).then(() => {
        console.log("Resolbve", userId);
        resolve({ id: newRoomRef.id, userId });
      }).catch((err) => {
        reject({ message: err });
      });
    });
  });
}
function addShape(roomId, shape) {
  const newShapeRef = db.shapeCollection(roomId).doc();
  console.log("New Id", newShapeRef.id);
  const shapeJSON = JSON.parse(shape);
  console.log("Addding Shape Called", roomId, shape);
  return new Promise((resolve, reject) => {
    newShapeRef.set(__spreadProps(__spreadValues({}, shapeJSON), { id: newShapeRef.id })).then((doc) => {
      console.log("Inside THen");
      resolve({ id: newShapeRef.id });
    }).catch((err) => {
      reject({ error: err });
    });
  });
}
function getShapes(roomId) {
  return new Promise((resolve, reject) => {
    db.shapeCollection(roomId).get().then((snapshot) => {
      let data = [];
      if (snapshot.empty) {
        data = [];
      } else {
        snapshot.forEach((doc) => {
          data.push(doc.data());
        });
      }
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}
function getUsers(roomId) {
  return new Promise((resolve, reject) => {
    db.collaborators(roomId).get().then((snapshot) => {
      let data = [];
      if (snapshot.empty) {
        data = [];
      } else {
        snapshot.forEach((doc) => {
          data.push(doc.data());
        });
      }
      resolve(data);
    }).catch((err) => {
      reject(err);
    });
  });
}
function getInitialDrawData(roomId) {
  return new Promise((resolve, reject) => {
    Promise.all([getShapes(roomId), getUsers(roomId)]).then(([shapes, users]) => {
      resolve({ shapes: shapes && shapes.length > 0 ? shapes : [], users: users && users.length > 0 ? users : [] });
    }).catch((err) => {
      reject({ message: err });
    });
  });
}
async function addUser(name, userId, email) {
  return new Promise((resolve, reject) => {
    let newUserRef = db.users().doc(userId);
    newUserRef.set({ name, id: userId, rooms: [], email }).then(() => {
      resolve({ userId: newUserRef.id });
    }).catch((err) => {
      reject(err);
    });
  });
}
function addRoomToUser(userId, roomId, roomName) {
  return new Promise((resolve, reject) => {
    let userRef = db.users().doc(userId);
    userRef.update({ rooms: import_firestore.FieldValue.arrayUnion({ roomId, roomName }) }).then(() => {
      resolve();
    }).catch((err) => {
      reject(err);
    });
  });
}
function getUser(userId) {
  return new Promise((resolve, reject) => {
    let userRef = db.users().doc(userId);
    userRef.get().then((doc) => {
      if (!doc.exists) {
        resolve({ error: "No such document!" });
      } else {
        resolve({ data: doc.data() });
      }
    }).catch((err) => {
      reject(err);
    });
  });
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/rooms/enterRoom.jsx
var import_node = require("@remix-run/node");
async function loader({ request }) {
  const session = await getSession(request.headers.get("cookie"));
  const { uid } = await checkSessionCookie(session);
}
async function action({ request }) {
  const body = await request.formData();
  let name = body.get("name");
  const draw = await createRoom(name);
  console.log(draw);
  return (0, import_node.redirect)(`/draw/${draw.id}`);
}
function EnterRoom() {
  var _a;
  const transition = (0, import_react5.useTransition)();
  const actionData = (0, import_react5.useActionData)();
  return /* @__PURE__ */ import_react4.default.createElement(import_react5.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react4.default.createElement("fieldset", {
    disabled: transition.state === "submitting"
  }, /* @__PURE__ */ import_react4.default.createElement("p", null, /* @__PURE__ */ import_react4.default.createElement("label", null, "Room Name:", " ", /* @__PURE__ */ import_react4.default.createElement("input", {
    name: "name",
    type: "text",
    defaultValue: actionData ? actionData.values.name : void 0,
    style: {
      borderColor: (actionData == null ? void 0 : actionData.errors.name) ? "red" : ""
    }
  }))), (actionData == null ? void 0 : actionData.errors.name) ? /* @__PURE__ */ import_react4.default.createElement(ValidationMessage, {
    isSubmitting: transition.state === "submitting",
    error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.name
  }) : null, /* @__PURE__ */ import_react4.default.createElement("p", null, /* @__PURE__ */ import_react4.default.createElement("button", {
    type: "submit"
  }, transition.state === "submitting" ? "Configuring..." : "Enter Room")), /* @__PURE__ */ import_react4.default.createElement(import_react5.Link, {
    to: "/draw/freedraw",
    className: "text-xl text-blue-600 underline"
  }, "Try without Login")));
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/draw/freeDraw.jsx
var freeDraw_exports = {};
__export(freeDraw_exports, {
  default: () => FreeDrawIndex,
  links: () => links
});
init_react();
var import_react12 = __toESM(require("react"));

// app/components/ConfigTool/ConfigTool.js
init_react();
var import_react6 = __toESM(require("react"));

// app/components/ConfigTool/ConfigTool.css
var ConfigTool_default = "/build/_assets/ConfigTool-5OWJ5SE4.css";

// app/components/ConfigTool/ConfigTool.js
function ConfigToolLinks() {
  return [{ rel: "stylesheet", href: ConfigTool_default }];
}
function ConfigTool({ toggleTheme }) {
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "configTool"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ import_react6.default.createElement("span", {
    className: "configLabel"
  }, "Dark Mode"), /* @__PURE__ */ import_react6.default.createElement("label", {
    className: "switch"
  }, /* @__PURE__ */ import_react6.default.createElement("input", {
    type: "checkbox",
    onClick: toggleTheme
  }), /* @__PURE__ */ import_react6.default.createElement("span", {
    className: "slider round",
    id: "toggleDarkMode"
  }))));
}
var ConfigTool_default2 = ConfigTool;

// app/components/main.js
init_react();
var import_react11 = __toESM(require("react"));

// app/components/main.css
var main_default = "/build/_assets/main-YLJ6JLO4.css";

// app/components/SelectTool/SelectTool.js
init_react();
var import_react7 = __toESM(require("react"));

// app/components/SelectTool/SelectTool.css
var SelectTool_default = "/build/_assets/SelectTool-ZIZDDKIP.css";

// app/components/SelectTool/SelectTool.js
function SelectToolLinks() {
  return [{ rel: "stylesheet", href: SelectTool_default }];
}
function SelectTool({ selectedTool, updateTool }) {
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "selectTool"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: `tool-icon ${selectedTool === "select" ? "selected" : ""}`,
    id: "select",
    onClick: updateTool
  }, /* @__PURE__ */ import_react7.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react7.default.createElement("path", {
    fill: "currentcolor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9476 0.228823C12.2527 -0.0762743 12.7473 -0.0762743 13.0524 0.228823L16.1774 3.35382C16.4825 3.65892 16.4825 4.15358 16.1774 4.45868C15.8723 4.76377 15.3777 4.76377 15.0726 4.45868L13.2812 2.66735V8.59375C13.2812 9.02522 12.9315 9.375 12.5 9.375C12.0685 9.375 11.7188 9.02522 11.7188 8.59375V2.66735L9.92743 4.45868C9.62233 4.76377 9.12767 4.76377 8.82257 4.45868C8.51748 4.15358 8.51748 3.65892 8.82257 3.35382L11.9476 0.228823ZM12.5 15.625C12.9315 15.625 13.2812 15.9748 13.2812 16.4062V22.3326L15.0726 20.5413C15.3777 20.2362 15.8723 20.2362 16.1774 20.5413C16.4825 20.8464 16.4825 21.3411 16.1774 21.6462L13.0524 24.7712C12.7473 25.0763 12.2527 25.0763 11.9476 24.7712L8.82257 21.6462C8.51748 21.3411 8.51748 20.8464 8.82257 20.5413C9.12767 20.2362 9.62233 20.2362 9.92743 20.5413L11.7187 22.3326V16.4062C11.7187 15.9748 12.0685 15.625 12.5 15.625Z"
  }), /* @__PURE__ */ import_react7.default.createElement("path", {
    fill: "currentcolor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.228823 13.0524C-0.0762743 12.7473 -0.0762743 12.2527 0.228823 11.9476L3.35382 8.82257C3.65892 8.51748 4.15358 8.51748 4.45868 8.82257C4.76377 9.12767 4.76377 9.62233 4.45868 9.92743L2.66735 11.7188L8.59375 11.7188C9.02522 11.7188 9.375 12.0685 9.375 12.5C9.375 12.9315 9.02522 13.2813 8.59375 13.2813L2.66735 13.2812L4.45868 15.0726C4.76377 15.3777 4.76377 15.8723 4.45868 16.1774C4.15358 16.4825 3.65892 16.4825 3.35382 16.1774L0.228823 13.0524ZM15.625 12.5C15.625 12.0685 15.9748 11.7188 16.4062 11.7188H22.3326L20.5413 9.92743C20.2362 9.62233 20.2362 9.12767 20.5413 8.82257C20.8464 8.51748 21.3411 8.51748 21.6462 8.82257L24.7712 11.9476C25.0763 12.2527 25.0763 12.7473 24.7712 13.0524L21.6462 16.1774C21.3411 16.4825 20.8464 16.4825 20.5413 16.1774C20.2362 15.8723 20.2362 15.3777 20.5413 15.0726L22.3326 13.2813H16.4062C15.9748 13.2813 15.625 12.9315 15.625 12.5Z"
  }))), /* @__PURE__ */ import_react7.default.createElement("span", {
    className: `tool-icon ${selectedTool === "rect" ? "selected" : ""}`,
    id: "rect",
    onClick: updateTool
  }, /* @__PURE__ */ import_react7.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react7.default.createElement("path", {
    fill: "currentcolor",
    d: "M21.875 1.5625C22.7379 1.5625 23.4375 2.26206 23.4375 3.125V21.875C23.4375 22.7379 22.7379 23.4375 21.875 23.4375H3.125C2.26206 23.4375 1.5625 22.7379 1.5625 21.875V3.125C1.5625 2.26206 2.26206 1.5625 3.125 1.5625H21.875ZM3.125 0C1.39911 0 0 1.39911 0 3.125V21.875C0 23.6009 1.39911 25 3.125 25H21.875C23.6009 25 25 23.6009 25 21.875V3.125C25 1.39911 23.6009 0 21.875 0H3.125Z"
  }))), /* @__PURE__ */ import_react7.default.createElement("span", {
    className: `tool-icon ${selectedTool === "circle" ? "selected" : ""}`,
    id: "circle",
    onClick: updateTool
  }, /* @__PURE__ */ import_react7.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react7.default.createElement("path", {
    fill: "currentcolor",
    d: "M12.5 23.4375C6.45939 23.4375 1.5625 18.5406 1.5625 12.5C1.5625 6.45939 6.45939 1.5625 12.5 1.5625C18.5406 1.5625 23.4375 6.45939 23.4375 12.5C23.4375 18.5406 18.5406 23.4375 12.5 23.4375ZM12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
  }))), /* @__PURE__ */ import_react7.default.createElement("span", {
    className: `tool-icon ${selectedTool === "arrow" ? "selected" : ""}`,
    id: "arrow",
    onClick: updateTool
  }, /* @__PURE__ */ import_react7.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react7.default.createElement("path", {
    fill: "currentcolor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5625 12.5C1.5625 12.0685 1.91228 11.7187 2.34375 11.7187H20.7701L15.8538 6.80243C15.5487 6.49733 15.5487 6.00267 15.8538 5.69757C16.1589 5.39247 16.6536 5.39247 16.9587 5.69757L23.2087 11.9476C23.5138 12.2527 23.5138 12.7473 23.2087 13.0524L16.9587 19.3024C16.6536 19.6075 16.1589 19.6075 15.8538 19.3024C15.5487 18.9973 15.5487 18.5027 15.8538 18.1976L20.7701 13.2812H2.34375C1.91228 13.2812 1.5625 12.9315 1.5625 12.5Z"
  }))), /* @__PURE__ */ import_react7.default.createElement("span", {
    className: `tool-icon ${selectedTool === "line" ? "selected" : ""}`,
    id: "line",
    onClick: updateTool
  }, /* @__PURE__ */ import_react7.default.createElement("svg", {
    height: "25",
    width: "25",
    viewBox: "0 0 25 25"
  }, /* @__PURE__ */ import_react7.default.createElement("line", {
    x1: "0",
    y1: "10",
    x2: "25",
    y2: "25",
    stroke: "var(--icon-color)"
  }))), /* @__PURE__ */ import_react7.default.createElement("span", {
    className: `tool-icon ${selectedTool === "diamond" ? "selected" : ""}`,
    id: "diamond",
    onClick: updateTool
  }, /* @__PURE__ */ import_react7.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react7.default.createElement("path", {
    fill: "currentcolor",
    d: "M10.8603 0.679185C11.7659 -0.226396 13.2341 -0.226394 14.1397 0.679186L24.3208 10.8603C25.2264 11.7659 25.2264 13.2341 24.3208 14.1397L14.1397 24.3208C13.2341 25.2264 11.7659 25.2264 10.8603 24.3208L0.679185 14.1397C-0.226396 13.2341 -0.226394 11.7659 0.679186 10.8603L10.8603 0.679185ZM13.0466 1.77232C12.7447 1.47046 12.2553 1.47046 11.9534 1.77232L1.77232 11.9534C1.47046 12.2553 1.47046 12.7447 1.77232 13.0466L11.9534 23.2277C12.2553 23.5295 12.7447 23.5295 13.0466 23.2277L23.2277 13.0466C23.5295 12.7447 23.5295 12.2553 23.2277 11.9534L13.0466 1.77232Z"
  }))), /* @__PURE__ */ import_react7.default.createElement("span", {
    className: `tool-icon ${selectedTool === "chalk" ? "selected" : ""}`,
    id: "chalk",
    onClick: updateTool
  }, /* @__PURE__ */ import_react7.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react7.default.createElement("g", {
    clipPath: "url(#clip0_1287_3498)"
  }, /* @__PURE__ */ import_react7.default.createElement("path", {
    fill: "currentcolor",
    d: "M18.9788 0.228823C19.2839 -0.0762743 19.7786 -0.0762743 20.0837 0.228823L24.7712 4.91632C25.0763 5.22142 25.0763 5.71608 24.7712 6.02118L9.1462 21.6462C9.07139 21.721 8.98216 21.7798 8.88392 21.8191L1.07142 24.9441C0.781252 25.0602 0.449832 24.9922 0.228846 24.7712C0.0078592 24.5502 -0.0601674 24.2188 0.0559004 23.9286L3.1809 16.1161C3.22019 16.0179 3.27903 15.9286 3.35385 15.8538L18.9788 0.228823ZM17.5111 3.90625L21.0938 7.4889L23.1139 5.46875L19.5313 1.8861L17.5111 3.90625ZM19.9889 8.59375L16.4063 5.0111L6.25002 15.1674V15.625H7.03127C7.46275 15.625 7.81252 15.9748 7.81252 16.4062V17.1875H8.59377C9.02525 17.1875 9.37502 17.5373 9.37502 17.9688V18.75H9.83267L19.9889 8.59375ZM4.73698 16.6804L4.57209 16.8453L2.18366 22.8164L8.15473 20.4279L8.31962 20.263C8.02338 20.152 7.81252 19.8663 7.81252 19.5312V18.75H7.03127C6.5998 18.75 6.25002 18.4002 6.25002 17.9688V17.1875H5.46877C5.13377 17.1875 4.84801 16.9766 4.73698 16.6804Z"
  })), /* @__PURE__ */ import_react7.default.createElement("defs", null, /* @__PURE__ */ import_react7.default.createElement("clipPath", {
    id: "clip0_1287_3498"
  }, /* @__PURE__ */ import_react7.default.createElement("rect", {
    width: "25",
    height: "25",
    fill: "white"
  }))))));
}
var SelectTool_default2 = SelectTool;

// app/components/Shapes/Arrow.js
init_react();
var Arrow = class {
  constructor(tempCanvas, tempContext, callback, id) {
    this.id = id;
    this.started = false;
    this.startX = null;
    this.startY = null;
    this.width = null;
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.mouseup = this.mouseUp.bind(this);
    this.mousedown = this.mouseDown.bind(this);
    this.mousemove = this.mouseMove.bind(this);
    this.tempContext.setLineDash([0]);
  }
  mouseUp(e) {
    if (this.started) {
      this.mousemove(e);
      this.started = false;
      this.callback({
        id: this.id,
        type: "arrow",
        x: this.startX,
        y: this.startY,
        startX: Math.min(this.startX, e._x),
        startY: Math.min(this.startY, e._y),
        width: Math.abs(this.startX - e._x),
        height: Math.abs(this.startY - e._y),
        endX: e._x,
        endY: e._y
      });
    }
  }
  mouseDown(e) {
    this.startX = e._x;
    this.startY = e._y;
    this.started = true;
  }
  mouseMove(e) {
    if (!this.started) {
      return;
    }
    this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
    let cospix = 0.866025404;
    let headlen = 10;
    let dx = e._x - this.startX;
    let dy = e._y - this.startY;
    let length = Math.sqrt(dy * dy + dx * dx);
    let angle = Math.atan2(dy, dx);
    this.tempContext.beginPath();
    this.tempContext.moveTo(this.startX, this.startY);
    this.tempContext.lineTo(e._x, e._y);
    this.tempContext.lineTo(e._x - headlen * Math.cos(angle - Math.PI / 6), e._y - headlen * Math.sin(angle - Math.PI / 6));
    this.tempContext.moveTo(e._x, e._y);
    this.tempContext.lineTo(e._x - headlen * Math.cos(angle + Math.PI / 6), e._y - headlen * Math.sin(angle + Math.PI / 6));
    this.tempContext.stroke();
    this.tempContext.closePath();
  }
};
var Arrow_default = Arrow;

// app/components/Shapes/Chalk.js
init_react();
var Chalk = class {
  constructor(tempCanvas, tempContext, callback) {
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.started = false;
    this.mouseup = this.mouseUp.bind(this);
    this.mousedown = this.mouseDown.bind(this);
    this.mousemove = this.mouseMove.bind(this);
  }
  mouseMove(e) {
    if (this.started) {
      this.tempContext.lineTo(e._x, e._y);
      this.tempContext.stroke();
    }
  }
  mouseDown(e) {
    this.tempContext.beginPath();
    this.tempContext.moveTo(e._x, e._y);
    this.started = true;
  }
  mouseUp(e) {
    if (this.started) {
      this.mousemove(e);
      this.started = false;
      this.callback();
    }
  }
};
var Chalk_default = Chalk;

// app/components/Shapes/Circle.js
init_react();

// app/components/utils/getElementsAtPosition.js
init_react();
function getElementsAtPosition(x, y, shapes) {
  let returnElement = null;
  let diffX = null;
  let diffY = null;
  if (shapes.length > 0) {
    shapes.forEach((shape) => {
      if (shape.type === "rectangle") {
        let width = shape.width;
        let height = shape.height;
        let endX = shape.x + width;
        let endY = shape.y + height;
        if (shape.x <= x && x <= endX) {
          if (shape.y <= y && y <= endY) {
            if (!diffX || !diffY) {
              returnElement = shape;
              diffX = Math.min(x - shape.x, endX - x);
              diffY = Math.min(y - shape.y, endY - y);
            } else {
              let currentDiffX = Math.min(x - shape.x, endX - x);
              let currentDiffY = Math.min(y - shape.y, endY - y);
              if (currentDiffX < diffX || currentDiffY < diffY) {
                returnElement = shape;
                diffX = currentDiffX;
                diffY = currentDiffY;
              }
            }
          }
        }
      } else if (shape.type === "line" || shape.type === "arrow") {
        let startingXBuffer = shape.x - 10;
        let endingXBuffer = shape.endX + 10;
        let startingYBuffer = shape.y - 10;
        let endingYBuffer = shape.endY + 10;
        let maxX = Math.max(startingXBuffer, endingXBuffer);
        let maxY = Math.max(startingYBuffer, endingYBuffer);
        let minX = Math.min(startingXBuffer, endingXBuffer);
        let minY = Math.min(startingYBuffer, endingYBuffer);
        if (minX <= x && x <= maxX) {
          if (minY <= y && y <= maxY) {
            if (!diffX || !diffY) {
              returnElement = shape;
              diffX = Math.min(x - minX, maxX - x);
              diffY = Math.min(y - minY, maxY - y);
            } else {
              let currentDiffX = Math.min(x - minX, maxX - x);
              let currentDiffY = Math.min(y - minY, maxY - y);
              if (currentDiffX < diffX || currentDiffY < diffY) {
                returnElement = shape;
                diffX = currentDiffX;
                diffY = currentDiffY;
              }
            }
          }
        }
      } else if (shape.type === "text") {
        if (shape.x <= x && x <= shape.endX) {
          if (shape.y <= y && y <= shape.endY) {
            if (!diffX || !diffY) {
              returnElement = shape;
              diffX = Math.min(x - shape.x, shape.endX - x);
              diffY = Math.min(y - shape.y, shape.endY - y);
            } else {
              let currentDiffX = Math.min(x - shape.x, shape.endX - x);
              let currentDiffY = Math.min(y - shape.y, shape.endY - y);
              if (currentDiffX < diffX || currentDiffY < diffY) {
                returnElement = shape;
                diffX = currentDiffX;
                diffY = currentDiffY;
              }
            }
          }
        }
      } else if (shape.type === "circle") {
        let distancesquared = (x - shape.x) * (x - shape.x) + (y - shape.y) * (y - shape.y);
        if (distancesquared <= shape.radius * shape.radius) {
          returnElement = shape;
        }
      } else if (shape.type === "diamond") {
        let width = shape.width;
        let height = shape.height;
        let endX = shape.startX + width;
        let endY = shape.startY + height;
        if (shape.startX <= x && x <= endX) {
          if (shape.startY <= y && y <= endY) {
            if (!diffX || !diffY) {
              returnElement = shape;
              diffX = Math.min(x - shape.startX, endX - x);
              diffY = Math.min(y - shape.startY, endY - y);
            } else {
              let currentDiffX = Math.min(x - shape.startX, endX - x);
              let currentDiffY = Math.min(y - shape.startY, endY - y);
              if (currentDiffX < diffX || currentDiffY < diffY) {
                returnElement = shape;
                diffX = currentDiffX;
                diffY = currentDiffY;
              }
            }
          }
        }
      }
    });
  }
  return returnElement;
}
function getDistance(p1X, p1Y, p2X, p2Y) {
  return Math.sqrt(Math.pow(p1X - p2X, 2) + Math.pow(p1Y - p2Y, 2));
}

// app/components/Shapes/Circle.js
var Circle = class {
  constructor(tempCanvas, tempContext, callback, id) {
    this.id = id;
    this.started = false;
    this.startX = null;
    this.startY = null;
    this.width = null;
    this.height = null;
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.mouseup = this.mouseUp.bind(this);
    this.mousedown = this.mouseDown.bind(this);
    this.mousemove = this.mouseMove.bind(this);
    this.tempContext.setLineDash([0]);
  }
  mouseUp(e) {
    if (this.started) {
      this.mousemove(e);
      this.started = false;
      let radius = getDistance(this.startX, this.startY, e._x, e._y);
      this.callback({
        id: this.id,
        type: "circle",
        x: this.startX,
        y: this.startY,
        width: radius * radius,
        height: radius * radius,
        endX: e._x,
        endY: e._y,
        radius
      });
    }
  }
  mouseDown(e) {
    this.started = true;
    this.startX = e._x;
    this.startY = e._y;
  }
  mouseMove(e) {
    if (this.started) {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      let radius = getDistance(this.startX, this.startY, e._x, e._y);
      this.tempContext.beginPath();
      this.tempContext.arc(this.startX, this.startY, radius, 0, 2 * Math.PI);
      this.tempContext.stroke();
    }
  }
};
var Circle_default = Circle;

// app/components/Shapes/Diamond.js
init_react();

// app/components/utils/drawShapes.js
init_react();
function drawDiamond(xCenter, yCenter, size, context) {
  let numberOfSides = 4;
  context.beginPath();
  context.moveTo(xCenter + size * Math.cos(0), yCenter + size * Math.sin(0));
  for (var i = 1; i <= numberOfSides; i += 1) {
    context.lineTo(xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }
  context.stroke();
}
function drawText(text, context, x, y, maxWidth, lineHeight = 32, color, fontSize = 24) {
  context.font = `normal ${fontSize}px/${lineHeight}px Comic Sans MS`;
  context.fillStyle = color;
  context.textBaseline = "top";
  let words = text.split("");
  let line = "";
  let numberOfLines = 1;
  for (let n = 0; n < words.length; n++) {
    if (words[n] === "\n") {
      context.fillText(line, x, y);
      line = "";
      y += lineHeight;
      numberOfLines++;
    } else {
      let testLine = line + words[n] + "";
      line = testLine;
    }
  }
  context.fillText(line, x, y);
  return numberOfLines;
}

// app/components/Shapes/Diamond.js
var Diamond = class {
  constructor(tempCanvas, tempContext, callback, id) {
    this.id = id;
    this.started = false;
    this.startX = null;
    this.startY = null;
    this.width = null;
    this.height = null;
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.mouseup = this.mouseUp.bind(this);
    this.mousedown = this.mouseDown.bind(this);
    this.mousemove = this.mouseMove.bind(this);
    this.tempContext.setLineDash([0]);
  }
  mouseUp(e) {
    if (this.started) {
      this.mousemove(e);
      this.started = false;
      let width = Math.abs(this.startX - e._x) * 2;
      this.callback({
        id: this.id,
        type: "diamond",
        x: this.startX,
        y: e._y,
        startX: this.startX - width / 2,
        startY: e._y - width / 2,
        width,
        height: width,
        endX: e._x,
        endY: e._y
      });
    }
  }
  mouseDown(e) {
    this.started = true;
    this.startX = e._x;
    this.startY = e._y;
  }
  mouseMove(e) {
    if (this.started) {
      let size = this.startX - e._x;
      let xCenter = this.startX;
      let yCenter = e._y;
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      drawDiamond(xCenter, yCenter, size, this.tempContext);
    }
  }
};
var Diamond_default = Diamond;

// app/components/Shapes/DrawText.js
init_react();
var DrawText = class {
  constructor(tempCanvas, tempContext, callback, id, selectedTheme) {
    this.started = false;
    this.id = id;
    this.initialText = "";
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.dblclick = this.ondblclick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onClick = this.onClick.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
    this.textBoxContainer = document.getElementById("textBoxContainerId");
    this.textBox = document.getElementById("textAreaId");
    this.startX = null;
    this.startY = null;
    this.selectedTheme = selectedTheme;
    this.addEventListener();
  }
  addEventListener() {
    this.textBox.addEventListener("blur", this.onBlur);
    this.textBox.addEventListener("click", this.onClick);
  }
  removeEventListener() {
    this.textBox.removeEventListener("blur", this.onBlur);
    this.textBox.removeEventListener("click", this.onClick);
  }
  onClick(e) {
    e.stopPropagation();
  }
  onBlur() {
    if (this.textBox) {
      console.log("Drawing text", this.textBox.innerHTML);
      let text = this.textBox.innerHTML.replace(/<div>/g, "\n").replace(/<\/div>/g, "").replace(/<br>/g, "\n").replace("&nbsp;", " ");
      console.log(text);
      let color = this.selectedTheme === "dark" ? "#FFFFFF" : "#000000";
      let textareaStyle = window.getComputedStyle(this.textBox);
      let tetxtareaClientStyle = this.textBox.getBoundingClientRect();
      console.log(textareaStyle);
      let width = Math.ceil(Number(textareaStyle.width.slice(0, -2)));
      let height = Math.ceil(Number(textareaStyle.height.slice(0, -2)));
      console.log(width);
      this.callback({
        id: this.id,
        type: "text",
        x: tetxtareaClientStyle.left,
        y: tetxtareaClientStyle.top,
        textContent: text,
        innerHtml: this.textBox.innerHTML,
        endX: this.startX + width,
        endY: this.startY + height,
        width,
        height
      });
      this.removeEventListener();
      this.textBoxContainer.style.top = "0px";
      this.textBoxContainer.style.left = "0px";
      this.textBoxContainer.style.display = "none";
      this.textBoxContainer.style.minWidth = "1px";
      this.textBoxContainer.style.minHeight = "42px";
      this.textBox.innerHTML = "";
      this.textBoxContainer = null;
      this.textBox = null;
    }
  }
  ondblclick(ev, enclosedElement, { scrollX, scrollY, scalingFactor }) {
    this.startX = ev.x;
    this.startY = ev.y;
    this.textBoxContainer.style.top = `${ev.y}px`;
    this.textBoxContainer.style.left = `${ev.x}px`;
    this.textBoxContainer.style.display = "block";
    this.textBox.focus();
    if (enclosedElement) {
      if (enclosedElement.type === "rectangle") {
      } else if (enclosedElement.type === "text") {
        this.textBoxContainer.style.top = `${enclosedElement.y * scalingFactor + scrollY}px`;
        this.textBoxContainer.style.left = `${enclosedElement.x * scalingFactor + scrollX}px`;
        this.textBox.innerHTML = enclosedElement.innerHtml;
        this.width = enclosedElement.width;
        this.height = enclosedElement.height;
        window.getSelection().selectAllChildren(this.textBox);
        window.getSelection().collapseToEnd();
      } else {
      }
    } else {
    }
  }
};
var DrawText_default = DrawText;

// app/components/Shapes/Line.js
init_react();
var Line = class {
  constructor(tempCanvas, tempContext, callback, id) {
    this.id = id;
    this.started = false;
    this.startX = null;
    this.startY = null;
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.mouseup = this.mouseUp.bind(this);
    this.mousedown = this.mouseDown.bind(this);
    this.mousemove = this.mouseMove.bind(this);
    this.tempContext.setLineDash([0]);
  }
  mouseUp(e) {
    if (this.started) {
      this.mousemove(e);
      this.started = false;
      this.callback({
        id: this.id,
        type: "line",
        x: this.startX,
        y: this.startY,
        startX: Math.min(this.startX, e._x),
        startY: Math.min(this.startY, e._y),
        width: Math.abs(this.startX - e._x),
        height: Math.abs(this.startY - e._y),
        endX: e._x,
        endY: e._y
      });
    }
  }
  mouseDown(e) {
    this.startX = e._x;
    this.startY = e._y;
    this.started = true;
  }
  mouseMove(e) {
    if (!this.started) {
      return;
    }
    this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
    this.tempContext.beginPath();
    this.tempContext.moveTo(this.startX, this.startY);
    this.tempContext.lineTo(e._x, e._y);
    this.tempContext.stroke();
    this.tempContext.closePath();
  }
};
var Line_default = Line;

// app/components/Shapes/MoveTool.js
init_react();
var MoveTool = class {
  constructor(tempCanvas, tempContext, callback, element, theme) {
    this.id = element.id;
    this.started = false;
    this.startX = null;
    this.startY = null;
    this.width = null;
    this.height = null;
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.mouseup = this.mouseUp.bind(this);
    this.mousedown = this.mouseDown.bind(this);
    this.mousemove = this.mouseMove.bind(this);
    this.element = element;
    this.selectedTheme = theme;
  }
  mouseDown(e) {
    this.started = true;
    this.startX = e._x;
    this.startY = e._y;
    this.diffX = Math.abs(this.element.x - this.startX);
    this.diffY = Math.abs(this.element.y - e.y);
    this.drawExisitingElementOnTemp();
  }
  mouseUp(e) {
    e.stopPropagation();
    if (this.started) {
      this.mouseMove(e);
      if (this.element.type === "rectangle") {
        this.callback({
          id: this.element.id,
          type: "rectangle",
          x: e._x,
          y: e._y,
          width: this.element.width,
          height: this.element.height,
          endX: e._x,
          endY: e._y
        });
      } else if (this.element.type === "arrow") {
        let endX = this.element.endX > this.element.x ? e._x + this.element.width : e._x - this.element.width;
        let endY = this.element.endY > this.element.y ? e._y + this.element.height : e._y - this.element.height;
        this.callback({
          id: this.id,
          type: "arrow",
          x: e._x,
          y: e._y,
          startX: Math.min(endX, e._x),
          startY: Math.min(endY, e._y),
          width: this.element.width,
          height: this.element.height,
          endX,
          endY
        });
      } else if (this.element.type === "line") {
        let endX = this.element.endX > this.element.x ? e._x + this.element.width : e._x - this.element.width;
        let endY = this.element.endY > this.element.y ? e._y + this.element.height : e._y - this.element.height;
        this.callback({
          id: this.id,
          type: "line",
          x: e._x,
          y: e._y,
          startX: Math.min(e._x, endX),
          startY: Math.min(e._y, endY),
          width: this.element.width,
          height: this.element.height,
          endX,
          endY
        });
      } else if (this.element.type === "circle") {
        this.callback({
          id: this.id,
          type: "circle",
          x: e._x,
          y: e._y,
          radius: this.element.radius,
          width: this.element.width,
          height: this.element.height
        });
      } else if (this.element.type === "diamond") {
        this.callback({
          id: this.id,
          type: "diamond",
          x: e._x,
          y: e._y,
          startX: e._x - this.element.width / 2,
          startY: e._y - this.element.width / 2,
          width: this.element.width,
          height: this.element.height,
          endX: e._x + this.element.width / 2,
          endY: e._y + this.element.height
        });
      } else if (this.element.type === "text") {
        this.callback({
          id: this.id,
          type: "text",
          x: e._x,
          y: e._y,
          textContent: this.element.textContent,
          endX: e._x + Number(this.element.width),
          endY: e._y + this.element.height,
          width: Number(this.element.width),
          height: this.element.height
        });
      }
      this.started = false;
    }
  }
  mouseMove(e) {
    if (!this.started) {
      return;
    }
    e.stopPropagation();
    if (this.element.type === "rectangle") {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      this.tempContext.strokeRect(e._x, e._y, this.element.width, this.element.height);
    } else if (this.element.type === "arrow") {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      let headlen = 10;
      let diffX = Math.abs(this.element.x - e._x);
      let diffY = Math.abs(this.element.y - e._y);
      let x = this.element.x + diffX;
      let y = this.element.y + diffY;
      let endX;
      let endY;
      if (this.element.endX > this.element.x) {
        endX = e._x + this.element.width;
      } else {
        endX = e._x - this.element.width;
      }
      if (this.element.endY > this.element.y) {
        endY = e._y + this.element.height;
      } else {
        endY = e._y - this.element.height;
      }
      let dx = endX - x;
      let dy = endY - y;
      let angle = Math.atan2(dy, dx);
      this.tempContext.beginPath();
      this.tempContext.moveTo(e._x, e._y);
      this.tempContext.lineTo(endX, endY);
      this.tempContext.lineTo(endX - headlen * Math.cos(angle - Math.PI / 6), endY - headlen * Math.sin(angle - Math.PI / 6));
      this.tempContext.moveTo(endX, endY);
      this.tempContext.lineTo(endX - headlen * Math.cos(angle + Math.PI / 6), endY - headlen * Math.sin(angle + Math.PI / 6));
      this.tempContext.stroke();
      this.tempContext.closePath();
    } else if (this.element.type === "line") {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      let endX;
      let endY;
      if (this.element.endX > this.element.x) {
        endX = e._x + this.element.width;
      } else {
        endX = e._x - this.element.width;
      }
      if (this.element.endY > this.element.y) {
        endY = e._y + this.element.height;
      } else {
        endY = e._y - this.element.height;
      }
      this.tempContext.beginPath();
      this.tempContext.moveTo(e._x, e._y);
      this.tempContext.lineTo(endX, endY);
      this.tempContext.stroke();
      this.tempContext.closePath();
    } else if (this.element.type === "circle") {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      this.tempContext.beginPath();
      this.tempContext.arc(e._x, e._y, this.element.radius, 0, 2 * Math.PI);
      this.tempContext.stroke();
    } else if (this.element.type === "diamond") {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      drawDiamond(e._x, e._y, this.element.width / 2, this.tempContext);
    } else if (this.element.type === "text") {
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      let color = this.selectedTheme === "dark" ? "#FFFFFF" : "#000000";
      drawText(this.element.textContent, this.tempContext, e._x, e._y, this.element.width, void 0, color);
    }
  }
  drawExisitingElementOnTemp() {
    if (this.element.type === "rectangle") {
      this.tempContext.strokeRect(this.element.x, this.element.y, this.element.width, this.element.height);
    } else if (this.element.type === "arrow") {
      let headlen = 10;
      let dx = this.element.endX - this.element.x;
      let dy = this.element.endY - this.element.y;
      let angle = Math.atan2(dy, dx);
      this.tempContext.beginPath();
      this.tempContext.moveTo(this.element.x, this.element.y);
      this.tempContext.lineTo(this.element.endX, this.element.endY);
      this.tempContext.lineTo(this.element.endX - headlen * Math.cos(angle - Math.PI / 6), this.element.endY - headlen * Math.sin(angle - Math.PI / 6));
      this.tempContext.moveTo(this.element.endX, this.element.endY);
      this.tempContext.lineTo(this.element.endX - headlen * Math.cos(angle + Math.PI / 6), this.element.endY - headlen * Math.sin(angle + Math.PI / 6));
      this.tempContext.stroke();
      this.tempContext.closePath();
    } else if (this.element.type === "line") {
      this.tempContext.beginPath();
      this.tempContext.moveTo(this.element.x, this.element.y);
      this.tempContext.lineTo(this.element.endX, this.element.endY);
      this.tempContext.stroke();
      this.tempContext.closePath();
    } else if (this.element.type === "circle") {
      this.tempContext.beginPath();
      this.tempContext.arc(this.element.x, this.element.y, this.element.radius, 0, 2 * Math.PI);
      this.tempContext.stroke();
    } else if (this.element.type === "diamond") {
      let xCenter = this.element.x;
      let yCenter = this.element.y;
      let size = this.element.x - this.element.endX;
      drawDiamond(xCenter, yCenter, size, this.tempContext);
    } else if (this.element.type === "text") {
      let color = this.selectedTheme === "dark" ? "#FFFFFF" : "#000000";
      drawText(this.element.textContent, this.tempContext, this.element.x, this.element.y, this.element.width, void 0, color);
    }
  }
};
var MoveTool_default = MoveTool;

// app/components/Shapes/Rectangle.js
init_react();
var Rect = class {
  constructor(tempCanvas, tempContext, callback, id) {
    this.id = id;
    this.started = false;
    this.startX = null;
    this.startY = null;
    this.width = null;
    this.height = null;
    this.tempCanvas = tempCanvas;
    this.tempContext = tempContext;
    this.callback = callback;
    this.mouseup = this.mouseUp.bind(this);
    this.mousedown = this.mouseDown.bind(this);
    this.mousemove = this.mouseMove.bind(this);
    this.tempContext.setLineDash([0]);
  }
  mouseUp(e) {
    if (this.started) {
      this.mousemove(e);
      this.started = false;
      this.callback({
        id: this.id,
        type: "rectangle",
        x: Math.min(this.startX, e._x),
        y: Math.min(this.startY, e._y),
        width: this.width,
        height: this.height,
        endX: Math.max(this.startX, e._x),
        endY: Math.max(this.startY, e._y)
      });
    }
  }
  mouseDown(e) {
    this.started = true;
    this.startX = e._x;
    this.startY = e._y;
  }
  mouseMove(e) {
    if (this.started) {
      let x = Math.min(e._x, this.startX);
      let y = Math.min(e._y, this.startY);
      let width = Math.abs(e._x - this.startX);
      let height = Math.abs(e._y - this.startY);
      this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      if (!width || !height) {
        return;
      }
      this.width = width;
      this.height = height;
      this.tempContext.strokeRect(x, y, width, height);
    }
  }
};
var Rectangle_default = Rect;

// app/components/TextTool/TextTool.js
init_react();
var import_react8 = __toESM(require("react"));

// app/components/TextTool/TextTool.css
var TextTool_default = "/build/_assets/TextTool-UMOFHWRZ.css";

// app/components/TextTool/TextTool.js
function TextToolLinks() {
  return [{ rel: "stylesheet", href: TextTool_default }];
}
function TextTool() {
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    style: { color: "black" },
    className: "textTool",
    id: "textBoxContainerId"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "textarea",
    id: "textAreaId",
    role: "textbox",
    contentEditable: true
  }));
}
var TextTool_default2 = TextTool;

// app/components/ZoomContainer/ZoomContainer.js
init_react();
var import_react9 = __toESM(require("react"));

// app/components/ZoomContainer/ZoomContainer.css
var ZoomContainer_default = "/build/_assets/ZoomContainer-Y6YPOOBE.css";

// app/components/ZoomContainer/ZoomContainer.js
function ZoomContainerLinks() {
  return [{ rel: "stylesheet", href: ZoomContainer_default }];
}
function ZoomContainer({ zoomRange, zoomIn, zoomOut }) {
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "zoomContainer"
  }, /* @__PURE__ */ import_react9.default.createElement("span", {
    id: "minus",
    className: "zoom-sign",
    onClick: zoomIn
  }, /* @__PURE__ */ import_react9.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react9.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.125 12.5C3.125 12.0685 3.47478 11.7188 3.90625 11.7188H21.0938C21.5252 11.7188 21.875 12.0685 21.875 12.5C21.875 12.9315 21.5252 13.2812 21.0938 13.2812H3.90625C3.47478 13.2812 3.125 12.9315 3.125 12.5Z",
    fill: "currentcolor"
  }))), /* @__PURE__ */ import_react9.default.createElement("span", {
    id: "zoomRange",
    className: "zoom-range"
  }, Math.floor(zoomRange * 100)), /* @__PURE__ */ import_react9.default.createElement("span", {
    id: "plus",
    className: "zoom-sign",
    onClick: zoomOut
  }, /* @__PURE__ */ import_react9.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react9.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5 3.125C12.9315 3.125 13.2812 3.47478 13.2812 3.90625V11.7188H21.0938C21.5252 11.7188 21.875 12.0685 21.875 12.5C21.875 12.9315 21.5252 13.2812 21.0938 13.2812H13.2812V21.0938C13.2812 21.5252 12.9315 21.875 12.5 21.875C12.0685 21.875 11.7187 21.5252 11.7187 21.0938V13.2812H3.90625C3.47478 13.2812 3.125 12.9315 3.125 12.5C3.125 12.0685 3.47478 11.7188 3.90625 11.7188H11.7188V3.90625C11.7188 3.47478 12.0685 3.125 12.5 3.125Z",
    fill: "currentcolor"
  }))));
}
var ZoomContainer_default2 = ZoomContainer;

// app/components/utils/idb.js
init_react();
var Idb = class {
  constructor() {
  }
  initializeIndexedDb() {
    return new Promise((resolve, reject) => {
      this.request = self.indexedDB.open("redux-state", "1");
      this.request.onupgradeneeded = (event) => {
        this.db = event.target.result;
        this.db.createObjectStore("redux-persistance", {
          key: "app-state-persist"
        });
      };
      this.request.onerror = (event) => {
        reject("err");
      };
      this.request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve("success");
      };
    });
  }
  performTransaction(mode, { key = null, transactionData = null }) {
    return new Promise((resolve, reject) => {
      const promises = [];
      if (!this.db || !this.db.transaction) {
        promises.push(this.initializeIndexedDb());
      }
      Promise.all(promises).then(() => {
        const transaction = this.db.transaction(["redux-persistance"], mode);
        const reduxState = transaction.objectStore("redux-persistance");
        if (mode === "readonly") {
          this.transactionReq = reduxState.get(key);
        } else {
          this.transactionReq = reduxState.put(transactionData, key);
        }
        this.transactionReq.onsuccess = (event) => {
          resolve(event);
        };
        this.transactionReq.onerror = (event) => {
          reject("Error while initializing transation", event);
        };
      });
    });
  }
  getDataFromIdb(key) {
    return this.performTransaction("readonly", { key }).then((transactionEvent) => {
      const messageObj = {
        message: "GET_DATA_SUCCESS",
        payload: transactionEvent.target.result
      };
      return transactionEvent.target.result;
    });
  }
  updateDb(data, key) {
    this.performTransaction("readwrite", { transactionData: data, key }).then((transactionDet) => {
      console.log("Error while performing transaction", transactionDet);
    });
  }
};
var idb_default = Idb;

// app/contexts/socketContext.js
init_react();
var import_react10 = __toESM(require("react"));
var SocketContext = (0, import_react10.createContext)(void 0);
function SocketProvider({ socket, children }) {
  return /* @__PURE__ */ import_react10.default.createElement(SocketContext.Provider, {
    value: socket
  }, children);
}

// app/components/main.js
function MainComponentStyles() {
  return [{ rel: "stylesheet", href: main_default }];
}
var tools = {
  move: "",
  chalk: Chalk_default,
  line: Line_default,
  rect: Rectangle_default,
  arrow: Arrow_default,
  text: DrawText_default,
  circle: Circle_default,
  diamond: Diamond_default,
  select: "select"
};
var baseConfig = {
  scalingFactor: 1,
  baseFontSize: 24,
  baseLineHeight: 150 * 24 / 100
};
var MainComponent = class extends import_react11.default.Component {
  constructor(props) {
    super(props);
    this.state = __spreadValues({
      scrollX: 0,
      scrollY: 0,
      canvasWidth: 0,
      canvasHeight: 0,
      selectedTheme: "light",
      selectedTool: "chalk",
      shapes: []
    }, baseConfig);
    this.addEventListeners = this.addEventListeners.bind(this);
    this.updateTool = this.updateTool.bind(this);
    this.onClickTool = this.onClickTool.bind(this);
    this.onEvent = this.onEvent.bind(this);
    this.changeToOneScalingFactor = this.changeToOneScalingFactor.bind(this);
    this.changeFromOneScalingFactor = this.changeFromOneScalingFactor.bind(this);
    this.changeToTextTool = this.changeToTextTool.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.resetDraggingValues = this.resetDraggingValues.bind(this);
    this.onWheelMove = this.onWheelMove.bind(this);
    this.imgUpdate = this.imgUpdate.bind(this);
    this.drawImage = this.drawImage.bind(this);
    this.updateTheme = this.updateTheme.bind(this);
    this.onResize = this.onResize.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.idb = new idb_default();
    this.mainCanvas = import_react11.default.createRef();
    this.tempCanvas = import_react11.default.createRef();
    this.selectedElement = null;
    this.id = 0;
    this.mouseXPosition = null;
    this.mouseYPosition = null;
    this.isUserDragging = false;
    this.draggingElement = null;
  }
  componentDidMount() {
    this.idb.getDataFromIdb("app-state-persist").then((data) => {
      if (data && data.length >= 0) {
        this.setState({ shapes: data }, () => {
          this.id = data.length + 1;
          this.redraw();
        });
      }
    }).catch((err) => {
      console.log(err);
    });
    this.setState({ canvasWidth: window.innerWidth, canvasHeight: window.innerHeight });
    this.mainContext = this.mainCanvas.current.getContext("2d");
    this.tempContext = this.tempCanvas.current.getContext("2d");
    this.tempContext.strokeStyle = this.state.selectedTheme === "dark" ? "#FFFFFF" : "#000000";
    this.tempContext.lineWidth = 1;
    this.tempContext.fillStyle = this.state.selectedTheme === "dark" ? "#424242" : "#FFFFFF";
    this.tempContext.fillRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
    this.tools = tools;
    let selectedOne = this.tools[this.state.selectedTool];
    this.tool = new selectedOne(this.tempCanvas.current, this.tempContext, this.imgUpdate, this.id);
    this.addEventListeners();
  }
  componentWillUnmount() {
    this.removeEventListeners();
  }
  addEventListeners() {
    this.tempCanvas.current.addEventListener("mousedown", this.onEvent, false);
    this.tempCanvas.current.addEventListener("mousemove", this.onEvent, false);
    this.tempCanvas.current.addEventListener("mouseup", this.onEvent, false);
    this.tempCanvas.current.addEventListener("dblclick", this.changeToTextTool, false);
    document.addEventListener("keydown", this.onKeyDown, false);
    document.addEventListener("click", this.onDocumentClick, false);
    document.addEventListener("wheel", this.onWheelMove, false);
    window.addEventListener("resize", this.onResize);
  }
  removeEventListeners() {
    this.tempCanvas.current.removeEventListener("mousedown", this.onEvent, false);
    this.tempCanvas.current.removeEventListener("mousemove", this.onEvent, false);
    this.tempCanvas.current.removeEventListener("mouseup", this.onEvent, false);
    this.tempCanvas.current.removeEventListener("dblclick", this.changeToTextTool, false);
    document.removeEventListener("keydown", this.onKeyDown, false);
    document.removeEventListener("click", this.onDocumentClick, false);
    document.removeEventListener("wheel", this.onWheelMove, false);
    window.removeEventListener("resize", this.onResize);
  }
  zoomIn(e) {
    e.stopPropagation();
    if (this.state.scalingFactor <= 0.1) {
      return;
    }
    this.setState((prevstate) => {
      let baseFontSize = prevstate.baseFontSize - 3;
      let baseLineHeight = 150 * baseFontSize / 100;
      return __spreadProps(__spreadValues({}, prevstate), {
        scalingFactor: prevstate.scalingFactor - 0.1,
        baseFontSize,
        baseLineHeight
      });
    }, () => {
      this.idb.updateDb(this.state.scalingFactor, "scalingFactor");
      this.redraw();
    });
  }
  zoomOut(e) {
    e.stopPropagation();
    if (this.state.scalingFactor >= 2) {
      return;
    }
    this.setState((prevstate) => {
      let baseFontSize = prevstate.baseFontSize + 3;
      let baseLineHeight = 150 * baseFontSize / 100;
      return __spreadProps(__spreadValues({}, prevstate), {
        scalingFactor: prevstate.scalingFactor + 0.1,
        baseFontSize,
        baseLineHeight
      });
    }, () => {
      this.redraw();
    });
  }
  updateTool(value, id = null) {
    if (this.tools[value]) {
      this.setState({ selectedTool: value }, () => {
        let selectedOne = this.tools[this.state.selectedTool];
        if (!selectedOne || selectedOne === "select") {
          return;
        }
        if (!id) {
          this.id = this.id + 1;
          this.tool = new selectedOne(this.tempCanvas.current, this.tempContext, this.imgUpdate, this.id, this.state.selectedTheme);
        } else {
          this.tool = new selectedOne(this.tempCanvas.current, this.tempContext, this.imgUpdate, id, this.state.selectedTheme);
        }
      });
    }
  }
  onResize(e) {
    this.setState({ canvasWidth: window.innerWidth, canvasHeight: window.innerHeight }, () => {
      this.redraw();
    });
  }
  onEvent(ev) {
    ev._x = ev.x;
    ev._y = ev.y;
    this.props.mouseMove({ x: this.changeToOneScalingFactor(ev.x - this.state.scrollX), y: this.changeToOneScalingFactor(ev.y - this.state.scrollY) });
    if (this.state.selectedTool === "select") {
      if (ev.type === "mousedown") {
        this.mouseXPosition = ev._x;
        this.mouseYPosition = ev._y;
      } else if (ev.type === "mousemove") {
        if (this.mouseYPosition && this.mouseXPosition) {
          let diffX = Math.abs(this.mouseXPosition - ev._x);
          let diffY = Math.abs(this.mouseYPosition - ev._y);
          if (diffX > 20 || diffY > 20) {
            this.isUserDragging = true;
          }
        }
      } else {
        this.isUserDragging = false;
        this.mouseXPosition = null;
        this.mouseYPosition = null;
      }
    } else {
      this.isUserDragging = false;
      this.mouseXPosition = null;
      this.mouseYPosition = null;
    }
    if (this.isUserDragging) {
      if (!this.draggingElement) {
        ev._x = this.changeToOneScalingFactor(ev.x - this.state.scrollX);
        ev._y = this.changeToOneScalingFactor(ev.y - this.state.scrollY);
        let elementSelected = getElementsAtPosition(this.changeToOneScalingFactor(this.mouseXPosition - this.state.scrollX), this.changeToOneScalingFactor(this.mouseYPosition - this.state.scrollY), this.state.shapes);
        if (elementSelected) {
          this.selectedElement = elementSelected;
          let shapes = this.state.shapes.filter((shape) => shape.id !== elementSelected.id);
          this.setState({ shapes, selectedTool: "move" }, () => {
            this.idb.updateDb(this.state.shapes, "app-state-persist");
            this.redraw();
            this.draggingElement = elementSelected;
            this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
            let selectedElement = __spreadProps(__spreadValues({}, this.selectedElement), {
              x: this.changeFromOneScalingFactor(this.selectedElement.x),
              y: this.changeFromOneScalingFactor(this.selectedElement.y),
              endX: this.changeFromOneScalingFactor(this.selectedElement.endX),
              endY: this.changeFromOneScalingFactor(this.selectedElement.endY),
              startX: this.changeFromOneScalingFactor(this.selectedElement.startX),
              startY: this.changeFromOneScalingFactor(this.selectedElement.startY),
              radius: this.changeFromOneScalingFactor(this.selectedElement.radius),
              width: this.selectedElement.width ? this.changeFromOneScalingFactor(this.selectedElement.width) : null,
              height: this.selectedElement.height ? this.changeFromOneScalingFactor(this.selectedElement.height) : null,
              scalingFactor: this.state.scalingFactor
            });
            this.tool = new MoveTool_default(this.tempCanvas.current, this.tempContext, this.imgUpdate, selectedElement, this.state.selectedTheme);
            this.tool["mousedown"](ev);
          });
        }
      } else if (this.mouseXPosition !== null && this.mouseYPosition !== null) {
        if (ev.type === "mousemove" || ev.type === "mouseup") {
          if (this.tool) {
            this.tool[ev.type](ev);
            if (ev.type === "mouseup") {
              this.isUserDragging = false;
              this.mouseXPosition = null;
              this.mouseYPosition = null;
            }
          }
        }
      }
    } else if (this.tool) {
      let func = this.tool[ev.type];
      if (func) {
        func(ev);
      }
    }
  }
  onClickTool(e) {
    console.log(e.currentTarget.id);
    this.updateTool(e.currentTarget.id);
  }
  changeToOneScalingFactor(coords) {
    return coords / this.state.scalingFactor;
  }
  changeFromOneScalingFactor(coords) {
    return coords * this.state.scalingFactor;
  }
  drawImage() {
    console.log(this.state.shapes, this.state.selectedTool);
    this.resetDraggingValues();
    requestAnimationFrame(() => {
      if (this.state.selectedTool === "move" || this.state.selectedTool === "text") {
        this.redraw();
        this.setState({ selectedTool: "select" });
        this.tool = null;
      } else {
        this.mainContext.drawImage(this.tempCanvas.current, 0, 0);
        this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
        if (this.state.selectedTool !== "text") {
          this.setState({ selectedTool: "select" });
          this.tool = null;
        }
      }
    });
  }
  imgUpdate(drawenImage) {
    if (drawenImage && drawenImage.type) {
      let modifiedImage = __spreadProps(__spreadValues({}, drawenImage), {
        x: this.changeToOneScalingFactor(drawenImage.x - this.state.scrollX),
        y: this.changeToOneScalingFactor(drawenImage.y - this.state.scrollY),
        endX: this.changeToOneScalingFactor(drawenImage.endX - this.state.scrollX),
        endY: this.changeToOneScalingFactor(drawenImage.endY - this.state.scrollY),
        startX: this.changeToOneScalingFactor(drawenImage.startX - this.state.scrollX),
        startY: this.changeToOneScalingFactor(drawenImage.startY - this.state.scrollY),
        radius: this.changeToOneScalingFactor(drawenImage.radius),
        width: drawenImage.width ? this.changeToOneScalingFactor(drawenImage.width) : null,
        height: drawenImage.height ? this.changeToOneScalingFactor(drawenImage.height) : null,
        scalingFactor: this.state.scalingFactor
      });
      let filteredShapes = this.state.shapes.filter((shape) => shape.id !== drawenImage.id);
      this.setState({ shapes: [...filteredShapes, modifiedImage] }, () => {
        this.idb.updateDb(this.state.shapes, "app-state-persist");
        this.props.updateShape(modifiedImage);
        this.drawImage();
      });
    } else {
      this.drawImage();
    }
  }
  redraw() {
    console.log("redraw");
    this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
    this.tempContext.restore();
    this.tempContext.setLineDash([]);
    this.tempContext.strokeStyle = this.state.selectedTheme === "dark" ? "#FFFFFF" : "#000000";
    ;
    this.tempContext.fillStyle = this.state.selectedTheme === "dark" ? "#424242" : "#000000";
    ;
    this.state.shapes.forEach((shape) => {
      if (shape.type === "rectangle") {
        this.tempContext.strokeRect(this.changeFromOneScalingFactor(shape.x) + this.state.scrollX, this.changeFromOneScalingFactor(shape.y) + this.state.scrollY, this.changeFromOneScalingFactor(shape.width), this.changeFromOneScalingFactor(shape.height));
      } else if (shape.type === "arrow") {
        let headlen = 10;
        let x = this.changeFromOneScalingFactor(shape.x) + this.state.scrollX;
        let y = this.changeFromOneScalingFactor(shape.y) + this.state.scrollY;
        let endX = this.changeFromOneScalingFactor(shape.endX) + this.state.scrollX;
        let endY = this.changeFromOneScalingFactor(shape.endY) + this.state.scrollY;
        let dx = endX - x;
        let dy = endY - y;
        let angle = Math.atan2(dy, dx);
        this.tempContext.beginPath();
        this.tempContext.moveTo(x, y);
        this.tempContext.lineTo(endX, endY);
        this.tempContext.lineTo(endX - headlen * Math.cos(angle - Math.PI / 6), endY - headlen * Math.sin(angle - Math.PI / 6));
        this.tempContext.moveTo(endX, endY);
        this.tempContext.lineTo(endX - headlen * Math.cos(angle + Math.PI / 6), endY - headlen * Math.sin(angle + Math.PI / 6));
        this.tempContext.stroke();
        this.tempContext.closePath();
      } else if (shape.type === "line") {
        this.tempContext.beginPath();
        this.tempContext.moveTo(this.changeFromOneScalingFactor(shape.x) + this.state.scrollX, this.changeFromOneScalingFactor(shape.y) + this.state.scrollY);
        this.tempContext.lineTo(this.changeFromOneScalingFactor(shape.endX) + this.state.scrollX, this.changeFromOneScalingFactor(shape.endY) + this.state.scrollY);
        this.tempContext.stroke();
        this.tempContext.closePath();
      } else if (shape.type === "text") {
        let color = this.state.selectedTheme === "dark" ? "#FFFFFF" : "#000000";
        drawText(shape.textContent, this.tempContext, this.changeFromOneScalingFactor(shape.x) + this.state.scrollX, this.changeFromOneScalingFactor(shape.y) + this.state.scrollY, this.changeFromOneScalingFactor(shape.width), this.state.baseLineHeight, color, this.state.baseFontSize);
      } else if (shape.type === "circle") {
        let x = this.changeFromOneScalingFactor(shape.x) + this.state.scrollX;
        let y = this.changeFromOneScalingFactor(shape.y) + this.state.scrollY;
        this.tempContext.beginPath();
        this.tempContext.arc(x, y, this.changeFromOneScalingFactor(shape.radius), 0, 2 * Math.PI);
        this.tempContext.stroke();
      } else if (shape.type === "diamond") {
        let xCenter = this.changeFromOneScalingFactor(shape.x) + this.state.scrollX;
        let yCenter = this.changeFromOneScalingFactor(shape.y) + this.state.scrollY;
        let size = this.changeFromOneScalingFactor(shape.x - shape.endX);
        drawDiamond(xCenter, yCenter, size, this.tempContext);
      }
    });
    this.mainContext.clearRect(0, 0, this.mainCanvas.current.width, this.mainCanvas.current.height);
    this.mainContext.drawImage(this.tempCanvas.current, 0, 0);
    this.tempContext.restore();
    this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
  }
  changeToTextTool(ev) {
    ev._x = this.changeToOneScalingFactor(ev.x - this.state.scrollX);
    ev._y = this.changeToOneScalingFactor(ev.y - this.state.scrollY);
    let enclosedElement = getElementsAtPosition(ev._x, ev._y, this.state.shapes);
    this.resetDraggingValues();
    this.setState({ selectedTool: "text" }, () => {
      this.resetDraggingValues();
      let textId = null;
      if (enclosedElement && enclosedElement.type === "text") {
        textId = enclosedElement.id;
        let shapes = this.state.shapes.filter((shape) => shape.id !== this.selectedElement.id);
        this.setState({ shapes }, () => {
          this.redraw();
        });
      } else {
        this.id = this.id + 1;
        textId = this.id;
      }
      this.tool = new DrawText_default(this.tempCanvas.current, this.tempContext, this.imgUpdate, textId, this.state.selectedTheme);
      let func = this.tool[ev.type];
      if (func) {
        this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
        func(ev, enclosedElement, { scrollX: this.state.scrollX, scrollY: this.state.scrollY, scalingFactor: this.state.scalingFactor });
      }
    });
  }
  onKeyDown(ev) {
    if (this.state.selectedTool === "text") {
      return;
    }
    if (ev.keyCode >= 48 && ev.keyCode <= 57 || ev.keyCode >= 65 && ev.keyCode <= 90) {
    } else {
      if (this.selectedElement) {
        if (ev.which === 46 || ev.which === 8) {
          let shapes = this.state.shapes.filter((shape) => shape.id !== this.selectedElement.id);
          this.setState({ shapes }, () => {
            this.redraw();
          });
        }
      }
    }
  }
  onDocumentClick(ev) {
    ev._x = this.changeToOneScalingFactor(ev.x - this.state.scrollX);
    ev._y = this.changeToOneScalingFactor(ev.y - this.state.scrollY);
    if (this.state.selectedTool === "text") {
      this.tool["onBlur"]();
      return;
    }
    if (this.state.selectedTool === "select") {
      this.tempContext.clearRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
      let selectedElement = getElementsAtPosition(ev._x, ev._y, this.state.shapes);
      this.selectedElement = selectedElement;
      console.log(selectedElement);
      if (this.selectedElement) {
        if (this.selectedElement.type === "rectangle") {
          let x = this.changeFromOneScalingFactor(this.selectedElement.x) + this.state.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.y) + this.state.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(this.selectedElement.width) + 10, this.changeFromOneScalingFactor(this.selectedElement.height) + 10);
        } else if (this.selectedElement.type === "line" || this.selectedElement.type === "arrow") {
          let x = this.changeFromOneScalingFactor(this.selectedElement.startX) + this.state.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.startY) + this.state.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(this.selectedElement.width) + 10, this.changeFromOneScalingFactor(this.selectedElement.height) + 10);
        } else if (this.selectedElement.type === "circle") {
          let x = this.changeFromOneScalingFactor(this.selectedElement.x) + this.state.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.y) + this.state.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.beginPath();
          this.tempContext.arc(x, y, this.changeFromOneScalingFactor(this.selectedElement.radius) + 10, 0, 2 * Math.PI);
          this.tempContext.stroke();
        } else if (this.selectedElement.type === "diamond") {
          let x = this.changeFromOneScalingFactor(this.selectedElement.startX) + this.state.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.startY) + this.state.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(this.selectedElement.width) + 10, this.changeFromOneScalingFactor(this.selectedElement.height) + 10);
        } else if (this.selectedElement.type === "text") {
          let x = this.changeFromOneScalingFactor(this.selectedElement.x) + this.state.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.y) + this.state.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(this.selectedElement.width), this.changeFromOneScalingFactor(this.selectedElement.height));
        }
      }
    }
  }
  onWheelMove(e) {
    if (this.state.selectedTool === "text") {
      this.tool["onBlur"]();
    }
    this.setState((prevstate) => {
      return {
        scrollX: prevstate.scrollX - e.deltaX,
        scrollY: prevstate.scrollY - e.deltaY
      };
    }, () => {
      this.redraw();
    });
  }
  resetDraggingValues() {
    this.isUserDragging = false;
    this.draggingElement = null;
    this.mouseXPosition = null;
    this.mouseYPosition = null;
  }
  updateTheme(e) {
    e.stopPropagation();
    this.setState((prevstate) => {
      return __spreadProps(__spreadValues({}, prevstate), {
        selectedTheme: prevstate.selectedTheme === "dark" ? "light" : "dark"
      });
    }, () => {
      this.tempContext.strokeStyle = this.state.selectedTheme === "dark" ? "#FFFFFF" : "#000000";
      this.tempContext.lineWidth = 1;
      this.tempContext.fillStyle = this.state.selectedTheme === "dark" ? "#424242" : "#FFFFFF";
      this.tempContext.fillRect(0, 0, this.tempCanvas.current.width, this.tempCanvas.current.height);
      this.redraw();
    });
  }
  render() {
    return /* @__PURE__ */ import_react11.default.createElement("div", {
      style: { "--font-size": `${this.state.baseFontSize}px`, "--line-height": `${this.state.baseLineHeight}px`, cursor: `${this.state.selectedTool === "select" ? `url('../assets/cursor.svg')` : "crosshair"}` },
      className: `${this.state.selectedTheme === "dark" ? "dark-mode" : "light-mode"}`
    }, /* @__PURE__ */ import_react11.default.createElement("div", {
      id: "wrapper"
    }, /* @__PURE__ */ import_react11.default.createElement("div", {
      id: "blackboardPlaceholder"
    }, /* @__PURE__ */ import_react11.default.createElement("canvas", {
      id: "drawingCanvas",
      ref: this.mainCanvas,
      width: this.state.canvasWidth,
      height: this.state.canvasHeight
    }, /* @__PURE__ */ import_react11.default.createElement("p", {
      className: "noscript"
    }, "We're sorry, this web application is currently not supported with your browser. Please use an alternate browser or download a supported ", /* @__PURE__ */ import_react11.default.createElement("br", null), "browser.Supported browsers: ", /* @__PURE__ */ import_react11.default.createElement("a", {
      href: "http://www.google.com/chrome"
    }, "Google Chrome"), ", ", /* @__PURE__ */ import_react11.default.createElement("a", {
      href: "http://www.opera.com"
    }, "Opera"), ", ", /* @__PURE__ */ import_react11.default.createElement("a", {
      href: "http://www.mozilla.com"
    }, "Firefox"), ", ", /* @__PURE__ */ import_react11.default.createElement("a", {
      href: "http://www.apple.com/safari"
    }, "Safari"), ", ", /* @__PURE__ */ import_react11.default.createElement("br", null), "and ", /* @__PURE__ */ import_react11.default.createElement("a", {
      href: "http://www.konqueror.org"
    }, "Konqueror"), ". Also make sure your JavaScript is enabled.")), /* @__PURE__ */ import_react11.default.createElement("canvas", {
      id: "tempCanvas",
      ref: this.tempCanvas,
      width: this.state.canvasWidth,
      height: this.state.canvasHeight
    }))), /* @__PURE__ */ import_react11.default.createElement(SelectTool_default2, {
      selectedTool: this.state.selectedTool,
      updateTool: this.onClickTool
    }), /* @__PURE__ */ import_react11.default.createElement(ConfigTool_default2, {
      toggleTheme: this.updateTheme
    }), /* @__PURE__ */ import_react11.default.createElement(TextTool_default2, null), /* @__PURE__ */ import_react11.default.createElement(ZoomContainer_default2, {
      zoomRange: this.state.scalingFactor,
      zoomOut: this.zoomOut,
      zoomIn: this.zoomIn
    }));
  }
};
var main_default2 = MainComponent;

// app/styles/styles.css
var styles_default = "/build/_assets/styles-WBSHHNAM.css";

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/draw/freeDraw.jsx
var links = () => [
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  { rel: "stylesheet", href: styles_default }
];
function FreeDrawIndex() {
  return /* @__PURE__ */ import_react12.default.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ import_react12.default.createElement(main_default2, {
    mouseMove: () => {
    },
    updateShape: () => {
    }
  }));
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/draw/$drawId.jsx
var drawId_exports = {};
__export(drawId_exports, {
  action: () => action2,
  default: () => DrawIndex,
  links: () => links2,
  loader: () => loader2
});
init_react();
var import_react13 = __toESM(require("react"));
var import_node2 = require("@remix-run/node");
var import_react14 = require("@remix-run/react");
var import_socket = __toESM(require("socket.io-client"));
var links2 = () => [
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  { rel: "stylesheet", href: styles_default }
];
var loader2 = async ({ request, params }) => {
  console.log(params);
  let drawData = await getInitialDrawData(params.drawId);
  return (0, import_node2.json)({ drawData });
};
var action2 = async ({ request, params }) => {
  const body = await request.formData();
  let name = body.get("data");
  const data = await addShape(params.drawId, name);
  return (0, import_node2.json)({ data });
};
function DrawIndex() {
  const fetcher = (0, import_react14.useFetcher)();
  const data = (0, import_react14.useLoaderData)();
  const actionData = (0, import_react14.useActionData)();
  console.log(actionData);
  const [socket, setSocket] = (0, import_react13.useState)();
  const idb = (0, import_react13.useMemo)(() => {
    return new idb_default();
  });
  (0, import_react13.useEffect)(() => {
    const socket2 = (0, import_socket.default)();
    setSocket(socket2);
    socket2.emit("event", "conenction success");
    return () => {
      socket2.close();
    };
  }, []);
  (0, import_react13.useEffect)(() => {
    if (!socket)
      return;
    socket.on("confirmation", (data2) => {
      console.log(data2);
    });
    socket.on("mousemove", (data2) => {
      console.log(data2);
    });
  });
  function updateShape(shape) {
    let formData = new FormData();
    formData.set("data", JSON.stringify(__spreadValues({}, shape)));
    fetcher.submit(formData, { method: "post" });
  }
  function onMouseMove(eventDetails) {
    socket.emit("mousemove", eventDetails);
  }
  return /* @__PURE__ */ import_react13.default.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ import_react13.default.createElement(SocketProvider, {
    socket
  }, /* @__PURE__ */ import_react13.default.createElement(main_default2, {
    mouseMove: onMouseMove,
    updateShape
  })));
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/rooms/index.jsx
var rooms_exports = {};
__export(rooms_exports, {
  default: () => rooms_default,
  loader: () => loader3
});
init_react();
var import_node5 = require("@remix-run/node");
var import_react15 = require("@remix-run/react");
var import_react16 = __toESM(require("react"));

// server/auth.js
init_react();
var import_node4 = require("@remix-run/node");
var import_auth = require("firebase/auth");

// app/sessions.js
init_react();
var import_node3 = require("@remix-run/node");
var { getSession: getSession2, commitSession, destroySession } = (0, import_node3.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    secrets: ["fancy-secret-key"],
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
    path: "/",
    httpOnly: true
  }
});

// server/auth.js
var import_firebase = __toESM(require_firebase_server());
var checkSessionCookie2 = async (session) => {
  try {
    const decodedIdToken = await import_firebase.auth.server.verifySessionCookie(session.get("session") || "");
    return decodedIdToken;
  } catch {
    return { uid: void 0 };
  }
};
var requireAuth = async (request) => {
  const session = await getSession2(request.headers.get("cookie"));
  const { uid } = await checkSessionCookie2(session);
  if (!uid) {
    throw (0, import_node4.redirect)("/signin", {
      headers: { "Set-Cookie": await destroySession(session) }
    });
  }
  return import_firebase.auth.server.getUser(uid);
};
var signIn = async (email, password) => {
  const { user } = await (0, import_auth.signInWithEmailAndPassword)(import_firebase.auth.client, email, password);
  const idToken = await user.getIdToken();
  const expiresIn = 1e3 * 60 * 60 * 24 * 7;
  const sessionCookie = await import_firebase.auth.server.createSessionCookie(idToken, {
    expiresIn
  });
  return { sessionCookie, user };
};
var signUp = async (name, email, password) => {
  let { uid } = await import_firebase.auth.server.createUser({
    email,
    password,
    displayName: name
  });
  console.log("added user success", uid);
  await addUser(name, uid, email);
  return await signIn(email, password);
};

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/rooms/index.jsx
async function loader3({ request }) {
  console.log("rooms loader");
  const { displayName, uid } = await requireAuth(request);
  console.log("uid", uid);
  const userData = await getUser(uid);
  console.log("Error", userData.error);
  if (userData.error) {
    return (0, import_node5.redirect)("/");
  } else {
    return (0, import_node5.json)({ user: userData.data });
  }
}
function Rooms() {
  const data = (0, import_react15.useLoaderData)();
  console.log(data);
  return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement("p", null, /* @__PURE__ */ import_react16.default.createElement(import_react15.Link, {
    to: "/createRoom"
  }, "Create Room")), /* @__PURE__ */ import_react16.default.createElement("p", null, /* @__PURE__ */ import_react16.default.createElement(import_react15.Link, {
    to: "/enterRoom"
  }, "Enter Room")), /* @__PURE__ */ import_react16.default.createElement("p", null, "Rooms List"), /* @__PURE__ */ import_react16.default.createElement(import_react15.Outlet, null));
}
var rooms_default = Rooms;

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/SignIn.jsx
var SignIn_exports = {};
__export(SignIn_exports, {
  action: () => action3,
  default: () => Login,
  loader: () => loader4
});
init_react();
var import_node6 = require("@remix-run/node");
var import_react17 = require("@remix-run/react");
var import_react18 = require("react");
var loader4 = async ({ request }) => {
  const session = await getSession2(request.headers.get("cookie"));
  const { uid } = await checkSessionCookie2(session);
  const headers = {
    "Set-Cookie": await commitSession(session)
  };
  if (uid) {
    return (0, import_node6.redirect)("/rooms", { headers });
  }
  return (0, import_node6.json)({}, { headers });
};
var action3 = async ({ request }) => {
  const form = await request.formData();
  const idToken = form.get("idToken");
  try {
    const email = form.get("email");
    const password = form.get("password");
    const formError = (0, import_node6.json)({ error: "Please fill all fields!" }, { status: 400 });
    if (typeof email !== "string")
      return formError;
    if (typeof password !== "string")
      return formError;
    let { sessionCookie } = await signIn(email, password);
    const session = await getSession2(request.headers.get("cookie"));
    session.set("session", sessionCookie);
    return (0, import_node6.redirect)("/rooms", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  } catch (error) {
    console.error(error);
    return (0, import_node6.json)({ error: String(error) }, { status: 401 });
  }
};
function Login() {
  const action6 = (0, import_react17.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Login"), (action6 == null ? void 0 : action6.error) && /* @__PURE__ */ React.createElement("p", null, action6 == null ? void 0 : action6.error), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    style: { display: "block" },
    name: "email",
    placeholder: "you@example.com",
    type: "email"
  }), /* @__PURE__ */ React.createElement("input", {
    style: { display: "block" },
    name: "password",
    placeholder: "password",
    type: "password"
  }), /* @__PURE__ */ React.createElement("button", {
    style: { display: "block" },
    type: "submit"
  }, "Login")), /* @__PURE__ */ React.createElement("p", null, "Do you want to ", /* @__PURE__ */ React.createElement(import_react17.Link, {
    to: "/SignUp"
  }, "join"), "?"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(import_react17.Link, {
    to: "/draw/freedraw",
    className: "text-xl text-blue-600 underline"
  }, "Try without Login")));
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/SignUp.jsx
var SignUp_exports = {};
__export(SignUp_exports, {
  action: () => action4,
  default: () => Login2,
  loader: () => loader5
});
init_react();
var import_node7 = require("@remix-run/node");
var import_react19 = require("@remix-run/react");
var loader5 = async ({ request }) => {
  const session = await getSession2(request.headers.get("cookie"));
  const { uid } = await checkSessionCookie2(session);
  const headers = {
    "Set-Cookie": await commitSession(session)
  };
  if (uid) {
    return (0, import_node7.redirect)("/rooms", { headers });
  }
  return (0, import_node7.json)(null, { headers });
};
var action4 = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");
  const password = form.get("password");
  const formError = (0, import_node7.json)({ error: "Please fill all fields!" }, { status: 400 });
  if (typeof name !== "string")
    return formError;
  if (typeof email !== "string")
    return formError;
  if (typeof password !== "string")
    return formError;
  try {
    const { sessionCookie } = await signUp(name, email, password);
    const session = await getSession2(request.headers.get("cookie"));
    session.set("session", sessionCookie);
    return (0, import_node7.redirect)("/rooms", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  } catch (error) {
    console.error(error);
    return (0, import_node7.json)({ error: String(error) }, { status: 401 });
  }
};
function Login2() {
  const action6 = (0, import_react19.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Join"), (action6 == null ? void 0 : action6.error) && /* @__PURE__ */ React.createElement("p", null, action6.error), /* @__PURE__ */ React.createElement(import_react19.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    style: { display: "block" },
    name: "name",
    placeholder: "Peter",
    type: "text"
  }), /* @__PURE__ */ React.createElement("input", {
    style: { display: "block" },
    name: "email",
    placeholder: "you@example.com",
    type: "email"
  }), /* @__PURE__ */ React.createElement("input", {
    style: { display: "block" },
    name: "password",
    placeholder: "password",
    type: "password"
  }), /* @__PURE__ */ React.createElement("button", {
    style: { display: "block" },
    type: "submit"
  }, "Join")), /* @__PURE__ */ React.createElement("p", null, "Do you want to ", /* @__PURE__ */ React.createElement(import_react19.Link, {
    to: "/login"
  }, "login"), "?"));
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action5,
  default: () => Index,
  loader: () => loader6
});
init_react();
var import_react20 = __toESM(require("react"));
var import_react21 = require("@remix-run/react");
var import_node8 = require("@remix-run/node");
async function loader6({ request }) {
  const session = await getSession2(request.headers.get("Cookie"));
  console.log(session.has("__session"));
  if (session.has("__session")) {
    console.log("Isnndie UserId");
    return (0, import_node8.redirect)("/rooms");
  }
  return null;
}
async function action5({ request }) {
  const body = await request.formData();
  let name = body.get("name");
  const draw = await createRoom(name);
  const session = await getSession2(request.headers.get("Cookie"));
  session.set("userId", draw.userId);
  console.log(draw);
  return (0, import_node8.redirect)(`/draw/${draw.id}`, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
function Index() {
  var _a;
  const transition = (0, import_react21.useTransition)();
  const actionData = (0, import_react21.useActionData)();
  return /* @__PURE__ */ import_react20.default.createElement(import_react21.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react20.default.createElement("fieldset", {
    disabled: transition.state === "submitting"
  }, /* @__PURE__ */ import_react20.default.createElement("p", null, /* @__PURE__ */ import_react20.default.createElement("label", null, "Name:", " ", /* @__PURE__ */ import_react20.default.createElement("input", {
    name: "name",
    type: "text",
    defaultValue: actionData ? actionData.values.name : void 0,
    style: {
      borderColor: (actionData == null ? void 0 : actionData.errors.name) ? "red" : ""
    }
  }))), (actionData == null ? void 0 : actionData.errors.name) ? /* @__PURE__ */ import_react20.default.createElement(ValidationMessage, {
    isSubmitting: transition.state === "submitting",
    error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.name
  }) : null, /* @__PURE__ */ import_react20.default.createElement("p", null, /* @__PURE__ */ import_react20.default.createElement("button", {
    type: "submit"
  }, transition.state === "submitting" ? "Configuring..." : "Enter Room")), /* @__PURE__ */ import_react20.default.createElement(import_react21.Link, {
    to: "/draw/freedraw",
    className: "text-xl text-blue-600 underline"
  }, "Try without Login")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "3005d0dd", "entry": { "module": "/build/entry.client-FRQPTBET.js", "imports": ["/build/_shared/chunk-PRHOWYG5.js", "/build/_shared/chunk-FN7GJDOI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-AAGBJ56Y.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/SignIn": { "id": "routes/SignIn", "parentId": "root", "path": "SignIn", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/SignIn-BHGP7XTB.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/SignUp": { "id": "routes/SignUp", "parentId": "root", "path": "SignUp", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/SignUp-FK2ZBO4N.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/draw/$drawId": { "id": "routes/draw/$drawId", "parentId": "root", "path": "draw/:drawId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/draw/$drawId-Y7HGZVY3.js", "imports": ["/build/_shared/chunk-SK4MHGYH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/draw/freeDraw": { "id": "routes/draw/freeDraw", "parentId": "root", "path": "draw/freeDraw", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/draw/freeDraw-OZBGCPOJ.js", "imports": ["/build/_shared/chunk-SK4MHGYH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-ZQHUHMP2.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/rooms/createRoom": { "id": "routes/rooms/createRoom", "parentId": "root", "path": "rooms/createRoom", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/rooms/createRoom-XEVBJHB6.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/rooms/enterRoom": { "id": "routes/rooms/enterRoom", "parentId": "root", "path": "rooms/enterRoom", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/rooms/enterRoom-JDZMUWXH.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/rooms/index": { "id": "routes/rooms/index", "parentId": "root", "path": "rooms", "index": true, "caseSensitive": void 0, "module": "/build/routes/rooms/index-ANOMJWFK.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3005D0DD.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/rooms/createRoom": {
    id: "routes/rooms/createRoom",
    parentId: "root",
    path: "rooms/createRoom",
    index: void 0,
    caseSensitive: void 0,
    module: createRoom_exports
  },
  "routes/rooms/enterRoom": {
    id: "routes/rooms/enterRoom",
    parentId: "root",
    path: "rooms/enterRoom",
    index: void 0,
    caseSensitive: void 0,
    module: enterRoom_exports
  },
  "routes/draw/freeDraw": {
    id: "routes/draw/freeDraw",
    parentId: "root",
    path: "draw/freeDraw",
    index: void 0,
    caseSensitive: void 0,
    module: freeDraw_exports
  },
  "routes/draw/$drawId": {
    id: "routes/draw/$drawId",
    parentId: "root",
    path: "draw/:drawId",
    index: void 0,
    caseSensitive: void 0,
    module: drawId_exports
  },
  "routes/rooms/index": {
    id: "routes/rooms/index",
    parentId: "root",
    path: "rooms",
    index: true,
    caseSensitive: void 0,
    module: rooms_exports
  },
  "routes/SignIn": {
    id: "routes/SignIn",
    parentId: "root",
    path: "SignIn",
    index: void 0,
    caseSensitive: void 0,
    module: SignIn_exports
  },
  "routes/SignUp": {
    id: "routes/SignUp",
    parentId: "root",
    path: "SignUp",
    index: void 0,
    caseSensitive: void 0,
    module: SignUp_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
