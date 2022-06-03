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

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
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

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
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
      this.setState({ shapes: data }, () => {
        this.id = data.length + 1;
        this.redraw();
      });
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

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/index.jsx
var links = () => [
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  { rel: "stylesheet", href: styles_default }
];
var loader = async ({ request }) => {
  return handleDataRequest(request, (user) => {
    return (0, import_node.json)({ user });
  }, () => {
    throw new Response("Unauthorized", { status: 401 });
  });
};
function Index() {
  const data = (0, import_react9.useLoaderData)();
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

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "3b93dcf2", "entry": { "module": "/build/entry.client-3XLMU5MY.js", "imports": ["/build/_shared/chunk-RTFBBSJD.js", "/build/_shared/chunk-LN32JISY.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-7AP2N4BV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-C2BCUPFJ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3B93DCF2.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOi9Vc2Vycy9pbmRyYWdpdGgvUHJhY3RpY2UvcmVtaXgtbGVhcm4vbXktcmVtaXgtYXBwL2FwcC9yb290LmpzeCIsICJyb3V0ZTovVXNlcnMvaW5kcmFnaXRoL1ByYWN0aWNlL3JlbWl4LWxlYXJuL215LXJlbWl4LWFwcC9hcHAvcm91dGVzL2luZGV4LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Db25maWdUb29sL0NvbmZpZ1Rvb2wuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TZWxlY3RUb29sL1NlbGVjdFRvb2wuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2hhcGVzL0Fycm93LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9DaGFsay5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvQ2lyY2xlLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3V0aWxzL2dldEVsZW1lbnRzQXRQb3NpdGlvbi5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvRGlhbW9uZC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy91dGlscy9kcmF3U2hhcGVzLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9EcmF3VGV4dC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvTGluZS5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvTW92ZVRvb2wuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2hhcGVzL1JlY3RhbmdsZS5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9UZXh0VG9vbC9UZXh0VG9vbC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9ab29tQ29udGFpbmVyL1pvb21Db250YWluZXIuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvdXRpbHMvaWRiLmpzIiwgIi4uL2FwcC9jb250ZXh0cy9zb2NrZXRDb250ZXh0LmpzIiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2luZHJhZ2l0aC9QcmFjdGljZS9yZW1peC1sZWFybi9teS1yZW1peC1hcHAvYXBwL2VudHJ5LnNlcnZlci5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2luZHJhZ2l0aC9QcmFjdGljZS9yZW1peC1sZWFybi9teS1yZW1peC1hcHAvYXBwL3Jvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9pbmRyYWdpdGgvUHJhY3RpY2UvcmVtaXgtbGVhcm4vbXktcmVtaXgtYXBwL2FwcC9yb3V0ZXMvaW5kZXguanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZURhdGFSZXF1ZXN0ID1cbiAgKFxuICAgIHJlc3BvbnNlLFxuICAgIC8vIHNhbWUgYXJncyB0aGF0IGdldCBwYXNzZWQgdG8gdGhlIGFjdGlvbiBvciBsb2FkZXIgdGhhdCB3YXMgY2FsbGVkXG4gICAgeyByZXF1ZXN0LCBwYXJhbXMsIGNvbnRleHQgfVxuICApID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRha2xcIiwgcmVxdWVzdCk7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogJ3N1Y2Nlc3MnfTtcbiAgfTtcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAncmVtaXgnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICByZXR1cm4geyB0aXRsZTogJ05ldyBSZW1peCBBcHAnIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8dGl0bGU+V2hpdGVib2FyZCBBcHBsaWNhdGlvbjwvdGl0bGU+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmltcG9ydCB7IENvbmZpZ1Rvb2xMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9Db25maWdUb29sL0NvbmZpZ1Rvb2wnO1xuaW1wb3J0IE1haW5Db21wb25lbnQsIHsgTWFpbkNvbXBvbmVudFN0eWxlcyB9IGZyb20gJ34vY29tcG9uZW50cy9tYWluJztcbmltcG9ydCB7IFNlbGVjdFRvb2xMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9TZWxlY3RUb29sL1NlbGVjdFRvb2wnO1xuaW1wb3J0IHsgVGV4dFRvb2xMaW5rcyB9IGZyb20gJ34vY29tcG9uZW50cy9UZXh0VG9vbC9UZXh0VG9vbCc7XG5pbXBvcnQgeyBab29tQ29udGFpbmVyTGlua3MgfSBmcm9tICd+L2NvbXBvbmVudHMvWm9vbUNvbnRhaW5lci9ab29tQ29udGFpbmVyJztcbmltcG9ydCB7IGhhbmRsZURhdGFSZXF1ZXN0IH0gZnJvbSAnfi9lbnRyeS5zZXJ2ZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBTb2NrZXRQcm92aWRlciB9IGZyb20gJ34vY29udGV4dHMvc29ja2V0Q29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IFtcbiAgLi4uTWFpbkNvbXBvbmVudFN0eWxlcygpLFxuICAuLi5TZWxlY3RUb29sTGlua3MoKSxcbiAgLi4uQ29uZmlnVG9vbExpbmtzKCksXG4gIC4uLlRleHRUb29sTGlua3MoKSxcbiAgLi4uWm9vbUNvbnRhaW5lckxpbmtzKCksXG4gIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gaGFuZGxlRGF0YVJlcXVlc3QoXG4gICAgcmVxdWVzdCxcbiAgICAodXNlcikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24oeyB1c2VyIH0pO1xuICAgIH0sXG4gICAgKCkgPT4ge1xuICAgICAgdGhyb3cgbmV3IFJlc3BvbnNlKCdVbmF1dGhvcml6ZWQnLCB7IHN0YXR1czogNDAxIH0pO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNvY2tldCA9IGlvKCk7XG4gICAgc2V0U29ja2V0KHNvY2tldCk7XG4gICAgc29ja2V0LmVtaXQoJ2V2ZW50JywgJ2NvbmVuY3Rpb24gc3VjY2VzcycpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNvY2tldCkgcmV0dXJuO1xuICAgIHNvY2tldC5vbignY29uZmlybWF0aW9uJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuICAgIHNvY2tldC5vbignbW91c2Vtb3ZlJywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLCBsaW5lSGVpZ2h0OiAnMS40JyB9fT5cbiAgICAgIDxTb2NrZXRQcm92aWRlciBzb2NrZXQ9e3NvY2tldH0+XG4gICAgICAgIDxNYWluQ29tcG9uZW50IC8+XG4gICAgICA8L1NvY2tldFByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29uZmlnVG9vbC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29uZmlnVG9vbExpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxufVxuXG5cbmZ1bmN0aW9uIENvbmZpZ1Rvb2woeyB0b2dnbGVUaGVtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25maWdUb29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbmZpZ0xhYmVsXCI+RGFyayBNb2RlPC9zcGFuPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17dG9nZ2xlVGhlbWV9IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCIgaWQ9XCJ0b2dnbGVEYXJrTW9kZVwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Rvb2w7IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFpbi5jc3MnO1xuaW1wb3J0IENvbmZpZ1Rvb2wgZnJvbSAnLi9Db25maWdUb29sL0NvbmZpZ1Rvb2wnO1xuaW1wb3J0IFNlbGVjdFRvb2wgZnJvbSAnLi9TZWxlY3RUb29sL1NlbGVjdFRvb2wnO1xuaW1wb3J0IEFycm93IGZyb20gJy4vU2hhcGVzL0Fycm93JztcbmltcG9ydCBDaGFsayBmcm9tICcuL1NoYXBlcy9DaGFsayc7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vU2hhcGVzL0NpcmNsZSc7XG5pbXBvcnQgRGlhbW9uZCBmcm9tICcuL1NoYXBlcy9EaWFtb25kJztcbmltcG9ydCBEcmF3VGV4dCBmcm9tICcuL1NoYXBlcy9EcmF3VGV4dCc7XG5pbXBvcnQgTGluZSBmcm9tICcuL1NoYXBlcy9MaW5lJztcbmltcG9ydCBNb3ZlVG9vbCBmcm9tICcuL1NoYXBlcy9Nb3ZlVG9vbCc7XG5pbXBvcnQgUmVjdCBmcm9tICcuL1NoYXBlcy9SZWN0YW5nbGUnO1xuaW1wb3J0IFRleHRUb29sIGZyb20gJy4vVGV4dFRvb2wvVGV4dFRvb2wnO1xuaW1wb3J0IHsgZHJhd0RpYW1vbmQsIGRyYXdUZXh0IH0gZnJvbSAnLi91dGlscy9kcmF3U2hhcGVzJztcbmltcG9ydCB7IGdldEVsZW1lbnRzQXRQb3NpdGlvbiB9IGZyb20gJy4vdXRpbHMvZ2V0RWxlbWVudHNBdFBvc2l0aW9uJztcbmltcG9ydCBab29tQ29udGFpbmVyIGZyb20gJy4vWm9vbUNvbnRhaW5lci9ab29tQ29udGFpbmVyJztcbmltcG9ydCBJZGIgZnJvbSAnLi91dGlscy9pZGInO1xuaW1wb3J0IHsgU29ja2V0Q29udGV4dCB9IGZyb20gJ34vY29udGV4dHMvc29ja2V0Q29udGV4dCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBNYWluQ29tcG9uZW50U3R5bGVzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuXG5sZXQgdG9vbHMgPSB7XG4gIG1vdmU6ICcnLFxuICBjaGFsazogQ2hhbGssXG4gIGxpbmU6IExpbmUsXG4gIHJlY3Q6IFJlY3QsXG4gIGFycm93OiBBcnJvdyxcbiAgdGV4dDogRHJhd1RleHQsXG4gIGNpcmNsZTogQ2lyY2xlLFxuICBkaWFtb25kOiBEaWFtb25kLFxuICBzZWxlY3Q6ICdzZWxlY3QnXG59O1xuXG5sZXQgYmFzZUNvbmZpZyA9IHtcbiAgc2NhbGluZ0ZhY3RvcjogMSxcbiAgYmFzZUZvbnRTaXplOiAyNCxcbiAgYmFzZUxpbmVIZWlnaHQ6ICgxNTAgKiAyNCkgLyAxMDBcbn1cblxuXG5cbmNsYXNzIE1haW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2FudmFzV2lkdGg6IDAsXG4gICAgICBjYW52YXNIZWlnaHQ6IDAsXG4gICAgICBzZWxlY3RlZFRoZW1lOiAnbGlnaHQnLFxuICAgICAgc2VsZWN0ZWRUb29sOiAnY2hhbGsnLFxuICAgICAgc2hhcGVzOiBbXSxcbiAgICAgIC4uLmJhc2VDb25maWdcbiAgICB9O1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVUb29sID0gdGhpcy51cGRhdGVUb29sLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrVG9vbCA9IHRoaXMub25DbGlja1Rvb2wuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRXZlbnQgPSB0aGlzLm9uRXZlbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvciA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvciA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVRvVGV4dFRvb2wgPSB0aGlzLmNoYW5nZVRvVGV4dFRvb2wuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSB0aGlzLm9uRG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXREcmFnZ2luZ1ZhbHVlcyA9IHRoaXMucmVzZXREcmFnZ2luZ1ZhbHVlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25XaGVlbE1vdmUgPSB0aGlzLm9uV2hlZWxNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbWdVcGRhdGUgPSB0aGlzLmltZ1VwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0ltYWdlID0gdGhpcy5kcmF3SW1hZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVRoZW1lID0gdGhpcy51cGRhdGVUaGVtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy56b29tSW4gPSB0aGlzLnpvb21Jbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuem9vbU91dCA9IHRoaXMuem9vbU91dC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5pZGIgPSBuZXcgSWRiKCk7XG5cbiAgICB0aGlzLm1haW5DYW52YXMgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnRlbXBDYW52YXMgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcblxuICAgIC8vIHNlcXVldW5jZSBpZCBcbiAgICB0aGlzLmlkID0gMDtcblxuICAgIC8vIFRvIGNoZWNrIHdoZXRoZXIgdGhlIHVzZXIgaXMgZHJhZ2dpbmcuXG4gICAgdGhpcy5tb3VzZVhQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5tb3VzZVlQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5pc1VzZXJEcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZHJhZ2dpbmdFbGVtZW50ID0gbnVsbDtcblxuXG5cbiAgICAvLyBUbyBlbXVsYXRlIHNjcm9sbCBiZWhhdmlvdXJcbiAgICB0aGlzLnNjcm9sbFggPSAwO1xuICAgIHRoaXMuc2Nyb2xsWSA9IDA7XG5cbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB0aGlzLmlkYi5nZXREYXRhRnJvbUlkYignYXBwLXN0YXRlLXBlcnNpc3QnKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVzOiBkYXRhIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEubGVuZ3RoICsgMTtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHsgY2FudmFzV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBjYW52YXNIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KVxuICAgIHRoaXMubWFpbkNvbnRleHQgPSB0aGlzLm1haW5DYW52YXMuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnOy8vIERlZmF1bHQgbGluZSBjb2xvci4gXG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lV2lkdGggPSAxLjA7Ly8gRGVmYXVsdCBzdHJva2Ugd2VpZ2h0LiBcblxuICAgIC8vIEZpbGwgdHJhbnNwYXJlbnQgY2FudmFzIHdpdGggZGFyayBncmV5IChTbyB3ZSBjYW4gdXNlIHRoZSBjb2xvciB0byBlcmFzZSkuIFxuICAgIHRoaXMudGVtcENvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiM0MjQyNDJcIiA6ICcjRkZGRkZGJztcbiAgICB0aGlzLnRlbXBDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpOy8vVG9wLCBMZWZ0LCBXaWR0aCwgSGVpZ2h0IG9mIGNhbnZhc1xuXG4gICAgdGhpcy50b29scyA9IHRvb2xzO1xuXG4gICAgbGV0IHNlbGVjdGVkT25lID0gdGhpcy50b29sc1t0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbF07XG5cbiAgICB0aGlzLnRvb2wgPSBuZXcgc2VsZWN0ZWRPbmUodGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuaW1nVXBkYXRlLCB0aGlzLmlkKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzLmNoYW5nZVRvVGV4dFRvb2wsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWxNb3ZlLCBmYWxzZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzLmNoYW5nZVRvVGV4dFRvb2wsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWxNb3ZlLCBmYWxzZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpO1xuICB9XG5cblxuICB6b29tSW4oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2NhbGluZ0ZhY3RvciA8PSAwLjEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldnN0YXRlKSA9PiB7XG4gICAgICBsZXQgYmFzZUZvbnRTaXplID0gcHJldnN0YXRlLmJhc2VGb250U2l6ZSAtIDM7XG4gICAgICBsZXQgYmFzZUxpbmVIZWlnaHQgPSAoMTUwICogYmFzZUZvbnRTaXplKSAvIDEwMDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZzdGF0ZSxcbiAgICAgICAgc2NhbGluZ0ZhY3RvcjogcHJldnN0YXRlLnNjYWxpbmdGYWN0b3IgLSAwLjEsXG4gICAgICAgIGJhc2VGb250U2l6ZSxcbiAgICAgICAgYmFzZUxpbmVIZWlnaHRcbiAgICAgIH1cbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmlkYi51cGRhdGVEYih0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3IsICdzY2FsaW5nRmFjdG9yJyk7XG4gICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH0pO1xuICB9XG5cbiAgem9vbU91dChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yID49IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldnN0YXRlKSA9PiB7XG4gICAgICBsZXQgYmFzZUZvbnRTaXplID0gcHJldnN0YXRlLmJhc2VGb250U2l6ZSArIDM7XG4gICAgICBsZXQgYmFzZUxpbmVIZWlnaHQgPSAoMTUwICogYmFzZUZvbnRTaXplKSAvIDEwMFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldnN0YXRlLFxuICAgICAgICBzY2FsaW5nRmFjdG9yOiBwcmV2c3RhdGUuc2NhbGluZ0ZhY3RvciArIDAuMSxcbiAgICAgICAgYmFzZUZvbnRTaXplLFxuICAgICAgICBiYXNlTGluZUhlaWdodFxuICAgICAgfVxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIHVwZGF0ZVRvb2wodmFsdWUsIGlkID0gbnVsbCkge1xuICAgIGlmICh0aGlzLnRvb2xzW3ZhbHVlXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVG9vbDogdmFsdWUgfSwgKCkgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0ZWRPbmUgPSB0aGlzLnRvb2xzW3RoaXMuc3RhdGUuc2VsZWN0ZWRUb29sXTtcbiAgICAgICAgaWYgKCFzZWxlY3RlZE9uZSB8fCBzZWxlY3RlZE9uZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIHN0b3JpbmcgdGhlIHNoYXBlcy4gd2UgYXJlIGdlbmVyYXRpbmcgaWRzLlxuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgKyAxO1xuICAgICAgICAgIHRoaXMudG9vbCA9IG5ldyBzZWxlY3RlZE9uZSh0aGlzLnRlbXBDYW52YXMuY3VycmVudCwgdGhpcy50ZW1wQ29udGV4dCwgdGhpcy5pbWdVcGRhdGUsIHRoaXMuaWQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b29sID0gbmV3IHNlbGVjdGVkT25lKHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCB0aGlzLnRlbXBDb250ZXh0LCB0aGlzLmltZ1VwZGF0ZSwgaWQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjYW52YXNXaWR0aDogd2luZG93LmlubmVyV2lkdGgsIGNhbnZhc0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH0sICgpID0+IHtcbiAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfSlcbiAgfVxuXG4gIG9uRXZlbnQoZXYpIHtcbiAgICBldi5feCA9IGV2Lng7XG4gICAgZXYuX3kgPSBldi55O1xuICAgIHRoaXMuY29udGV4dC5lbWl0KCdtb3VzZW1vdmUnLCB7IHg6IGV2LngsIHk6IGV2LnkgfSlcbiAgICAvLyBsZXQgaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIGlmIChldi50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgICB0aGlzLm1vdXNlWFBvc2l0aW9uID0gZXYuX3g7XG4gICAgICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBldi5feTtcbiAgICAgIH0gZWxzZSBpZiAoZXYudHlwZSA9PT0gJ21vdXNlbW92ZScpIHtcbiAgICAgICAgaWYgKHRoaXMubW91c2VZUG9zaXRpb24gJiYgdGhpcy5tb3VzZVhQb3NpdGlvbikge1xuICAgICAgICAgIGxldCBkaWZmWCA9IE1hdGguYWJzKHRoaXMubW91c2VYUG9zaXRpb24gLSBldi5feCk7XG4gICAgICAgICAgbGV0IGRpZmZZID0gTWF0aC5hYnModGhpcy5tb3VzZVlQb3NpdGlvbiAtIGV2Ll95KTtcbiAgICAgICAgICBpZiAoZGlmZlggPiAyMCB8fCBkaWZmWSA+IDIwKSB7XG4gICAgICAgICAgICB0aGlzLmlzVXNlckRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb3VzZVhQb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBudWxsO1xuICAgICAgfVxuXG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1VzZXJEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5tb3VzZVhQb3NpdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLm1vdXNlWVBvc2l0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSB0b29sJ3MgZXZlbnQgaGFuZGxlci4gXG5cbiAgICBpZiAodGhpcy5pc1VzZXJEcmFnZ2luZykge1xuICAgICAgLy8gSGFuZGxpbm5nIHRoZSBjYXNlIGZvciBtb3ZlXG4gICAgICAvL3RoaXMuc2VsZWN0ZWRUb29sID0gJ21vdmUnO1xuICAgICAgLy8gc2luY2Ugd2UgYXJlIG1vdmluZyBhY3Jvc3MgdGhlIGNhbnZhcy4gd2UgbmVlZCB0byB0YWtlIGludG8gdGhlIGFjY291bnQgb2Ygc2Nyb2xseCBhbmQgc2Nyb2xseSB2YWx1ZXNcblxuICAgICAgLy8vQ0hBTkdFID8/P1xuICAgICAgLy8gZXYuX3ggPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi54IC0gdGhpcy5zY3JvbGxYKTtcbiAgICAgIC8vIGV2Ll95ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueSAtIHRoaXMuc2Nyb2xsWSk7XG4gICAgICAvLy9DSEFOR0UgPz8/IE1vdmVkIGluc2lkZSBjb25kaXRpb25cbiAgICAgIGlmICghdGhpcy5kcmFnZ2luZ0VsZW1lbnQpIHtcbiAgICAgICAgZXYuX3ggPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi54IC0gdGhpcy5zY3JvbGxYKTtcbiAgICAgICAgZXYuX3kgPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi55IC0gdGhpcy5zY3JvbGxZKTtcbiAgICAgICAgLy8gRmlyc3QgY2FzZSBvZiBtb3ZlIHRvb2wgLT4gVXNlciBqdXN0IHNlbGVjdGVkIHRoZSBlbGVtZW50LmV2ZW50cyBzaG91bGQgYmUgbW91c2Vkb3duXG4gICAgICAgIGxldCBlbGVtZW50U2VsZWN0ZWQgPSBnZXRFbGVtZW50c0F0UG9zaXRpb24odGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IodGhpcy5tb3VzZVhQb3NpdGlvbiAtIHRoaXMuc2Nyb2xsWCksIHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKHRoaXMubW91c2VZUG9zaXRpb24gLSB0aGlzLnNjcm9sbFkpLCB0aGlzLnN0YXRlLnNoYXBlcyk7XG4gICAgICAgIGlmIChlbGVtZW50U2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IGVsZW1lbnRTZWxlY3RlZDtcbiAgICAgICAgICBsZXQgc2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHNoYXBlLmlkICE9PSBlbGVtZW50U2VsZWN0ZWQuaWQpO1xuICAgICAgICAgIC8vcmVkcmF3aWcgd2l0aG91dCBlbGVtZW50IHNlbGVjdGVkXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlczogc2hhcGVzLCBzZWxlY3RlZFRvb2w6ICdtb3ZlJyB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlkYi51cGRhdGVEYih0aGlzLnN0YXRlLnNoYXBlcywgJ2FwcC1zdGF0ZS1wZXJzaXN0Jyk7XG4gICAgICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ0VsZW1lbnQgPSBlbGVtZW50U2VsZWN0ZWQ7XG4gICAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vbW9kaWZ5aWcgdGhlIHNlbGVjdGVkRWxlbWVudFxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgLi4udGhpcy5zZWxlY3RlZEVsZW1lbnQsXG4gICAgICAgICAgICAgIHg6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueCksXG4gICAgICAgICAgICAgIHk6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueSksXG4gICAgICAgICAgICAgIGVuZFg6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuZW5kWCksXG4gICAgICAgICAgICAgIGVuZFk6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuZW5kWSksXG4gICAgICAgICAgICAgIHN0YXJ0WDogdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5zdGFydFgpLFxuICAgICAgICAgICAgICBzdGFydFk6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRZKSxcbiAgICAgICAgICAgICAgcmFkaXVzOiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnJhZGl1cyksXG4gICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNlbGVjdGVkRWxlbWVudC53aWR0aCA/IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGgpIDogbnVsbCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNlbGVjdGVkRWxlbWVudC5oZWlnaHQgPyB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmhlaWdodCkgOiBudWxsLFxuICAgICAgICAgICAgICBzY2FsaW5nRmFjdG9yOiB0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudG9vbCA9IG5ldyBNb3ZlVG9vbCh0aGlzLnRlbXBDYW52YXMuY3VycmVudCwgdGhpcy50ZW1wQ29udGV4dCwgdGhpcy5pbWdVcGRhdGUsIHNlbGVjdGVkRWxlbWVudCwgdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lKTtcbiAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgcHJlc2VudC4gd2UgbmVlZCB0byBjYWxsIG1vdmV0b29sXG4gICAgICAgICAgICB0aGlzLnRvb2xbJ21vdXNlZG93biddKGV2KTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gPz8gXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW91c2VYUG9zaXRpb24gIT09IG51bGwgJiYgdGhpcy5tb3VzZVlQb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAvLyBldmVudHMgYXJlIG1vdXNlbW92ZSBvciBtb3VzZXVwLiBOZWVkIHRvIGNoZWNrIHdoZXRoZXIgdGhpcyBjb25kaXRpb24gaXMgcmVxdWlyZWRcbiAgICAgICAgaWYgKGV2LnR5cGUgPT09ICdtb3VzZW1vdmUnIHx8IGV2LnR5cGUgPT09ICdtb3VzZXVwJykge1xuICAgICAgICAgIC8vIG1vdmV0b29sIGluc3RhY2Ugc2hvdWxkIGFscmVhZHkgYnkgcHJlc2VudFxuICAgICAgICAgIGlmICh0aGlzLnRvb2wpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbFtldi50eXBlXShldik7XG4gICAgICAgICAgICBpZiAoZXYudHlwZSA9PT0gJ21vdXNldXAnKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5tb3VzZVhQb3NpdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvb2wpIHtcbiAgICAgIGxldCBmdW5jID0gdGhpcy50b29sW2V2LnR5cGVdO1xuICAgICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgZnVuYyhldik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGlja1Rvb2woZSkge1xuICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5pZCk7XG4gICAgdGhpcy51cGRhdGVUb29sKGUuY3VycmVudFRhcmdldC5pZCk7XG4gIH1cblxuICBjaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoY29vcmRzKSB7XG4gICAgcmV0dXJuIGNvb3JkcyAvIHRoaXMuc3RhdGUuc2NhbGluZ0ZhY3RvcjtcbiAgfVxuXG4gIGNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKGNvb3Jkcykge1xuICAgIHJldHVybiBjb29yZHMgKiB0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3I7XG4gIH1cblxuXG4gIGRyYXdJbWFnZSgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNoYXBlcywgdGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wpO1xuICAgIHRoaXMucmVzZXREcmFnZ2luZ1ZhbHVlcygpO1xuXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXG4gICAgICAvLyBpZiB0aGUgYWN0aW9uIGlzIGRlbGV0ZSBvciBtb3ZlLiB3ZWUgbm5lZWQgdG8gY2FsbCByZXNldERyYWdnaW5nVmFsdWVzXG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ21vdmUnIHx8IHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAndGV4dCcpIHtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVG9vbDogJ3NlbGVjdCcgfSk7XG4gICAgICAgIHRoaXMudG9vbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1haW5Db250ZXh0LmRyYXdJbWFnZSh0aGlzLnRlbXBDYW52YXMuY3VycmVudCwgMCwgMCk7XG4gICAgICAgIC8vL3RoaXMudGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTtcbiAgICAgICAgLy90aGlzLnJlbmRlclBhcnRpY3VsYXJTaGFwZShtb2RpZmllZEltYWdlKTtcblxuICAgICAgICAvLyBDaGFuZ2luZyB0byBzZWxlY3QgdG9vbCBvbmNlIHdlIGhhdmUgZHJhd24gYSBzaGFwZSBleGNlcHQgdG8gdHlwaW5nIHRleHRcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sICE9PSAndGV4dCcpIHtcblxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFRvb2w6ICdzZWxlY3QnIH0pO1xuICAgICAgICAgIHRoaXMudG9vbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHRoaXMucmVkcmF3KCk7XG5cbiAgICB9KVxuICB9XG5cblxuICBpbWdVcGRhdGUoZHJhd2VuSW1hZ2UpIHtcbiAgICBpZiAoZHJhd2VuSW1hZ2UgJiYgZHJhd2VuSW1hZ2UudHlwZSkge1xuICAgICAgLyoqIFRPRE86IENoYW5nZSB0aGlzIGxvZ2ljIHRvIG9iamVjdCBrZXkgdmFsdWUgc3RydWN0dXJlICovXG5cbiAgICAgIGxldCBtb2RpZmllZEltYWdlID0ge1xuICAgICAgICAuLi5kcmF3ZW5JbWFnZSxcbiAgICAgICAgeDogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2UueCAtIHRoaXMuc2Nyb2xsWCksXG4gICAgICAgIHk6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLnkgLSB0aGlzLnNjcm9sbFkpLFxuICAgICAgICBlbmRYOiB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS5lbmRYIC0gdGhpcy5zY3JvbGxYKSxcbiAgICAgICAgZW5kWTogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2UuZW5kWSAtIHRoaXMuc2Nyb2xsWSksXG4gICAgICAgIHN0YXJ0WDogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2Uuc3RhcnRYIC0gdGhpcy5zY3JvbGxYKSxcbiAgICAgICAgc3RhcnRZOiB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS5zdGFydFkgLSB0aGlzLnNjcm9sbFkpLFxuICAgICAgICByYWRpdXM6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLnJhZGl1cyksXG4gICAgICAgIHdpZHRoOiBkcmF3ZW5JbWFnZS53aWR0aCA/IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLndpZHRoKSA6IG51bGwsXG4gICAgICAgIGhlaWdodDogZHJhd2VuSW1hZ2UuaGVpZ2h0ID8gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2UuaGVpZ2h0KSA6IG51bGwsXG4gICAgICAgIHNjYWxpbmdGYWN0b3I6IHRoaXMuc3RhdGUuc2NhbGluZ0ZhY3RvclxuICAgICAgfVxuICAgICAgbGV0IGZpbHRlcmVkU2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHNoYXBlLmlkICE9PSBkcmF3ZW5JbWFnZS5pZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVzOiBbLi4uZmlsdGVyZWRTaGFwZXMsIG1vZGlmaWVkSW1hZ2VdIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5pZGIudXBkYXRlRGIodGhpcy5zdGF0ZS5zaGFwZXMsICdhcHAtc3RhdGUtcGVyc2lzdCcpO1xuICAgICAgICB0aGlzLmRyYXdJbWFnZSgpO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoKTtcbiAgICB9XG5cblxuICB9XG5cbiAgcmVkcmF3KCkge1xuICAgIGNvbnNvbGUubG9nKCdyZWRyYXcnKVxuICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpO1xuICAgIHRoaXMudGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnOztcbiAgICB0aGlzLnRlbXBDb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjNDI0MjQyXCIgOiAnIzAwMDAwMCc7O1xuXG4gICAgdGhpcy5zdGF0ZS5zaGFwZXMuZm9yRWFjaChzaGFwZSA9PiB7XG4gICAgICBpZiAoc2hhcGUudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFgsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueSkgKyB0aGlzLnNjcm9sbFksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUud2lkdGgpLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLmhlaWdodCkpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICAgIGxldCBoZWFkbGVuID0gMTA7XG4gICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICBsZXQgZW5kWCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUuZW5kWCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgIGxldCBlbmRZID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS5lbmRZKSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgbGV0IGR4ID0gZW5kWCAtIHg7XG4gICAgICAgIGxldCBkeSA9IGVuZFkgLSB5O1xuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHgsIHkpXG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFgsIGVuZFkpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLCBlbmRZIC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZW5kWCwgZW5kWSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksIGVuZFkgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNikpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnbGluZScpIHtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8odGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS54KSArIHRoaXMuc2Nyb2xsWCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUuZW5kWCkgKyB0aGlzLnNjcm9sbFgsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUuZW5kWSkgKyB0aGlzLnNjcm9sbFkpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiNGRkZGRkZcIiA6ICcjMDAwMDAwJztcbiAgICAgICAgZHJhd1RleHQoc2hhcGUudGV4dENvbnRlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFgsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueSkgKyB0aGlzLnNjcm9sbFksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUud2lkdGgpLCB0aGlzLnN0YXRlLmJhc2VMaW5lSGVpZ2h0LCBjb2xvciwgdGhpcy5zdGF0ZS5iYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5hcmMoeCwgeSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS5yYWRpdXMpLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgICBsZXQgeENlbnRlciA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgIGxldCB5Q2VudGVyID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnggLSBzaGFwZS5lbmRYKTtcbiAgICAgICAgZHJhd0RpYW1vbmQoeENlbnRlciwgeUNlbnRlciwgc2l6ZSwgdGhpcy50ZW1wQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIGNsZWFyIHRoZSBwcmVzZW50IGNhbnZhc1xuICAgIHRoaXMubWFpbkNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMubWFpbkNhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLm1haW5DYW52YXMuY3VycmVudC5oZWlnaHQpO1xuICAgIHRoaXMubWFpbkNvbnRleHQuZHJhd0ltYWdlKHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCAwLCAwKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTtcbiAgfVxuXG4gIGNoYW5nZVRvVGV4dFRvb2woZXYpIHtcbiAgICBldi5feCA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnggLSB0aGlzLnNjcm9sbFgpO1xuICAgIGV2Ll95ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueSAtIHRoaXMuc2Nyb2xsWSk7XG5cbiAgICBsZXQgZW5jbG9zZWRFbGVtZW50ID0gZ2V0RWxlbWVudHNBdFBvc2l0aW9uKGV2Ll94LCBldi5feSwgdGhpcy5zdGF0ZS5zaGFwZXMpO1xuXG4gICAgLy8gVGVtcG9yYXJpbHkgdXBkYXRpbmcgdG9vbCBtYW51YWxseVxuICAgIC8vdGhpcy51cGRhdGVUb29sKCd0ZXh0JywgZW5jbG9zZWRFbGVtZW50ICYmIGVuY2xvc2VkRWxlbWVudC50eXBlID09PSAndGV4dCcgPyBlbmNsb3NlZEVsZW1lbnQuaWQgOiBudWxsKTtcbiAgICB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFRvb2w6ICd0ZXh0JyB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMoKTtcblxuICAgICAgbGV0IHRleHRJZCA9IG51bGw7XG4gICAgICBpZiAoZW5jbG9zZWRFbGVtZW50ICYmIGVuY2xvc2VkRWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgdGV4dElkID0gZW5jbG9zZWRFbGVtZW50LmlkO1xuICAgICAgICBsZXQgc2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHNoYXBlLmlkICE9PSB0aGlzLnNlbGVjdGVkRWxlbWVudC5pZCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFwZXMgfSwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgKyAxO1xuICAgICAgICB0ZXh0SWQgPSB0aGlzLmlkO1xuICAgICAgfVxuICAgICAgdGhpcy50b29sID0gbmV3IERyYXdUZXh0KHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCB0aGlzLnRlbXBDb250ZXh0LCB0aGlzLmltZ1VwZGF0ZSwgdGV4dElkLCB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUpO1xuICAgICAgLy8gaWYgKGVuY2xvc2VkRWxlbWVudCAmJiBlbmNsb3NlZEVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAvLyAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gc2hhcGUuaWQgIT09IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmlkKTtcbiAgICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlcyB9LCAoKSA9PiB7XG4gICAgICAvLyAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9XG5cbiAgICAgIGxldCBmdW5jID0gdGhpcy50b29sW2V2LnR5cGVdO1xuICAgICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gZnVuYyB3aWxsIGJlIGRiY2xpY2sgaW4gZHJhd3RleHRcbiAgICAgICAgZnVuYyhldiwgZW5jbG9zZWRFbGVtZW50LCB7IHNjcm9sbFg6IHRoaXMuc2Nyb2xsWCwgc2Nyb2xsWTogdGhpcy5zY3JvbGxZLCBzY2FsaW5nRmFjdG9yOiB0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3IgfSk7XG4gICAgICB9XG4gICAgfSlcblxuXG5cbiAgfVxuXG4gIG9uS2V5RG93bihldikge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3RleHQnKSB7XG4gICAgICAvLyBFYXJseSBSZXR1cm4gYXMgd2UgZG9udCBuZWVkIHRvIGxpc3RlbiB3aGlsZSB0ZXh0YXJlYSBpcyBzaG93blxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKGV2LmtleUNvZGUgPj0gNDggJiYgZXYua2V5Q29kZSA8PSA1NykgfHwgKGV2LmtleUNvZGUgPj0gNjUgJiYgZXYua2V5Q29kZSA8PSA5MCkpIHtcbiAgICAgIC8vIDQ4IC0gNTcgbnVtYmVyIDAgLSA5IGFuZCA2NSAtIDkwIEFscGhhYmV0eXNcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzcGVjaWFsIGtleXMgXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgICAgLy8gQmFja3NwYWNlIG9yIGRlbGV0ZSBrZXlcbiAgICAgICAgaWYgKGV2LndoaWNoID09PSA0NiB8fCBldi53aGljaCA9PT0gOCkge1xuICAgICAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gc2hhcGUuaWQgIT09IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmlkKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVzIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Eb2N1bWVudENsaWNrKGV2KSB7XG4gICAgZXYuX3ggPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi54IC0gdGhpcy5zY3JvbGxYKTtcbiAgICBldi5feSA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnkgLSB0aGlzLnNjcm9sbFkpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAndGV4dCcpIHtcbiAgICAgIC8vUmV2ZXJ0dGluZyB0eWhpdXMgaXMgcmVxdWlyZWQuXG5cblxuICAgICAgdGhpcy50b29sWydvbkJsdXInXSgpO1xuICAgICAgLy8gdGhpcy5zZWxlY3RlZFRvb2wgPSAnc2VsZWN0JztcbiAgICAgIC8vIHRoaXMudG9vbCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQud2lkdGgsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LmhlaWdodCk7XG4gICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gZ2V0RWxlbWVudHNBdFBvc2l0aW9uKGV2Ll94LCBldi5feSwgdGhpcy5zdGF0ZS5zaGFwZXMpO1xuICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3RlZEVsZW1lbnQ7XG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEVsZW1lbnQpO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbNl0pO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh4IC0gNSwgeSAtIDUsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGgpICsgMTAsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuaGVpZ2h0KSArIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAnbGluZScgfHwgdGhpcy5zZWxlY3RlZEVsZW1lbnQudHlwZSA9PT0gJ2Fycm93Jykge1xuICAgICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5zdGFydFgpICsgdGhpcy5zY3JvbGxYO1xuICAgICAgICAgIGxldCB5ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5zdGFydFkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzZdKTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QoeCAtIDUsIHkgLSA1LCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LndpZHRoKSArIDEwLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmhlaWdodCkgKyAxMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEVsZW1lbnQudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgICAgbGV0IHkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzZdKTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuYXJjKHgsIHksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQucmFkaXVzKSArIDEwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRYKSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRZKSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFs2XSk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHggLSA1LCB5IC0gNSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC53aWR0aCkgKyAxMCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5oZWlnaHQpICsgMTApO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbNl0pO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh4IC0gNSwgeSAtIDUsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGgpLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmhlaWdodCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25XaGVlbE1vdmUoZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3RleHQnKSB7XG4gICAgICAvLyBEcmF3aW5nIHRleHQgb24gY2FudmFzIGJlZm9yZSBzY3JvbGwgbW92ZVxuICAgICAgdGhpcy50b29sWydvbkJsdXInXSgpO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbFggPSB0aGlzLnNjcm9sbFggLSBlLmRlbHRhWDtcbiAgICB0aGlzLnNjcm9sbFkgPSB0aGlzLnNjcm9sbFkgLSBlLmRlbHRhWTtcbiAgICB0aGlzLnJlZHJhdygpO1xuICB9XG5cbiAgcmVzZXREcmFnZ2luZ1ZhbHVlcygpIHtcbiAgICB0aGlzLmlzVXNlckRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2luZ0VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBudWxsO1xuICB9XG5cblxuICB1cGRhdGVUaGVtZShlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgKHByZXZzdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnByZXZzdGF0ZSxcbiAgICAgICAgICBzZWxlY3RlZFRoZW1lOiBwcmV2c3RhdGUuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJ1xuICAgICAgICB9XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnOy8vIERlZmF1bHQgbGluZSBjb2xvci4gXG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVdpZHRoID0gMS4wOy8vIERlZmF1bHQgc3Ryb2tlIHdlaWdodC4gXG5cbiAgICAgICAgLy8gRmlsbCB0cmFuc3BhcmVudCBjYW52YXMgd2l0aCBkYXJrIGdyZXkgKFNvIHdlIGNhbiB1c2UgdGhlIGNvbG9yIHRvIGVyYXNlKS4gXG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiM0MjQyNDJcIiA6ICcjRkZGRkZGJztcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTsvL1RvcCwgTGVmdCwgV2lkdGgsIEhlaWdodCBvZiBjYW52YXNcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgJy0tZm9udC1zaXplJzogYCR7dGhpcy5zdGF0ZS5iYXNlRm9udFNpemV9cHhgLCAnLS1saW5lLWhlaWdodCc6IGAke3RoaXMuc3RhdGUuYmFzZUxpbmVIZWlnaHR9cHhgIH19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyAnZGFyay1tb2RlJyA6ICdsaWdodC1tb2RlJ31gfT5cbiAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiA+XG4gICAgICAgICAgPGRpdiBpZD1cImJsYWNrYm9hcmRQbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cImRyYXdpbmdDYW52YXNcIiByZWY9e3RoaXMubWFpbkNhbnZhc30gd2lkdGg9e3RoaXMuc3RhdGUuY2FudmFzV2lkdGh9IGhlaWdodD17dGhpcy5zdGF0ZS5jYW52YXNIZWlnaHR9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJub3NjcmlwdFwiPldlJ3JlIHNvcnJ5LCB0aGlzIHdlYiBhcHBsaWNhdGlvbiBpcyBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCB3aXRoIHlvdXIgYnJvd3Nlci4gUGxlYXNlIHVzZVxuICAgICAgICAgICAgICAgIGFuIGFsdGVybmF0ZSBicm93c2VyIG9yIGRvd25sb2FkIGEgc3VwcG9ydGVkIDxiciAvPmJyb3dzZXIuU3VwcG9ydGVkIGJyb3dzZXJzOiA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWVcIj5Hb29nbGUgQ2hyb21lPC9hPiwgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlcmEuY29tXCI+T3BlcmE8L2E+LCA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5tb3ppbGxhLmNvbVwiPkZpcmVmb3g8L2E+LCA8YSBocmVmPVwiaHR0cDovL3d3dy5hcHBsZS5jb20vc2FmYXJpXCI+U2FmYXJpPC9hPiwgPGJyIC8+YW5kIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29ucXVlcm9yLm9yZ1wiPktvbnF1ZXJvcjwvYT4uIEFsc28gbWFrZSBzdXJlIHlvdXIgSmF2YVNjcmlwdCBpcyBlbmFibGVkLjwvcD5cbiAgICAgICAgICAgIDwvY2FudmFzPlxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cInRlbXBDYW52YXNcIiByZWY9e3RoaXMudGVtcENhbnZhc30gd2lkdGg9e3RoaXMuc3RhdGUuY2FudmFzV2lkdGh9IGhlaWdodD17dGhpcy5zdGF0ZS5jYW52YXNIZWlnaHR9PjwvY2FudmFzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2VsZWN0VG9vbCBzZWxlY3RlZFRvb2w9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUb29sfSB1cGRhdGVUb29sPXt0aGlzLm9uQ2xpY2tUb29sfSAvPlxuICAgICAgICA8Q29uZmlnVG9vbCB0b2dnbGVUaGVtZT17dGhpcy51cGRhdGVUaGVtZX0gLz5cbiAgICAgICAgPFRleHRUb29sIC8+XG4gICAgICAgIDxab29tQ29udGFpbmVyIHpvb21SYW5nZT17dGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yfSB6b29tT3V0PXt0aGlzLnpvb21PdXR9IHpvb21Jbj17dGhpcy56b29tSW59IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuTWFpbkNvbXBvbmVudC5jb250ZXh0VHlwZSA9IFNvY2tldENvbnRleHQ7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db21wb25lbnQ7IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VsZWN0VG9vbC5jc3MnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RUb29sTGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5cbmZ1bmN0aW9uIFNlbGVjdFRvb2woeyBzZWxlY3RlZFRvb2wsIHVwZGF0ZVRvb2wgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0VG9vbFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAnc2VsZWN0JyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cInNlbGVjdFwiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Y29sb3JcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgZD1cIk0xMS45NDc2IDAuMjI4ODIzQzEyLjI1MjcgLTAuMDc2Mjc0MyAxMi43NDczIC0wLjA3NjI3NDMgMTMuMDUyNCAwLjIyODgyM0wxNi4xNzc0IDMuMzUzODJDMTYuNDgyNSAzLjY1ODkyIDE2LjQ4MjUgNC4xNTM1OCAxNi4xNzc0IDQuNDU4NjhDMTUuODcyMyA0Ljc2Mzc3IDE1LjM3NzcgNC43NjM3NyAxNS4wNzI2IDQuNDU4NjhMMTMuMjgxMiAyLjY2NzM1VjguNTkzNzVDMTMuMjgxMiA5LjAyNTIyIDEyLjkzMTUgOS4zNzUgMTIuNSA5LjM3NUMxMi4wNjg1IDkuMzc1IDExLjcxODggOS4wMjUyMiAxMS43MTg4IDguNTkzNzVWMi42NjczNUw5LjkyNzQzIDQuNDU4NjhDOS42MjIzMyA0Ljc2Mzc3IDkuMTI3NjcgNC43NjM3NyA4LjgyMjU3IDQuNDU4NjhDOC41MTc0OCA0LjE1MzU4IDguNTE3NDggMy42NTg5MiA4LjgyMjU3IDMuMzUzODJMMTEuOTQ3NiAwLjIyODgyM1pNMTIuNSAxNS42MjVDMTIuOTMxNSAxNS42MjUgMTMuMjgxMiAxNS45NzQ4IDEzLjI4MTIgMTYuNDA2MlYyMi4zMzI2TDE1LjA3MjYgMjAuNTQxM0MxNS4zNzc3IDIwLjIzNjIgMTUuODcyMyAyMC4yMzYyIDE2LjE3NzQgMjAuNTQxM0MxNi40ODI1IDIwLjg0NjQgMTYuNDgyNSAyMS4zNDExIDE2LjE3NzQgMjEuNjQ2MkwxMy4wNTI0IDI0Ljc3MTJDMTIuNzQ3MyAyNS4wNzYzIDEyLjI1MjcgMjUuMDc2MyAxMS45NDc2IDI0Ljc3MTJMOC44MjI1NyAyMS42NDYyQzguNTE3NDggMjEuMzQxMSA4LjUxNzQ4IDIwLjg0NjQgOC44MjI1NyAyMC41NDEzQzkuMTI3NjcgMjAuMjM2MiA5LjYyMjMzIDIwLjIzNjIgOS45Mjc0MyAyMC41NDEzTDExLjcxODcgMjIuMzMyNlYxNi40MDYyQzExLjcxODcgMTUuOTc0OCAxMi4wNjg1IDE1LjYyNSAxMi41IDE1LjYyNVpcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRjb2xvclwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTAuMjI4ODIzIDEzLjA1MjRDLTAuMDc2Mjc0MyAxMi43NDczIC0wLjA3NjI3NDMgMTIuMjUyNyAwLjIyODgyMyAxMS45NDc2TDMuMzUzODIgOC44MjI1N0MzLjY1ODkyIDguNTE3NDggNC4xNTM1OCA4LjUxNzQ4IDQuNDU4NjggOC44MjI1N0M0Ljc2Mzc3IDkuMTI3NjcgNC43NjM3NyA5LjYyMjMzIDQuNDU4NjggOS45Mjc0M0wyLjY2NzM1IDExLjcxODhMOC41OTM3NSAxMS43MTg4QzkuMDI1MjIgMTEuNzE4OCA5LjM3NSAxMi4wNjg1IDkuMzc1IDEyLjVDOS4zNzUgMTIuOTMxNSA5LjAyNTIyIDEzLjI4MTMgOC41OTM3NSAxMy4yODEzTDIuNjY3MzUgMTMuMjgxMkw0LjQ1ODY4IDE1LjA3MjZDNC43NjM3NyAxNS4zNzc3IDQuNzYzNzcgMTUuODcyMyA0LjQ1ODY4IDE2LjE3NzRDNC4xNTM1OCAxNi40ODI1IDMuNjU4OTIgMTYuNDgyNSAzLjM1MzgyIDE2LjE3NzRMMC4yMjg4MjMgMTMuMDUyNFpNMTUuNjI1IDEyLjVDMTUuNjI1IDEyLjA2ODUgMTUuOTc0OCAxMS43MTg4IDE2LjQwNjIgMTEuNzE4OEgyMi4zMzI2TDIwLjU0MTMgOS45Mjc0M0MyMC4yMzYyIDkuNjIyMzMgMjAuMjM2MiA5LjEyNzY3IDIwLjU0MTMgOC44MjI1N0MyMC44NDY0IDguNTE3NDggMjEuMzQxMSA4LjUxNzQ4IDIxLjY0NjIgOC44MjI1N0wyNC43NzEyIDExLjk0NzZDMjUuMDc2MyAxMi4yNTI3IDI1LjA3NjMgMTIuNzQ3MyAyNC43NzEyIDEzLjA1MjRMMjEuNjQ2MiAxNi4xNzc0QzIxLjM0MTEgMTYuNDgyNSAyMC44NDY0IDE2LjQ4MjUgMjAuNTQxMyAxNi4xNzc0QzIwLjIzNjIgMTUuODcyMyAyMC4yMzYyIDE1LjM3NzcgMjAuNTQxMyAxNS4wNzI2TDIyLjMzMjYgMTMuMjgxM0gxNi40MDYyQzE1Ljk3NDggMTMuMjgxMyAxNS42MjUgMTIuOTMxNSAxNS42MjUgMTIuNVpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdyZWN0JyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cInJlY3RcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cblxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCJcbiAgICAgICAgICAgIGQ9XCJNMjEuODc1IDEuNTYyNUMyMi43Mzc5IDEuNTYyNSAyMy40Mzc1IDIuMjYyMDYgMjMuNDM3NSAzLjEyNVYyMS44NzVDMjMuNDM3NSAyMi43Mzc5IDIyLjczNzkgMjMuNDM3NSAyMS44NzUgMjMuNDM3NUgzLjEyNUMyLjI2MjA2IDIzLjQzNzUgMS41NjI1IDIyLjczNzkgMS41NjI1IDIxLjg3NVYzLjEyNUMxLjU2MjUgMi4yNjIwNiAyLjI2MjA2IDEuNTYyNSAzLjEyNSAxLjU2MjVIMjEuODc1Wk0zLjEyNSAwQzEuMzk5MTEgMCAwIDEuMzk5MTEgMCAzLjEyNVYyMS44NzVDMCAyMy42MDA5IDEuMzk5MTEgMjUgMy4xMjUgMjVIMjEuODc1QzIzLjYwMDkgMjUgMjUgMjMuNjAwOSAyNSAyMS44NzVWMy4xMjVDMjUgMS4zOTkxMSAyMy42MDA5IDAgMjEuODc1IDBIMy4xMjVaXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAnY2lyY2xlJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cImNpcmNsZVwiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCJcbiAgICAgICAgICAgIGQ9XCJNMTIuNSAyMy40Mzc1QzYuNDU5MzkgMjMuNDM3NSAxLjU2MjUgMTguNTQwNiAxLjU2MjUgMTIuNUMxLjU2MjUgNi40NTkzOSA2LjQ1OTM5IDEuNTYyNSAxMi41IDEuNTYyNUMxOC41NDA2IDEuNTYyNSAyMy40Mzc1IDYuNDU5MzkgMjMuNDM3NSAxMi41QzIzLjQzNzUgMTguNTQwNiAxOC41NDA2IDIzLjQzNzUgMTIuNSAyMy40Mzc1Wk0xMi41IDI1QzE5LjQwMzYgMjUgMjUgMTkuNDAzNiAyNSAxMi41QzI1IDUuNTk2NDQgMTkuNDAzNiAwIDEyLjUgMEM1LjU5NjQ0IDAgMCA1LjU5NjQ0IDAgMTIuNUMwIDE5LjQwMzYgNS41OTY0NCAyNSAxMi41IDI1WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2wtaWNvbiAke3NlbGVjdGVkVG9vbCA9PT0gJ2Fycm93JyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cImFycm93XCIgb25DbGljaz17dXBkYXRlVG9vbH0+XG5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRjb2xvclwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTEuNTYyNSAxMi41QzEuNTYyNSAxMi4wNjg1IDEuOTEyMjggMTEuNzE4NyAyLjM0Mzc1IDExLjcxODdIMjAuNzcwMUwxNS44NTM4IDYuODAyNDNDMTUuNTQ4NyA2LjQ5NzMzIDE1LjU0ODcgNi4wMDI2NyAxNS44NTM4IDUuNjk3NTdDMTYuMTU4OSA1LjM5MjQ3IDE2LjY1MzYgNS4zOTI0NyAxNi45NTg3IDUuNjk3NTdMMjMuMjA4NyAxMS45NDc2QzIzLjUxMzggMTIuMjUyNyAyMy41MTM4IDEyLjc0NzMgMjMuMjA4NyAxMy4wNTI0TDE2Ljk1ODcgMTkuMzAyNEMxNi42NTM2IDE5LjYwNzUgMTYuMTU4OSAxOS42MDc1IDE1Ljg1MzggMTkuMzAyNEMxNS41NDg3IDE4Ljk5NzMgMTUuNTQ4NyAxOC41MDI3IDE1Ljg1MzggMTguMTk3NkwyMC43NzAxIDEzLjI4MTJIMi4zNDM3NUMxLjkxMjI4IDEzLjI4MTIgMS41NjI1IDEyLjkzMTUgMS41NjI1IDEyLjVaXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAnbGluZScgPyAnc2VsZWN0ZWQnIDogJyd9YH0gaWQ9XCJsaW5lXCIgb25DbGljaz17dXBkYXRlVG9vbH0+XG4gICAgICAgIDxzdmcgaGVpZ2h0PVwiMjVcIiB3aWR0aD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiPlxuICAgICAgICAgIDxsaW5lIHgxPVwiMFwiIHkxPVwiMTBcIiB4Mj1cIjI1XCIgeTI9XCIyNVwiIHN0cm9rZT1cInZhcigtLWljb24tY29sb3IpXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdkaWFtb25kJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cImRpYW1vbmRcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cblxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCJcbiAgICAgICAgICAgIGQ9XCJNMTAuODYwMyAwLjY3OTE4NUMxMS43NjU5IC0wLjIyNjM5NiAxMy4yMzQxIC0wLjIyNjM5NCAxNC4xMzk3IDAuNjc5MTg2TDI0LjMyMDggMTAuODYwM0MyNS4yMjY0IDExLjc2NTkgMjUuMjI2NCAxMy4yMzQxIDI0LjMyMDggMTQuMTM5N0wxNC4xMzk3IDI0LjMyMDhDMTMuMjM0MSAyNS4yMjY0IDExLjc2NTkgMjUuMjI2NCAxMC44NjAzIDI0LjMyMDhMMC42NzkxODUgMTQuMTM5N0MtMC4yMjYzOTYgMTMuMjM0MSAtMC4yMjYzOTQgMTEuNzY1OSAwLjY3OTE4NiAxMC44NjAzTDEwLjg2MDMgMC42NzkxODVaTTEzLjA0NjYgMS43NzIzMkMxMi43NDQ3IDEuNDcwNDYgMTIuMjU1MyAxLjQ3MDQ2IDExLjk1MzQgMS43NzIzMkwxLjc3MjMyIDExLjk1MzRDMS40NzA0NiAxMi4yNTUzIDEuNDcwNDYgMTIuNzQ0NyAxLjc3MjMyIDEzLjA0NjZMMTEuOTUzNCAyMy4yMjc3QzEyLjI1NTMgMjMuNTI5NSAxMi43NDQ3IDIzLjUyOTUgMTMuMDQ2NiAyMy4yMjc3TDIzLjIyNzcgMTMuMDQ2NkMyMy41Mjk1IDEyLjc0NDcgMjMuNTI5NSAxMi4yNTUzIDIzLjIyNzcgMTEuOTUzNEwxMy4wNDY2IDEuNzcyMzJaXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAnY2hhbGsnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwiY2hhbGtcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cblxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8ZyBjbGlwUGF0aD1cInVybCgjY2xpcDBfMTI4N18zNDk4KVwiPlxuICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRjb2xvclwiXG4gICAgICAgICAgICAgIGQ9XCJNMTguOTc4OCAwLjIyODgyM0MxOS4yODM5IC0wLjA3NjI3NDMgMTkuNzc4NiAtMC4wNzYyNzQzIDIwLjA4MzcgMC4yMjg4MjNMMjQuNzcxMiA0LjkxNjMyQzI1LjA3NjMgNS4yMjE0MiAyNS4wNzYzIDUuNzE2MDggMjQuNzcxMiA2LjAyMTE4TDkuMTQ2MiAyMS42NDYyQzkuMDcxMzkgMjEuNzIxIDguOTgyMTYgMjEuNzc5OCA4Ljg4MzkyIDIxLjgxOTFMMS4wNzE0MiAyNC45NDQxQzAuNzgxMjUyIDI1LjA2MDIgMC40NDk4MzIgMjQuOTkyMiAwLjIyODg0NiAyNC43NzEyQzAuMDA3ODU5MiAyNC41NTAyIC0wLjA2MDE2NzQgMjQuMjE4OCAwLjA1NTkwMDQgMjMuOTI4NkwzLjE4MDkgMTYuMTE2MUMzLjIyMDE5IDE2LjAxNzkgMy4yNzkwMyAxNS45Mjg2IDMuMzUzODUgMTUuODUzOEwxOC45Nzg4IDAuMjI4ODIzWk0xNy41MTExIDMuOTA2MjVMMjEuMDkzOCA3LjQ4ODlMMjMuMTEzOSA1LjQ2ODc1TDE5LjUzMTMgMS44ODYxTDE3LjUxMTEgMy45MDYyNVpNMTkuOTg4OSA4LjU5Mzc1TDE2LjQwNjMgNS4wMTExTDYuMjUwMDIgMTUuMTY3NFYxNS42MjVINy4wMzEyN0M3LjQ2Mjc1IDE1LjYyNSA3LjgxMjUyIDE1Ljk3NDggNy44MTI1MiAxNi40MDYyVjE3LjE4NzVIOC41OTM3N0M5LjAyNTI1IDE3LjE4NzUgOS4zNzUwMiAxNy41MzczIDkuMzc1MDIgMTcuOTY4OFYxOC43NUg5LjgzMjY3TDE5Ljk4ODkgOC41OTM3NVpNNC43MzY5OCAxNi42ODA0TDQuNTcyMDkgMTYuODQ1M0wyLjE4MzY2IDIyLjgxNjRMOC4xNTQ3MyAyMC40Mjc5TDguMzE5NjIgMjAuMjYzQzguMDIzMzggMjAuMTUyIDcuODEyNTIgMTkuODY2MyA3LjgxMjUyIDE5LjUzMTJWMTguNzVINy4wMzEyN0M2LjU5OTggMTguNzUgNi4yNTAwMiAxOC40MDAyIDYuMjUwMDIgMTcuOTY4OFYxNy4xODc1SDUuNDY4NzdDNS4xMzM3NyAxNy4xODc1IDQuODQ4MDEgMTYuOTc2NiA0LjczNjk4IDE2LjY4MDRaXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcDBfMTI4N18zNDk4XCI+XG4gICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFRvb2w7IiwgImNsYXNzIEFycm93IHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzBdKTtcbiAgfVxuXG4gIG1vdXNlVXAoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlKGUpO1xuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6ICdhcnJvdycsXG4gICAgICAgIHg6IHRoaXMuc3RhcnRYLFxuICAgICAgICB5OiB0aGlzLnN0YXJ0WSxcbiAgICAgICAgc3RhcnRYOiBNYXRoLm1pbih0aGlzLnN0YXJ0WCwgZS5feCksIC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgc3RhcnRZOiBNYXRoLm1pbih0aGlzLnN0YXJ0WSwgZS5feSksLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICB3aWR0aDogTWF0aC5hYnModGhpcy5zdGFydFggLSBlLl94KSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmFicyh0aGlzLnN0YXJ0WSAtIGUuX3kpLFxuICAgICAgICBlbmRYOiBlLl94LFxuICAgICAgICBlbmRZOiBlLl95XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMuc3RhcnRYID0gZS5feDtcbiAgICB0aGlzLnN0YXJ0WSA9IGUuX3k7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAvKiogKi9cbiAgICBsZXQgY29zcGl4ID0gMC44NjYwMjU0MDQ7XG4gICAgbGV0IGhlYWRsZW4gPSAxMDtcbiAgICBsZXQgZHggPSBlLl94IC0gdGhpcy5zdGFydFg7XG4gICAgbGV0IGR5ID0gZS5feSAtIHRoaXMuc3RhcnRZO1xuICAgIGxldCBsZW5ndGggPSBNYXRoLnNxcnQoZHkgKiBkeSArIGR4ICogZHgpOyAvL2xlbmd0aCBvZiBhcnJvd1xuICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZS5feCwgZS5feSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZS5feCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgZS5feSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZS5feCwgZS5feSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZS5feCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgZS5feSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycm93OyIsICJjbGFzcyBDaGFsayB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaykge1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlLl94LCBlLl95KTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKGUpIHtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKGUuX3gsIGUuX3kpO1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZShlKTtcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFsazsiLCAiaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tIFwiLi4vdXRpbHMvZ2V0RWxlbWVudHNBdFBvc2l0aW9uLmpzXCI7XG5cbmNsYXNzIENpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbMF0pO1xuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUoZSk7XG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCByYWRpdXMgPSBnZXREaXN0YW5jZSh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIGUuX3gsIGUuX3kpO1xuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgeDogdGhpcy5zdGFydFgsXG4gICAgICAgIHk6IHRoaXMuc3RhcnRZLFxuICAgICAgICB3aWR0aDogcmFkaXVzICogcmFkaXVzLFxuICAgICAgICBoZWlnaHQ6IHJhZGl1cyAqIHJhZGl1cyxcbiAgICAgICAgZW5kWDogZS5feCxcbiAgICAgICAgZW5kWTogZS5feSxcbiAgICAgICAgcmFkaXVzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSBlLl94O1xuICAgIHRoaXMuc3RhcnRZID0gZS5feTtcbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIGxldCByYWRpdXMgPSBnZXREaXN0YW5jZSh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIGUuX3gsIGUuX3kpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYXJjKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7IiwgImZ1bmN0aW9uIGdldEVsZW1lbnRzQXRQb3NpdGlvbih4LCB5LCBzaGFwZXMpIHtcbiAgbGV0IHJldHVybkVsZW1lbnQgPSBudWxsO1xuICBsZXQgZGlmZlggPSBudWxsO1xuICBsZXQgZGlmZlkgPSBudWxsO1xuICBpZiAoc2hhcGVzLmxlbmd0aCA+IDApIHtcbiAgICBzaGFwZXMuZm9yRWFjaChzaGFwZSA9PiB7XG4gICAgICBpZiAoc2hhcGUudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gc2hhcGUud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSBzaGFwZS5oZWlnaHQ7XG4gICAgICAgIGxldCBlbmRYID0gc2hhcGUueCArIHdpZHRoO1xuICAgICAgICBsZXQgZW5kWSA9IHNoYXBlLnkgKyBoZWlnaHQ7XG4gICAgICAgIGlmIChzaGFwZS54IDw9IHggJiYgeCA8PSBlbmRYKSB7XG4gICAgICAgICAgaWYgKHNoYXBlLnkgPD0geSAmJiB5IDw9IGVuZFkpIHtcbiAgICAgICAgICAgIGlmICghZGlmZlggfHwgIWRpZmZZKSB7XG4gICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgZGlmZlggPSBNYXRoLm1pbih4IC0gc2hhcGUueCwgZW5kWCAtIHgpO1xuICAgICAgICAgICAgICBkaWZmWSA9IE1hdGgubWluKHkgLSBzaGFwZS55LCBlbmRZIC0geSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZYID0gTWF0aC5taW4oeCAtIHNoYXBlLngsIGVuZFggLSB4KTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWSA9IE1hdGgubWluKHkgLSBzaGFwZS55LCBlbmRZIC0geSk7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50RGlmZlggPCBkaWZmWCB8fCBjdXJyZW50RGlmZlkgPCBkaWZmWSkge1xuICAgICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgICBkaWZmWCA9IGN1cnJlbnREaWZmWDtcbiAgICAgICAgICAgICAgICBkaWZmWSA9IGN1cnJlbnREaWZmWTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdsaW5lJyB8fCBzaGFwZS50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICAgIGxldCBzdGFydGluZ1hCdWZmZXIgPSBzaGFwZS54IC0gMTA7XG4gICAgICAgIGxldCBlbmRpbmdYQnVmZmVyID0gc2hhcGUuZW5kWCArIDEwO1xuICAgICAgICBsZXQgc3RhcnRpbmdZQnVmZmVyID0gc2hhcGUueSAtIDEwO1xuICAgICAgICBsZXQgZW5kaW5nWUJ1ZmZlciA9IHNoYXBlLmVuZFkgKyAxMDtcblxuICAgICAgICBsZXQgbWF4WCA9IE1hdGgubWF4KHN0YXJ0aW5nWEJ1ZmZlciwgZW5kaW5nWEJ1ZmZlcik7XG4gICAgICAgIGxldCBtYXhZID0gTWF0aC5tYXgoc3RhcnRpbmdZQnVmZmVyLCBlbmRpbmdZQnVmZmVyKTtcblxuICAgICAgICBsZXQgbWluWCA9IE1hdGgubWluKHN0YXJ0aW5nWEJ1ZmZlciwgZW5kaW5nWEJ1ZmZlcik7XG4gICAgICAgIGxldCBtaW5ZID0gTWF0aC5taW4oc3RhcnRpbmdZQnVmZmVyLCBlbmRpbmdZQnVmZmVyKTtcblxuICAgICAgICBpZiAobWluWCA8PSB4ICYmIHggPD0gbWF4WCkge1xuICAgICAgICAgIGlmIChtaW5ZIDw9IHkgJiYgeSA8PSBtYXhZKSB7XG4gICAgICAgICAgICBpZiAoIWRpZmZYIHx8ICFkaWZmWSkge1xuICAgICAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgICAgICAgIGRpZmZYID0gTWF0aC5taW4oeCAtIG1pblgsIG1heFggLSB4KTtcbiAgICAgICAgICAgICAgZGlmZlkgPSBNYXRoLm1pbih5IC0gbWluWSwgbWF4WSAtIHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWCA9IE1hdGgubWluKHggLSBtaW5YLCBtYXhYIC0geCk7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50RGlmZlkgPSBNYXRoLm1pbih5IC0gbWluWSwgbWF4WSAtIHkpO1xuICAgICAgICAgICAgICBpZiAoY3VycmVudERpZmZYIDwgZGlmZlggfHwgY3VycmVudERpZmZZIDwgZGlmZlkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgICAgICAgICAgZGlmZlggPSBjdXJyZW50RGlmZlg7XG4gICAgICAgICAgICAgICAgZGlmZlkgPSBjdXJyZW50RGlmZlk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIC8vXG4gICAgICAgIGlmIChzaGFwZS54IDw9IHggJiYgeCA8PSBzaGFwZS5lbmRYKSB7XG4gICAgICAgICAgaWYgKHNoYXBlLnkgPD0geSAmJiB5IDw9IHNoYXBlLmVuZFkpIHtcbiAgICAgICAgICAgIGlmICghZGlmZlggfHwgIWRpZmZZKSB7XG4gICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgZGlmZlggPSBNYXRoLm1pbih4IC0gc2hhcGUueCwgc2hhcGUuZW5kWCAtIHgpO1xuICAgICAgICAgICAgICBkaWZmWSA9IE1hdGgubWluKHkgLSBzaGFwZS55LCBzaGFwZS5lbmRZIC0geSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZYID0gTWF0aC5taW4oeCAtIHNoYXBlLngsIHNoYXBlLmVuZFggLSB4KTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWSA9IE1hdGgubWluKHkgLSBzaGFwZS55LCBzaGFwZS5lbmRZIC0geSk7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50RGlmZlggPCBkaWZmWCB8fCBjdXJyZW50RGlmZlkgPCBkaWZmWSkge1xuICAgICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgICBkaWZmWCA9IGN1cnJlbnREaWZmWDtcbiAgICAgICAgICAgICAgICBkaWZmWSA9IGN1cnJlbnREaWZmWTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgICBsZXQgZGlzdGFuY2VzcXVhcmVkID0gKHggLSBzaGFwZS54KSAqICh4IC0gc2hhcGUueCkgKyAoeSAtIHNoYXBlLnkpICogKHkgLSBzaGFwZS55KTtcbiAgICAgICAgaWYgKGRpc3RhbmNlc3F1YXJlZCA8PSBzaGFwZS5yYWRpdXMgKiBzaGFwZS5yYWRpdXMpIHtcbiAgICAgICAgICAvLyA/Pz8gaG93IHRvIGNhbGN1bGF0ZSBkaWZmLiBidWdneSBiZWhhdmlvdXJcbiAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgICAgLy8gbGV0IHN0YXJ0WCA9IHNoYXBlLnggLSAoc2hhcGUud2lkdGggLyAyKTtcbiAgICAgICAgLy8gbGV0IHN0YXJ0WSA9IHNoYXBlLnk7XG4gICAgICAgIGxldCB3aWR0aCA9IHNoYXBlLndpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gc2hhcGUuaGVpZ2h0O1xuICAgICAgICBsZXQgZW5kWCA9IHNoYXBlLnN0YXJ0WCArIHdpZHRoO1xuICAgICAgICBsZXQgZW5kWSA9IHNoYXBlLnN0YXJ0WSArIGhlaWdodDtcbiAgICAgICAgaWYgKHNoYXBlLnN0YXJ0WCA8PSB4ICYmIHggPD0gZW5kWCkge1xuICAgICAgICAgIGlmIChzaGFwZS5zdGFydFkgPD0geSAmJiB5IDw9IGVuZFkpIHtcbiAgICAgICAgICAgIGlmICghZGlmZlggfHwgIWRpZmZZKSB7XG4gICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgZGlmZlggPSBNYXRoLm1pbih4IC0gc2hhcGUuc3RhcnRYLCBlbmRYIC0geCk7XG4gICAgICAgICAgICAgIGRpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnN0YXJ0WSwgZW5kWSAtIHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWCA9IE1hdGgubWluKHggLSBzaGFwZS5zdGFydFgsIGVuZFggLSB4KTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWSA9IE1hdGgubWluKHkgLSBzaGFwZS5zdGFydFksIGVuZFkgLSB5KTtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnREaWZmWCA8IGRpZmZYIHx8IGN1cnJlbnREaWZmWSA8IGRpZmZZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICAgIGRpZmZYID0gY3VycmVudERpZmZYO1xuICAgICAgICAgICAgICAgIGRpZmZZID0gY3VycmVudERpZmZZO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KVxuICB9XG4gIHJldHVybiByZXR1cm5FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMVgsIHAxWSwgcDJYLCBwMlkpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMVggLSBwMlgsIDIpICsgTWF0aC5wb3cocDFZIC0gcDJZLCAyKSlcbn1cblxuXG5leHBvcnQgeyBnZXRFbGVtZW50c0F0UG9zaXRpb24sIGdldERpc3RhbmNlIH07IiwgImltcG9ydCB7IGRyYXdEaWFtb25kIH0gZnJvbSBcIi4uL3V0aWxzL2RyYXdTaGFwZXMuanNcIjtcblxuY2xhc3MgRGlhbW9uZCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbMF0pO1xuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUoZSk7XG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCB3aWR0aCA9IChNYXRoLmFicyh0aGlzLnN0YXJ0WCAtIGUuX3gpKSAqIDI7XG4gICAgICAvLyB3aWR0aCBhbmQgaGVpZ2h0IHdpbGwgYmUgc2FtZSBmb3IgdGhlIGRpYW1vbmQgXG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6ICdkaWFtb25kJyxcbiAgICAgICAgeDogdGhpcy5zdGFydFgsXG4gICAgICAgIHk6IGUuX3ksXG4gICAgICAgIHN0YXJ0WDogdGhpcy5zdGFydFggLSAod2lkdGggLyAyKSxcbiAgICAgICAgc3RhcnRZOiBlLl95IC0gKHdpZHRoIC8gMiksXG4gICAgICAgIC8vIHhDZW50ZXI6IHRoaXMuc3RhcnRYLFxuICAgICAgICAvLyB5Q2VudGVyOiBlLl95LFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogd2lkdGgsXG4gICAgICAgIGVuZFg6IGUuX3gsXG4gICAgICAgIGVuZFk6IGUuX3lcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuX3g7XG4gICAgdGhpcy5zdGFydFkgPSBlLl95O1xuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICBsZXQgc2l6ZSA9IHRoaXMuc3RhcnRYIC0gZS5feDtcblxuICAgICAgbGV0IHhDZW50ZXIgPSB0aGlzLnN0YXJ0WDtcbiAgICAgIGxldCB5Q2VudGVyID0gZS5feTtcblxuXG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgLy8gdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIC8vIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHhDZW50ZXIgKyBzaXplICogTWF0aC5jb3MoMCksIHlDZW50ZXIgKyBzaXplICogTWF0aC5zaW4oMCkpO1xuXG4gICAgICAvLyBmb3IgKHZhciBpID0gMTsgaSA8PSBudW1iZXJPZlNpZGVzOyBpICs9IDEpIHtcbiAgICAgIC8vICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oeENlbnRlciArIHNpemUgKiBNYXRoLmNvcyhpICogMiAqIE1hdGguUEkgLyBudW1iZXJPZlNpZGVzKSwgeUNlbnRlciArIHNpemUgKiBNYXRoLnNpbihpICogMiAqIE1hdGguUEkgLyBudW1iZXJPZlNpZGVzKSk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG5cbiAgICAgIGRyYXdEaWFtb25kKHhDZW50ZXIsIHlDZW50ZXIsIHNpemUsIHRoaXMudGVtcENvbnRleHQpXG5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbW9uZDsiLCAiZnVuY3Rpb24gZHJhd0RpYW1vbmQoeENlbnRlciwgeUNlbnRlciwgc2l6ZSwgY29udGV4dCkge1xuICBsZXQgbnVtYmVyT2ZTaWRlcyA9IDQ7XG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGNvbnRleHQubW92ZVRvKHhDZW50ZXIgKyBzaXplICogTWF0aC5jb3MoMCksIHlDZW50ZXIgKyBzaXplICogTWF0aC5zaW4oMCkpO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IG51bWJlck9mU2lkZXM7IGkgKz0gMSkge1xuICAgIGNvbnRleHQubGluZVRvKHhDZW50ZXIgKyBzaXplICogTWF0aC5jb3MoaSAqIDIgKiBNYXRoLlBJIC8gbnVtYmVyT2ZTaWRlcyksIHlDZW50ZXIgKyBzaXplICogTWF0aC5zaW4oaSAqIDIgKiBNYXRoLlBJIC8gbnVtYmVyT2ZTaWRlcykpO1xuICB9XG5cbiAgY29udGV4dC5zdHJva2UoKTtcbn1cblxuZnVuY3Rpb24gZHJhd1RleHQodGV4dCwgY29udGV4dCwgeCwgeSwgbWF4V2lkdGgsIGxpbmVIZWlnaHQgPSAzMiwgY29sb3IsIGZvbnRTaXplID0gMjQpIHtcbiAgY29udGV4dC5mb250ID0gYG5vcm1hbCAke2ZvbnRTaXplfXB4LyR7bGluZUhlaWdodH1weCBDb21pYyBTYW5zIE1TYDtcbiAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuICBsZXQgd29yZHMgPSB0ZXh0LnNwbGl0KCcnKTtcbiAgbGV0IGxpbmUgPSAnJztcbiAgbGV0IG51bWJlck9mTGluZXMgPSAxO1xuXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgd29yZHMubGVuZ3RoOyBuKyspIHtcbiAgICBpZiAod29yZHNbbl0gPT09ICdcXG4nKSB7XG4gICAgICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICAgICAgbGluZSA9ICcnO1xuICAgICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgICAgbnVtYmVyT2ZMaW5lcysrO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBsZXQgdGVzdExpbmUgPSBsaW5lICsgd29yZHNbbl0gKyAnJztcbiAgICAgIC8vIGxldCBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0TGluZSk7XG4gICAgICAvLyBsZXQgdGVzdFdpZHRoID0gbWV0cmljcy53aWR0aDtcbiAgICAgIC8vIGlmICh0ZXN0V2lkdGggPiBtYXhXaWR0aCAmJiBuID4gMCkge1xuICAgICAgLy8gICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICAgICAgLy8gICBsaW5lID0gd29yZHNbbl0gKyAnJztcbiAgICAgIC8vICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgICAgLy8gICBudW1iZXJPZkxpbmVzKys7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBsaW5lID0gdGVzdExpbmU7XG4gICAgICAvLyB9XG4gICAgICBsZXQgdGVzdExpbmUgPSBsaW5lICsgd29yZHNbbl0gKyAnJztcbiAgICAgIGxpbmUgPSB0ZXN0TGluZTtcbiAgICB9XG5cbiAgfVxuICBjb250ZXh0LmZpbGxUZXh0KGxpbmUsIHgsIHkpO1xuICByZXR1cm4gbnVtYmVyT2ZMaW5lcztcbn1cblxuXG5leHBvcnQgeyBkcmF3RGlhbW9uZCwgZHJhd1RleHQgfTsiLCAiaW1wb3J0IHsgZHJhd1RleHQgfSBmcm9tIFwiLi4vdXRpbHMvZHJhd1NoYXBlcy5qc1wiO1xuXG5jbGFzcyBEcmF3VGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgaWQsIHNlbGVjdGVkVGhlbWUpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5pbml0aWFsVGV4dCA9ICcnO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLmRibGNsaWNrID0gdGhpcy5vbmRibGNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGV4dEJveENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0Qm94Q29udGFpbmVySWQnKTtcbiAgICB0aGlzLnRleHRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dEFyZWFJZCcpO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZFRoZW1lID0gc2VsZWN0ZWRUaGVtZTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLnRleHRCb3guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25CbHVyKTtcbiAgICB0aGlzLnRleHRCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHtcbiAgICB0aGlzLnRleHRCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25CbHVyKTtcbiAgICB0aGlzLnRleHRCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICB9XG5cbiAgb25DbGljayhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy50ZXh0Qm94KSB7XG4gICAgICBjb25zb2xlLmxvZygnRHJhd2luZyB0ZXh0JywgdGhpcy50ZXh0Qm94LmlubmVySFRNTCk7XG4gICAgICBsZXQgdGV4dCA9IHRoaXMudGV4dEJveC5pbm5lckhUTUwucmVwbGFjZSgvPGRpdj4vZywgXCJcXG5cIikucmVwbGFjZSgvPFxcL2Rpdj4vZywgXCJcIikucmVwbGFjZSgvPGJyPi9nLCBcIlxcblwiKS5yZXBsYWNlKCcmbmJzcDsnLCAnICcpO1xuICAgICAgY29uc29sZS5sb2codGV4dCk7XG4gICAgICBsZXQgY29sb3IgPSB0aGlzLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnO1xuXG5cblxuICAgICAgLy8gVE9ETzogUmVwbGFjZSB1bmRlZmluZWQgd2l0aCBleGFjdCBsaW5lIGhlaWdodFxuICAgICAgbGV0IHRleHRhcmVhU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnRleHRCb3gpO1xuICAgICAgbGV0IHRldHh0YXJlYUNsaWVudFN0eWxlID0gdGhpcy50ZXh0Qm94LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc29sZS5sb2codGV4dGFyZWFTdHlsZSk7XG4gICAgICBsZXQgd2lkdGggPSBNYXRoLmNlaWwoTnVtYmVyKHRleHRhcmVhU3R5bGUud2lkdGguc2xpY2UoMCwgLTIpKSk7XG4gICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5jZWlsKE51bWJlcih0ZXh0YXJlYVN0eWxlLmhlaWdodC5zbGljZSgwLCAtMikpKTtcbiAgICAgIGNvbnNvbGUubG9nKHdpZHRoKTtcbiAgICAgIC8vbGV0IG51bWJlck9mTGluZXMgPSBkcmF3VGV4dCh0ZXh0LCB0aGlzLnRlbXBDb250ZXh0LCB0ZXR4dGFyZWFDbGllbnRTdHlsZS54LCB0ZXR4dGFyZWFDbGllbnRTdHlsZS55LCBNYXRoLmNlaWwod2lkdGgpLCB1bmRlZmluZWQsIGNvbG9yLCB0aGlzLmJhc2VGb250U2l6ZSk7XG5cblxuICAgICAgLy9sZXQgdGV4dE1ldHJpY3MgPSB0aGlzLnRlbXBDb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpO1xuXG4gICAgICAvLyBBZGRpbmcgYnVmZmVyIDEwIHRvIHRoZSBoZWlnaHQgYW5kIHdpZHRoIHZhbHVlc1xuICAgICAgLy9sZXQgaGVpZ2h0ID0gTWF0aC5hYnModGV4dE1ldHJpY3MuZm9udEJvdW5kaW5nQm94QXNjZW50KSArIE1hdGguYWJzKHRleHRNZXRyaWNzLmZvbnRCb3VuZGluZ0JveERlc2NlbnQpICsgMTA7XG4gICAgICAvL2xldCB3aWR0aCA9IE1hdGguYWJzKHRleHRNZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94TGVmdCkgKyBNYXRoLmFicyh0ZXh0TWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveFJpZ2h0KSArIDEwO1xuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHg6IHRldHh0YXJlYUNsaWVudFN0eWxlLmxlZnQsXG4gICAgICAgIHk6IHRldHh0YXJlYUNsaWVudFN0eWxlLnRvcCxcbiAgICAgICAgdGV4dENvbnRlbnQ6IHRleHQsXG4gICAgICAgIGlubmVySHRtbDogdGhpcy50ZXh0Qm94LmlubmVySFRNTCxcbiAgICAgICAgZW5kWDogdGhpcy5zdGFydFggKyB3aWR0aCxcbiAgICAgICAgZW5kWTogdGhpcy5zdGFydFkgKyBoZWlnaHQsXG4gICAgICAgIC8vd2lkdGg6IE1hdGguYWJzKHRleHRNZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94TGVmdCkgKyBNYXRoLmFicyh0ZXh0TWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveFJpZ2h0KSxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfSk7XG5cbiAgICAgIC8vIHJlc2V0dGluZyB0aGUgdGV4dGFyZWEgdmFsdWVzXG4gICAgICAvLyB0aGlzLnRleHRCb3gucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25CbHVyKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gJzFweCc7XG4gICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gJzQycHgnO1xuICAgICAgdGhpcy50ZXh0Qm94LmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyID0gbnVsbDtcbiAgICAgIHRoaXMudGV4dEJveCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25kYmxjbGljayhldiwgZW5jbG9zZWRFbGVtZW50LCB7IHNjcm9sbFgsIHNjcm9sbFksIHNjYWxpbmdGYWN0b3IgfSkge1xuICAgIC8vIFRPRE86IEN1cnJlbnRseSBpbXBsZW1lbnRlZCBmb3IgcmVjdGFuZ2xlIGVuY2xvc2VkIGVsZW1lbnQuIENoZWNrIHBvc3NpYmlsaXR5IGZvciBhbGwgb3RoZXIgc2hhcGVzXG4gICAgdGhpcy5zdGFydFggPSBldi54O1xuICAgIHRoaXMuc3RhcnRZID0gZXYueTtcbiAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUudG9wID0gYCR7ZXYueX1weGA7XG4gICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtldi54fXB4YDtcbiAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy50ZXh0Qm94LmZvY3VzKCk7XG5cbiAgICBpZiAoZW5jbG9zZWRFbGVtZW50KSB7XG4gICAgICBpZiAoZW5jbG9zZWRFbGVtZW50LnR5cGUgPT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICAgIC8vIHRvIGhhdmUgZXF1aSBzcGFjZSBhcm91bmQgdGhlIGhvcml6b250YWwgZWRnZVxuICAgICAgICAvLyBsZXQgZGlmZlggPSBNYXRoLmFicyhNYXRoLmFicyhlbmNsb3NlZEVsZW1lbnQueCAqIHNjYWxpbmdGYWN0b3IpIC0gTWF0aC5hYnMoZXYuX3gpKTtcbiAgICAgICAgLy8gbGV0IGVuY2xvc2VkWCA9IE1hdGguYWJzKE1hdGguYWJzKGVuY2xvc2VkRWxlbWVudC5lbmRYICogc2NhbGluZ0ZhY3RvcikgLSBkaWZmWCk7XG4gICAgICAgIC8vIGxldCBkaWZmWSA9IE1hdGguYWJzKE1hdGguYWJzKGVuY2xvc2VkRWxlbWVudC55ICogc2NhbGluZ0ZhY3RvcikgLSBNYXRoLmFicyhldi5feSkpO1xuICAgICAgICAvLyBsZXQgZW5jbG9zZWRZID0gTWF0aC5hYnMoTWF0aC5hYnMoZW5jbG9zZWRFbGVtZW50LmVuZFkgKiBzY2FsaW5nRmFjdG9yKSAtIGRpZmZZKTtcblxuICAgICAgICAvLyB0aGlzLndpZHRoID0gYCR7TWF0aC5hYnMoZW5jbG9zZWRYIC0gZXYuX3gpfWA7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gYCR7TWF0aC5hYnMoZW5jbG9zZWRZIC0gZXYuX3kpfWA7XG5cbiAgICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG4gICAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICB9IGVsc2UgaWYgKGVuY2xvc2VkRWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLnRvcCA9IGAke2VuY2xvc2VkRWxlbWVudC55ICogc2NhbGluZ0ZhY3RvciArIHNjcm9sbFl9cHhgO1xuICAgICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUubGVmdCA9IGAke2VuY2xvc2VkRWxlbWVudC54ICogc2NhbGluZ0ZhY3RvciArIHNjcm9sbFh9cHhgO1xuICAgICAgICB0aGlzLnRleHRCb3guaW5uZXJIVE1MID0gZW5jbG9zZWRFbGVtZW50LmlubmVySHRtbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IGVuY2xvc2VkRWxlbWVudC53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBlbmNsb3NlZEVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuc2VsZWN0QWxsQ2hpbGRyZW4odGhpcy50ZXh0Qm94KVxuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuY29sbGFwc2VUb0VuZCgpO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0WCA9IGVuY2xvc2VkRWxlbWVudC54O1xuICAgICAgICAvLyB0aGlzLnN0YXJ0WSA9IGVuY2xvc2VkRWxlbWVudC55O1xuICAgICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRPRE86IHRvIGhhdmUgZXF1aSBzcGFjZSBhcm91bmQgdGhlIGhvcml6b250YWwgZWRnZVxuXG4gICAgICAgIC8vIHRoaXMud2lkdGggPSBgJHtNYXRoLmFicyh0aGlzLnRlbXBDYW52YXMud2lkdGggLSBldi54KSAtIDEwfWA7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gYCR7TWF0aC5hYnModGhpcy50ZW1wQ2FudmFzLmhlaWdodCAtIGV2LnkpIC0gMTB9YDtcbiAgICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG4gICAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZm9yIGFsbCBzaGFwZXNcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETzogdG8gaGF2ZSBlcXVpIHNwYWNlIGFyb3VuZCB0aGUgaG9yaXpvbnRhbCBlZGdlXG5cbiAgICAgIC8vIHRoaXMud2lkdGggPSBgJHtNYXRoLmFicyh0aGlzLnRlbXBDYW52YXMud2lkdGggLSBldi54KSAtIDEwfWA7XG4gICAgICAvLyB0aGlzLmhlaWdodCA9IGAke01hdGguYWJzKHRoaXMudGVtcENhbnZhcy5oZWlnaHQgLSBldi55KSAtIDEwfWA7XG4gICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdUZXh0OyIsICJjbGFzcyBMaW5lIHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzBdKTsgLy8gY2xlYXJpZyBsaW5lIGRhc2hlZFxuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUoZSk7XG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICB4OiB0aGlzLnN0YXJ0WCxcbiAgICAgICAgeTogdGhpcy5zdGFydFksXG4gICAgICAgIHN0YXJ0WDogTWF0aC5taW4odGhpcy5zdGFydFgsIGUuX3gpLCAvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgIHN0YXJ0WTogTWF0aC5taW4odGhpcy5zdGFydFksIGUuX3kpLC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgd2lkdGg6IE1hdGguYWJzKHRoaXMuc3RhcnRYIC0gZS5feCksIC8vIENoZWNrIGlmIGl0IGlzIHdyb25nIGNhbGN1bGF0aW9uLlxuICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKHRoaXMuc3RhcnRZIC0gZS5feSksIC8vQ2hlY2sgaWYgaXQgaXMgd3JvbmcgY2FsY3VsYXRpb25cbiAgICAgICAgZW5kWDogZS5feCxcbiAgICAgICAgZW5kWTogZS5feVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKGUpIHtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuX3g7XG4gICAgdGhpcy5zdGFydFkgPSBlLl95O1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFkpO1xuICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGUuX3gsIGUuX3kpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5lOyIsICJpbXBvcnQgeyBkcmF3RGlhbW9uZCwgZHJhd1RleHQgfSBmcm9tIFwiLi4vdXRpbHMvZHJhd1NoYXBlcy5qc1wiO1xuXG5jbGFzcyBNb3ZlVG9vbCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgZWxlbWVudCwgdGhlbWUpIHtcbiAgICB0aGlzLmlkID0gZWxlbWVudC5pZDtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLnRlbXBDYW52YXMgPSB0ZW1wQ2FudmFzO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0ZW1wQ29udGV4dDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5tb3VzZXVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZWRvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vtb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0ZWRUaGVtZSA9IHRoZW1lO1xuICAgIC8vdGhpcy5kcmF3RXhpc2l0aW5nRWxlbWVudE9uVGVtcCgpO1xuICB9XG5cbiAgbW91c2VEb3duKGUpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRYID0gZS5feDtcbiAgICB0aGlzLnN0YXJ0WSA9IGUuX3k7XG4gICAgLy8gVGVtcCBDaGVjay4gTmVlZCB0byBhZG9wdCB0byBhbGwgdGhpcy5lbGVtZW50cy4gZG9pbmcgdGhpcyBmb3IgcmVjdGFuZ2xlIGNoZWNrIGluaXRpYWwuXG4gICAgdGhpcy5kaWZmWCA9IE1hdGguYWJzKHRoaXMuZWxlbWVudC54IC0gdGhpcy5zdGFydFgpO1xuICAgIHRoaXMuZGlmZlkgPSBNYXRoLmFicyh0aGlzLmVsZW1lbnQueSAtIGUueSk7XG4gICAgdGhpcy5kcmF3RXhpc2l0aW5nRWxlbWVudE9uVGVtcCgpO1xuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlTW92ZShlKTtcbiAgICAgIC8vIEZvciByZWN0YW5nbGVcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgaWQ6IHRoaXMuZWxlbWVudC5pZCxcbiAgICAgICAgICB0eXBlOiAncmVjdGFuZ2xlJyxcbiAgICAgICAgICB4OiBlLl94LFxuICAgICAgICAgIHk6IGUuX3ksXG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxlbWVudC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbWVudC5oZWlnaHQsXG4gICAgICAgICAgZW5kWDogZS5feCxcbiAgICAgICAgICBlbmRZOiBlLl95XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2Fycm93Jykge1xuICAgICAgICBsZXQgZW5kWCA9IHRoaXMuZWxlbWVudC5lbmRYID4gdGhpcy5lbGVtZW50LnggPyBlLl94ICsgdGhpcy5lbGVtZW50LndpZHRoIDogZS5feCAtIHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICAgICAgbGV0IGVuZFkgPSB0aGlzLmVsZW1lbnQuZW5kWSA+IHRoaXMuZWxlbWVudC55ID8gZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHQgOiBlLl95IC0gdGhpcy5lbGVtZW50LmhlaWdodDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdHlwZTogJ2Fycm93JyxcbiAgICAgICAgICB4OiBlLl94LFxuICAgICAgICAgIHk6IGUuX3ksXG4gICAgICAgICAgc3RhcnRYOiBNYXRoLm1pbihlbmRYLCBlLl94KSwgLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICAgIHN0YXJ0WTogTWF0aC5taW4oZW5kWSwgZS5feSksLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1lbnQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1lbnQuaGVpZ2h0LFxuICAgICAgICAgIGVuZFgsXG4gICAgICAgICAgZW5kWVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdsaW5lJykge1xuICAgICAgICBsZXQgZW5kWCA9IHRoaXMuZWxlbWVudC5lbmRYID4gdGhpcy5lbGVtZW50LnggPyBlLl94ICsgdGhpcy5lbGVtZW50LndpZHRoIDogZS5feCAtIHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICAgICAgbGV0IGVuZFkgPSB0aGlzLmVsZW1lbnQuZW5kWSA+IHRoaXMuZWxlbWVudC55ID8gZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHQgOiBlLl95IC0gdGhpcy5lbGVtZW50LmhlaWdodDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgIHg6IGUuX3gsXG4gICAgICAgICAgeTogZS5feSxcbiAgICAgICAgICBzdGFydFg6IE1hdGgubWluKGUuX3gsIGVuZFgpLCAvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgICAgc3RhcnRZOiBNYXRoLm1pbihlLl95LCBlbmRZKSwvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxlbWVudC53aWR0aCwgLy8gQ2hlY2sgaWYgaXQgaXMgd3JvbmcgY2FsY3VsYXRpb24uXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1lbnQuaGVpZ2h0LCAvL0NoZWNrIGlmIGl0IGlzIHdyb25nIGNhbGN1bGF0aW9uXG4gICAgICAgICAgZW5kWCxcbiAgICAgICAgICBlbmRZXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgICAgeDogZS5feCxcbiAgICAgICAgICB5OiBlLl95LFxuICAgICAgICAgIHJhZGl1czogdGhpcy5lbGVtZW50LnJhZGl1cyxcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtZW50LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtZW50LmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICB0eXBlOiAnZGlhbW9uZCcsXG4gICAgICAgICAgeDogZS5feCxcbiAgICAgICAgICB5OiBlLl95LFxuICAgICAgICAgIHN0YXJ0WDogZS5feCAtICh0aGlzLmVsZW1lbnQud2lkdGggLyAyKSxcbiAgICAgICAgICBzdGFydFk6IGUuX3kgLSAodGhpcy5lbGVtZW50LndpZHRoIC8gMiksXG4gICAgICAgICAgLy8geENlbnRlcjogdGhpcy5zdGFydFgsXG4gICAgICAgICAgLy8geUNlbnRlcjogZS5feSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtZW50LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtZW50LmhlaWdodCxcbiAgICAgICAgICBlbmRYOiBlLl94ICsgKHRoaXMuZWxlbWVudC53aWR0aCAvIDIpLFxuICAgICAgICAgIGVuZFk6IGUuX3kgKyB0aGlzLmVsZW1lbnQuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICB4OiBlLl94LFxuICAgICAgICAgIHk6IGUuX3ksXG4gICAgICAgICAgdGV4dENvbnRlbnQ6IHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCxcbiAgICAgICAgICBlbmRYOiBlLl94ICsgTnVtYmVyKHRoaXMuZWxlbWVudC53aWR0aCksXG4gICAgICAgICAgZW5kWTogZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHQsXG4gICAgICAgICAgLy93aWR0aDogTWF0aC5hYnModGV4dE1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hMZWZ0KSArIE1hdGguYWJzKHRleHRNZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94UmlnaHQpLFxuICAgICAgICAgIHdpZHRoOiBOdW1iZXIodGhpcy5lbGVtZW50LndpZHRoKSxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbWVudC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KGUuX3gsIGUuX3ksIHRoaXMuZWxlbWVudC53aWR0aCwgdGhpcy5lbGVtZW50LmhlaWdodCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2Fycm93Jykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIGxldCBoZWFkbGVuID0gMTA7XG4gICAgICBsZXQgZGlmZlggPSBNYXRoLmFicyh0aGlzLmVsZW1lbnQueCAtIGUuX3gpO1xuICAgICAgbGV0IGRpZmZZID0gTWF0aC5hYnModGhpcy5lbGVtZW50LnkgLSBlLl95KTtcbiAgICAgIGxldCB4ID0gdGhpcy5lbGVtZW50LnggKyBkaWZmWDtcbiAgICAgIGxldCB5ID0gdGhpcy5lbGVtZW50LnkgKyBkaWZmWTtcbiAgICAgIGxldCBlbmRYO1xuICAgICAgbGV0IGVuZFk7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LmVuZFggPiB0aGlzLmVsZW1lbnQueCkge1xuICAgICAgICBlbmRYID0gZS5feCArIHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFggPSBlLl94IC0gdGhpcy5lbGVtZW50LndpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50LmVuZFkgPiB0aGlzLmVsZW1lbnQueSkge1xuICAgICAgICBlbmRZID0gZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRZID0gZS5feSAtIHRoaXMuZWxlbWVudC5oZWlnaHQ7XG4gICAgICB9XG5cblxuICAgICAgbGV0IGR4ID0gZW5kWCAtIHg7XG4gICAgICBsZXQgZHkgPSBlbmRZIC0geTtcbiAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyhlLl94LCBlLl95KVxuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZW5kWCwgZW5kWSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLCBlbmRZIC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKGVuZFgsIGVuZFkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZW5kWCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgZW5kWSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnbGluZScpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICBsZXQgZW5kWDtcbiAgICAgIGxldCBlbmRZO1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC5lbmRYID4gdGhpcy5lbGVtZW50LngpIHtcbiAgICAgICAgZW5kWCA9IGUuX3ggKyB0aGlzLmVsZW1lbnQud2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRYID0gZS5feCAtIHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5lbmRZID4gdGhpcy5lbGVtZW50LnkpIHtcbiAgICAgICAgZW5kWSA9IGUuX3kgKyB0aGlzLmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kWSA9IGUuX3kgLSB0aGlzLmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgfVxuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKGUuX3gsIGUuX3kpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZW5kWCwgZW5kWSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmFyYyhlLl94LCBlLl95LCB0aGlzLmVsZW1lbnQucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIGRyYXdEaWFtb25kKGUuX3gsIGUuX3ksIHRoaXMuZWxlbWVudC53aWR0aCAvIDIsIHRoaXMudGVtcENvbnRleHQpXG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgbGV0IGNvbG9yID0gdGhpcy5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiNGRkZGRkZcIiA6ICcjMDAwMDAwJztcbiAgICAgIGRyYXdUZXh0KHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCwgdGhpcy50ZW1wQ29udGV4dCwgZS5feCwgZS5feSwgdGhpcy5lbGVtZW50LndpZHRoLCB1bmRlZmluZWQsIGNvbG9yKVxuICAgIH1cbiAgfVxuXG5cblxuXG4gIGRyYXdFeGlzaXRpbmdFbGVtZW50T25UZW1wKCkge1xuICAgIC8vICB0eXBlID09PSAncmVjdGFuZ2xlJ1xuICAgIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh0aGlzLmVsZW1lbnQueCwgdGhpcy5lbGVtZW50LnksIHRoaXMuZWxlbWVudC53aWR0aCwgdGhpcy5lbGVtZW50LmhlaWdodCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2Fycm93Jykge1xuICAgICAgbGV0IGhlYWRsZW4gPSAxMDtcbiAgICAgIGxldCBkeCA9IHRoaXMuZWxlbWVudC5lbmRYIC0gdGhpcy5lbGVtZW50Lng7XG4gICAgICBsZXQgZHkgPSB0aGlzLmVsZW1lbnQuZW5kWSAtIHRoaXMuZWxlbWVudC55O1xuICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHRoaXMuZWxlbWVudC54LCB0aGlzLmVsZW1lbnQueSlcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKHRoaXMuZWxlbWVudC5lbmRYLCB0aGlzLmVsZW1lbnQuZW5kWSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyh0aGlzLmVsZW1lbnQuZW5kWCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSAtIE1hdGguUEkgLyA2KSwgdGhpcy5lbGVtZW50LmVuZFkgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gNikpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8odGhpcy5lbGVtZW50LmVuZFgsIHRoaXMuZWxlbWVudC5lbmRZKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKHRoaXMuZWxlbWVudC5lbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDYpLCB0aGlzLmVsZW1lbnQuZW5kWSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnbGluZScpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyh0aGlzLmVsZW1lbnQueCwgdGhpcy5lbGVtZW50LnkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8odGhpcy5lbGVtZW50LmVuZFgsIHRoaXMuZWxlbWVudC5lbmRZKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5hcmModGhpcy5lbGVtZW50LngsIHRoaXMuZWxlbWVudC55LCB0aGlzLmVsZW1lbnQucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgbGV0IHhDZW50ZXIgPSB0aGlzLmVsZW1lbnQueDtcbiAgICAgIGxldCB5Q2VudGVyID0gdGhpcy5lbGVtZW50Lnk7XG4gICAgICBsZXQgc2l6ZSA9IHRoaXMuZWxlbWVudC54IC0gdGhpcy5lbGVtZW50LmVuZFg7XG4gICAgICBkcmF3RGlhbW9uZCh4Q2VudGVyLCB5Q2VudGVyLCBzaXplLCB0aGlzLnRlbXBDb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIGxldCBjb2xvciA9IHRoaXMuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjRkZGRkZGXCIgOiAnIzAwMDAwMCc7XG4gICAgICBkcmF3VGV4dCh0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuZWxlbWVudC54LCB0aGlzLmVsZW1lbnQueSwgdGhpcy5lbGVtZW50LndpZHRoLCB1bmRlZmluZWQsIGNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92ZVRvb2w7IiwgImNsYXNzIFJlY3Qge1xuICBjb25zdHJ1Y3Rvcih0ZW1wQ2FudmFzLCB0ZW1wQ29udGV4dCwgY2FsbGJhY2ssIGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzBdKTtcbiAgfVxuXG4gIG1vdXNlVXAoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlKGUpO1xuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6ICdyZWN0YW5nbGUnLFxuICAgICAgICB4OiBNYXRoLm1pbih0aGlzLnN0YXJ0WCwgZS5feCksXG4gICAgICAgIHk6IE1hdGgubWluKHRoaXMuc3RhcnRZLCBlLl95KSxcbiAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgIGVuZFg6IE1hdGgubWF4KHRoaXMuc3RhcnRYLCBlLl94KSxcbiAgICAgICAgZW5kWTogTWF0aC5tYXgodGhpcy5zdGFydFksIGUuX3kpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSBlLl94O1xuICAgIHRoaXMuc3RhcnRZID0gZS5feTtcbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgbGV0IHggPSBNYXRoLm1pbihlLl94LCB0aGlzLnN0YXJ0WCk7XG4gICAgICBsZXQgeSA9IE1hdGgubWluKGUuX3ksIHRoaXMuc3RhcnRZKTtcbiAgICAgIGxldCB3aWR0aCA9IE1hdGguYWJzKGUuX3ggLSB0aGlzLnN0YXJ0WCk7XG4gICAgICBsZXQgaGVpZ2h0ID0gTWF0aC5hYnMoZS5feSAtIHRoaXMuc3RhcnRZKTtcblxuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcblxuICAgICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWN0OyIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRUb29sLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0VG9vbExpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxufVxuXG5mdW5jdGlvbiBUZXh0VG9vbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19IGNsYXNzTmFtZT1cInRleHRUb29sXCIgaWQ9XCJ0ZXh0Qm94Q29udGFpbmVySWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dGFyZWFcIiBpZD1cInRleHRBcmVhSWRcIiByb2xlPVwidGV4dGJveFwiIGNvbnRlbnRFZGl0YWJsZSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRUb29sOyIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1pvb21Db250YWluZXIuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFpvb21Db250YWluZXJMaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XVxufVxuXG5mdW5jdGlvbiBab29tQ29udGFpbmVyKHsgem9vbVJhbmdlLCB6b29tSW4sIHpvb21PdXQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiem9vbUNvbnRhaW5lclwiPlxuICAgICAgPHNwYW4gaWQ9XCJtaW51c1wiIGNsYXNzTmFtZT1cInpvb20tc2lnblwiIG9uQ2xpY2s9e3pvb21Jbn0+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTMuMTI1IDEyLjVDMy4xMjUgMTIuMDY4NSAzLjQ3NDc4IDExLjcxODggMy45MDYyNSAxMS43MTg4SDIxLjA5MzhDMjEuNTI1MiAxMS43MTg4IDIxLjg3NSAxMi4wNjg1IDIxLjg3NSAxMi41QzIxLjg3NSAxMi45MzE1IDIxLjUyNTIgMTMuMjgxMiAyMS4wOTM4IDEzLjI4MTJIMy45MDYyNUMzLjQ3NDc4IDEzLjI4MTIgMy4xMjUgMTIuOTMxNSAzLjEyNSAxMi41WlwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudGNvbG9yXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBpZD1cInpvb21SYW5nZVwiIGNsYXNzTmFtZT1cInpvb20tcmFuZ2VcIj57TWF0aC5mbG9vcih6b29tUmFuZ2UgKiAxMDApfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGlkPVwicGx1c1wiIGNsYXNzTmFtZT1cInpvb20tc2lnblwiIG9uQ2xpY2s9e3pvb21PdXR9PlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgZD1cIk0xMi41IDMuMTI1QzEyLjkzMTUgMy4xMjUgMTMuMjgxMiAzLjQ3NDc4IDEzLjI4MTIgMy45MDYyNVYxMS43MTg4SDIxLjA5MzhDMjEuNTI1MiAxMS43MTg4IDIxLjg3NSAxMi4wNjg1IDIxLjg3NSAxMi41QzIxLjg3NSAxMi45MzE1IDIxLjUyNTIgMTMuMjgxMiAyMS4wOTM4IDEzLjI4MTJIMTMuMjgxMlYyMS4wOTM4QzEzLjI4MTIgMjEuNTI1MiAxMi45MzE1IDIxLjg3NSAxMi41IDIxLjg3NUMxMi4wNjg1IDIxLjg3NSAxMS43MTg3IDIxLjUyNTIgMTEuNzE4NyAyMS4wOTM4VjEzLjI4MTJIMy45MDYyNUMzLjQ3NDc4IDEzLjI4MTIgMy4xMjUgMTIuOTMxNSAzLjEyNSAxMi41QzMuMTI1IDEyLjA2ODUgMy40NzQ3OCAxMS43MTg4IDMuOTA2MjUgMTEuNzE4OEgxMS43MTg4VjMuOTA2MjVDMTEuNzE4OCAzLjQ3NDc4IDEyLjA2ODUgMy4xMjUgMTIuNSAzLjEyNVpcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRjb2xvclwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9zcGFuPlxuXG5cblxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgWm9vbUNvbnRhaW5lcjsiLCAiY2xhc3MgSWRiIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBpbml0aWFsaXplSW5kZXhlZERiKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlcXVlc3QgPSBzZWxmLmluZGV4ZWREQi5vcGVuKCdyZWR1eC1zdGF0ZScsICcxJyk7XG4gICAgICB0aGlzLnJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICB0aGlzLmRiLmNyZWF0ZU9iamVjdFN0b3JlKCdyZWR1eC1wZXJzaXN0YW5jZScsIHtcbiAgICAgICAgICBrZXk6ICdhcHAtc3RhdGUtcGVyc2lzdCdcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB0aGlzLnJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICByZWplY3QoJ2VycicpO1xuICAgICAgfTtcbiAgICAgIHRoaXMucmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5kYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgIHJlc29sdmUoJ3N1Y2Nlc3MnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIHRyYW5zYWN0aW9uIGRhdGEgd2lsbCBiZSBrZXkgaW4gcmVhZG9ubHkgbW9kZSBhbmQgdmFsdWUgdG8gYmUgc3RvcmVkIGluIGNhc2Ugb2YgdXBkYXRlXG4gIHBlcmZvcm1UcmFuc2FjdGlvbihtb2RlLCB7IGtleSA9IG51bGwsIHRyYW5zYWN0aW9uRGF0YSA9IG51bGwgfSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgaWYgKCF0aGlzLmRiIHx8ICF0aGlzLmRiLnRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5pbml0aWFsaXplSW5kZXhlZERiKCkpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuZGIudHJhbnNhY3Rpb24oWydyZWR1eC1wZXJzaXN0YW5jZSddLCBtb2RlKTtcbiAgICAgICAgY29uc3QgcmVkdXhTdGF0ZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdyZWR1eC1wZXJzaXN0YW5jZScpO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWRvbmx5Jykge1xuICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25SZXEgPSByZWR1eFN0YXRlLmdldChrZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25SZXEgPSByZWR1eFN0YXRlLnB1dCh0cmFuc2FjdGlvbkRhdGEsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblJlcS5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblJlcS5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KCdFcnJvciB3aGlsZSBpbml0aWFsaXppbmcgdHJhbnNhdGlvbicsIGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGF0YUZyb21JZGIoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucGVyZm9ybVRyYW5zYWN0aW9uKCdyZWFkb25seScsIHsga2V5IH0pLnRoZW4oKHRyYW5zYWN0aW9uRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VPYmogPSB7XG4gICAgICAgIG1lc3NhZ2U6ICdHRVRfREFUQV9TVUNDRVNTJyxcbiAgICAgICAgcGF5bG9hZDogdHJhbnNhY3Rpb25FdmVudC50YXJnZXQucmVzdWx0XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRXZlbnQudGFyZ2V0LnJlc3VsdFxuICAgICAgLy8gc3luY1RhYnMoY2xpZW50SWQsIG1lc3NhZ2VPYmopO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlRGIoZGF0YSwga2V5KSB7XG4gICAgdGhpcy5wZXJmb3JtVHJhbnNhY3Rpb24oJ3JlYWR3cml0ZScsIHsgdHJhbnNhY3Rpb25EYXRhOiBkYXRhLCBrZXkgfSkudGhlbigodHJhbnNhY3Rpb25EZXQpID0+IHtcbiAgICAgIC8vIFRPRE86IFVuY29tbWVudCB0aGUgYmVsb3cgbGluZSBpZiBzeW5jaW5nIGlzIHJlcXVpcmVkIGJldHdlZW4gdGFicy5cbiAgICAgIC8qIHN5bmNUYWJzKGNsaWVudElkLCBkYXRhKTsgKi9cbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aGlsZSBwZXJmb3JtaW5nIHRyYW5zYWN0aW9uJywgdHJhbnNhY3Rpb25EZXQpO1xuICAgIH0pO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSWRiOyIsICJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFNvY2tldENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTb2NrZXQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KGNvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU29ja2V0UHJvdmlkZXIoeyBzb2NrZXQsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxTb2NrZXRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzb2NrZXR9PntjaGlsZHJlbn08L1NvY2tldENvbnRleHQuUHJvdmlkZXI+O1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzNiOTNkY2YyJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC0zWExNVTVNWS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlRGQkJTSkQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MTjMySklTWS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtN0FQMk40QlYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1DMkJDVVBGSi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTNCOTNEQ0YyLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIs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
