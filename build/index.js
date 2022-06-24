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

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/draw/freeDraw.jsx
var freeDraw_exports = {};
__export(freeDraw_exports, {
  default: () => FreeDrawIndex,
  links: () => links
});
init_react();
var import_react8 = __toESM(require("react"));

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
    this.props.mouseMove({ x: this.changeToOneScalingFactor(ev.x - this.scrollX), y: this.changeToOneScalingFactor(ev.y - this.scrollY) });
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
      style: { "--font-size": `${this.state.baseFontSize}px`, "--line-height": `${this.state.baseLineHeight}px`, cursor: `${this.state.selectedTool === "select" ? `url('../assets/cursor.svg')` : "crosshair"}` },
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
  return /* @__PURE__ */ import_react8.default.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ import_react8.default.createElement(main_default2, {
    mouseMove: () => {
    },
    updateShape: () => {
    }
  }));
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/draw/$drawId.jsx
var drawId_exports = {};
__export(drawId_exports, {
  action: () => action,
  default: () => DrawIndex,
  links: () => links2,
  loader: () => loader
});
init_react();
var import_react9 = __toESM(require("react"));
var import_node = require("@remix-run/node");
var import_react10 = require("@remix-run/react");
var import_socket = __toESM(require("socket.io-client"));

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

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/draw/$drawId.jsx
var links2 = () => [
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
var action = async ({ request, params }) => {
  const body = await request.formData();
  let name = body.get("data");
  const data = await addShape(params.drawId, name);
  return (0, import_node.json)({ data });
};
function DrawIndex() {
  const fetcher = (0, import_react10.useFetcher)();
  const data = (0, import_react10.useLoaderData)();
  const actionData = (0, import_react10.useActionData)();
  console.log(actionData);
  const [socket, setSocket] = (0, import_react9.useState)();
  const idb = (0, import_react9.useMemo)(() => {
    return new idb_default();
  });
  (0, import_react9.useEffect)(() => {
    const socket2 = (0, import_socket.default)();
    setSocket(socket2);
    socket2.emit("event", "conenction success");
    return () => {
      socket2.close();
    };
  }, []);
  (0, import_react9.useEffect)(() => {
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
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ import_react9.default.createElement(SocketProvider, {
    socket
  }, /* @__PURE__ */ import_react9.default.createElement(main_default2, {
    mouseMove: onMouseMove,
    updateShape
  })));
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => Index
});
init_react();
var import_react11 = __toESM(require("react"));
var import_react12 = require("@remix-run/react");
var import_node2 = require("@remix-run/node");
async function action2({ request }) {
  const body = await request.formData();
  let name = body.get("name");
  const draw = await createRoom(name);
  console.log(draw);
  return (0, import_node2.redirect)(`/draw/${draw.id}`);
}
function Index() {
  var _a;
  const transition = (0, import_react12.useTransition)();
  const actionData = (0, import_react12.useActionData)();
  return /* @__PURE__ */ import_react11.default.createElement(import_react12.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react11.default.createElement("fieldset", {
    disabled: transition.state === "submitting"
  }, /* @__PURE__ */ import_react11.default.createElement("p", null, /* @__PURE__ */ import_react11.default.createElement("label", null, "Name:", " ", /* @__PURE__ */ import_react11.default.createElement("input", {
    name: "name",
    type: "text",
    defaultValue: actionData ? actionData.values.name : void 0,
    style: {
      borderColor: (actionData == null ? void 0 : actionData.errors.name) ? "red" : ""
    }
  }))), (actionData == null ? void 0 : actionData.errors.name) ? /* @__PURE__ */ import_react11.default.createElement(ValidationMessage, {
    isSubmitting: transition.state === "submitting",
    error: (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.name
  }) : null, /* @__PURE__ */ import_react11.default.createElement("p", null, /* @__PURE__ */ import_react11.default.createElement("button", {
    type: "submit"
  }, transition.state === "submitting" ? "Configuring..." : "Enter Room")), /* @__PURE__ */ import_react11.default.createElement(import_react12.Link, {
    to: "/draw/freedraw",
    className: "text-xl text-blue-600 underline"
  }, "Try without Login")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "68b8ce76", "entry": { "module": "/build/entry.client-X3NPRB7G.js", "imports": ["/build/_shared/chunk-Q56ZF7Z6.js", "/build/_shared/chunk-ZB6S5JOM.js", "/build/_shared/chunk-K3AZYGPX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-5E5BBP6H.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/draw/$drawId": { "id": "routes/draw/$drawId", "parentId": "root", "path": "draw/:drawId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/draw/$drawId-CG4FAEND.js", "imports": ["/build/_shared/chunk-P3CT7EPH.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/draw/freeDraw": { "id": "routes/draw/freeDraw", "parentId": "root", "path": "draw/freeDraw", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/draw/freeDraw-E2BZMJYG.js", "imports": ["/build/_shared/chunk-P3CT7EPH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-QRBP6MIY.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-68B8CE76.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAiLi4vc2VydmVyL2ZpcmViYXNlLnNlcnZlci5qcyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLmpzeCIsICJyb3V0ZTovVXNlcnMvaW5kcmFnaXRoL1ByYWN0aWNlL3JlbWl4LWxlYXJuL215LXJlbWl4LWFwcC9hcHAvcm9vdC5qc3giLCAicm91dGU6L1VzZXJzL2luZHJhZ2l0aC9QcmFjdGljZS9yZW1peC1sZWFybi9teS1yZW1peC1hcHAvYXBwL3JvdXRlcy9kcmF3L2ZyZWVEcmF3LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db25maWdUb29sL0NvbmZpZ1Rvb2wuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TZWxlY3RUb29sL1NlbGVjdFRvb2wuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2hhcGVzL0Fycm93LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9DaGFsay5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvQ2lyY2xlLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3V0aWxzL2dldEVsZW1lbnRzQXRQb3NpdGlvbi5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvRGlhbW9uZC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy91dGlscy9kcmF3U2hhcGVzLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9EcmF3VGV4dC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvTGluZS5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvTW92ZVRvb2wuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2hhcGVzL1JlY3RhbmdsZS5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9UZXh0VG9vbC9UZXh0VG9vbC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9ab29tQ29udGFpbmVyL1pvb21Db250YWluZXIuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvdXRpbHMvaWRiLmpzIiwgIi4uL2FwcC9jb250ZXh0cy9zb2NrZXRDb250ZXh0LmpzIiwgInJvdXRlOi9Vc2Vycy9pbmRyYWdpdGgvUHJhY3RpY2UvcmVtaXgtbGVhcm4vbXktcmVtaXgtYXBwL2FwcC9yb3V0ZXMvZHJhdy8kZHJhd0lkLmpzeCIsICIuLi9zZXJ2ZXIvZGIuanMiLCAicm91dGU6L1VzZXJzL2luZHJhZ2l0aC9QcmFjdGljZS9yZW1peC1sZWFybi9teS1yZW1peC1hcHAvYXBwL3JvdXRlcy9pbmRleC5qc3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuXG5pbXBvcnQgeyBhdXRoIGFzIEZpcmViYXNlU2VydmVyIH0gZnJvbSAnLi9zZXJ2ZXIvZmlyZWJhc2Uuc2VydmVyJztcbmNvbnN0IHsgY3JlYXRlU2VydmVyIH0gPSByZXF1aXJlKCdodHRwJyk7XG5jb25zdCB7IFNlcnZlciB9ID0gcmVxdWlyZSgnc29ja2V0LmlvJyk7XG5cbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9leHByZXNzJztcblxuaW1wb3J0ICogYXMgc2VydmVyQnVpbGQgZnJvbSAnQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5jb25zdCBodHRwU2VydmVyID0gY3JlYXRlU2VydmVyKGFwcCk7XG5cbmNvbnN0IGlvID0gbmV3IFNlcnZlcihodHRwU2VydmVyKTtcblxuRmlyZWJhc2VTZXJ2ZXIuc2VydmVyO1xuXG5sZXQgY2xpZW50cyA9IFtdO1xuXG5cbi8vIGlvLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhzb2NrZXQuaWQsICdjb25uZWN0ZWQnKTtcblxuXG4vLyAgIHNvY2tldC5lbWl0KCdjb25maXJtYXRpb24nLCAnY29ubmVjdGVkIScpO1xuXG4vLyAgIHNvY2tldC5vbignZXZlbnQnLCAoZGF0YSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKHNvY2tldC5pZCwgZGF0YSk7XG4vLyAgICAgY2xpZW50cy5wdXNoKHNvY2tldC5pZCk7XG4vLyAgICAgc29ja2V0LmVtaXQoJ2V2ZW50JywgJ3BvbmcnKTtcbi8vICAgfSk7XG5cblxuLy8gICBzb2NrZXQub24oJ21vdXNlbW92ZScsIChkYXRhKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coY2xpZW50cyk7XG4vLyAgICAgY2xpZW50cy5mb3JFYWNoKChjbGllbnRJZCkgPT4ge1xuLy8gICAgICAgaWYgKGNsaWVudElkICE9PSBzb2NrZXQuaWQpIHtcbi8vICAgICAgICAgaW8udG8oY2xpZW50SWQpLmVtaXQoJ21vdXNlbW92ZScsIGRhdGEpO1xuLy8gICAgICAgfVxuLy8gICAgIH0pXG4vLyAgIH0pXG5cbi8vICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKGRhdGEpID0+IHtcbi8vICAgICAvL2NsaWVudHMgPSBjbGllbnRzLmZpbHRlcihjbGllbnRJZCA9PiBjbGllbnRJZCAhPT0gc29ja2V0LmlkKTtcbi8vICAgICBjb25zb2xlLmxvZyhzb2NrZXQuaWQsIFwiZGljb25uZWN0ZWRcIik7XG4vLyAgIH0pXG4vLyB9KTtcblxuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoJ3gtcG93ZXJlZC1ieScpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gICcvYnVpbGQnLFxuICBleHByZXNzLnN0YXRpYygncHVibGljL2J1aWxkJywgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogJzF5JyB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljL2J1aWxkJywgeyBtYXhBZ2U6ICcxaCcgfSkpO1xuXG5hcHAudXNlKG1vcmdhbigndGlueScpKTtcblxuYXBwLmFsbChcbiAgJyonLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcbmh0dHBTZXJ2ZXIubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gaHR0cFNlcnZlcjtcbiIsICJpbXBvcnQge1xuICBnZXRBcHBzIGFzIGdldFNlcnZlckFwcHMsXG4gIGluaXRpYWxpemVBcHAgYXMgaW5pdGlhbGl6ZVNlcnZlckFwcCxcbiAgY2VydCBhcyBzZXJ2ZXJDZXJ0LFxufSBmcm9tICdmaXJlYmFzZS1hZG1pbi9hcHAnO1xuaW1wb3J0IHtcbiAgZ2V0QXBwcyBhcyBnZXRDbGllbnRBcHBzLFxuICBpbml0aWFsaXplQXBwIGFzIGluaXRpYWxpemVDbGllbnRBcHAsXG59IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRBdXRoIGFzIGdldFNlcnZlckF1dGggfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9hdXRoJztcbmltcG9ydCB7IGdldEF1dGggYXMgZ2V0Q2xpZW50QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaWYgKGdldENsaWVudEFwcHMoKS5sZW5ndGggPT09IDApIHtcbiAgbGV0IGNvbmZpZztcbiAgaWYgKCFwcm9jZXNzLmVudi5DTElFTlRfQ09ORklHKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIENMSUVOVF9DT05GSUcgZW52aXJvbm1lbnQgdmFyaWFibGUsICcpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBjb25maWcgPSBKU09OLnBhcnNlKHByb2Nlc3MuZW52LkNMSUVOVF9DT05GSUcpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgQ0xJRU5UX0NPTkZJRyBlbnZpcm9ubWVudCB2YXJpYWJsZScpO1xuICAgIH1cbiAgfVxuICBpbml0aWFsaXplQ2xpZW50QXBwKGNvbmZpZyk7XG59XG5cbmlmIChnZXRTZXJ2ZXJBcHBzKCkubGVuZ3RoID09PSAwKSB7XG4gIGxldCBjb25maWc7XG4gIGlmICghcHJvY2Vzcy5lbnYuU0VSVklDRV9BQ0NPVU5UKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFNFUlZJQ0VfQUNDT1VOVCBlbnZpcm9ubWVudCB2YXJpYWJsZScpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZXJ2aWNlQWNjb3VudCA9IEpTT04ucGFyc2UocHJvY2Vzcy5lbnYuU0VSVklDRV9BQ0NPVU5UKTtcbiAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgY3JlZGVudGlhbDogc2VydmVyQ2VydChzZXJ2aWNlQWNjb3VudCksXG4gICAgICB9O1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgU0VSVklDRV9BQ0NPVU5UIGVudmlyb25tZW50IHZhcmlhYmxlJyk7XG4gICAgfVxuICB9XG4gIGluaXRpYWxpemVTZXJ2ZXJBcHAoY29uZmlnKTtcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGggPSB7XG4gIHNlcnZlcjogZ2V0U2VydmVyQXV0aCgpLFxuICBjbGllbnQ6IGdldENsaWVudEF1dGgoKSxcbn07IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9pbmRyYWdpdGgvUHJhY3RpY2UvcmVtaXgtbGVhcm4vbXktcmVtaXgtYXBwL2FwcC9lbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9pbmRyYWdpdGgvUHJhY3RpY2UvcmVtaXgtbGVhcm4vbXktcmVtaXgtYXBwL2FwcC9yb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvaW5kcmFnaXRoL1ByYWN0aWNlL3JlbWl4LWxlYXJuL215LXJlbWl4LWFwcC9hcHAvcm91dGVzL2RyYXcvZnJlZURyYXcuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9pbmRyYWdpdGgvUHJhY3RpY2UvcmVtaXgtbGVhcm4vbXktcmVtaXgtYXBwL2FwcC9yb3V0ZXMvZHJhdy8kZHJhd0lkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvaW5kcmFnaXRoL1ByYWN0aWNlL3JlbWl4LWxlYXJuL215LXJlbWl4LWFwcC9hcHAvcm91dGVzL2luZGV4LmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvZHJhdy9mcmVlRHJhd1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZHJhdy9mcmVlRHJhd1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkcmF3L2ZyZWVEcmF3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9kcmF3LyRkcmF3SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RyYXcvJGRyYXdJZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkcmF3LzpkcmF3SWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGUsXG4gIHJlc3BvbnNlSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVEYXRhUmVxdWVzdCA9IChcbiAgcmVzcG9uc2UsXG4gIC8vIHNhbWUgYXJncyB0aGF0IGdldCBwYXNzZWQgdG8gdGhlIGFjdGlvbiBvciBsb2FkZXIgdGhhdCB3YXMgY2FsbGVkXG4gIHsgcmVxdWVzdCwgcGFyYW1zLCBjb250ZXh0IH1cbikgPT4ge1xuICBjb25zb2xlLmxvZygnSW5pdGFrbCcsIHBhcmFtcyk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ3JlbWl4JztcblxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdOZXcgUmVtaXggQXBwJyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz0nZW4nPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgICAgPHRpdGxlPldoaXRlYm9hcmQgQXBwbGljYXRpb248L3RpdGxlPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29uZmlnVG9vbExpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL0NvbmZpZ1Rvb2wvQ29uZmlnVG9vbCc7XG5pbXBvcnQgTWFpbkNvbXBvbmVudCwgeyBNYWluQ29tcG9uZW50U3R5bGVzIH0gZnJvbSAnfi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IHsgU2VsZWN0VG9vbExpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL1NlbGVjdFRvb2wvU2VsZWN0VG9vbCc7XG5pbXBvcnQgeyBUZXh0VG9vbExpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL1RleHRUb29sL1RleHRUb29sJztcbmltcG9ydCB7IFpvb21Db250YWluZXJMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9ab29tQ29udGFpbmVyL1pvb21Db250YWluZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IFtcbiAgLi4uTWFpbkNvbXBvbmVudFN0eWxlcygpLFxuICAuLi5TZWxlY3RUb29sTGlua3MoKSxcbiAgLi4uQ29uZmlnVG9vbExpbmtzKCksXG4gIC4uLlRleHRUb29sTGlua3MoKSxcbiAgLi4uWm9vbUNvbnRhaW5lckxpbmtzKCksXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnJlZURyYXdJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLCBsaW5lSGVpZ2h0OiAnMS40JyB9fT5cbiAgICAgIDxNYWluQ29tcG9uZW50IG1vdXNlTW92ZT17KCkgPT4ge319IHVwZGF0ZVNoYXBlPXsoKSA9PiB7fX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbmZpZ1Rvb2wuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIENvbmZpZ1Rvb2xMaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV1cbn1cblxuXG5mdW5jdGlvbiBDb25maWdUb29sKHsgdG9nZ2xlVGhlbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZmlnVG9vbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCIgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb25maWdMYWJlbFwiPkRhcmsgTW9kZTwvc3Bhbj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfSAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiIGlkPVwidG9nZ2xlRGFya01vZGVcIj48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdUb29sOyIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21haW4uY3NzJztcbmltcG9ydCBDb25maWdUb29sIGZyb20gJy4vQ29uZmlnVG9vbC9Db25maWdUb29sJztcbmltcG9ydCBTZWxlY3RUb29sIGZyb20gJy4vU2VsZWN0VG9vbC9TZWxlY3RUb29sJztcbmltcG9ydCBBcnJvdyBmcm9tICcuL1NoYXBlcy9BcnJvdyc7XG5pbXBvcnQgQ2hhbGsgZnJvbSAnLi9TaGFwZXMvQ2hhbGsnO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL1NoYXBlcy9DaXJjbGUnO1xuaW1wb3J0IERpYW1vbmQgZnJvbSAnLi9TaGFwZXMvRGlhbW9uZCc7XG5pbXBvcnQgRHJhd1RleHQgZnJvbSAnLi9TaGFwZXMvRHJhd1RleHQnO1xuaW1wb3J0IExpbmUgZnJvbSAnLi9TaGFwZXMvTGluZSc7XG5pbXBvcnQgTW92ZVRvb2wgZnJvbSAnLi9TaGFwZXMvTW92ZVRvb2wnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi9TaGFwZXMvUmVjdGFuZ2xlJztcbmltcG9ydCBUZXh0VG9vbCBmcm9tICcuL1RleHRUb29sL1RleHRUb29sJztcbmltcG9ydCB7IGRyYXdEaWFtb25kLCBkcmF3VGV4dCB9IGZyb20gJy4vdXRpbHMvZHJhd1NoYXBlcyc7XG5pbXBvcnQgeyBnZXRFbGVtZW50c0F0UG9zaXRpb24gfSBmcm9tICcuL3V0aWxzL2dldEVsZW1lbnRzQXRQb3NpdGlvbic7XG5pbXBvcnQgWm9vbUNvbnRhaW5lciBmcm9tICcuL1pvb21Db250YWluZXIvWm9vbUNvbnRhaW5lcic7XG5pbXBvcnQgSWRiIGZyb20gJy4vdXRpbHMvaWRiJztcbmltcG9ydCB7IFNvY2tldENvbnRleHQgfSBmcm9tICd+L2NvbnRleHRzL3NvY2tldENvbnRleHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gTWFpbkNvbXBvbmVudFN0eWxlcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cblxubGV0IHRvb2xzID0ge1xuICBtb3ZlOiAnJyxcbiAgY2hhbGs6IENoYWxrLFxuICBsaW5lOiBMaW5lLFxuICByZWN0OiBSZWN0LFxuICBhcnJvdzogQXJyb3csXG4gIHRleHQ6IERyYXdUZXh0LFxuICBjaXJjbGU6IENpcmNsZSxcbiAgZGlhbW9uZDogRGlhbW9uZCxcbiAgc2VsZWN0OiAnc2VsZWN0J1xufTtcblxubGV0IGJhc2VDb25maWcgPSB7XG4gIHNjYWxpbmdGYWN0b3I6IDEsXG4gIGJhc2VGb250U2l6ZTogMjQsXG4gIGJhc2VMaW5lSGVpZ2h0OiAoMTUwICogMjQpIC8gMTAwXG59XG5cblxuXG5jbGFzcyBNYWluQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNhbnZhc1dpZHRoOiAwLFxuICAgICAgY2FudmFzSGVpZ2h0OiAwLFxuICAgICAgc2VsZWN0ZWRUaGVtZTogJ2xpZ2h0JyxcbiAgICAgIHNlbGVjdGVkVG9vbDogJ2NoYWxrJyxcbiAgICAgIHNoYXBlczogW10sXG4gICAgICAuLi5iYXNlQ29uZmlnXG4gICAgfTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzID0gdGhpcy5hZGRFdmVudExpc3RlbmVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVG9vbCA9IHRoaXMudXBkYXRlVG9vbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1Rvb2wgPSB0aGlzLm9uQ2xpY2tUb29sLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkV2ZW50ID0gdGhpcy5vbkV2ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IgPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VUb1RleHRUb29sID0gdGhpcy5jaGFuZ2VUb1RleHRUb29sLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMgPSB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uV2hlZWxNb3ZlID0gdGhpcy5vbldoZWVsTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW1nVXBkYXRlID0gdGhpcy5pbWdVcGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdJbWFnZSA9IHRoaXMuZHJhd0ltYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVUaGVtZSA9IHRoaXMudXBkYXRlVGhlbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuem9vbUluID0gdGhpcy56b29tSW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnpvb21PdXQgPSB0aGlzLnpvb21PdXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaWRiID0gbmV3IElkYigpO1xuXG4gICAgdGhpcy5tYWluQ2FudmFzID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBzZXF1ZXVuY2UgaWQgXG4gICAgdGhpcy5pZCA9IDA7XG5cbiAgICAvLyBUbyBjaGVjayB3aGV0aGVyIHRoZSB1c2VyIGlzIGRyYWdnaW5nLlxuICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMuaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnaW5nRWxlbWVudCA9IG51bGw7XG5cblxuXG4gICAgLy8gVG8gZW11bGF0ZSBzY3JvbGwgYmVoYXZpb3VyXG4gICAgdGhpcy5zY3JvbGxYID0gMDtcbiAgICB0aGlzLnNjcm9sbFkgPSAwO1xuXG4gIH1cblxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgdGhpcy5pZGIuZ2V0RGF0YUZyb21JZGIoJ2FwcC1zdGF0ZS1wZXJzaXN0JykudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPj0gMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVzOiBkYXRhIH0sICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlkID0gZGF0YS5sZW5ndGggKyAxO1xuICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgY2FudmFzV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBjYW52YXNIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KVxuICAgIHRoaXMubWFpbkNvbnRleHQgPSB0aGlzLm1haW5DYW52YXMuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnOy8vIERlZmF1bHQgbGluZSBjb2xvci4gXG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lV2lkdGggPSAxLjA7Ly8gRGVmYXVsdCBzdHJva2Ugd2VpZ2h0LiBcblxuICAgIC8vIEZpbGwgdHJhbnNwYXJlbnQgY2FudmFzIHdpdGggZGFyayBncmV5IChTbyB3ZSBjYW4gdXNlIHRoZSBjb2xvciB0byBlcmFzZSkuIFxuICAgIHRoaXMudGVtcENvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiM0MjQyNDJcIiA6ICcjRkZGRkZGJztcbiAgICB0aGlzLnRlbXBDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpOy8vVG9wLCBMZWZ0LCBXaWR0aCwgSGVpZ2h0IG9mIGNhbnZhc1xuXG4gICAgdGhpcy50b29scyA9IHRvb2xzO1xuXG4gICAgbGV0IHNlbGVjdGVkT25lID0gdGhpcy50b29sc1t0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbF07XG5cbiAgICB0aGlzLnRvb2wgPSBuZXcgc2VsZWN0ZWRPbmUodGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuaW1nVXBkYXRlLCB0aGlzLmlkKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzLmNoYW5nZVRvVGV4dFRvb2wsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWxNb3ZlLCBmYWxzZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzLmNoYW5nZVRvVGV4dFRvb2wsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWxNb3ZlLCBmYWxzZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpO1xuICB9XG5cblxuICB6b29tSW4oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2NhbGluZ0ZhY3RvciA8PSAwLjEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldnN0YXRlKSA9PiB7XG4gICAgICBsZXQgYmFzZUZvbnRTaXplID0gcHJldnN0YXRlLmJhc2VGb250U2l6ZSAtIDM7XG4gICAgICBsZXQgYmFzZUxpbmVIZWlnaHQgPSAoMTUwICogYmFzZUZvbnRTaXplKSAvIDEwMDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZzdGF0ZSxcbiAgICAgICAgc2NhbGluZ0ZhY3RvcjogcHJldnN0YXRlLnNjYWxpbmdGYWN0b3IgLSAwLjEsXG4gICAgICAgIGJhc2VGb250U2l6ZSxcbiAgICAgICAgYmFzZUxpbmVIZWlnaHRcbiAgICAgIH1cbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmlkYi51cGRhdGVEYih0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3IsICdzY2FsaW5nRmFjdG9yJyk7XG4gICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH0pO1xuICB9XG5cbiAgem9vbU91dChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yID49IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldnN0YXRlKSA9PiB7XG4gICAgICBsZXQgYmFzZUZvbnRTaXplID0gcHJldnN0YXRlLmJhc2VGb250U2l6ZSArIDM7XG4gICAgICBsZXQgYmFzZUxpbmVIZWlnaHQgPSAoMTUwICogYmFzZUZvbnRTaXplKSAvIDEwMFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldnN0YXRlLFxuICAgICAgICBzY2FsaW5nRmFjdG9yOiBwcmV2c3RhdGUuc2NhbGluZ0ZhY3RvciArIDAuMSxcbiAgICAgICAgYmFzZUZvbnRTaXplLFxuICAgICAgICBiYXNlTGluZUhlaWdodFxuICAgICAgfVxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIHVwZGF0ZVRvb2wodmFsdWUsIGlkID0gbnVsbCkge1xuICAgIGlmICh0aGlzLnRvb2xzW3ZhbHVlXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVG9vbDogdmFsdWUgfSwgKCkgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0ZWRPbmUgPSB0aGlzLnRvb2xzW3RoaXMuc3RhdGUuc2VsZWN0ZWRUb29sXTtcbiAgICAgICAgaWYgKCFzZWxlY3RlZE9uZSB8fCBzZWxlY3RlZE9uZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIHN0b3JpbmcgdGhlIHNoYXBlcy4gd2UgYXJlIGdlbmVyYXRpbmcgaWRzLlxuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgKyAxO1xuICAgICAgICAgIHRoaXMudG9vbCA9IG5ldyBzZWxlY3RlZE9uZSh0aGlzLnRlbXBDYW52YXMuY3VycmVudCwgdGhpcy50ZW1wQ29udGV4dCwgdGhpcy5pbWdVcGRhdGUsIHRoaXMuaWQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b29sID0gbmV3IHNlbGVjdGVkT25lKHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCB0aGlzLnRlbXBDb250ZXh0LCB0aGlzLmltZ1VwZGF0ZSwgaWQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjYW52YXNXaWR0aDogd2luZG93LmlubmVyV2lkdGgsIGNhbnZhc0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH0sICgpID0+IHtcbiAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfSlcbiAgfVxuXG4gIG9uRXZlbnQoZXYpIHtcbiAgICBldi5feCA9IGV2Lng7XG4gICAgZXYuX3kgPSBldi55O1xuICAgIHRoaXMucHJvcHMubW91c2VNb3ZlKHsgeDogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueCAtIHRoaXMuc2Nyb2xsWCksIHk6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnkgLSB0aGlzLnNjcm9sbFkpIH0pXG4gICAgLy8gbGV0IGlzVXNlckRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wgPT09ICdzZWxlY3QnKSB7XG4gICAgICBpZiAoZXYudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgdGhpcy5tb3VzZVhQb3NpdGlvbiA9IGV2Ll94O1xuICAgICAgICB0aGlzLm1vdXNlWVBvc2l0aW9uID0gZXYuX3k7XG4gICAgICB9IGVsc2UgaWYgKGV2LnR5cGUgPT09ICdtb3VzZW1vdmUnKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdXNlWVBvc2l0aW9uICYmIHRoaXMubW91c2VYUG9zaXRpb24pIHtcbiAgICAgICAgICBsZXQgZGlmZlggPSBNYXRoLmFicyh0aGlzLm1vdXNlWFBvc2l0aW9uIC0gZXYuX3gpO1xuICAgICAgICAgIGxldCBkaWZmWSA9IE1hdGguYWJzKHRoaXMubW91c2VZUG9zaXRpb24gLSBldi5feSk7XG4gICAgICAgICAgaWYgKGRpZmZYID4gMjAgfHwgZGlmZlkgPiAyMCkge1xuICAgICAgICAgICAgdGhpcy5pc1VzZXJEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzVXNlckRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm1vdXNlWVBvc2l0aW9uID0gbnVsbDtcbiAgICAgIH1cblxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgICAgdGhpcy5tb3VzZVlQb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIC8vIEdldCB0aGUgdG9vbCdzIGV2ZW50IGhhbmRsZXIuIFxuXG4gICAgaWYgKHRoaXMuaXNVc2VyRHJhZ2dpbmcpIHtcbiAgICAgIC8vIEhhbmRsaW5uZyB0aGUgY2FzZSBmb3IgbW92ZVxuICAgICAgLy90aGlzLnNlbGVjdGVkVG9vbCA9ICdtb3ZlJztcbiAgICAgIC8vIHNpbmNlIHdlIGFyZSBtb3ZpbmcgYWNyb3NzIHRoZSBjYW52YXMuIHdlIG5lZWQgdG8gdGFrZSBpbnRvIHRoZSBhY2NvdW50IG9mIHNjcm9sbHggYW5kIHNjcm9sbHkgdmFsdWVzXG5cbiAgICAgIC8vL0NIQU5HRSA/Pz9cbiAgICAgIC8vIGV2Ll94ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueCAtIHRoaXMuc2Nyb2xsWCk7XG4gICAgICAvLyBldi5feSA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnkgLSB0aGlzLnNjcm9sbFkpO1xuICAgICAgLy8vQ0hBTkdFID8/PyBNb3ZlZCBpbnNpZGUgY29uZGl0aW9uXG4gICAgICBpZiAoIXRoaXMuZHJhZ2dpbmdFbGVtZW50KSB7XG4gICAgICAgIGV2Ll94ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueCAtIHRoaXMuc2Nyb2xsWCk7XG4gICAgICAgIGV2Ll95ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueSAtIHRoaXMuc2Nyb2xsWSk7XG4gICAgICAgIC8vIEZpcnN0IGNhc2Ugb2YgbW92ZSB0b29sIC0+IFVzZXIganVzdCBzZWxlY3RlZCB0aGUgZWxlbWVudC5ldmVudHMgc2hvdWxkIGJlIG1vdXNlZG93blxuICAgICAgICBsZXQgZWxlbWVudFNlbGVjdGVkID0gZ2V0RWxlbWVudHNBdFBvc2l0aW9uKHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKHRoaXMubW91c2VYUG9zaXRpb24gLSB0aGlzLnNjcm9sbFgpLCB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcih0aGlzLm1vdXNlWVBvc2l0aW9uIC0gdGhpcy5zY3JvbGxZKSwgdGhpcy5zdGF0ZS5zaGFwZXMpO1xuICAgICAgICBpZiAoZWxlbWVudFNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSBlbGVtZW50U2VsZWN0ZWQ7XG4gICAgICAgICAgbGV0IHNoYXBlcyA9IHRoaXMuc3RhdGUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiBzaGFwZS5pZCAhPT0gZWxlbWVudFNlbGVjdGVkLmlkKTtcbiAgICAgICAgICAvL3JlZHJhd2lnIHdpdGhvdXQgZWxlbWVudCBzZWxlY3RlZFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFwZXM6IHNoYXBlcywgc2VsZWN0ZWRUb29sOiAnbW92ZScgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pZGIudXBkYXRlRGIodGhpcy5zdGF0ZS5zaGFwZXMsICdhcHAtc3RhdGUtcGVyc2lzdCcpO1xuICAgICAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdFbGVtZW50ID0gZWxlbWVudFNlbGVjdGVkO1xuICAgICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQud2lkdGgsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LmhlaWdodCk7XG4gICAgICAgICAgICAvL21vZGlmeWlnIHRoZSBzZWxlY3RlZEVsZW1lbnRcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSB7XG4gICAgICAgICAgICAgIC4uLnRoaXMuc2VsZWN0ZWRFbGVtZW50LFxuICAgICAgICAgICAgICB4OiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LngpLFxuICAgICAgICAgICAgICB5OiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnkpLFxuICAgICAgICAgICAgICBlbmRYOiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmVuZFgpLFxuICAgICAgICAgICAgICBlbmRZOiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmVuZFkpLFxuICAgICAgICAgICAgICBzdGFydFg6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRYKSxcbiAgICAgICAgICAgICAgc3RhcnRZOiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnN0YXJ0WSksXG4gICAgICAgICAgICAgIHJhZGl1czogdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5yYWRpdXMpLFxuICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGggPyB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LndpZHRoKSA6IG51bGwsXG4gICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zZWxlY3RlZEVsZW1lbnQuaGVpZ2h0ID8gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5oZWlnaHQpIDogbnVsbCxcbiAgICAgICAgICAgICAgc2NhbGluZ0ZhY3RvcjogdGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvb2wgPSBuZXcgTW92ZVRvb2wodGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuaW1nVXBkYXRlLCBzZWxlY3RlZEVsZW1lbnQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSk7XG4gICAgICAgICAgICAvLyBlbGVtZW50IGlzIHByZXNlbnQuIHdlIG5lZWQgdG8gY2FsbCBtb3ZldG9vbFxuICAgICAgICAgICAgdGhpcy50b29sWydtb3VzZWRvd24nXShldik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vID8/IFxuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdXNlWFBvc2l0aW9uICE9PSBudWxsICYmIHRoaXMubW91c2VZUG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgLy8gZXZlbnRzIGFyZSBtb3VzZW1vdmUgb3IgbW91c2V1cC4gTmVlZCB0byBjaGVjayB3aGV0aGVyIHRoaXMgY29uZGl0aW9uIGlzIHJlcXVpcmVkXG4gICAgICAgIGlmIChldi50eXBlID09PSAnbW91c2Vtb3ZlJyB8fCBldi50eXBlID09PSAnbW91c2V1cCcpIHtcbiAgICAgICAgICAvLyBtb3ZldG9vbCBpbnN0YWNlIHNob3VsZCBhbHJlYWR5IGJ5IHByZXNlbnRcbiAgICAgICAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2xbZXYudHlwZV0oZXYpO1xuICAgICAgICAgICAgaWYgKGV2LnR5cGUgPT09ICdtb3VzZXVwJykge1xuICAgICAgICAgICAgICB0aGlzLmlzVXNlckRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICB0aGlzLm1vdXNlWVBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50b29sKSB7XG4gICAgICBsZXQgZnVuYyA9IHRoaXMudG9vbFtldi50eXBlXTtcbiAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgIGZ1bmMoZXYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tUb29sKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgIHRoaXMudXBkYXRlVG9vbChlLmN1cnJlbnRUYXJnZXQuaWQpO1xuICB9XG5cbiAgY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGNvb3Jkcykge1xuICAgIHJldHVybiBjb29yZHMgLyB0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3I7XG4gIH1cblxuICBjaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcihjb29yZHMpIHtcbiAgICByZXR1cm4gY29vcmRzICogdGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yO1xuICB9XG5cblxuICBkcmF3SW1hZ2UoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zaGFwZXMsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sKTtcbiAgICB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMoKTtcblxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblxuICAgICAgLy8gaWYgdGhlIGFjdGlvbiBpcyBkZWxldGUgb3IgbW92ZS4gd2VlIG5uZWVkIHRvIGNhbGwgcmVzZXREcmFnZ2luZ1ZhbHVlc1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wgPT09ICdtb3ZlJyB8fCB0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFRvb2w6ICdzZWxlY3QnIH0pO1xuICAgICAgICB0aGlzLnRvb2wgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYWluQ29udGV4dC5kcmF3SW1hZ2UodGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQsIDAsIDApO1xuICAgICAgICAvLy90aGlzLnRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQud2lkdGgsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LmhlaWdodCk7XG4gICAgICAgIC8vdGhpcy5yZW5kZXJQYXJ0aWN1bGFyU2hhcGUobW9kaWZpZWRJbWFnZSk7XG5cbiAgICAgICAgLy8gQ2hhbmdpbmcgdG8gc2VsZWN0IHRvb2wgb25jZSB3ZSBoYXZlIGRyYXduIGEgc2hhcGUgZXhjZXB0IHRvIHR5cGluZyB0ZXh0XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCAhPT0gJ3RleHQnKSB7XG5cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRUb29sOiAnc2VsZWN0JyB9KTtcbiAgICAgICAgICB0aGlzLnRvb2wgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0aGlzLnJlZHJhdygpO1xuXG4gICAgfSlcbiAgfVxuXG5cbiAgaW1nVXBkYXRlKGRyYXdlbkltYWdlKSB7XG4gICAgaWYgKGRyYXdlbkltYWdlICYmIGRyYXdlbkltYWdlLnR5cGUpIHtcbiAgICAgIC8qKiBUT0RPOiBDaGFuZ2UgdGhpcyBsb2dpYyB0byBvYmplY3Qga2V5IHZhbHVlIHN0cnVjdHVyZSAqL1xuXG4gICAgICBsZXQgbW9kaWZpZWRJbWFnZSA9IHtcbiAgICAgICAgLi4uZHJhd2VuSW1hZ2UsXG4gICAgICAgIHg6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLnggLSB0aGlzLnNjcm9sbFgpLFxuICAgICAgICB5OiB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS55IC0gdGhpcy5zY3JvbGxZKSxcbiAgICAgICAgZW5kWDogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2UuZW5kWCAtIHRoaXMuc2Nyb2xsWCksXG4gICAgICAgIGVuZFk6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLmVuZFkgLSB0aGlzLnNjcm9sbFkpLFxuICAgICAgICBzdGFydFg6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLnN0YXJ0WCAtIHRoaXMuc2Nyb2xsWCksXG4gICAgICAgIHN0YXJ0WTogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2Uuc3RhcnRZIC0gdGhpcy5zY3JvbGxZKSxcbiAgICAgICAgcmFkaXVzOiB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS5yYWRpdXMpLFxuICAgICAgICB3aWR0aDogZHJhd2VuSW1hZ2Uud2lkdGggPyB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS53aWR0aCkgOiBudWxsLFxuICAgICAgICBoZWlnaHQ6IGRyYXdlbkltYWdlLmhlaWdodCA/IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLmhlaWdodCkgOiBudWxsLFxuICAgICAgICBzY2FsaW5nRmFjdG9yOiB0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3JcbiAgICAgIH1cbiAgICAgIGxldCBmaWx0ZXJlZFNoYXBlcyA9IHRoaXMuc3RhdGUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiBzaGFwZS5pZCAhPT0gZHJhd2VuSW1hZ2UuaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlczogWy4uLmZpbHRlcmVkU2hhcGVzLCBtb2RpZmllZEltYWdlXSB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaWRiLnVwZGF0ZURiKHRoaXMuc3RhdGUuc2hhcGVzLCAnYXBwLXN0YXRlLXBlcnNpc3QnKTtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTaGFwZShtb2RpZmllZEltYWdlKTtcbiAgICAgICAgdGhpcy5kcmF3SW1hZ2UoKTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJhd0ltYWdlKCk7XG4gICAgfVxuXG5cbiAgfVxuXG4gIHJlZHJhdygpIHtcbiAgICBjb25zb2xlLmxvZygncmVkcmF3JylcbiAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFtdKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiNGRkZGRkZcIiA6ICcjMDAwMDAwJzs7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5maWxsU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiIzQyNDI0MlwiIDogJyMwMDAwMDAnOztcblxuICAgIHRoaXMuc3RhdGUuc2hhcGVzLmZvckVhY2goc2hhcGUgPT4ge1xuICAgICAgaWYgKHNoYXBlLnR5cGUgPT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLngpICsgdGhpcy5zY3JvbGxYLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnkpICsgdGhpcy5zY3JvbGxZLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLndpZHRoKSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS5oZWlnaHQpKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gJ2Fycm93Jykge1xuICAgICAgICBsZXQgaGVhZGxlbiA9IDEwO1xuICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgbGV0IGVuZFggPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLmVuZFgpICsgdGhpcy5zY3JvbGxYO1xuICAgICAgICBsZXQgZW5kWSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUuZW5kWSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgIGxldCBkeCA9IGVuZFggLSB4O1xuICAgICAgICBsZXQgZHkgPSBlbmRZIC0geTtcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyh4LCB5KVxuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYLCBlbmRZKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZW5kWCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgZW5kWSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKGVuZFgsIGVuZFkpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDYpLCBlbmRZIC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFgsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueSkgKyB0aGlzLnNjcm9sbFkpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyh0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLmVuZFgpICsgdGhpcy5zY3JvbGxYLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLmVuZFkpICsgdGhpcy5zY3JvbGxZKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjRkZGRkZGXCIgOiAnIzAwMDAwMCc7XG4gICAgICAgIGRyYXdUZXh0KHNoYXBlLnRleHRDb250ZW50LCB0aGlzLnRlbXBDb250ZXh0LCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLngpICsgdGhpcy5zY3JvbGxYLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnkpICsgdGhpcy5zY3JvbGxZLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLndpZHRoKSwgdGhpcy5zdGF0ZS5iYXNlTGluZUhlaWdodCwgY29sb3IsIHRoaXMuc3RhdGUuYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgbGV0IHggPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLngpICsgdGhpcy5zY3JvbGxYO1xuICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuYXJjKHgsIHksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUucmFkaXVzKSwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgICAgbGV0IHhDZW50ZXIgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLngpICsgdGhpcy5zY3JvbGxYO1xuICAgICAgICBsZXQgeUNlbnRlciA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS54IC0gc2hhcGUuZW5kWCk7XG4gICAgICAgIGRyYXdEaWFtb25kKHhDZW50ZXIsIHlDZW50ZXIsIHNpemUsIHRoaXMudGVtcENvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvLyBjbGVhciB0aGUgcHJlc2VudCBjYW52YXNcbiAgICB0aGlzLm1haW5Db250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLm1haW5DYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy5tYWluQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTtcbiAgICB0aGlzLm1haW5Db250ZXh0LmRyYXdJbWFnZSh0aGlzLnRlbXBDYW52YXMuY3VycmVudCwgMCwgMCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQud2lkdGgsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LmhlaWdodCk7XG4gIH1cblxuICBjaGFuZ2VUb1RleHRUb29sKGV2KSB7XG4gICAgZXYuX3ggPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi54IC0gdGhpcy5zY3JvbGxYKTtcbiAgICBldi5feSA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnkgLSB0aGlzLnNjcm9sbFkpO1xuXG4gICAgbGV0IGVuY2xvc2VkRWxlbWVudCA9IGdldEVsZW1lbnRzQXRQb3NpdGlvbihldi5feCwgZXYuX3ksIHRoaXMuc3RhdGUuc2hhcGVzKTtcblxuICAgIC8vIFRlbXBvcmFyaWx5IHVwZGF0aW5nIHRvb2wgbWFudWFsbHlcbiAgICAvL3RoaXMudXBkYXRlVG9vbCgndGV4dCcsIGVuY2xvc2VkRWxlbWVudCAmJiBlbmNsb3NlZEVsZW1lbnQudHlwZSA9PT0gJ3RleHQnID8gZW5jbG9zZWRFbGVtZW50LmlkIDogbnVsbCk7XG4gICAgdGhpcy5yZXNldERyYWdnaW5nVmFsdWVzKCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRUb29sOiAndGV4dCcgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldERyYWdnaW5nVmFsdWVzKCk7XG5cbiAgICAgIGxldCB0ZXh0SWQgPSBudWxsO1xuICAgICAgaWYgKGVuY2xvc2VkRWxlbWVudCAmJiBlbmNsb3NlZEVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHRleHRJZCA9IGVuY2xvc2VkRWxlbWVudC5pZDtcbiAgICAgICAgbGV0IHNoYXBlcyA9IHRoaXMuc3RhdGUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiBzaGFwZS5pZCAhPT0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuaWQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVzIH0sICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkICsgMTtcbiAgICAgICAgdGV4dElkID0gdGhpcy5pZDtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9vbCA9IG5ldyBEcmF3VGV4dCh0aGlzLnRlbXBDYW52YXMuY3VycmVudCwgdGhpcy50ZW1wQ29udGV4dCwgdGhpcy5pbWdVcGRhdGUsIHRleHRJZCwgdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lKTtcbiAgICAgIC8vIGlmIChlbmNsb3NlZEVsZW1lbnQgJiYgZW5jbG9zZWRFbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgLy8gICBsZXQgc2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHNoYXBlLmlkICE9PSB0aGlzLnNlbGVjdGVkRWxlbWVudC5pZCk7XG4gICAgICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBzaGFwZXMgfSwgKCkgPT4ge1xuICAgICAgLy8gICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfVxuXG4gICAgICBsZXQgZnVuYyA9IHRoaXMudG9vbFtldi50eXBlXTtcbiAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vIGZ1bmMgd2lsbCBiZSBkYmNsaWNrIGluIGRyYXd0ZXh0XG4gICAgICAgIGZ1bmMoZXYsIGVuY2xvc2VkRWxlbWVudCwgeyBzY3JvbGxYOiB0aGlzLnNjcm9sbFgsIHNjcm9sbFk6IHRoaXMuc2Nyb2xsWSwgc2NhbGluZ0ZhY3RvcjogdGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yIH0pO1xuICAgICAgfVxuICAgIH0pXG5cblxuXG4gIH1cblxuICBvbktleURvd24oZXYpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wgPT09ICd0ZXh0Jykge1xuICAgICAgLy8gRWFybHkgUmV0dXJuIGFzIHdlIGRvbnQgbmVlZCB0byBsaXN0ZW4gd2hpbGUgdGV4dGFyZWEgaXMgc2hvd25cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKChldi5rZXlDb2RlID49IDQ4ICYmIGV2LmtleUNvZGUgPD0gNTcpIHx8IChldi5rZXlDb2RlID49IDY1ICYmIGV2LmtleUNvZGUgPD0gOTApKSB7XG4gICAgICAvLyA0OCAtIDU3IG51bWJlciAwIC0gOSBhbmQgNjUgLSA5MCBBbHBoYWJldHlzXG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3BlY2lhbCBrZXlzIFxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50KSB7XG4gICAgICAgIC8vIEJhY2tzcGFjZSBvciBkZWxldGUga2V5XG4gICAgICAgIGlmIChldi53aGljaCA9PT0gNDYgfHwgZXYud2hpY2ggPT09IDgpIHtcbiAgICAgICAgICBsZXQgc2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHNoYXBlLmlkICE9PSB0aGlzLnNlbGVjdGVkRWxlbWVudC5pZCk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlcyB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uRG9jdW1lbnRDbGljayhldikge1xuICAgIGV2Ll94ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueCAtIHRoaXMuc2Nyb2xsWCk7XG4gICAgZXYuX3kgPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi55IC0gdGhpcy5zY3JvbGxZKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3RleHQnKSB7XG4gICAgICAvL1JldmVydHRpbmcgdHloaXVzIGlzIHJlcXVpcmVkLlxuXG5cbiAgICAgIHRoaXMudG9vbFsnb25CbHVyJ10oKTtcbiAgICAgIC8vIHRoaXMuc2VsZWN0ZWRUb29sID0gJ3NlbGVjdCc7XG4gICAgICAvLyB0aGlzLnRvb2wgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpO1xuICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IGdldEVsZW1lbnRzQXRQb3NpdGlvbihldi5feCwgZXYuX3ksIHRoaXMuc3RhdGUuc2hhcGVzKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50ID0gc2VsZWN0ZWRFbGVtZW50O1xuICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRFbGVtZW50KTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEVsZW1lbnQudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgICAgbGV0IHkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzZdKTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QoeCAtIDUsIHkgLSA1LCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LndpZHRoKSArIDEwLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmhlaWdodCkgKyAxMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEVsZW1lbnQudHlwZSA9PT0gJ2xpbmUnIHx8IHRoaXMuc2VsZWN0ZWRFbGVtZW50LnR5cGUgPT09ICdhcnJvdycpIHtcbiAgICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRYKSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRZKSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFs2XSk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHggLSA1LCB5IC0gNSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC53aWR0aCkgKyAxMCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5oZWlnaHQpICsgMTApO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgbGV0IHggPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LngpICsgdGhpcy5zY3JvbGxYO1xuICAgICAgICAgIGxldCB5ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC55KSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFs2XSk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmFyYyh4LCB5LCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnJhZGl1cykgKyAxMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEVsZW1lbnQudHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICAgICAgbGV0IHggPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnN0YXJ0WCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgICAgbGV0IHkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnN0YXJ0WSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbNl0pO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh4IC0gNSwgeSAtIDUsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGgpICsgMTAsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuaGVpZ2h0KSArIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgICAgbGV0IHkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzZdKTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QoeCAtIDUsIHkgLSA1LCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LndpZHRoKSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5oZWlnaHQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uV2hlZWxNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wgPT09ICd0ZXh0Jykge1xuICAgICAgLy8gRHJhd2luZyB0ZXh0IG9uIGNhbnZhcyBiZWZvcmUgc2Nyb2xsIG1vdmVcbiAgICAgIHRoaXMudG9vbFsnb25CbHVyJ10oKTtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxYID0gdGhpcy5zY3JvbGxYIC0gZS5kZWx0YVg7XG4gICAgdGhpcy5zY3JvbGxZID0gdGhpcy5zY3JvbGxZIC0gZS5kZWx0YVk7XG4gICAgdGhpcy5yZWRyYXcoKTtcbiAgfVxuXG4gIHJlc2V0RHJhZ2dpbmdWYWx1ZXMoKSB7XG4gICAgdGhpcy5pc1VzZXJEcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZHJhZ2dpbmdFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLm1vdXNlWFBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLm1vdXNlWVBvc2l0aW9uID0gbnVsbDtcbiAgfVxuXG5cbiAgdXBkYXRlVGhlbWUoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIChwcmV2c3RhdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5wcmV2c3RhdGUsXG4gICAgICAgICAgc2VsZWN0ZWRUaGVtZTogcHJldnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaydcbiAgICAgICAgfVxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiNGRkZGRkZcIiA6ICcjMDAwMDAwJzsvLyBEZWZhdWx0IGxpbmUgY29sb3IuIFxuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVXaWR0aCA9IDEuMDsvLyBEZWZhdWx0IHN0cm9rZSB3ZWlnaHQuIFxuXG4gICAgICAgIC8vIEZpbGwgdHJhbnNwYXJlbnQgY2FudmFzIHdpdGggZGFyayBncmV5IChTbyB3ZSBjYW4gdXNlIHRoZSBjb2xvciB0byBlcmFzZSkuIFxuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjNDI0MjQyXCIgOiAnI0ZGRkZGRic7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQud2lkdGgsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LmhlaWdodCk7Ly9Ub3AsIExlZnQsIFdpZHRoLCBIZWlnaHQgb2YgY2FudmFzXG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7ICctLWZvbnQtc2l6ZSc6IGAke3RoaXMuc3RhdGUuYmFzZUZvbnRTaXplfXB4YCwgJy0tbGluZS1oZWlnaHQnOiBgJHt0aGlzLnN0YXRlLmJhc2VMaW5lSGVpZ2h0fXB4YCwgY3Vyc29yOiBgJHt0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3NlbGVjdCcgPyBgdXJsKCcuLi9hc3NldHMvY3Vyc29yLnN2ZycpYCA6ICdjcm9zc2hhaXInfWAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/ICdkYXJrLW1vZGUnIDogJ2xpZ2h0LW1vZGUnfWB9PlxuICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiID5cbiAgICAgICAgICA8ZGl2IGlkPVwiYmxhY2tib2FyZFBsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwiZHJhd2luZ0NhbnZhc1wiIHJlZj17dGhpcy5tYWluQ2FudmFzfSB3aWR0aD17dGhpcy5zdGF0ZS5jYW52YXNXaWR0aH0gaGVpZ2h0PXt0aGlzLnN0YXRlLmNhbnZhc0hlaWdodH0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vc2NyaXB0XCI+V2UncmUgc29ycnksIHRoaXMgd2ViIGFwcGxpY2F0aW9uIGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIHdpdGggeW91ciBicm93c2VyLiBQbGVhc2UgdXNlXG4gICAgICAgICAgICAgICAgYW4gYWx0ZXJuYXRlIGJyb3dzZXIgb3IgZG93bmxvYWQgYSBzdXBwb3J0ZWQgPGJyIC8+YnJvd3Nlci5TdXBwb3J0ZWQgYnJvd3NlcnM6IDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5nb29nbGUuY29tL2Nocm9tZVwiPkdvb2dsZSBDaHJvbWU8L2E+LCA8YSBocmVmPVwiaHR0cDovL3d3dy5vcGVyYS5jb21cIj5PcGVyYTwvYT4sIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lm1vemlsbGEuY29tXCI+RmlyZWZveDwvYT4sIDxhIGhyZWY9XCJodHRwOi8vd3d3LmFwcGxlLmNvbS9zYWZhcmlcIj5TYWZhcmk8L2E+LCA8YnIgLz5hbmQgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25xdWVyb3Iub3JnXCI+S29ucXVlcm9yPC9hPi4gQWxzbyBtYWtlIHN1cmUgeW91ciBKYXZhU2NyaXB0IGlzIGVuYWJsZWQuPC9wPlxuICAgICAgICAgICAgPC9jYW52YXM+XG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwidGVtcENhbnZhc1wiIHJlZj17dGhpcy50ZW1wQ2FudmFzfSB3aWR0aD17dGhpcy5zdGF0ZS5jYW52YXNXaWR0aH0gaGVpZ2h0PXt0aGlzLnN0YXRlLmNhbnZhc0hlaWdodH0+PC9jYW52YXM+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZWxlY3RUb29sIHNlbGVjdGVkVG9vbD17dGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2x9IHVwZGF0ZVRvb2w9e3RoaXMub25DbGlja1Rvb2x9IC8+XG4gICAgICAgIDxDb25maWdUb29sIHRvZ2dsZVRoZW1lPXt0aGlzLnVwZGF0ZVRoZW1lfSAvPlxuICAgICAgICA8VGV4dFRvb2wgLz5cbiAgICAgICAgPFpvb21Db250YWluZXIgem9vbVJhbmdlPXt0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3J9IHpvb21PdXQ9e3RoaXMuem9vbU91dH0gem9vbUluPXt0aGlzLnpvb21Jbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29tcG9uZW50OyIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlbGVjdFRvb2wuY3NzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0VG9vbExpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuXG5mdW5jdGlvbiBTZWxlY3RUb29sKHsgc2VsZWN0ZWRUb29sLCB1cGRhdGVUb29sIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdFRvb2xcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2wtaWNvbiAke3NlbGVjdGVkVG9vbCA9PT0gJ3NlbGVjdCcgPyAnc2VsZWN0ZWQnIDogJyd9YH0gaWQ9XCJzZWxlY3RcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cblxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNMTEuOTQ3NiAwLjIyODgyM0MxMi4yNTI3IC0wLjA3NjI3NDMgMTIuNzQ3MyAtMC4wNzYyNzQzIDEzLjA1MjQgMC4yMjg4MjNMMTYuMTc3NCAzLjM1MzgyQzE2LjQ4MjUgMy42NTg5MiAxNi40ODI1IDQuMTUzNTggMTYuMTc3NCA0LjQ1ODY4QzE1Ljg3MjMgNC43NjM3NyAxNS4zNzc3IDQuNzYzNzcgMTUuMDcyNiA0LjQ1ODY4TDEzLjI4MTIgMi42NjczNVY4LjU5Mzc1QzEzLjI4MTIgOS4wMjUyMiAxMi45MzE1IDkuMzc1IDEyLjUgOS4zNzVDMTIuMDY4NSA5LjM3NSAxMS43MTg4IDkuMDI1MjIgMTEuNzE4OCA4LjU5Mzc1VjIuNjY3MzVMOS45Mjc0MyA0LjQ1ODY4QzkuNjIyMzMgNC43NjM3NyA5LjEyNzY3IDQuNzYzNzcgOC44MjI1NyA0LjQ1ODY4QzguNTE3NDggNC4xNTM1OCA4LjUxNzQ4IDMuNjU4OTIgOC44MjI1NyAzLjM1MzgyTDExLjk0NzYgMC4yMjg4MjNaTTEyLjUgMTUuNjI1QzEyLjkzMTUgMTUuNjI1IDEzLjI4MTIgMTUuOTc0OCAxMy4yODEyIDE2LjQwNjJWMjIuMzMyNkwxNS4wNzI2IDIwLjU0MTNDMTUuMzc3NyAyMC4yMzYyIDE1Ljg3MjMgMjAuMjM2MiAxNi4xNzc0IDIwLjU0MTNDMTYuNDgyNSAyMC44NDY0IDE2LjQ4MjUgMjEuMzQxMSAxNi4xNzc0IDIxLjY0NjJMMTMuMDUyNCAyNC43NzEyQzEyLjc0NzMgMjUuMDc2MyAxMi4yNTI3IDI1LjA3NjMgMTEuOTQ3NiAyNC43NzEyTDguODIyNTcgMjEuNjQ2MkM4LjUxNzQ4IDIxLjM0MTEgOC41MTc0OCAyMC44NDY0IDguODIyNTcgMjAuNTQxM0M5LjEyNzY3IDIwLjIzNjIgOS42MjIzMyAyMC4yMzYyIDkuOTI3NDMgMjAuNTQxM0wxMS43MTg3IDIyLjMzMjZWMTYuNDA2MkMxMS43MTg3IDE1Ljk3NDggMTIuMDY4NSAxNS42MjUgMTIuNSAxNS42MjVaXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Y29sb3JcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgZD1cIk0wLjIyODgyMyAxMy4wNTI0Qy0wLjA3NjI3NDMgMTIuNzQ3MyAtMC4wNzYyNzQzIDEyLjI1MjcgMC4yMjg4MjMgMTEuOTQ3NkwzLjM1MzgyIDguODIyNTdDMy42NTg5MiA4LjUxNzQ4IDQuMTUzNTggOC41MTc0OCA0LjQ1ODY4IDguODIyNTdDNC43NjM3NyA5LjEyNzY3IDQuNzYzNzcgOS42MjIzMyA0LjQ1ODY4IDkuOTI3NDNMMi42NjczNSAxMS43MTg4TDguNTkzNzUgMTEuNzE4OEM5LjAyNTIyIDExLjcxODggOS4zNzUgMTIuMDY4NSA5LjM3NSAxMi41QzkuMzc1IDEyLjkzMTUgOS4wMjUyMiAxMy4yODEzIDguNTkzNzUgMTMuMjgxM0wyLjY2NzM1IDEzLjI4MTJMNC40NTg2OCAxNS4wNzI2QzQuNzYzNzcgMTUuMzc3NyA0Ljc2Mzc3IDE1Ljg3MjMgNC40NTg2OCAxNi4xNzc0QzQuMTUzNTggMTYuNDgyNSAzLjY1ODkyIDE2LjQ4MjUgMy4zNTM4MiAxNi4xNzc0TDAuMjI4ODIzIDEzLjA1MjRaTTE1LjYyNSAxMi41QzE1LjYyNSAxMi4wNjg1IDE1Ljk3NDggMTEuNzE4OCAxNi40MDYyIDExLjcxODhIMjIuMzMyNkwyMC41NDEzIDkuOTI3NDNDMjAuMjM2MiA5LjYyMjMzIDIwLjIzNjIgOS4xMjc2NyAyMC41NDEzIDguODIyNTdDMjAuODQ2NCA4LjUxNzQ4IDIxLjM0MTEgOC41MTc0OCAyMS42NDYyIDguODIyNTdMMjQuNzcxMiAxMS45NDc2QzI1LjA3NjMgMTIuMjUyNyAyNS4wNzYzIDEyLjc0NzMgMjQuNzcxMiAxMy4wNTI0TDIxLjY0NjIgMTYuMTc3NEMyMS4zNDExIDE2LjQ4MjUgMjAuODQ2NCAxNi40ODI1IDIwLjU0MTMgMTYuMTc3NEMyMC4yMzYyIDE1Ljg3MjMgMjAuMjM2MiAxNS4zNzc3IDIwLjU0MTMgMTUuMDcyNkwyMi4zMzI2IDEzLjI4MTNIMTYuNDA2MkMxNS45NzQ4IDEzLjI4MTMgMTUuNjI1IDEyLjkzMTUgMTUuNjI1IDEyLjVaXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAncmVjdCcgPyAnc2VsZWN0ZWQnIDogJyd9YH0gaWQ9XCJyZWN0XCIgb25DbGljaz17dXBkYXRlVG9vbH0+XG5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRjb2xvclwiXG4gICAgICAgICAgICBkPVwiTTIxLjg3NSAxLjU2MjVDMjIuNzM3OSAxLjU2MjUgMjMuNDM3NSAyLjI2MjA2IDIzLjQzNzUgMy4xMjVWMjEuODc1QzIzLjQzNzUgMjIuNzM3OSAyMi43Mzc5IDIzLjQzNzUgMjEuODc1IDIzLjQzNzVIMy4xMjVDMi4yNjIwNiAyMy40Mzc1IDEuNTYyNSAyMi43Mzc5IDEuNTYyNSAyMS44NzVWMy4xMjVDMS41NjI1IDIuMjYyMDYgMi4yNjIwNiAxLjU2MjUgMy4xMjUgMS41NjI1SDIxLjg3NVpNMy4xMjUgMEMxLjM5OTExIDAgMCAxLjM5OTExIDAgMy4xMjVWMjEuODc1QzAgMjMuNjAwOSAxLjM5OTExIDI1IDMuMTI1IDI1SDIxLjg3NUMyMy42MDA5IDI1IDI1IDIzLjYwMDkgMjUgMjEuODc1VjMuMTI1QzI1IDEuMzk5MTEgMjMuNjAwOSAwIDIxLjg3NSAwSDMuMTI1WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2wtaWNvbiAke3NlbGVjdGVkVG9vbCA9PT0gJ2NpcmNsZScgPyAnc2VsZWN0ZWQnIDogJyd9YH0gaWQ9XCJjaXJjbGVcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRjb2xvclwiXG4gICAgICAgICAgICBkPVwiTTEyLjUgMjMuNDM3NUM2LjQ1OTM5IDIzLjQzNzUgMS41NjI1IDE4LjU0MDYgMS41NjI1IDEyLjVDMS41NjI1IDYuNDU5MzkgNi40NTkzOSAxLjU2MjUgMTIuNSAxLjU2MjVDMTguNTQwNiAxLjU2MjUgMjMuNDM3NSA2LjQ1OTM5IDIzLjQzNzUgMTIuNUMyMy40Mzc1IDE4LjU0MDYgMTguNTQwNiAyMy40Mzc1IDEyLjUgMjMuNDM3NVpNMTIuNSAyNUMxOS40MDM2IDI1IDI1IDE5LjQwMzYgMjUgMTIuNUMyNSA1LjU5NjQ0IDE5LjQwMzYgMCAxMi41IDBDNS41OTY0NCAwIDAgNS41OTY0NCAwIDEyLjVDMCAxOS40MDM2IDUuNTk2NDQgMjUgMTIuNSAyNVpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdhcnJvdycgPyAnc2VsZWN0ZWQnIDogJyd9YH0gaWQ9XCJhcnJvd1wiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Y29sb3JcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgZD1cIk0xLjU2MjUgMTIuNUMxLjU2MjUgMTIuMDY4NSAxLjkxMjI4IDExLjcxODcgMi4zNDM3NSAxMS43MTg3SDIwLjc3MDFMMTUuODUzOCA2LjgwMjQzQzE1LjU0ODcgNi40OTczMyAxNS41NDg3IDYuMDAyNjcgMTUuODUzOCA1LjY5NzU3QzE2LjE1ODkgNS4zOTI0NyAxNi42NTM2IDUuMzkyNDcgMTYuOTU4NyA1LjY5NzU3TDIzLjIwODcgMTEuOTQ3NkMyMy41MTM4IDEyLjI1MjcgMjMuNTEzOCAxMi43NDczIDIzLjIwODcgMTMuMDUyNEwxNi45NTg3IDE5LjMwMjRDMTYuNjUzNiAxOS42MDc1IDE2LjE1ODkgMTkuNjA3NSAxNS44NTM4IDE5LjMwMjRDMTUuNTQ4NyAxOC45OTczIDE1LjU0ODcgMTguNTAyNyAxNS44NTM4IDE4LjE5NzZMMjAuNzcwMSAxMy4yODEySDIuMzQzNzVDMS45MTIyOCAxMy4yODEyIDEuNTYyNSAxMi45MzE1IDEuNTYyNSAxMi41WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2wtaWNvbiAke3NlbGVjdGVkVG9vbCA9PT0gJ2xpbmUnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwibGluZVwiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuICAgICAgICA8c3ZnIGhlaWdodD1cIjI1XCIgd2lkdGg9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIj5cbiAgICAgICAgICA8bGluZSB4MT1cIjBcIiB5MT1cIjEwXCIgeDI9XCIyNVwiIHkyPVwiMjVcIiBzdHJva2U9XCJ2YXIoLS1pY29uLWNvbG9yKVwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAnZGlhbW9uZCcgPyAnc2VsZWN0ZWQnIDogJyd9YH0gaWQ9XCJkaWFtb25kXCIgb25DbGljaz17dXBkYXRlVG9vbH0+XG5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRjb2xvclwiXG4gICAgICAgICAgICBkPVwiTTEwLjg2MDMgMC42NzkxODVDMTEuNzY1OSAtMC4yMjYzOTYgMTMuMjM0MSAtMC4yMjYzOTQgMTQuMTM5NyAwLjY3OTE4NkwyNC4zMjA4IDEwLjg2MDNDMjUuMjI2NCAxMS43NjU5IDI1LjIyNjQgMTMuMjM0MSAyNC4zMjA4IDE0LjEzOTdMMTQuMTM5NyAyNC4zMjA4QzEzLjIzNDEgMjUuMjI2NCAxMS43NjU5IDI1LjIyNjQgMTAuODYwMyAyNC4zMjA4TDAuNjc5MTg1IDE0LjEzOTdDLTAuMjI2Mzk2IDEzLjIzNDEgLTAuMjI2Mzk0IDExLjc2NTkgMC42NzkxODYgMTAuODYwM0wxMC44NjAzIDAuNjc5MTg1Wk0xMy4wNDY2IDEuNzcyMzJDMTIuNzQ0NyAxLjQ3MDQ2IDEyLjI1NTMgMS40NzA0NiAxMS45NTM0IDEuNzcyMzJMMS43NzIzMiAxMS45NTM0QzEuNDcwNDYgMTIuMjU1MyAxLjQ3MDQ2IDEyLjc0NDcgMS43NzIzMiAxMy4wNDY2TDExLjk1MzQgMjMuMjI3N0MxMi4yNTUzIDIzLjUyOTUgMTIuNzQ0NyAyMy41Mjk1IDEzLjA0NjYgMjMuMjI3N0wyMy4yMjc3IDEzLjA0NjZDMjMuNTI5NSAxMi43NDQ3IDIzLjUyOTUgMTIuMjU1MyAyMy4yMjc3IDExLjk1MzRMMTMuMDQ2NiAxLjc3MjMyWlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2wtaWNvbiAke3NlbGVjdGVkVG9vbCA9PT0gJ2NoYWxrJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cImNoYWxrXCIgb25DbGljaz17dXBkYXRlVG9vbH0+XG5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwXzEyODdfMzQ5OClcIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Y29sb3JcIlxuICAgICAgICAgICAgICBkPVwiTTE4Ljk3ODggMC4yMjg4MjNDMTkuMjgzOSAtMC4wNzYyNzQzIDE5Ljc3ODYgLTAuMDc2Mjc0MyAyMC4wODM3IDAuMjI4ODIzTDI0Ljc3MTIgNC45MTYzMkMyNS4wNzYzIDUuMjIxNDIgMjUuMDc2MyA1LjcxNjA4IDI0Ljc3MTIgNi4wMjExOEw5LjE0NjIgMjEuNjQ2MkM5LjA3MTM5IDIxLjcyMSA4Ljk4MjE2IDIxLjc3OTggOC44ODM5MiAyMS44MTkxTDEuMDcxNDIgMjQuOTQ0MUMwLjc4MTI1MiAyNS4wNjAyIDAuNDQ5ODMyIDI0Ljk5MjIgMC4yMjg4NDYgMjQuNzcxMkMwLjAwNzg1OTIgMjQuNTUwMiAtMC4wNjAxNjc0IDI0LjIxODggMC4wNTU5MDA0IDIzLjkyODZMMy4xODA5IDE2LjExNjFDMy4yMjAxOSAxNi4wMTc5IDMuMjc5MDMgMTUuOTI4NiAzLjM1Mzg1IDE1Ljg1MzhMMTguOTc4OCAwLjIyODgyM1pNMTcuNTExMSAzLjkwNjI1TDIxLjA5MzggNy40ODg5TDIzLjExMzkgNS40Njg3NUwxOS41MzEzIDEuODg2MUwxNy41MTExIDMuOTA2MjVaTTE5Ljk4ODkgOC41OTM3NUwxNi40MDYzIDUuMDExMUw2LjI1MDAyIDE1LjE2NzRWMTUuNjI1SDcuMDMxMjdDNy40NjI3NSAxNS42MjUgNy44MTI1MiAxNS45NzQ4IDcuODEyNTIgMTYuNDA2MlYxNy4xODc1SDguNTkzNzdDOS4wMjUyNSAxNy4xODc1IDkuMzc1MDIgMTcuNTM3MyA5LjM3NTAyIDE3Ljk2ODhWMTguNzVIOS44MzI2N0wxOS45ODg5IDguNTkzNzVaTTQuNzM2OTggMTYuNjgwNEw0LjU3MjA5IDE2Ljg0NTNMMi4xODM2NiAyMi44MTY0TDguMTU0NzMgMjAuNDI3OUw4LjMxOTYyIDIwLjI2M0M4LjAyMzM4IDIwLjE1MiA3LjgxMjUyIDE5Ljg2NjMgNy44MTI1MiAxOS41MzEyVjE4Ljc1SDcuMDMxMjdDNi41OTk4IDE4Ljc1IDYuMjUwMDIgMTguNDAwMiA2LjI1MDAyIDE3Ljk2ODhWMTcuMTg3NUg1LjQ2ODc3QzUuMTMzNzcgMTcuMTg3NSA0Ljg0ODAxIDE2Ljk3NjYgNC43MzY5OCAxNi42ODA0WlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAwXzEyODdfMzQ5OFwiPlxuICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RUb29sOyIsICJjbGFzcyBBcnJvdyB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICB0aGlzLnRlbXBDYW52YXMgPSB0ZW1wQ2FudmFzO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0ZW1wQ29udGV4dDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5tb3VzZXVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZWRvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vtb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFswXSk7XG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZShlKTtcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICB0eXBlOiAnYXJyb3cnLFxuICAgICAgICB4OiB0aGlzLnN0YXJ0WCxcbiAgICAgICAgeTogdGhpcy5zdGFydFksXG4gICAgICAgIHN0YXJ0WDogTWF0aC5taW4odGhpcy5zdGFydFgsIGUuX3gpLCAvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgIHN0YXJ0WTogTWF0aC5taW4odGhpcy5zdGFydFksIGUuX3kpLC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgd2lkdGg6IE1hdGguYWJzKHRoaXMuc3RhcnRYIC0gZS5feCksXG4gICAgICAgIGhlaWdodDogTWF0aC5hYnModGhpcy5zdGFydFkgLSBlLl95KSxcbiAgICAgICAgZW5kWDogZS5feCxcbiAgICAgICAgZW5kWTogZS5feVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKGUpIHtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuX3g7XG4gICAgdGhpcy5zdGFydFkgPSBlLl95O1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgLyoqICovXG4gICAgbGV0IGNvc3BpeCA9IDAuODY2MDI1NDA0O1xuICAgIGxldCBoZWFkbGVuID0gMTA7XG4gICAgbGV0IGR4ID0gZS5feCAtIHRoaXMuc3RhcnRYO1xuICAgIGxldCBkeSA9IGUuX3kgLSB0aGlzLnN0YXJ0WTtcbiAgICBsZXQgbGVuZ3RoID0gTWF0aC5zcXJ0KGR5ICogZHkgKyBkeCAqIGR4KTsgLy9sZW5ndGggb2YgYXJyb3dcbiAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFkpO1xuICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGUuX3gsIGUuX3kpO1xuICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGUuX3ggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gNiksIGUuX3kgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gNikpO1xuICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKGUuX3gsIGUuX3kpO1xuICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGUuX3ggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksIGUuX3kgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNikpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJvdzsiLCAiY2xhc3MgQ2hhbGsge1xuICBjb25zdHJ1Y3Rvcih0ZW1wQ2FudmFzLCB0ZW1wQ29udGV4dCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLnRlbXBDYW52YXMgPSB0ZW1wQ2FudmFzO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0ZW1wQ29udGV4dDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5tb3VzZXVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZWRvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vtb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZS5feCwgZS5feSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihlKSB7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyhlLl94LCBlLl95KTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUoZSk7XG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhbGs7IiwgImltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSBcIi4uL3V0aWxzL2dldEVsZW1lbnRzQXRQb3NpdGlvbi5qc1wiO1xuXG5jbGFzcyBDaXJjbGUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wQ2FudmFzLCB0ZW1wQ29udGV4dCwgY2FsbGJhY2ssIGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzBdKTtcbiAgfVxuXG4gIG1vdXNlVXAoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlKGUpO1xuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICBsZXQgcmFkaXVzID0gZ2V0RGlzdGFuY2UodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCBlLl94LCBlLl95KTtcbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgIHg6IHRoaXMuc3RhcnRYLFxuICAgICAgICB5OiB0aGlzLnN0YXJ0WSxcbiAgICAgICAgd2lkdGg6IHJhZGl1cyAqIHJhZGl1cyxcbiAgICAgICAgaGVpZ2h0OiByYWRpdXMgKiByYWRpdXMsXG4gICAgICAgIGVuZFg6IGUuX3gsXG4gICAgICAgIGVuZFk6IGUuX3ksXG4gICAgICAgIHJhZGl1c1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKGUpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRYID0gZS5feDtcbiAgICB0aGlzLnN0YXJ0WSA9IGUuX3k7XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICBsZXQgcmFkaXVzID0gZ2V0RGlzdGFuY2UodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCBlLl94LCBlLl95KTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmFyYyh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlOyIsICJmdW5jdGlvbiBnZXRFbGVtZW50c0F0UG9zaXRpb24oeCwgeSwgc2hhcGVzKSB7XG4gIGxldCByZXR1cm5FbGVtZW50ID0gbnVsbDtcbiAgbGV0IGRpZmZYID0gbnVsbDtcbiAgbGV0IGRpZmZZID0gbnVsbDtcbiAgaWYgKHNoYXBlcy5sZW5ndGggPiAwKSB7XG4gICAgc2hhcGVzLmZvckVhY2goc2hhcGUgPT4ge1xuICAgICAgaWYgKHNoYXBlLnR5cGUgPT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHNoYXBlLndpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gc2hhcGUuaGVpZ2h0O1xuICAgICAgICBsZXQgZW5kWCA9IHNoYXBlLnggKyB3aWR0aDtcbiAgICAgICAgbGV0IGVuZFkgPSBzaGFwZS55ICsgaGVpZ2h0O1xuICAgICAgICBpZiAoc2hhcGUueCA8PSB4ICYmIHggPD0gZW5kWCkge1xuICAgICAgICAgIGlmIChzaGFwZS55IDw9IHkgJiYgeSA8PSBlbmRZKSB7XG4gICAgICAgICAgICBpZiAoIWRpZmZYIHx8ICFkaWZmWSkge1xuICAgICAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgICAgICAgIGRpZmZYID0gTWF0aC5taW4oeCAtIHNoYXBlLngsIGVuZFggLSB4KTtcbiAgICAgICAgICAgICAgZGlmZlkgPSBNYXRoLm1pbih5IC0gc2hhcGUueSwgZW5kWSAtIHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWCA9IE1hdGgubWluKHggLSBzaGFwZS54LCBlbmRYIC0geCk7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50RGlmZlkgPSBNYXRoLm1pbih5IC0gc2hhcGUueSwgZW5kWSAtIHkpO1xuICAgICAgICAgICAgICBpZiAoY3VycmVudERpZmZYIDwgZGlmZlggfHwgY3VycmVudERpZmZZIDwgZGlmZlkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgICAgICAgICAgZGlmZlggPSBjdXJyZW50RGlmZlg7XG4gICAgICAgICAgICAgICAgZGlmZlkgPSBjdXJyZW50RGlmZlk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnbGluZScgfHwgc2hhcGUudHlwZSA9PT0gJ2Fycm93Jykge1xuICAgICAgICBsZXQgc3RhcnRpbmdYQnVmZmVyID0gc2hhcGUueCAtIDEwO1xuICAgICAgICBsZXQgZW5kaW5nWEJ1ZmZlciA9IHNoYXBlLmVuZFggKyAxMDtcbiAgICAgICAgbGV0IHN0YXJ0aW5nWUJ1ZmZlciA9IHNoYXBlLnkgLSAxMDtcbiAgICAgICAgbGV0IGVuZGluZ1lCdWZmZXIgPSBzaGFwZS5lbmRZICsgMTA7XG5cbiAgICAgICAgbGV0IG1heFggPSBNYXRoLm1heChzdGFydGluZ1hCdWZmZXIsIGVuZGluZ1hCdWZmZXIpO1xuICAgICAgICBsZXQgbWF4WSA9IE1hdGgubWF4KHN0YXJ0aW5nWUJ1ZmZlciwgZW5kaW5nWUJ1ZmZlcik7XG5cbiAgICAgICAgbGV0IG1pblggPSBNYXRoLm1pbihzdGFydGluZ1hCdWZmZXIsIGVuZGluZ1hCdWZmZXIpO1xuICAgICAgICBsZXQgbWluWSA9IE1hdGgubWluKHN0YXJ0aW5nWUJ1ZmZlciwgZW5kaW5nWUJ1ZmZlcik7XG5cbiAgICAgICAgaWYgKG1pblggPD0geCAmJiB4IDw9IG1heFgpIHtcbiAgICAgICAgICBpZiAobWluWSA8PSB5ICYmIHkgPD0gbWF4WSkge1xuICAgICAgICAgICAgaWYgKCFkaWZmWCB8fCAhZGlmZlkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICBkaWZmWCA9IE1hdGgubWluKHggLSBtaW5YLCBtYXhYIC0geCk7XG4gICAgICAgICAgICAgIGRpZmZZID0gTWF0aC5taW4oeSAtIG1pblksIG1heFkgLSB5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50RGlmZlggPSBNYXRoLm1pbih4IC0gbWluWCwgbWF4WCAtIHgpO1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZZID0gTWF0aC5taW4oeSAtIG1pblksIG1heFkgLSB5KTtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnREaWZmWCA8IGRpZmZYIHx8IGN1cnJlbnREaWZmWSA8IGRpZmZZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICAgIGRpZmZYID0gY3VycmVudERpZmZYO1xuICAgICAgICAgICAgICAgIGRpZmZZID0gY3VycmVudERpZmZZO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAvL1xuICAgICAgICBpZiAoc2hhcGUueCA8PSB4ICYmIHggPD0gc2hhcGUuZW5kWCkge1xuICAgICAgICAgIGlmIChzaGFwZS55IDw9IHkgJiYgeSA8PSBzaGFwZS5lbmRZKSB7XG4gICAgICAgICAgICBpZiAoIWRpZmZYIHx8ICFkaWZmWSkge1xuICAgICAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgICAgICAgIGRpZmZYID0gTWF0aC5taW4oeCAtIHNoYXBlLngsIHNoYXBlLmVuZFggLSB4KTtcbiAgICAgICAgICAgICAgZGlmZlkgPSBNYXRoLm1pbih5IC0gc2hhcGUueSwgc2hhcGUuZW5kWSAtIHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWCA9IE1hdGgubWluKHggLSBzaGFwZS54LCBzaGFwZS5lbmRYIC0geCk7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50RGlmZlkgPSBNYXRoLm1pbih5IC0gc2hhcGUueSwgc2hhcGUuZW5kWSAtIHkpO1xuICAgICAgICAgICAgICBpZiAoY3VycmVudERpZmZYIDwgZGlmZlggfHwgY3VycmVudERpZmZZIDwgZGlmZlkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgICAgICAgICAgZGlmZlggPSBjdXJyZW50RGlmZlg7XG4gICAgICAgICAgICAgICAgZGlmZlkgPSBjdXJyZW50RGlmZlk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgbGV0IGRpc3RhbmNlc3F1YXJlZCA9ICh4IC0gc2hhcGUueCkgKiAoeCAtIHNoYXBlLngpICsgKHkgLSBzaGFwZS55KSAqICh5IC0gc2hhcGUueSk7XG4gICAgICAgIGlmIChkaXN0YW5jZXNxdWFyZWQgPD0gc2hhcGUucmFkaXVzICogc2hhcGUucmFkaXVzKSB7XG4gICAgICAgICAgLy8gPz8/IGhvdyB0byBjYWxjdWxhdGUgZGlmZi4gYnVnZ3kgYmVoYXZpb3VyXG4gICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICAgIC8vIGxldCBzdGFydFggPSBzaGFwZS54IC0gKHNoYXBlLndpZHRoIC8gMik7XG4gICAgICAgIC8vIGxldCBzdGFydFkgPSBzaGFwZS55O1xuICAgICAgICBsZXQgd2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICAgICAgbGV0IGVuZFggPSBzaGFwZS5zdGFydFggKyB3aWR0aDtcbiAgICAgICAgbGV0IGVuZFkgPSBzaGFwZS5zdGFydFkgKyBoZWlnaHQ7XG4gICAgICAgIGlmIChzaGFwZS5zdGFydFggPD0geCAmJiB4IDw9IGVuZFgpIHtcbiAgICAgICAgICBpZiAoc2hhcGUuc3RhcnRZIDw9IHkgJiYgeSA8PSBlbmRZKSB7XG4gICAgICAgICAgICBpZiAoIWRpZmZYIHx8ICFkaWZmWSkge1xuICAgICAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgICAgICAgIGRpZmZYID0gTWF0aC5taW4oeCAtIHNoYXBlLnN0YXJ0WCwgZW5kWCAtIHgpO1xuICAgICAgICAgICAgICBkaWZmWSA9IE1hdGgubWluKHkgLSBzaGFwZS5zdGFydFksIGVuZFkgLSB5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50RGlmZlggPSBNYXRoLm1pbih4IC0gc2hhcGUuc3RhcnRYLCBlbmRYIC0geCk7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50RGlmZlkgPSBNYXRoLm1pbih5IC0gc2hhcGUuc3RhcnRZLCBlbmRZIC0geSk7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50RGlmZlggPCBkaWZmWCB8fCBjdXJyZW50RGlmZlkgPCBkaWZmWSkge1xuICAgICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgICBkaWZmWCA9IGN1cnJlbnREaWZmWDtcbiAgICAgICAgICAgICAgICBkaWZmWSA9IGN1cnJlbnREaWZmWTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmV0dXJuRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDFYLCBwMVksIHAyWCwgcDJZKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDFYIC0gcDJYLCAyKSArIE1hdGgucG93KHAxWSAtIHAyWSwgMikpXG59XG5cblxuZXhwb3J0IHsgZ2V0RWxlbWVudHNBdFBvc2l0aW9uLCBnZXREaXN0YW5jZSB9OyIsICJpbXBvcnQgeyBkcmF3RGlhbW9uZCB9IGZyb20gXCIuLi91dGlscy9kcmF3U2hhcGVzLmpzXCI7XG5cbmNsYXNzIERpYW1vbmQge1xuICBjb25zdHJ1Y3Rvcih0ZW1wQ2FudmFzLCB0ZW1wQ29udGV4dCwgY2FsbGJhY2ssIGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzBdKTtcbiAgfVxuXG4gIG1vdXNlVXAoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlKGUpO1xuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICBsZXQgd2lkdGggPSAoTWF0aC5hYnModGhpcy5zdGFydFggLSBlLl94KSkgKiAyO1xuICAgICAgLy8gd2lkdGggYW5kIGhlaWdodCB3aWxsIGJlIHNhbWUgZm9yIHRoZSBkaWFtb25kIFxuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICB0eXBlOiAnZGlhbW9uZCcsXG4gICAgICAgIHg6IHRoaXMuc3RhcnRYLFxuICAgICAgICB5OiBlLl95LFxuICAgICAgICBzdGFydFg6IHRoaXMuc3RhcnRYIC0gKHdpZHRoIC8gMiksXG4gICAgICAgIHN0YXJ0WTogZS5feSAtICh3aWR0aCAvIDIpLFxuICAgICAgICAvLyB4Q2VudGVyOiB0aGlzLnN0YXJ0WCxcbiAgICAgICAgLy8geUNlbnRlcjogZS5feSxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpZHRoLFxuICAgICAgICBlbmRYOiBlLl94LFxuICAgICAgICBlbmRZOiBlLl95XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSBlLl94O1xuICAgIHRoaXMuc3RhcnRZID0gZS5feTtcbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgbGV0IHNpemUgPSB0aGlzLnN0YXJ0WCAtIGUuX3g7XG5cbiAgICAgIGxldCB4Q2VudGVyID0gdGhpcy5zdGFydFg7XG4gICAgICBsZXQgeUNlbnRlciA9IGUuX3k7XG5cblxuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIC8vIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAvLyB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyh4Q2VudGVyICsgc2l6ZSAqIE1hdGguY29zKDApLCB5Q2VudGVyICsgc2l6ZSAqIE1hdGguc2luKDApKTtcblxuICAgICAgLy8gZm9yICh2YXIgaSA9IDE7IGkgPD0gbnVtYmVyT2ZTaWRlczsgaSArPSAxKSB7XG4gICAgICAvLyAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKHhDZW50ZXIgKyBzaXplICogTWF0aC5jb3MoaSAqIDIgKiBNYXRoLlBJIC8gbnVtYmVyT2ZTaWRlcyksIHlDZW50ZXIgKyBzaXplICogTWF0aC5zaW4oaSAqIDIgKiBNYXRoLlBJIC8gbnVtYmVyT2ZTaWRlcykpO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuXG4gICAgICBkcmF3RGlhbW9uZCh4Q2VudGVyLCB5Q2VudGVyLCBzaXplLCB0aGlzLnRlbXBDb250ZXh0KVxuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYW1vbmQ7IiwgImZ1bmN0aW9uIGRyYXdEaWFtb25kKHhDZW50ZXIsIHlDZW50ZXIsIHNpemUsIGNvbnRleHQpIHtcbiAgbGV0IG51bWJlck9mU2lkZXMgPSA0O1xuICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICBjb250ZXh0Lm1vdmVUbyh4Q2VudGVyICsgc2l6ZSAqIE1hdGguY29zKDApLCB5Q2VudGVyICsgc2l6ZSAqIE1hdGguc2luKDApKTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8PSBudW1iZXJPZlNpZGVzOyBpICs9IDEpIHtcbiAgICBjb250ZXh0LmxpbmVUbyh4Q2VudGVyICsgc2l6ZSAqIE1hdGguY29zKGkgKiAyICogTWF0aC5QSSAvIG51bWJlck9mU2lkZXMpLCB5Q2VudGVyICsgc2l6ZSAqIE1hdGguc2luKGkgKiAyICogTWF0aC5QSSAvIG51bWJlck9mU2lkZXMpKTtcbiAgfVxuXG4gIGNvbnRleHQuc3Ryb2tlKCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdUZXh0KHRleHQsIGNvbnRleHQsIHgsIHksIG1heFdpZHRoLCBsaW5lSGVpZ2h0ID0gMzIsIGNvbG9yLCBmb250U2l6ZSA9IDI0KSB7XG4gIGNvbnRleHQuZm9udCA9IGBub3JtYWwgJHtmb250U2l6ZX1weC8ke2xpbmVIZWlnaHR9cHggQ29taWMgU2FucyBNU2A7XG4gIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gIGNvbnRleHQudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgbGV0IHdvcmRzID0gdGV4dC5zcGxpdCgnJyk7XG4gIGxldCBsaW5lID0gJyc7XG4gIGxldCBudW1iZXJPZkxpbmVzID0gMTtcblxuICBmb3IgKGxldCBuID0gMDsgbiA8IHdvcmRzLmxlbmd0aDsgbisrKSB7XG4gICAgaWYgKHdvcmRzW25dID09PSAnXFxuJykge1xuICAgICAgY29udGV4dC5maWxsVGV4dChsaW5lLCB4LCB5KTtcbiAgICAgIGxpbmUgPSAnJztcbiAgICAgIHkgKz0gbGluZUhlaWdodDtcbiAgICAgIG51bWJlck9mTGluZXMrKztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbGV0IHRlc3RMaW5lID0gbGluZSArIHdvcmRzW25dICsgJyc7XG4gICAgICAvLyBsZXQgbWV0cmljcyA9IGNvbnRleHQubWVhc3VyZVRleHQodGVzdExpbmUpO1xuICAgICAgLy8gbGV0IHRlc3RXaWR0aCA9IG1ldHJpY3Mud2lkdGg7XG4gICAgICAvLyBpZiAodGVzdFdpZHRoID4gbWF4V2lkdGggJiYgbiA+IDApIHtcbiAgICAgIC8vICAgY29udGV4dC5maWxsVGV4dChsaW5lLCB4LCB5KTtcbiAgICAgIC8vICAgbGluZSA9IHdvcmRzW25dICsgJyc7XG4gICAgICAvLyAgIHkgKz0gbGluZUhlaWdodDtcbiAgICAgIC8vICAgbnVtYmVyT2ZMaW5lcysrO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgbGluZSA9IHRlc3RMaW5lO1xuICAgICAgLy8gfVxuICAgICAgbGV0IHRlc3RMaW5lID0gbGluZSArIHdvcmRzW25dICsgJyc7XG4gICAgICBsaW5lID0gdGVzdExpbmU7XG4gICAgfVxuXG4gIH1cbiAgY29udGV4dC5maWxsVGV4dChsaW5lLCB4LCB5KTtcbiAgcmV0dXJuIG51bWJlck9mTGluZXM7XG59XG5cblxuZXhwb3J0IHsgZHJhd0RpYW1vbmQsIGRyYXdUZXh0IH07IiwgImltcG9ydCB7IGRyYXdUZXh0IH0gZnJvbSBcIi4uL3V0aWxzL2RyYXdTaGFwZXMuanNcIjtcblxuY2xhc3MgRHJhd1RleHQge1xuICBjb25zdHJ1Y3Rvcih0ZW1wQ2FudmFzLCB0ZW1wQ29udGV4dCwgY2FsbGJhY2ssIGlkLCBzZWxlY3RlZFRoZW1lKSB7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuaW5pdGlhbFRleHQgPSAnJztcbiAgICB0aGlzLnRlbXBDYW52YXMgPSB0ZW1wQ2FudmFzO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0ZW1wQ29udGV4dDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5kYmxjbGljayA9IHRoaXMub25kYmxjbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRleHRCb3hDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEJveENvbnRhaW5lcklkJyk7XG4gICAgdGhpcy50ZXh0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRBcmVhSWQnKTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRUaGVtZSA9IHNlbGVjdGVkVGhlbWU7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoKTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy50ZXh0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLm9uQmx1cik7XG4gICAgdGhpcy50ZXh0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7XG4gICAgdGhpcy50ZXh0Qm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLm9uQmx1cik7XG4gICAgdGhpcy50ZXh0Qm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMudGV4dEJveCkge1xuICAgICAgY29uc29sZS5sb2coJ0RyYXdpbmcgdGV4dCcsIHRoaXMudGV4dEJveC5pbm5lckhUTUwpO1xuICAgICAgbGV0IHRleHQgPSB0aGlzLnRleHRCb3guaW5uZXJIVE1MLnJlcGxhY2UoLzxkaXY+L2csIFwiXFxuXCIpLnJlcGxhY2UoLzxcXC9kaXY+L2csIFwiXCIpLnJlcGxhY2UoLzxicj4vZywgXCJcXG5cIikucmVwbGFjZSgnJm5ic3A7JywgJyAnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgICAgbGV0IGNvbG9yID0gdGhpcy5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiNGRkZGRkZcIiA6ICcjMDAwMDAwJztcblxuXG5cbiAgICAgIC8vIFRPRE86IFJlcGxhY2UgdW5kZWZpbmVkIHdpdGggZXhhY3QgbGluZSBoZWlnaHRcbiAgICAgIGxldCB0ZXh0YXJlYVN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy50ZXh0Qm94KTtcbiAgICAgIGxldCB0ZXR4dGFyZWFDbGllbnRTdHlsZSA9IHRoaXMudGV4dEJveC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRleHRhcmVhU3R5bGUpO1xuICAgICAgbGV0IHdpZHRoID0gTWF0aC5jZWlsKE51bWJlcih0ZXh0YXJlYVN0eWxlLndpZHRoLnNsaWNlKDAsIC0yKSkpO1xuICAgICAgbGV0IGhlaWdodCA9IE1hdGguY2VpbChOdW1iZXIodGV4dGFyZWFTdHlsZS5oZWlnaHQuc2xpY2UoMCwgLTIpKSk7XG4gICAgICBjb25zb2xlLmxvZyh3aWR0aCk7XG4gICAgICAvL2xldCBudW1iZXJPZkxpbmVzID0gZHJhd1RleHQodGV4dCwgdGhpcy50ZW1wQ29udGV4dCwgdGV0eHRhcmVhQ2xpZW50U3R5bGUueCwgdGV0eHRhcmVhQ2xpZW50U3R5bGUueSwgTWF0aC5jZWlsKHdpZHRoKSwgdW5kZWZpbmVkLCBjb2xvciwgdGhpcy5iYXNlRm9udFNpemUpO1xuXG5cbiAgICAgIC8vbGV0IHRleHRNZXRyaWNzID0gdGhpcy50ZW1wQ29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KTtcblxuICAgICAgLy8gQWRkaW5nIGJ1ZmZlciAxMCB0byB0aGUgaGVpZ2h0IGFuZCB3aWR0aCB2YWx1ZXNcbiAgICAgIC8vbGV0IGhlaWdodCA9IE1hdGguYWJzKHRleHRNZXRyaWNzLmZvbnRCb3VuZGluZ0JveEFzY2VudCkgKyBNYXRoLmFicyh0ZXh0TWV0cmljcy5mb250Qm91bmRpbmdCb3hEZXNjZW50KSArIDEwO1xuICAgICAgLy9sZXQgd2lkdGggPSBNYXRoLmFicyh0ZXh0TWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveExlZnQpICsgTWF0aC5hYnModGV4dE1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hSaWdodCkgKyAxMDtcbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB4OiB0ZXR4dGFyZWFDbGllbnRTdHlsZS5sZWZ0LFxuICAgICAgICB5OiB0ZXR4dGFyZWFDbGllbnRTdHlsZS50b3AsXG4gICAgICAgIHRleHRDb250ZW50OiB0ZXh0LFxuICAgICAgICBpbm5lckh0bWw6IHRoaXMudGV4dEJveC5pbm5lckhUTUwsXG4gICAgICAgIGVuZFg6IHRoaXMuc3RhcnRYICsgd2lkdGgsXG4gICAgICAgIGVuZFk6IHRoaXMuc3RhcnRZICsgaGVpZ2h0LFxuICAgICAgICAvL3dpZHRoOiBNYXRoLmFicyh0ZXh0TWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveExlZnQpICsgTWF0aC5hYnModGV4dE1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hSaWdodCksXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXNldHRpbmcgdGhlIHRleHRhcmVhIHZhbHVlc1xuICAgICAgLy8gdGhpcy50ZXh0Qm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLm9uQmx1cik7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9ICcxcHgnO1xuICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9ICc0MnB4JztcbiAgICAgIHRoaXMudGV4dEJveC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMudGV4dEJveENvbnRhaW5lciA9IG51bGw7XG4gICAgICB0aGlzLnRleHRCb3ggPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG9uZGJsY2xpY2soZXYsIGVuY2xvc2VkRWxlbWVudCwgeyBzY3JvbGxYLCBzY3JvbGxZLCBzY2FsaW5nRmFjdG9yIH0pIHtcbiAgICAvLyBUT0RPOiBDdXJyZW50bHkgaW1wbGVtZW50ZWQgZm9yIHJlY3RhbmdsZSBlbmNsb3NlZCBlbGVtZW50LiBDaGVjayBwb3NzaWJpbGl0eSBmb3IgYWxsIG90aGVyIHNoYXBlc1xuICAgIHRoaXMuc3RhcnRYID0gZXYueDtcbiAgICB0aGlzLnN0YXJ0WSA9IGV2Lnk7XG4gICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLnRvcCA9IGAke2V2Lnl9cHhgO1xuICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7ZXYueH1weGA7XG4gICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMudGV4dEJveC5mb2N1cygpO1xuXG4gICAgaWYgKGVuY2xvc2VkRWxlbWVudCkge1xuICAgICAgaWYgKGVuY2xvc2VkRWxlbWVudC50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgICAvLyB0byBoYXZlIGVxdWkgc3BhY2UgYXJvdW5kIHRoZSBob3Jpem9udGFsIGVkZ2VcbiAgICAgICAgLy8gbGV0IGRpZmZYID0gTWF0aC5hYnMoTWF0aC5hYnMoZW5jbG9zZWRFbGVtZW50LnggKiBzY2FsaW5nRmFjdG9yKSAtIE1hdGguYWJzKGV2Ll94KSk7XG4gICAgICAgIC8vIGxldCBlbmNsb3NlZFggPSBNYXRoLmFicyhNYXRoLmFicyhlbmNsb3NlZEVsZW1lbnQuZW5kWCAqIHNjYWxpbmdGYWN0b3IpIC0gZGlmZlgpO1xuICAgICAgICAvLyBsZXQgZGlmZlkgPSBNYXRoLmFicyhNYXRoLmFicyhlbmNsb3NlZEVsZW1lbnQueSAqIHNjYWxpbmdGYWN0b3IpIC0gTWF0aC5hYnMoZXYuX3kpKTtcbiAgICAgICAgLy8gbGV0IGVuY2xvc2VkWSA9IE1hdGguYWJzKE1hdGguYWJzKGVuY2xvc2VkRWxlbWVudC5lbmRZICogc2NhbGluZ0ZhY3RvcikgLSBkaWZmWSk7XG5cbiAgICAgICAgLy8gdGhpcy53aWR0aCA9IGAke01hdGguYWJzKGVuY2xvc2VkWCAtIGV2Ll94KX1gO1xuICAgICAgICAvLyB0aGlzLmhlaWdodCA9IGAke01hdGguYWJzKGVuY2xvc2VkWSAtIGV2Ll95KX1gO1xuXG4gICAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgICAgfSBlbHNlIGlmIChlbmNsb3NlZEVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtlbmNsb3NlZEVsZW1lbnQueSAqIHNjYWxpbmdGYWN0b3IgKyBzY3JvbGxZfXB4YDtcbiAgICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtlbmNsb3NlZEVsZW1lbnQueCAqIHNjYWxpbmdGYWN0b3IgKyBzY3JvbGxYfXB4YDtcbiAgICAgICAgdGhpcy50ZXh0Qm94LmlubmVySFRNTCA9IGVuY2xvc2VkRWxlbWVudC5pbm5lckh0bWw7XG4gICAgICAgIHRoaXMud2lkdGggPSBlbmNsb3NlZEVsZW1lbnQud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZW5jbG9zZWRFbGVtZW50LmhlaWdodDtcbiAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnNlbGVjdEFsbENoaWxkcmVuKHRoaXMudGV4dEJveClcbiAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLmNvbGxhcHNlVG9FbmQoKTtcbiAgICAgICAgLy8gdGhpcy5zdGFydFggPSBlbmNsb3NlZEVsZW1lbnQueDtcbiAgICAgICAgLy8gdGhpcy5zdGFydFkgPSBlbmNsb3NlZEVsZW1lbnQueTtcbiAgICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG4gICAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUT0RPOiB0byBoYXZlIGVxdWkgc3BhY2UgYXJvdW5kIHRoZSBob3Jpem9udGFsIGVkZ2VcblxuICAgICAgICAvLyB0aGlzLndpZHRoID0gYCR7TWF0aC5hYnModGhpcy50ZW1wQ2FudmFzLndpZHRoIC0gZXYueCkgLSAxMH1gO1xuICAgICAgICAvLyB0aGlzLmhlaWdodCA9IGAke01hdGguYWJzKHRoaXMudGVtcENhbnZhcy5oZWlnaHQgLSBldi55KSAtIDEwfWA7XG4gICAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgICAgfVxuICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGZvciBhbGwgc2hhcGVzXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE86IHRvIGhhdmUgZXF1aSBzcGFjZSBhcm91bmQgdGhlIGhvcml6b250YWwgZWRnZVxuXG4gICAgICAvLyB0aGlzLndpZHRoID0gYCR7TWF0aC5hYnModGhpcy50ZW1wQ2FudmFzLndpZHRoIC0gZXYueCkgLSAxMH1gO1xuICAgICAgLy8gdGhpcy5oZWlnaHQgPSBgJHtNYXRoLmFicyh0aGlzLnRlbXBDYW52YXMuaGVpZ2h0IC0gZXYueSkgLSAxMH1gO1xuICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG4gICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3VGV4dDsiLCAiY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLnRlbXBDYW52YXMgPSB0ZW1wQ2FudmFzO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0ZW1wQ29udGV4dDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5tb3VzZXVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZWRvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vtb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFswXSk7IC8vIGNsZWFyaWcgbGluZSBkYXNoZWRcbiAgfVxuXG4gIG1vdXNlVXAoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlKGUpO1xuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgeDogdGhpcy5zdGFydFgsXG4gICAgICAgIHk6IHRoaXMuc3RhcnRZLFxuICAgICAgICBzdGFydFg6IE1hdGgubWluKHRoaXMuc3RhcnRYLCBlLl94KSwgLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICBzdGFydFk6IE1hdGgubWluKHRoaXMuc3RhcnRZLCBlLl95KSwvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgIHdpZHRoOiBNYXRoLmFicyh0aGlzLnN0YXJ0WCAtIGUuX3gpLCAvLyBDaGVjayBpZiBpdCBpcyB3cm9uZyBjYWxjdWxhdGlvbi5cbiAgICAgICAgaGVpZ2h0OiBNYXRoLmFicyh0aGlzLnN0YXJ0WSAtIGUuX3kpLCAvL0NoZWNrIGlmIGl0IGlzIHdyb25nIGNhbGN1bGF0aW9uXG4gICAgICAgIGVuZFg6IGUuX3gsXG4gICAgICAgIGVuZFk6IGUuX3lcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5zdGFydFggPSBlLl94O1xuICAgIHRoaXMuc3RhcnRZID0gZS5feTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8odGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlLl94LCBlLl95KTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgIHRoaXMudGVtcENvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluZTsiLCAiaW1wb3J0IHsgZHJhd0RpYW1vbmQsIGRyYXdUZXh0IH0gZnJvbSBcIi4uL3V0aWxzL2RyYXdTaGFwZXMuanNcIjtcblxuY2xhc3MgTW92ZVRvb2wge1xuICBjb25zdHJ1Y3Rvcih0ZW1wQ2FudmFzLCB0ZW1wQ29udGV4dCwgY2FsbGJhY2ssIGVsZW1lbnQsIHRoZW1lKSB7XG4gICAgdGhpcy5pZCA9IGVsZW1lbnQuaWQ7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdGVkVGhlbWUgPSB0aGVtZTtcbiAgICAvL3RoaXMuZHJhd0V4aXNpdGluZ0VsZW1lbnRPblRlbXAoKTtcbiAgfVxuXG4gIG1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuX3g7XG4gICAgdGhpcy5zdGFydFkgPSBlLl95O1xuICAgIC8vIFRlbXAgQ2hlY2suIE5lZWQgdG8gYWRvcHQgdG8gYWxsIHRoaXMuZWxlbWVudHMuIGRvaW5nIHRoaXMgZm9yIHJlY3RhbmdsZSBjaGVjayBpbml0aWFsLlxuICAgIHRoaXMuZGlmZlggPSBNYXRoLmFicyh0aGlzLmVsZW1lbnQueCAtIHRoaXMuc3RhcnRYKTtcbiAgICB0aGlzLmRpZmZZID0gTWF0aC5hYnModGhpcy5lbGVtZW50LnkgLSBlLnkpO1xuICAgIHRoaXMuZHJhd0V4aXNpdGluZ0VsZW1lbnRPblRlbXAoKTtcbiAgfVxuXG4gIG1vdXNlVXAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZU1vdmUoZSk7XG4gICAgICAvLyBGb3IgcmVjdGFuZ2xlXG4gICAgICBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICAgIGlkOiB0aGlzLmVsZW1lbnQuaWQsXG4gICAgICAgICAgdHlwZTogJ3JlY3RhbmdsZScsXG4gICAgICAgICAgeDogZS5feCxcbiAgICAgICAgICB5OiBlLl95LFxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1lbnQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1lbnQuaGVpZ2h0LFxuICAgICAgICAgIGVuZFg6IGUuX3gsXG4gICAgICAgICAgZW5kWTogZS5feVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdhcnJvdycpIHtcbiAgICAgICAgbGV0IGVuZFggPSB0aGlzLmVsZW1lbnQuZW5kWCA+IHRoaXMuZWxlbWVudC54ID8gZS5feCArIHRoaXMuZWxlbWVudC53aWR0aCA6IGUuX3ggLSB0aGlzLmVsZW1lbnQud2lkdGg7XG4gICAgICAgIGxldCBlbmRZID0gdGhpcy5lbGVtZW50LmVuZFkgPiB0aGlzLmVsZW1lbnQueSA/IGUuX3kgKyB0aGlzLmVsZW1lbnQuaGVpZ2h0IDogZS5feSAtIHRoaXMuZWxlbWVudC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgIHR5cGU6ICdhcnJvdycsXG4gICAgICAgICAgeDogZS5feCxcbiAgICAgICAgICB5OiBlLl95LFxuICAgICAgICAgIHN0YXJ0WDogTWF0aC5taW4oZW5kWCwgZS5feCksIC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgICBzdGFydFk6IE1hdGgubWluKGVuZFksIGUuX3kpLC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtZW50LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtZW50LmhlaWdodCxcbiAgICAgICAgICBlbmRYLFxuICAgICAgICAgIGVuZFlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnbGluZScpIHtcbiAgICAgICAgbGV0IGVuZFggPSB0aGlzLmVsZW1lbnQuZW5kWCA+IHRoaXMuZWxlbWVudC54ID8gZS5feCArIHRoaXMuZWxlbWVudC53aWR0aCA6IGUuX3ggLSB0aGlzLmVsZW1lbnQud2lkdGg7XG4gICAgICAgIGxldCBlbmRZID0gdGhpcy5lbGVtZW50LmVuZFkgPiB0aGlzLmVsZW1lbnQueSA/IGUuX3kgKyB0aGlzLmVsZW1lbnQuaGVpZ2h0IDogZS5feSAtIHRoaXMuZWxlbWVudC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICB4OiBlLl94LFxuICAgICAgICAgIHk6IGUuX3ksXG4gICAgICAgICAgc3RhcnRYOiBNYXRoLm1pbihlLl94LCBlbmRYKSwgLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICAgIHN0YXJ0WTogTWF0aC5taW4oZS5feSwgZW5kWSksLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1lbnQud2lkdGgsIC8vIENoZWNrIGlmIGl0IGlzIHdyb25nIGNhbGN1bGF0aW9uLlxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtZW50LmhlaWdodCwgLy9DaGVjayBpZiBpdCBpcyB3cm9uZyBjYWxjdWxhdGlvblxuICAgICAgICAgIGVuZFgsXG4gICAgICAgICAgZW5kWVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICAgIHg6IGUuX3gsXG4gICAgICAgICAgeTogZS5feSxcbiAgICAgICAgICByYWRpdXM6IHRoaXMuZWxlbWVudC5yYWRpdXMsXG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxlbWVudC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbWVudC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdHlwZTogJ2RpYW1vbmQnLFxuICAgICAgICAgIHg6IGUuX3gsXG4gICAgICAgICAgeTogZS5feSxcbiAgICAgICAgICBzdGFydFg6IGUuX3ggLSAodGhpcy5lbGVtZW50LndpZHRoIC8gMiksXG4gICAgICAgICAgc3RhcnRZOiBlLl95IC0gKHRoaXMuZWxlbWVudC53aWR0aCAvIDIpLFxuICAgICAgICAgIC8vIHhDZW50ZXI6IHRoaXMuc3RhcnRYLFxuICAgICAgICAgIC8vIHlDZW50ZXI6IGUuX3ksXG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxlbWVudC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbWVudC5oZWlnaHQsXG4gICAgICAgICAgZW5kWDogZS5feCArICh0aGlzLmVsZW1lbnQud2lkdGggLyAyKSxcbiAgICAgICAgICBlbmRZOiBlLl95ICsgdGhpcy5lbGVtZW50LmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgeDogZS5feCxcbiAgICAgICAgICB5OiBlLl95LFxuICAgICAgICAgIHRleHRDb250ZW50OiB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQsXG4gICAgICAgICAgZW5kWDogZS5feCArIE51bWJlcih0aGlzLmVsZW1lbnQud2lkdGgpLFxuICAgICAgICAgIGVuZFk6IGUuX3kgKyB0aGlzLmVsZW1lbnQuaGVpZ2h0LFxuICAgICAgICAgIC8vd2lkdGg6IE1hdGguYWJzKHRleHRNZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94TGVmdCkgKyBNYXRoLmFicyh0ZXh0TWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveFJpZ2h0KSxcbiAgICAgICAgICB3aWR0aDogTnVtYmVyKHRoaXMuZWxlbWVudC53aWR0aCksXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1lbnQuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdChlLl94LCBlLl95LCB0aGlzLmVsZW1lbnQud2lkdGgsIHRoaXMuZWxlbWVudC5oZWlnaHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdhcnJvdycpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICBsZXQgaGVhZGxlbiA9IDEwO1xuICAgICAgbGV0IGRpZmZYID0gTWF0aC5hYnModGhpcy5lbGVtZW50LnggLSBlLl94KTtcbiAgICAgIGxldCBkaWZmWSA9IE1hdGguYWJzKHRoaXMuZWxlbWVudC55IC0gZS5feSk7XG4gICAgICBsZXQgeCA9IHRoaXMuZWxlbWVudC54ICsgZGlmZlg7XG4gICAgICBsZXQgeSA9IHRoaXMuZWxlbWVudC55ICsgZGlmZlk7XG4gICAgICBsZXQgZW5kWDtcbiAgICAgIGxldCBlbmRZO1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC5lbmRYID4gdGhpcy5lbGVtZW50LngpIHtcbiAgICAgICAgZW5kWCA9IGUuX3ggKyB0aGlzLmVsZW1lbnQud2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRYID0gZS5feCAtIHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5lbmRZID4gdGhpcy5lbGVtZW50LnkpIHtcbiAgICAgICAgZW5kWSA9IGUuX3kgKyB0aGlzLmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kWSA9IGUuX3kgLSB0aGlzLmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgfVxuXG5cbiAgICAgIGxldCBkeCA9IGVuZFggLSB4O1xuICAgICAgbGV0IGR5ID0gZW5kWSAtIHk7XG4gICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZS5feCwgZS5feSlcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFgsIGVuZFkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZW5kWCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgZW5kWSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyhlbmRYLCBlbmRZKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksIGVuZFkgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNikpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgbGV0IGVuZFg7XG4gICAgICBsZXQgZW5kWTtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuZW5kWCA+IHRoaXMuZWxlbWVudC54KSB7XG4gICAgICAgIGVuZFggPSBlLl94ICsgdGhpcy5lbGVtZW50LndpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kWCA9IGUuX3ggLSB0aGlzLmVsZW1lbnQud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuZW5kWSA+IHRoaXMuZWxlbWVudC55KSB7XG4gICAgICAgIGVuZFkgPSBlLl95ICsgdGhpcy5lbGVtZW50LmhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFkgPSBlLl95IC0gdGhpcy5lbGVtZW50LmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyhlLl94LCBlLl95KTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFgsIGVuZFkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5hcmMoZS5feCwgZS5feSwgdGhpcy5lbGVtZW50LnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICBkcmF3RGlhbW9uZChlLl94LCBlLl95LCB0aGlzLmVsZW1lbnQud2lkdGggLyAyLCB0aGlzLnRlbXBDb250ZXh0KVxuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIGxldCBjb2xvciA9IHRoaXMuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjRkZGRkZGXCIgOiAnIzAwMDAwMCc7XG4gICAgICBkcmF3VGV4dCh0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQsIHRoaXMudGVtcENvbnRleHQsIGUuX3gsIGUuX3ksIHRoaXMuZWxlbWVudC53aWR0aCwgdW5kZWZpbmVkLCBjb2xvcilcbiAgICB9XG4gIH1cblxuXG5cblxuICBkcmF3RXhpc2l0aW5nRWxlbWVudE9uVGVtcCgpIHtcbiAgICAvLyAgdHlwZSA9PT0gJ3JlY3RhbmdsZSdcbiAgICBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QodGhpcy5lbGVtZW50LngsIHRoaXMuZWxlbWVudC55LCB0aGlzLmVsZW1lbnQud2lkdGgsIHRoaXMuZWxlbWVudC5oZWlnaHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdhcnJvdycpIHtcbiAgICAgIGxldCBoZWFkbGVuID0gMTA7XG4gICAgICBsZXQgZHggPSB0aGlzLmVsZW1lbnQuZW5kWCAtIHRoaXMuZWxlbWVudC54O1xuICAgICAgbGV0IGR5ID0gdGhpcy5lbGVtZW50LmVuZFkgLSB0aGlzLmVsZW1lbnQueTtcbiAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyh0aGlzLmVsZW1lbnQueCwgdGhpcy5lbGVtZW50LnkpXG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyh0aGlzLmVsZW1lbnQuZW5kWCwgdGhpcy5lbGVtZW50LmVuZFkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8odGhpcy5lbGVtZW50LmVuZFggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gNiksIHRoaXMuZWxlbWVudC5lbmRZIC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHRoaXMuZWxlbWVudC5lbmRYLCB0aGlzLmVsZW1lbnQuZW5kWSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyh0aGlzLmVsZW1lbnQuZW5kWCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgdGhpcy5lbGVtZW50LmVuZFkgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNikpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8odGhpcy5lbGVtZW50LngsIHRoaXMuZWxlbWVudC55KTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKHRoaXMuZWxlbWVudC5lbmRYLCB0aGlzLmVsZW1lbnQuZW5kWSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYXJjKHRoaXMuZWxlbWVudC54LCB0aGlzLmVsZW1lbnQueSwgdGhpcy5lbGVtZW50LnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIGxldCB4Q2VudGVyID0gdGhpcy5lbGVtZW50Lng7XG4gICAgICBsZXQgeUNlbnRlciA9IHRoaXMuZWxlbWVudC55O1xuICAgICAgbGV0IHNpemUgPSB0aGlzLmVsZW1lbnQueCAtIHRoaXMuZWxlbWVudC5lbmRYO1xuICAgICAgZHJhd0RpYW1vbmQoeENlbnRlciwgeUNlbnRlciwgc2l6ZSwgdGhpcy50ZW1wQ29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBsZXQgY29sb3IgPSB0aGlzLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnO1xuICAgICAgZHJhd1RleHQodGhpcy5lbGVtZW50LnRleHRDb250ZW50LCB0aGlzLnRlbXBDb250ZXh0LCB0aGlzLmVsZW1lbnQueCwgdGhpcy5lbGVtZW50LnksIHRoaXMuZWxlbWVudC53aWR0aCwgdW5kZWZpbmVkLCBjb2xvcik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmVUb29sOyIsICJjbGFzcyBSZWN0IHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLnRlbXBDYW52YXMgPSB0ZW1wQ2FudmFzO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0ZW1wQ29udGV4dDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5tb3VzZXVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZWRvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vtb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFswXSk7XG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZShlKTtcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICB0eXBlOiAncmVjdGFuZ2xlJyxcbiAgICAgICAgeDogTWF0aC5taW4odGhpcy5zdGFydFgsIGUuX3gpLFxuICAgICAgICB5OiBNYXRoLm1pbih0aGlzLnN0YXJ0WSwgZS5feSksXG4gICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICBlbmRYOiBNYXRoLm1heCh0aGlzLnN0YXJ0WCwgZS5feCksXG4gICAgICAgIGVuZFk6IE1hdGgubWF4KHRoaXMuc3RhcnRZLCBlLl95KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKGUpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRYID0gZS5feDtcbiAgICB0aGlzLnN0YXJ0WSA9IGUuX3k7XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIGxldCB4ID0gTWF0aC5taW4oZS5feCwgdGhpcy5zdGFydFgpO1xuICAgICAgbGV0IHkgPSBNYXRoLm1pbihlLl95LCB0aGlzLnN0YXJ0WSk7XG4gICAgICBsZXQgd2lkdGggPSBNYXRoLmFicyhlLl94IC0gdGhpcy5zdGFydFgpO1xuICAgICAgbGV0IGhlaWdodCA9IE1hdGguYWJzKGUuX3kgLSB0aGlzLnN0YXJ0WSk7XG5cbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG5cbiAgICAgIGlmICghd2lkdGggfHwgIWhlaWdodCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjdDsiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0VG9vbC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gVGV4dFRvb2xMaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV1cbn1cblxuZnVuY3Rpb24gVGV4dFRvb2woKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fSBjbGFzc05hbWU9XCJ0ZXh0VG9vbFwiIGlkPVwidGV4dEJveENvbnRhaW5lcklkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRhcmVhXCIgaWQ9XCJ0ZXh0QXJlYUlkXCIgcm9sZT1cInRleHRib3hcIiBjb250ZW50RWRpdGFibGUgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUZXh0VG9vbDsiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ab29tQ29udGFpbmVyLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBab29tQ29udGFpbmVyTGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV1cbn1cblxuZnVuY3Rpb24gWm9vbUNvbnRhaW5lcih7IHpvb21SYW5nZSwgem9vbUluLCB6b29tT3V0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInpvb21Db250YWluZXJcIj5cbiAgICAgIDxzcGFuIGlkPVwibWludXNcIiBjbGFzc05hbWU9XCJ6b29tLXNpZ25cIiBvbkNsaWNrPXt6b29tSW59PlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgZD1cIk0zLjEyNSAxMi41QzMuMTI1IDEyLjA2ODUgMy40NzQ3OCAxMS43MTg4IDMuOTA2MjUgMTEuNzE4OEgyMS4wOTM4QzIxLjUyNTIgMTEuNzE4OCAyMS44NzUgMTIuMDY4NSAyMS44NzUgMTIuNUMyMS44NzUgMTIuOTMxNSAyMS41MjUyIDEzLjI4MTIgMjEuMDkzOCAxMy4yODEySDMuOTA2MjVDMy40NzQ3OCAxMy4yODEyIDMuMTI1IDEyLjkzMTUgMy4xMjUgMTIuNVpcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRjb2xvclwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gaWQ9XCJ6b29tUmFuZ2VcIiBjbGFzc05hbWU9XCJ6b29tLXJhbmdlXCI+e01hdGguZmxvb3Ioem9vbVJhbmdlICogMTAwKX08L3NwYW4+XG4gICAgICA8c3BhbiBpZD1cInBsdXNcIiBjbGFzc05hbWU9XCJ6b29tLXNpZ25cIiBvbkNsaWNrPXt6b29tT3V0fT5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNMTIuNSAzLjEyNUMxMi45MzE1IDMuMTI1IDEzLjI4MTIgMy40NzQ3OCAxMy4yODEyIDMuOTA2MjVWMTEuNzE4OEgyMS4wOTM4QzIxLjUyNTIgMTEuNzE4OCAyMS44NzUgMTIuMDY4NSAyMS44NzUgMTIuNUMyMS44NzUgMTIuOTMxNSAyMS41MjUyIDEzLjI4MTIgMjEuMDkzOCAxMy4yODEySDEzLjI4MTJWMjEuMDkzOEMxMy4yODEyIDIxLjUyNTIgMTIuOTMxNSAyMS44NzUgMTIuNSAyMS44NzVDMTIuMDY4NSAyMS44NzUgMTEuNzE4NyAyMS41MjUyIDExLjcxODcgMjEuMDkzOFYxMy4yODEySDMuOTA2MjVDMy40NzQ3OCAxMy4yODEyIDMuMTI1IDEyLjkzMTUgMy4xMjUgMTIuNUMzLjEyNSAxMi4wNjg1IDMuNDc0NzggMTEuNzE4OCAzLjkwNjI1IDExLjcxODhIMTEuNzE4OFYzLjkwNjI1QzExLjcxODggMy40NzQ3OCAxMi4wNjg1IDMuMTI1IDEyLjUgMy4xMjVaXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Y29sb3JcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc3Bhbj5cblxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFpvb21Db250YWluZXI7IiwgImNsYXNzIElkYiB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgaW5pdGlhbGl6ZUluZGV4ZWREYigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZXF1ZXN0ID0gc2VsZi5pbmRleGVkREIub3BlbigncmVkdXgtc3RhdGUnLCAnMScpO1xuICAgICAgdGhpcy5yZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmRiID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgdGhpcy5kYi5jcmVhdGVPYmplY3RTdG9yZSgncmVkdXgtcGVyc2lzdGFuY2UnLCB7XG4gICAgICAgICAga2V5OiAnYXBwLXN0YXRlLXBlcnNpc3QnXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgdGhpcy5yZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgcmVqZWN0KCdlcnInKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnJlcXVlc3Qub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICByZXNvbHZlKCdzdWNjZXNzJyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cblxuICAvLyB0cmFuc2FjdGlvbiBkYXRhIHdpbGwgYmUga2V5IGluIHJlYWRvbmx5IG1vZGUgYW5kIHZhbHVlIHRvIGJlIHN0b3JlZCBpbiBjYXNlIG9mIHVwZGF0ZVxuICBwZXJmb3JtVHJhbnNhY3Rpb24obW9kZSwgeyBrZXkgPSBudWxsLCB0cmFuc2FjdGlvbkRhdGEgPSBudWxsIH0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgIGlmICghdGhpcy5kYiB8fCAhdGhpcy5kYi50cmFuc2FjdGlvbikge1xuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuaW5pdGlhbGl6ZUluZGV4ZWREYigpKTtcbiAgICAgIH1cbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLmRiLnRyYW5zYWN0aW9uKFsncmVkdXgtcGVyc2lzdGFuY2UnXSwgbW9kZSk7XG4gICAgICAgIGNvbnN0IHJlZHV4U3RhdGUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgncmVkdXgtcGVyc2lzdGFuY2UnKTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdyZWFkb25seScpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uUmVxID0gcmVkdXhTdGF0ZS5nZXQoa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRyYW5zYWN0aW9uUmVxID0gcmVkdXhTdGF0ZS5wdXQodHJhbnNhY3Rpb25EYXRhLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25SZXEub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShldmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25SZXEub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICAgIHJlamVjdCgnRXJyb3Igd2hpbGUgaW5pdGlhbGl6aW5nIHRyYW5zYXRpb24nLCBldmVudCk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldERhdGFGcm9tSWRiKGtleSkge1xuICAgIHJldHVybiB0aGlzLnBlcmZvcm1UcmFuc2FjdGlvbigncmVhZG9ubHknLCB7IGtleSB9KS50aGVuKCh0cmFuc2FjdGlvbkV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBtZXNzYWdlT2JqID0ge1xuICAgICAgICBtZXNzYWdlOiAnR0VUX0RBVEFfU1VDQ0VTUycsXG4gICAgICAgIHBheWxvYWQ6IHRyYW5zYWN0aW9uRXZlbnQudGFyZ2V0LnJlc3VsdFxuICAgICAgfTtcbiAgICAgIHJldHVybiB0cmFuc2FjdGlvbkV2ZW50LnRhcmdldC5yZXN1bHRcbiAgICAgIC8vIHN5bmNUYWJzKGNsaWVudElkLCBtZXNzYWdlT2JqKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZURiKGRhdGEsIGtleSkge1xuICAgIHRoaXMucGVyZm9ybVRyYW5zYWN0aW9uKCdyZWFkd3JpdGUnLCB7IHRyYW5zYWN0aW9uRGF0YTogZGF0YSwga2V5IH0pLnRoZW4oKHRyYW5zYWN0aW9uRGV0KSA9PiB7XG4gICAgICAvLyBUT0RPOiBVbmNvbW1lbnQgdGhlIGJlbG93IGxpbmUgaWYgc3luY2luZyBpcyByZXF1aXJlZCBiZXR3ZWVuIHRhYnMuXG4gICAgICAvKiBzeW5jVGFicyhjbGllbnRJZCwgZGF0YSk7ICovXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3Igd2hpbGUgcGVyZm9ybWluZyB0cmFuc2FjdGlvbicsIHRyYW5zYWN0aW9uRGV0KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IElkYjsiLCAiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBTb2NrZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU29ja2V0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNvY2tldFByb3ZpZGVyKHsgc29ja2V0LCBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiA8U29ja2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c29ja2V0fT57Y2hpbGRyZW59PC9Tb2NrZXRDb250ZXh0LlByb3ZpZGVyPjtcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQge1xuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VGZXRjaGVyLFxuICB1c2VUcmFuc2l0aW9uLFxuICB1c2VBY3Rpb25EYXRhLFxufSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxuaW1wb3J0IHsgQ29uZmlnVG9vbExpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL0NvbmZpZ1Rvb2wvQ29uZmlnVG9vbCc7XG5pbXBvcnQgTWFpbkNvbXBvbmVudCwgeyBNYWluQ29tcG9uZW50U3R5bGVzIH0gZnJvbSAnfi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IHsgU2VsZWN0VG9vbExpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL1NlbGVjdFRvb2wvU2VsZWN0VG9vbCc7XG5pbXBvcnQgeyBUZXh0VG9vbExpbmtzIH0gZnJvbSAnfi9jb21wb25lbnRzL1RleHRUb29sL1RleHRUb29sJztcbmltcG9ydCB7IFpvb21Db250YWluZXJMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9ab29tQ29udGFpbmVyL1pvb21Db250YWluZXInO1xuaW1wb3J0IHsgaGFuZGxlRGF0YVJlcXVlc3QgfSBmcm9tICd+L2VudHJ5LnNlcnZlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcbmltcG9ydCB7IFNvY2tldFByb3ZpZGVyIH0gZnJvbSAnfi9jb250ZXh0cy9zb2NrZXRDb250ZXh0JztcbmltcG9ydCB7IGFkZFNoYXBlLCBnZXRJbml0aWFsRHJhd0RhdGEgfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvZGInO1xuaW1wb3J0IElkYiBmcm9tICd+L2NvbXBvbmVudHMvdXRpbHMvaWRiJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW1xuICAuLi5NYWluQ29tcG9uZW50U3R5bGVzKCksXG4gIC4uLlNlbGVjdFRvb2xMaW5rcygpLFxuICAuLi5Db25maWdUb29sTGlua3MoKSxcbiAgLi4uVGV4dFRvb2xMaW5rcygpLFxuICAuLi5ab29tQ29udGFpbmVyTGlua3MoKSxcbiAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCwgcGFyYW1zIH0pID0+IHtcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgbGV0IGRyYXdEYXRhID0gYXdhaXQgZ2V0SW5pdGlhbERyYXdEYXRhKHBhcmFtcy5kcmF3SWQpO1xuICByZXR1cm4ganNvbih7IGRyYXdEYXRhIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGxldCBuYW1lID0gYm9keS5nZXQoJ2RhdGEnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGFkZFNoYXBlKHBhcmFtcy5kcmF3SWQsIG5hbWUpO1xuICByZXR1cm4ganNvbih7IGRhdGEgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmF3SW5kZXgoKSB7XG4gIGNvbnN0IGZldGNoZXIgPSB1c2VGZXRjaGVyKCk7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XG5cbiAgY29uc29sZS5sb2coYWN0aW9uRGF0YSk7XG4gIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBpZGIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gbmV3IElkYigpO1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNvY2tldCA9IGlvKCk7XG4gICAgc2V0U29ja2V0KHNvY2tldCk7XG4gICAgc29ja2V0LmVtaXQoJ2V2ZW50JywgJ2NvbmVuY3Rpb24gc3VjY2VzcycpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuICAgIHNvY2tldC5vbignY29uZmlybWF0aW9uJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuICAgIHNvY2tldC5vbignbW91c2Vtb3ZlJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVTaGFwZShzaGFwZSkge1xuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLnNldCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHsgLi4uc2hhcGUgfSkpO1xuICAgIGZldGNoZXIuc3VibWl0KGZvcm1EYXRhLCB7IG1ldGhvZDogJ3Bvc3QnIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnREZXRhaWxzKSB7XG4gICAgc29ja2V0LmVtaXQoJ21vdXNlbW92ZScsIGV2ZW50RGV0YWlscyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsIGxpbmVIZWlnaHQ6ICcxLjQnIH19PlxuICAgICAgPFNvY2tldFByb3ZpZGVyIHNvY2tldD17c29ja2V0fT5cbiAgICAgICAgPE1haW5Db21wb25lbnQgbW91c2VNb3ZlPXtvbk1vdXNlTW92ZX0gdXBkYXRlU2hhcGU9e3VwZGF0ZVNoYXBlfSAvPlxuICAgICAgPC9Tb2NrZXRQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmUnO1xuXG5jb25zdCBkYXRhUG9pbnQgPSAoY29sbGVjdGlvblBhdGgpID0+IHtcbiAgcmV0dXJuIGdldEZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpXG59O1xuXG5cbmNvbnN0IGRiID0ge1xuICByb29tczogKCkgPT4gZGF0YVBvaW50KCdyb29tcycpLFxuICByb29tOiAocm9vbUlkKSA9PiBkYXRhUG9pbnQoYHJvb21zLyR7cm9vbUlkfWApLFxuICBzaGFwZUNvbGxlY3Rpb246IChyb29tSWQpID0+IGRhdGFQb2ludChgcm9vbXMvJHtyb29tSWR9L3NoYXBlc2ApLFxuICBjb2xsYWJvcmF0b3JzOiAocm9vbUlkKSA9PiBkYXRhUG9pbnQoYHJvb21zLyR7cm9vbUlkfS9jb2xsYWJvcmF0b3JzYClcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVSb29tKG5hbWUpIHtcbiAgY29uc3QgbmV3Um9vbVJlZiA9IGRiLnJvb21zKCkuZG9jKCk7XG4gIGF3YWl0IGRiLmNvbGxhYm9yYXRvcnMobmV3Um9vbVJlZi5pZCkuZG9jKCkuc2V0KHsgbmFtZTogbmFtZSwgY29sb3I6ICdibHVlJywgaXNBY3RpdmU6IHRydWUgfSk7XG4gIGF3YWl0IG5ld1Jvb21SZWYuc2V0KHsgaWQ6IG5ld1Jvb21SZWYuaWQgfSk7XG4gIHJldHVybiB7IGlkOiBuZXdSb29tUmVmLmlkIH07XG59XG5cbmZ1bmN0aW9uIGFkZFNoYXBlKHJvb21JZCwgc2hhcGUpIHtcbiAgY29uc3QgbmV3U2hhcGVSZWYgPSBkYi5zaGFwZUNvbGxlY3Rpb24ocm9vbUlkKS5kb2MoKTtcbiAgY29uc29sZS5sb2coJ05ldyBJZCcsIG5ld1NoYXBlUmVmLmlkKVxuICBjb25zdCBzaGFwZUpTT04gPSBKU09OLnBhcnNlKHNoYXBlKTtcbiAgY29uc29sZS5sb2coJ0FkZGRpbmcgU2hhcGUgQ2FsbGVkJywgcm9vbUlkLCBzaGFwZSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmV3U2hhcGVSZWYuc2V0KHsgLi4uc2hhcGVKU09OLCBpZDogbmV3U2hhcGVSZWYuaWQgfSkudGhlbigoZG9jKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnSW5zaWRlIFRIZW4nKTtcbiAgICAgIHJlc29sdmUoeyBpZDogbmV3U2hhcGVSZWYuaWQgfSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIHJlamVjdCh7IGVycm9yOiBlcnIgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVTaGFwZShyb29tSWQsIHNoYXBlKSB7XG4gIHJldHVybiBhd2FpdCBkYi5zaGFwZUNvbGxlY3Rpb24ocm9vbUlkKS5kb2Moc2hhcGUuaWQpLmRlbGV0ZSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBhZGRDb2xsYWJvcmF0b3Iocm9vbUlkLCBjb2xsYWJvcmF0b3IpIHtcbiAgY29uc3QgbmV3Q29sbGFib3JhdG9yUmVmID0gZGIuY29sbGFib3JhdG9ycyhyb29tSWQpLmRvYyhjb2xsYWJvcmF0b3IuaWQpO1xuICByZXR1cm4gYXdhaXQgbmV3Q29sbGFib3JhdG9yUmVmLnNldCh7IC4uLmNvbGxhYm9yYXRvciB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2hhcGVzKHJvb21JZCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGRiLnNoYXBlQ29sbGVjdGlvbihyb29tSWQpLmdldCgpLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgaWYgKHNuYXBzaG90LmVtcHR5KSB7XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgICBkYXRhLnB1c2goZG9jLmRhdGEoKSk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXNvbHZlKGRhdGEpO1xuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRVc2Vycyhyb29tSWQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBkYi5jb2xsYWJvcmF0b3JzKHJvb21JZCkuZ2V0KCkudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgIGxldCBkYXRhID0gW107XG4gICAgICBpZiAoc25hcHNob3QuZW1wdHkpIHtcbiAgICAgICAgZGF0YSA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgIGRhdGEucHVzaChkb2MuZGF0YSgpKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxEcmF3RGF0YShyb29tSWQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBQcm9taXNlLmFsbChbZ2V0U2hhcGVzKHJvb21JZCksIGdldFVzZXJzKHJvb21JZCldKS50aGVuKChbc2hhcGVzLCB1c2Vyc10pID0+IHtcbiAgICAgIHJlc29sdmUoeyBzaGFwZXM6IHNoYXBlcyAmJiBzaGFwZXMubGVuZ3RoID4gMCA/IHNoYXBlcyA6IFtdLCB1c2VyczogdXNlcnMgJiYgdXNlcnMubGVuZ3RoID4gMCA/IHVzZXJzIDogW10gfSlcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICByZWplY3QoeyBtZXNzYWdlOiBlcnIgfSk7XG4gICAgfSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEJ1bGtTaGFwZXMoc2hhcGVzLCByb29tSWQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgcHJvbWlzZXMgPSBbXTtcbiAgICBzaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcbiAgICAgIGxldCBuZXdTaGFwZVJlZiA9IGRiLnNoYXBlQ29sbGVjdGlvbihyb29tSWQpLmRvYygpO1xuICAgICAgcHJvbWlzZXMucHVzaChuZXdTaGFwZVJlZi5zZXQoeyAuLi5zaGFwZSwgaWQ6IG5ld1NoYXBlUmVmLmlkIH0pKVxuICAgIH0pXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgcmVzb2x2ZSh7IG1lc3NhZ2U6ICdTaGFwZXMgQWRkZWQnIH0pO1xuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICByZWplY3QoeyBtZXNzYWdlOiBlcnIgfSlcbiAgICB9KVxuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVDb2xsYWJvcmF0b3Iocm9vbUlkLCBjb2xsYWJvcmF0b3IpIHtcbiAgbGV0IGNvbGxhYm9yYXRvclJlZiA9IGRiLnNoYXBlQ29sbGVjdGlvbihyb29tSWQpLmRvYyhjb2xsYWJvcmF0b3IuaWQpO1xuICByZXR1cm4gYXdhaXQgY29sbGFib3JhdG9yUmVmLnVwZGF0ZSh7IGlzQWN0aXZlOiBmYWxzZSB9KTtcbn1cblxuXG5leHBvcnQge1xuICBjcmVhdGVSb29tLFxuICBnZXRJbml0aWFsRHJhd0RhdGEsXG4gIGFkZFNoYXBlLFxuICBkZWxldGVTaGFwZSxcbiAgYWRkQ29sbGFib3JhdG9yLFxuICBkZWxldGVDb2xsYWJvcmF0b3Jcbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFjdGlvbkRhdGEsIEZvcm0sIHVzZVRyYW5zaXRpb24sIExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb20gfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGInO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGxldCBuYW1lID0gYm9keS5nZXQoJ25hbWUnKTtcbiAgY29uc3QgZHJhdyA9IGF3YWl0IGNyZWF0ZVJvb20obmFtZSk7XG4gIC8vIGlmIChlcnJvcnMpIHtcbiAgLy8gICBjb25zdCB2YWx1ZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAvLyAgIHJldHVybiBqc29uKHsgZXJyb3JzLCB2YWx1ZXMgfSk7XG4gIC8vIH1cbiAgY29uc29sZS5sb2coZHJhdyk7XG4gIHJldHVybiByZWRpcmVjdChgL2RyYXcvJHtkcmF3LmlkfWApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG1ldGhvZD0ncG9zdCc+XG4gICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ30+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6eycgJ31cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGEgPyBhY3Rpb25EYXRhLnZhbHVlcy5uYW1lIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3Rpb25EYXRhPy5lcnJvcnMubmFtZSA/ICdyZWQnIDogJycsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLm5hbWUgPyAoXG4gICAgICAgICAgPFZhbGlkYXRpb25NZXNzYWdlXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmc9e3RyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ31cbiAgICAgICAgICAgIGVycm9yPXthY3Rpb25EYXRhPy5lcnJvcnM/Lm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAge3RyYW5zaXRpb24uc3RhdGUgPT09ICdzdWJtaXR0aW5nJ1xuICAgICAgICAgICAgICA/ICdDb25maWd1cmluZy4uLidcbiAgICAgICAgICAgICAgOiAnRW50ZXIgUm9vbSd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8TGluayB0bz0nL2RyYXcvZnJlZWRyYXcnIGNsYXNzTmFtZT0ndGV4dC14bCB0ZXh0LWJsdWUtNjAwIHVuZGVybGluZSc+XG4gICAgICAgICAgVHJ5IHdpdGhvdXQgTG9naW5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNjhiOGNlNzYnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVgzTlBSQjdHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RNTZaRjdaNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpCNlM1Sk9NLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSzNBWllHUFguanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTVFNUJCUDZILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZHJhdy8kZHJhd0lkJzp7J2lkJzoncm91dGVzL2RyYXcvJGRyYXdJZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkcmF3LzpkcmF3SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZHJhdy8kZHJhd0lkLUNHNEZBRU5ELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QM0NUN0VQSC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RyYXcvZnJlZURyYXcnOnsnaWQnOidyb3V0ZXMvZHJhdy9mcmVlRHJhdycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkcmF3L2ZyZWVEcmF3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RyYXcvZnJlZURyYXctRTJCWk1KWUcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVAzQ1Q3RVBILmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1RUkJQNk1JWS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTY4QjhDRTc2Lmpz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
