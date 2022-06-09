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

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports2) {
    "use strict";
    init_react();
    Object.defineProperty(exports2, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports2, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports2, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports2, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports2, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports2, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports2, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports2, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports2, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports2, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports2, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports2, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports2, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports2, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports2, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports2, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports2, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports2, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports2, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports2, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports2, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports2, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports2, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports2, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports2, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports2, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports2, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports2, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports2, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports2, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports2, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports2, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports2, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports2, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports2, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports2, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports2, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports2, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports2, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports2, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports2, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports2, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports2, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports2, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports2, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports2, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports2, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_config = require("dotenv/config");
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));

// server/firebase.server.js
init_react();
var import_app = require("firebase-admin/app");
var import_app2 = require("firebase/app");
var import_auth = require("firebase-admin/auth");
var import_auth2 = require("firebase/auth");
if ((0, import_app2.getApps)().length === 0) {
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
  (0, import_app2.initializeApp)(config);
}
if ((0, import_app.getApps)().length === 0) {
  let config;
  if (!process.env.SERVICE_ACCOUNT) {
    throw new Error("Missing SERVICE_ACCOUNT environment variable");
  } else {
    try {
      const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);
      config = {
        credential: (0, import_app.cert)(serviceAccount)
      };
    } catch {
      throw Error("Invalid SERVICE_ACCOUNT environment variable");
    }
  }
  (0, import_app.initializeApp)(config);
}
var auth = {
  server: (0, import_auth.getAuth)(),
  client: (0, import_auth2.getAuth)()
};

// server.js
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
  handleDataRequest: () => handleDataRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
var handleDataRequest = (response, { request, params, context: context2 }) => {
  console.log("Initakl", request);
  return { message: "success" };
};

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_react = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());
function meta() {
  return { title: "New Remix App" };
}
function App() {
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ import_react.default.createElement("title", null, "Whiteboard Application"), /* @__PURE__ */ import_react.default.createElement(import_remix2.Meta, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.Links, null)), /* @__PURE__ */ import_react.default.createElement("body", null, /* @__PURE__ */ import_react.default.createElement(import_remix2.Outlet, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.Scripts, null), /* @__PURE__ */ import_react.default.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/draw/$drawId.jsx
var drawId_exports = {};
__export(drawId_exports, {
  default: () => DrawIndex,
  links: () => links,
  loader: () => loader
});
init_react();
var import_react8 = __toESM(require("react"));
var import_node = require("@remix-run/node");
var import_react9 = require("@remix-run/react");
var import_socket = __toESM(require("socket.io-client"));

// app/components/ConfigTool/ConfigTool.js
init_react();
var import_react2 = __toESM(require("react"));

// app/components/ConfigTool/ConfigTool.css
var ConfigTool_default = "/build/_assets/ConfigTool-5OWJ5SE4.css";

// app/components/ConfigTool/ConfigTool.js
function ConfigToolLinks() {
  return [{ rel: "stylesheet", href: ConfigTool_default }];
}
function ConfigTool({ toggleTheme }) {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "configTool"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "configLabel"
  }, "Dark Mode"), /* @__PURE__ */ import_react2.default.createElement("label", {
    className: "switch"
  }, /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "checkbox",
    onClick: toggleTheme
  }), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "slider round",
    id: "toggleDarkMode"
  }))));
}
var ConfigTool_default2 = ConfigTool;

// app/components/main.js
init_react();
var import_react7 = __toESM(require("react"));

// app/components/main.css
var main_default = "/build/_assets/main-YLJ6JLO4.css";

// app/components/SelectTool/SelectTool.js
init_react();
var import_react3 = __toESM(require("react"));

// app/components/SelectTool/SelectTool.css
var SelectTool_default = "/build/_assets/SelectTool-ZIZDDKIP.css";

// app/components/SelectTool/SelectTool.js
function SelectToolLinks() {
  return [{ rel: "stylesheet", href: SelectTool_default }];
}
function SelectTool({ selectedTool, updateTool }) {
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "selectTool"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: `tool-icon ${selectedTool === "select" ? "selected" : ""}`,
    id: "select",
    onClick: updateTool
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "currentcolor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9476 0.228823C12.2527 -0.0762743 12.7473 -0.0762743 13.0524 0.228823L16.1774 3.35382C16.4825 3.65892 16.4825 4.15358 16.1774 4.45868C15.8723 4.76377 15.3777 4.76377 15.0726 4.45868L13.2812 2.66735V8.59375C13.2812 9.02522 12.9315 9.375 12.5 9.375C12.0685 9.375 11.7188 9.02522 11.7188 8.59375V2.66735L9.92743 4.45868C9.62233 4.76377 9.12767 4.76377 8.82257 4.45868C8.51748 4.15358 8.51748 3.65892 8.82257 3.35382L11.9476 0.228823ZM12.5 15.625C12.9315 15.625 13.2812 15.9748 13.2812 16.4062V22.3326L15.0726 20.5413C15.3777 20.2362 15.8723 20.2362 16.1774 20.5413C16.4825 20.8464 16.4825 21.3411 16.1774 21.6462L13.0524 24.7712C12.7473 25.0763 12.2527 25.0763 11.9476 24.7712L8.82257 21.6462C8.51748 21.3411 8.51748 20.8464 8.82257 20.5413C9.12767 20.2362 9.62233 20.2362 9.92743 20.5413L11.7187 22.3326V16.4062C11.7187 15.9748 12.0685 15.625 12.5 15.625Z"
  }), /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "currentcolor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.228823 13.0524C-0.0762743 12.7473 -0.0762743 12.2527 0.228823 11.9476L3.35382 8.82257C3.65892 8.51748 4.15358 8.51748 4.45868 8.82257C4.76377 9.12767 4.76377 9.62233 4.45868 9.92743L2.66735 11.7188L8.59375 11.7188C9.02522 11.7188 9.375 12.0685 9.375 12.5C9.375 12.9315 9.02522 13.2813 8.59375 13.2813L2.66735 13.2812L4.45868 15.0726C4.76377 15.3777 4.76377 15.8723 4.45868 16.1774C4.15358 16.4825 3.65892 16.4825 3.35382 16.1774L0.228823 13.0524ZM15.625 12.5C15.625 12.0685 15.9748 11.7188 16.4062 11.7188H22.3326L20.5413 9.92743C20.2362 9.62233 20.2362 9.12767 20.5413 8.82257C20.8464 8.51748 21.3411 8.51748 21.6462 8.82257L24.7712 11.9476C25.0763 12.2527 25.0763 12.7473 24.7712 13.0524L21.6462 16.1774C21.3411 16.4825 20.8464 16.4825 20.5413 16.1774C20.2362 15.8723 20.2362 15.3777 20.5413 15.0726L22.3326 13.2813H16.4062C15.9748 13.2813 15.625 12.9315 15.625 12.5Z"
  }))), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: `tool-icon ${selectedTool === "rect" ? "selected" : ""}`,
    id: "rect",
    onClick: updateTool
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "currentcolor",
    d: "M21.875 1.5625C22.7379 1.5625 23.4375 2.26206 23.4375 3.125V21.875C23.4375 22.7379 22.7379 23.4375 21.875 23.4375H3.125C2.26206 23.4375 1.5625 22.7379 1.5625 21.875V3.125C1.5625 2.26206 2.26206 1.5625 3.125 1.5625H21.875ZM3.125 0C1.39911 0 0 1.39911 0 3.125V21.875C0 23.6009 1.39911 25 3.125 25H21.875C23.6009 25 25 23.6009 25 21.875V3.125C25 1.39911 23.6009 0 21.875 0H3.125Z"
  }))), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: `tool-icon ${selectedTool === "circle" ? "selected" : ""}`,
    id: "circle",
    onClick: updateTool
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "currentcolor",
    d: "M12.5 23.4375C6.45939 23.4375 1.5625 18.5406 1.5625 12.5C1.5625 6.45939 6.45939 1.5625 12.5 1.5625C18.5406 1.5625 23.4375 6.45939 23.4375 12.5C23.4375 18.5406 18.5406 23.4375 12.5 23.4375ZM12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
  }))), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: `tool-icon ${selectedTool === "arrow" ? "selected" : ""}`,
    id: "arrow",
    onClick: updateTool
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "currentcolor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5625 12.5C1.5625 12.0685 1.91228 11.7187 2.34375 11.7187H20.7701L15.8538 6.80243C15.5487 6.49733 15.5487 6.00267 15.8538 5.69757C16.1589 5.39247 16.6536 5.39247 16.9587 5.69757L23.2087 11.9476C23.5138 12.2527 23.5138 12.7473 23.2087 13.0524L16.9587 19.3024C16.6536 19.6075 16.1589 19.6075 15.8538 19.3024C15.5487 18.9973 15.5487 18.5027 15.8538 18.1976L20.7701 13.2812H2.34375C1.91228 13.2812 1.5625 12.9315 1.5625 12.5Z"
  }))), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: `tool-icon ${selectedTool === "line" ? "selected" : ""}`,
    id: "line",
    onClick: updateTool
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    height: "25",
    width: "25",
    viewBox: "0 0 25 25"
  }, /* @__PURE__ */ import_react3.default.createElement("line", {
    x1: "0",
    y1: "10",
    x2: "25",
    y2: "25",
    stroke: "var(--icon-color)"
  }))), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: `tool-icon ${selectedTool === "diamond" ? "selected" : ""}`,
    id: "diamond",
    onClick: updateTool
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "currentcolor",
    d: "M10.8603 0.679185C11.7659 -0.226396 13.2341 -0.226394 14.1397 0.679186L24.3208 10.8603C25.2264 11.7659 25.2264 13.2341 24.3208 14.1397L14.1397 24.3208C13.2341 25.2264 11.7659 25.2264 10.8603 24.3208L0.679185 14.1397C-0.226396 13.2341 -0.226394 11.7659 0.679186 10.8603L10.8603 0.679185ZM13.0466 1.77232C12.7447 1.47046 12.2553 1.47046 11.9534 1.77232L1.77232 11.9534C1.47046 12.2553 1.47046 12.7447 1.77232 13.0466L11.9534 23.2277C12.2553 23.5295 12.7447 23.5295 13.0466 23.2277L23.2277 13.0466C23.5295 12.7447 23.5295 12.2553 23.2277 11.9534L13.0466 1.77232Z"
  }))), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: `tool-icon ${selectedTool === "chalk" ? "selected" : ""}`,
    id: "chalk",
    onClick: updateTool
  }, /* @__PURE__ */ import_react3.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react3.default.createElement("g", {
    clipPath: "url(#clip0_1287_3498)"
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    fill: "currentcolor",
    d: "M18.9788 0.228823C19.2839 -0.0762743 19.7786 -0.0762743 20.0837 0.228823L24.7712 4.91632C25.0763 5.22142 25.0763 5.71608 24.7712 6.02118L9.1462 21.6462C9.07139 21.721 8.98216 21.7798 8.88392 21.8191L1.07142 24.9441C0.781252 25.0602 0.449832 24.9922 0.228846 24.7712C0.0078592 24.5502 -0.0601674 24.2188 0.0559004 23.9286L3.1809 16.1161C3.22019 16.0179 3.27903 15.9286 3.35385 15.8538L18.9788 0.228823ZM17.5111 3.90625L21.0938 7.4889L23.1139 5.46875L19.5313 1.8861L17.5111 3.90625ZM19.9889 8.59375L16.4063 5.0111L6.25002 15.1674V15.625H7.03127C7.46275 15.625 7.81252 15.9748 7.81252 16.4062V17.1875H8.59377C9.02525 17.1875 9.37502 17.5373 9.37502 17.9688V18.75H9.83267L19.9889 8.59375ZM4.73698 16.6804L4.57209 16.8453L2.18366 22.8164L8.15473 20.4279L8.31962 20.263C8.02338 20.152 7.81252 19.8663 7.81252 19.5312V18.75H7.03127C6.5998 18.75 6.25002 18.4002 6.25002 17.9688V17.1875H5.46877C5.13377 17.1875 4.84801 16.9766 4.73698 16.6804Z"
  })), /* @__PURE__ */ import_react3.default.createElement("defs", null, /* @__PURE__ */ import_react3.default.createElement("clipPath", {
    id: "clip0_1287_3498"
  }, /* @__PURE__ */ import_react3.default.createElement("rect", {
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
function drawDiamond(xCenter, yCenter, size, context2) {
  let numberOfSides = 4;
  context2.beginPath();
  context2.moveTo(xCenter + size * Math.cos(0), yCenter + size * Math.sin(0));
  for (var i = 1; i <= numberOfSides; i += 1) {
    context2.lineTo(xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }
  context2.stroke();
}
function drawText(text, context2, x, y, maxWidth, lineHeight = 32, color, fontSize = 24) {
  context2.font = `normal ${fontSize}px/${lineHeight}px Comic Sans MS`;
  context2.fillStyle = color;
  context2.textBaseline = "top";
  let words = text.split("");
  let line = "";
  let numberOfLines = 1;
  for (let n = 0; n < words.length; n++) {
    if (words[n] === "\n") {
      context2.fillText(line, x, y);
      line = "";
      y += lineHeight;
      numberOfLines++;
    } else {
      let testLine = line + words[n] + "";
      line = testLine;
    }
  }
  context2.fillText(line, x, y);
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
var import_react4 = __toESM(require("react"));

// app/components/TextTool/TextTool.css
var TextTool_default = "/build/_assets/TextTool-UMOFHWRZ.css";

// app/components/TextTool/TextTool.js
function TextToolLinks() {
  return [{ rel: "stylesheet", href: TextTool_default }];
}
function TextTool() {
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    style: { color: "black" },
    className: "textTool",
    id: "textBoxContainerId"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "textarea",
    id: "textAreaId",
    role: "textbox",
    contentEditable: true
  }));
}
var TextTool_default2 = TextTool;

// app/components/ZoomContainer/ZoomContainer.js
init_react();
var import_react5 = __toESM(require("react"));

// app/components/ZoomContainer/ZoomContainer.css
var ZoomContainer_default = "/build/_assets/ZoomContainer-Y6YPOOBE.css";

// app/components/ZoomContainer/ZoomContainer.js
function ZoomContainerLinks() {
  return [{ rel: "stylesheet", href: ZoomContainer_default }];
}
function ZoomContainer({ zoomRange, zoomIn, zoomOut }) {
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "zoomContainer"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    id: "minus",
    className: "zoom-sign",
    onClick: zoomIn
  }, /* @__PURE__ */ import_react5.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react5.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.125 12.5C3.125 12.0685 3.47478 11.7188 3.90625 11.7188H21.0938C21.5252 11.7188 21.875 12.0685 21.875 12.5C21.875 12.9315 21.5252 13.2812 21.0938 13.2812H3.90625C3.47478 13.2812 3.125 12.9315 3.125 12.5Z",
    fill: "currentcolor"
  }))), /* @__PURE__ */ import_react5.default.createElement("span", {
    id: "zoomRange",
    className: "zoom-range"
  }, Math.floor(zoomRange * 100)), /* @__PURE__ */ import_react5.default.createElement("span", {
    id: "plus",
    className: "zoom-sign",
    onClick: zoomOut
  }, /* @__PURE__ */ import_react5.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react5.default.createElement("path", {
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
var import_react6 = __toESM(require("react"));
var SocketContext = (0, import_react6.createContext)(void 0);
function SocketProvider({ socket, children }) {
  return /* @__PURE__ */ import_react6.default.createElement(SocketContext.Provider, {
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
var MainComponent = class extends import_react7.default.Component {
  constructor(props) {
    super(props);
    this.state = __spreadValues({
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
    this.mainCanvas = import_react7.default.createRef();
    this.tempCanvas = import_react7.default.createRef();
    this.selectedElement = null;
    this.id = 0;
    this.mouseXPosition = null;
    this.mouseYPosition = null;
    this.isUserDragging = false;
    this.draggingElement = null;
    this.scrollX = 0;
    this.scrollY = 0;
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
    this.context.emit("mousemove", { x: ev.x, y: ev.y });
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
        ev._x = this.changeToOneScalingFactor(ev.x - this.scrollX);
        ev._y = this.changeToOneScalingFactor(ev.y - this.scrollY);
        let elementSelected = getElementsAtPosition(this.changeToOneScalingFactor(this.mouseXPosition - this.scrollX), this.changeToOneScalingFactor(this.mouseYPosition - this.scrollY), this.state.shapes);
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
        x: this.changeToOneScalingFactor(drawenImage.x - this.scrollX),
        y: this.changeToOneScalingFactor(drawenImage.y - this.scrollY),
        endX: this.changeToOneScalingFactor(drawenImage.endX - this.scrollX),
        endY: this.changeToOneScalingFactor(drawenImage.endY - this.scrollY),
        startX: this.changeToOneScalingFactor(drawenImage.startX - this.scrollX),
        startY: this.changeToOneScalingFactor(drawenImage.startY - this.scrollY),
        radius: this.changeToOneScalingFactor(drawenImage.radius),
        width: drawenImage.width ? this.changeToOneScalingFactor(drawenImage.width) : null,
        height: drawenImage.height ? this.changeToOneScalingFactor(drawenImage.height) : null,
        scalingFactor: this.state.scalingFactor
      });
      let filteredShapes = this.state.shapes.filter((shape) => shape.id !== drawenImage.id);
      this.setState({ shapes: [...filteredShapes, modifiedImage] }, () => {
        this.idb.updateDb(this.state.shapes, "app-state-persist");
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
        this.tempContext.strokeRect(this.changeFromOneScalingFactor(shape.x) + this.scrollX, this.changeFromOneScalingFactor(shape.y) + this.scrollY, this.changeFromOneScalingFactor(shape.width), this.changeFromOneScalingFactor(shape.height));
      } else if (shape.type === "arrow") {
        let headlen = 10;
        let x = this.changeFromOneScalingFactor(shape.x) + this.scrollX;
        let y = this.changeFromOneScalingFactor(shape.y) + this.scrollY;
        let endX = this.changeFromOneScalingFactor(shape.endX) + this.scrollX;
        let endY = this.changeFromOneScalingFactor(shape.endY) + this.scrollY;
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
        this.tempContext.moveTo(this.changeFromOneScalingFactor(shape.x) + this.scrollX, this.changeFromOneScalingFactor(shape.y) + this.scrollY);
        this.tempContext.lineTo(this.changeFromOneScalingFactor(shape.endX) + this.scrollX, this.changeFromOneScalingFactor(shape.endY) + this.scrollY);
        this.tempContext.stroke();
        this.tempContext.closePath();
      } else if (shape.type === "text") {
        let color = this.state.selectedTheme === "dark" ? "#FFFFFF" : "#000000";
        drawText(shape.textContent, this.tempContext, this.changeFromOneScalingFactor(shape.x) + this.scrollX, this.changeFromOneScalingFactor(shape.y) + this.scrollY, this.changeFromOneScalingFactor(shape.width), this.state.baseLineHeight, color, this.state.baseFontSize);
      } else if (shape.type === "circle") {
        let x = this.changeFromOneScalingFactor(shape.x) + this.scrollX;
        let y = this.changeFromOneScalingFactor(shape.y) + this.scrollY;
        this.tempContext.beginPath();
        this.tempContext.arc(x, y, this.changeFromOneScalingFactor(shape.radius), 0, 2 * Math.PI);
        this.tempContext.stroke();
      } else if (shape.type === "diamond") {
        let xCenter = this.changeFromOneScalingFactor(shape.x) + this.scrollX;
        let yCenter = this.changeFromOneScalingFactor(shape.y) + this.scrollY;
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
    ev._x = this.changeToOneScalingFactor(ev.x - this.scrollX);
    ev._y = this.changeToOneScalingFactor(ev.y - this.scrollY);
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
        func(ev, enclosedElement, { scrollX: this.scrollX, scrollY: this.scrollY, scalingFactor: this.state.scalingFactor });
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
    ev._x = this.changeToOneScalingFactor(ev.x - this.scrollX);
    ev._y = this.changeToOneScalingFactor(ev.y - this.scrollY);
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
          let x = this.changeFromOneScalingFactor(this.selectedElement.x) + this.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.y) + this.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(this.selectedElement.width) + 10, this.changeFromOneScalingFactor(this.selectedElement.height) + 10);
        } else if (this.selectedElement.type === "line" || this.selectedElement.type === "arrow") {
          let x = this.changeFromOneScalingFactor(this.selectedElement.startX) + this.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.startY) + this.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(this.selectedElement.width) + 10, this.changeFromOneScalingFactor(this.selectedElement.height) + 10);
        } else if (this.selectedElement.type === "circle") {
          let x = this.changeFromOneScalingFactor(this.selectedElement.x) + this.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.y) + this.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.beginPath();
          this.tempContext.arc(x, y, this.changeFromOneScalingFactor(this.selectedElement.radius) + 10, 0, 2 * Math.PI);
          this.tempContext.stroke();
        } else if (this.selectedElement.type === "diamond") {
          let x = this.changeFromOneScalingFactor(this.selectedElement.startX) + this.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.startY) + this.scrollY;
          this.tempContext.setLineDash([6]);
          this.tempContext.strokeRect(x - 5, y - 5, this.changeFromOneScalingFactor(this.selectedElement.width) + 10, this.changeFromOneScalingFactor(this.selectedElement.height) + 10);
        } else if (this.selectedElement.type === "text") {
          let x = this.changeFromOneScalingFactor(this.selectedElement.x) + this.scrollX;
          let y = this.changeFromOneScalingFactor(this.selectedElement.y) + this.scrollY;
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
    this.scrollX = this.scrollX - e.deltaX;
    this.scrollY = this.scrollY - e.deltaY;
    this.redraw();
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
    return /* @__PURE__ */ import_react7.default.createElement("div", {
      style: { "--font-size": `${this.state.baseFontSize}px`, "--line-height": `${this.state.baseLineHeight}px` },
      className: `${this.state.selectedTheme === "dark" ? "dark-mode" : "light-mode"}`
    }, /* @__PURE__ */ import_react7.default.createElement("div", {
      id: "wrapper"
    }, /* @__PURE__ */ import_react7.default.createElement("div", {
      id: "blackboardPlaceholder"
    }, /* @__PURE__ */ import_react7.default.createElement("canvas", {
      id: "drawingCanvas",
      ref: this.mainCanvas,
      width: this.state.canvasWidth,
      height: this.state.canvasHeight
    }, /* @__PURE__ */ import_react7.default.createElement("p", {
      className: "noscript"
    }, "We're sorry, this web application is currently not supported with your browser. Please use an alternate browser or download a supported ", /* @__PURE__ */ import_react7.default.createElement("br", null), "browser.Supported browsers: ", /* @__PURE__ */ import_react7.default.createElement("a", {
      href: "http://www.google.com/chrome"
    }, "Google Chrome"), ", ", /* @__PURE__ */ import_react7.default.createElement("a", {
      href: "http://www.opera.com"
    }, "Opera"), ", ", /* @__PURE__ */ import_react7.default.createElement("a", {
      href: "http://www.mozilla.com"
    }, "Firefox"), ", ", /* @__PURE__ */ import_react7.default.createElement("a", {
      href: "http://www.apple.com/safari"
    }, "Safari"), ", ", /* @__PURE__ */ import_react7.default.createElement("br", null), "and ", /* @__PURE__ */ import_react7.default.createElement("a", {
      href: "http://www.konqueror.org"
    }, "Konqueror"), ". Also make sure your JavaScript is enabled.")), /* @__PURE__ */ import_react7.default.createElement("canvas", {
      id: "tempCanvas",
      ref: this.tempCanvas,
      width: this.state.canvasWidth,
      height: this.state.canvasHeight
    }))), /* @__PURE__ */ import_react7.default.createElement(SelectTool_default2, {
      selectedTool: this.state.selectedTool,
      updateTool: this.onClickTool
    }), /* @__PURE__ */ import_react7.default.createElement(ConfigTool_default2, {
      toggleTheme: this.updateTheme
    }), /* @__PURE__ */ import_react7.default.createElement(TextTool_default2, null), /* @__PURE__ */ import_react7.default.createElement(ZoomContainer_default2, {
      zoomRange: this.state.scalingFactor,
      zoomOut: this.zoomOut,
      zoomIn: this.zoomIn
    }));
  }
};
MainComponent.contextType = SocketContext;
var main_default2 = MainComponent;

// app/styles/styles.css
var styles_default = "/build/_assets/styles-WBSHHNAM.css";

// server/db.js
init_react();
var import_firestore = require("firebase-admin/firestore");
var dataPoint = (collectionPath) => {
  return (0, import_firestore.getFirestore)().collection(collectionPath);
};
var db = {
  rooms: () => dataPoint("rooms"),
  room: (roomId) => dataPoint(`rooms/${roomId}`),
  shapeCollection: (roomId) => dataPoint(`rooms/${roomId}/shapes`),
  collaborators: (roomId) => dataPoint(`rooms/${roomId}/collaborators`)
};
async function createRoom(name) {
  const newRoomRef = db.rooms().doc();
  await db.collaborators(newRoomRef.id).doc().set({ name, color: "blue", isActive: true });
  await newRoomRef.set({ id: newRoomRef.id });
  return { id: newRoomRef.id };
}
function getShapes(roomId) {
  console.log("rood isdue", roomId);
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
      console.log("Shapes data", data);
      resolve(data);
    }).catch((err) => {
      console.log("Shapes ewrror", err);
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
      console.log("Users data", data);
      resolve(data);
    }).catch((err) => {
      console.log("Users Error", err);
      reject(err);
    });
  });
}
function getInitialDrawData(roomId) {
  return new Promise((resolve, reject) => {
    Promise.all([getShapes(roomId), getUsers(roomId)]).then(([shapes, users]) => {
      console.log(shapes, users);
      resolve({ shapes: shapes && shapes.length > 0 ? shapes : [], users: users && users.length > 0 ? users : [] });
    }).catch((err) => {
      console.log("Inside err", err);
      reject({ message: err });
    });
  });
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/draw/$drawId.jsx
var links = () => [
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  { rel: "stylesheet", href: styles_default }
];
var loader = async ({ request, params }) => {
  console.log(params);
  let drawData = await getInitialDrawData(params.drawId);
  return (0, import_node.json)({ drawData });
};
function DrawIndex() {
  const data = (0, import_react9.useLoaderData)();
  console.log(data);
  const [socket, setSocket] = (0, import_react8.useState)();
  (0, import_react8.useEffect)(() => {
    const socket2 = (0, import_socket.default)();
    setSocket(socket2);
    socket2.emit("event", "conenction success");
    return () => {
      socket2.close();
    };
  }, []);
  (0, import_react8.useEffect)(() => {
    if (!socket)
      return;
    socket.on("confirmation", (data2) => {
      console.log(data2);
    });
    socket.on("mousemove", (data2) => {
      console.log(data2);
    });
  });
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ import_react8.default.createElement(SocketProvider, {
    socket
  }, /* @__PURE__ */ import_react8.default.createElement(main_default2, null)));
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Index
});
init_react();
var import_react10 = __toESM(require("react"));
var import_react11 = require("@remix-run/react");
var import_node2 = require("@remix-run/node");
async function action({ request }) {
  const body = await request.formData();
  let name = body.get("name");
  const draw = await createRoom(name);
  console.log(draw);
  return (0, import_node2.redirect)(`/draw/${draw.id}`);
}
function Index() {
  var _a;
  const transition = (0, import_react11.useTransition)();
  const actionData = (0, import_react11.useActionData)();
  return /* @__PURE__ */ import_react10.default.createElement(import_react11.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react10.default.createElement("fieldset", {
    disabled: transition.state === "submitting"
  }, /* @__PURE__ */ import_react10.default.createElement("p", null, /* @__PURE__ */ import_react10.default.createElement("label", null, "Name:", " ", /* @__PURE__ */ import_react10.default.createElement("input", {
    name: "name",
    type: "text",
    defaultValue: actionData ? actionData.values.name : void 0,
    style: {
      borderColor: (actionData == null ? void 0 : actionData.errors.name) ? "red" : ""
    }
  }))), (actionData == null ? void 0 : actionData.errors.name) ? /* @__PURE__ */ import_react10.default.createElement(ValidationMessage, {
    isSubmitting: transition.state === "submitting",
    error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.name
  }) : null, /* @__PURE__ */ import_react10.default.createElement("p", null, /* @__PURE__ */ import_react10.default.createElement("button", {
    type: "submit"
  }, transition.state === "submitting" ? "Configuring..." : "Enter Room"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "41e4971e", "entry": { "module": "/build/entry.client-B4PE75B2.js", "imports": ["/build/_shared/chunk-XTICPOCH.js", "/build/_shared/chunk-DOH5SWKX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-NC37NLMC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/draw/$drawId": { "id": "routes/draw/$drawId", "parentId": "root", "path": "draw/:drawId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/draw/$drawId-5UQXAHSB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-73NGHLNA.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-41E4971E.js" };

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
  "routes/draw/$drawId": {
    id: "routes/draw/$drawId",
    parentId: "root",
    path: "draw/:drawId",
    index: void 0,
    caseSensitive: void 0,
    module: drawId_exports
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

// server.js
var { createServer } = require("http");
var { Server } = require("socket.io");
var app = (0, import_express.default)();
var httpServer = createServer(app);
var io2 = new Server(httpServer);
auth.server;
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
httpServer.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
module.exports = httpServer;
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAiLi4vc2VydmVyL2ZpcmViYXNlLnNlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLmpzeCIsICJyb3V0ZTovVXNlcnMvaW5kcmFnaXRoL1ByYWN0aWNlL3JlbWl4LWxlYXJuL215LXJlbWl4LWFwcC9hcHAvcm9vdC5qc3giLCAicm91dGU6L1VzZXJzL2luZHJhZ2l0aC9QcmFjdGljZS9yZW1peC1sZWFybi9teS1yZW1peC1hcHAvYXBwL3JvdXRlcy9kcmF3LyRkcmF3SWQuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbmZpZ1Rvb2wvQ29uZmlnVG9vbC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9tYWluLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NlbGVjdFRvb2wvU2VsZWN0VG9vbC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvQXJyb3cuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2hhcGVzL0NoYWxrLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9DaXJjbGUuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvdXRpbHMvZ2V0RWxlbWVudHNBdFBvc2l0aW9uLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9EaWFtb25kLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3V0aWxzL2RyYXdTaGFwZXMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2hhcGVzL0RyYXdUZXh0LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9MaW5lLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9Nb3ZlVG9vbC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvUmVjdGFuZ2xlLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1RleHRUb29sL1RleHRUb29sLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1pvb21Db250YWluZXIvWm9vbUNvbnRhaW5lci5qcyIsICIuLi9hcHAvY29tcG9uZW50cy91dGlscy9pZGIuanMiLCAiLi4vYXBwL2NvbnRleHRzL3NvY2tldENvbnRleHQuanMiLCAiLi4vc2VydmVyL2RiLmpzIiwgInJvdXRlOi9Vc2Vycy9pbmRyYWdpdGgvUHJhY3RpY2UvcmVtaXgtbGVhcm4vbXktcmVtaXgtYXBwL2FwcC9yb3V0ZXMvaW5kZXguanN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcblxuaW1wb3J0IHsgYXV0aCBhcyBGaXJlYmFzZVNlcnZlciB9IGZyb20gJy4vc2VydmVyL2ZpcmViYXNlLnNlcnZlcic7XG5jb25zdCB7IGNyZWF0ZVNlcnZlciB9ID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgeyBTZXJ2ZXIgfSA9IHJlcXVpcmUoJ3NvY2tldC5pbycpO1xuXG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ0ByZW1peC1ydW4vZXhwcmVzcyc7XG5cbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gJ0ByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuY29uc3QgaHR0cFNlcnZlciA9IGNyZWF0ZVNlcnZlcihhcHApO1xuXG5jb25zdCBpbyA9IG5ldyBTZXJ2ZXIoaHR0cFNlcnZlcik7XG5cbkZpcmViYXNlU2VydmVyLnNlcnZlcjtcblxubGV0IGNsaWVudHMgPSBbXTtcblxuXG4vLyBpby5vbignY29ubmVjdGlvbicsIChzb2NrZXQpID0+IHtcbi8vICAgY29uc29sZS5sb2coc29ja2V0LmlkLCAnY29ubmVjdGVkJyk7XG5cblxuLy8gICBzb2NrZXQuZW1pdCgnY29uZmlybWF0aW9uJywgJ2Nvbm5lY3RlZCEnKTtcblxuLy8gICBzb2NrZXQub24oJ2V2ZW50JywgKGRhdGEpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhzb2NrZXQuaWQsIGRhdGEpO1xuLy8gICAgIGNsaWVudHMucHVzaChzb2NrZXQuaWQpO1xuLy8gICAgIHNvY2tldC5lbWl0KCdldmVudCcsICdwb25nJyk7XG4vLyAgIH0pO1xuXG5cbi8vICAgc29ja2V0Lm9uKCdtb3VzZW1vdmUnLCAoZGF0YSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGNsaWVudHMpO1xuLy8gICAgIGNsaWVudHMuZm9yRWFjaCgoY2xpZW50SWQpID0+IHtcbi8vICAgICAgIGlmIChjbGllbnRJZCAhPT0gc29ja2V0LmlkKSB7XG4vLyAgICAgICAgIGlvLnRvKGNsaWVudElkKS5lbWl0KCdtb3VzZW1vdmUnLCBkYXRhKTtcbi8vICAgICAgIH1cbi8vICAgICB9KVxuLy8gICB9KVxuXG4vLyAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIChkYXRhKSA9PiB7XG4vLyAgICAgLy9jbGllbnRzID0gY2xpZW50cy5maWx0ZXIoY2xpZW50SWQgPT4gY2xpZW50SWQgIT09IHNvY2tldC5pZCk7XG4vLyAgICAgY29uc29sZS5sb2coc29ja2V0LmlkLCBcImRpY29ubmVjdGVkXCIpO1xuLy8gICB9KVxuLy8gfSk7XG5cblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICAnL2J1aWxkJyxcbiAgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYy9idWlsZCcsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6ICcxeScgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYy9idWlsZCcsIHsgbWF4QWdlOiAnMWgnIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oJ3RpbnknKSk7XG5cbmFwcC5hbGwoXG4gICcqJyxcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5odHRwU2VydmVyLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGh0dHBTZXJ2ZXI7XG4iLCAiaW1wb3J0IHtcbiAgZ2V0QXBwcyBhcyBnZXRTZXJ2ZXJBcHBzLFxuICBpbml0aWFsaXplQXBwIGFzIGluaXRpYWxpemVTZXJ2ZXJBcHAsXG4gIGNlcnQgYXMgc2VydmVyQ2VydCxcbn0gZnJvbSAnZmlyZWJhc2UtYWRtaW4vYXBwJztcbmltcG9ydCB7XG4gIGdldEFwcHMgYXMgZ2V0Q2xpZW50QXBwcyxcbiAgaW5pdGlhbGl6ZUFwcCBhcyBpbml0aWFsaXplQ2xpZW50QXBwLFxufSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgZ2V0QXV0aCBhcyBnZXRTZXJ2ZXJBdXRoIH0gZnJvbSAnZmlyZWJhc2UtYWRtaW4vYXV0aCc7XG5pbXBvcnQgeyBnZXRBdXRoIGFzIGdldENsaWVudEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmlmIChnZXRDbGllbnRBcHBzKCkubGVuZ3RoID09PSAwKSB7XG4gIGxldCBjb25maWc7XG4gIGlmICghcHJvY2Vzcy5lbnYuQ0xJRU5UX0NPTkZJRykge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBDTElFTlRfQ09ORklHIGVudmlyb25tZW50IHZhcmlhYmxlLCAnKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgY29uZmlnID0gSlNPTi5wYXJzZShwcm9jZXNzLmVudi5DTElFTlRfQ09ORklHKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIENMSUVOVF9DT05GSUcgZW52aXJvbm1lbnQgdmFyaWFibGUnKTtcbiAgICB9XG4gIH1cbiAgaW5pdGlhbGl6ZUNsaWVudEFwcChjb25maWcpO1xufVxuXG5pZiAoZ2V0U2VydmVyQXBwcygpLmxlbmd0aCA9PT0gMCkge1xuICBsZXQgY29uZmlnO1xuICBpZiAoIXByb2Nlc3MuZW52LlNFUlZJQ0VfQUNDT1VOVCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBTRVJWSUNFX0FDQ09VTlQgZW52aXJvbm1lbnQgdmFyaWFibGUnKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VydmljZUFjY291bnQgPSBKU09OLnBhcnNlKHByb2Nlc3MuZW52LlNFUlZJQ0VfQUNDT1VOVCk7XG4gICAgICBjb25maWcgPSB7XG4gICAgICAgIGNyZWRlbnRpYWw6IHNlcnZlckNlcnQoc2VydmljZUFjY291bnQpLFxuICAgICAgfTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIFNFUlZJQ0VfQUNDT1VOVCBlbnZpcm9ubWVudCB2YXJpYWJsZScpO1xuICAgIH1cbiAgfVxuICBpbml0aWFsaXplU2VydmVyQXBwKGNvbmZpZyk7XG59XG5cbmV4cG9ydCBjb25zdCBhdXRoID0ge1xuICBzZXJ2ZXI6IGdldFNlcnZlckF1dGgoKSxcbiAgY2xpZW50OiBnZXRDbGllbnRBdXRoKCksXG59OyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvaW5kcmFnaXRoL1ByYWN0aWNlL3JlbWl4LWxlYXJuL215LXJlbWl4LWFwcC9hcHAvZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvaW5kcmFnaXRoL1ByYWN0aWNlL3JlbWl4LWxlYXJuL215LXJlbWl4LWFwcC9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2luZHJhZ2l0aC9QcmFjdGljZS9yZW1peC1sZWFybi9teS1yZW1peC1hcHAvYXBwL3JvdXRlcy9kcmF3LyRkcmF3SWQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9pbmRyYWdpdGgvUHJhY3RpY2UvcmVtaXgtbGVhcm4vbXktcmVtaXgtYXBwL2FwcC9yb3V0ZXMvaW5kZXguanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9kcmF3LyRkcmF3SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RyYXcvJGRyYXdJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkcmF3LzpkcmF3SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGUsXG4gIHJlc3BvbnNlSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVEYXRhUmVxdWVzdCA9IChcbiAgcmVzcG9uc2UsXG4gIC8vIHNhbWUgYXJncyB0aGF0IGdldCBwYXNzZWQgdG8gdGhlIGFjdGlvbiBvciBsb2FkZXIgdGhhdCB3YXMgY2FsbGVkXG4gIHsgcmVxdWVzdCwgcGFyYW1zLCBjb250ZXh0IH1cbikgPT4ge1xuICBjb25zb2xlLmxvZygnSW5pdGFrbCcsIHJlcXVlc3QpO1xuICByZXR1cm4geyBtZXNzYWdlOiAnc3VjY2VzcycgfTtcbn07XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ3JlbWl4JztcblxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdOZXcgUmVtaXggQXBwJyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz0nZW4nPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgICAgPHRpdGxlPldoaXRlYm9hcmQgQXBwbGljYXRpb248L3RpdGxlPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5pbXBvcnQgeyBDb25maWdUb29sTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvQ29uZmlnVG9vbC9Db25maWdUb29sJztcbmltcG9ydCBNYWluQ29tcG9uZW50LCB7IE1haW5Db21wb25lbnRTdHlsZXMgfSBmcm9tICd+L2NvbXBvbmVudHMvbWFpbic7XG5pbXBvcnQgeyBTZWxlY3RUb29sTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvU2VsZWN0VG9vbC9TZWxlY3RUb29sJztcbmltcG9ydCB7IFRleHRUb29sTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvVGV4dFRvb2wvVGV4dFRvb2wnO1xuaW1wb3J0IHsgWm9vbUNvbnRhaW5lckxpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL1pvb21Db250YWluZXIvWm9vbUNvbnRhaW5lcic7XG5pbXBvcnQgeyBoYW5kbGVEYXRhUmVxdWVzdCB9IGZyb20gJ34vZW50cnkuc2VydmVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgU29ja2V0UHJvdmlkZXIgfSBmcm9tICd+L2NvbnRleHRzL3NvY2tldENvbnRleHQnO1xuaW1wb3J0IHsgZ2V0SW5pdGlhbERyYXdEYXRhIH0gZnJvbSAnLi4vLi4vLi4vc2VydmVyL2RiJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW1xuICAuLi5NYWluQ29tcG9uZW50U3R5bGVzKCksXG4gIC4uLlNlbGVjdFRvb2xMaW5rcygpLFxuICAuLi5Db25maWdUb29sTGlua3MoKSxcbiAgLi4uVGV4dFRvb2xMaW5rcygpLFxuICAuLi5ab29tQ29udGFpbmVyTGlua3MoKSxcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgbGV0IGRyYXdEYXRhID0gYXdhaXQgZ2V0SW5pdGlhbERyYXdEYXRhKHBhcmFtcy5kcmF3SWQpO1xuICByZXR1cm4ganNvbih7IGRyYXdEYXRhIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhd0luZGV4KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzb2NrZXQgPSBpbygpO1xuICAgIHNldFNvY2tldChzb2NrZXQpO1xuICAgIHNvY2tldC5lbWl0KCdldmVudCcsICdjb25lbmN0aW9uIHN1Y2Nlc3MnKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzb2NrZXQpIHJldHVybjtcbiAgICBzb2NrZXQub24oJ2NvbmZpcm1hdGlvbicsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcbiAgICBzb2NrZXQub24oJ21vdXNlbW92ZScsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJywgbGluZUhlaWdodDogJzEuNCcgfX0+XG4gICAgICA8U29ja2V0UHJvdmlkZXIgc29ja2V0PXtzb2NrZXR9PlxuICAgICAgICA8TWFpbkNvbXBvbmVudCAvPlxuICAgICAgPC9Tb2NrZXRQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbmZpZ1Rvb2wuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIENvbmZpZ1Rvb2xMaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV1cbn1cblxuXG5mdW5jdGlvbiBDb25maWdUb29sKHsgdG9nZ2xlVGhlbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZmlnVG9vbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCIgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb25maWdMYWJlbFwiPkRhcmsgTW9kZTwvc3Bhbj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfSAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiIGlkPVwidG9nZ2xlRGFya01vZGVcIj48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdUb29sOyIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21haW4uY3NzJztcbmltcG9ydCBDb25maWdUb29sIGZyb20gJy4vQ29uZmlnVG9vbC9Db25maWdUb29sJztcbmltcG9ydCBTZWxlY3RUb29sIGZyb20gJy4vU2VsZWN0VG9vbC9TZWxlY3RUb29sJztcbmltcG9ydCBBcnJvdyBmcm9tICcuL1NoYXBlcy9BcnJvdyc7XG5pbXBvcnQgQ2hhbGsgZnJvbSAnLi9TaGFwZXMvQ2hhbGsnO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL1NoYXBlcy9DaXJjbGUnO1xuaW1wb3J0IERpYW1vbmQgZnJvbSAnLi9TaGFwZXMvRGlhbW9uZCc7XG5pbXBvcnQgRHJhd1RleHQgZnJvbSAnLi9TaGFwZXMvRHJhd1RleHQnO1xuaW1wb3J0IExpbmUgZnJvbSAnLi9TaGFwZXMvTGluZSc7XG5pbXBvcnQgTW92ZVRvb2wgZnJvbSAnLi9TaGFwZXMvTW92ZVRvb2wnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi9TaGFwZXMvUmVjdGFuZ2xlJztcbmltcG9ydCBUZXh0VG9vbCBmcm9tICcuL1RleHRUb29sL1RleHRUb29sJztcbmltcG9ydCB7IGRyYXdEaWFtb25kLCBkcmF3VGV4dCB9IGZyb20gJy4vdXRpbHMvZHJhd1NoYXBlcyc7XG5pbXBvcnQgeyBnZXRFbGVtZW50c0F0UG9zaXRpb24gfSBmcm9tICcuL3V0aWxzL2dldEVsZW1lbnRzQXRQb3NpdGlvbic7XG5pbXBvcnQgWm9vbUNvbnRhaW5lciBmcm9tICcuL1pvb21Db250YWluZXIvWm9vbUNvbnRhaW5lcic7XG5pbXBvcnQgSWRiIGZyb20gJy4vdXRpbHMvaWRiJztcbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICd+L2NvbnRleHRzL3NvY2tldENvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gTWFpbkNvbXBvbmVudFN0eWxlcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cblxubGV0IHRvb2xzID0ge1xuICBtb3ZlOiAnJyxcbiAgY2hhbGs6IENoYWxrLFxuICBsaW5lOiBMaW5lLFxuICByZWN0OiBSZWN0LFxuICBhcnJvdzogQXJyb3csXG4gIHRleHQ6IERyYXdUZXh0LFxuICBjaXJjbGU6IENpcmNsZSxcbiAgZGlhbW9uZDogRGlhbW9uZCxcbiAgc2VsZWN0OiAnc2VsZWN0J1xufTtcblxubGV0IGJhc2VDb25maWcgPSB7XG4gIHNjYWxpbmdGYWN0b3I6IDEsXG4gIGJhc2VGb250U2l6ZTogMjQsXG4gIGJhc2VMaW5lSGVpZ2h0OiAoMTUwICogMjQpIC8gMTAwXG59XG5cblxuXG5jbGFzcyBNYWluQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNhbnZhc1dpZHRoOiAwLFxuICAgICAgY2FudmFzSGVpZ2h0OiAwLFxuICAgICAgc2VsZWN0ZWRUaGVtZTogJ2xpZ2h0JyxcbiAgICAgIHNlbGVjdGVkVG9vbDogJ2NoYWxrJyxcbiAgICAgIHNoYXBlczogW10sXG4gICAgICAuLi5iYXNlQ29uZmlnXG4gICAgfTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzID0gdGhpcy5hZGRFdmVudExpc3RlbmVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVG9vbCA9IHRoaXMudXBkYXRlVG9vbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1Rvb2wgPSB0aGlzLm9uQ2xpY2tUb29sLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkV2ZW50ID0gdGhpcy5vbkV2ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IgPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VUb1RleHRUb29sID0gdGhpcy5jaGFuZ2VUb1RleHRUb29sLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMgPSB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uV2hlZWxNb3ZlID0gdGhpcy5vbldoZWVsTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW1nVXBkYXRlID0gdGhpcy5pbWdVcGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdJbWFnZSA9IHRoaXMuZHJhd0ltYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVUaGVtZSA9IHRoaXMudXBkYXRlVGhlbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuem9vbUluID0gdGhpcy56b29tSW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnpvb21PdXQgPSB0aGlzLnpvb21PdXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaWRiID0gbmV3IElkYigpO1xuXG4gICAgdGhpcy5tYWluQ2FudmFzID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBzZXF1ZXVuY2UgaWQgXG4gICAgdGhpcy5pZCA9IDA7XG5cbiAgICAvLyBUbyBjaGVjayB3aGV0aGVyIHRoZSB1c2VyIGlzIGRyYWdnaW5nLlxuICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMuaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnaW5nRWxlbWVudCA9IG51bGw7XG5cblxuXG4gICAgLy8gVG8gZW11bGF0ZSBzY3JvbGwgYmVoYXZpb3VyXG4gICAgdGhpcy5zY3JvbGxYID0gMDtcbiAgICB0aGlzLnNjcm9sbFkgPSAwO1xuXG4gIH1cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgdGhpcy5pZGIuZ2V0RGF0YUZyb21JZGIoJ2FwcC1zdGF0ZS1wZXJzaXN0JykudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPj0gMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVzOiBkYXRhIH0sICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlkID0gZGF0YS5sZW5ndGggKyAxO1xuICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgY2FudmFzV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBjYW52YXNIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KVxuICAgIHRoaXMubWFpbkNvbnRleHQgPSB0aGlzLm1haW5DYW52YXMuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnOy8vIERlZmF1bHQgbGluZSBjb2xvci4gXG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lV2lkdGggPSAxLjA7Ly8gRGVmYXVsdCBzdHJva2Ugd2VpZ2h0LiBcblxuICAgIC8vIEZpbGwgdHJhbnNwYXJlbnQgY2FudmFzIHdpdGggZGFyayBncmV5IChTbyB3ZSBjYW4gdXNlIHRoZSBjb2xvciB0byBlcmFzZSkuIFxuICAgIHRoaXMudGVtcENvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiM0MjQyNDJcIiA6ICcjRkZGRkZGJztcbiAgICB0aGlzLnRlbXBDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpOy8vVG9wLCBMZWZ0LCBXaWR0aCwgSGVpZ2h0IG9mIGNhbnZhc1xuXG4gICAgdGhpcy50b29scyA9IHRvb2xzO1xuXG4gICAgbGV0IHNlbGVjdGVkT25lID0gdGhpcy50b29sc1t0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbF07XG5cbiAgICB0aGlzLnRvb2wgPSBuZXcgc2VsZWN0ZWRPbmUodGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuaW1nVXBkYXRlLCB0aGlzLmlkKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzLmNoYW5nZVRvVGV4dFRvb2wsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWxNb3ZlLCBmYWxzZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzLmNoYW5nZVRvVGV4dFRvb2wsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWxNb3ZlLCBmYWxzZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpO1xuICB9XG5cblxuICB6b29tSW4oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2NhbGluZ0ZhY3RvciA8PSAwLjEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldnN0YXRlKSA9PiB7XG4gICAgICBsZXQgYmFzZUZvbnRTaXplID0gcHJldnN0YXRlLmJhc2VGb250U2l6ZSAtIDM7XG4gICAgICBsZXQgYmFzZUxpbmVIZWlnaHQgPSAoMTUwICogYmFzZUZvbnRTaXplKSAvIDEwMDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZzdGF0ZSxcbiAgICAgICAgc2NhbGluZ0ZhY3RvcjogcHJldnN0YXRlLnNjYWxpbmdGYWN0b3IgLSAwLjEsXG4gICAgICAgIGJhc2VGb250U2l6ZSxcbiAgICAgICAgYmFzZUxpbmVIZWlnaHRcbiAgICAgIH1cbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmlkYi51cGRhdGVEYih0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3IsICdzY2FsaW5nRmFjdG9yJyk7XG4gICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH0pO1xuICB9XG5cbiAgem9vbU91dChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yID49IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldnN0YXRlKSA9PiB7XG4gICAgICBsZXQgYmFzZUZvbnRTaXplID0gcHJldnN0YXRlLmJhc2VGb250U2l6ZSArIDM7XG4gICAgICBsZXQgYmFzZUxpbmVIZWlnaHQgPSAoMTUwICogYmFzZUZvbnRTaXplKSAvIDEwMFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldnN0YXRlLFxuICAgICAgICBzY2FsaW5nRmFjdG9yOiBwcmV2c3RhdGUuc2NhbGluZ0ZhY3RvciArIDAuMSxcbiAgICAgICAgYmFzZUZvbnRTaXplLFxuICAgICAgICBiYXNlTGluZUhlaWdodFxuICAgICAgfVxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIHVwZGF0ZVRvb2wodmFsdWUsIGlkID0gbnVsbCkge1xuICAgIGlmICh0aGlzLnRvb2xzW3ZhbHVlXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVG9vbDogdmFsdWUgfSwgKCkgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0ZWRPbmUgPSB0aGlzLnRvb2xzW3RoaXMuc3RhdGUuc2VsZWN0ZWRUb29sXTtcbiAgICAgICAgaWYgKCFzZWxlY3RlZE9uZSB8fCBzZWxlY3RlZE9uZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIHN0b3JpbmcgdGhlIHNoYXBlcy4gd2UgYXJlIGdlbmVyYXRpbmcgaWRzLlxuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgKyAxO1xuICAgICAgICAgIHRoaXMudG9vbCA9IG5ldyBzZWxlY3RlZE9uZSh0aGlzLnRlbXBDYW52YXMuY3VycmVudCwgdGhpcy50ZW1wQ29udGV4dCwgdGhpcy5pbWdVcGRhdGUsIHRoaXMuaWQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b29sID0gbmV3IHNlbGVjdGVkT25lKHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCB0aGlzLnRlbXBDb250ZXh0LCB0aGlzLmltZ1VwZGF0ZSwgaWQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjYW52YXNXaWR0aDogd2luZG93LmlubmVyV2lkdGgsIGNhbnZhc0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH0sICgpID0+IHtcbiAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfSlcbiAgfVxuXG4gIG9uRXZlbnQoZXYpIHtcbiAgICBldi5feCA9IGV2Lng7XG4gICAgZXYuX3kgPSBldi55O1xuICAgIHRoaXMuY29udGV4dC5lbWl0KCdtb3VzZW1vdmUnLCB7IHg6IGV2LngsIHk6IGV2LnkgfSlcbiAgICAvLyBsZXQgaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIGlmIChldi50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgICB0aGlzLm1vdXNlWFBvc2l0aW9uID0gZXYuX3g7XG4gICAgICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBldi5feTtcbiAgICAgIH0gZWxzZSBpZiAoZXYudHlwZSA9PT0gJ21vdXNlbW92ZScpIHtcbiAgICAgICAgaWYgKHRoaXMubW91c2VZUG9zaXRpb24gJiYgdGhpcy5tb3VzZVhQb3NpdGlvbikge1xuICAgICAgICAgIGxldCBkaWZmWCA9IE1hdGguYWJzKHRoaXMubW91c2VYUG9zaXRpb24gLSBldi5feCk7XG4gICAgICAgICAgbGV0IGRpZmZZID0gTWF0aC5hYnModGhpcy5tb3VzZVlQb3NpdGlvbiAtIGV2Ll95KTtcbiAgICAgICAgICBpZiAoZGlmZlggPiAyMCB8fCBkaWZmWSA+IDIwKSB7XG4gICAgICAgICAgICB0aGlzLmlzVXNlckRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb3VzZVhQb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBudWxsO1xuICAgICAgfVxuXG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1VzZXJEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5tb3VzZVhQb3NpdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLm1vdXNlWVBvc2l0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSB0b29sJ3MgZXZlbnQgaGFuZGxlci4gXG5cbiAgICBpZiAodGhpcy5pc1VzZXJEcmFnZ2luZykge1xuICAgICAgLy8gSGFuZGxpbm5nIHRoZSBjYXNlIGZvciBtb3ZlXG4gICAgICAvL3RoaXMuc2VsZWN0ZWRUb29sID0gJ21vdmUnO1xuICAgICAgLy8gc2luY2Ugd2UgYXJlIG1vdmluZyBhY3Jvc3MgdGhlIGNhbnZhcy4gd2UgbmVlZCB0byB0YWtlIGludG8gdGhlIGFjY291bnQgb2Ygc2Nyb2xseCBhbmQgc2Nyb2xseSB2YWx1ZXNcblxuICAgICAgLy8vQ0hBTkdFID8/P1xuICAgICAgLy8gZXYuX3ggPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi54IC0gdGhpcy5zY3JvbGxYKTtcbiAgICAgIC8vIGV2Ll95ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueSAtIHRoaXMuc2Nyb2xsWSk7XG4gICAgICAvLy9DSEFOR0UgPz8/IE1vdmVkIGluc2lkZSBjb25kaXRpb25cbiAgICAgIGlmICghdGhpcy5kcmFnZ2luZ0VsZW1lbnQpIHtcbiAgICAgICAgZXYuX3ggPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi54IC0gdGhpcy5zY3JvbGxYKTtcbiAgICAgICAgZXYuX3kgPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi55IC0gdGhpcy5zY3JvbGxZKTtcbiAgICAgICAgLy8gRmlyc3QgY2FzZSBvZiBtb3ZlIHRvb2wgLT4gVXNlciBqdXN0IHNlbGVjdGVkIHRoZSBlbGVtZW50LmV2ZW50cyBzaG91bGQgYmUgbW91c2Vkb3duXG4gICAgICAgIGxldCBlbGVtZW50U2VsZWN0ZWQgPSBnZXRFbGVtZW50c0F0UG9zaXRpb24odGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IodGhpcy5tb3VzZVhQb3NpdGlvbiAtIHRoaXMuc2Nyb2xsWCksIHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKHRoaXMubW91c2VZUG9zaXRpb24gLSB0aGlzLnNjcm9sbFkpLCB0aGlzLnN0YXRlLnNoYXBlcyk7XG4gICAgICAgIGlmIChlbGVtZW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IGVsZW1lbnRTZWxlY3RlZDtcbiAgICAgICAgICBsZXQgc2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHNoYXBlLmlkICE9PSBlbGVtZW50U2VsZWN0ZWQuaWQpO1xuICAgICAgICAgIC8vcmVkcmF3aWcgd2l0aG91dCBlbGVtZW50IHNlbGVjdGVkXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlczogc2hhcGVzLCBzZWxlY3RlZFRvb2w6ICdtb3ZlJyB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkYi51cGRhdGVEYih0aGlzLnN0YXRlLnNoYXBlcywgJ2FwcC1zdGF0ZS1wZXJzaXN0Jyk7XG4gICAgICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ0VsZW1lbnQgPSBlbGVtZW50U2VsZWN0ZWQ7XG4gICAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vbW9kaWZ5aWcgdGhlIHNlbGVjdGVkRWxlbWVudFxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgLi4udGhpcy5zZWxlY3RlZEVsZW1lbnQsXG4gICAgICAgICAgICAgIHg6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueCksXG4gICAgICAgICAgICAgIHk6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueSksXG4gICAgICAgICAgICAgIGVuZFg6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuZW5kWCksXG4gICAgICAgICAgICAgIGVuZFk6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuZW5kWSksXG4gICAgICAgICAgICAgIHN0YXJ0WDogdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5zdGFydFgpLFxuICAgICAgICAgICAgICBzdGFydFk6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRZKSxcbiAgICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnJhZGl1cyksXG4gICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNlbGVjdGVkRWxlbWVudC53aWR0aCA/IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGgpIDogbnVsbCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNlbGVjdGVkRWxlbWVudC5oZWlnaHQgPyB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmhlaWdodCkgOiBudWxsLFxuICAgICAgICAgICAgICBzY2FsaW5nRmFjdG9yOiB0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudG9vbCA9IG5ldyBNb3ZlVG9vbCh0aGlzLnRlbXBDYW52YXMuY3VycmVudCwgdGhpcy50ZW1wQ29udGV4dCwgdGhpcy5pbWdVcGRhdGUsIHNlbGVjdGVkRWxlbWVudCwgdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lKTtcbiAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgcHJlc2VudC4gd2UgbmVlZCB0byBjYWxsIG1vdmV0b29sXG4gICAgICAgICAgICB0aGlzLnRvb2xbJ21vdXNlZG93biddKGV2KTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gPz8gXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW91c2VYUG9zaXRpb24gIT09IG51bGwgJiYgdGhpcy5tb3VzZVlQb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAvLyBldmVudHMgYXJlIG1vdXNlbW92ZSBvciBtb3VzZXVwLiBOZWVkIHRvIGNoZWNrIHdoZXRoZXIgdGhpcyBjb25kaXRpb24gaXMgcmVxdWlyZWRcbiAgICAgICAgaWYgKGV2LnR5cGUgPT09ICdtb3VzZW1vdmUnIHx8IGV2LnR5cGUgPT09ICdtb3VzZXVwJykge1xuICAgICAgICAgIC8vIG1vdmV0b29sIGluc3RhY2Ugc2hvdWxkIGFscmVhZHkgYnkgcHJlc2VudFxuICAgICAgICAgIGlmICh0aGlzLnRvb2wpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbFtldi50eXBlXShldik7XG4gICAgICAgICAgICBpZiAoZXYudHlwZSA9PT0gJ21vdXNldXAnKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5tb3VzZVhQb3NpdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvb2wpIHtcbiAgICAgIGxldCBmdW5jID0gdGhpcy50b29sW2V2LnR5cGVdO1xuICAgICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgZnVuYyhldik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja1Rvb2woZSkge1xuICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5pZCk7XG4gICAgdGhpcy51cGRhdGVUb29sKGUuY3VycmVudFRhcmdldC5pZCk7XG4gIH1cblxuICBjaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoY29vcmRzKSB7XG4gICAgcmV0dXJuIGNvb3JkcyAvIHRoaXMuc3RhdGUuc2NhbGluZ0ZhY3RvcjtcbiAgfVxuXG4gIGNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKGNvb3Jkcykge1xuICAgIHJldHVybiBjb29yZHMgKiB0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3I7XG4gIH1cblxuXG4gIGRyYXdJbWFnZSgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNoYXBlcywgdGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wpO1xuICAgIHRoaXMucmVzZXREcmFnZ2luZ1ZhbHVlcygpO1xuXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXG4gICAgICAvLyBpZiB0aGUgYWN0aW9uIGlzIGRlbGV0ZSBvciBtb3ZlLiB3ZWUgbm5lZWQgdG8gY2FsbCByZXNldERyYWdnaW5nVmFsdWVzXG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ21vdmUnIHx8IHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAndGV4dCcpIHtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVG9vbDogJ3NlbGVjdCcgfSk7XG4gICAgICAgIHRoaXMudG9vbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1haW5Db250ZXh0LmRyYXdJbWFnZSh0aGlzLnRlbXBDYW52YXMuY3VycmVudCwgMCwgMCk7XG4gICAgICAgIC8vL3RoaXMudGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTtcbiAgICAgICAgLy90aGlzLnJlbmRlclBhcnRpY3VsYXJTaGFwZShtb2RpZmllZEltYWdlKTtcblxuICAgICAgICAvLyBDaGFuZ2luZyB0byBzZWxlY3QgdG9vbCBvbmNlIHdlIGhhdmUgZHJhd24gYSBzaGFwZSBleGNlcHQgdG8gdHlwaW5nIHRleHRcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sICE9PSAndGV4dCcpIHtcblxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFRvb2w6ICdzZWxlY3QnIH0pO1xuICAgICAgICAgIHRoaXMudG9vbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHRoaXMucmVkcmF3KCk7XG5cbiAgICB9KVxuICB9XG5cblxuICBpbWdVcGRhdGUoZHJhd2VuSW1hZ2UpIHtcbiAgICBpZiAoZHJhd2VuSW1hZ2UgJiYgZHJhd2VuSW1hZ2UudHlwZSkge1xuICAgICAgLyoqIFRPRE86IENoYW5nZSB0aGlzIGxvZ2ljIHRvIG9iamVjdCBrZXkgdmFsdWUgc3RydWN0dXJlICovXG5cbiAgICAgIGxldCBtb2RpZmllZEltYWdlID0ge1xuICAgICAgICAuLi5kcmF3ZW5JbWFnZSxcbiAgICAgICAgeDogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2UueCAtIHRoaXMuc2Nyb2xsWCksXG4gICAgICAgIHk6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLnkgLSB0aGlzLnNjcm9sbFkpLFxuICAgICAgICBlbmRYOiB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS5lbmRYIC0gdGhpcy5zY3JvbGxYKSxcbiAgICAgICAgZW5kWTogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2UuZW5kWSAtIHRoaXMuc2Nyb2xsWSksXG4gICAgICAgIHN0YXJ0WDogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2Uuc3RhcnRYIC0gdGhpcy5zY3JvbGxYKSxcbiAgICAgICAgc3RhcnRZOiB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS5zdGFydFkgLSB0aGlzLnNjcm9sbFkpLFxuICAgICAgICByYWRpdXM6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLnJhZGl1cyksXG4gICAgICAgIHdpZHRoOiBkcmF3ZW5JbWFnZS53aWR0aCA/IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLndpZHRoKSA6IG51bGwsXG4gICAgICAgIGhlaWdodDogZHJhd2VuSW1hZ2UuaGVpZ2h0ID8gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2UuaGVpZ2h0KSA6IG51bGwsXG4gICAgICAgIHNjYWxpbmdGYWN0b3I6IHRoaXMuc3RhdGUuc2NhbGluZ0ZhY3RvclxuICAgICAgfVxuICAgICAgbGV0IGZpbHRlcmVkU2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHNoYXBlLmlkICE9PSBkcmF3ZW5JbWFnZS5pZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVzOiBbLi4uZmlsdGVyZWRTaGFwZXMsIG1vZGlmaWVkSW1hZ2VdIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5pZGIudXBkYXRlRGIodGhpcy5zdGF0ZS5zaGFwZXMsICdhcHAtc3RhdGUtcGVyc2lzdCcpO1xuICAgICAgICB0aGlzLmRyYXdJbWFnZSgpO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoKTtcbiAgICB9XG5cblxuICB9XG5cbiAgcmVkcmF3KCkge1xuICAgIGNvbnNvbGUubG9nKCdyZWRyYXcnKVxuICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpO1xuICAgIHRoaXMudGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnOztcbiAgICB0aGlzLnRlbXBDb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjNDI0MjQyXCIgOiAnIzAwMDAwMCc7O1xuXG4gICAgdGhpcy5zdGF0ZS5zaGFwZXMuZm9yRWFjaChzaGFwZSA9PiB7XG4gICAgICBpZiAoc2hhcGUudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFgsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueSkgKyB0aGlzLnNjcm9sbFksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUud2lkdGgpLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLmhlaWdodCkpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICAgIGxldCBoZWFkbGVuID0gMTA7XG4gICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICBsZXQgZW5kWCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUuZW5kWCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgIGxldCBlbmRZID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS5lbmRZKSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgbGV0IGR4ID0gZW5kWCAtIHg7XG4gICAgICAgIGxldCBkeSA9IGVuZFkgLSB5O1xuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHgsIHkpXG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFgsIGVuZFkpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLCBlbmRZIC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZW5kWCwgZW5kWSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksIGVuZFkgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNikpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnbGluZScpIHtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8odGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS54KSArIHRoaXMuc2Nyb2xsWCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUuZW5kWCkgKyB0aGlzLnNjcm9sbFgsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUuZW5kWSkgKyB0aGlzLnNjcm9sbFkpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiNGRkZGRkZcIiA6ICcjMDAwMDAwJztcbiAgICAgICAgZHJhd1RleHQoc2hhcGUudGV4dENvbnRlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFgsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueSkgKyB0aGlzLnNjcm9sbFksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUud2lkdGgpLCB0aGlzLnN0YXRlLmJhc2VMaW5lSGVpZ2h0LCBjb2xvciwgdGhpcy5zdGF0ZS5iYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5hcmMoeCwgeSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS5yYWRpdXMpLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgICBsZXQgeENlbnRlciA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgIGxldCB5Q2VudGVyID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnggLSBzaGFwZS5lbmRYKTtcbiAgICAgICAgZHJhd0RpYW1vbmQoeENlbnRlciwgeUNlbnRlciwgc2l6ZSwgdGhpcy50ZW1wQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIGNsZWFyIHRoZSBwcmVzZW50IGNhbnZhc1xuICAgIHRoaXMubWFpbkNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMubWFpbkNhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLm1haW5DYW52YXMuY3VycmVudC5oZWlnaHQpO1xuICAgIHRoaXMubWFpbkNvbnRleHQuZHJhd0ltYWdlKHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCAwLCAwKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTtcbiAgfVxuXG4gIGNoYW5nZVRvVGV4dFRvb2woZXYpIHtcbiAgICBldi5feCA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnggLSB0aGlzLnNjcm9sbFgpO1xuICAgIGV2Ll95ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueSAtIHRoaXMuc2Nyb2xsWSk7XG5cbiAgICBsZXQgZW5jbG9zZWRFbGVtZW50ID0gZ2V0RWxlbWVudHNBdFBvc2l0aW9uKGV2Ll94LCBldi5feSwgdGhpcy5zdGF0ZS5zaGFwZXMpO1xuXG4gICAgLy8gVGVtcG9yYXJpbHkgdXBkYXRpbmcgdG9vbCBtYW51YWxseVxuICAgIC8vdGhpcy51cGRhdGVUb29sKCd0ZXh0JywgZW5jbG9zZWRFbGVtZW50ICYmIGVuY2xvc2VkRWxlbWVudC50eXBlID09PSAndGV4dCcgPyBlbmNsb3NlZEVsZW1lbnQuaWQgOiBudWxsKTtcbiAgICB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFRvb2w6ICd0ZXh0JyB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMoKTtcblxuICAgICAgbGV0IHRleHRJZCA9IG51bGw7XG4gICAgICBpZiAoZW5jbG9zZWRFbGVtZW50ICYmIGVuY2xvc2VkRWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgdGV4dElkID0gZW5jbG9zZWRFbGVtZW50LmlkO1xuICAgICAgICBsZXQgc2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHNoYXBlLmlkICE9PSB0aGlzLnNlbGVjdGVkRWxlbWVudC5pZCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFwZXMgfSwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgKyAxO1xuICAgICAgICB0ZXh0SWQgPSB0aGlzLmlkO1xuICAgICAgfVxuICAgICAgdGhpcy50b29sID0gbmV3IERyYXdUZXh0KHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCB0aGlzLnRlbXBDb250ZXh0LCB0aGlzLmltZ1VwZGF0ZSwgdGV4dElkLCB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUpO1xuICAgICAgLy8gaWYgKGVuY2xvc2VkRWxlbWVudCAmJiBlbmNsb3NlZEVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAvLyAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gc2hhcGUuaWQgIT09IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmlkKTtcbiAgICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlcyB9LCAoKSA9PiB7XG4gICAgICAvLyAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9XG5cbiAgICAgIGxldCBmdW5jID0gdGhpcy50b29sW2V2LnR5cGVdO1xuICAgICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gZnVuYyB3aWxsIGJlIGRiY2xpY2sgaW4gZHJhd3RleHRcbiAgICAgICAgZnVuYyhldiwgZW5jbG9zZWRFbGVtZW50LCB7IHNjcm9sbFg6IHRoaXMuc2Nyb2xsWCwgc2Nyb2xsWTogdGhpcy5zY3JvbGxZLCBzY2FsaW5nRmFjdG9yOiB0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3IgfSk7XG4gICAgICB9XG4gICAgfSlcblxuXG5cbiAgfVxuXG4gIG9uS2V5RG93bihldikge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3RleHQnKSB7XG4gICAgICAvLyBFYXJseSBSZXR1cm4gYXMgd2UgZG9udCBuZWVkIHRvIGxpc3RlbiB3aGlsZSB0ZXh0YXJlYSBpcyBzaG93blxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKGV2LmtleUNvZGUgPj0gNDggJiYgZXYua2V5Q29kZSA8PSA1NykgfHwgKGV2LmtleUNvZGUgPj0gNjUgJiYgZXYua2V5Q29kZSA8PSA5MCkpIHtcbiAgICAgIC8vIDQ4IC0gNTcgbnVtYmVyIDAgLSA5IGFuZCA2NSAtIDkwIEFscGhhYmV0eXNcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzcGVjaWFsIGtleXMgXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgICAgLy8gQmFja3NwYWNlIG9yIGRlbGV0ZSBrZXlcbiAgICAgICAgaWYgKGV2LndoaWNoID09PSA0NiB8fCBldi53aGljaCA9PT0gOCkge1xuICAgICAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gc2hhcGUuaWQgIT09IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmlkKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVzIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Eb2N1bWVudENsaWNrKGV2KSB7XG4gICAgZXYuX3ggPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi54IC0gdGhpcy5zY3JvbGxYKTtcbiAgICBldi5feSA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnkgLSB0aGlzLnNjcm9sbFkpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAndGV4dCcpIHtcbiAgICAgIC8vUmV2ZXJ0dGluZyB0eWhpdXMgaXMgcmVxdWlyZWQuXG5cblxuICAgICAgdGhpcy50b29sWydvbkJsdXInXSgpO1xuICAgICAgLy8gdGhpcy5zZWxlY3RlZFRvb2wgPSAnc2VsZWN0JztcbiAgICAgIC8vIHRoaXMudG9vbCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQud2lkdGgsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LmhlaWdodCk7XG4gICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gZ2V0RWxlbWVudHNBdFBvc2l0aW9uKGV2Ll94LCBldi5feSwgdGhpcy5zdGF0ZS5zaGFwZXMpO1xuICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3RlZEVsZW1lbnQ7XG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEVsZW1lbnQpO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbNl0pO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh4IC0gNSwgeSAtIDUsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGgpICsgMTAsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuaGVpZ2h0KSArIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAnbGluZScgfHwgdGhpcy5zZWxlY3RlZEVsZW1lbnQudHlwZSA9PT0gJ2Fycm93Jykge1xuICAgICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5zdGFydFgpICsgdGhpcy5zY3JvbGxYO1xuICAgICAgICAgIGxldCB5ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5zdGFydFkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzZdKTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QoeCAtIDUsIHkgLSA1LCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LndpZHRoKSArIDEwLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmhlaWdodCkgKyAxMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEVsZW1lbnQudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgICAgbGV0IHkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzZdKTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuYXJjKHgsIHksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQucmFkaXVzKSArIDEwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRYKSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRZKSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFs2XSk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHggLSA1LCB5IC0gNSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC53aWR0aCkgKyAxMCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5oZWlnaHQpICsgMTApO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbNl0pO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh4IC0gNSwgeSAtIDUsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGgpLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmhlaWdodCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25XaGVlbE1vdmUoZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3RleHQnKSB7XG4gICAgICAvLyBEcmF3aW5nIHRleHQgb24gY2FudmFzIGJlZm9yZSBzY3JvbGwgbW92ZVxuICAgICAgdGhpcy50b29sWydvbkJsdXInXSgpO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbFggPSB0aGlzLnNjcm9sbFggLSBlLmRlbHRhWDtcbiAgICB0aGlzLnNjcm9sbFkgPSB0aGlzLnNjcm9sbFkgLSBlLmRlbHRhWTtcbiAgICB0aGlzLnJlZHJhdygpO1xuICB9XG5cbiAgcmVzZXREcmFnZ2luZ1ZhbHVlcygpIHtcbiAgICB0aGlzLmlzVXNlckRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2luZ0VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBudWxsO1xuICB9XG5cblxuICB1cGRhdGVUaGVtZShlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgKHByZXZzdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnByZXZzdGF0ZSxcbiAgICAgICAgICBzZWxlY3RlZFRoZW1lOiBwcmV2c3RhdGUuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJ1xuICAgICAgICB9XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnOy8vIERlZmF1bHQgbGluZSBjb2xvci4gXG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVdpZHRoID0gMS4wOy8vIERlZmF1bHQgc3Ryb2tlIHdlaWdodC4gXG5cbiAgICAgICAgLy8gRmlsbCB0cmFuc3BhcmVudCBjYW52YXMgd2l0aCBkYXJrIGdyZXkgKFNvIHdlIGNhbiB1c2UgdGhlIGNvbG9yIHRvIGVyYXNlKS4gXG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiM0MjQyNDJcIiA6ICcjRkZGRkZGJztcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTsvL1RvcCwgTGVmdCwgV2lkdGgsIEhlaWdodCBvZiBjYW52YXNcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgJy0tZm9udC1zaXplJzogYCR7dGhpcy5zdGF0ZS5iYXNlRm9udFNpemV9cHhgLCAnLS1saW5lLWhlaWdodCc6IGAke3RoaXMuc3RhdGUuYmFzZUxpbmVIZWlnaHR9cHhgIH19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyAnZGFyay1tb2RlJyA6ICdsaWdodC1tb2RlJ31gfT5cbiAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiA+XG4gICAgICAgICAgPGRpdiBpZD1cImJsYWNrYm9hcmRQbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cImRyYXdpbmdDYW52YXNcIiByZWY9e3RoaXMubWFpbkNhbnZhc30gd2lkdGg9e3RoaXMuc3RhdGUuY2FudmFzV2lkdGh9IGhlaWdodD17dGhpcy5zdGF0ZS5jYW52YXNIZWlnaHR9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJub3NjcmlwdFwiPldlJ3JlIHNvcnJ5LCB0aGlzIHdlYiBhcHBsaWNhdGlvbiBpcyBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCB3aXRoIHlvdXIgYnJvd3Nlci4gUGxlYXNlIHVzZVxuICAgICAgICAgICAgICAgIGFuIGFsdGVybmF0ZSBicm93c2VyIG9yIGRvd25sb2FkIGEgc3VwcG9ydGVkIDxiciAvPmJyb3dzZXIuU3VwcG9ydGVkIGJyb3dzZXJzOiA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWVcIj5Hb29nbGUgQ2hyb21lPC9hPiwgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlcmEuY29tXCI+T3BlcmE8L2E+LCA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5tb3ppbGxhLmNvbVwiPkZpcmVmb3g8L2E+LCA8YSBocmVmPVwiaHR0cDovL3d3dy5hcHBsZS5jb20vc2FmYXJpXCI+U2FmYXJpPC9hPiwgPGJyIC8+YW5kIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29ucXVlcm9yLm9yZ1wiPktvbnF1ZXJvcjwvYT4uIEFsc28gbWFrZSBzdXJlIHlvdXIgSmF2YVNjcmlwdCBpcyBlbmFibGVkLjwvcD5cbiAgICAgICAgICAgIDwvY2FudmFzPlxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cInRlbXBDYW52YXNcIiByZWY9e3RoaXMudGVtcENhbnZhc30gd2lkdGg9e3RoaXMuc3RhdGUuY2FudmFzV2lkdGh9IGhlaWdodD17dGhpcy5zdGF0ZS5jYW52YXNIZWlnaHR9PjwvY2FudmFzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2VsZWN0VG9vbCBzZWxlY3RlZFRvb2w9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUb29sfSB1cGRhdGVUb29sPXt0aGlzLm9uQ2xpY2tUb29sfSAvPlxuICAgICAgICA8Q29uZmlnVG9vbCB0b2dnbGVUaGVtZT17dGhpcy51cGRhdGVUaGVtZX0gLz5cbiAgICAgICAgPFRleHRUb29sIC8+XG4gICAgICAgIDxab29tQ29udGFpbmVyIHpvb21SYW5nZT17dGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yfSB6b29tT3V0PXt0aGlzLnpvb21PdXR9IHpvb21Jbj17dGhpcy56b29tSW59IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuTWFpbkNvbXBvbmVudC5jb250ZXh0VHlwZSA9IFNvY2tldENvbnRleHQ7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db21wb25lbnQ7IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VsZWN0VG9vbC5jc3MnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RUb29sTGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5cbmZ1bmN0aW9uIFNlbGVjdFRvb2woeyBzZWxlY3RlZFRvb2wsIHVwZGF0ZVRvb2wgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0VG9vbFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAnc2VsZWN0JyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cInNlbGVjdFwiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Y29sb3JcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgZD1cIk0xMS45NDc2IDAuMjI4ODIzQzEyLjI1MjcgLTAuMDc2Mjc0MyAxMi43NDczIC0wLjA3NjI3NDMgMTMuMDUyNCAwLjIyODgyM0wxNi4xNzc0IDMuMzUzODJDMTYuNDgyNSAzLjY1ODkyIDE2LjQ4MjUgNC4xNTM1OCAxNi4xNzc0IDQuNDU4NjhDMTUuODcyMyA0Ljc2Mzc3IDE1LjM3NzcgNC43NjM3NyAxNS4wNzI2IDQuNDU4NjhMMTMuMjgxMiAyLjY2NzM1VjguNTkzNzVDMTMuMjgxMiA5LjAyNTIyIDEyLjkzMTUgOS4zNzUgMTIuNSA5LjM3NUMxMi4wNjg1IDkuMzc1IDExLjcxODggOS4wMjUyMiAxMS43MTg4IDguNTkzNzVWMi42NjczNUw5LjkyNzQzIDQuNDU4NjhDOS42MjIzMyA0Ljc2Mzc3IDkuMTI3NjcgNC43NjM3NyA4LjgyMjU3IDQuNDU4NjhDOC41MTc0OCA0LjE1MzU4IDguNTE3NDggMy42NTg5MiA4LjgyMjU3IDMuMzUzODJMMTEuOTQ3NiAwLjIyODgyM1pNMTIuNSAxNS42MjVDMTIuOTMxNSAxNS42MjUgMTMuMjgxMiAxNS45NzQ4IDEzLjI4MTIgMTYuNDA2MlYyMi4zMzI2TDE1LjA3MjYgMjAuNTQxM0MxNS4zNzc3IDIwLjIzNjIgMTUuODcyMyAyMC4yMzYyIDE2LjE3NzQgMjAuNTQxM0MxNi40ODI1IDIwLjg0NjQgMTYuNDgyNSAyMS4zNDExIDE2LjE3NzQgMjEuNjQ2MkwxMy4wNTI0IDI0Ljc3MTJDMTIuNzQ3MyAyNS4wNzYzIDEyLjI1MjcgMjUuMDc2MyAxMS45NDc2IDI0Ljc3MTJMOC44MjI1NyAyMS42NDYyQzguNTE3NDggMjEuMzQxMSA4LjUxNzQ4IDIwLjg0NjQgOC44MjI1NyAyMC41NDEzQzkuMTI3NjcgMjAuMjM2MiA5LjYyMjMzIDIwLjIzNjIgOS45Mjc0MyAyMC41NDEzTDExLjcxODcgMjIuMzMyNlYxNi40MDYyQzExLjcxODcgMTUuOTc0OCAxMi4wNjg1IDE1LjYyNSAxMi41IDE1LjYyNVpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRjb2xvclwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTAuMjI4ODIzIDEzLjA1MjRDLTAuMDc2Mjc0MyAxMi43NDczIC0wLjA3NjI3NDMgMTIuMjUyNyAwLjIyODgyMyAxMS45NDc2TDMuMzUzODIgOC44MjI1N0MzLjY1ODkyIDguNTE3NDggNC4xNTM1OCA4LjUxNzQ4IDQuNDU4NjggOC44MjI1N0M0Ljc2Mzc3IDkuMTI3NjcgNC43NjM3NyA5LjYyMjMzIDQuNDU4NjggOS45Mjc0M0wyLjY2NzM1IDExLjcxODhMOC41OTM3NSAxMS43MTg4QzkuMDI1MjIgMTEuNzE4OCA5LjM3NSAxMi4wNjg1IDkuMzc1IDEyLjVDOS4zNzUgMTIuOTMxNSA5LjAyNTIyIDEzLjI4MTMgOC41OTM3NSAxMy4yODEzTDIuNjY3MzUgMTMuMjgxMkw0LjQ1ODY4IDE1LjA3MjZDNC43NjM3NyAxNS4zNzc3IDQuNzYzNzcgMTUuODcyMyA0LjQ1ODY4IDE2LjE3NzRDNC4xNTM1OCAxNi40ODI1IDMuNjU4OTIgMTYuNDgyNSAzLjM1MzgyIDE2LjE3NzRMMC4yMjg4MjMgMTMuMDUyNFpNMTUuNjI1IDEyLjVDMTUuNjI1IDEyLjA2ODUgMTUuOTc0OCAxMS43MTg4IDE2LjQwNjIgMTEuNzE4OEgyMi4zMzI2TDIwLjU0MTMgOS45Mjc0M0MyMC4yMzYyIDkuNjIyMzMgMjAuMjM2MiA5LjEyNzY3IDIwLjU0MTMgOC44MjI1N0MyMC44NDY0IDguNTE3NDggMjEuMzQxMSA4LjUxNzQ4IDIxLjY0NjIgOC44MjI1N0wyNC43NzEyIDExLjk0NzZDMjUuMDc2MyAxMi4yNTI3IDI1LjA3NjMgMTIuNzQ3MyAyNC43NzEyIDEzLjA1MjRMMjEuNjQ2MiAxNi4xNzc0QzIxLjM0MTEgMTYuNDgyNSAyMC44NDY0IDE2LjQ4MjUgMjAuNTQxMyAxNi4xNzc0QzIwLjIzNjIgMTUuODcyMyAyMC4yMzYyIDE1LjM3NzcgMjAuNTQxMyAxNS4wNzI2TDIyLjMzMjYgMTMuMjgxM0gxNi40MDYyQzE1Ljk3NDggMTMuMjgxMyAxNS42MjUgMTIuOTMxNSAxNS42MjUgMTIuNVpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdyZWN0JyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cInJlY3RcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cblxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCJcbiAgICAgICAgICAgIGQ9XCJNMjEuODc1IDEuNTYyNUMyMi43Mzc5IDEuNTYyNSAyMy40Mzc1IDIuMjYyMDYgMjMuNDM3NSAzLjEyNVYyMS44NzVDMjMuNDM3NSAyMi43Mzc5IDIyLjczNzkgMjMuNDM3NSAyMS44NzUgMjMuNDM3NUgzLjEyNUMyLjI2MjA2IDIzLjQzNzUgMS41NjI1IDIyLjczNzkgMS41NjI1IDIxLjg3NVYzLjEyNUMxLjU2MjUgMi4yNjIwNiAyLjI2MjA2IDEuNTYyNSAzLjEyNSAxLjU2MjVIMjEuODc1Wk0zLjEyNSAwQzEuMzk5MTEgMCAwIDEuMzk5MTEgMCAzLjEyNVYyMS44NzVDMCAyMy42MDA5IDEuMzk5MTEgMjUgMy4xMjUgMjVIMjEuODc1QzIzLjYwMDkgMjUgMjUgMjMuNjAwOSAyNSAyMS44NzVWMy4xMjVDMjUgMS4zOTkxMSAyMy42MDA5IDAgMjEuODc1IDBIMy4xMjVaXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAnY2lyY2xlJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cImNpcmNsZVwiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCJcbiAgICAgICAgICAgIGQ9XCJNMTIuNSAyMy40Mzc1QzYuNDU5MzkgMjMuNDM3NSAxLjU2MjUgMTguNTQwNiAxLjU2MjUgMTIuNUMxLjU2MjUgNi40NTkzOSA2LjQ1OTM5IDEuNTYyNSAxMi41IDEuNTYyNUMxOC41NDA2IDEuNTYyNSAyMy40Mzc1IDYuNDU5MzkgMjMuNDM3NSAxMi41QzIzLjQzNzUgMTguNTQwNiAxOC41NDA2IDIzLjQzNzUgMTIuNSAyMy40Mzc1Wk0xMi41IDI1QzE5LjQwMzYgMjUgMjUgMTkuNDAzNiAyNSAxMi41QzI1IDUuNTk2NDQgMTkuNDAzNiAwIDEyLjUgMEM1LjU5NjQ0IDAgMCA1LjU5NjQ0IDAgMTIuNUMwIDE5LjQwMzYgNS41OTY0NCAyNSAxMi41IDI1WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2wtaWNvbiAke3NlbGVjdGVkVG9vbCA9PT0gJ2Fycm93JyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cImFycm93XCIgb25DbGljaz17dXBkYXRlVG9vbH0+XG5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRjb2xvclwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTEuNTYyNSAxMi41QzEuNTYyNSAxMi4wNjg1IDEuOTEyMjggMTEuNzE4NyAyLjM0Mzc1IDExLjcxODdIMjAuNzcwMUwxNS44NTM4IDYuODAyNDNDMTUuNTQ4NyA2LjQ5NzMzIDE1LjU0ODcgNi4wMDI2NyAxNS44NTM4IDUuNjk3NTdDMTYuMTU4OSA1LjM5MjQ3IDE2LjY1MzYgNS4zOTI0NyAxNi45NTg3IDUuNjk3NTdMMjMuMjA4NyAxMS45NDc2QzIzLjUxMzggMTIuMjUyNyAyMy41MTM4IDEyLjc0NzMgMjMuMjA4NyAxMy4wNTI0TDE2Ljk1ODcgMTkuMzAyNEMxNi42NTM2IDE5LjYwNzUgMTYuMTU4OSAxOS42MDc1IDE1Ljg1MzggMTkuMzAyNEMxNS41NDg3IDE4Ljk5NzMgMTUuNTQ4NyAxOC41MDI3IDE1Ljg1MzggMTguMTk3NkwyMC43NzAxIDEzLjI4MTJIMi4zNDM3NUMxLjkxMjI4IDEzLjI4MTIgMS41NjI1IDEyLjkzMTUgMS41NjI1IDEyLjVaXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAnbGluZScgPyAnc2VsZWN0ZWQnIDogJyd9YH0gaWQ9XCJsaW5lXCIgb25DbGljaz17dXBkYXRlVG9vbH0+XG4gICAgICAgIDxzdmcgaGVpZ2h0PVwiMjVcIiB3aWR0aD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiPlxuICAgICAgICAgIDxsaW5lIHgxPVwiMFwiIHkxPVwiMTBcIiB4Mj1cIjI1XCIgeTI9XCIyNVwiIHN0cm9rZT1cInZhcigtLWljb24tY29sb3IpXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdkaWFtb25kJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cImRpYW1vbmRcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cblxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCJcbiAgICAgICAgICAgIGQ9XCJNMTAuODYwMyAwLjY3OTE4NUMxMS43NjU5IC0wLjIyNjM5NiAxMy4yMzQxIC0wLjIyNjM5NCAxNC4xMzk3IDAuNjc5MTg2TDI0LjMyMDggMTAuODYwM0MyNS4yMjY0IDExLjc2NTkgMjUuMjI2NCAxMy4yMzQxIDI0LjMyMDggMTQuMTM5N0wxNC4xMzk3IDI0LjMyMDhDMTMuMjM0MSAyNS4yMjY0IDExLjc2NTkgMjUuMjI2NCAxMC44NjAzIDI0LjMyMDhMMC42NzkxODUgMTQuMTM5N0MtMC4yMjYzOTYgMTMuMjM0MSAtMC4yMjYzOTQgMTEuNzY1OSAwLjY3OTE4NiAxMC44NjAzTDEwLjg2MDMgMC42NzkxODVaTTEzLjA0NjYgMS43NzIzMkMxMi43NDQ3IDEuNDcwNDYgMTIuMjU1MyAxLjQ3MDQ2IDExLjk1MzQgMS43NzIzMkwxLjc3MjMyIDExLjk1MzRDMS40NzA0NiAxMi4yNTUzIDEuNDcwNDYgMTIuNzQ0NyAxLjc3MjMyIDEzLjA0NjZMMTEuOTUzNCAyMy4yMjc3QzEyLjI1NTMgMjMuNTI5NSAxMi43NDQ3IDIzLjUyOTUgMTMuMDQ2NiAyMy4yMjc3TDIzLjIyNzcgMTMuMDQ2NkMyMy41Mjk1IDEyLjc0NDcgMjMuNTI5NSAxMi4yNTUzIDIzLjIyNzcgMTEuOTUzNEwxMy4wNDY2IDEuNzcyMzJaXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAnY2hhbGsnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwiY2hhbGtcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cblxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8ZyBjbGlwUGF0aD1cInVybCgjY2xpcDBfMTI4N18zNDk4KVwiPlxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRjb2xvclwiXG4gICAgICAgICAgICAgIGQ9XCJNMTguOTc4OCAwLjIyODgyM0MxOS4yODM5IC0wLjA3NjI3NDMgMTkuNzc4NiAtMC4wNzYyNzQzIDIwLjA4MzcgMC4yMjg4MjNMMjQuNzcxMiA0LjkxNjMyQzI1LjA3NjMgNS4yMjE0MiAyNS4wNzYzIDUuNzE2MDggMjQuNzcxMiA2LjAyMTE4TDkuMTQ2MiAyMS42NDYyQzkuMDcxMzkgMjEuNzIxIDguOTgyMTYgMjEuNzc5OCA4Ljg4MzkyIDIxLjgxOTFMMS4wNzE0MiAyNC45NDQxQzAuNzgxMjUyIDI1LjA2MDIgMC40NDk4MzIgMjQuOTkyMiAwLjIyODg0NiAyNC43NzEyQzAuMDA3ODU5MiAyNC41NTAyIC0wLjA2MDE2NzQgMjQuMjE4OCAwLjA1NTkwMDQgMjMuOTI4NkwzLjE4MDkgMTYuMTE2MUMzLjIyMDE5IDE2LjAxNzkgMy4yNzkwMyAxNS45Mjg2IDMuMzUzODUgMTUuODUzOEwxOC45Nzg4IDAuMjI4ODIzWk0xNy41MTExIDMuOTA2MjVMMjEuMDkzOCA3LjQ4ODlMMjMuMTEzOSA1LjQ2ODc1TDE5LjUzMTMgMS44ODYxTDE3LjUxMTEgMy45MDYyNVpNMTkuOTg4OSA4LjU5Mzc1TDE2LjQwNjMgNS4wMTExTDYuMjUwMDIgMTUuMTY3NFYxNS42MjVINy4wMzEyN0M3LjQ2Mjc1IDE1LjYyNSA3LjgxMjUyIDE1Ljk3NDggNy44MTI1MiAxNi40MDYyVjE3LjE4NzVIOC41OTM3N0M5LjAyNTI1IDE3LjE4NzUgOS4zNzUwMiAxNy41MzczIDkuMzc1MDIgMTcuOTY4OFYxOC43NUg5LjgzMjY3TDE5Ljk4ODkgOC41OTM3NVpNNC43MzY5OCAxNi42ODA0TDQuNTcyMDkgMTYuODQ1M0wyLjE4MzY2IDIyLjgxNjRMOC4xNTQ3MyAyMC40Mjc5TDguMzE5NjIgMjAuMjYzQzguMDIzMzggMjAuMTUyIDcuODEyNTIgMTkuODY2MyA3LjgxMjUyIDE5LjUzMTJWMTguNzVINy4wMzEyN0M2LjU5OTggMTguNzUgNi4yNTAwMiAxOC40MDAyIDYuMjUwMDIgMTcuOTY4OFYxNy4xODc1SDUuNDY4NzdDNS4xMzM3NyAxNy4xODc1IDQuODQ4MDEgMTYuOTc2NiA0LjczNjk4IDE2LjY4MDRaXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcDBfMTI4N18zNDk4XCI+XG4gICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFRvb2w7IiwgImNsYXNzIEFycm93IHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzBdKTtcbiAgfVxuXG4gIG1vdXNlVXAoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlKGUpO1xuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6ICdhcnJvdycsXG4gICAgICAgIHg6IHRoaXMuc3RhcnRYLFxuICAgICAgICB5OiB0aGlzLnN0YXJ0WSxcbiAgICAgICAgc3RhcnRYOiBNYXRoLm1pbih0aGlzLnN0YXJ0WCwgZS5feCksIC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgc3RhcnRZOiBNYXRoLm1pbih0aGlzLnN0YXJ0WSwgZS5feSksLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICB3aWR0aDogTWF0aC5hYnModGhpcy5zdGFydFggLSBlLl94KSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmFicyh0aGlzLnN0YXJ0WSAtIGUuX3kpLFxuICAgICAgICBlbmRYOiBlLl94LFxuICAgICAgICBlbmRZOiBlLl95XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMuc3RhcnRYID0gZS5feDtcbiAgICB0aGlzLnN0YXJ0WSA9IGUuX3k7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAvKiogKi9cbiAgICBsZXQgY29zcGl4ID0gMC44NjYwMjU0MDQ7XG4gICAgbGV0IGhlYWRsZW4gPSAxMDtcbiAgICBsZXQgZHggPSBlLl94IC0gdGhpcy5zdGFydFg7XG4gICAgbGV0IGR5ID0gZS5feSAtIHRoaXMuc3RhcnRZO1xuICAgIGxldCBsZW5ndGggPSBNYXRoLnNxcnQoZHkgKiBkeSArIGR4ICogZHgpOyAvL2xlbmd0aCBvZiBhcnJvd1xuICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZS5feCwgZS5feSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZS5feCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgZS5feSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZS5feCwgZS5feSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZS5feCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgZS5feSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycm93OyIsICJjbGFzcyBDaGFsayB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaykge1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlLl94LCBlLl95KTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKGUpIHtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKGUuX3gsIGUuX3kpO1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZShlKTtcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFsazsiLCAiaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tIFwiLi4vdXRpbHMvZ2V0RWxlbWVudHNBdFBvc2l0aW9uLmpzXCI7XG5cbmNsYXNzIENpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbMF0pO1xuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUoZSk7XG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCByYWRpdXMgPSBnZXREaXN0YW5jZSh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIGUuX3gsIGUuX3kpO1xuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgeDogdGhpcy5zdGFydFgsXG4gICAgICAgIHk6IHRoaXMuc3RhcnRZLFxuICAgICAgICB3aWR0aDogcmFkaXVzICogcmFkaXVzLFxuICAgICAgICBoZWlnaHQ6IHJhZGl1cyAqIHJhZGl1cyxcbiAgICAgICAgZW5kWDogZS5feCxcbiAgICAgICAgZW5kWTogZS5feSxcbiAgICAgICAgcmFkaXVzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSBlLl94O1xuICAgIHRoaXMuc3RhcnRZID0gZS5feTtcbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIGxldCByYWRpdXMgPSBnZXREaXN0YW5jZSh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIGUuX3gsIGUuX3kpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYXJjKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7IiwgImZ1bmN0aW9uIGdldEVsZW1lbnRzQXRQb3NpdGlvbih4LCB5LCBzaGFwZXMpIHtcbiAgbGV0IHJldHVybkVsZW1lbnQgPSBudWxsO1xuICBsZXQgZGlmZlggPSBudWxsO1xuICBsZXQgZGlmZlkgPSBudWxsO1xuICBpZiAoc2hhcGVzLmxlbmd0aCA+IDApIHtcbiAgICBzaGFwZXMuZm9yRWFjaChzaGFwZSA9PiB7XG4gICAgICBpZiAoc2hhcGUudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gc2hhcGUud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSBzaGFwZS5oZWlnaHQ7XG4gICAgICAgIGxldCBlbmRYID0gc2hhcGUueCArIHdpZHRoO1xuICAgICAgICBsZXQgZW5kWSA9IHNoYXBlLnkgKyBoZWlnaHQ7XG4gICAgICAgIGlmIChzaGFwZS54IDw9IHggJiYgeCA8PSBlbmRYKSB7XG4gICAgICAgICAgaWYgKHNoYXBlLnkgPD0geSAmJiB5IDw9IGVuZFkpIHtcbiAgICAgICAgICAgIGlmICghZGlmZlggfHwgIWRpZmZZKSB7XG4gICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgZGlmZlggPSBNYXRoLm1pbih4IC0gc2hhcGUueCwgZW5kWCAtIHgpO1xuICAgICAgICAgICAgICBkaWZmWSA9IE1hdGgubWluKHkgLSBzaGFwZS55LCBlbmRZIC0geSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZYID0gTWF0aC5taW4oeCAtIHNoYXBlLngsIGVuZFggLSB4KTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWSA9IE1hdGgubWluKHkgLSBzaGFwZS55LCBlbmRZIC0geSk7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50RGlmZlggPCBkaWZmWCB8fCBjdXJyZW50RGlmZlkgPCBkaWZmWSkge1xuICAgICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgICBkaWZmWCA9IGN1cnJlbnREaWZmWDtcbiAgICAgICAgICAgICAgICBkaWZmWSA9IGN1cnJlbnREaWZmWTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdsaW5lJyB8fCBzaGFwZS50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICAgIGxldCBzdGFydGluZ1hCdWZmZXIgPSBzaGFwZS54IC0gMTA7XG4gICAgICAgIGxldCBlbmRpbmdYQnVmZmVyID0gc2hhcGUuZW5kWCArIDEwO1xuICAgICAgICBsZXQgc3RhcnRpbmdZQnVmZmVyID0gc2hhcGUueSAtIDEwO1xuICAgICAgICBsZXQgZW5kaW5nWUJ1ZmZlciA9IHNoYXBlLmVuZFkgKyAxMDtcblxuICAgICAgICBsZXQgbWF4WCA9IE1hdGgubWF4KHN0YXJ0aW5nWEJ1ZmZlciwgZW5kaW5nWEJ1ZmZlcik7XG4gICAgICAgIGxldCBtYXhZID0gTWF0aC5tYXgoc3RhcnRpbmdZQnVmZmVyLCBlbmRpbmdZQnVmZmVyKTtcblxuICAgICAgICBsZXQgbWluWCA9IE1hdGgubWluKHN0YXJ0aW5nWEJ1ZmZlciwgZW5kaW5nWEJ1ZmZlcik7XG4gICAgICAgIGxldCBtaW5ZID0gTWF0aC5taW4oc3RhcnRpbmdZQnVmZmVyLCBlbmRpbmdZQnVmZmVyKTtcblxuICAgICAgICBpZiAobWluWCA8PSB4ICYmIHggPD0gbWF4WCkge1xuICAgICAgICAgIGlmIChtaW5ZIDw9IHkgJiYgeSA8PSBtYXhZKSB7XG4gICAgICAgICAgICBpZiAoIWRpZmZYIHx8ICFkaWZmWSkge1xuICAgICAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgICAgICAgIGRpZmZYID0gTWF0aC5taW4oeCAtIG1pblgsIG1heFggLSB4KTtcbiAgICAgICAgICAgICAgZGlmZlkgPSBNYXRoLm1pbih5IC0gbWluWSwgbWF4WSAtIHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWCA9IE1hdGgubWluKHggLSBtaW5YLCBtYXhYIC0geCk7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50RGlmZlkgPSBNYXRoLm1pbih5IC0gbWluWSwgbWF4WSAtIHkpO1xuICAgICAgICAgICAgICBpZiAoY3VycmVudERpZmZYIDwgZGlmZlggfHwgY3VycmVudERpZmZZIDwgZGlmZlkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgICAgICAgICAgZGlmZlggPSBjdXJyZW50RGlmZlg7XG4gICAgICAgICAgICAgICAgZGlmZlkgPSBjdXJyZW50RGlmZlk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIC8vXG4gICAgICAgIGlmIChzaGFwZS54IDw9IHggJiYgeCA8PSBzaGFwZS5lbmRYKSB7XG4gICAgICAgICAgaWYgKHNoYXBlLnkgPD0geSAmJiB5IDw9IHNoYXBlLmVuZFkpIHtcbiAgICAgICAgICAgIGlmICghZGlmZlggfHwgIWRpZmZZKSB7XG4gICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgZGlmZlggPSBNYXRoLm1pbih4IC0gc2hhcGUueCwgc2hhcGUuZW5kWCAtIHgpO1xuICAgICAgICAgICAgICBkaWZmWSA9IE1hdGgubWluKHkgLSBzaGFwZS55LCBzaGFwZS5lbmRZIC0geSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZYID0gTWF0aC5taW4oeCAtIHNoYXBlLngsIHNoYXBlLmVuZFggLSB4KTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWSA9IE1hdGgubWluKHkgLSBzaGFwZS55LCBzaGFwZS5lbmRZIC0geSk7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50RGlmZlggPCBkaWZmWCB8fCBjdXJyZW50RGlmZlkgPCBkaWZmWSkge1xuICAgICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgICBkaWZmWCA9IGN1cnJlbnREaWZmWDtcbiAgICAgICAgICAgICAgICBkaWZmWSA9IGN1cnJlbnREaWZmWTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgICBsZXQgZGlzdGFuY2VzcXVhcmVkID0gKHggLSBzaGFwZS54KSAqICh4IC0gc2hhcGUueCkgKyAoeSAtIHNoYXBlLnkpICogKHkgLSBzaGFwZS55KTtcbiAgICAgICAgaWYgKGRpc3RhbmNlc3F1YXJlZCA8PSBzaGFwZS5yYWRpdXMgKiBzaGFwZS5yYWRpdXMpIHtcbiAgICAgICAgICAvLyA/Pz8gaG93IHRvIGNhbGN1bGF0ZSBkaWZmLiBidWdneSBiZWhhdmlvdXJcbiAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgICAgLy8gbGV0IHN0YXJ0WCA9IHNoYXBlLnggLSAoc2hhcGUud2lkdGggLyAyKTtcbiAgICAgICAgLy8gbGV0IHN0YXJ0WSA9IHNoYXBlLnk7XG4gICAgICAgIGxldCB3aWR0aCA9IHNoYXBlLndpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gc2hhcGUuaGVpZ2h0O1xuICAgICAgICBsZXQgZW5kWCA9IHNoYXBlLnN0YXJ0WCArIHdpZHRoO1xuICAgICAgICBsZXQgZW5kWSA9IHNoYXBlLnN0YXJ0WSArIGhlaWdodDtcbiAgICAgICAgaWYgKHNoYXBlLnN0YXJ0WCA8PSB4ICYmIHggPD0gZW5kWCkge1xuICAgICAgICAgIGlmIChzaGFwZS5zdGFydFkgPD0geSAmJiB5IDw9IGVuZFkpIHtcbiAgICAgICAgICAgIGlmICghZGlmZlggfHwgIWRpZmZZKSB7XG4gICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgZGlmZlggPSBNYXRoLm1pbih4IC0gc2hhcGUuc3RhcnRYLCBlbmRYIC0geCk7XG4gICAgICAgICAgICAgIGRpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnN0YXJ0WSwgZW5kWSAtIHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWCA9IE1hdGgubWluKHggLSBzaGFwZS5zdGFydFgsIGVuZFggLSB4KTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWSA9IE1hdGgubWluKHkgLSBzaGFwZS5zdGFydFksIGVuZFkgLSB5KTtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnREaWZmWCA8IGRpZmZYIHx8IGN1cnJlbnREaWZmWSA8IGRpZmZZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICAgIGRpZmZYID0gY3VycmVudERpZmZYO1xuICAgICAgICAgICAgICAgIGRpZmZZID0gY3VycmVudERpZmZZO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KVxuICB9XG4gIHJldHVybiByZXR1cm5FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMVgsIHAxWSwgcDJYLCBwMlkpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMVggLSBwMlgsIDIpICsgTWF0aC5wb3cocDFZIC0gcDJZLCAyKSlcbn1cblxuXG5leHBvcnQgeyBnZXRFbGVtZW50c0F0UG9zaXRpb24sIGdldERpc3RhbmNlIH07IiwgImltcG9ydCB7IGRyYXdEaWFtb25kIH0gZnJvbSBcIi4uL3V0aWxzL2RyYXdTaGFwZXMuanNcIjtcblxuY2xhc3MgRGlhbW9uZCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbMF0pO1xuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUoZSk7XG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCB3aWR0aCA9IChNYXRoLmFicyh0aGlzLnN0YXJ0WCAtIGUuX3gpKSAqIDI7XG4gICAgICAvLyB3aWR0aCBhbmQgaGVpZ2h0IHdpbGwgYmUgc2FtZSBmb3IgdGhlIGRpYW1vbmQgXG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6ICdkaWFtb25kJyxcbiAgICAgICAgeDogdGhpcy5zdGFydFgsXG4gICAgICAgIHk6IGUuX3ksXG4gICAgICAgIHN0YXJ0WDogdGhpcy5zdGFydFggLSAod2lkdGggLyAyKSxcbiAgICAgICAgc3RhcnRZOiBlLl95IC0gKHdpZHRoIC8gMiksXG4gICAgICAgIC8vIHhDZW50ZXI6IHRoaXMuc3RhcnRYLFxuICAgICAgICAvLyB5Q2VudGVyOiBlLl95LFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogd2lkdGgsXG4gICAgICAgIGVuZFg6IGUuX3gsXG4gICAgICAgIGVuZFk6IGUuX3lcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuX3g7XG4gICAgdGhpcy5zdGFydFkgPSBlLl95O1xuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICBsZXQgc2l6ZSA9IHRoaXMuc3RhcnRYIC0gZS5feDtcblxuICAgICAgbGV0IHhDZW50ZXIgPSB0aGlzLnN0YXJ0WDtcbiAgICAgIGxldCB5Q2VudGVyID0gZS5feTtcblxuXG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgLy8gdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIC8vIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHhDZW50ZXIgKyBzaXplICogTWF0aC5jb3MoMCksIHlDZW50ZXIgKyBzaXplICogTWF0aC5zaW4oMCkpO1xuXG4gICAgICAvLyBmb3IgKHZhciBpID0gMTsgaSA8PSBudW1iZXJPZlNpZGVzOyBpICs9IDEpIHtcbiAgICAgIC8vICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oeENlbnRlciArIHNpemUgKiBNYXRoLmNvcyhpICogMiAqIE1hdGguUEkgLyBudW1iZXJPZlNpZGVzKSwgeUNlbnRlciArIHNpemUgKiBNYXRoLnNpbihpICogMiAqIE1hdGguUEkgLyBudW1iZXJPZlNpZGVzKSk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG5cbiAgICAgIGRyYXdEaWFtb25kKHhDZW50ZXIsIHlDZW50ZXIsIHNpemUsIHRoaXMudGVtcENvbnRleHQpXG5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbW9uZDsiLCAiZnVuY3Rpb24gZHJhd0RpYW1vbmQoeENlbnRlciwgeUNlbnRlciwgc2l6ZSwgY29udGV4dCkge1xuICBsZXQgbnVtYmVyT2ZTaWRlcyA9IDQ7XG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGNvbnRleHQubW92ZVRvKHhDZW50ZXIgKyBzaXplICogTWF0aC5jb3MoMCksIHlDZW50ZXIgKyBzaXplICogTWF0aC5zaW4oMCkpO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IG51bWJlck9mU2lkZXM7IGkgKz0gMSkge1xuICAgIGNvbnRleHQubGluZVRvKHhDZW50ZXIgKyBzaXplICogTWF0aC5jb3MoaSAqIDIgKiBNYXRoLlBJIC8gbnVtYmVyT2ZTaWRlcyksIHlDZW50ZXIgKyBzaXplICogTWF0aC5zaW4oaSAqIDIgKiBNYXRoLlBJIC8gbnVtYmVyT2ZTaWRlcykpO1xuICB9XG5cbiAgY29udGV4dC5zdHJva2UoKTtcbn1cblxuZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgY29udGV4dCwgeCwgeSwgbWF4V2lkdGgsIGxpbmVIZWlnaHQgPSAzMiwgY29sb3IsIGZvbnRTaXplID0gMjQpIHtcbiAgY29udGV4dC5mb250ID0gYG5vcm1hbCAke2ZvbnRTaXplfXB4LyR7bGluZUhlaWdodH1weCBDb21pYyBTYW5zIE1TYDtcbiAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuICBsZXQgd29yZHMgPSB0ZXh0LnNwbGl0KCcnKTtcbiAgbGV0IGxpbmUgPSAnJztcbiAgbGV0IG51bWJlck9mTGluZXMgPSAxO1xuXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgd29yZHMubGVuZ3RoOyBuKyspIHtcbiAgICBpZiAod29yZHNbbl0gPT09ICdcXG4nKSB7XG4gICAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICAgICAgbGluZSA9ICcnO1xuICAgICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgICAgbnVtYmVyT2ZMaW5lcysrO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBsZXQgdGVzdExpbmUgPSBsaW5lICsgd29yZHNbbl0gKyAnJztcbiAgICAgIC8vIGxldCBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0TGluZSk7XG4gICAgICAvLyBsZXQgdGVzdFdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgIC8vIGlmICh0ZXN0V2lkdGggPiBtYXhXaWR0aCAmJiBuID4gMCkge1xuICAgICAgLy8gICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICAgICAgLy8gICBsaW5lID0gd29yZHNbbl0gKyAnJztcbiAgICAgIC8vICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgICAgLy8gICBudW1iZXJPZkxpbmVzKys7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBsaW5lID0gdGVzdExpbmU7XG4gICAgICAvLyB9XG4gICAgICBsZXQgdGVzdExpbmUgPSBsaW5lICsgd29yZHNbbl0gKyAnJztcbiAgICAgIGxpbmUgPSB0ZXN0TGluZTtcbiAgICB9XG5cbiAgfVxuICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICByZXR1cm4gbnVtYmVyT2ZMaW5lcztcbn1cblxuXG5leHBvcnQgeyBkcmF3RGlhbW9uZCwgZHJhd1RleHQgfTsiLCAiaW1wb3J0IHsgZHJhd1RleHQgfSBmcm9tIFwiLi4vdXRpbHMvZHJhd1NoYXBlcy5qc1wiO1xuXG5jbGFzcyBEcmF3VGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgaWQsIHNlbGVjdGVkVGhlbWUpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5pbml0aWFsVGV4dCA9ICcnO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLmRibGNsaWNrID0gdGhpcy5vbmRibGNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGV4dEJveENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0Qm94Q29udGFpbmVySWQnKTtcbiAgICB0aGlzLnRleHRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEFyZWFJZCcpO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZFRoZW1lID0gc2VsZWN0ZWRUaGVtZTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLnRleHRCb3guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25CbHVyKTtcbiAgICB0aGlzLnRleHRCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLnRleHRCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25CbHVyKTtcbiAgICB0aGlzLnRleHRCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy50ZXh0Qm94KSB7XG4gICAgICBjb25zb2xlLmxvZygnRHJhd2luZyB0ZXh0JywgdGhpcy50ZXh0Qm94LmlubmVySFRNTCk7XG4gICAgICBsZXQgdGV4dCA9IHRoaXMudGV4dEJveC5pbm5lckhUTUwucmVwbGFjZSgvPGRpdj4vZywgXCJcXG5cIikucmVwbGFjZSgvPFxcL2Rpdj4vZywgXCJcIikucmVwbGFjZSgvPGJyPi9nLCBcIlxcblwiKS5yZXBsYWNlKCcmbmJzcDsnLCAnICcpO1xuICAgICAgY29uc29sZS5sb2codGV4dCk7XG4gICAgICBsZXQgY29sb3IgPSB0aGlzLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnO1xuXG5cblxuICAgICAgLy8gVE9ETzogUmVwbGFjZSB1bmRlZmluZWQgd2l0aCBleGFjdCBsaW5lIGhlaWdodFxuICAgICAgbGV0IHRleHRhcmVhU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnRleHRCb3gpO1xuICAgICAgbGV0IHRldHh0YXJlYUNsaWVudFN0eWxlID0gdGhpcy50ZXh0Qm94LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc29sZS5sb2codGV4dGFyZWFTdHlsZSk7XG4gICAgICBsZXQgd2lkdGggPSBNYXRoLmNlaWwoTnVtYmVyKHRleHRhcmVhU3R5bGUud2lkdGguc2xpY2UoMCwgLTIpKSk7XG4gICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5jZWlsKE51bWJlcih0ZXh0YXJlYVN0eWxlLmhlaWdodC5zbGljZSgwLCAtMikpKTtcbiAgICAgIGNvbnNvbGUubG9nKHdpZHRoKTtcbiAgICAgIC8vbGV0IG51bWJlck9mTGluZXMgPSBkcmF3VGV4dCh0ZXh0LCB0aGlzLnRlbXBDb250ZXh0LCB0ZXR4dGFyZWFDbGllbnRTdHlsZS54LCB0ZXR4dGFyZWFDbGllbnRTdHlsZS55LCBNYXRoLmNlaWwod2lkdGgpLCB1bmRlZmluZWQsIGNvbG9yLCB0aGlzLmJhc2VGb250U2l6ZSk7XG5cblxuICAgICAgLy9sZXQgdGV4dE1ldHJpY3MgPSB0aGlzLnRlbXBDb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpO1xuXG4gICAgICAvLyBBZGRpbmcgYnVmZmVyIDEwIHRvIHRoZSBoZWlnaHQgYW5kIHdpZHRoIHZhbHVlc1xuICAgICAgLy9sZXQgaGVpZ2h0ID0gTWF0aC5hYnModGV4dE1ldHJpY3MuZm9udEJvdW5kaW5nQm94QXNjZW50KSArIE1hdGguYWJzKHRleHRNZXRyaWNzLmZvbnRCb3VuZGluZ0JveERlc2NlbnQpICsgMTA7XG4gICAgICAvL2xldCB3aWR0aCA9IE1hdGguYWJzKHRleHRNZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94TGVmdCkgKyBNYXRoLmFicyh0ZXh0TWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveFJpZ2h0KSArIDEwO1xuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHg6IHRldHh0YXJlYUNsaWVudFN0eWxlLmxlZnQsXG4gICAgICAgIHk6IHRldHh0YXJlYUNsaWVudFN0eWxlLnRvcCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRleHQsXG4gICAgICAgIGlubmVySHRtbDogdGhpcy50ZXh0Qm94LmlubmVySFRNTCxcbiAgICAgICAgZW5kWDogdGhpcy5zdGFydFggKyB3aWR0aCxcbiAgICAgICAgZW5kWTogdGhpcy5zdGFydFkgKyBoZWlnaHQsXG4gICAgICAgIC8vd2lkdGg6IE1hdGguYWJzKHRleHRNZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94TGVmdCkgKyBNYXRoLmFicyh0ZXh0TWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveFJpZ2h0KSxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfSk7XG5cbiAgICAgIC8vIHJlc2V0dGluZyB0aGUgdGV4dGFyZWEgdmFsdWVzXG4gICAgICAvLyB0aGlzLnRleHRCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25CbHVyKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gJzFweCc7XG4gICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gJzQycHgnO1xuICAgICAgdGhpcy50ZXh0Qm94LmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyID0gbnVsbDtcbiAgICAgIHRoaXMudGV4dEJveCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25kYmxjbGljayhldiwgZW5jbG9zZWRFbGVtZW50LCB7IHNjcm9sbFgsIHNjcm9sbFksIHNjYWxpbmdGYWN0b3IgfSkge1xuICAgIC8vIFRPRE86IEN1cnJlbnRseSBpbXBsZW1lbnRlZCBmb3IgcmVjdGFuZ2xlIGVuY2xvc2VkIGVsZW1lbnQuIENoZWNrIHBvc3NpYmlsaXR5IGZvciBhbGwgb3RoZXIgc2hhcGVzXG4gICAgdGhpcy5zdGFydFggPSBldi54O1xuICAgIHRoaXMuc3RhcnRZID0gZXYueTtcbiAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUudG9wID0gYCR7ZXYueX1weGA7XG4gICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtldi54fXB4YDtcbiAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy50ZXh0Qm94LmZvY3VzKCk7XG5cbiAgICBpZiAoZW5jbG9zZWRFbGVtZW50KSB7XG4gICAgICBpZiAoZW5jbG9zZWRFbGVtZW50LnR5cGUgPT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICAgIC8vIHRvIGhhdmUgZXF1aSBzcGFjZSBhcm91bmQgdGhlIGhvcml6b250YWwgZWRnZVxuICAgICAgICAvLyBsZXQgZGlmZlggPSBNYXRoLmFicyhNYXRoLmFicyhlbmNsb3NlZEVsZW1lbnQueCAqIHNjYWxpbmdGYWN0b3IpIC0gTWF0aC5hYnMoZXYuX3gpKTtcbiAgICAgICAgLy8gbGV0IGVuY2xvc2VkWCA9IE1hdGguYWJzKE1hdGguYWJzKGVuY2xvc2VkRWxlbWVudC5lbmRYICogc2NhbGluZ0ZhY3RvcikgLSBkaWZmWCk7XG4gICAgICAgIC8vIGxldCBkaWZmWSA9IE1hdGguYWJzKE1hdGguYWJzKGVuY2xvc2VkRWxlbWVudC55ICogc2NhbGluZ0ZhY3RvcikgLSBNYXRoLmFicyhldi5feSkpO1xuICAgICAgICAvLyBsZXQgZW5jbG9zZWRZID0gTWF0aC5hYnMoTWF0aC5hYnMoZW5jbG9zZWRFbGVtZW50LmVuZFkgKiBzY2FsaW5nRmFjdG9yKSAtIGRpZmZZKTtcblxuICAgICAgICAvLyB0aGlzLndpZHRoID0gYCR7TWF0aC5hYnMoZW5jbG9zZWRYIC0gZXYuX3gpfWA7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gYCR7TWF0aC5hYnMoZW5jbG9zZWRZIC0gZXYuX3kpfWA7XG5cbiAgICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG4gICAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICB9IGVsc2UgaWYgKGVuY2xvc2VkRWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLnRvcCA9IGAke2VuY2xvc2VkRWxlbWVudC55ICogc2NhbGluZ0ZhY3RvciArIHNjcm9sbFl9cHhgO1xuICAgICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUubGVmdCA9IGAke2VuY2xvc2VkRWxlbWVudC54ICogc2NhbGluZ0ZhY3RvciArIHNjcm9sbFh9cHhgO1xuICAgICAgICB0aGlzLnRleHRCb3guaW5uZXJIVE1MID0gZW5jbG9zZWRFbGVtZW50LmlubmVySHRtbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IGVuY2xvc2VkRWxlbWVudC53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBlbmNsb3NlZEVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuc2VsZWN0QWxsQ2hpbGRyZW4odGhpcy50ZXh0Qm94KVxuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2VUb0VuZCgpO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0WCA9IGVuY2xvc2VkRWxlbWVudC54O1xuICAgICAgICAvLyB0aGlzLnN0YXJ0WSA9IGVuY2xvc2VkRWxlbWVudC55O1xuICAgICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE86IHRvIGhhdmUgZXF1aSBzcGFjZSBhcm91bmQgdGhlIGhvcml6b250YWwgZWRnZVxuXG4gICAgICAgIC8vIHRoaXMud2lkdGggPSBgJHtNYXRoLmFicyh0aGlzLnRlbXBDYW52YXMud2lkdGggLSBldi54KSAtIDEwfWA7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gYCR7TWF0aC5hYnModGhpcy50ZW1wQ2FudmFzLmhlaWdodCAtIGV2LnkpIC0gMTB9YDtcbiAgICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG4gICAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZm9yIGFsbCBzaGFwZXNcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETzogdG8gaGF2ZSBlcXVpIHNwYWNlIGFyb3VuZCB0aGUgaG9yaXpvbnRhbCBlZGdlXG5cbiAgICAgIC8vIHRoaXMud2lkdGggPSBgJHtNYXRoLmFicyh0aGlzLnRlbXBDYW52YXMud2lkdGggLSBldi54KSAtIDEwfWA7XG4gICAgICAvLyB0aGlzLmhlaWdodCA9IGAke01hdGguYWJzKHRoaXMudGVtcENhbnZhcy5oZWlnaHQgLSBldi55KSAtIDEwfWA7XG4gICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdUZXh0OyIsICJjbGFzcyBMaW5lIHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzBdKTsgLy8gY2xlYXJpZyBsaW5lIGRhc2hlZFxuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUoZSk7XG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICB4OiB0aGlzLnN0YXJ0WCxcbiAgICAgICAgeTogdGhpcy5zdGFydFksXG4gICAgICAgIHN0YXJ0WDogTWF0aC5taW4odGhpcy5zdGFydFgsIGUuX3gpLCAvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgIHN0YXJ0WTogTWF0aC5taW4odGhpcy5zdGFydFksIGUuX3kpLC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgd2lkdGg6IE1hdGguYWJzKHRoaXMuc3RhcnRYIC0gZS5feCksIC8vIENoZWNrIGlmIGl0IGlzIHdyb25nIGNhbGN1bGF0aW9uLlxuICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKHRoaXMuc3RhcnRZIC0gZS5feSksIC8vQ2hlY2sgaWYgaXQgaXMgd3JvbmcgY2FsY3VsYXRpb25cbiAgICAgICAgZW5kWDogZS5feCxcbiAgICAgICAgZW5kWTogZS5feVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKGUpIHtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuX3g7XG4gICAgdGhpcy5zdGFydFkgPSBlLl95O1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFkpO1xuICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGUuX3gsIGUuX3kpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5lOyIsICJpbXBvcnQgeyBkcmF3RGlhbW9uZCwgZHJhd1RleHQgfSBmcm9tIFwiLi4vdXRpbHMvZHJhd1NoYXBlcy5qc1wiO1xuXG5jbGFzcyBNb3ZlVG9vbCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgZWxlbWVudCwgdGhlbWUpIHtcbiAgICB0aGlzLmlkID0gZWxlbWVudC5pZDtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLnRlbXBDYW52YXMgPSB0ZW1wQ2FudmFzO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0ZW1wQ29udGV4dDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5tb3VzZXVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZWRvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vtb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0ZWRUaGVtZSA9IHRoZW1lO1xuICAgIC8vdGhpcy5kcmF3RXhpc2l0aW5nRWxlbWVudE9uVGVtcCgpO1xuICB9XG5cbiAgbW91c2VEb3duKGUpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRYID0gZS5feDtcbiAgICB0aGlzLnN0YXJ0WSA9IGUuX3k7XG4gICAgLy8gVGVtcCBDaGVjay4gTmVlZCB0byBhZG9wdCB0byBhbGwgdGhpcy5lbGVtZW50cy4gZG9pbmcgdGhpcyBmb3IgcmVjdGFuZ2xlIGNoZWNrIGluaXRpYWwuXG4gICAgdGhpcy5kaWZmWCA9IE1hdGguYWJzKHRoaXMuZWxlbWVudC54IC0gdGhpcy5zdGFydFgpO1xuICAgIHRoaXMuZGlmZlkgPSBNYXRoLmFicyh0aGlzLmVsZW1lbnQueSAtIGUueSk7XG4gICAgdGhpcy5kcmF3RXhpc2l0aW5nRWxlbWVudE9uVGVtcCgpO1xuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlTW92ZShlKTtcbiAgICAgIC8vIEZvciByZWN0YW5nbGVcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgaWQ6IHRoaXMuZWxlbWVudC5pZCxcbiAgICAgICAgICB0eXBlOiAncmVjdGFuZ2xlJyxcbiAgICAgICAgICB4OiBlLl94LFxuICAgICAgICAgIHk6IGUuX3ksXG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxlbWVudC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbWVudC5oZWlnaHQsXG4gICAgICAgICAgZW5kWDogZS5feCxcbiAgICAgICAgICBlbmRZOiBlLl95XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2Fycm93Jykge1xuICAgICAgICBsZXQgZW5kWCA9IHRoaXMuZWxlbWVudC5lbmRYID4gdGhpcy5lbGVtZW50LnggPyBlLl94ICsgdGhpcy5lbGVtZW50LndpZHRoIDogZS5feCAtIHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICAgICAgbGV0IGVuZFkgPSB0aGlzLmVsZW1lbnQuZW5kWSA+IHRoaXMuZWxlbWVudC55ID8gZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHQgOiBlLl95IC0gdGhpcy5lbGVtZW50LmhlaWdodDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdHlwZTogJ2Fycm93JyxcbiAgICAgICAgICB4OiBlLl94LFxuICAgICAgICAgIHk6IGUuX3ksXG4gICAgICAgICAgc3RhcnRYOiBNYXRoLm1pbihlbmRYLCBlLl94KSwgLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICAgIHN0YXJ0WTogTWF0aC5taW4oZW5kWSwgZS5feSksLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1lbnQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1lbnQuaGVpZ2h0LFxuICAgICAgICAgIGVuZFgsXG4gICAgICAgICAgZW5kWVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdsaW5lJykge1xuICAgICAgICBsZXQgZW5kWCA9IHRoaXMuZWxlbWVudC5lbmRYID4gdGhpcy5lbGVtZW50LnggPyBlLl94ICsgdGhpcy5lbGVtZW50LndpZHRoIDogZS5feCAtIHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICAgICAgbGV0IGVuZFkgPSB0aGlzLmVsZW1lbnQuZW5kWSA+IHRoaXMuZWxlbWVudC55ID8gZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHQgOiBlLl95IC0gdGhpcy5lbGVtZW50LmhlaWdodDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgIHg6IGUuX3gsXG4gICAgICAgICAgeTogZS5feSxcbiAgICAgICAgICBzdGFydFg6IE1hdGgubWluKGUuX3gsIGVuZFgpLCAvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgICAgc3RhcnRZOiBNYXRoLm1pbihlLl95LCBlbmRZKSwvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxlbWVudC53aWR0aCwgLy8gQ2hlY2sgaWYgaXQgaXMgd3JvbmcgY2FsY3VsYXRpb24uXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1lbnQuaGVpZ2h0LCAvL0NoZWNrIGlmIGl0IGlzIHdyb25nIGNhbGN1bGF0aW9uXG4gICAgICAgICAgZW5kWCxcbiAgICAgICAgICBlbmRZXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgICAgeDogZS5feCxcbiAgICAgICAgICB5OiBlLl95LFxuICAgICAgICAgIHJhZGl1czogdGhpcy5lbGVtZW50LnJhZGl1cyxcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtZW50LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtZW50LmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICB0eXBlOiAnZGlhbW9uZCcsXG4gICAgICAgICAgeDogZS5feCxcbiAgICAgICAgICB5OiBlLl95LFxuICAgICAgICAgIHN0YXJ0WDogZS5feCAtICh0aGlzLmVsZW1lbnQud2lkdGggLyAyKSxcbiAgICAgICAgICBzdGFydFk6IGUuX3kgLSAodGhpcy5lbGVtZW50LndpZHRoIC8gMiksXG4gICAgICAgICAgLy8geENlbnRlcjogdGhpcy5zdGFydFgsXG4gICAgICAgICAgLy8geUNlbnRlcjogZS5feSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtZW50LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtZW50LmhlaWdodCxcbiAgICAgICAgICBlbmRYOiBlLl94ICsgKHRoaXMuZWxlbWVudC53aWR0aCAvIDIpLFxuICAgICAgICAgIGVuZFk6IGUuX3kgKyB0aGlzLmVsZW1lbnQuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICB4OiBlLl94LFxuICAgICAgICAgIHk6IGUuX3ksXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCxcbiAgICAgICAgICBlbmRYOiBlLl94ICsgTnVtYmVyKHRoaXMuZWxlbWVudC53aWR0aCksXG4gICAgICAgICAgZW5kWTogZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHQsXG4gICAgICAgICAgLy93aWR0aDogTWF0aC5hYnModGV4dE1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hMZWZ0KSArIE1hdGguYWJzKHRleHRNZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94UmlnaHQpLFxuICAgICAgICAgIHdpZHRoOiBOdW1iZXIodGhpcy5lbGVtZW50LndpZHRoKSxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbWVudC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KGUuX3gsIGUuX3ksIHRoaXMuZWxlbWVudC53aWR0aCwgdGhpcy5lbGVtZW50LmhlaWdodCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2Fycm93Jykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIGxldCBoZWFkbGVuID0gMTA7XG4gICAgICBsZXQgZGlmZlggPSBNYXRoLmFicyh0aGlzLmVsZW1lbnQueCAtIGUuX3gpO1xuICAgICAgbGV0IGRpZmZZID0gTWF0aC5hYnModGhpcy5lbGVtZW50LnkgLSBlLl95KTtcbiAgICAgIGxldCB4ID0gdGhpcy5lbGVtZW50LnggKyBkaWZmWDtcbiAgICAgIGxldCB5ID0gdGhpcy5lbGVtZW50LnkgKyBkaWZmWTtcbiAgICAgIGxldCBlbmRYO1xuICAgICAgbGV0IGVuZFk7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LmVuZFggPiB0aGlzLmVsZW1lbnQueCkge1xuICAgICAgICBlbmRYID0gZS5feCArIHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFggPSBlLl94IC0gdGhpcy5lbGVtZW50LndpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50LmVuZFkgPiB0aGlzLmVsZW1lbnQueSkge1xuICAgICAgICBlbmRZID0gZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRZID0gZS5feSAtIHRoaXMuZWxlbWVudC5oZWlnaHQ7XG4gICAgICB9XG5cblxuICAgICAgbGV0IGR4ID0gZW5kWCAtIHg7XG4gICAgICBsZXQgZHkgPSBlbmRZIC0geTtcbiAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyhlLl94LCBlLl95KVxuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZW5kWCwgZW5kWSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLCBlbmRZIC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKGVuZFgsIGVuZFkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZW5kWCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgZW5kWSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnbGluZScpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICBsZXQgZW5kWDtcbiAgICAgIGxldCBlbmRZO1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC5lbmRYID4gdGhpcy5lbGVtZW50LngpIHtcbiAgICAgICAgZW5kWCA9IGUuX3ggKyB0aGlzLmVsZW1lbnQud2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRYID0gZS5feCAtIHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5lbmRZID4gdGhpcy5lbGVtZW50LnkpIHtcbiAgICAgICAgZW5kWSA9IGUuX3kgKyB0aGlzLmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kWSA9IGUuX3kgLSB0aGlzLmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKGUuX3gsIGUuX3kpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZW5kWCwgZW5kWSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmFyYyhlLl94LCBlLl95LCB0aGlzLmVsZW1lbnQucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIGRyYXdEaWFtb25kKGUuX3gsIGUuX3ksIHRoaXMuZWxlbWVudC53aWR0aCAvIDIsIHRoaXMudGVtcENvbnRleHQpXG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgbGV0IGNvbG9yID0gdGhpcy5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiNGRkZGRkZcIiA6ICcjMDAwMDAwJztcbiAgICAgIGRyYXdUZXh0KHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCwgdGhpcy50ZW1wQ29udGV4dCwgZS5feCwgZS5feSwgdGhpcy5lbGVtZW50LndpZHRoLCB1bmRlZmluZWQsIGNvbG9yKVxuICAgIH1cbiAgfVxuXG5cblxuXG4gIGRyYXdFeGlzaXRpbmdFbGVtZW50T25UZW1wKCkge1xuICAgIC8vICB0eXBlID09PSAncmVjdGFuZ2xlJ1xuICAgIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLmVsZW1lbnQueCwgdGhpcy5lbGVtZW50LnksIHRoaXMuZWxlbWVudC53aWR0aCwgdGhpcy5lbGVtZW50LmhlaWdodCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2Fycm93Jykge1xuICAgICAgbGV0IGhlYWRsZW4gPSAxMDtcbiAgICAgIGxldCBkeCA9IHRoaXMuZWxlbWVudC5lbmRYIC0gdGhpcy5lbGVtZW50Lng7XG4gICAgICBsZXQgZHkgPSB0aGlzLmVsZW1lbnQuZW5kWSAtIHRoaXMuZWxlbWVudC55O1xuICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHRoaXMuZWxlbWVudC54LCB0aGlzLmVsZW1lbnQueSlcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKHRoaXMuZWxlbWVudC5lbmRYLCB0aGlzLmVsZW1lbnQuZW5kWSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyh0aGlzLmVsZW1lbnQuZW5kWCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgdGhpcy5lbGVtZW50LmVuZFkgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gNikpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8odGhpcy5lbGVtZW50LmVuZFgsIHRoaXMuZWxlbWVudC5lbmRZKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKHRoaXMuZWxlbWVudC5lbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDYpLCB0aGlzLmVsZW1lbnQuZW5kWSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnbGluZScpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyh0aGlzLmVsZW1lbnQueCwgdGhpcy5lbGVtZW50LnkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8odGhpcy5lbGVtZW50LmVuZFgsIHRoaXMuZWxlbWVudC5lbmRZKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5hcmModGhpcy5lbGVtZW50LngsIHRoaXMuZWxlbWVudC55LCB0aGlzLmVsZW1lbnQucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgbGV0IHhDZW50ZXIgPSB0aGlzLmVsZW1lbnQueDtcbiAgICAgIGxldCB5Q2VudGVyID0gdGhpcy5lbGVtZW50Lnk7XG4gICAgICBsZXQgc2l6ZSA9IHRoaXMuZWxlbWVudC54IC0gdGhpcy5lbGVtZW50LmVuZFg7XG4gICAgICBkcmF3RGlhbW9uZCh4Q2VudGVyLCB5Q2VudGVyLCBzaXplLCB0aGlzLnRlbXBDb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIGxldCBjb2xvciA9IHRoaXMuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjRkZGRkZGXCIgOiAnIzAwMDAwMCc7XG4gICAgICBkcmF3VGV4dCh0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuZWxlbWVudC54LCB0aGlzLmVsZW1lbnQueSwgdGhpcy5lbGVtZW50LndpZHRoLCB1bmRlZmluZWQsIGNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92ZVRvb2w7IiwgImNsYXNzIFJlY3Qge1xuICBjb25zdHJ1Y3Rvcih0ZW1wQ2FudmFzLCB0ZW1wQ29udGV4dCwgY2FsbGJhY2ssIGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzBdKTtcbiAgfVxuXG4gIG1vdXNlVXAoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlKGUpO1xuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6ICdyZWN0YW5nbGUnLFxuICAgICAgICB4OiBNYXRoLm1pbih0aGlzLnN0YXJ0WCwgZS5feCksXG4gICAgICAgIHk6IE1hdGgubWluKHRoaXMuc3RhcnRZLCBlLl95KSxcbiAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgIGVuZFg6IE1hdGgubWF4KHRoaXMuc3RhcnRYLCBlLl94KSxcbiAgICAgICAgZW5kWTogTWF0aC5tYXgodGhpcy5zdGFydFksIGUuX3kpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSBlLl94O1xuICAgIHRoaXMuc3RhcnRZID0gZS5feTtcbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgbGV0IHggPSBNYXRoLm1pbihlLl94LCB0aGlzLnN0YXJ0WCk7XG4gICAgICBsZXQgeSA9IE1hdGgubWluKGUuX3ksIHRoaXMuc3RhcnRZKTtcbiAgICAgIGxldCB3aWR0aCA9IE1hdGguYWJzKGUuX3ggLSB0aGlzLnN0YXJ0WCk7XG4gICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5hYnMoZS5feSAtIHRoaXMuc3RhcnRZKTtcblxuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcblxuICAgICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWN0OyIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRUb29sLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0VG9vbExpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxufVxuXG5mdW5jdGlvbiBUZXh0VG9vbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19IGNsYXNzTmFtZT1cInRleHRUb29sXCIgaWQ9XCJ0ZXh0Qm94Q29udGFpbmVySWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dGFyZWFcIiBpZD1cInRleHRBcmVhSWRcIiByb2xlPVwidGV4dGJveFwiIGNvbnRlbnRFZGl0YWJsZSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRUb29sOyIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1pvb21Db250YWluZXIuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFpvb21Db250YWluZXJMaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XVxufVxuXG5mdW5jdGlvbiBab29tQ29udGFpbmVyKHsgem9vbVJhbmdlLCB6b29tSW4sIHpvb21PdXQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiem9vbUNvbnRhaW5lclwiPlxuICAgICAgPHNwYW4gaWQ9XCJtaW51c1wiIGNsYXNzTmFtZT1cInpvb20tc2lnblwiIG9uQ2xpY2s9e3pvb21Jbn0+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTMuMTI1IDEyLjVDMy4xMjUgMTIuMDY4NSAzLjQ3NDc4IDExLjcxODggMy45MDYyNSAxMS43MTg4SDIxLjA5MzhDMjEuNTI1MiAxMS43MTg4IDIxLjg3NSAxMi4wNjg1IDIxLjg3NSAxMi41QzIxLjg3NSAxMi45MzE1IDIxLjUyNTIgMTMuMjgxMiAyMS4wOTM4IDEzLjI4MTJIMy45MDYyNUMzLjQ3NDc4IDEzLjI4MTIgMy4xMjUgMTIuOTMxNSAzLjEyNSAxMi41WlwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudGNvbG9yXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBpZD1cInpvb21SYW5nZVwiIGNsYXNzTmFtZT1cInpvb20tcmFuZ2VcIj57TWF0aC5mbG9vcih6b29tUmFuZ2UgKiAxMDApfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGlkPVwicGx1c1wiIGNsYXNzTmFtZT1cInpvb20tc2lnblwiIG9uQ2xpY2s9e3pvb21PdXR9PlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgZD1cIk0xMi41IDMuMTI1QzEyLjkzMTUgMy4xMjUgMTMuMjgxMiAzLjQ3NDc4IDEzLjI4MTIgMy45MDYyNVYxMS43MTg4SDIxLjA5MzhDMjEuNTI1MiAxMS43MTg4IDIxLjg3NSAxMi4wNjg1IDIxLjg3NSAxMi41QzIxLjg3NSAxMi45MzE1IDIxLjUyNTIgMTMuMjgxMiAyMS4wOTM4IDEzLjI4MTJIMTMuMjgxMlYyMS4wOTM4QzEzLjI4MTIgMjEuNTI1MiAxMi45MzE1IDIxLjg3NSAxMi41IDIxLjg3NUMxMi4wNjg1IDIxLjg3NSAxMS43MTg3IDIxLjUyNTIgMTEuNzE4NyAyMS4wOTM4VjEzLjI4MTJIMy45MDYyNUMzLjQ3NDc4IDEzLjI4MTIgMy4xMjUgMTIuOTMxNSAzLjEyNSAxMi41QzMuMTI1IDEyLjA2ODUgMy40NzQ3OCAxMS43MTg4IDMuOTA2MjUgMTEuNzE4OEgxMS43MTg4VjMuOTA2MjVDMTEuNzE4OCAzLjQ3NDc4IDEyLjA2ODUgMy4xMjUgMTIuNSAzLjEyNVpcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRjb2xvclwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9zcGFuPlxuXG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgWm9vbUNvbnRhaW5lcjsiLCAiY2xhc3MgSWRiIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBpbml0aWFsaXplSW5kZXhlZERiKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlcXVlc3QgPSBzZWxmLmluZGV4ZWREQi5vcGVuKCdyZWR1eC1zdGF0ZScsICcxJyk7XG4gICAgICB0aGlzLnJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICB0aGlzLmRiLmNyZWF0ZU9iamVjdFN0b3JlKCdyZWR1eC1wZXJzaXN0YW5jZScsIHtcbiAgICAgICAgICBrZXk6ICdhcHAtc3RhdGUtcGVyc2lzdCdcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB0aGlzLnJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICByZWplY3QoJ2VycicpO1xuICAgICAgfTtcbiAgICAgIHRoaXMucmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5kYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgIHJlc29sdmUoJ3N1Y2Nlc3MnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIHRyYW5zYWN0aW9uIGRhdGEgd2lsbCBiZSBrZXkgaW4gcmVhZG9ubHkgbW9kZSBhbmQgdmFsdWUgdG8gYmUgc3RvcmVkIGluIGNhc2Ugb2YgdXBkYXRlXG4gIHBlcmZvcm1UcmFuc2FjdGlvbihtb2RlLCB7IGtleSA9IG51bGwsIHRyYW5zYWN0aW9uRGF0YSA9IG51bGwgfSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgaWYgKCF0aGlzLmRiIHx8ICF0aGlzLmRiLnRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5pbml0aWFsaXplSW5kZXhlZERiKCkpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24oWydyZWR1eC1wZXJzaXN0YW5jZSddLCBtb2RlKTtcbiAgICAgICAgY29uc3QgcmVkdXhTdGF0ZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdyZWR1eC1wZXJzaXN0YW5jZScpO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWRvbmx5Jykge1xuICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25SZXEgPSByZWR1eFN0YXRlLmdldChrZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25SZXEgPSByZWR1eFN0YXRlLnB1dCh0cmFuc2FjdGlvbkRhdGEsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblJlcS5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblJlcS5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KCdFcnJvciB3aGlsZSBpbml0aWFsaXppbmcgdHJhbnNhdGlvbicsIGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGF0YUZyb21JZGIoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucGVyZm9ybVRyYW5zYWN0aW9uKCdyZWFkb25seScsIHsga2V5IH0pLnRoZW4oKHRyYW5zYWN0aW9uRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VPYmogPSB7XG4gICAgICAgIG1lc3NhZ2U6ICdHRVRfREFUQV9TVUNDRVNTJyxcbiAgICAgICAgcGF5bG9hZDogdHJhbnNhY3Rpb25FdmVudC50YXJnZXQucmVzdWx0XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRXZlbnQudGFyZ2V0LnJlc3VsdFxuICAgICAgLy8gc3luY1RhYnMoY2xpZW50SWQsIG1lc3NhZ2VPYmopO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRGIoZGF0YSwga2V5KSB7XG4gICAgdGhpcy5wZXJmb3JtVHJhbnNhY3Rpb24oJ3JlYWR3cml0ZScsIHsgdHJhbnNhY3Rpb25EYXRhOiBkYXRhLCBrZXkgfSkudGhlbigodHJhbnNhY3Rpb25EZXQpID0+IHtcbiAgICAgIC8vIFRPRE86IFVuY29tbWVudCB0aGUgYmVsb3cgbGluZSBpZiBzeW5jaW5nIGlzIHJlcXVpcmVkIGJldHdlZW4gdGFicy5cbiAgICAgIC8qIHN5bmNUYWJzKGNsaWVudElkLCBkYXRhKTsgKi9cbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aGlsZSBwZXJmb3JtaW5nIHRyYW5zYWN0aW9uJywgdHJhbnNhY3Rpb25EZXQpO1xuICAgIH0pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSWRiOyIsICJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFNvY2tldENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTb2NrZXQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU29ja2V0UHJvdmlkZXIoeyBzb2NrZXQsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxTb2NrZXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzb2NrZXR9PntjaGlsZHJlbn08L1NvY2tldENvbnRleHQuUHJvdmlkZXI+O1xufVxuIiwgImltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcblxuY29uc3QgZGF0YVBvaW50ID0gKGNvbGxlY3Rpb25QYXRoKSA9PiB7XG4gIHJldHVybiBnZXRGaXJlc3RvcmUoKS5jb2xsZWN0aW9uKGNvbGxlY3Rpb25QYXRoKVxufTtcblxuXG5jb25zdCBkYiA9IHtcbiAgcm9vbXM6ICgpID0+IGRhdGFQb2ludCgncm9vbXMnKSxcbiAgcm9vbTogKHJvb21JZCkgPT4gZGF0YVBvaW50KGByb29tcy8ke3Jvb21JZH1gKSxcbiAgc2hhcGVDb2xsZWN0aW9uOiAocm9vbUlkKSA9PiBkYXRhUG9pbnQoYHJvb21zLyR7cm9vbUlkfS9zaGFwZXNgKSxcbiAgY29sbGFib3JhdG9yczogKHJvb21JZCkgPT4gZGF0YVBvaW50KGByb29tcy8ke3Jvb21JZH0vY29sbGFib3JhdG9yc2ApXG59XG5cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUm9vbShuYW1lKSB7XG4gIGNvbnN0IG5ld1Jvb21SZWYgPSBkYi5yb29tcygpLmRvYygpO1xuICBhd2FpdCBkYi5jb2xsYWJvcmF0b3JzKG5ld1Jvb21SZWYuaWQpLmRvYygpLnNldCh7IG5hbWU6IG5hbWUsIGNvbG9yOiAnYmx1ZScsIGlzQWN0aXZlOiB0cnVlIH0pO1xuICBhd2FpdCBuZXdSb29tUmVmLnNldCh7IGlkOiBuZXdSb29tUmVmLmlkIH0pO1xuICByZXR1cm4geyBpZDogbmV3Um9vbVJlZi5pZCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBhZGRTaGFwZShyb29tSWQsIHNoYXBlKSB7XG4gIGNvbnN0IG5ld1NoYXBlUmVmID0gZGIuc2hhcGVDb2xsZWN0aW9uKHJvb21JZCkuZG9jKHNoYXBlLmlkKTtcbiAgcmV0dXJuIGF3YWl0IG5ld1NoYXBlUmVmLnNldCh7IC4uLnNoYXBlIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVTaGFwZShyb29tSWQsIHNoYXBlKSB7XG4gIHJldHVybiBhd2FpdCBkYi5zaGFwZUNvbGxlY3Rpb24ocm9vbUlkKS5kb2Moc2hhcGUuaWQpLmRlbGV0ZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBhZGRDb2xsYWJvcmF0b3Iocm9vbUlkLCBjb2xsYWJvcmF0b3IpIHtcbiAgY29uc3QgbmV3Q29sbGFib3JhdG9yUmVmID0gZGIuY29sbGFib3JhdG9ycyhyb29tSWQpLmRvYyhjb2xsYWJvcmF0b3IuaWQpO1xuICByZXR1cm4gYXdhaXQgbmV3Q29sbGFib3JhdG9yUmVmLnNldCh7IC4uLmNvbGxhYm9yYXRvciB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2hhcGVzKHJvb21JZCkge1xuICBjb25zb2xlLmxvZyhcInJvb2QgaXNkdWVcIiwgcm9vbUlkKVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGRiLnNoYXBlQ29sbGVjdGlvbihyb29tSWQpLmdldCgpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgaWYgKHNuYXBzaG90LmVtcHR5KSB7XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgICBkYXRhLnB1c2goZG9jLmRhdGEoKSk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnU2hhcGVzIGRhdGEnLCBkYXRhKTtcbiAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdTaGFwZXMgZXdycm9yJywgZXJyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFVzZXJzKHJvb21JZCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGRiLmNvbGxhYm9yYXRvcnMocm9vbUlkKS5nZXQoKS50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSBbXTtcbiAgICAgIGlmIChzbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICBkYXRhID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgICAgZGF0YS5wdXNoKGRvYy5kYXRhKCkpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ1VzZXJzIGRhdGEnLCBkYXRhKTtcbiAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2VycyBFcnJvcicsIGVycik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsRHJhd0RhdGEocm9vbUlkKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgUHJvbWlzZS5hbGwoW2dldFNoYXBlcyhyb29tSWQpLCBnZXRVc2Vycyhyb29tSWQpXSkudGhlbigoW3NoYXBlcywgdXNlcnNdKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzaGFwZXMsIHVzZXJzKTtcbiAgICAgIHJlc29sdmUoeyBzaGFwZXM6IHNoYXBlcyAmJiBzaGFwZXMubGVuZ3RoID4gMCA/IHNoYXBlcyA6IFtdLCB1c2VyczogdXNlcnMgJiYgdXNlcnMubGVuZ3RoID4gMCA/IHVzZXJzIDogW10gfSlcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkluc2lkZSBlcnJcIiwgZXJyKVxuICAgICAgcmVqZWN0KHsgbWVzc2FnZTogZXJyIH0pO1xuICAgIH0pXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRCdWxrU2hhcGVzKHNoYXBlcywgcm9vbUlkKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IHByb21pc2VzID0gW107XG4gICAgc2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XG4gICAgICBsZXQgbmV3U2hhcGVSZWYgPSBkYi5zaGFwZUNvbGxlY3Rpb24ocm9vbUlkKS5kb2MoKTtcbiAgICAgIHByb21pc2VzLnB1c2gobmV3U2hhcGVSZWYuc2V0KHsgLi4uc2hhcGUsIGlkOiBuZXdTaGFwZVJlZi5pZCB9KSlcbiAgICB9KVxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgIHJlc29sdmUoeyBtZXNzYWdlOiAnU2hhcGVzIEFkZGVkJyB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgcmVqZWN0KHsgbWVzc2FnZTogZXJyIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ29sbGFib3JhdG9yKHJvb21JZCwgY29sbGFib3JhdG9yKSB7XG4gIGxldCBjb2xsYWJvcmF0b3JSZWYgPSBkYi5zaGFwZUNvbGxlY3Rpb24ocm9vbUlkKS5kb2MoY29sbGFib3JhdG9yLmlkKTtcbiAgcmV0dXJuIGF3YWl0IGNvbGxhYm9yYXRvclJlZi51cGRhdGUoeyBpc0FjdGl2ZTogZmFsc2UgfSk7XG59XG5cblxuZXhwb3J0IHtcbiAgY3JlYXRlUm9vbSxcbiAgZ2V0SW5pdGlhbERyYXdEYXRhLFxuICBhZGRTaGFwZSxcbiAgZGVsZXRlU2hhcGUsXG4gIGFkZENvbGxhYm9yYXRvcixcbiAgZGVsZXRlQ29sbGFib3JhdG9yXG59IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBY3Rpb25EYXRhLCBGb3JtLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb29tIH0gZnJvbSAnLi4vLi4vc2VydmVyL2RiJztcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfSkge1xuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBsZXQgbmFtZSA9IGJvZHkuZ2V0KCduYW1lJyk7XG4gIGNvbnN0IGRyYXcgPSBhd2FpdCBjcmVhdGVSb29tKG5hbWUpO1xuICAvLyBpZiAoZXJyb3JzKSB7XG4gIC8vICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcbiAgLy8gICByZXR1cm4ganNvbih7IGVycm9ycywgdmFsdWVzIH0pO1xuICAvLyB9XG4gIGNvbnNvbGUubG9nKGRyYXcpO1xuICByZXR1cm4gcmVkaXJlY3QoYC9kcmF3LyR7ZHJhdy5pZH1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBtZXRob2Q9J3Bvc3QnPlxuICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXt0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZyd9PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOYW1lOnsnICd9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhID8gYWN0aW9uRGF0YS52YWx1ZXMubmFtZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYWN0aW9uRGF0YT8uZXJyb3JzLm5hbWUgPyAncmVkJyA6ICcnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5uYW1lID8gKFxuICAgICAgICAgIDxWYWxpZGF0aW9uTWVzc2FnZVxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nPXt0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZyd9XG4gICAgICAgICAgICBlcnJvcj17YWN0aW9uRGF0YT8uZXJyb3JzPy5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgIHt0cmFuc2l0aW9uLnN0YXRlID09PSAnc3VibWl0dGluZydcbiAgICAgICAgICAgICAgPyAnQ29uZmlndXJpbmcuLi4nXG4gICAgICAgICAgICAgIDogJ0VudGVyIFJvb20nfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3A+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic0MWU0OTcxZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtQjRQRTc1QjIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhUSUNQT0NILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRE9INVNXS1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LU5DMzdOTE1DLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZHJhdy8kZHJhd0lkJzp7J2lkJzoncm91dGVzL2RyYXcvJGRyYXdJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkcmF3LzpkcmF3SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZHJhdy8kZHJhd0lkLTVVUVhBSFNCLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC03M05HSExOQS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTQxRTQ5NzFFLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxVQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxVQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFVBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsVUFBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxVQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsVUFBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxVQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFVBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsVUFBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxVQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFVBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsVUFBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsVUFBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsVUFBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsVUFBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxVQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxVQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFVBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsVUFBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsVUFBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsVUFBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFVBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsVUFBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsVUFBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsVUFBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsVUFBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFVBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFVBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFVBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFVBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsVUFBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsVUFBUyxvQkFBb0I7QUFBQSxNQUNqRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxVQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFVBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsVUFBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsVUFBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDdE9sQztBQUFBLG9CQUFPO0FBQ1AscUJBQW9CO0FBQ3BCLHlCQUF3QjtBQUN4QixvQkFBbUI7OztBQ0huQjtBQUFBLGlCQUlPO0FBQ1Asa0JBR087QUFDUCxrQkFBeUM7QUFDekMsbUJBQXlDO0FBQ3pDLElBQUksMkJBQWdCLFdBQVcsR0FBRztBQUNoQyxNQUFJO0FBQ0osTUFBSSxDQUFDLFFBQVEsSUFBSSxlQUFlO0FBQzlCLFVBQU0sSUFBSSxNQUFNO0FBQUEsU0FDWDtBQUNMLFFBQUk7QUFDRixlQUFTLEtBQUssTUFBTSxRQUFRLElBQUk7QUFBQSxZQUNoQztBQUNBLFlBQU0sTUFBTTtBQUFBO0FBQUE7QUFHaEIsaUNBQW9CO0FBQUE7QUFHdEIsSUFBSSwwQkFBZ0IsV0FBVyxHQUFHO0FBQ2hDLE1BQUk7QUFDSixNQUFJLENBQUMsUUFBUSxJQUFJLGlCQUFpQjtBQUNoQyxVQUFNLElBQUksTUFBTTtBQUFBLFNBQ1g7QUFDTCxRQUFJO0FBQ0YsWUFBTSxpQkFBaUIsS0FBSyxNQUFNLFFBQVEsSUFBSTtBQUM5QyxlQUFTO0FBQUEsUUFDUCxZQUFZLHFCQUFXO0FBQUE7QUFBQSxZQUV6QjtBQUNBLFlBQU0sTUFBTTtBQUFBO0FBQUE7QUFHaEIsZ0NBQW9CO0FBQUE7QUFHZixJQUFNLE9BQU87QUFBQSxFQUNsQixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUE7OztBRG5DVixzQkFBcUM7OztBRVRyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQStCO0FBQy9CLG1CQUE0QjtBQUViLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sU0FBUyxrQ0FDYixvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFHbkQsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUFTLG9CQUFvQixRQUFRO0FBQUEsSUFDOUMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7QUFJTixJQUFNLG9CQUFvQixDQUMvQixVQUVBLEVBQUUsU0FBUyxRQUFRLHdCQUNoQjtBQUNILFVBQVEsSUFBSSxXQUFXO0FBQ3ZCLFNBQU8sRUFBRSxTQUFTO0FBQUE7OztBQzNCcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWdDO0FBQ2hDLG9CQU9PO0FBR0EsZ0JBQWdCO0FBQ3JCLFNBQU8sRUFBRSxPQUFPO0FBQUE7QUFHSCxlQUFlO0FBRzVCLFNBQ0UsbURBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1QsbURBQUMsUUFBRCxNQUNFLG1EQUFDLFFBQUQ7QUFBQSxJQUFNLFNBQVE7QUFBQSxNQUNkLG1EQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFXLFNBQVE7QUFBQSxNQUM5QixtREFBQyxTQUFELE1BQU8sMkJBQ1AsbURBQUMsb0JBQUQsT0FDQSxtREFBQyxxQkFBRCxRQUVGLG1EQUFDLFFBQUQsTUFDRSxtREFBQyxzQkFBRCxPQUNBLG1EQUFDLGlDQUFELE9BQ0EsbURBQUMsdUJBQUQsT0FDQSxtREFBQywwQkFBRDtBQUFBOzs7QUMvQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMkM7QUFDM0Msa0JBQXFCO0FBQ3JCLG9CQUE4QjtBQUM5QixvQkFBZTs7O0FDSGY7QUFBQSxvQkFBa0I7Ozs7OztBQUdYLDJCQUEyQjtBQUNoQyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBSXJDLG9CQUFvQixFQUFFLGVBQWU7QUFDbkMsU0FDRSxvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvREFBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBYyxjQUM5QixvREFBQyxTQUFEO0FBQUEsSUFBTyxXQUFVO0FBQUEsS0FFZixvREFBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBVyxTQUFTO0FBQUEsTUFDaEMsb0RBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQWUsSUFBRztBQUFBO0FBQUE7QUFPNUMsSUFBTyxzQkFBUTs7O0FDdkJmO0FBQUEsb0JBQWtCOzs7Ozs7QUNBbEI7QUFBQSxvQkFBa0I7Ozs7OztBQUlYLDJCQUEyQjtBQUNoQyxTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBSXJDLG9CQUFvQixFQUFFLGNBQWMsY0FBYztBQUNoRCxTQUNFLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9EQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVcsYUFBYSxpQkFBaUIsV0FBVyxhQUFhO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBUyxTQUFTO0FBQUEsS0FFaEcsb0RBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQUssUUFBTztBQUFBLElBQUssU0FBUTtBQUFBLElBQVksTUFBSztBQUFBLElBQU8sT0FBTTtBQUFBLEtBQ2hFLG9EQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxJQUFlLFVBQVM7QUFBQSxJQUFVLFVBQVM7QUFBQSxJQUNwRCxHQUFFO0FBQUEsTUFFSixvREFBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBZSxVQUFTO0FBQUEsSUFBVSxVQUFTO0FBQUEsSUFDcEQsR0FBRTtBQUFBLFFBS1Isb0RBQUMsUUFBRDtBQUFBLElBQU0sV0FBVyxhQUFhLGlCQUFpQixTQUFTLGFBQWE7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFPLFNBQVM7QUFBQSxLQUU1RixvREFBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBSyxRQUFPO0FBQUEsSUFBSyxTQUFRO0FBQUEsSUFBWSxNQUFLO0FBQUEsSUFBTyxPQUFNO0FBQUEsS0FDaEUsb0RBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQ1QsR0FBRTtBQUFBLFFBS1Isb0RBQUMsUUFBRDtBQUFBLElBQU0sV0FBVyxhQUFhLGlCQUFpQixXQUFXLGFBQWE7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFTLFNBQVM7QUFBQSxLQUNoRyxvREFBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBSyxRQUFPO0FBQUEsSUFBSyxTQUFRO0FBQUEsSUFBWSxNQUFLO0FBQUEsSUFBTyxPQUFNO0FBQUEsS0FDaEUsb0RBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQ1QsR0FBRTtBQUFBLFFBS1Isb0RBQUMsUUFBRDtBQUFBLElBQU0sV0FBVyxhQUFhLGlCQUFpQixVQUFVLGFBQWE7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFRLFNBQVM7QUFBQSxLQUU5RixvREFBQyxPQUFEO0FBQUEsSUFBSyxPQUFNO0FBQUEsSUFBSyxRQUFPO0FBQUEsSUFBSyxTQUFRO0FBQUEsSUFBWSxNQUFLO0FBQUEsSUFBTyxPQUFNO0FBQUEsS0FDaEUsb0RBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQWUsVUFBUztBQUFBLElBQVUsVUFBUztBQUFBLElBQ3BELEdBQUU7QUFBQSxRQUtSLG9EQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVcsYUFBYSxpQkFBaUIsU0FBUyxhQUFhO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBTyxTQUFTO0FBQUEsS0FDNUYsb0RBQUMsT0FBRDtBQUFBLElBQUssUUFBTztBQUFBLElBQUssT0FBTTtBQUFBLElBQUssU0FBUTtBQUFBLEtBQ2xDLG9EQUFDLFFBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxJQUFJLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFLLFFBQU87QUFBQSxRQUdoRCxvREFBQyxRQUFEO0FBQUEsSUFBTSxXQUFXLGFBQWEsaUJBQWlCLFlBQVksYUFBYTtBQUFBLElBQU0sSUFBRztBQUFBLElBQVUsU0FBUztBQUFBLEtBRWxHLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUFLLFFBQU87QUFBQSxJQUFLLFNBQVE7QUFBQSxJQUFZLE1BQUs7QUFBQSxJQUFPLE9BQU07QUFBQSxLQUNoRSxvREFBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFDVCxHQUFFO0FBQUEsUUFLUixvREFBQyxRQUFEO0FBQUEsSUFBTSxXQUFXLGFBQWEsaUJBQWlCLFVBQVUsYUFBYTtBQUFBLElBQU0sSUFBRztBQUFBLElBQVEsU0FBUztBQUFBLEtBRTlGLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU07QUFBQSxJQUFLLFFBQU87QUFBQSxJQUFLLFNBQVE7QUFBQSxJQUFZLE1BQUs7QUFBQSxJQUFPLE9BQU07QUFBQSxLQUNoRSxvREFBQyxLQUFEO0FBQUEsSUFBRyxVQUFTO0FBQUEsS0FDVixvREFBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFDVCxHQUFFO0FBQUEsT0FHTixvREFBQyxRQUFELE1BQ0Usb0RBQUMsWUFBRDtBQUFBLElBQVUsSUFBRztBQUFBLEtBQ1gsb0RBQUMsUUFBRDtBQUFBLElBQU0sT0FBTTtBQUFBLElBQUssUUFBTztBQUFBLElBQUssTUFBSztBQUFBO0FBQUE7QUFXaEQsSUFBTyxzQkFBUTs7O0FDckZmO0FBQUEsa0JBQVk7QUFBQSxFQUNWLFlBQVksWUFBWSxhQUFhLFVBQVUsSUFBSTtBQUNqRCxTQUFLLEtBQUs7QUFDVixTQUFLLFVBQVU7QUFDZixTQUFLLFNBQVM7QUFDZCxTQUFLLFNBQVM7QUFDZCxTQUFLLFFBQVE7QUFDYixTQUFLLGFBQWE7QUFDbEIsU0FBSyxjQUFjO0FBQ25CLFNBQUssV0FBVztBQUNoQixTQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUs7QUFDakMsU0FBSyxZQUFZLEtBQUssVUFBVSxLQUFLO0FBQ3JDLFNBQUssWUFBWSxLQUFLLFVBQVUsS0FBSztBQUNyQyxTQUFLLFlBQVksWUFBWSxDQUFDO0FBQUE7QUFBQSxFQUdoQyxRQUFRLEdBQUc7QUFDVCxRQUFJLEtBQUssU0FBUztBQUNoQixXQUFLLFVBQVU7QUFDZixXQUFLLFVBQVU7QUFDZixXQUFLLFNBQVM7QUFBQSxRQUNaLElBQUksS0FBSztBQUFBLFFBQ1QsTUFBTTtBQUFBLFFBQ04sR0FBRyxLQUFLO0FBQUEsUUFDUixHQUFHLEtBQUs7QUFBQSxRQUNSLFFBQVEsS0FBSyxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQUEsUUFDaEMsUUFBUSxLQUFLLElBQUksS0FBSyxRQUFRLEVBQUU7QUFBQSxRQUNoQyxPQUFPLEtBQUssSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUFBLFFBQ2hDLFFBQVEsS0FBSyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQUEsUUFDakMsTUFBTSxFQUFFO0FBQUEsUUFDUixNQUFNLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtkLFVBQVUsR0FBRztBQUNYLFNBQUssU0FBUyxFQUFFO0FBQ2hCLFNBQUssU0FBUyxFQUFFO0FBQ2hCLFNBQUssVUFBVTtBQUFBO0FBQUEsRUFHakIsVUFBVSxHQUFHO0FBQ1gsUUFBSSxDQUFDLEtBQUssU0FBUztBQUNqQjtBQUFBO0FBRUYsU0FBSyxZQUFZLFVBQVUsR0FBRyxHQUFHLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVztBQUV4RSxRQUFJLFNBQVM7QUFDYixRQUFJLFVBQVU7QUFDZCxRQUFJLEtBQUssRUFBRSxLQUFLLEtBQUs7QUFDckIsUUFBSSxLQUFLLEVBQUUsS0FBSyxLQUFLO0FBQ3JCLFFBQUksU0FBUyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUs7QUFDdEMsUUFBSSxRQUFRLEtBQUssTUFBTSxJQUFJO0FBQzNCLFNBQUssWUFBWTtBQUNqQixTQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsS0FBSztBQUMxQyxTQUFLLFlBQVksT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxTQUFLLFlBQVksT0FBTyxFQUFFLEtBQUssVUFBVSxLQUFLLElBQUksUUFBUSxLQUFLLEtBQUssSUFBSSxFQUFFLEtBQUssVUFBVSxLQUFLLElBQUksUUFBUSxLQUFLLEtBQUs7QUFDcEgsU0FBSyxZQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDaEMsU0FBSyxZQUFZLE9BQU8sRUFBRSxLQUFLLFVBQVUsS0FBSyxJQUFJLFFBQVEsS0FBSyxLQUFLLElBQUksRUFBRSxLQUFLLFVBQVUsS0FBSyxJQUFJLFFBQVEsS0FBSyxLQUFLO0FBQ3BILFNBQUssWUFBWTtBQUNqQixTQUFLLFlBQVk7QUFBQTtBQUFBO0FBSXJCLElBQU8sZ0JBQVE7OztBQ2hFZjtBQUFBLGtCQUFZO0FBQUEsRUFDVixZQUFZLFlBQVksYUFBYSxVQUFVO0FBQzdDLFNBQUssYUFBYTtBQUNsQixTQUFLLGNBQWM7QUFDbkIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssVUFBVTtBQUNmLFNBQUssVUFBVSxLQUFLLFFBQVEsS0FBSztBQUNqQyxTQUFLLFlBQVksS0FBSyxVQUFVLEtBQUs7QUFDckMsU0FBSyxZQUFZLEtBQUssVUFBVSxLQUFLO0FBQUE7QUFBQSxFQUd2QyxVQUFVLEdBQUc7QUFDWCxRQUFJLEtBQUssU0FBUztBQUNoQixXQUFLLFlBQVksT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxXQUFLLFlBQVk7QUFBQTtBQUFBO0FBQUEsRUFJckIsVUFBVSxHQUFHO0FBQ1gsU0FBSyxZQUFZO0FBQ2pCLFNBQUssWUFBWSxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQ2hDLFNBQUssVUFBVTtBQUFBO0FBQUEsRUFHakIsUUFBUSxHQUFHO0FBQ1QsUUFBSSxLQUFLLFNBQVM7QUFDaEIsV0FBSyxVQUFVO0FBQ2YsV0FBSyxVQUFVO0FBQ2YsV0FBSztBQUFBO0FBQUE7QUFBQTtBQUtYLElBQU8sZ0JBQVE7OztBQ2pDZjs7O0FDQUE7QUFBQSwrQkFBK0IsR0FBRyxHQUFHLFFBQVE7QUFDM0MsTUFBSSxnQkFBZ0I7QUFDcEIsTUFBSSxRQUFRO0FBQ1osTUFBSSxRQUFRO0FBQ1osTUFBSSxPQUFPLFNBQVMsR0FBRztBQUNyQixXQUFPLFFBQVEsV0FBUztBQUN0QixVQUFJLE1BQU0sU0FBUyxhQUFhO0FBQzlCLFlBQUksUUFBUSxNQUFNO0FBQ2xCLFlBQUksU0FBUyxNQUFNO0FBQ25CLFlBQUksT0FBTyxNQUFNLElBQUk7QUFDckIsWUFBSSxPQUFPLE1BQU0sSUFBSTtBQUNyQixZQUFJLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTTtBQUM3QixjQUFJLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTTtBQUM3QixnQkFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO0FBQ3BCLDhCQUFnQjtBQUNoQixzQkFBUSxLQUFLLElBQUksSUFBSSxNQUFNLEdBQUcsT0FBTztBQUNyQyxzQkFBUSxLQUFLLElBQUksSUFBSSxNQUFNLEdBQUcsT0FBTztBQUFBLG1CQUNoQztBQUNMLGtCQUFJLGVBQWUsS0FBSyxJQUFJLElBQUksTUFBTSxHQUFHLE9BQU87QUFDaEQsa0JBQUksZUFBZSxLQUFLLElBQUksSUFBSSxNQUFNLEdBQUcsT0FBTztBQUNoRCxrQkFBSSxlQUFlLFNBQVMsZUFBZSxPQUFPO0FBQ2hELGdDQUFnQjtBQUNoQix3QkFBUTtBQUNSLHdCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFNUCxNQUFNLFNBQVMsVUFBVSxNQUFNLFNBQVMsU0FBUztBQUMxRCxZQUFJLGtCQUFrQixNQUFNLElBQUk7QUFDaEMsWUFBSSxnQkFBZ0IsTUFBTSxPQUFPO0FBQ2pDLFlBQUksa0JBQWtCLE1BQU0sSUFBSTtBQUNoQyxZQUFJLGdCQUFnQixNQUFNLE9BQU87QUFFakMsWUFBSSxPQUFPLEtBQUssSUFBSSxpQkFBaUI7QUFDckMsWUFBSSxPQUFPLEtBQUssSUFBSSxpQkFBaUI7QUFFckMsWUFBSSxPQUFPLEtBQUssSUFBSSxpQkFBaUI7QUFDckMsWUFBSSxPQUFPLEtBQUssSUFBSSxpQkFBaUI7QUFFckMsWUFBSSxRQUFRLEtBQUssS0FBSyxNQUFNO0FBQzFCLGNBQUksUUFBUSxLQUFLLEtBQUssTUFBTTtBQUMxQixnQkFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPO0FBQ3BCLDhCQUFnQjtBQUNoQixzQkFBUSxLQUFLLElBQUksSUFBSSxNQUFNLE9BQU87QUFDbEMsc0JBQVEsS0FBSyxJQUFJLElBQUksTUFBTSxPQUFPO0FBQUEsbUJBQzdCO0FBQ0wsa0JBQUksZUFBZSxLQUFLLElBQUksSUFBSSxNQUFNLE9BQU87QUFDN0Msa0JBQUksZUFBZSxLQUFLLElBQUksSUFBSSxNQUFNLE9BQU87QUFDN0Msa0JBQUksZUFBZSxTQUFTLGVBQWUsT0FBTztBQUNoRCxnQ0FBZ0I7QUFDaEIsd0JBQVE7QUFDUix3QkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBS1AsTUFBTSxTQUFTLFFBQVE7QUFFaEMsWUFBSSxNQUFNLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTTtBQUNuQyxjQUFJLE1BQU0sS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNO0FBQ25DLGdCQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87QUFDcEIsOEJBQWdCO0FBQ2hCLHNCQUFRLEtBQUssSUFBSSxJQUFJLE1BQU0sR0FBRyxNQUFNLE9BQU87QUFDM0Msc0JBQVEsS0FBSyxJQUFJLElBQUksTUFBTSxHQUFHLE1BQU0sT0FBTztBQUFBLG1CQUN0QztBQUNMLGtCQUFJLGVBQWUsS0FBSyxJQUFJLElBQUksTUFBTSxHQUFHLE1BQU0sT0FBTztBQUN0RCxrQkFBSSxlQUFlLEtBQUssSUFBSSxJQUFJLE1BQU0sR0FBRyxNQUFNLE9BQU87QUFDdEQsa0JBQUksZUFBZSxTQUFTLGVBQWUsT0FBTztBQUNoRCxnQ0FBZ0I7QUFDaEIsd0JBQVE7QUFDUix3QkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBS1AsTUFBTSxTQUFTLFVBQVU7QUFDbEMsWUFBSSxrQkFBbUIsS0FBSSxNQUFNLEtBQU0sS0FBSSxNQUFNLEtBQU0sS0FBSSxNQUFNLEtBQU0sS0FBSSxNQUFNO0FBQ2pGLFlBQUksbUJBQW1CLE1BQU0sU0FBUyxNQUFNLFFBQVE7QUFFbEQsMEJBQWdCO0FBQUE7QUFBQSxpQkFHVCxNQUFNLFNBQVMsV0FBVztBQUduQyxZQUFJLFFBQVEsTUFBTTtBQUNsQixZQUFJLFNBQVMsTUFBTTtBQUNuQixZQUFJLE9BQU8sTUFBTSxTQUFTO0FBQzFCLFlBQUksT0FBTyxNQUFNLFNBQVM7QUFDMUIsWUFBSSxNQUFNLFVBQVUsS0FBSyxLQUFLLE1BQU07QUFDbEMsY0FBSSxNQUFNLFVBQVUsS0FBSyxLQUFLLE1BQU07QUFDbEMsZ0JBQUksQ0FBQyxTQUFTLENBQUMsT0FBTztBQUNwQiw4QkFBZ0I7QUFDaEIsc0JBQVEsS0FBSyxJQUFJLElBQUksTUFBTSxRQUFRLE9BQU87QUFDMUMsc0JBQVEsS0FBSyxJQUFJLElBQUksTUFBTSxRQUFRLE9BQU87QUFBQSxtQkFDckM7QUFDTCxrQkFBSSxlQUFlLEtBQUssSUFBSSxJQUFJLE1BQU0sUUFBUSxPQUFPO0FBQ3JELGtCQUFJLGVBQWUsS0FBSyxJQUFJLElBQUksTUFBTSxRQUFRLE9BQU87QUFDckQsa0JBQUksZUFBZSxTQUFTLGVBQWUsT0FBTztBQUNoRCxnQ0FBZ0I7QUFDaEIsd0JBQVE7QUFDUix3QkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU3RCLFNBQU87QUFBQTtBQUdULHFCQUFxQixLQUFLLEtBQUssS0FBSyxLQUFLO0FBQ3ZDLFNBQU8sS0FBSyxLQUFLLEtBQUssSUFBSSxNQUFNLEtBQUssS0FBSyxLQUFLLElBQUksTUFBTSxLQUFLO0FBQUE7OztBRGxIaEUsbUJBQWE7QUFBQSxFQUNYLFlBQVksWUFBWSxhQUFhLFVBQVUsSUFBSTtBQUNqRCxTQUFLLEtBQUs7QUFDVixTQUFLLFVBQVU7QUFDZixTQUFLLFNBQVM7QUFDZCxTQUFLLFNBQVM7QUFDZCxTQUFLLFFBQVE7QUFDYixTQUFLLFNBQVM7QUFDZCxTQUFLLGFBQWE7QUFDbEIsU0FBSyxjQUFjO0FBQ25CLFNBQUssV0FBVztBQUNoQixTQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUs7QUFDakMsU0FBSyxZQUFZLEtBQUssVUFBVSxLQUFLO0FBQ3JDLFNBQUssWUFBWSxLQUFLLFVBQVUsS0FBSztBQUNyQyxTQUFLLFlBQVksWUFBWSxDQUFDO0FBQUE7QUFBQSxFQUdoQyxRQUFRLEdBQUc7QUFDVCxRQUFJLEtBQUssU0FBUztBQUNoQixXQUFLLFVBQVU7QUFDZixXQUFLLFVBQVU7QUFDZixVQUFJLFNBQVMsWUFBWSxLQUFLLFFBQVEsS0FBSyxRQUFRLEVBQUUsSUFBSSxFQUFFO0FBQzNELFdBQUssU0FBUztBQUFBLFFBQ1osSUFBSSxLQUFLO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixHQUFHLEtBQUs7QUFBQSxRQUNSLEdBQUcsS0FBSztBQUFBLFFBQ1IsT0FBTyxTQUFTO0FBQUEsUUFDaEIsUUFBUSxTQUFTO0FBQUEsUUFDakIsTUFBTSxFQUFFO0FBQUEsUUFDUixNQUFNLEVBQUU7QUFBQSxRQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLTixVQUFVLEdBQUc7QUFDWCxTQUFLLFVBQVU7QUFDZixTQUFLLFNBQVMsRUFBRTtBQUNoQixTQUFLLFNBQVMsRUFBRTtBQUFBO0FBQUEsRUFHbEIsVUFBVSxHQUFHO0FBQ1gsUUFBSSxLQUFLLFNBQVM7QUFDaEIsV0FBSyxZQUFZLFVBQVUsR0FBRyxHQUFHLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVztBQUN4RSxVQUFJLFNBQVMsWUFBWSxLQUFLLFFBQVEsS0FBSyxRQUFRLEVBQUUsSUFBSSxFQUFFO0FBQzNELFdBQUssWUFBWTtBQUNqQixXQUFLLFlBQVksSUFBSSxLQUFLLFFBQVEsS0FBSyxRQUFRLFFBQVEsR0FBRyxJQUFJLEtBQUs7QUFDbkUsV0FBSyxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBS3ZCLElBQU8saUJBQVE7OztBRXZEZjs7O0FDQUE7QUFBQSxxQkFBcUIsU0FBUyxTQUFTLE1BQU0sVUFBUztBQUNwRCxNQUFJLGdCQUFnQjtBQUNwQixXQUFRO0FBQ1IsV0FBUSxPQUFPLFVBQVUsT0FBTyxLQUFLLElBQUksSUFBSSxVQUFVLE9BQU8sS0FBSyxJQUFJO0FBRXZFLFdBQVMsSUFBSSxHQUFHLEtBQUssZUFBZSxLQUFLLEdBQUc7QUFDMUMsYUFBUSxPQUFPLFVBQVUsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxnQkFBZ0IsVUFBVSxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLO0FBQUE7QUFHekgsV0FBUTtBQUFBO0FBR1Ysa0JBQWtCLE1BQU0sVUFBUyxHQUFHLEdBQUcsVUFBVSxhQUFhLElBQUksT0FBTyxXQUFXLElBQUk7QUFDdEYsV0FBUSxPQUFPLFVBQVUsY0FBYztBQUN2QyxXQUFRLFlBQVk7QUFDcEIsV0FBUSxlQUFlO0FBQ3ZCLE1BQUksUUFBUSxLQUFLLE1BQU07QUFDdkIsTUFBSSxPQUFPO0FBQ1gsTUFBSSxnQkFBZ0I7QUFFcEIsV0FBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxRQUFJLE1BQU0sT0FBTyxNQUFNO0FBQ3JCLGVBQVEsU0FBUyxNQUFNLEdBQUc7QUFDMUIsYUFBTztBQUNQLFdBQUs7QUFDTDtBQUFBLFdBQ0s7QUFZTCxVQUFJLFdBQVcsT0FBTyxNQUFNLEtBQUs7QUFDakMsYUFBTztBQUFBO0FBQUE7QUFJWCxXQUFRLFNBQVMsTUFBTSxHQUFHO0FBQzFCLFNBQU87QUFBQTs7O0FEMUNULG9CQUFjO0FBQUEsRUFDWixZQUFZLFlBQVksYUFBYSxVQUFVLElBQUk7QUFDakQsU0FBSyxLQUFLO0FBQ1YsU0FBSyxVQUFVO0FBQ2YsU0FBSyxTQUFTO0FBQ2QsU0FBSyxTQUFTO0FBQ2QsU0FBSyxRQUFRO0FBQ2IsU0FBSyxTQUFTO0FBQ2QsU0FBSyxhQUFhO0FBQ2xCLFNBQUssY0FBYztBQUNuQixTQUFLLFdBQVc7QUFDaEIsU0FBSyxVQUFVLEtBQUssUUFBUSxLQUFLO0FBQ2pDLFNBQUssWUFBWSxLQUFLLFVBQVUsS0FBSztBQUNyQyxTQUFLLFlBQVksS0FBSyxVQUFVLEtBQUs7QUFDckMsU0FBSyxZQUFZLFlBQVksQ0FBQztBQUFBO0FBQUEsRUFHaEMsUUFBUSxHQUFHO0FBQ1QsUUFBSSxLQUFLLFNBQVM7QUFDaEIsV0FBSyxVQUFVO0FBQ2YsV0FBSyxVQUFVO0FBQ2YsVUFBSSxRQUFTLEtBQUssSUFBSSxLQUFLLFNBQVMsRUFBRSxNQUFPO0FBRTdDLFdBQUssU0FBUztBQUFBLFFBQ1osSUFBSSxLQUFLO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixHQUFHLEtBQUs7QUFBQSxRQUNSLEdBQUcsRUFBRTtBQUFBLFFBQ0wsUUFBUSxLQUFLLFNBQVUsUUFBUTtBQUFBLFFBQy9CLFFBQVEsRUFBRSxLQUFNLFFBQVE7QUFBQSxRQUd4QjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFFBQ1IsTUFBTSxFQUFFO0FBQUEsUUFDUixNQUFNLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtkLFVBQVUsR0FBRztBQUNYLFNBQUssVUFBVTtBQUNmLFNBQUssU0FBUyxFQUFFO0FBQ2hCLFNBQUssU0FBUyxFQUFFO0FBQUE7QUFBQSxFQUdsQixVQUFVLEdBQUc7QUFDWCxRQUFJLEtBQUssU0FBUztBQUNoQixVQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7QUFFM0IsVUFBSSxVQUFVLEtBQUs7QUFDbkIsVUFBSSxVQUFVLEVBQUU7QUFHaEIsV0FBSyxZQUFZLFVBQVUsR0FBRyxHQUFHLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVztBQVV4RSxrQkFBWSxTQUFTLFNBQVMsTUFBTSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBTS9DLElBQU8sa0JBQVE7OztBRXhFZjtBQUVBLHFCQUFlO0FBQUEsRUFDYixZQUFZLFlBQVksYUFBYSxVQUFVLElBQUksZUFBZTtBQUNoRSxTQUFLLFVBQVU7QUFDZixTQUFLLEtBQUs7QUFDVixTQUFLLGNBQWM7QUFDbkIsU0FBSyxhQUFhO0FBQ2xCLFNBQUssY0FBYztBQUNuQixTQUFLLFdBQVc7QUFDaEIsU0FBSyxXQUFXLEtBQUssV0FBVyxLQUFLO0FBQ3JDLFNBQUssU0FBUyxLQUFLLE9BQU8sS0FBSztBQUMvQixTQUFLLFVBQVUsS0FBSyxRQUFRLEtBQUs7QUFDakMsU0FBSyxtQkFBbUIsS0FBSyxpQkFBaUIsS0FBSztBQUNuRCxTQUFLLHNCQUFzQixLQUFLLG9CQUFvQixLQUFLO0FBQ3pELFNBQUssbUJBQW1CLFNBQVMsZUFBZTtBQUNoRCxTQUFLLFVBQVUsU0FBUyxlQUFlO0FBQ3ZDLFNBQUssU0FBUztBQUNkLFNBQUssU0FBUztBQUNkLFNBQUssZ0JBQWdCO0FBRXJCLFNBQUs7QUFBQTtBQUFBLEVBR1AsbUJBQW1CO0FBQ2pCLFNBQUssUUFBUSxpQkFBaUIsUUFBUSxLQUFLO0FBQzNDLFNBQUssUUFBUSxpQkFBaUIsU0FBUyxLQUFLO0FBQUE7QUFBQSxFQUc5QyxzQkFBc0I7QUFDcEIsU0FBSyxRQUFRLG9CQUFvQixRQUFRLEtBQUs7QUFDOUMsU0FBSyxRQUFRLG9CQUFvQixTQUFTLEtBQUs7QUFBQTtBQUFBLEVBR2pELFFBQVEsR0FBRztBQUNULE1BQUU7QUFBQTtBQUFBLEVBR0osU0FBUztBQUNQLFFBQUksS0FBSyxTQUFTO0FBQ2hCLGNBQVEsSUFBSSxnQkFBZ0IsS0FBSyxRQUFRO0FBQ3pDLFVBQUksT0FBTyxLQUFLLFFBQVEsVUFBVSxRQUFRLFVBQVUsTUFBTSxRQUFRLFlBQVksSUFBSSxRQUFRLFNBQVMsTUFBTSxRQUFRLFVBQVU7QUFDM0gsY0FBUSxJQUFJO0FBQ1osVUFBSSxRQUFRLEtBQUssa0JBQWtCLFNBQVMsWUFBWTtBQUt4RCxVQUFJLGdCQUFnQixPQUFPLGlCQUFpQixLQUFLO0FBQ2pELFVBQUksdUJBQXVCLEtBQUssUUFBUTtBQUN4QyxjQUFRLElBQUk7QUFDWixVQUFJLFFBQVEsS0FBSyxLQUFLLE9BQU8sY0FBYyxNQUFNLE1BQU0sR0FBRztBQUMxRCxVQUFJLFNBQVMsS0FBSyxLQUFLLE9BQU8sY0FBYyxPQUFPLE1BQU0sR0FBRztBQUM1RCxjQUFRLElBQUk7QUFTWixXQUFLLFNBQVM7QUFBQSxRQUNaLElBQUksS0FBSztBQUFBLFFBQ1QsTUFBTTtBQUFBLFFBQ04sR0FBRyxxQkFBcUI7QUFBQSxRQUN4QixHQUFHLHFCQUFxQjtBQUFBLFFBQ3hCLGFBQWE7QUFBQSxRQUNiLFdBQVcsS0FBSyxRQUFRO0FBQUEsUUFDeEIsTUFBTSxLQUFLLFNBQVM7QUFBQSxRQUNwQixNQUFNLEtBQUssU0FBUztBQUFBLFFBRXBCO0FBQUEsUUFDQTtBQUFBO0FBS0YsV0FBSztBQUNMLFdBQUssaUJBQWlCLE1BQU0sTUFBTTtBQUNsQyxXQUFLLGlCQUFpQixNQUFNLE9BQU87QUFDbkMsV0FBSyxpQkFBaUIsTUFBTSxVQUFVO0FBQ3RDLFdBQUssaUJBQWlCLE1BQU0sV0FBVztBQUN2QyxXQUFLLGlCQUFpQixNQUFNLFlBQVk7QUFDeEMsV0FBSyxRQUFRLFlBQVk7QUFDekIsV0FBSyxtQkFBbUI7QUFDeEIsV0FBSyxVQUFVO0FBQUE7QUFBQTtBQUFBLEVBSW5CLFdBQVcsSUFBSSxpQkFBaUIsRUFBRSxTQUFTLFNBQVMsaUJBQWlCO0FBRW5FLFNBQUssU0FBUyxHQUFHO0FBQ2pCLFNBQUssU0FBUyxHQUFHO0FBQ2pCLFNBQUssaUJBQWlCLE1BQU0sTUFBTSxHQUFHLEdBQUc7QUFDeEMsU0FBSyxpQkFBaUIsTUFBTSxPQUFPLEdBQUcsR0FBRztBQUN6QyxTQUFLLGlCQUFpQixNQUFNLFVBQVU7QUFDdEMsU0FBSyxRQUFRO0FBRWIsUUFBSSxpQkFBaUI7QUFDbkIsVUFBSSxnQkFBZ0IsU0FBUyxhQUFhO0FBQUEsaUJBWS9CLGdCQUFnQixTQUFTLFFBQVE7QUFDMUMsYUFBSyxpQkFBaUIsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLElBQUksZ0JBQWdCO0FBQ3pFLGFBQUssaUJBQWlCLE1BQU0sT0FBTyxHQUFHLGdCQUFnQixJQUFJLGdCQUFnQjtBQUMxRSxhQUFLLFFBQVEsWUFBWSxnQkFBZ0I7QUFDekMsYUFBSyxRQUFRLGdCQUFnQjtBQUM3QixhQUFLLFNBQVMsZ0JBQWdCO0FBQzlCLGVBQU8sZUFBZSxrQkFBa0IsS0FBSztBQUM3QyxlQUFPLGVBQWU7QUFBQSxhQUtqQjtBQUFBO0FBQUEsV0FTRjtBQUFBO0FBQUE7QUFBQTtBQVdYLElBQU8sbUJBQVE7OztBQ2hKZjtBQUFBLGlCQUFXO0FBQUEsRUFDVCxZQUFZLFlBQVksYUFBYSxVQUFVLElBQUk7QUFDakQsU0FBSyxLQUFLO0FBQ1YsU0FBSyxVQUFVO0FBQ2YsU0FBSyxTQUFTO0FBQ2QsU0FBSyxTQUFTO0FBQ2QsU0FBSyxhQUFhO0FBQ2xCLFNBQUssY0FBYztBQUNuQixTQUFLLFdBQVc7QUFDaEIsU0FBSyxVQUFVLEtBQUssUUFBUSxLQUFLO0FBQ2pDLFNBQUssWUFBWSxLQUFLLFVBQVUsS0FBSztBQUNyQyxTQUFLLFlBQVksS0FBSyxVQUFVLEtBQUs7QUFDckMsU0FBSyxZQUFZLFlBQVksQ0FBQztBQUFBO0FBQUEsRUFHaEMsUUFBUSxHQUFHO0FBQ1QsUUFBSSxLQUFLLFNBQVM7QUFDaEIsV0FBSyxVQUFVO0FBQ2YsV0FBSyxVQUFVO0FBQ2YsV0FBSyxTQUFTO0FBQUEsUUFDWixJQUFJLEtBQUs7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLEdBQUcsS0FBSztBQUFBLFFBQ1IsR0FBRyxLQUFLO0FBQUEsUUFDUixRQUFRLEtBQUssSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUFBLFFBQ2hDLFFBQVEsS0FBSyxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQUEsUUFDaEMsT0FBTyxLQUFLLElBQUksS0FBSyxTQUFTLEVBQUU7QUFBQSxRQUNoQyxRQUFRLEtBQUssSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUFBLFFBQ2pDLE1BQU0sRUFBRTtBQUFBLFFBQ1IsTUFBTSxFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLZCxVQUFVLEdBQUc7QUFDWCxTQUFLLFNBQVMsRUFBRTtBQUNoQixTQUFLLFNBQVMsRUFBRTtBQUNoQixTQUFLLFVBQVU7QUFBQTtBQUFBLEVBR2pCLFVBQVUsR0FBRztBQUNYLFFBQUksQ0FBQyxLQUFLLFNBQVM7QUFDakI7QUFBQTtBQUVGLFNBQUssWUFBWSxVQUFVLEdBQUcsR0FBRyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVc7QUFDeEUsU0FBSyxZQUFZO0FBQ2pCLFNBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxLQUFLO0FBQzFDLFNBQUssWUFBWSxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQ2hDLFNBQUssWUFBWTtBQUNqQixTQUFLLFlBQVk7QUFBQTtBQUFBO0FBSXJCLElBQU8sZUFBUTs7O0FDckRmO0FBRUEscUJBQWU7QUFBQSxFQUNiLFlBQVksWUFBWSxhQUFhLFVBQVUsU0FBUyxPQUFPO0FBQzdELFNBQUssS0FBSyxRQUFRO0FBQ2xCLFNBQUssVUFBVTtBQUNmLFNBQUssU0FBUztBQUNkLFNBQUssU0FBUztBQUNkLFNBQUssUUFBUTtBQUNiLFNBQUssU0FBUztBQUNkLFNBQUssYUFBYTtBQUNsQixTQUFLLGNBQWM7QUFDbkIsU0FBSyxXQUFXO0FBQ2hCLFNBQUssVUFBVSxLQUFLLFFBQVEsS0FBSztBQUNqQyxTQUFLLFlBQVksS0FBSyxVQUFVLEtBQUs7QUFDckMsU0FBSyxZQUFZLEtBQUssVUFBVSxLQUFLO0FBQ3JDLFNBQUssVUFBVTtBQUNmLFNBQUssZ0JBQWdCO0FBQUE7QUFBQSxFQUl2QixVQUFVLEdBQUc7QUFDWCxTQUFLLFVBQVU7QUFDZixTQUFLLFNBQVMsRUFBRTtBQUNoQixTQUFLLFNBQVMsRUFBRTtBQUVoQixTQUFLLFFBQVEsS0FBSyxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUs7QUFDNUMsU0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLFFBQVEsSUFBSSxFQUFFO0FBQ3pDLFNBQUs7QUFBQTtBQUFBLEVBR1AsUUFBUSxHQUFHO0FBQ1QsTUFBRTtBQUNGLFFBQUksS0FBSyxTQUFTO0FBQ2hCLFdBQUssVUFBVTtBQUVmLFVBQUksS0FBSyxRQUFRLFNBQVMsYUFBYTtBQUNyQyxhQUFLLFNBQVM7QUFBQSxVQUNaLElBQUksS0FBSyxRQUFRO0FBQUEsVUFDakIsTUFBTTtBQUFBLFVBQ04sR0FBRyxFQUFFO0FBQUEsVUFDTCxHQUFHLEVBQUU7QUFBQSxVQUNMLE9BQU8sS0FBSyxRQUFRO0FBQUEsVUFDcEIsUUFBUSxLQUFLLFFBQVE7QUFBQSxVQUNyQixNQUFNLEVBQUU7QUFBQSxVQUNSLE1BQU0sRUFBRTtBQUFBO0FBQUEsaUJBRUQsS0FBSyxRQUFRLFNBQVMsU0FBUztBQUN4QyxZQUFJLE9BQU8sS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLElBQUksRUFBRSxLQUFLLEtBQUssUUFBUSxRQUFRLEVBQUUsS0FBSyxLQUFLLFFBQVE7QUFDaEcsWUFBSSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxJQUFJLEVBQUUsS0FBSyxLQUFLLFFBQVEsU0FBUyxFQUFFLEtBQUssS0FBSyxRQUFRO0FBQ2pHLGFBQUssU0FBUztBQUFBLFVBQ1osSUFBSSxLQUFLO0FBQUEsVUFDVCxNQUFNO0FBQUEsVUFDTixHQUFHLEVBQUU7QUFBQSxVQUNMLEdBQUcsRUFBRTtBQUFBLFVBQ0wsUUFBUSxLQUFLLElBQUksTUFBTSxFQUFFO0FBQUEsVUFDekIsUUFBUSxLQUFLLElBQUksTUFBTSxFQUFFO0FBQUEsVUFDekIsT0FBTyxLQUFLLFFBQVE7QUFBQSxVQUNwQixRQUFRLEtBQUssUUFBUTtBQUFBLFVBQ3JCO0FBQUEsVUFDQTtBQUFBO0FBQUEsaUJBRU8sS0FBSyxRQUFRLFNBQVMsUUFBUTtBQUN2QyxZQUFJLE9BQU8sS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLElBQUksRUFBRSxLQUFLLEtBQUssUUFBUSxRQUFRLEVBQUUsS0FBSyxLQUFLLFFBQVE7QUFDaEcsWUFBSSxPQUFPLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxJQUFJLEVBQUUsS0FBSyxLQUFLLFFBQVEsU0FBUyxFQUFFLEtBQUssS0FBSyxRQUFRO0FBQ2pHLGFBQUssU0FBUztBQUFBLFVBQ1osSUFBSSxLQUFLO0FBQUEsVUFDVCxNQUFNO0FBQUEsVUFDTixHQUFHLEVBQUU7QUFBQSxVQUNMLEdBQUcsRUFBRTtBQUFBLFVBQ0wsUUFBUSxLQUFLLElBQUksRUFBRSxJQUFJO0FBQUEsVUFDdkIsUUFBUSxLQUFLLElBQUksRUFBRSxJQUFJO0FBQUEsVUFDdkIsT0FBTyxLQUFLLFFBQVE7QUFBQSxVQUNwQixRQUFRLEtBQUssUUFBUTtBQUFBLFVBQ3JCO0FBQUEsVUFDQTtBQUFBO0FBQUEsaUJBRU8sS0FBSyxRQUFRLFNBQVMsVUFBVTtBQUN6QyxhQUFLLFNBQVM7QUFBQSxVQUNaLElBQUksS0FBSztBQUFBLFVBQ1QsTUFBTTtBQUFBLFVBQ04sR0FBRyxFQUFFO0FBQUEsVUFDTCxHQUFHLEVBQUU7QUFBQSxVQUNMLFFBQVEsS0FBSyxRQUFRO0FBQUEsVUFDckIsT0FBTyxLQUFLLFFBQVE7QUFBQSxVQUNwQixRQUFRLEtBQUssUUFBUTtBQUFBO0FBQUEsaUJBRWQsS0FBSyxRQUFRLFNBQVMsV0FBVztBQUMxQyxhQUFLLFNBQVM7QUFBQSxVQUNaLElBQUksS0FBSztBQUFBLFVBQ1QsTUFBTTtBQUFBLFVBQ04sR0FBRyxFQUFFO0FBQUEsVUFDTCxHQUFHLEVBQUU7QUFBQSxVQUNMLFFBQVEsRUFBRSxLQUFNLEtBQUssUUFBUSxRQUFRO0FBQUEsVUFDckMsUUFBUSxFQUFFLEtBQU0sS0FBSyxRQUFRLFFBQVE7QUFBQSxVQUdyQyxPQUFPLEtBQUssUUFBUTtBQUFBLFVBQ3BCLFFBQVEsS0FBSyxRQUFRO0FBQUEsVUFDckIsTUFBTSxFQUFFLEtBQU0sS0FBSyxRQUFRLFFBQVE7QUFBQSxVQUNuQyxNQUFNLEVBQUUsS0FBSyxLQUFLLFFBQVE7QUFBQTtBQUFBLGlCQUVuQixLQUFLLFFBQVEsU0FBUyxRQUFRO0FBQ3ZDLGFBQUssU0FBUztBQUFBLFVBQ1osSUFBSSxLQUFLO0FBQUEsVUFDVCxNQUFNO0FBQUEsVUFDTixHQUFHLEVBQUU7QUFBQSxVQUNMLEdBQUcsRUFBRTtBQUFBLFVBQ0wsYUFBYSxLQUFLLFFBQVE7QUFBQSxVQUMxQixNQUFNLEVBQUUsS0FBSyxPQUFPLEtBQUssUUFBUTtBQUFBLFVBQ2pDLE1BQU0sRUFBRSxLQUFLLEtBQUssUUFBUTtBQUFBLFVBRTFCLE9BQU8sT0FBTyxLQUFLLFFBQVE7QUFBQSxVQUMzQixRQUFRLEtBQUssUUFBUTtBQUFBO0FBQUE7QUFJekIsV0FBSyxVQUFVO0FBQUE7QUFBQTtBQUFBLEVBSW5CLFVBQVUsR0FBRztBQUNYLFFBQUksQ0FBQyxLQUFLLFNBQVM7QUFDakI7QUFBQTtBQUVGLE1BQUU7QUFDRixRQUFJLEtBQUssUUFBUSxTQUFTLGFBQWE7QUFDckMsV0FBSyxZQUFZLFVBQVUsR0FBRyxHQUFHLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVztBQUN4RSxXQUFLLFlBQVksV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUTtBQUFBLGVBQ2hFLEtBQUssUUFBUSxTQUFTLFNBQVM7QUFDeEMsV0FBSyxZQUFZLFVBQVUsR0FBRyxHQUFHLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVztBQUN4RSxVQUFJLFVBQVU7QUFDZCxVQUFJLFFBQVEsS0FBSyxJQUFJLEtBQUssUUFBUSxJQUFJLEVBQUU7QUFDeEMsVUFBSSxRQUFRLEtBQUssSUFBSSxLQUFLLFFBQVEsSUFBSSxFQUFFO0FBQ3hDLFVBQUksSUFBSSxLQUFLLFFBQVEsSUFBSTtBQUN6QixVQUFJLElBQUksS0FBSyxRQUFRLElBQUk7QUFDekIsVUFBSTtBQUNKLFVBQUk7QUFDSixVQUFJLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxHQUFHO0FBQ3RDLGVBQU8sRUFBRSxLQUFLLEtBQUssUUFBUTtBQUFBLGFBQ3RCO0FBQ0wsZUFBTyxFQUFFLEtBQUssS0FBSyxRQUFRO0FBQUE7QUFHN0IsVUFBSSxLQUFLLFFBQVEsT0FBTyxLQUFLLFFBQVEsR0FBRztBQUN0QyxlQUFPLEVBQUUsS0FBSyxLQUFLLFFBQVE7QUFBQSxhQUN0QjtBQUNMLGVBQU8sRUFBRSxLQUFLLEtBQUssUUFBUTtBQUFBO0FBSTdCLFVBQUksS0FBSyxPQUFPO0FBQ2hCLFVBQUksS0FBSyxPQUFPO0FBQ2hCLFVBQUksUUFBUSxLQUFLLE1BQU0sSUFBSTtBQUMzQixXQUFLLFlBQVk7QUFDakIsV0FBSyxZQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDaEMsV0FBSyxZQUFZLE9BQU8sTUFBTTtBQUM5QixXQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsS0FBSyxJQUFJLFFBQVEsS0FBSyxLQUFLLElBQUksT0FBTyxVQUFVLEtBQUssSUFBSSxRQUFRLEtBQUssS0FBSztBQUNwSCxXQUFLLFlBQVksT0FBTyxNQUFNO0FBQzlCLFdBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxLQUFLLElBQUksUUFBUSxLQUFLLEtBQUssSUFBSSxPQUFPLFVBQVUsS0FBSyxJQUFJLFFBQVEsS0FBSyxLQUFLO0FBQ3BILFdBQUssWUFBWTtBQUNqQixXQUFLLFlBQVk7QUFBQSxlQUNSLEtBQUssUUFBUSxTQUFTLFFBQVE7QUFDdkMsV0FBSyxZQUFZLFVBQVUsR0FBRyxHQUFHLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVztBQUN4RSxVQUFJO0FBQ0osVUFBSTtBQUNKLFVBQUksS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRLEdBQUc7QUFDdEMsZUFBTyxFQUFFLEtBQUssS0FBSyxRQUFRO0FBQUEsYUFDdEI7QUFDTCxlQUFPLEVBQUUsS0FBSyxLQUFLLFFBQVE7QUFBQTtBQUc3QixVQUFJLEtBQUssUUFBUSxPQUFPLEtBQUssUUFBUSxHQUFHO0FBQ3RDLGVBQU8sRUFBRSxLQUFLLEtBQUssUUFBUTtBQUFBLGFBQ3RCO0FBQ0wsZUFBTyxFQUFFLEtBQUssS0FBSyxRQUFRO0FBQUE7QUFFN0IsV0FBSyxZQUFZO0FBQ2pCLFdBQUssWUFBWSxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQ2hDLFdBQUssWUFBWSxPQUFPLE1BQU07QUFDOUIsV0FBSyxZQUFZO0FBQ2pCLFdBQUssWUFBWTtBQUFBLGVBQ1IsS0FBSyxRQUFRLFNBQVMsVUFBVTtBQUN6QyxXQUFLLFlBQVksVUFBVSxHQUFHLEdBQUcsS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXO0FBQ3hFLFdBQUssWUFBWTtBQUNqQixXQUFLLFlBQVksSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEtBQUssUUFBUSxRQUFRLEdBQUcsSUFBSSxLQUFLO0FBQ2xFLFdBQUssWUFBWTtBQUFBLGVBQ1IsS0FBSyxRQUFRLFNBQVMsV0FBVztBQUMxQyxXQUFLLFlBQVksVUFBVSxHQUFHLEdBQUcsS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXO0FBQ3hFLGtCQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksS0FBSyxRQUFRLFFBQVEsR0FBRyxLQUFLO0FBQUEsZUFDNUMsS0FBSyxRQUFRLFNBQVMsUUFBUTtBQUN2QyxXQUFLLFlBQVksVUFBVSxHQUFHLEdBQUcsS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXO0FBQ3hFLFVBQUksUUFBUSxLQUFLLGtCQUFrQixTQUFTLFlBQVk7QUFDeEQsZUFBUyxLQUFLLFFBQVEsYUFBYSxLQUFLLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxLQUFLLFFBQVEsT0FBTyxRQUFXO0FBQUE7QUFBQTtBQUFBLEVBT3BHLDZCQUE2QjtBQUUzQixRQUFJLEtBQUssUUFBUSxTQUFTLGFBQWE7QUFDckMsV0FBSyxZQUFZLFdBQVcsS0FBSyxRQUFRLEdBQUcsS0FBSyxRQUFRLEdBQUcsS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRO0FBQUEsZUFDcEYsS0FBSyxRQUFRLFNBQVMsU0FBUztBQUN4QyxVQUFJLFVBQVU7QUFDZCxVQUFJLEtBQUssS0FBSyxRQUFRLE9BQU8sS0FBSyxRQUFRO0FBQzFDLFVBQUksS0FBSyxLQUFLLFFBQVEsT0FBTyxLQUFLLFFBQVE7QUFDMUMsVUFBSSxRQUFRLEtBQUssTUFBTSxJQUFJO0FBQzNCLFdBQUssWUFBWTtBQUNqQixXQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsR0FBRyxLQUFLLFFBQVE7QUFDckQsV0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRO0FBQ3hELFdBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLFVBQVUsS0FBSyxJQUFJLFFBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxRQUFRLE9BQU8sVUFBVSxLQUFLLElBQUksUUFBUSxLQUFLLEtBQUs7QUFDOUksV0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE1BQU0sS0FBSyxRQUFRO0FBQ3hELFdBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLFVBQVUsS0FBSyxJQUFJLFFBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxRQUFRLE9BQU8sVUFBVSxLQUFLLElBQUksUUFBUSxLQUFLLEtBQUs7QUFDOUksV0FBSyxZQUFZO0FBQ2pCLFdBQUssWUFBWTtBQUFBLGVBQ1IsS0FBSyxRQUFRLFNBQVMsUUFBUTtBQUN2QyxXQUFLLFlBQVk7QUFDakIsV0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLEdBQUcsS0FBSyxRQUFRO0FBQ3JELFdBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxNQUFNLEtBQUssUUFBUTtBQUN4RCxXQUFLLFlBQVk7QUFDakIsV0FBSyxZQUFZO0FBQUEsZUFDUixLQUFLLFFBQVEsU0FBUyxVQUFVO0FBQ3pDLFdBQUssWUFBWTtBQUNqQixXQUFLLFlBQVksSUFBSSxLQUFLLFFBQVEsR0FBRyxLQUFLLFFBQVEsR0FBRyxLQUFLLFFBQVEsUUFBUSxHQUFHLElBQUksS0FBSztBQUN0RixXQUFLLFlBQVk7QUFBQSxlQUNSLEtBQUssUUFBUSxTQUFTLFdBQVc7QUFDMUMsVUFBSSxVQUFVLEtBQUssUUFBUTtBQUMzQixVQUFJLFVBQVUsS0FBSyxRQUFRO0FBQzNCLFVBQUksT0FBTyxLQUFLLFFBQVEsSUFBSSxLQUFLLFFBQVE7QUFDekMsa0JBQVksU0FBUyxTQUFTLE1BQU0sS0FBSztBQUFBLGVBQ2hDLEtBQUssUUFBUSxTQUFTLFFBQVE7QUFDdkMsVUFBSSxRQUFRLEtBQUssa0JBQWtCLFNBQVMsWUFBWTtBQUN4RCxlQUFTLEtBQUssUUFBUSxhQUFhLEtBQUssYUFBYSxLQUFLLFFBQVEsR0FBRyxLQUFLLFFBQVEsR0FBRyxLQUFLLFFBQVEsT0FBTyxRQUFXO0FBQUE7QUFBQTtBQUFBO0FBSzFILElBQU8sbUJBQVE7OztBQy9PZjtBQUFBLGlCQUFXO0FBQUEsRUFDVCxZQUFZLFlBQVksYUFBYSxVQUFVLElBQUk7QUFDakQsU0FBSyxLQUFLO0FBQ1YsU0FBSyxVQUFVO0FBQ2YsU0FBSyxTQUFTO0FBQ2QsU0FBSyxTQUFTO0FBQ2QsU0FBSyxRQUFRO0FBQ2IsU0FBSyxTQUFTO0FBQ2QsU0FBSyxhQUFhO0FBQ2xCLFNBQUssY0FBYztBQUNuQixTQUFLLFdBQVc7QUFDaEIsU0FBSyxVQUFVLEtBQUssUUFBUSxLQUFLO0FBQ2pDLFNBQUssWUFBWSxLQUFLLFVBQVUsS0FBSztBQUNyQyxTQUFLLFlBQVksS0FBSyxVQUFVLEtBQUs7QUFDckMsU0FBSyxZQUFZLFlBQVksQ0FBQztBQUFBO0FBQUEsRUFHaEMsUUFBUSxHQUFHO0FBQ1QsUUFBSSxLQUFLLFNBQVM7QUFDaEIsV0FBSyxVQUFVO0FBQ2YsV0FBSyxVQUFVO0FBQ2YsV0FBSyxTQUFTO0FBQUEsUUFDWixJQUFJLEtBQUs7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLEdBQUcsS0FBSyxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQUEsUUFDM0IsR0FBRyxLQUFLLElBQUksS0FBSyxRQUFRLEVBQUU7QUFBQSxRQUMzQixPQUFPLEtBQUs7QUFBQSxRQUNaLFFBQVEsS0FBSztBQUFBLFFBQ2IsTUFBTSxLQUFLLElBQUksS0FBSyxRQUFRLEVBQUU7QUFBQSxRQUM5QixNQUFNLEtBQUssSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS3BDLFVBQVUsR0FBRztBQUNYLFNBQUssVUFBVTtBQUNmLFNBQUssU0FBUyxFQUFFO0FBQ2hCLFNBQUssU0FBUyxFQUFFO0FBQUE7QUFBQSxFQUdsQixVQUFVLEdBQUc7QUFDWCxRQUFJLEtBQUssU0FBUztBQUNoQixVQUFJLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLO0FBQzVCLFVBQUksSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUs7QUFDNUIsVUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFLEtBQUssS0FBSztBQUNqQyxVQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUUsS0FBSyxLQUFLO0FBRWxDLFdBQUssWUFBWSxVQUFVLEdBQUcsR0FBRyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVc7QUFFeEUsVUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRO0FBQ3JCO0FBQUE7QUFFRixXQUFLLFFBQVE7QUFDYixXQUFLLFNBQVM7QUFDZCxXQUFLLFlBQVksV0FBVyxHQUFHLEdBQUcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUsvQyxJQUFPLG9CQUFROzs7QUMzRGY7QUFBQSxvQkFBa0I7Ozs7OztBQUdYLHlCQUF5QjtBQUM5QixTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBR3JDLG9CQUFvQjtBQUNsQixTQUNFLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU8sRUFBRSxPQUFPO0FBQUEsSUFBVyxXQUFVO0FBQUEsSUFBVyxJQUFHO0FBQUEsS0FDdEQsb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQVcsSUFBRztBQUFBLElBQWEsTUFBSztBQUFBLElBQVUsaUJBQWU7QUFBQTtBQUFBO0FBTTlFLElBQU8sb0JBQVE7OztBQ2hCZjtBQUFBLG9CQUFrQjs7Ozs7O0FBR1gsOEJBQThCO0FBQ25DLFNBQU8sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBQUE7QUFHckMsdUJBQXVCLEVBQUUsV0FBVyxRQUFRLFdBQVc7QUFDckQsU0FDRSxvREFBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvREFBQyxRQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBUSxXQUFVO0FBQUEsSUFBWSxTQUFTO0FBQUEsS0FDOUMsb0RBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQUssUUFBTztBQUFBLElBQUssU0FBUTtBQUFBLElBQVksTUFBSztBQUFBLElBQU8sT0FBTTtBQUFBLEtBQ2hFLG9EQUFDLFFBQUQ7QUFBQSxJQUFNLFVBQVM7QUFBQSxJQUFVLFVBQVM7QUFBQSxJQUNoQyxHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsUUFHWCxvREFBQyxRQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBWSxXQUFVO0FBQUEsS0FBYyxLQUFLLE1BQU0sWUFBWSxPQUNwRSxvREFBQyxRQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBTyxXQUFVO0FBQUEsSUFBWSxTQUFTO0FBQUEsS0FDN0Msb0RBQUMsT0FBRDtBQUFBLElBQUssT0FBTTtBQUFBLElBQUssUUFBTztBQUFBLElBQUssU0FBUTtBQUFBLElBQVksTUFBSztBQUFBLElBQU8sT0FBTTtBQUFBLEtBQ2hFLG9EQUFDLFFBQUQ7QUFBQSxJQUFNLFVBQVM7QUFBQSxJQUFVLFVBQVM7QUFBQSxJQUNoQyxHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUE7QUFBQTtBQVdqQixJQUFPLHlCQUFROzs7QUNqQ2Y7QUFBQSxnQkFBVTtBQUFBLEVBQ1IsY0FBYztBQUFBO0FBQUEsRUFFZCxzQkFBc0I7QUFDcEIsV0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDdEMsV0FBSyxVQUFVLEtBQUssVUFBVSxLQUFLLGVBQWU7QUFDbEQsV0FBSyxRQUFRLGtCQUFrQixDQUFDLFVBQVU7QUFDeEMsYUFBSyxLQUFLLE1BQU0sT0FBTztBQUN2QixhQUFLLEdBQUcsa0JBQWtCLHFCQUFxQjtBQUFBLFVBQzdDLEtBQUs7QUFBQTtBQUFBO0FBSVQsV0FBSyxRQUFRLFVBQVUsQ0FBQyxVQUFVO0FBQ2hDLGVBQU87QUFBQTtBQUVULFdBQUssUUFBUSxZQUFZLENBQUMsVUFBVTtBQUNsQyxhQUFLLEtBQUssTUFBTSxPQUFPO0FBQ3ZCLGdCQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPZCxtQkFBbUIsTUFBTSxFQUFFLE1BQU0sTUFBTSxrQkFBa0IsUUFBUTtBQUMvRCxXQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUN0QyxZQUFNLFdBQVc7QUFDakIsVUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDLEtBQUssR0FBRyxhQUFhO0FBQ3BDLGlCQUFTLEtBQUssS0FBSztBQUFBO0FBRXJCLGNBQVEsSUFBSSxVQUFVLEtBQUssTUFBTTtBQUMvQixjQUFNLGNBQWMsS0FBSyxHQUFHLFlBQVksQ0FBQyxzQkFBc0I7QUFDL0QsY0FBTSxhQUFhLFlBQVksWUFBWTtBQUMzQyxZQUFJLFNBQVMsWUFBWTtBQUN2QixlQUFLLGlCQUFpQixXQUFXLElBQUk7QUFBQSxlQUNoQztBQUNMLGVBQUssaUJBQWlCLFdBQVcsSUFBSSxpQkFBaUI7QUFBQTtBQUV4RCxhQUFLLGVBQWUsWUFBWSxDQUFDLFVBQVU7QUFDekMsa0JBQVE7QUFBQTtBQUVWLGFBQUssZUFBZSxVQUFVLENBQUMsVUFBVTtBQUN2QyxpQkFBTyx1Q0FBdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTXRELGVBQWUsS0FBSztBQUNsQixXQUFPLEtBQUssbUJBQW1CLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxxQkFBcUI7QUFDN0UsWUFBTSxhQUFhO0FBQUEsUUFDakIsU0FBUztBQUFBLFFBQ1QsU0FBUyxpQkFBaUIsT0FBTztBQUFBO0FBRW5DLGFBQU8saUJBQWlCLE9BQU87QUFBQTtBQUFBO0FBQUEsRUFLbkMsU0FBUyxNQUFNLEtBQUs7QUFDbEIsU0FBSyxtQkFBbUIsYUFBYSxFQUFFLGlCQUFpQixNQUFNLE9BQU8sS0FBSyxDQUFDLG1CQUFtQjtBQUc1RixjQUFRLElBQUksc0NBQXNDO0FBQUE7QUFBQTtBQUFBO0FBTXhELElBQU8sY0FBUTs7O0FDdEVmO0FBQUEsb0JBQWlEO0FBRTFDLElBQU0sZ0JBQWdCLGlDQUFjO0FBTXBDLHdCQUF3QixFQUFFLFFBQVEsWUFBWTtBQUNuRCxTQUFPLG9EQUFDLGNBQWMsVUFBZjtBQUFBLElBQXdCLE9BQU87QUFBQSxLQUFTO0FBQUE7OztBZlUxQywrQkFBK0I7QUFDcEMsU0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUlyQyxJQUFJLFFBQVE7QUFBQSxFQUNWLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLFNBQVM7QUFBQSxFQUNULFFBQVE7QUFBQTtBQUdWLElBQUksYUFBYTtBQUFBLEVBQ2YsZUFBZTtBQUFBLEVBQ2YsY0FBYztBQUFBLEVBQ2QsZ0JBQWlCLE1BQU0sS0FBTTtBQUFBO0FBSy9CLGtDQUE0QixzQkFBTSxVQUFVO0FBQUEsRUFDMUMsWUFBWSxPQUFPO0FBQ2pCLFVBQU07QUFDTixTQUFLLFFBQVE7QUFBQSxNQUNYLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxPQUNMO0FBRUwsU0FBSyxvQkFBb0IsS0FBSyxrQkFBa0IsS0FBSztBQUNyRCxTQUFLLGFBQWEsS0FBSyxXQUFXLEtBQUs7QUFDdkMsU0FBSyxjQUFjLEtBQUssWUFBWSxLQUFLO0FBQ3pDLFNBQUssVUFBVSxLQUFLLFFBQVEsS0FBSztBQUNqQyxTQUFLLDJCQUEyQixLQUFLLHlCQUF5QixLQUFLO0FBQ25FLFNBQUssNkJBQTZCLEtBQUssMkJBQTJCLEtBQUs7QUFDdkUsU0FBSyxtQkFBbUIsS0FBSyxpQkFBaUIsS0FBSztBQUNuRCxTQUFLLFlBQVksS0FBSyxVQUFVLEtBQUs7QUFDckMsU0FBSyxrQkFBa0IsS0FBSyxnQkFBZ0IsS0FBSztBQUNqRCxTQUFLLHNCQUFzQixLQUFLLG9CQUFvQixLQUFLO0FBQ3pELFNBQUssY0FBYyxLQUFLLFlBQVksS0FBSztBQUN6QyxTQUFLLFlBQVksS0FBSyxVQUFVLEtBQUs7QUFDckMsU0FBSyxZQUFZLEtBQUssVUFBVSxLQUFLO0FBQ3JDLFNBQUssY0FBYyxLQUFLLFlBQVksS0FBSztBQUN6QyxTQUFLLFdBQVcsS0FBSyxTQUFTLEtBQUs7QUFDbkMsU0FBSyxTQUFTLEtBQUssT0FBTyxLQUFLO0FBQy9CLFNBQUssVUFBVSxLQUFLLFFBQVEsS0FBSztBQUVqQyxTQUFLLE1BQU0sSUFBSTtBQUVmLFNBQUssYUFBYSxzQkFBTTtBQUN4QixTQUFLLGFBQWEsc0JBQU07QUFFeEIsU0FBSyxrQkFBa0I7QUFHdkIsU0FBSyxLQUFLO0FBR1YsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxrQkFBa0I7QUFLdkIsU0FBSyxVQUFVO0FBQ2YsU0FBSyxVQUFVO0FBQUE7QUFBQSxFQUtqQixvQkFBb0I7QUFFbEIsU0FBSyxJQUFJLGVBQWUscUJBQXFCLEtBQUssQ0FBQyxTQUFTO0FBQzFELFVBQUksUUFBUSxLQUFLLFVBQVUsR0FBRztBQUM1QixhQUFLLFNBQVMsRUFBRSxRQUFRLFFBQVEsTUFBTTtBQUNwQyxlQUFLLEtBQUssS0FBSyxTQUFTO0FBQ3hCLGVBQUs7QUFBQTtBQUFBO0FBQUEsT0FHUixNQUFNLFNBQU87QUFDZCxjQUFRLElBQUk7QUFBQTtBQUVkLFNBQUssU0FBUyxFQUFFLGFBQWEsT0FBTyxZQUFZLGNBQWMsT0FBTztBQUNyRSxTQUFLLGNBQWMsS0FBSyxXQUFXLFFBQVEsV0FBVztBQUN0RCxTQUFLLGNBQWMsS0FBSyxXQUFXLFFBQVEsV0FBVztBQUN0RCxTQUFLLFlBQVksY0FBYyxLQUFLLE1BQU0sa0JBQWtCLFNBQVMsWUFBWTtBQUNqRixTQUFLLFlBQVksWUFBWTtBQUc3QixTQUFLLFlBQVksWUFBWSxLQUFLLE1BQU0sa0JBQWtCLFNBQVMsWUFBWTtBQUMvRSxTQUFLLFlBQVksU0FBUyxHQUFHLEdBQUcsS0FBSyxXQUFXLFFBQVEsT0FBTyxLQUFLLFdBQVcsUUFBUTtBQUV2RixTQUFLLFFBQVE7QUFFYixRQUFJLGNBQWMsS0FBSyxNQUFNLEtBQUssTUFBTTtBQUV4QyxTQUFLLE9BQU8sSUFBSSxZQUFZLEtBQUssV0FBVyxTQUFTLEtBQUssYUFBYSxLQUFLLFdBQVcsS0FBSztBQUM1RixTQUFLO0FBQUE7QUFBQSxFQUdQLHVCQUF1QjtBQUNyQixTQUFLO0FBQUE7QUFBQSxFQUdQLG9CQUFvQjtBQUNsQixTQUFLLFdBQVcsUUFBUSxpQkFBaUIsYUFBYSxLQUFLLFNBQVM7QUFDcEUsU0FBSyxXQUFXLFFBQVEsaUJBQWlCLGFBQWEsS0FBSyxTQUFTO0FBQ3BFLFNBQUssV0FBVyxRQUFRLGlCQUFpQixXQUFXLEtBQUssU0FBUztBQUNsRSxTQUFLLFdBQVcsUUFBUSxpQkFBaUIsWUFBWSxLQUFLLGtCQUFrQjtBQUM1RSxhQUFTLGlCQUFpQixXQUFXLEtBQUssV0FBVztBQUNyRCxhQUFTLGlCQUFpQixTQUFTLEtBQUssaUJBQWlCO0FBQ3pELGFBQVMsaUJBQWlCLFNBQVMsS0FBSyxhQUFhO0FBRXJELFdBQU8saUJBQWlCLFVBQVUsS0FBSztBQUFBO0FBQUEsRUFHekMsdUJBQXVCO0FBQ3JCLFNBQUssV0FBVyxRQUFRLG9CQUFvQixhQUFhLEtBQUssU0FBUztBQUN2RSxTQUFLLFdBQVcsUUFBUSxvQkFBb0IsYUFBYSxLQUFLLFNBQVM7QUFDdkUsU0FBSyxXQUFXLFFBQVEsb0JBQW9CLFdBQVcsS0FBSyxTQUFTO0FBQ3JFLFNBQUssV0FBVyxRQUFRLG9CQUFvQixZQUFZLEtBQUssa0JBQWtCO0FBQy9FLGFBQVMsb0JBQW9CLFdBQVcsS0FBSyxXQUFXO0FBQ3hELGFBQVMsb0JBQW9CLFNBQVMsS0FBSyxpQkFBaUI7QUFDNUQsYUFBUyxvQkFBb0IsU0FBUyxLQUFLLGFBQWE7QUFDeEQsV0FBTyxvQkFBb0IsVUFBVSxLQUFLO0FBQUE7QUFBQSxFQUk1QyxPQUFPLEdBQUc7QUFDUixNQUFFO0FBQ0YsUUFBSSxLQUFLLE1BQU0saUJBQWlCLEtBQUs7QUFDbkM7QUFBQTtBQUVGLFNBQUssU0FBUyxDQUFDLGNBQWM7QUFDM0IsVUFBSSxlQUFlLFVBQVUsZUFBZTtBQUM1QyxVQUFJLGlCQUFrQixNQUFNLGVBQWdCO0FBQzVDLGFBQU8saUNBQ0YsWUFERTtBQUFBLFFBRUwsZUFBZSxVQUFVLGdCQUFnQjtBQUFBLFFBQ3pDO0FBQUEsUUFDQTtBQUFBO0FBQUEsT0FFRCxNQUFNO0FBQ1AsV0FBSyxJQUFJLFNBQVMsS0FBSyxNQUFNLGVBQWU7QUFDNUMsV0FBSztBQUFBO0FBQUE7QUFBQSxFQUlULFFBQVEsR0FBRztBQUNULE1BQUU7QUFDRixRQUFJLEtBQUssTUFBTSxpQkFBaUIsR0FBRztBQUNqQztBQUFBO0FBRUYsU0FBSyxTQUFTLENBQUMsY0FBYztBQUMzQixVQUFJLGVBQWUsVUFBVSxlQUFlO0FBQzVDLFVBQUksaUJBQWtCLE1BQU0sZUFBZ0I7QUFDNUMsYUFBTyxpQ0FDRixZQURFO0FBQUEsUUFFTCxlQUFlLFVBQVUsZ0JBQWdCO0FBQUEsUUFDekM7QUFBQSxRQUNBO0FBQUE7QUFBQSxPQUVELE1BQU07QUFDUCxXQUFLO0FBQUE7QUFBQTtBQUFBLEVBS1QsV0FBVyxPQUFPLEtBQUssTUFBTTtBQUMzQixRQUFJLEtBQUssTUFBTSxRQUFRO0FBQ3JCLFdBQUssU0FBUyxFQUFFLGNBQWMsU0FBUyxNQUFNO0FBQzNDLFlBQUksY0FBYyxLQUFLLE1BQU0sS0FBSyxNQUFNO0FBQ3hDLFlBQUksQ0FBQyxlQUFlLGdCQUFnQixVQUFVO0FBQzVDO0FBQUE7QUFHRixZQUFJLENBQUMsSUFBSTtBQUNQLGVBQUssS0FBSyxLQUFLLEtBQUs7QUFDcEIsZUFBSyxPQUFPLElBQUksWUFBWSxLQUFLLFdBQVcsU0FBUyxLQUFLLGFBQWEsS0FBSyxXQUFXLEtBQUssSUFBSSxLQUFLLE1BQU07QUFBQSxlQUN0RztBQUNMLGVBQUssT0FBTyxJQUFJLFlBQVksS0FBSyxXQUFXLFNBQVMsS0FBSyxhQUFhLEtBQUssV0FBVyxJQUFJLEtBQUssTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNOUcsU0FBUyxHQUFHO0FBQ1YsU0FBSyxTQUFTLEVBQUUsYUFBYSxPQUFPLFlBQVksY0FBYyxPQUFPLGVBQWUsTUFBTTtBQUN4RixXQUFLO0FBQUE7QUFBQTtBQUFBLEVBSVQsUUFBUSxJQUFJO0FBQ1YsT0FBRyxLQUFLLEdBQUc7QUFDWCxPQUFHLEtBQUssR0FBRztBQUNYLFNBQUssUUFBUSxLQUFLLGFBQWEsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFHaEQsUUFBSSxLQUFLLE1BQU0saUJBQWlCLFVBQVU7QUFDeEMsVUFBSSxHQUFHLFNBQVMsYUFBYTtBQUMzQixhQUFLLGlCQUFpQixHQUFHO0FBQ3pCLGFBQUssaUJBQWlCLEdBQUc7QUFBQSxpQkFDaEIsR0FBRyxTQUFTLGFBQWE7QUFDbEMsWUFBSSxLQUFLLGtCQUFrQixLQUFLLGdCQUFnQjtBQUM5QyxjQUFJLFFBQVEsS0FBSyxJQUFJLEtBQUssaUJBQWlCLEdBQUc7QUFDOUMsY0FBSSxRQUFRLEtBQUssSUFBSSxLQUFLLGlCQUFpQixHQUFHO0FBQzlDLGNBQUksUUFBUSxNQUFNLFFBQVEsSUFBSTtBQUM1QixpQkFBSyxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsYUFHckI7QUFDTCxhQUFLLGlCQUFpQjtBQUN0QixhQUFLLGlCQUFpQjtBQUN0QixhQUFLLGlCQUFpQjtBQUFBO0FBQUEsV0FJbkI7QUFDTCxXQUFLLGlCQUFpQjtBQUN0QixXQUFLLGlCQUFpQjtBQUN0QixXQUFLLGlCQUFpQjtBQUFBO0FBSXhCLFFBQUksS0FBSyxnQkFBZ0I7QUFTdkIsVUFBSSxDQUFDLEtBQUssaUJBQWlCO0FBQ3pCLFdBQUcsS0FBSyxLQUFLLHlCQUF5QixHQUFHLElBQUksS0FBSztBQUNsRCxXQUFHLEtBQUssS0FBSyx5QkFBeUIsR0FBRyxJQUFJLEtBQUs7QUFFbEQsWUFBSSxrQkFBa0Isc0JBQXNCLEtBQUsseUJBQXlCLEtBQUssaUJBQWlCLEtBQUssVUFBVSxLQUFLLHlCQUF5QixLQUFLLGlCQUFpQixLQUFLLFVBQVUsS0FBSyxNQUFNO0FBQzdMLFlBQUksaUJBQWlCO0FBQ25CLGVBQUssa0JBQWtCO0FBQ3ZCLGNBQUksU0FBUyxLQUFLLE1BQU0sT0FBTyxPQUFPLFdBQVMsTUFBTSxPQUFPLGdCQUFnQjtBQUU1RSxlQUFLLFNBQVMsRUFBRSxRQUFnQixjQUFjLFVBQVUsTUFBTTtBQUM1RCxpQkFBSyxJQUFJLFNBQVMsS0FBSyxNQUFNLFFBQVE7QUFDckMsaUJBQUs7QUFDTCxpQkFBSyxrQkFBa0I7QUFDdkIsaUJBQUssWUFBWSxVQUFVLEdBQUcsR0FBRyxLQUFLLFdBQVcsUUFBUSxPQUFPLEtBQUssV0FBVyxRQUFRO0FBRXhGLGdCQUFJLGtCQUFrQixpQ0FDakIsS0FBSyxrQkFEWTtBQUFBLGNBRXBCLEdBQUcsS0FBSywyQkFBMkIsS0FBSyxnQkFBZ0I7QUFBQSxjQUN4RCxHQUFHLEtBQUssMkJBQTJCLEtBQUssZ0JBQWdCO0FBQUEsY0FDeEQsTUFBTSxLQUFLLDJCQUEyQixLQUFLLGdCQUFnQjtBQUFBLGNBQzNELE1BQU0sS0FBSywyQkFBMkIsS0FBSyxnQkFBZ0I7QUFBQSxjQUMzRCxRQUFRLEtBQUssMkJBQTJCLEtBQUssZ0JBQWdCO0FBQUEsY0FDN0QsUUFBUSxLQUFLLDJCQUEyQixLQUFLLGdCQUFnQjtBQUFBLGNBQzdELFFBQVEsS0FBSywyQkFBMkIsS0FBSyxnQkFBZ0I7QUFBQSxjQUM3RCxPQUFPLEtBQUssZ0JBQWdCLFFBQVEsS0FBSywyQkFBMkIsS0FBSyxnQkFBZ0IsU0FBUztBQUFBLGNBQ2xHLFFBQVEsS0FBSyxnQkFBZ0IsU0FBUyxLQUFLLDJCQUEyQixLQUFLLGdCQUFnQixVQUFVO0FBQUEsY0FDckcsZUFBZSxLQUFLLE1BQU07QUFBQTtBQUU1QixpQkFBSyxPQUFPLElBQUksaUJBQVMsS0FBSyxXQUFXLFNBQVMsS0FBSyxhQUFhLEtBQUssV0FBVyxpQkFBaUIsS0FBSyxNQUFNO0FBRWhILGlCQUFLLEtBQUssYUFBYTtBQUFBO0FBQUE7QUFBQSxpQkFLbEIsS0FBSyxtQkFBbUIsUUFBUSxLQUFLLG1CQUFtQixNQUFNO0FBRXZFLFlBQUksR0FBRyxTQUFTLGVBQWUsR0FBRyxTQUFTLFdBQVc7QUFFcEQsY0FBSSxLQUFLLE1BQU07QUFDYixpQkFBSyxLQUFLLEdBQUcsTUFBTTtBQUNuQixnQkFBSSxHQUFHLFNBQVMsV0FBVztBQUN6QixtQkFBSyxpQkFBaUI7QUFDdEIsbUJBQUssaUJBQWlCO0FBQ3RCLG1CQUFLLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFNckIsS0FBSyxNQUFNO0FBQ3BCLFVBQUksT0FBTyxLQUFLLEtBQUssR0FBRztBQUN4QixVQUFJLE1BQU07QUFDUixhQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLWCxZQUFZLEdBQUc7QUFDYixZQUFRLElBQUksRUFBRSxjQUFjO0FBQzVCLFNBQUssV0FBVyxFQUFFLGNBQWM7QUFBQTtBQUFBLEVBR2xDLHlCQUF5QixRQUFRO0FBQy9CLFdBQU8sU0FBUyxLQUFLLE1BQU07QUFBQTtBQUFBLEVBRzdCLDJCQUEyQixRQUFRO0FBQ2pDLFdBQU8sU0FBUyxLQUFLLE1BQU07QUFBQTtBQUFBLEVBSTdCLFlBQVk7QUFDVixZQUFRLElBQUksS0FBSyxNQUFNLFFBQVEsS0FBSyxNQUFNO0FBQzFDLFNBQUs7QUFHTCwwQkFBc0IsTUFBTTtBQUkxQixVQUFJLEtBQUssTUFBTSxpQkFBaUIsVUFBVSxLQUFLLE1BQU0saUJBQWlCLFFBQVE7QUFDNUUsYUFBSztBQUNMLGFBQUssU0FBUyxFQUFFLGNBQWM7QUFDOUIsYUFBSyxPQUFPO0FBQUEsYUFDUDtBQUNMLGFBQUssWUFBWSxVQUFVLEtBQUssV0FBVyxTQUFTLEdBQUc7QUFFdkQsYUFBSyxZQUFZLFVBQVUsR0FBRyxHQUFHLEtBQUssV0FBVyxRQUFRLE9BQU8sS0FBSyxXQUFXLFFBQVE7QUFJeEYsWUFBSSxLQUFLLE1BQU0saUJBQWlCLFFBQVE7QUFFdEMsZUFBSyxTQUFTLEVBQUUsY0FBYztBQUM5QixlQUFLLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU3BCLFVBQVUsYUFBYTtBQUNyQixRQUFJLGVBQWUsWUFBWSxNQUFNO0FBR25DLFVBQUksZ0JBQWdCLGlDQUNmLGNBRGU7QUFBQSxRQUVsQixHQUFHLEtBQUsseUJBQXlCLFlBQVksSUFBSSxLQUFLO0FBQUEsUUFDdEQsR0FBRyxLQUFLLHlCQUF5QixZQUFZLElBQUksS0FBSztBQUFBLFFBQ3RELE1BQU0sS0FBSyx5QkFBeUIsWUFBWSxPQUFPLEtBQUs7QUFBQSxRQUM1RCxNQUFNLEtBQUsseUJBQXlCLFlBQVksT0FBTyxLQUFLO0FBQUEsUUFDNUQsUUFBUSxLQUFLLHlCQUF5QixZQUFZLFNBQVMsS0FBSztBQUFBLFFBQ2hFLFFBQVEsS0FBSyx5QkFBeUIsWUFBWSxTQUFTLEtBQUs7QUFBQSxRQUNoRSxRQUFRLEtBQUsseUJBQXlCLFlBQVk7QUFBQSxRQUNsRCxPQUFPLFlBQVksUUFBUSxLQUFLLHlCQUF5QixZQUFZLFNBQVM7QUFBQSxRQUM5RSxRQUFRLFlBQVksU0FBUyxLQUFLLHlCQUF5QixZQUFZLFVBQVU7QUFBQSxRQUNqRixlQUFlLEtBQUssTUFBTTtBQUFBO0FBRTVCLFVBQUksaUJBQWlCLEtBQUssTUFBTSxPQUFPLE9BQU8sV0FBUyxNQUFNLE9BQU8sWUFBWTtBQUNoRixXQUFLLFNBQVMsRUFBRSxRQUFRLENBQUMsR0FBRyxnQkFBZ0Isa0JBQWtCLE1BQU07QUFDbEUsYUFBSyxJQUFJLFNBQVMsS0FBSyxNQUFNLFFBQVE7QUFDckMsYUFBSztBQUFBO0FBQUEsV0FFRjtBQUNMLFdBQUs7QUFBQTtBQUFBO0FBQUEsRUFNVCxTQUFTO0FBQ1AsWUFBUSxJQUFJO0FBQ1osU0FBSyxZQUFZLFVBQVUsR0FBRyxHQUFHLEtBQUssV0FBVyxRQUFRLE9BQU8sS0FBSyxXQUFXLFFBQVE7QUFDeEYsU0FBSyxZQUFZO0FBQ2pCLFNBQUssWUFBWSxZQUFZO0FBQzdCLFNBQUssWUFBWSxjQUFjLEtBQUssTUFBTSxrQkFBa0IsU0FBUyxZQUFZO0FBQVU7QUFDM0YsU0FBSyxZQUFZLFlBQVksS0FBSyxNQUFNLGtCQUFrQixTQUFTLFlBQVk7QUFBVTtBQUV6RixTQUFLLE1BQU0sT0FBTyxRQUFRLFdBQVM7QUFDakMsVUFBSSxNQUFNLFNBQVMsYUFBYTtBQUM5QixhQUFLLFlBQVksV0FBVyxLQUFLLDJCQUEyQixNQUFNLEtBQUssS0FBSyxTQUFTLEtBQUssMkJBQTJCLE1BQU0sS0FBSyxLQUFLLFNBQVMsS0FBSywyQkFBMkIsTUFBTSxRQUFRLEtBQUssMkJBQTJCLE1BQU07QUFBQSxpQkFDek4sTUFBTSxTQUFTLFNBQVM7QUFDakMsWUFBSSxVQUFVO0FBQ2QsWUFBSSxJQUFJLEtBQUssMkJBQTJCLE1BQU0sS0FBSyxLQUFLO0FBQ3hELFlBQUksSUFBSSxLQUFLLDJCQUEyQixNQUFNLEtBQUssS0FBSztBQUN4RCxZQUFJLE9BQU8sS0FBSywyQkFBMkIsTUFBTSxRQUFRLEtBQUs7QUFDOUQsWUFBSSxPQUFPLEtBQUssMkJBQTJCLE1BQU0sUUFBUSxLQUFLO0FBQzlELFlBQUksS0FBSyxPQUFPO0FBQ2hCLFlBQUksS0FBSyxPQUFPO0FBQ2hCLFlBQUksUUFBUSxLQUFLLE1BQU0sSUFBSTtBQUMzQixhQUFLLFlBQVk7QUFDakIsYUFBSyxZQUFZLE9BQU8sR0FBRztBQUMzQixhQUFLLFlBQVksT0FBTyxNQUFNO0FBQzlCLGFBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxLQUFLLElBQUksUUFBUSxLQUFLLEtBQUssSUFBSSxPQUFPLFVBQVUsS0FBSyxJQUFJLFFBQVEsS0FBSyxLQUFLO0FBQ3BILGFBQUssWUFBWSxPQUFPLE1BQU07QUFDOUIsYUFBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLEtBQUssSUFBSSxRQUFRLEtBQUssS0FBSyxJQUFJLE9BQU8sVUFBVSxLQUFLLElBQUksUUFBUSxLQUFLLEtBQUs7QUFDcEgsYUFBSyxZQUFZO0FBQ2pCLGFBQUssWUFBWTtBQUFBLGlCQUNSLE1BQU0sU0FBUyxRQUFRO0FBQ2hDLGFBQUssWUFBWTtBQUNqQixhQUFLLFlBQVksT0FBTyxLQUFLLDJCQUEyQixNQUFNLEtBQUssS0FBSyxTQUFTLEtBQUssMkJBQTJCLE1BQU0sS0FBSyxLQUFLO0FBQ2pJLGFBQUssWUFBWSxPQUFPLEtBQUssMkJBQTJCLE1BQU0sUUFBUSxLQUFLLFNBQVMsS0FBSywyQkFBMkIsTUFBTSxRQUFRLEtBQUs7QUFDdkksYUFBSyxZQUFZO0FBQ2pCLGFBQUssWUFBWTtBQUFBLGlCQUNSLE1BQU0sU0FBUyxRQUFRO0FBQ2hDLFlBQUksUUFBUSxLQUFLLE1BQU0sa0JBQWtCLFNBQVMsWUFBWTtBQUM5RCxpQkFBUyxNQUFNLGFBQWEsS0FBSyxhQUFhLEtBQUssMkJBQTJCLE1BQU0sS0FBSyxLQUFLLFNBQVMsS0FBSywyQkFBMkIsTUFBTSxLQUFLLEtBQUssU0FBUyxLQUFLLDJCQUEyQixNQUFNLFFBQVEsS0FBSyxNQUFNLGdCQUFnQixPQUFPLEtBQUssTUFBTTtBQUFBLGlCQUNsUCxNQUFNLFNBQVMsVUFBVTtBQUNsQyxZQUFJLElBQUksS0FBSywyQkFBMkIsTUFBTSxLQUFLLEtBQUs7QUFDeEQsWUFBSSxJQUFJLEtBQUssMkJBQTJCLE1BQU0sS0FBSyxLQUFLO0FBQ3hELGFBQUssWUFBWTtBQUNqQixhQUFLLFlBQVksSUFBSSxHQUFHLEdBQUcsS0FBSywyQkFBMkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxLQUFLO0FBQ3RGLGFBQUssWUFBWTtBQUFBLGlCQUNSLE1BQU0sU0FBUyxXQUFXO0FBQ25DLFlBQUksVUFBVSxLQUFLLDJCQUEyQixNQUFNLEtBQUssS0FBSztBQUM5RCxZQUFJLFVBQVUsS0FBSywyQkFBMkIsTUFBTSxLQUFLLEtBQUs7QUFDOUQsWUFBSSxPQUFPLEtBQUssMkJBQTJCLE1BQU0sSUFBSSxNQUFNO0FBQzNELG9CQUFZLFNBQVMsU0FBUyxNQUFNLEtBQUs7QUFBQTtBQUFBO0FBTTdDLFNBQUssWUFBWSxVQUFVLEdBQUcsR0FBRyxLQUFLLFdBQVcsUUFBUSxPQUFPLEtBQUssV0FBVyxRQUFRO0FBQ3hGLFNBQUssWUFBWSxVQUFVLEtBQUssV0FBVyxTQUFTLEdBQUc7QUFDdkQsU0FBSyxZQUFZO0FBQ2pCLFNBQUssWUFBWSxVQUFVLEdBQUcsR0FBRyxLQUFLLFdBQVcsUUFBUSxPQUFPLEtBQUssV0FBVyxRQUFRO0FBQUE7QUFBQSxFQUcxRixpQkFBaUIsSUFBSTtBQUNuQixPQUFHLEtBQUssS0FBSyx5QkFBeUIsR0FBRyxJQUFJLEtBQUs7QUFDbEQsT0FBRyxLQUFLLEtBQUsseUJBQXlCLEdBQUcsSUFBSSxLQUFLO0FBRWxELFFBQUksa0JBQWtCLHNCQUFzQixHQUFHLElBQUksR0FBRyxJQUFJLEtBQUssTUFBTTtBQUlyRSxTQUFLO0FBRUwsU0FBSyxTQUFTLEVBQUUsY0FBYyxVQUFVLE1BQU07QUFDNUMsV0FBSztBQUVMLFVBQUksU0FBUztBQUNiLFVBQUksbUJBQW1CLGdCQUFnQixTQUFTLFFBQVE7QUFDdEQsaUJBQVMsZ0JBQWdCO0FBQ3pCLFlBQUksU0FBUyxLQUFLLE1BQU0sT0FBTyxPQUFPLFdBQVMsTUFBTSxPQUFPLEtBQUssZ0JBQWdCO0FBQ2pGLGFBQUssU0FBUyxFQUFFLFVBQVUsTUFBTTtBQUM5QixlQUFLO0FBQUE7QUFBQSxhQUVGO0FBQ0wsYUFBSyxLQUFLLEtBQUssS0FBSztBQUNwQixpQkFBUyxLQUFLO0FBQUE7QUFFaEIsV0FBSyxPQUFPLElBQUksaUJBQVMsS0FBSyxXQUFXLFNBQVMsS0FBSyxhQUFhLEtBQUssV0FBVyxRQUFRLEtBQUssTUFBTTtBQVF2RyxVQUFJLE9BQU8sS0FBSyxLQUFLLEdBQUc7QUFDeEIsVUFBSSxNQUFNO0FBQ1IsYUFBSyxZQUFZLFVBQVUsR0FBRyxHQUFHLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVztBQUV4RSxhQUFLLElBQUksaUJBQWlCLEVBQUUsU0FBUyxLQUFLLFNBQVMsU0FBUyxLQUFLLFNBQVMsZUFBZSxLQUFLLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVExRyxVQUFVLElBQUk7QUFDWixRQUFJLEtBQUssTUFBTSxpQkFBaUIsUUFBUTtBQUV0QztBQUFBO0FBRUYsUUFBSyxHQUFHLFdBQVcsTUFBTSxHQUFHLFdBQVcsTUFBUSxHQUFHLFdBQVcsTUFBTSxHQUFHLFdBQVcsSUFBSztBQUFBLFdBRy9FO0FBRUwsVUFBSSxLQUFLLGlCQUFpQjtBQUV4QixZQUFJLEdBQUcsVUFBVSxNQUFNLEdBQUcsVUFBVSxHQUFHO0FBQ3JDLGNBQUksU0FBUyxLQUFLLE1BQU0sT0FBTyxPQUFPLFdBQVMsTUFBTSxPQUFPLEtBQUssZ0JBQWdCO0FBQ2pGLGVBQUssU0FBUyxFQUFFLFVBQVUsTUFBTTtBQUM5QixpQkFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFmLGdCQUFnQixJQUFJO0FBQ2xCLE9BQUcsS0FBSyxLQUFLLHlCQUF5QixHQUFHLElBQUksS0FBSztBQUNsRCxPQUFHLEtBQUssS0FBSyx5QkFBeUIsR0FBRyxJQUFJLEtBQUs7QUFFbEQsUUFBSSxLQUFLLE1BQU0saUJBQWlCLFFBQVE7QUFJdEMsV0FBSyxLQUFLO0FBR1Y7QUFBQTtBQUdGLFFBQUksS0FBSyxNQUFNLGlCQUFpQixVQUFVO0FBQ3hDLFdBQUssWUFBWSxVQUFVLEdBQUcsR0FBRyxLQUFLLFdBQVcsUUFBUSxPQUFPLEtBQUssV0FBVyxRQUFRO0FBQ3hGLFVBQUksa0JBQWtCLHNCQUFzQixHQUFHLElBQUksR0FBRyxJQUFJLEtBQUssTUFBTTtBQUNyRSxXQUFLLGtCQUFrQjtBQUN2QixjQUFRLElBQUk7QUFDWixVQUFJLEtBQUssaUJBQWlCO0FBQ3hCLFlBQUksS0FBSyxnQkFBZ0IsU0FBUyxhQUFhO0FBQzdDLGNBQUksSUFBSSxLQUFLLDJCQUEyQixLQUFLLGdCQUFnQixLQUFLLEtBQUs7QUFDdkUsY0FBSSxJQUFJLEtBQUssMkJBQTJCLEtBQUssZ0JBQWdCLEtBQUssS0FBSztBQUN2RSxlQUFLLFlBQVksWUFBWSxDQUFDO0FBQzlCLGVBQUssWUFBWSxXQUFXLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSywyQkFBMkIsS0FBSyxnQkFBZ0IsU0FBUyxJQUFJLEtBQUssMkJBQTJCLEtBQUssZ0JBQWdCLFVBQVU7QUFBQSxtQkFDbEssS0FBSyxnQkFBZ0IsU0FBUyxVQUFVLEtBQUssZ0JBQWdCLFNBQVMsU0FBUztBQUN4RixjQUFJLElBQUksS0FBSywyQkFBMkIsS0FBSyxnQkFBZ0IsVUFBVSxLQUFLO0FBQzVFLGNBQUksSUFBSSxLQUFLLDJCQUEyQixLQUFLLGdCQUFnQixVQUFVLEtBQUs7QUFDNUUsZUFBSyxZQUFZLFlBQVksQ0FBQztBQUM5QixlQUFLLFlBQVksV0FBVyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssMkJBQTJCLEtBQUssZ0JBQWdCLFNBQVMsSUFBSSxLQUFLLDJCQUEyQixLQUFLLGdCQUFnQixVQUFVO0FBQUEsbUJBQ2xLLEtBQUssZ0JBQWdCLFNBQVMsVUFBVTtBQUNqRCxjQUFJLElBQUksS0FBSywyQkFBMkIsS0FBSyxnQkFBZ0IsS0FBSyxLQUFLO0FBQ3ZFLGNBQUksSUFBSSxLQUFLLDJCQUEyQixLQUFLLGdCQUFnQixLQUFLLEtBQUs7QUFDdkUsZUFBSyxZQUFZLFlBQVksQ0FBQztBQUM5QixlQUFLLFlBQVk7QUFDakIsZUFBSyxZQUFZLElBQUksR0FBRyxHQUFHLEtBQUssMkJBQTJCLEtBQUssZ0JBQWdCLFVBQVUsSUFBSSxHQUFHLElBQUksS0FBSztBQUMxRyxlQUFLLFlBQVk7QUFBQSxtQkFDUixLQUFLLGdCQUFnQixTQUFTLFdBQVc7QUFDbEQsY0FBSSxJQUFJLEtBQUssMkJBQTJCLEtBQUssZ0JBQWdCLFVBQVUsS0FBSztBQUM1RSxjQUFJLElBQUksS0FBSywyQkFBMkIsS0FBSyxnQkFBZ0IsVUFBVSxLQUFLO0FBQzVFLGVBQUssWUFBWSxZQUFZLENBQUM7QUFDOUIsZUFBSyxZQUFZLFdBQVcsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLDJCQUEyQixLQUFLLGdCQUFnQixTQUFTLElBQUksS0FBSywyQkFBMkIsS0FBSyxnQkFBZ0IsVUFBVTtBQUFBLG1CQUNsSyxLQUFLLGdCQUFnQixTQUFTLFFBQVE7QUFDL0MsY0FBSSxJQUFJLEtBQUssMkJBQTJCLEtBQUssZ0JBQWdCLEtBQUssS0FBSztBQUN2RSxjQUFJLElBQUksS0FBSywyQkFBMkIsS0FBSyxnQkFBZ0IsS0FBSyxLQUFLO0FBQ3ZFLGVBQUssWUFBWSxZQUFZLENBQUM7QUFDOUIsZUFBSyxZQUFZLFdBQVcsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLDJCQUEyQixLQUFLLGdCQUFnQixRQUFRLEtBQUssMkJBQTJCLEtBQUssZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1wSyxZQUFZLEdBQUc7QUFDYixRQUFJLEtBQUssTUFBTSxpQkFBaUIsUUFBUTtBQUV0QyxXQUFLLEtBQUs7QUFBQTtBQUVaLFNBQUssVUFBVSxLQUFLLFVBQVUsRUFBRTtBQUNoQyxTQUFLLFVBQVUsS0FBSyxVQUFVLEVBQUU7QUFDaEMsU0FBSztBQUFBO0FBQUEsRUFHUCxzQkFBc0I7QUFDcEIsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxrQkFBa0I7QUFDdkIsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxpQkFBaUI7QUFBQTtBQUFBLEVBSXhCLFlBQVksR0FBRztBQUNiLE1BQUU7QUFDRixTQUFLLFNBQ0gsQ0FBQyxjQUFjO0FBQ2IsYUFBTyxpQ0FDRixZQURFO0FBQUEsUUFFTCxlQUFlLFVBQVUsa0JBQWtCLFNBQVMsVUFBVTtBQUFBO0FBQUEsT0FFL0QsTUFBTTtBQUNQLFdBQUssWUFBWSxjQUFjLEtBQUssTUFBTSxrQkFBa0IsU0FBUyxZQUFZO0FBQ2pGLFdBQUssWUFBWSxZQUFZO0FBRzdCLFdBQUssWUFBWSxZQUFZLEtBQUssTUFBTSxrQkFBa0IsU0FBUyxZQUFZO0FBQy9FLFdBQUssWUFBWSxTQUFTLEdBQUcsR0FBRyxLQUFLLFdBQVcsUUFBUSxPQUFPLEtBQUssV0FBVyxRQUFRO0FBQ3ZGLFdBQUs7QUFBQTtBQUFBO0FBQUEsRUFJWCxTQUFTO0FBQ1AsV0FDRSxvREFBQyxPQUFEO0FBQUEsTUFDRSxPQUFPLEVBQUUsZUFBZSxHQUFHLEtBQUssTUFBTSxrQkFBa0IsaUJBQWlCLEdBQUcsS0FBSyxNQUFNO0FBQUEsTUFDdkYsV0FBVyxHQUFHLEtBQUssTUFBTSxrQkFBa0IsU0FBUyxjQUFjO0FBQUEsT0FDbEUsb0RBQUMsT0FBRDtBQUFBLE1BQUssSUFBRztBQUFBLE9BQ04sb0RBQUMsT0FBRDtBQUFBLE1BQUssSUFBRztBQUFBLE9BQ04sb0RBQUMsVUFBRDtBQUFBLE1BQVEsSUFBRztBQUFBLE1BQWdCLEtBQUssS0FBSztBQUFBLE1BQVksT0FBTyxLQUFLLE1BQU07QUFBQSxNQUFhLFFBQVEsS0FBSyxNQUFNO0FBQUEsT0FDakcsb0RBQUMsS0FBRDtBQUFBLE1BQUcsV0FBVTtBQUFBLE9BQVcsNElBQ3VCLG9EQUFDLE1BQUQsT0FBTSxnQ0FBNEIsb0RBQUMsS0FBRDtBQUFBLE1BQzdFLE1BQUs7QUFBQSxPQUErQixrQkFBaUIsTUFBRSxvREFBQyxLQUFEO0FBQUEsTUFBRyxNQUFLO0FBQUEsT0FBdUIsVUFBUyxNQUFFLG9EQUFDLEtBQUQ7QUFBQSxNQUMvRixNQUFLO0FBQUEsT0FBeUIsWUFBVyxNQUFFLG9EQUFDLEtBQUQ7QUFBQSxNQUFHLE1BQUs7QUFBQSxPQUE4QixXQUFVLE1BQUUsb0RBQUMsTUFBRCxPQUFNLFFBQUksb0RBQUMsS0FBRDtBQUFBLE1BQ3JHLE1BQUs7QUFBQSxPQUEyQixjQUFhLGtEQUV2RCxvREFBQyxVQUFEO0FBQUEsTUFBUSxJQUFHO0FBQUEsTUFBYSxLQUFLLEtBQUs7QUFBQSxNQUFZLE9BQU8sS0FBSyxNQUFNO0FBQUEsTUFBYSxRQUFRLEtBQUssTUFBTTtBQUFBLFVBSXBHLG9EQUFDLHFCQUFEO0FBQUEsTUFBWSxjQUFjLEtBQUssTUFBTTtBQUFBLE1BQWMsWUFBWSxLQUFLO0FBQUEsUUFDcEUsb0RBQUMscUJBQUQ7QUFBQSxNQUFZLGFBQWEsS0FBSztBQUFBLFFBQzlCLG9EQUFDLG1CQUFELE9BQ0Esb0RBQUMsd0JBQUQ7QUFBQSxNQUFlLFdBQVcsS0FBSyxNQUFNO0FBQUEsTUFBZSxTQUFTLEtBQUs7QUFBQSxNQUFTLFFBQVEsS0FBSztBQUFBO0FBQUE7QUFBQTtBQU1oRyxjQUFjLGNBQWM7QUFFNUIsSUFBTyxnQkFBUTs7Ozs7O0FnQjluQmY7QUFBQSx1QkFBNkI7QUFFN0IsSUFBTSxZQUFZLENBQUMsbUJBQW1CO0FBQ3BDLFNBQU8scUNBQWUsV0FBVztBQUFBO0FBSW5DLElBQU0sS0FBSztBQUFBLEVBQ1QsT0FBTyxNQUFNLFVBQVU7QUFBQSxFQUN2QixNQUFNLENBQUMsV0FBVyxVQUFVLFNBQVM7QUFBQSxFQUNyQyxpQkFBaUIsQ0FBQyxXQUFXLFVBQVUsU0FBUztBQUFBLEVBQ2hELGVBQWUsQ0FBQyxXQUFXLFVBQVUsU0FBUztBQUFBO0FBSWhELDBCQUEwQixNQUFNO0FBQzlCLFFBQU0sYUFBYSxHQUFHLFFBQVE7QUFDOUIsUUFBTSxHQUFHLGNBQWMsV0FBVyxJQUFJLE1BQU0sSUFBSSxFQUFFLE1BQVksT0FBTyxRQUFRLFVBQVU7QUFDdkYsUUFBTSxXQUFXLElBQUksRUFBRSxJQUFJLFdBQVc7QUFDdEMsU0FBTyxFQUFFLElBQUksV0FBVztBQUFBO0FBaUIxQixtQkFBbUIsUUFBUTtBQUN6QixVQUFRLElBQUksY0FBYztBQUMxQixTQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUN0QyxPQUFHLGdCQUFnQixRQUFRLE1BQU0sS0FBSyxDQUFDLGFBQWE7QUFDbEQsVUFBSSxPQUFPO0FBQ1gsVUFBSSxTQUFTLE9BQU87QUFDbEIsZUFBTztBQUFBLGFBQ0Y7QUFDTCxpQkFBUyxRQUFRLFNBQU87QUFDdEIsZUFBSyxLQUFLLElBQUk7QUFBQTtBQUFBO0FBR2xCLGNBQVEsSUFBSSxlQUFlO0FBQzNCLGNBQVE7QUFBQSxPQUNQLE1BQU0sU0FBTztBQUNkLGNBQVEsSUFBSSxpQkFBaUI7QUFDN0IsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUtiLGtCQUFrQixRQUFRO0FBQ3hCLFNBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQ3RDLE9BQUcsY0FBYyxRQUFRLE1BQU0sS0FBSyxDQUFDLGFBQWE7QUFDaEQsVUFBSSxPQUFPO0FBQ1gsVUFBSSxTQUFTLE9BQU87QUFDbEIsZUFBTztBQUFBLGFBQ0Y7QUFDTCxpQkFBUyxRQUFRLFNBQU87QUFDdEIsZUFBSyxLQUFLLElBQUk7QUFBQTtBQUFBO0FBR2xCLGNBQVEsSUFBSSxjQUFjO0FBQzFCLGNBQVE7QUFBQSxPQUNQLE1BQU0sU0FBTztBQUNkLGNBQVEsSUFBSSxlQUFlO0FBQzNCLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFLYiw0QkFBNEIsUUFBUTtBQUNsQyxTQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUN0QyxZQUFRLElBQUksQ0FBQyxVQUFVLFNBQVMsU0FBUyxVQUFVLEtBQUssQ0FBQyxDQUFDLFFBQVEsV0FBVztBQUMzRSxjQUFRLElBQUksUUFBUTtBQUNwQixjQUFRLEVBQUUsUUFBUSxVQUFVLE9BQU8sU0FBUyxJQUFJLFNBQVMsSUFBSSxPQUFPLFNBQVMsTUFBTSxTQUFTLElBQUksUUFBUTtBQUFBLE9BQ3ZHLE1BQU0sQ0FBQyxRQUFRO0FBQ2hCLGNBQVEsSUFBSSxjQUFjO0FBQzFCLGFBQU8sRUFBRSxTQUFTO0FBQUE7QUFBQTtBQUFBOzs7QWxCckVqQixJQUFNLFFBQVEsTUFBTTtBQUFBLEVBQ3pCLEdBQUc7QUFBQSxFQUNILEdBQUc7QUFBQSxFQUNILEdBQUc7QUFBQSxFQUNILEdBQUc7QUFBQSxFQUNILEdBQUc7QUFBQSxFQUNILEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQTtBQUd0QixJQUFNLFNBQVMsT0FBTyxFQUFFLFNBQVMsYUFBYTtBQUNuRCxVQUFRLElBQUk7QUFDWixNQUFJLFdBQVcsTUFBTSxtQkFBbUIsT0FBTztBQUMvQyxTQUFPLHNCQUFLLEVBQUU7QUFBQTtBQUdELHFCQUFxQjtBQUNsQyxRQUFNLE9BQU87QUFDYixVQUFRLElBQUk7QUFDWixRQUFNLENBQUMsUUFBUSxhQUFhO0FBRTVCLCtCQUFVLE1BQU07QUFDZCxVQUFNLFVBQVM7QUFDZixjQUFVO0FBQ1YsWUFBTyxLQUFLLFNBQVM7QUFDckIsV0FBTyxNQUFNO0FBQ1gsY0FBTztBQUFBO0FBQUEsS0FFUjtBQUVILCtCQUFVLE1BQU07QUFDZCxRQUFJLENBQUM7QUFBUTtBQUNiLFdBQU8sR0FBRyxnQkFBZ0IsQ0FBQyxVQUFTO0FBQ2xDLGNBQVEsSUFBSTtBQUFBO0FBRWQsV0FBTyxHQUFHLGFBQWEsQ0FBQyxVQUFTO0FBQy9CLGNBQVEsSUFBSTtBQUFBO0FBQUE7QUFHaEIsU0FDRSxvREFBQyxPQUFEO0FBQUEsSUFBSyxPQUFPLEVBQUUsWUFBWSx5QkFBeUIsWUFBWTtBQUFBLEtBQzdELG9EQUFDLGdCQUFEO0FBQUEsSUFBZ0I7QUFBQSxLQUNkLG9EQUFDLGVBQUQ7QUFBQTs7O0FtQnhEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBa0I7QUFDbEIscUJBQW1EO0FBRW5ELG1CQUF5QjtBQUV6QixzQkFBNkIsRUFBRSxXQUFXO0FBQ3hDLFFBQU0sT0FBTyxNQUFNLFFBQVE7QUFDM0IsTUFBSSxPQUFPLEtBQUssSUFBSTtBQUNwQixRQUFNLE9BQU8sTUFBTSxXQUFXO0FBSzlCLFVBQVEsSUFBSTtBQUNaLFNBQU8sMkJBQVMsU0FBUyxLQUFLO0FBQUE7QUFHakIsaUJBQWlCO0FBakJoQztBQWtCRSxRQUFNLGFBQWE7QUFDbkIsUUFBTSxhQUFhO0FBRW5CLFNBQ0UscURBQUMscUJBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNYLHFEQUFDLFlBQUQ7QUFBQSxJQUFVLFVBQVUsV0FBVyxVQUFVO0FBQUEsS0FDdkMscURBQUMsS0FBRCxNQUNFLHFEQUFDLFNBQUQsTUFBTyxTQUNDLEtBQ04scURBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsY0FBYyxhQUFhLFdBQVcsT0FBTyxPQUFPO0FBQUEsSUFDcEQsT0FBTztBQUFBLE1BQ0wsYUFBYSwwQ0FBWSxPQUFPLFFBQU8sUUFBUTtBQUFBO0FBQUEsUUFNdEQsMENBQVksT0FBTyxRQUNsQixxREFBQyxtQkFBRDtBQUFBLElBQ0UsY0FBYyxXQUFXLFVBQVU7QUFBQSxJQUNuQyxPQUFPLCtDQUFZLFdBQVosbUJBQW9CO0FBQUEsT0FFM0IsTUFFSixxREFBQyxLQUFELE1BQ0UscURBQUMsVUFBRDtBQUFBLElBQVEsTUFBSztBQUFBLEtBQ1YsV0FBVyxVQUFVLGVBQ2xCLG1CQUNBO0FBQUE7OztBQ2pEaEI7QUFBQSxJQUFPLDBCQUFRLEVBQUMsV0FBVSxZQUFXLFNBQVEsRUFBQyxVQUFTLG1DQUFrQyxXQUFVLENBQUMsb0NBQW1DLHVDQUFxQyxVQUFTLEVBQUMsUUFBTyxFQUFDLE1BQUssUUFBTyxZQUFXLFFBQVUsUUFBTyxJQUFHLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDJCQUEwQixXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx1QkFBc0IsRUFBQyxNQUFLLHVCQUFzQixZQUFXLFFBQU8sUUFBTyxnQkFBZSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywwQ0FBeUMsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsUUFBVSxhQUFZLE1BQUssYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBdkJNdDhCLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix1QkFBdUI7QUFBQSxJQUNuQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7OztBRnhCZCxJQUFNLEVBQUUsaUJBQWlCLFFBQVE7QUFDakMsSUFBTSxFQUFFLFdBQVcsUUFBUTtBQU0zQixJQUFNLE1BQU07QUFFWixJQUFNLGFBQWEsYUFBYTtBQUVoQyxJQUFNLE1BQUssSUFBSSxPQUFPO0FBRXRCLEtBQWU7QUFrQ2YsSUFBSSxJQUFJO0FBR1IsSUFBSSxRQUFRO0FBR1osSUFBSSxJQUNGLFVBQ0EsdUJBQVEsT0FBTyxnQkFBZ0IsRUFBRSxXQUFXLE1BQU0sUUFBUTtBQUs1RCxJQUFJLElBQUksdUJBQVEsT0FBTyxnQkFBZ0IsRUFBRSxRQUFRO0FBRWpELElBQUksSUFBSSwyQkFBTztBQUVmLElBQUksSUFDRixLQUNBLDBDQUFxQjtBQUFBLEVBQ25CLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQTtBQUlWLElBQU0sT0FBTyxRQUFRLElBQUksUUFBUTtBQUNqQyxXQUFXLE9BQU8sTUFBTSxNQUFNO0FBQzVCLFVBQVEsSUFBSSxvQ0FBb0M7QUFBQTtBQUlsRCxPQUFPLFVBQVU7IiwKICAibmFtZXMiOiBbXQp9Cg==
