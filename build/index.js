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

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
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
  default: () => handleRequest
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

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
function meta() {
  return { title: "New Remix App" };
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links
});
init_react();

// app/components/main.js
init_react();
var import_react5 = __toESM(require("react"));

// app/components/ConfigTool/ConfigTool.js
init_react();
var import_react = __toESM(require("react"));
function ConfigTool({ toggleTheme }) {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "configTool"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "configLabel"
  }, "Dark Mode"), /* @__PURE__ */ import_react.default.createElement("label", {
    className: "switch"
  }, /* @__PURE__ */ import_react.default.createElement("input", {
    type: "checkbox",
    onClick: toggleTheme
  }), /* @__PURE__ */ import_react.default.createElement("span", {
    className: "slider round",
    id: "toggleDarkMode"
  }))));
}
var ConfigTool_default = ConfigTool;

// app/components/SelectTool/SelectTool.js
init_react();
var import_react2 = __toESM(require("react"));
function SelectTool({ selectedTool, updateTool }) {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "selectTool"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: `tool-icon ${selectedTool === "select" ? "selected" : ""}`,
    id: "select",
    onClick: updateTool
  }, /* @__PURE__ */ import_react2.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    fill: "currentcolor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.9476 0.228823C12.2527 -0.0762743 12.7473 -0.0762743 13.0524 0.228823L16.1774 3.35382C16.4825 3.65892 16.4825 4.15358 16.1774 4.45868C15.8723 4.76377 15.3777 4.76377 15.0726 4.45868L13.2812 2.66735V8.59375C13.2812 9.02522 12.9315 9.375 12.5 9.375C12.0685 9.375 11.7188 9.02522 11.7188 8.59375V2.66735L9.92743 4.45868C9.62233 4.76377 9.12767 4.76377 8.82257 4.45868C8.51748 4.15358 8.51748 3.65892 8.82257 3.35382L11.9476 0.228823ZM12.5 15.625C12.9315 15.625 13.2812 15.9748 13.2812 16.4062V22.3326L15.0726 20.5413C15.3777 20.2362 15.8723 20.2362 16.1774 20.5413C16.4825 20.8464 16.4825 21.3411 16.1774 21.6462L13.0524 24.7712C12.7473 25.0763 12.2527 25.0763 11.9476 24.7712L8.82257 21.6462C8.51748 21.3411 8.51748 20.8464 8.82257 20.5413C9.12767 20.2362 9.62233 20.2362 9.92743 20.5413L11.7187 22.3326V16.4062C11.7187 15.9748 12.0685 15.625 12.5 15.625Z"
  }), /* @__PURE__ */ import_react2.default.createElement("path", {
    fill: "currentcolor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.228823 13.0524C-0.0762743 12.7473 -0.0762743 12.2527 0.228823 11.9476L3.35382 8.82257C3.65892 8.51748 4.15358 8.51748 4.45868 8.82257C4.76377 9.12767 4.76377 9.62233 4.45868 9.92743L2.66735 11.7188L8.59375 11.7188C9.02522 11.7188 9.375 12.0685 9.375 12.5C9.375 12.9315 9.02522 13.2813 8.59375 13.2813L2.66735 13.2812L4.45868 15.0726C4.76377 15.3777 4.76377 15.8723 4.45868 16.1774C4.15358 16.4825 3.65892 16.4825 3.35382 16.1774L0.228823 13.0524ZM15.625 12.5C15.625 12.0685 15.9748 11.7188 16.4062 11.7188H22.3326L20.5413 9.92743C20.2362 9.62233 20.2362 9.12767 20.5413 8.82257C20.8464 8.51748 21.3411 8.51748 21.6462 8.82257L24.7712 11.9476C25.0763 12.2527 25.0763 12.7473 24.7712 13.0524L21.6462 16.1774C21.3411 16.4825 20.8464 16.4825 20.5413 16.1774C20.2362 15.8723 20.2362 15.3777 20.5413 15.0726L22.3326 13.2813H16.4062C15.9748 13.2813 15.625 12.9315 15.625 12.5Z"
  }))), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: `tool-icon ${selectedTool === "rect" ? "selected" : ""}`,
    id: "rect",
    onClick: updateTool
  }, /* @__PURE__ */ import_react2.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    fill: "currentcolor",
    d: "M21.875 1.5625C22.7379 1.5625 23.4375 2.26206 23.4375 3.125V21.875C23.4375 22.7379 22.7379 23.4375 21.875 23.4375H3.125C2.26206 23.4375 1.5625 22.7379 1.5625 21.875V3.125C1.5625 2.26206 2.26206 1.5625 3.125 1.5625H21.875ZM3.125 0C1.39911 0 0 1.39911 0 3.125V21.875C0 23.6009 1.39911 25 3.125 25H21.875C23.6009 25 25 23.6009 25 21.875V3.125C25 1.39911 23.6009 0 21.875 0H3.125Z"
  }))), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: `tool-icon ${selectedTool === "circle" ? "selected" : ""}`,
    id: "circle",
    onClick: updateTool
  }, /* @__PURE__ */ import_react2.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    fill: "currentcolor",
    d: "M12.5 23.4375C6.45939 23.4375 1.5625 18.5406 1.5625 12.5C1.5625 6.45939 6.45939 1.5625 12.5 1.5625C18.5406 1.5625 23.4375 6.45939 23.4375 12.5C23.4375 18.5406 18.5406 23.4375 12.5 23.4375ZM12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
  }))), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: `tool-icon ${selectedTool === "arrow" ? "selected" : ""}`,
    id: "arrow",
    onClick: updateTool
  }, /* @__PURE__ */ import_react2.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    fill: "currentcolor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5625 12.5C1.5625 12.0685 1.91228 11.7187 2.34375 11.7187H20.7701L15.8538 6.80243C15.5487 6.49733 15.5487 6.00267 15.8538 5.69757C16.1589 5.39247 16.6536 5.39247 16.9587 5.69757L23.2087 11.9476C23.5138 12.2527 23.5138 12.7473 23.2087 13.0524L16.9587 19.3024C16.6536 19.6075 16.1589 19.6075 15.8538 19.3024C15.5487 18.9973 15.5487 18.5027 15.8538 18.1976L20.7701 13.2812H2.34375C1.91228 13.2812 1.5625 12.9315 1.5625 12.5Z"
  }))), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: `tool-icon ${selectedTool === "line" ? "selected" : ""}`,
    id: "line",
    onClick: updateTool
  }, /* @__PURE__ */ import_react2.default.createElement("svg", {
    height: "25",
    width: "25",
    viewBox: "0 0 25 25"
  }, /* @__PURE__ */ import_react2.default.createElement("line", {
    x1: "0",
    y1: "10",
    x2: "25",
    y2: "25",
    stroke: "var(--icon-color)"
  }))), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: `tool-icon ${selectedTool === "diamond" ? "selected" : ""}`,
    id: "diamond",
    onClick: updateTool
  }, /* @__PURE__ */ import_react2.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    fill: "currentcolor",
    d: "M10.8603 0.679185C11.7659 -0.226396 13.2341 -0.226394 14.1397 0.679186L24.3208 10.8603C25.2264 11.7659 25.2264 13.2341 24.3208 14.1397L14.1397 24.3208C13.2341 25.2264 11.7659 25.2264 10.8603 24.3208L0.679185 14.1397C-0.226396 13.2341 -0.226394 11.7659 0.679186 10.8603L10.8603 0.679185ZM13.0466 1.77232C12.7447 1.47046 12.2553 1.47046 11.9534 1.77232L1.77232 11.9534C1.47046 12.2553 1.47046 12.7447 1.77232 13.0466L11.9534 23.2277C12.2553 23.5295 12.7447 23.5295 13.0466 23.2277L23.2277 13.0466C23.5295 12.7447 23.5295 12.2553 23.2277 11.9534L13.0466 1.77232Z"
  }))), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: `tool-icon ${selectedTool === "chalk" ? "selected" : ""}`,
    id: "chalk",
    onClick: updateTool
  }, /* @__PURE__ */ import_react2.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("g", {
    clipPath: "url(#clip0_1287_3498)"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    fill: "currentcolor",
    d: "M18.9788 0.228823C19.2839 -0.0762743 19.7786 -0.0762743 20.0837 0.228823L24.7712 4.91632C25.0763 5.22142 25.0763 5.71608 24.7712 6.02118L9.1462 21.6462C9.07139 21.721 8.98216 21.7798 8.88392 21.8191L1.07142 24.9441C0.781252 25.0602 0.449832 24.9922 0.228846 24.7712C0.0078592 24.5502 -0.0601674 24.2188 0.0559004 23.9286L3.1809 16.1161C3.22019 16.0179 3.27903 15.9286 3.35385 15.8538L18.9788 0.228823ZM17.5111 3.90625L21.0938 7.4889L23.1139 5.46875L19.5313 1.8861L17.5111 3.90625ZM19.9889 8.59375L16.4063 5.0111L6.25002 15.1674V15.625H7.03127C7.46275 15.625 7.81252 15.9748 7.81252 16.4062V17.1875H8.59377C9.02525 17.1875 9.37502 17.5373 9.37502 17.9688V18.75H9.83267L19.9889 8.59375ZM4.73698 16.6804L4.57209 16.8453L2.18366 22.8164L8.15473 20.4279L8.31962 20.263C8.02338 20.152 7.81252 19.8663 7.81252 19.5312V18.75H7.03127C6.5998 18.75 6.25002 18.4002 6.25002 17.9688V17.1875H5.46877C5.13377 17.1875 4.84801 16.9766 4.73698 16.6804Z"
  })), /* @__PURE__ */ import_react2.default.createElement("defs", null, /* @__PURE__ */ import_react2.default.createElement("clipPath", {
    id: "clip0_1287_3498"
  }, /* @__PURE__ */ import_react2.default.createElement("rect", {
    width: "25",
    height: "25",
    fill: "white"
  }))))));
}
var SelectTool_default = SelectTool;

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
var import_react3 = __toESM(require("react"));
function TextTool() {
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    style: { color: "black" },
    className: "textTool",
    id: "textBoxContainerId"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "textarea",
    id: "textAreaId",
    role: "textbox",
    contentEditable: true
  }));
}
var TextTool_default = TextTool;

// app/components/ZoomContainer/ZoomContainer.js
init_react();
var import_react4 = __toESM(require("react"));
function ZoomContainer({ zoomRange, zoomIn, zoomOut }) {
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "zoomContainer"
  }, /* @__PURE__ */ import_react4.default.createElement("span", {
    id: "minus",
    className: "zoom-sign",
    onClick: zoomIn
  }, /* @__PURE__ */ import_react4.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react4.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.125 12.5C3.125 12.0685 3.47478 11.7188 3.90625 11.7188H21.0938C21.5252 11.7188 21.875 12.0685 21.875 12.5C21.875 12.9315 21.5252 13.2812 21.0938 13.2812H3.90625C3.47478 13.2812 3.125 12.9315 3.125 12.5Z",
    fill: "currentcolor"
  }))), /* @__PURE__ */ import_react4.default.createElement("span", {
    id: "zoomRange",
    className: "zoom-range"
  }, Math.floor(zoomRange * 100)), /* @__PURE__ */ import_react4.default.createElement("span", {
    id: "plus",
    className: "zoom-sign",
    onClick: zoomOut
  }, /* @__PURE__ */ import_react4.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react4.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5 3.125C12.9315 3.125 13.2812 3.47478 13.2812 3.90625V11.7188H21.0938C21.5252 11.7188 21.875 12.0685 21.875 12.5C21.875 12.9315 21.5252 13.2812 21.0938 13.2812H13.2812V21.0938C13.2812 21.5252 12.9315 21.875 12.5 21.875C12.0685 21.875 11.7187 21.5252 11.7187 21.0938V13.2812H3.90625C3.47478 13.2812 3.125 12.9315 3.125 12.5C3.125 12.0685 3.47478 11.7188 3.90625 11.7188H11.7188V3.90625C11.7188 3.47478 12.0685 3.125 12.5 3.125Z",
    fill: "currentcolor"
  }))));
}
var ZoomContainer_default = ZoomContainer;

// app/components/main.js
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
var MainComponent = class extends import_react5.default.Component {
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
    this.mainCanvas = import_react5.default.createRef();
    this.tempCanvas = import_react5.default.createRef();
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
    return /* @__PURE__ */ import_react5.default.createElement("div", {
      style: { "--font-size": `${this.state.baseFontSize}px`, "--line-height": `${this.state.baseLineHeight}px` },
      className: `${this.state.selectedTheme === "dark" ? "dark-mode" : "light-mode"}`
    }, /* @__PURE__ */ import_react5.default.createElement("div", {
      id: "wrapper"
    }, /* @__PURE__ */ import_react5.default.createElement("div", {
      id: "blackboardPlaceholder"
    }, /* @__PURE__ */ import_react5.default.createElement("canvas", {
      id: "drawingCanvas",
      ref: this.mainCanvas,
      width: this.state.canvasWidth,
      height: this.state.canvasHeight
    }, /* @__PURE__ */ import_react5.default.createElement("p", {
      className: "noscript"
    }, "We're sorry, this web application is currently not supported with your browser. Please use an alternate browser or download a supported ", /* @__PURE__ */ import_react5.default.createElement("br", null), "browser.Supported browsers: ", /* @__PURE__ */ import_react5.default.createElement("a", {
      href: "http://www.google.com/chrome"
    }, "Google Chrome"), ", ", /* @__PURE__ */ import_react5.default.createElement("a", {
      href: "http://www.opera.com"
    }, "Opera"), ", ", /* @__PURE__ */ import_react5.default.createElement("a", {
      href: "http://www.mozilla.com"
    }, "Firefox"), ", ", /* @__PURE__ */ import_react5.default.createElement("a", {
      href: "http://www.apple.com/safari"
    }, "Safari"), ", ", /* @__PURE__ */ import_react5.default.createElement("br", null), "and ", /* @__PURE__ */ import_react5.default.createElement("a", {
      href: "http://www.konqueror.org"
    }, "Konqueror"), ". Also make sure your JavaScript is enabled.")), /* @__PURE__ */ import_react5.default.createElement("canvas", {
      id: "tempCanvas",
      ref: this.tempCanvas,
      width: this.state.canvasWidth,
      height: this.state.canvasHeight
    }))), /* @__PURE__ */ import_react5.default.createElement(SelectTool_default, {
      selectedTool: this.state.selectedTool,
      updateTool: this.onClickTool
    }), /* @__PURE__ */ import_react5.default.createElement(ConfigTool_default, {
      toggleTheme: this.updateTheme
    }), /* @__PURE__ */ import_react5.default.createElement(TextTool_default, null), /* @__PURE__ */ import_react5.default.createElement(ZoomContainer_default, {
      zoomRange: this.state.scalingFactor,
      zoomOut: this.zoomOut,
      zoomIn: this.zoomIn
    }));
  }
};
var main_default = MainComponent;

// app/styles/styles.css
var styles_default = "/build/_assets/styles-5IETSC4X.css";

// route:/Users/indragith/Practice/remix-learn/my-remix-app/app/routes/index.jsx
var links = () => [
  { rel: "stylesheet", href: styles_default }
];
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(main_default, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "e4a693a6", "entry": { "module": "/build/entry.client-2IF6PF7O.js", "imports": ["/build/_shared/chunk-ESAUA27I.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-24A2SAGR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-ZQGDPFUW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E4A693A6.js" };

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

// server.js
var app = (0, import_express.default)();
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
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGU6L1VzZXJzL2luZHJhZ2l0aC9QcmFjdGljZS9yZW1peC1sZWFybi9teS1yZW1peC1hcHAvYXBwL3Jvb3QuanN4IiwgInJvdXRlOi9Vc2Vycy9pbmRyYWdpdGgvUHJhY3RpY2UvcmVtaXgtbGVhcm4vbXktcmVtaXgtYXBwL2FwcC9yb3V0ZXMvaW5kZXguanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL21haW4uanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvQ29uZmlnVG9vbC9Db25maWdUb29sLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NlbGVjdFRvb2wvU2VsZWN0VG9vbC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvQXJyb3cuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2hhcGVzL0NoYWxrLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9DaXJjbGUuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvdXRpbHMvZ2V0RWxlbWVudHNBdFBvc2l0aW9uLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9EaWFtb25kLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3V0aWxzL2RyYXdTaGFwZXMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2hhcGVzL0RyYXdUZXh0LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9MaW5lLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9Nb3ZlVG9vbC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvUmVjdGFuZ2xlLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1RleHRUb29sL1RleHRUb29sLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1pvb21Db250YWluZXIvWm9vbUNvbnRhaW5lci5qcyIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcblxuaW1wb3J0ICogYXMgc2VydmVyQnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICBcIi9idWlsZFwiLFxuICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiBcIjF5XCIgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XG5cbmFwcC51c2UobW9yZ2FuKFwidGlueVwiKSk7XG5cbmFwcC5hbGwoXG4gIFwiKlwiLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvaW5kcmFnaXRoL1ByYWN0aWNlL3JlbWl4LWxlYXJuL215LXJlbWl4LWFwcC9hcHAvZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvaW5kcmFnaXRoL1ByYWN0aWNlL3JlbWl4LWxlYXJuL215LXJlbWl4LWFwcC9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2luZHJhZ2l0aC9QcmFjdGljZS9yZW1peC1sZWFybi9teS1yZW1peC1hcHAvYXBwL3JvdXRlcy9pbmRleC5qc3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgTWFpbkNvbXBvbmVudCBmcm9tIFwifi9jb21wb25lbnRzL21haW5cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IFtcbiAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XG4gICAgICA8TWFpbkNvbXBvbmVudCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uZmlnVG9vbCBmcm9tICcuL0NvbmZpZ1Rvb2wvQ29uZmlnVG9vbCc7XG5pbXBvcnQgU2VsZWN0VG9vbCBmcm9tICcuL1NlbGVjdFRvb2wvU2VsZWN0VG9vbCc7XG5pbXBvcnQgQXJyb3cgZnJvbSAnLi9TaGFwZXMvQXJyb3cnO1xuaW1wb3J0IENoYWxrIGZyb20gJy4vU2hhcGVzL0NoYWxrJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9TaGFwZXMvQ2lyY2xlJztcbmltcG9ydCBEaWFtb25kIGZyb20gJy4vU2hhcGVzL0RpYW1vbmQnO1xuaW1wb3J0IERyYXdUZXh0IGZyb20gJy4vU2hhcGVzL0RyYXdUZXh0JztcbmltcG9ydCBMaW5lIGZyb20gJy4vU2hhcGVzL0xpbmUnO1xuaW1wb3J0IE1vdmVUb29sIGZyb20gJy4vU2hhcGVzL01vdmVUb29sJztcbmltcG9ydCBSZWN0IGZyb20gJy4vU2hhcGVzL1JlY3RhbmdsZSc7XG5pbXBvcnQgVGV4dFRvb2wgZnJvbSAnLi9UZXh0VG9vbC9UZXh0VG9vbCc7XG5pbXBvcnQgeyBkcmF3RGlhbW9uZCwgZHJhd1RleHQgfSBmcm9tICcuL3V0aWxzL2RyYXdTaGFwZXMnO1xuaW1wb3J0IHsgZ2V0RWxlbWVudHNBdFBvc2l0aW9uIH0gZnJvbSAnLi91dGlscy9nZXRFbGVtZW50c0F0UG9zaXRpb24nO1xuaW1wb3J0IFpvb21Db250YWluZXIgZnJvbSAnLi9ab29tQ29udGFpbmVyL1pvb21Db250YWluZXInO1xuXG5cbmxldCB0b29scyA9IHtcbiAgbW92ZTogJycsXG4gIGNoYWxrOiBDaGFsayxcbiAgbGluZTogTGluZSxcbiAgcmVjdDogUmVjdCxcbiAgYXJyb3c6IEFycm93LFxuICB0ZXh0OiBEcmF3VGV4dCxcbiAgY2lyY2xlOiBDaXJjbGUsXG4gIGRpYW1vbmQ6IERpYW1vbmQsXG4gIHNlbGVjdDogJ3NlbGVjdCdcbn07XG5cbmxldCBiYXNlQ29uZmlnID0ge1xuICBzY2FsaW5nRmFjdG9yOiAxLFxuICBiYXNlRm9udFNpemU6IDI0LFxuICBiYXNlTGluZUhlaWdodDogKDE1MCAqIDI0KSAvIDEwMFxufVxuXG5jbGFzcyBNYWluQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNhbnZhc1dpZHRoOiAwLFxuICAgICAgY2FudmFzSGVpZ2h0OiAwLFxuICAgICAgc2VsZWN0ZWRUaGVtZTogJ2xpZ2h0JyxcbiAgICAgIHNlbGVjdGVkVG9vbDogJ2NoYWxrJyxcbiAgICAgIHNoYXBlczogW10sXG4gICAgICAuLi5iYXNlQ29uZmlnXG4gICAgfTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzID0gdGhpcy5hZGRFdmVudExpc3RlbmVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVG9vbCA9IHRoaXMudXBkYXRlVG9vbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1Rvb2wgPSB0aGlzLm9uQ2xpY2tUb29sLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkV2ZW50ID0gdGhpcy5vbkV2ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IgPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VUb1RleHRUb29sID0gdGhpcy5jaGFuZ2VUb1RleHRUb29sLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2N1bWVudENsaWNrID0gdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMgPSB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uV2hlZWxNb3ZlID0gdGhpcy5vbldoZWVsTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW1nVXBkYXRlID0gdGhpcy5pbWdVcGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdJbWFnZSA9IHRoaXMuZHJhd0ltYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVUaGVtZSA9IHRoaXMudXBkYXRlVGhlbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuem9vbUluID0gdGhpcy56b29tSW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnpvb21PdXQgPSB0aGlzLnpvb21PdXQuYmluZCh0aGlzKTtcblxuXG4gICAgdGhpcy5tYWluQ2FudmFzID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG5cbiAgICAvLyBzZXF1ZXVuY2UgaWQgXG4gICAgdGhpcy5pZCA9IDA7XG5cbiAgICAvLyBUbyBjaGVjayB3aGV0aGVyIHRoZSB1c2VyIGlzIGRyYWdnaW5nLlxuICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMuaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnaW5nRWxlbWVudCA9IG51bGw7XG5cblxuXG4gICAgLy8gVG8gZW11bGF0ZSBzY3JvbGwgYmVoYXZpb3VyXG4gICAgdGhpcy5zY3JvbGxYID0gMDtcbiAgICB0aGlzLnNjcm9sbFkgPSAwO1xuXG4gICAgLy8gc2NhbGluZyBmYWN0b3JcblxuICAgIC8vdGhpcy51cGRhdGVGb250UHJvcGVydGllcygpO1xuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2FudmFzV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBjYW52YXNIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9KVxuICAgIHRoaXMubWFpbkNvbnRleHQgPSB0aGlzLm1haW5DYW52YXMuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnOy8vIERlZmF1bHQgbGluZSBjb2xvci4gXG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lV2lkdGggPSAxLjA7Ly8gRGVmYXVsdCBzdHJva2Ugd2VpZ2h0LiBcblxuICAgIC8vIEZpbGwgdHJhbnNwYXJlbnQgY2FudmFzIHdpdGggZGFyayBncmV5IChTbyB3ZSBjYW4gdXNlIHRoZSBjb2xvciB0byBlcmFzZSkuIFxuICAgIHRoaXMudGVtcENvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiM0MjQyNDJcIiA6ICcjRkZGRkZGJztcbiAgICB0aGlzLnRlbXBDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpOy8vVG9wLCBMZWZ0LCBXaWR0aCwgSGVpZ2h0IG9mIGNhbnZhc1xuXG4gICAgdGhpcy50b29scyA9IHRvb2xzO1xuXG4gICAgbGV0IHNlbGVjdGVkT25lID0gdGhpcy50b29sc1t0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbF07XG5cbiAgICB0aGlzLnRvb2wgPSBuZXcgc2VsZWN0ZWRPbmUodGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuaW1nVXBkYXRlLCB0aGlzLmlkKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCB0aGlzLmNoYW5nZVRvVGV4dFRvb2wsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWxNb3ZlLCBmYWxzZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSk7XG5cbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGx1cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy56b29tT3V0LCBmYWxzZSk7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbnVzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnpvb21JbiwgZmFsc2UpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbkV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25FdmVudCwgZmFsc2UpO1xuICAgIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcy5jaGFuZ2VUb1RleHRUb29sLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljaywgZmFsc2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbldoZWVsTW92ZSwgZmFsc2UpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKTtcbiAgfVxuXG5cbiAgem9vbUluKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3IgPD0gMC4xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZzdGF0ZSkgPT4ge1xuICAgICAgbGV0IGJhc2VGb250U2l6ZSA9IHByZXZzdGF0ZS5iYXNlRm9udFNpemUgLSAzO1xuICAgICAgbGV0IGJhc2VMaW5lSGVpZ2h0ID0gKDE1MCAqIGJhc2VGb250U2l6ZSkgLyAxMDBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZzdGF0ZSxcbiAgICAgICAgc2NhbGluZ0ZhY3RvcjogcHJldnN0YXRlLnNjYWxpbmdGYWN0b3IgLSAwLjEsXG4gICAgICAgIGJhc2VGb250U2l6ZSxcbiAgICAgICAgYmFzZUxpbmVIZWlnaHRcbiAgICAgIH1cbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH0pO1xuICB9XG5cbiAgem9vbU91dChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yID49IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldnN0YXRlKSA9PiB7XG4gICAgICBsZXQgYmFzZUZvbnRTaXplID0gcHJldnN0YXRlLmJhc2VGb250U2l6ZSArIDM7XG4gICAgICBsZXQgYmFzZUxpbmVIZWlnaHQgPSAoMTUwICogYmFzZUZvbnRTaXplKSAvIDEwMFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldnN0YXRlLFxuICAgICAgICBzY2FsaW5nRmFjdG9yOiBwcmV2c3RhdGUuc2NhbGluZ0ZhY3RvciArIDAuMSxcbiAgICAgICAgYmFzZUZvbnRTaXplLFxuICAgICAgICBiYXNlTGluZUhlaWdodFxuICAgICAgfVxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIHVwZGF0ZVRvb2wodmFsdWUsIGlkID0gbnVsbCkge1xuICAgIGlmICh0aGlzLnRvb2xzW3ZhbHVlXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVG9vbDogdmFsdWUgfSwgKCkgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0ZWRPbmUgPSB0aGlzLnRvb2xzW3RoaXMuc3RhdGUuc2VsZWN0ZWRUb29sXTtcbiAgICAgICAgaWYgKCFzZWxlY3RlZE9uZSB8fCBzZWxlY3RlZE9uZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIHN0b3JpbmcgdGhlIHNoYXBlcy4gd2UgYXJlIGdlbmVyYXRpbmcgaWRzLlxuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgKyAxO1xuICAgICAgICAgIHRoaXMudG9vbCA9IG5ldyBzZWxlY3RlZE9uZSh0aGlzLnRlbXBDYW52YXMuY3VycmVudCwgdGhpcy50ZW1wQ29udGV4dCwgdGhpcy5pbWdVcGRhdGUsIHRoaXMuaWQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b29sID0gbmV3IHNlbGVjdGVkT25lKHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCB0aGlzLnRlbXBDb250ZXh0LCB0aGlzLmltZ1VwZGF0ZSwgaWQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjYW52YXNXaWR0aDogd2luZG93LmlubmVyV2lkdGgsIGNhbnZhc0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH0sICgpID0+IHtcbiAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfSlcbiAgfVxuXG4gIG9uRXZlbnQoZXYpIHtcbiAgICBldi5feCA9IGV2Lng7XG4gICAgZXYuX3kgPSBldi55O1xuXG4gICAgLy8gbGV0IGlzVXNlckRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wgPT09ICdzZWxlY3QnKSB7XG4gICAgICBpZiAoZXYudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgdGhpcy5tb3VzZVhQb3NpdGlvbiA9IGV2Ll94O1xuICAgICAgICB0aGlzLm1vdXNlWVBvc2l0aW9uID0gZXYuX3k7XG4gICAgICB9IGVsc2UgaWYgKGV2LnR5cGUgPT09ICdtb3VzZW1vdmUnKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdXNlWVBvc2l0aW9uICYmIHRoaXMubW91c2VYUG9zaXRpb24pIHtcbiAgICAgICAgICBsZXQgZGlmZlggPSBNYXRoLmFicyh0aGlzLm1vdXNlWFBvc2l0aW9uIC0gZXYuX3gpO1xuICAgICAgICAgIGxldCBkaWZmWSA9IE1hdGguYWJzKHRoaXMubW91c2VZUG9zaXRpb24gLSBldi5feSk7XG4gICAgICAgICAgaWYgKGRpZmZYID4gMjAgfHwgZGlmZlkgPiAyMCkge1xuICAgICAgICAgICAgdGhpcy5pc1VzZXJEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzVXNlckRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm1vdXNlWVBvc2l0aW9uID0gbnVsbDtcbiAgICAgIH1cblxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgICAgdGhpcy5tb3VzZVlQb3NpdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIC8vIEdldCB0aGUgdG9vbCdzIGV2ZW50IGhhbmRsZXIuIFxuXG4gICAgaWYgKHRoaXMuaXNVc2VyRHJhZ2dpbmcpIHtcbiAgICAgIC8vIEhhbmRsaW5uZyB0aGUgY2FzZSBmb3IgbW92ZVxuICAgICAgLy90aGlzLnNlbGVjdGVkVG9vbCA9ICdtb3ZlJztcbiAgICAgIC8vIHNpbmNlIHdlIGFyZSBtb3ZpbmcgYWNyb3NzIHRoZSBjYW52YXMuIHdlIG5lZWQgdG8gdGFrZSBpbnRvIHRoZSBhY2NvdW50IG9mIHNjcm9sbHggYW5kIHNjcm9sbHkgdmFsdWVzXG5cbiAgICAgIC8vL0NIQU5HRSA/Pz9cbiAgICAgIC8vIGV2Ll94ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueCAtIHRoaXMuc2Nyb2xsWCk7XG4gICAgICAvLyBldi5feSA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnkgLSB0aGlzLnNjcm9sbFkpO1xuICAgICAgLy8vQ0hBTkdFID8/PyBNb3ZlZCBpbnNpZGUgY29uZGl0aW9uXG4gICAgICBpZiAoIXRoaXMuZHJhZ2dpbmdFbGVtZW50KSB7XG4gICAgICAgIGV2Ll94ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueCAtIHRoaXMuc2Nyb2xsWCk7XG4gICAgICAgIGV2Ll95ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueSAtIHRoaXMuc2Nyb2xsWSk7XG4gICAgICAgIC8vIEZpcnN0IGNhc2Ugb2YgbW92ZSB0b29sIC0+IFVzZXIganVzdCBzZWxlY3RlZCB0aGUgZWxlbWVudC5ldmVudHMgc2hvdWxkIGJlIG1vdXNlZG93blxuICAgICAgICBsZXQgZWxlbWVudFNlbGVjdGVkID0gZ2V0RWxlbWVudHNBdFBvc2l0aW9uKHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKHRoaXMubW91c2VYUG9zaXRpb24gLSB0aGlzLnNjcm9sbFgpLCB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcih0aGlzLm1vdXNlWVBvc2l0aW9uIC0gdGhpcy5zY3JvbGxZKSwgdGhpcy5zdGF0ZS5zaGFwZXMpO1xuICAgICAgICBpZiAoZWxlbWVudFNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSBlbGVtZW50U2VsZWN0ZWQ7XG4gICAgICAgICAgbGV0IHNoYXBlcyA9IHRoaXMuc3RhdGUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiBzaGFwZS5pZCAhPT0gZWxlbWVudFNlbGVjdGVkLmlkKTtcbiAgICAgICAgICAvL3JlZHJhd2lnIHdpdGhvdXQgZWxlbWVudCBzZWxlY3RlZFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFwZXM6IHNoYXBlcywgc2VsZWN0ZWRUb29sOiAnbW92ZScgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdFbGVtZW50ID0gZWxlbWVudFNlbGVjdGVkO1xuICAgICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQud2lkdGgsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LmhlaWdodCk7XG4gICAgICAgICAgICAvL21vZGlmeWlnIHRoZSBzZWxlY3RlZEVsZW1lbnRcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSB7XG4gICAgICAgICAgICAgIC4uLnRoaXMuc2VsZWN0ZWRFbGVtZW50LFxuICAgICAgICAgICAgICB4OiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LngpLFxuICAgICAgICAgICAgICB5OiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnkpLFxuICAgICAgICAgICAgICBlbmRYOiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmVuZFgpLFxuICAgICAgICAgICAgICBlbmRZOiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmVuZFkpLFxuICAgICAgICAgICAgICBzdGFydFg6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRYKSxcbiAgICAgICAgICAgICAgc3RhcnRZOiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnN0YXJ0WSksXG4gICAgICAgICAgICAgIHJhZGl1czogdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5yYWRpdXMpLFxuICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGggPyB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LndpZHRoKSA6IG51bGwsXG4gICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zZWxlY3RlZEVsZW1lbnQuaGVpZ2h0ID8gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5oZWlnaHQpIDogbnVsbCxcbiAgICAgICAgICAgICAgc2NhbGluZ0ZhY3RvcjogdGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvb2wgPSBuZXcgTW92ZVRvb2wodGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuaW1nVXBkYXRlLCBzZWxlY3RlZEVsZW1lbnQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSk7XG4gICAgICAgICAgICAvLyBlbGVtZW50IGlzIHByZXNlbnQuIHdlIG5lZWQgdG8gY2FsbCBtb3ZldG9vbFxuICAgICAgICAgICAgdGhpcy50b29sWydtb3VzZWRvd24nXShldik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vID8/IFxuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdXNlWFBvc2l0aW9uICE9PSBudWxsICYmIHRoaXMubW91c2VZUG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgLy8gZXZlbnRzIGFyZSBtb3VzZW1vdmUgb3IgbW91c2V1cC4gTmVlZCB0byBjaGVjayB3aGV0aGVyIHRoaXMgY29uZGl0aW9uIGlzIHJlcXVpcmVkXG4gICAgICAgIGlmIChldi50eXBlID09PSAnbW91c2Vtb3ZlJyB8fCBldi50eXBlID09PSAnbW91c2V1cCcpIHtcbiAgICAgICAgICAvLyBtb3ZldG9vbCBpbnN0YWNlIHNob3VsZCBhbHJlYWR5IGJ5IHByZXNlbnRcbiAgICAgICAgICBpZiAodGhpcy50b29sKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2xbZXYudHlwZV0oZXYpO1xuICAgICAgICAgICAgaWYgKGV2LnR5cGUgPT09ICdtb3VzZXVwJykge1xuICAgICAgICAgICAgICB0aGlzLmlzVXNlckRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICB0aGlzLm1vdXNlWVBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50b29sKSB7XG4gICAgICBsZXQgZnVuYyA9IHRoaXMudG9vbFtldi50eXBlXTtcbiAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgIGZ1bmMoZXYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tUb29sKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgIHRoaXMudXBkYXRlVG9vbChlLmN1cnJlbnRUYXJnZXQuaWQpO1xuICB9XG5cbiAgY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGNvb3Jkcykge1xuICAgIHJldHVybiBjb29yZHMgLyB0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3I7XG4gIH1cblxuICBjaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcihjb29yZHMpIHtcbiAgICByZXR1cm4gY29vcmRzICogdGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yO1xuICB9XG5cblxuICBkcmF3SW1hZ2UoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zaGFwZXMsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sKTtcbiAgICB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMoKTtcblxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcblxuICAgICAgLy8gaWYgdGhlIGFjdGlvbiBpcyBkZWxldGUgb3IgbW92ZS4gd2VlIG5uZWVkIHRvIGNhbGwgcmVzZXREcmFnZ2luZ1ZhbHVlc1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wgPT09ICdtb3ZlJyB8fCB0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFRvb2w6ICdzZWxlY3QnIH0pO1xuICAgICAgICB0aGlzLnRvb2wgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYWluQ29udGV4dC5kcmF3SW1hZ2UodGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQsIDAsIDApO1xuICAgICAgICAvLy90aGlzLnRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQud2lkdGgsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LmhlaWdodCk7XG4gICAgICAgIC8vdGhpcy5yZW5kZXJQYXJ0aWN1bGFyU2hhcGUobW9kaWZpZWRJbWFnZSk7XG5cbiAgICAgICAgLy8gQ2hhbmdpbmcgdG8gc2VsZWN0IHRvb2wgb25jZSB3ZSBoYXZlIGRyYXduIGEgc2hhcGUgZXhjZXB0IHRvIHR5cGluZyB0ZXh0XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCAhPT0gJ3RleHQnKSB7XG5cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRUb29sOiAnc2VsZWN0JyB9KTtcbiAgICAgICAgICB0aGlzLnRvb2wgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0aGlzLnJlZHJhdygpO1xuXG4gICAgfSlcbiAgfVxuXG5cbiAgaW1nVXBkYXRlKGRyYXdlbkltYWdlKSB7XG4gICAgaWYgKGRyYXdlbkltYWdlICYmIGRyYXdlbkltYWdlLnR5cGUpIHtcbiAgICAgIC8qKiBUT0RPOiBDaGFuZ2UgdGhpcyBsb2dpYyB0byBvYmplY3Qga2V5IHZhbHVlIHN0cnVjdHVyZSAqL1xuXG4gICAgICBsZXQgbW9kaWZpZWRJbWFnZSA9IHtcbiAgICAgICAgLi4uZHJhd2VuSW1hZ2UsXG4gICAgICAgIHg6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLnggLSB0aGlzLnNjcm9sbFgpLFxuICAgICAgICB5OiB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS55IC0gdGhpcy5zY3JvbGxZKSxcbiAgICAgICAgZW5kWDogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2UuZW5kWCAtIHRoaXMuc2Nyb2xsWCksXG4gICAgICAgIGVuZFk6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLmVuZFkgLSB0aGlzLnNjcm9sbFkpLFxuICAgICAgICBzdGFydFg6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLnN0YXJ0WCAtIHRoaXMuc2Nyb2xsWCksXG4gICAgICAgIHN0YXJ0WTogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2Uuc3RhcnRZIC0gdGhpcy5zY3JvbGxZKSxcbiAgICAgICAgcmFkaXVzOiB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS5yYWRpdXMpLFxuICAgICAgICB3aWR0aDogZHJhd2VuSW1hZ2Uud2lkdGggPyB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS53aWR0aCkgOiBudWxsLFxuICAgICAgICBoZWlnaHQ6IGRyYXdlbkltYWdlLmhlaWdodCA/IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLmhlaWdodCkgOiBudWxsLFxuICAgICAgICBzY2FsaW5nRmFjdG9yOiB0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3JcbiAgICAgIH1cbiAgICAgIGxldCBmaWx0ZXJlZFNoYXBlcyA9IHRoaXMuc3RhdGUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiBzaGFwZS5pZCAhPT0gZHJhd2VuSW1hZ2UuaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlczogWy4uLmZpbHRlcmVkU2hhcGVzLCBtb2RpZmllZEltYWdlXSB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd0ltYWdlKCk7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdJbWFnZSgpO1xuICAgIH1cblxuXG4gIH1cblxuICByZWRyYXcoKSB7XG4gICAgY29uc29sZS5sb2coJ3JlZHJhdycpXG4gICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQud2lkdGgsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LmhlaWdodCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbXSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjRkZGRkZGXCIgOiAnIzAwMDAwMCc7O1xuICAgIHRoaXMudGVtcENvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiM0MjQyNDJcIiA6ICcjMDAwMDAwJzs7XG5cbiAgICB0aGlzLnN0YXRlLnNoYXBlcy5mb3JFYWNoKHNoYXBlID0+IHtcbiAgICAgIGlmIChzaGFwZS50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QodGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS54KSArIHRoaXMuc2Nyb2xsWCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS53aWR0aCksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUuaGVpZ2h0KSk7XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdhcnJvdycpIHtcbiAgICAgICAgbGV0IGhlYWRsZW4gPSAxMDtcbiAgICAgICAgbGV0IHggPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLngpICsgdGhpcy5zY3JvbGxYO1xuICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgIGxldCBlbmRYID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS5lbmRYKSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgbGV0IGVuZFkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLmVuZFkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICBsZXQgZHggPSBlbmRYIC0geDtcbiAgICAgICAgbGV0IGR5ID0gZW5kWSAtIHk7XG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oeCwgeSlcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZW5kWCwgZW5kWSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gNiksIGVuZFkgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gNikpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyhlbmRYLCBlbmRZKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZW5kWCAtIGhlYWRsZW4gKiBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkgLyA2KSwgZW5kWSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkgLyA2KSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdsaW5lJykge1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyh0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLngpICsgdGhpcy5zY3JvbGxYLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnkpICsgdGhpcy5zY3JvbGxZKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8odGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS5lbmRYKSArIHRoaXMuc2Nyb2xsWCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS5lbmRZKSArIHRoaXMuc2Nyb2xsWSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnO1xuICAgICAgICBkcmF3VGV4dChzaGFwZS50ZXh0Q29udGVudCwgdGhpcy50ZW1wQ29udGV4dCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS54KSArIHRoaXMuc2Nyb2xsWCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS53aWR0aCksIHRoaXMuc3RhdGUuYmFzZUxpbmVIZWlnaHQsIGNvbG9yLCB0aGlzLnN0YXRlLmJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmFyYyh4LCB5LCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnJhZGl1cyksIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICAgIGxldCB4Q2VudGVyID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgbGV0IHlDZW50ZXIgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCAtIHNoYXBlLmVuZFgpO1xuICAgICAgICBkcmF3RGlhbW9uZCh4Q2VudGVyLCB5Q2VudGVyLCBzaXplLCB0aGlzLnRlbXBDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgLy8gY2xlYXIgdGhlIHByZXNlbnQgY2FudmFzXG4gICAgdGhpcy5tYWluQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5tYWluQ2FudmFzLmN1cnJlbnQud2lkdGgsIHRoaXMubWFpbkNhbnZhcy5jdXJyZW50LmhlaWdodCk7XG4gICAgdGhpcy5tYWluQ29udGV4dC5kcmF3SW1hZ2UodGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQsIDAsIDApO1xuICAgIHRoaXMudGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpO1xuICB9XG5cbiAgY2hhbmdlVG9UZXh0VG9vbChldikge1xuICAgIGV2Ll94ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueCAtIHRoaXMuc2Nyb2xsWCk7XG4gICAgZXYuX3kgPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi55IC0gdGhpcy5zY3JvbGxZKTtcblxuICAgIGxldCBlbmNsb3NlZEVsZW1lbnQgPSBnZXRFbGVtZW50c0F0UG9zaXRpb24oZXYuX3gsIGV2Ll95LCB0aGlzLnN0YXRlLnNoYXBlcyk7XG5cbiAgICAvLyBUZW1wb3JhcmlseSB1cGRhdGluZyB0b29sIG1hbnVhbGx5XG4gICAgLy90aGlzLnVwZGF0ZVRvb2woJ3RleHQnLCBlbmNsb3NlZEVsZW1lbnQgJiYgZW5jbG9zZWRFbGVtZW50LnR5cGUgPT09ICd0ZXh0JyA/IGVuY2xvc2VkRWxlbWVudC5pZCA6IG51bGwpO1xuICAgIHRoaXMucmVzZXREcmFnZ2luZ1ZhbHVlcygpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVG9vbDogJ3RleHQnIH0sICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXREcmFnZ2luZ1ZhbHVlcygpO1xuXG4gICAgICBsZXQgdGV4dElkID0gbnVsbDtcbiAgICAgIGlmIChlbmNsb3NlZEVsZW1lbnQgJiYgZW5jbG9zZWRFbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0ZXh0SWQgPSBlbmNsb3NlZEVsZW1lbnQuaWQ7XG4gICAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gc2hhcGUuaWQgIT09IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmlkKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlcyB9LCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5pZCArIDE7XG4gICAgICAgIHRleHRJZCA9IHRoaXMuaWQ7XG4gICAgICB9XG4gICAgICB0aGlzLnRvb2wgPSBuZXcgRHJhd1RleHQodGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuaW1nVXBkYXRlLCB0ZXh0SWQsIHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSk7XG4gICAgICAvLyBpZiAoZW5jbG9zZWRFbGVtZW50ICYmIGVuY2xvc2VkRWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIC8vICAgbGV0IHNoYXBlcyA9IHRoaXMuc3RhdGUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiBzaGFwZS5pZCAhPT0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuaWQpO1xuICAgICAgLy8gICB0aGlzLnNldFN0YXRlKHsgc2hhcGVzIH0sICgpID0+IHtcbiAgICAgIC8vICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH1cblxuICAgICAgbGV0IGZ1bmMgPSB0aGlzLnRvb2xbZXYudHlwZV07XG4gICAgICBpZiAoZnVuYykge1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgICAvLyBmdW5jIHdpbGwgYmUgZGJjbGljayBpbiBkcmF3dGV4dFxuICAgICAgICBmdW5jKGV2LCBlbmNsb3NlZEVsZW1lbnQsIHsgc2Nyb2xsWDogdGhpcy5zY3JvbGxYLCBzY3JvbGxZOiB0aGlzLnNjcm9sbFksIHNjYWxpbmdGYWN0b3I6IHRoaXMuc3RhdGUuc2NhbGluZ0ZhY3RvciB9KTtcbiAgICAgIH1cbiAgICB9KVxuXG5cblxuICB9XG5cbiAgb25LZXlEb3duKGV2KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAndGV4dCcpIHtcbiAgICAgIC8vIEVhcmx5IFJldHVybiBhcyB3ZSBkb250IG5lZWQgdG8gbGlzdGVuIHdoaWxlIHRleHRhcmVhIGlzIHNob3duXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgoZXYua2V5Q29kZSA+PSA0OCAmJiBldi5rZXlDb2RlIDw9IDU3KSB8fCAoZXYua2V5Q29kZSA+PSA2NSAmJiBldi5rZXlDb2RlIDw9IDkwKSkge1xuICAgICAgLy8gNDggLSA1NyBudW1iZXIgMCAtIDkgYW5kIDY1IC0gOTAgQWxwaGFiZXR5c1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNwZWNpYWwga2V5cyBcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICAvLyBCYWNrc3BhY2Ugb3IgZGVsZXRlIGtleVxuICAgICAgICBpZiAoZXYud2hpY2ggPT09IDQ2IHx8IGV2LndoaWNoID09PSA4KSB7XG4gICAgICAgICAgbGV0IHNoYXBlcyA9IHRoaXMuc3RhdGUuc2hhcGVzLmZpbHRlcihzaGFwZSA9PiBzaGFwZS5pZCAhPT0gdGhpcy5zZWxlY3RlZEVsZW1lbnQuaWQpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFwZXMgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkRvY3VtZW50Q2xpY2soZXYpIHtcbiAgICBldi5feCA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnggLSB0aGlzLnNjcm9sbFgpO1xuICAgIGV2Ll95ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueSAtIHRoaXMuc2Nyb2xsWSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wgPT09ICd0ZXh0Jykge1xuICAgICAgLy9SZXZlcnR0aW5nIHR5aGl1cyBpcyByZXF1aXJlZC5cblxuXG4gICAgICB0aGlzLnRvb2xbJ29uQmx1ciddKCk7XG4gICAgICAvLyB0aGlzLnNlbGVjdGVkVG9vbCA9ICdzZWxlY3QnO1xuICAgICAgLy8gdGhpcy50b29sID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wgPT09ICdzZWxlY3QnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTtcbiAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBnZXRFbGVtZW50c0F0UG9zaXRpb24oZXYuX3gsIGV2Ll95LCB0aGlzLnN0YXRlLnNoYXBlcyk7XG4gICAgICB0aGlzLnNlbGVjdGVkRWxlbWVudCA9IHNlbGVjdGVkRWxlbWVudDtcbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRWxlbWVudCk7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnR5cGUgPT09ICdyZWN0YW5nbGUnKSB7XG4gICAgICAgICAgbGV0IHggPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LngpICsgdGhpcy5zY3JvbGxYO1xuICAgICAgICAgIGxldCB5ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC55KSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFs2XSk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHggLSA1LCB5IC0gNSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC53aWR0aCkgKyAxMCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5oZWlnaHQpICsgMTApO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnR5cGUgPT09ICdsaW5lJyB8fCB0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICAgICAgbGV0IHggPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnN0YXJ0WCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgICAgbGV0IHkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnN0YXJ0WSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbNl0pO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh4IC0gNSwgeSAtIDUsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGgpICsgMTAsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuaGVpZ2h0KSArIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbNl0pO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5hcmMoeCwgeSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5yYWRpdXMpICsgMTAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5zdGFydFgpICsgdGhpcy5zY3JvbGxYO1xuICAgICAgICAgIGxldCB5ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5zdGFydFkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzZdKTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QoeCAtIDUsIHkgLSA1LCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LndpZHRoKSArIDEwLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmhlaWdodCkgKyAxMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgbGV0IHggPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LngpICsgdGhpcy5zY3JvbGxYO1xuICAgICAgICAgIGxldCB5ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC55KSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFs2XSk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHggLSA1LCB5IC0gNSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC53aWR0aCksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuaGVpZ2h0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbldoZWVsTW92ZShlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAndGV4dCcpIHtcbiAgICAgIC8vIERyYXdpbmcgdGV4dCBvbiBjYW52YXMgYmVmb3JlIHNjcm9sbCBtb3ZlXG4gICAgICB0aGlzLnRvb2xbJ29uQmx1ciddKCk7XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsWCA9IHRoaXMuc2Nyb2xsWCAtIGUuZGVsdGFYO1xuICAgIHRoaXMuc2Nyb2xsWSA9IHRoaXMuc2Nyb2xsWSAtIGUuZGVsdGFZO1xuICAgIHRoaXMucmVkcmF3KCk7XG4gIH1cblxuICByZXNldERyYWdnaW5nVmFsdWVzKCkge1xuICAgIHRoaXMuaXNVc2VyRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnaW5nRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5tb3VzZVhQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5tb3VzZVlQb3NpdGlvbiA9IG51bGw7XG4gIH1cblxuXG4gIHVwZGF0ZVRoZW1lKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAocHJldnN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucHJldnN0YXRlLFxuICAgICAgICAgIHNlbGVjdGVkVGhlbWU6IHByZXZzdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnXG4gICAgICAgIH1cbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjRkZGRkZGXCIgOiAnIzAwMDAwMCc7Ly8gRGVmYXVsdCBsaW5lIGNvbG9yLiBcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lV2lkdGggPSAxLjA7Ly8gRGVmYXVsdCBzdHJva2Ugd2VpZ2h0LiBcblxuICAgICAgICAvLyBGaWxsIHRyYW5zcGFyZW50IGNhbnZhcyB3aXRoIGRhcmsgZ3JleSAoU28gd2UgY2FuIHVzZSB0aGUgY29sb3IgdG8gZXJhc2UpLiBcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5maWxsU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiIzQyNDI0MlwiIDogJyNGRkZGRkYnO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpOy8vVG9wLCBMZWZ0LCBXaWR0aCwgSGVpZ2h0IG9mIGNhbnZhc1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyAnLS1mb250LXNpemUnOiBgJHt0aGlzLnN0YXRlLmJhc2VGb250U2l6ZX1weGAsICctLWxpbmUtaGVpZ2h0JzogYCR7dGhpcy5zdGF0ZS5iYXNlTGluZUhlaWdodH1weGAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/ICdkYXJrLW1vZGUnIDogJ2xpZ2h0LW1vZGUnfWB9PlxuICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiID5cbiAgICAgICAgICA8ZGl2IGlkPVwiYmxhY2tib2FyZFBsYWNlaG9sZGVyXCI+XG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwiZHJhd2luZ0NhbnZhc1wiIHJlZj17dGhpcy5tYWluQ2FudmFzfSB3aWR0aD17dGhpcy5zdGF0ZS5jYW52YXNXaWR0aH0gaGVpZ2h0PXt0aGlzLnN0YXRlLmNhbnZhc0hlaWdodH0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vc2NyaXB0XCI+V2UncmUgc29ycnksIHRoaXMgd2ViIGFwcGxpY2F0aW9uIGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIHdpdGggeW91ciBicm93c2VyLiBQbGVhc2UgdXNlXG4gICAgICAgICAgICAgICAgYW4gYWx0ZXJuYXRlIGJyb3dzZXIgb3IgZG93bmxvYWQgYSBzdXBwb3J0ZWQgPGJyIC8+YnJvd3Nlci5TdXBwb3J0ZWQgYnJvd3NlcnM6IDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5nb29nbGUuY29tL2Nocm9tZVwiPkdvb2dsZSBDaHJvbWU8L2E+LCA8YSBocmVmPVwiaHR0cDovL3d3dy5vcGVyYS5jb21cIj5PcGVyYTwvYT4sIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lm1vemlsbGEuY29tXCI+RmlyZWZveDwvYT4sIDxhIGhyZWY9XCJodHRwOi8vd3d3LmFwcGxlLmNvbS9zYWZhcmlcIj5TYWZhcmk8L2E+LCA8YnIgLz5hbmQgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25xdWVyb3Iub3JnXCI+S29ucXVlcm9yPC9hPi4gQWxzbyBtYWtlIHN1cmUgeW91ciBKYXZhU2NyaXB0IGlzIGVuYWJsZWQuPC9wPlxuICAgICAgICAgICAgPC9jYW52YXM+XG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwidGVtcENhbnZhc1wiIHJlZj17dGhpcy50ZW1wQ2FudmFzfSB3aWR0aD17dGhpcy5zdGF0ZS5jYW52YXNXaWR0aH0gaGVpZ2h0PXt0aGlzLnN0YXRlLmNhbnZhc0hlaWdodH0+PC9jYW52YXM+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZWxlY3RUb29sIHNlbGVjdGVkVG9vbD17dGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2x9IHVwZGF0ZVRvb2w9e3RoaXMub25DbGlja1Rvb2x9IC8+XG4gICAgICAgIDxDb25maWdUb29sIHRvZ2dsZVRoZW1lPXt0aGlzLnVwZGF0ZVRoZW1lfSAvPlxuICAgICAgICA8VGV4dFRvb2wgLz5cbiAgICAgICAgPFpvb21Db250YWluZXIgem9vbVJhbmdlPXt0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3J9IHpvb21PdXQ9e3RoaXMuem9vbU91dH0gem9vbUluPXt0aGlzLnpvb21Jbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29tcG9uZW50OyIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmZ1bmN0aW9uIENvbmZpZ1Rvb2woeyB0b2dnbGVUaGVtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25maWdUb29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbmZpZ0xhYmVsXCI+RGFyayBNb2RlPC9zcGFuPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17dG9nZ2xlVGhlbWV9IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCIgaWQ9XCJ0b2dnbGVEYXJrTW9kZVwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Rvb2w7IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuZnVuY3Rpb24gU2VsZWN0VG9vbCh7IHNlbGVjdGVkVG9vbCwgdXBkYXRlVG9vbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RUb29sXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdzZWxlY3QnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwic2VsZWN0XCIgb25DbGljaz17dXBkYXRlVG9vbH0+XG5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRjb2xvclwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTExLjk0NzYgMC4yMjg4MjNDMTIuMjUyNyAtMC4wNzYyNzQzIDEyLjc0NzMgLTAuMDc2Mjc0MyAxMy4wNTI0IDAuMjI4ODIzTDE2LjE3NzQgMy4zNTM4MkMxNi40ODI1IDMuNjU4OTIgMTYuNDgyNSA0LjE1MzU4IDE2LjE3NzQgNC40NTg2OEMxNS44NzIzIDQuNzYzNzcgMTUuMzc3NyA0Ljc2Mzc3IDE1LjA3MjYgNC40NTg2OEwxMy4yODEyIDIuNjY3MzVWOC41OTM3NUMxMy4yODEyIDkuMDI1MjIgMTIuOTMxNSA5LjM3NSAxMi41IDkuMzc1QzEyLjA2ODUgOS4zNzUgMTEuNzE4OCA5LjAyNTIyIDExLjcxODggOC41OTM3NVYyLjY2NzM1TDkuOTI3NDMgNC40NTg2OEM5LjYyMjMzIDQuNzYzNzcgOS4xMjc2NyA0Ljc2Mzc3IDguODIyNTcgNC40NTg2OEM4LjUxNzQ4IDQuMTUzNTggOC41MTc0OCAzLjY1ODkyIDguODIyNTcgMy4zNTM4MkwxMS45NDc2IDAuMjI4ODIzWk0xMi41IDE1LjYyNUMxMi45MzE1IDE1LjYyNSAxMy4yODEyIDE1Ljk3NDggMTMuMjgxMiAxNi40MDYyVjIyLjMzMjZMMTUuMDcyNiAyMC41NDEzQzE1LjM3NzcgMjAuMjM2MiAxNS44NzIzIDIwLjIzNjIgMTYuMTc3NCAyMC41NDEzQzE2LjQ4MjUgMjAuODQ2NCAxNi40ODI1IDIxLjM0MTEgMTYuMTc3NCAyMS42NDYyTDEzLjA1MjQgMjQuNzcxMkMxMi43NDczIDI1LjA3NjMgMTIuMjUyNyAyNS4wNzYzIDExLjk0NzYgMjQuNzcxMkw4LjgyMjU3IDIxLjY0NjJDOC41MTc0OCAyMS4zNDExIDguNTE3NDggMjAuODQ2NCA4LjgyMjU3IDIwLjU0MTNDOS4xMjc2NyAyMC4yMzYyIDkuNjIyMzMgMjAuMjM2MiA5LjkyNzQzIDIwLjU0MTNMMTEuNzE4NyAyMi4zMzI2VjE2LjQwNjJDMTEuNzE4NyAxNS45NzQ4IDEyLjA2ODUgMTUuNjI1IDEyLjUgMTUuNjI1WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNMC4yMjg4MjMgMTMuMDUyNEMtMC4wNzYyNzQzIDEyLjc0NzMgLTAuMDc2Mjc0MyAxMi4yNTI3IDAuMjI4ODIzIDExLjk0NzZMMy4zNTM4MiA4LjgyMjU3QzMuNjU4OTIgOC41MTc0OCA0LjE1MzU4IDguNTE3NDggNC40NTg2OCA4LjgyMjU3QzQuNzYzNzcgOS4xMjc2NyA0Ljc2Mzc3IDkuNjIyMzMgNC40NTg2OCA5LjkyNzQzTDIuNjY3MzUgMTEuNzE4OEw4LjU5Mzc1IDExLjcxODhDOS4wMjUyMiAxMS43MTg4IDkuMzc1IDEyLjA2ODUgOS4zNzUgMTIuNUM5LjM3NSAxMi45MzE1IDkuMDI1MjIgMTMuMjgxMyA4LjU5Mzc1IDEzLjI4MTNMMi42NjczNSAxMy4yODEyTDQuNDU4NjggMTUuMDcyNkM0Ljc2Mzc3IDE1LjM3NzcgNC43NjM3NyAxNS44NzIzIDQuNDU4NjggMTYuMTc3NEM0LjE1MzU4IDE2LjQ4MjUgMy42NTg5MiAxNi40ODI1IDMuMzUzODIgMTYuMTc3NEwwLjIyODgyMyAxMy4wNTI0Wk0xNS42MjUgMTIuNUMxNS42MjUgMTIuMDY4NSAxNS45NzQ4IDExLjcxODggMTYuNDA2MiAxMS43MTg4SDIyLjMzMjZMMjAuNTQxMyA5LjkyNzQzQzIwLjIzNjIgOS42MjIzMyAyMC4yMzYyIDkuMTI3NjcgMjAuNTQxMyA4LjgyMjU3QzIwLjg0NjQgOC41MTc0OCAyMS4zNDExIDguNTE3NDggMjEuNjQ2MiA4LjgyMjU3TDI0Ljc3MTIgMTEuOTQ3NkMyNS4wNzYzIDEyLjI1MjcgMjUuMDc2MyAxMi43NDczIDI0Ljc3MTIgMTMuMDUyNEwyMS42NDYyIDE2LjE3NzRDMjEuMzQxMSAxNi40ODI1IDIwLjg0NjQgMTYuNDgyNSAyMC41NDEzIDE2LjE3NzRDMjAuMjM2MiAxNS44NzIzIDIwLjIzNjIgMTUuMzc3NyAyMC41NDEzIDE1LjA3MjZMMjIuMzMyNiAxMy4yODEzSDE2LjQwNjJDMTUuOTc0OCAxMy4yODEzIDE1LjYyNSAxMi45MzE1IDE1LjYyNSAxMi41WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2wtaWNvbiAke3NlbGVjdGVkVG9vbCA9PT0gJ3JlY3QnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwicmVjdFwiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Y29sb3JcIlxuICAgICAgICAgICAgZD1cIk0yMS44NzUgMS41NjI1QzIyLjczNzkgMS41NjI1IDIzLjQzNzUgMi4yNjIwNiAyMy40Mzc1IDMuMTI1VjIxLjg3NUMyMy40Mzc1IDIyLjczNzkgMjIuNzM3OSAyMy40Mzc1IDIxLjg3NSAyMy40Mzc1SDMuMTI1QzIuMjYyMDYgMjMuNDM3NSAxLjU2MjUgMjIuNzM3OSAxLjU2MjUgMjEuODc1VjMuMTI1QzEuNTYyNSAyLjI2MjA2IDIuMjYyMDYgMS41NjI1IDMuMTI1IDEuNTYyNUgyMS44NzVaTTMuMTI1IDBDMS4zOTkxMSAwIDAgMS4zOTkxMSAwIDMuMTI1VjIxLjg3NUMwIDIzLjYwMDkgMS4zOTkxMSAyNSAzLjEyNSAyNUgyMS44NzVDMjMuNjAwOSAyNSAyNSAyMy42MDA5IDI1IDIxLjg3NVYzLjEyNUMyNSAxLjM5OTExIDIzLjYwMDkgMCAyMS44NzUgMEgzLjEyNVpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdjaXJjbGUnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwiY2lyY2xlXCIgb25DbGljaz17dXBkYXRlVG9vbH0+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Y29sb3JcIlxuICAgICAgICAgICAgZD1cIk0xMi41IDIzLjQzNzVDNi40NTkzOSAyMy40Mzc1IDEuNTYyNSAxOC41NDA2IDEuNTYyNSAxMi41QzEuNTYyNSA2LjQ1OTM5IDYuNDU5MzkgMS41NjI1IDEyLjUgMS41NjI1QzE4LjU0MDYgMS41NjI1IDIzLjQzNzUgNi40NTkzOSAyMy40Mzc1IDEyLjVDMjMuNDM3NSAxOC41NDA2IDE4LjU0MDYgMjMuNDM3NSAxMi41IDIzLjQzNzVaTTEyLjUgMjVDMTkuNDAzNiAyNSAyNSAxOS40MDM2IDI1IDEyLjVDMjUgNS41OTY0NCAxOS40MDM2IDAgMTIuNSAwQzUuNTk2NDQgMCAwIDUuNTk2NDQgMCAxMi41QzAgMTkuNDAzNiA1LjU5NjQ0IDI1IDEyLjUgMjVaXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAnYXJyb3cnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwiYXJyb3dcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cblxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNMS41NjI1IDEyLjVDMS41NjI1IDEyLjA2ODUgMS45MTIyOCAxMS43MTg3IDIuMzQzNzUgMTEuNzE4N0gyMC43NzAxTDE1Ljg1MzggNi44MDI0M0MxNS41NDg3IDYuNDk3MzMgMTUuNTQ4NyA2LjAwMjY3IDE1Ljg1MzggNS42OTc1N0MxNi4xNTg5IDUuMzkyNDcgMTYuNjUzNiA1LjM5MjQ3IDE2Ljk1ODcgNS42OTc1N0wyMy4yMDg3IDExLjk0NzZDMjMuNTEzOCAxMi4yNTI3IDIzLjUxMzggMTIuNzQ3MyAyMy4yMDg3IDEzLjA1MjRMMTYuOTU4NyAxOS4zMDI0QzE2LjY1MzYgMTkuNjA3NSAxNi4xNTg5IDE5LjYwNzUgMTUuODUzOCAxOS4zMDI0QzE1LjU0ODcgMTguOTk3MyAxNS41NDg3IDE4LjUwMjcgMTUuODUzOCAxOC4xOTc2TDIwLjc3MDEgMTMuMjgxMkgyLjM0Mzc1QzEuOTEyMjggMTMuMjgxMiAxLjU2MjUgMTIuOTMxNSAxLjU2MjUgMTIuNVpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdsaW5lJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cImxpbmVcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cbiAgICAgICAgPHN2ZyBoZWlnaHQ9XCIyNVwiIHdpZHRoPVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCI+XG4gICAgICAgICAgPGxpbmUgeDE9XCIwXCIgeTE9XCIxMFwiIHgyPVwiMjVcIiB5Mj1cIjI1XCIgc3Ryb2tlPVwidmFyKC0taWNvbi1jb2xvcilcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2wtaWNvbiAke3NlbGVjdGVkVG9vbCA9PT0gJ2RpYW1vbmQnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwiZGlhbW9uZFwiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Y29sb3JcIlxuICAgICAgICAgICAgZD1cIk0xMC44NjAzIDAuNjc5MTg1QzExLjc2NTkgLTAuMjI2Mzk2IDEzLjIzNDEgLTAuMjI2Mzk0IDE0LjEzOTcgMC42NzkxODZMMjQuMzIwOCAxMC44NjAzQzI1LjIyNjQgMTEuNzY1OSAyNS4yMjY0IDEzLjIzNDEgMjQuMzIwOCAxNC4xMzk3TDE0LjEzOTcgMjQuMzIwOEMxMy4yMzQxIDI1LjIyNjQgMTEuNzY1OSAyNS4yMjY0IDEwLjg2MDMgMjQuMzIwOEwwLjY3OTE4NSAxNC4xMzk3Qy0wLjIyNjM5NiAxMy4yMzQxIC0wLjIyNjM5NCAxMS43NjU5IDAuNjc5MTg2IDEwLjg2MDNMMTAuODYwMyAwLjY3OTE4NVpNMTMuMDQ2NiAxLjc3MjMyQzEyLjc0NDcgMS40NzA0NiAxMi4yNTUzIDEuNDcwNDYgMTEuOTUzNCAxLjc3MjMyTDEuNzcyMzIgMTEuOTUzNEMxLjQ3MDQ2IDEyLjI1NTMgMS40NzA0NiAxMi43NDQ3IDEuNzcyMzIgMTMuMDQ2NkwxMS45NTM0IDIzLjIyNzdDMTIuMjU1MyAyMy41Mjk1IDEyLjc0NDcgMjMuNTI5NSAxMy4wNDY2IDIzLjIyNzdMMjMuMjI3NyAxMy4wNDY2QzIzLjUyOTUgMTIuNzQ0NyAyMy41Mjk1IDEyLjI1NTMgMjMuMjI3NyAxMS45NTM0TDEzLjA0NjYgMS43NzIzMlpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdjaGFsaycgPyAnc2VsZWN0ZWQnIDogJyd9YH0gaWQ9XCJjaGFsa1wiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNjbGlwMF8xMjg3XzM0OTgpXCI+XG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCJcbiAgICAgICAgICAgICAgZD1cIk0xOC45Nzg4IDAuMjI4ODIzQzE5LjI4MzkgLTAuMDc2Mjc0MyAxOS43Nzg2IC0wLjA3NjI3NDMgMjAuMDgzNyAwLjIyODgyM0wyNC43NzEyIDQuOTE2MzJDMjUuMDc2MyA1LjIyMTQyIDI1LjA3NjMgNS43MTYwOCAyNC43NzEyIDYuMDIxMThMOS4xNDYyIDIxLjY0NjJDOS4wNzEzOSAyMS43MjEgOC45ODIxNiAyMS43Nzk4IDguODgzOTIgMjEuODE5MUwxLjA3MTQyIDI0Ljk0NDFDMC43ODEyNTIgMjUuMDYwMiAwLjQ0OTgzMiAyNC45OTIyIDAuMjI4ODQ2IDI0Ljc3MTJDMC4wMDc4NTkyIDI0LjU1MDIgLTAuMDYwMTY3NCAyNC4yMTg4IDAuMDU1OTAwNCAyMy45Mjg2TDMuMTgwOSAxNi4xMTYxQzMuMjIwMTkgMTYuMDE3OSAzLjI3OTAzIDE1LjkyODYgMy4zNTM4NSAxNS44NTM4TDE4Ljk3ODggMC4yMjg4MjNaTTE3LjUxMTEgMy45MDYyNUwyMS4wOTM4IDcuNDg4OUwyMy4xMTM5IDUuNDY4NzVMMTkuNTMxMyAxLjg4NjFMMTcuNTExMSAzLjkwNjI1Wk0xOS45ODg5IDguNTkzNzVMMTYuNDA2MyA1LjAxMTFMNi4yNTAwMiAxNS4xNjc0VjE1LjYyNUg3LjAzMTI3QzcuNDYyNzUgMTUuNjI1IDcuODEyNTIgMTUuOTc0OCA3LjgxMjUyIDE2LjQwNjJWMTcuMTg3NUg4LjU5Mzc3QzkuMDI1MjUgMTcuMTg3NSA5LjM3NTAyIDE3LjUzNzMgOS4zNzUwMiAxNy45Njg4VjE4Ljc1SDkuODMyNjdMMTkuOTg4OSA4LjU5Mzc1Wk00LjczNjk4IDE2LjY4MDRMNC41NzIwOSAxNi44NDUzTDIuMTgzNjYgMjIuODE2NEw4LjE1NDczIDIwLjQyNzlMOC4zMTk2MiAyMC4yNjNDOC4wMjMzOCAyMC4xNTIgNy44MTI1MiAxOS44NjYzIDcuODEyNTIgMTkuNTMxMlYxOC43NUg3LjAzMTI3QzYuNTk5OCAxOC43NSA2LjI1MDAyIDE4LjQwMDIgNi4yNTAwMiAxNy45Njg4VjE3LjE4NzVINS40Njg3N0M1LjEzMzc3IDE3LjE4NzUgNC44NDgwMSAxNi45NzY2IDQuNzM2OTggMTYuNjgwNFpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMF8xMjg3XzM0OThcIj5cbiAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgPC9kZWZzPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0VG9vbDsiLCAiY2xhc3MgQXJyb3cge1xuICBjb25zdHJ1Y3Rvcih0ZW1wQ2FudmFzLCB0ZW1wQ29udGV4dCwgY2FsbGJhY2ssIGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbMF0pO1xuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUoZSk7XG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdHlwZTogJ2Fycm93JyxcbiAgICAgICAgeDogdGhpcy5zdGFydFgsXG4gICAgICAgIHk6IHRoaXMuc3RhcnRZLFxuICAgICAgICBzdGFydFg6IE1hdGgubWluKHRoaXMuc3RhcnRYLCBlLl94KSwgLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICBzdGFydFk6IE1hdGgubWluKHRoaXMuc3RhcnRZLCBlLl95KSwvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgIHdpZHRoOiBNYXRoLmFicyh0aGlzLnN0YXJ0WCAtIGUuX3gpLFxuICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKHRoaXMuc3RhcnRZIC0gZS5feSksXG4gICAgICAgIGVuZFg6IGUuX3gsXG4gICAgICAgIGVuZFk6IGUuX3lcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5zdGFydFggPSBlLl94O1xuICAgIHRoaXMuc3RhcnRZID0gZS5feTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgIC8qKiAqL1xuICAgIGxldCBjb3NwaXggPSAwLjg2NjAyNTQwNDtcbiAgICBsZXQgaGVhZGxlbiA9IDEwO1xuICAgIGxldCBkeCA9IGUuX3ggLSB0aGlzLnN0YXJ0WDtcbiAgICBsZXQgZHkgPSBlLl95IC0gdGhpcy5zdGFydFk7XG4gICAgbGV0IGxlbmd0aCA9IE1hdGguc3FydChkeSAqIGR5ICsgZHggKiBkeCk7IC8vbGVuZ3RoIG9mIGFycm93XG4gICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8odGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlLl94LCBlLl95KTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlLl94IC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLCBlLl95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyhlLl94LCBlLl95KTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlLl94IC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDYpLCBlLl95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgIHRoaXMudGVtcENvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyb3c7IiwgImNsYXNzIENoYWxrIHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGUuX3gsIGUuX3kpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZS5feCwgZS5feSk7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdXNlVXAoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlKGUpO1xuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYWxrOyIsICJpbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gXCIuLi91dGlscy9nZXRFbGVtZW50c0F0UG9zaXRpb24uanNcIjtcblxuY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLnRlbXBDYW52YXMgPSB0ZW1wQ2FudmFzO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0ZW1wQ29udGV4dDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5tb3VzZXVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZWRvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vtb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFswXSk7XG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZShlKTtcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgbGV0IHJhZGl1cyA9IGdldERpc3RhbmNlKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgZS5feCwgZS5feSk7XG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICB4OiB0aGlzLnN0YXJ0WCxcbiAgICAgICAgeTogdGhpcy5zdGFydFksXG4gICAgICAgIHdpZHRoOiByYWRpdXMgKiByYWRpdXMsXG4gICAgICAgIGhlaWdodDogcmFkaXVzICogcmFkaXVzLFxuICAgICAgICBlbmRYOiBlLl94LFxuICAgICAgICBlbmRZOiBlLl95LFxuICAgICAgICByYWRpdXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuX3g7XG4gICAgdGhpcy5zdGFydFkgPSBlLl95O1xuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgbGV0IHJhZGl1cyA9IGdldERpc3RhbmNlKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgZS5feCwgZS5feSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5hcmModGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTsiLCAiZnVuY3Rpb24gZ2V0RWxlbWVudHNBdFBvc2l0aW9uKHgsIHksIHNoYXBlcykge1xuICBsZXQgcmV0dXJuRWxlbWVudCA9IG51bGw7XG4gIGxldCBkaWZmWCA9IG51bGw7XG4gIGxldCBkaWZmWSA9IG51bGw7XG4gIGlmIChzaGFwZXMubGVuZ3RoID4gMCkge1xuICAgIHNoYXBlcy5mb3JFYWNoKHNoYXBlID0+IHtcbiAgICAgIGlmIChzaGFwZS50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgICBsZXQgd2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICAgICAgbGV0IGVuZFggPSBzaGFwZS54ICsgd2lkdGg7XG4gICAgICAgIGxldCBlbmRZID0gc2hhcGUueSArIGhlaWdodDtcbiAgICAgICAgaWYgKHNoYXBlLnggPD0geCAmJiB4IDw9IGVuZFgpIHtcbiAgICAgICAgICBpZiAoc2hhcGUueSA8PSB5ICYmIHkgPD0gZW5kWSkge1xuICAgICAgICAgICAgaWYgKCFkaWZmWCB8fCAhZGlmZlkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICBkaWZmWCA9IE1hdGgubWluKHggLSBzaGFwZS54LCBlbmRYIC0geCk7XG4gICAgICAgICAgICAgIGRpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnksIGVuZFkgLSB5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50RGlmZlggPSBNYXRoLm1pbih4IC0gc2hhcGUueCwgZW5kWCAtIHgpO1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnksIGVuZFkgLSB5KTtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnREaWZmWCA8IGRpZmZYIHx8IGN1cnJlbnREaWZmWSA8IGRpZmZZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICAgIGRpZmZYID0gY3VycmVudERpZmZYO1xuICAgICAgICAgICAgICAgIGRpZmZZID0gY3VycmVudERpZmZZO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gJ2xpbmUnIHx8IHNoYXBlLnR5cGUgPT09ICdhcnJvdycpIHtcbiAgICAgICAgbGV0IHN0YXJ0aW5nWEJ1ZmZlciA9IHNoYXBlLnggLSAxMDtcbiAgICAgICAgbGV0IGVuZGluZ1hCdWZmZXIgPSBzaGFwZS5lbmRYICsgMTA7XG4gICAgICAgIGxldCBzdGFydGluZ1lCdWZmZXIgPSBzaGFwZS55IC0gMTA7XG4gICAgICAgIGxldCBlbmRpbmdZQnVmZmVyID0gc2hhcGUuZW5kWSArIDEwO1xuXG4gICAgICAgIGxldCBtYXhYID0gTWF0aC5tYXgoc3RhcnRpbmdYQnVmZmVyLCBlbmRpbmdYQnVmZmVyKTtcbiAgICAgICAgbGV0IG1heFkgPSBNYXRoLm1heChzdGFydGluZ1lCdWZmZXIsIGVuZGluZ1lCdWZmZXIpO1xuXG4gICAgICAgIGxldCBtaW5YID0gTWF0aC5taW4oc3RhcnRpbmdYQnVmZmVyLCBlbmRpbmdYQnVmZmVyKTtcbiAgICAgICAgbGV0IG1pblkgPSBNYXRoLm1pbihzdGFydGluZ1lCdWZmZXIsIGVuZGluZ1lCdWZmZXIpO1xuXG4gICAgICAgIGlmIChtaW5YIDw9IHggJiYgeCA8PSBtYXhYKSB7XG4gICAgICAgICAgaWYgKG1pblkgPD0geSAmJiB5IDw9IG1heFkpIHtcbiAgICAgICAgICAgIGlmICghZGlmZlggfHwgIWRpZmZZKSB7XG4gICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgZGlmZlggPSBNYXRoLm1pbih4IC0gbWluWCwgbWF4WCAtIHgpO1xuICAgICAgICAgICAgICBkaWZmWSA9IE1hdGgubWluKHkgLSBtaW5ZLCBtYXhZIC0geSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZYID0gTWF0aC5taW4oeCAtIG1pblgsIG1heFggLSB4KTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWSA9IE1hdGgubWluKHkgLSBtaW5ZLCBtYXhZIC0geSk7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50RGlmZlggPCBkaWZmWCB8fCBjdXJyZW50RGlmZlkgPCBkaWZmWSkge1xuICAgICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgICBkaWZmWCA9IGN1cnJlbnREaWZmWDtcbiAgICAgICAgICAgICAgICBkaWZmWSA9IGN1cnJlbnREaWZmWTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgLy9cbiAgICAgICAgaWYgKHNoYXBlLnggPD0geCAmJiB4IDw9IHNoYXBlLmVuZFgpIHtcbiAgICAgICAgICBpZiAoc2hhcGUueSA8PSB5ICYmIHkgPD0gc2hhcGUuZW5kWSkge1xuICAgICAgICAgICAgaWYgKCFkaWZmWCB8fCAhZGlmZlkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICBkaWZmWCA9IE1hdGgubWluKHggLSBzaGFwZS54LCBzaGFwZS5lbmRYIC0geCk7XG4gICAgICAgICAgICAgIGRpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnksIHNoYXBlLmVuZFkgLSB5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50RGlmZlggPSBNYXRoLm1pbih4IC0gc2hhcGUueCwgc2hhcGUuZW5kWCAtIHgpO1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnksIHNoYXBlLmVuZFkgLSB5KTtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnREaWZmWCA8IGRpZmZYIHx8IGN1cnJlbnREaWZmWSA8IGRpZmZZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICAgIGRpZmZYID0gY3VycmVudERpZmZYO1xuICAgICAgICAgICAgICAgIGRpZmZZID0gY3VycmVudERpZmZZO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgIGxldCBkaXN0YW5jZXNxdWFyZWQgPSAoeCAtIHNoYXBlLngpICogKHggLSBzaGFwZS54KSArICh5IC0gc2hhcGUueSkgKiAoeSAtIHNoYXBlLnkpO1xuICAgICAgICBpZiAoZGlzdGFuY2VzcXVhcmVkIDw9IHNoYXBlLnJhZGl1cyAqIHNoYXBlLnJhZGl1cykge1xuICAgICAgICAgIC8vID8/PyBob3cgdG8gY2FsY3VsYXRlIGRpZmYuIGJ1Z2d5IGJlaGF2aW91clxuICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgICAvLyBsZXQgc3RhcnRYID0gc2hhcGUueCAtIChzaGFwZS53aWR0aCAvIDIpO1xuICAgICAgICAvLyBsZXQgc3RhcnRZID0gc2hhcGUueTtcbiAgICAgICAgbGV0IHdpZHRoID0gc2hhcGUud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSBzaGFwZS5oZWlnaHQ7XG4gICAgICAgIGxldCBlbmRYID0gc2hhcGUuc3RhcnRYICsgd2lkdGg7XG4gICAgICAgIGxldCBlbmRZID0gc2hhcGUuc3RhcnRZICsgaGVpZ2h0O1xuICAgICAgICBpZiAoc2hhcGUuc3RhcnRYIDw9IHggJiYgeCA8PSBlbmRYKSB7XG4gICAgICAgICAgaWYgKHNoYXBlLnN0YXJ0WSA8PSB5ICYmIHkgPD0gZW5kWSkge1xuICAgICAgICAgICAgaWYgKCFkaWZmWCB8fCAhZGlmZlkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICBkaWZmWCA9IE1hdGgubWluKHggLSBzaGFwZS5zdGFydFgsIGVuZFggLSB4KTtcbiAgICAgICAgICAgICAgZGlmZlkgPSBNYXRoLm1pbih5IC0gc2hhcGUuc3RhcnRZLCBlbmRZIC0geSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZYID0gTWF0aC5taW4oeCAtIHNoYXBlLnN0YXJ0WCwgZW5kWCAtIHgpO1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnN0YXJ0WSwgZW5kWSAtIHkpO1xuICAgICAgICAgICAgICBpZiAoY3VycmVudERpZmZYIDwgZGlmZlggfHwgY3VycmVudERpZmZZIDwgZGlmZlkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgICAgICAgICAgZGlmZlggPSBjdXJyZW50RGlmZlg7XG4gICAgICAgICAgICAgICAgZGlmZlkgPSBjdXJyZW50RGlmZlk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJldHVybkVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldERpc3RhbmNlKHAxWCwgcDFZLCBwMlgsIHAyWSkge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAxWCAtIHAyWCwgMikgKyBNYXRoLnBvdyhwMVkgLSBwMlksIDIpKVxufVxuXG5cbmV4cG9ydCB7IGdldEVsZW1lbnRzQXRQb3NpdGlvbiwgZ2V0RGlzdGFuY2UgfTsiLCAiaW1wb3J0IHsgZHJhd0RpYW1vbmQgfSBmcm9tIFwiLi4vdXRpbHMvZHJhd1NoYXBlcy5qc1wiO1xuXG5jbGFzcyBEaWFtb25kIHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLnRlbXBDYW52YXMgPSB0ZW1wQ2FudmFzO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0ZW1wQ29udGV4dDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5tb3VzZXVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZWRvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vtb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFswXSk7XG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZShlKTtcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgbGV0IHdpZHRoID0gKE1hdGguYWJzKHRoaXMuc3RhcnRYIC0gZS5feCkpICogMjtcbiAgICAgIC8vIHdpZHRoIGFuZCBoZWlnaHQgd2lsbCBiZSBzYW1lIGZvciB0aGUgZGlhbW9uZCBcbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdHlwZTogJ2RpYW1vbmQnLFxuICAgICAgICB4OiB0aGlzLnN0YXJ0WCxcbiAgICAgICAgeTogZS5feSxcbiAgICAgICAgc3RhcnRYOiB0aGlzLnN0YXJ0WCAtICh3aWR0aCAvIDIpLFxuICAgICAgICBzdGFydFk6IGUuX3kgLSAod2lkdGggLyAyKSxcbiAgICAgICAgLy8geENlbnRlcjogdGhpcy5zdGFydFgsXG4gICAgICAgIC8vIHlDZW50ZXI6IGUuX3ksXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aWR0aCxcbiAgICAgICAgZW5kWDogZS5feCxcbiAgICAgICAgZW5kWTogZS5feVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKGUpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRYID0gZS5feDtcbiAgICB0aGlzLnN0YXJ0WSA9IGUuX3k7XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIGxldCBzaXplID0gdGhpcy5zdGFydFggLSBlLl94O1xuXG4gICAgICBsZXQgeENlbnRlciA9IHRoaXMuc3RhcnRYO1xuICAgICAgbGV0IHlDZW50ZXIgPSBlLl95O1xuXG5cbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICAvLyB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgLy8gdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oeENlbnRlciArIHNpemUgKiBNYXRoLmNvcygwKSwgeUNlbnRlciArIHNpemUgKiBNYXRoLnNpbigwKSk7XG5cbiAgICAgIC8vIGZvciAodmFyIGkgPSAxOyBpIDw9IG51bWJlck9mU2lkZXM7IGkgKz0gMSkge1xuICAgICAgLy8gICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyh4Q2VudGVyICsgc2l6ZSAqIE1hdGguY29zKGkgKiAyICogTWF0aC5QSSAvIG51bWJlck9mU2lkZXMpLCB5Q2VudGVyICsgc2l6ZSAqIE1hdGguc2luKGkgKiAyICogTWF0aC5QSSAvIG51bWJlck9mU2lkZXMpKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcblxuICAgICAgZHJhd0RpYW1vbmQoeENlbnRlciwgeUNlbnRlciwgc2l6ZSwgdGhpcy50ZW1wQ29udGV4dClcblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFtb25kOyIsICJmdW5jdGlvbiBkcmF3RGlhbW9uZCh4Q2VudGVyLCB5Q2VudGVyLCBzaXplLCBjb250ZXh0KSB7XG4gIGxldCBudW1iZXJPZlNpZGVzID0gNDtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgY29udGV4dC5tb3ZlVG8oeENlbnRlciArIHNpemUgKiBNYXRoLmNvcygwKSwgeUNlbnRlciArIHNpemUgKiBNYXRoLnNpbigwKSk7XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPD0gbnVtYmVyT2ZTaWRlczsgaSArPSAxKSB7XG4gICAgY29udGV4dC5saW5lVG8oeENlbnRlciArIHNpemUgKiBNYXRoLmNvcyhpICogMiAqIE1hdGguUEkgLyBudW1iZXJPZlNpZGVzKSwgeUNlbnRlciArIHNpemUgKiBNYXRoLnNpbihpICogMiAqIE1hdGguUEkgLyBudW1iZXJPZlNpZGVzKSk7XG4gIH1cblxuICBjb250ZXh0LnN0cm9rZSgpO1xufVxuXG5mdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCBjb250ZXh0LCB4LCB5LCBtYXhXaWR0aCwgbGluZUhlaWdodCA9IDMyLCBjb2xvciwgZm9udFNpemUgPSAyNCkge1xuICBjb250ZXh0LmZvbnQgPSBgbm9ybWFsICR7Zm9udFNpemV9cHgvJHtsaW5lSGVpZ2h0fXB4IENvbWljIFNhbnMgTVNgO1xuICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjb250ZXh0LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG4gIGxldCB3b3JkcyA9IHRleHQuc3BsaXQoJycpO1xuICBsZXQgbGluZSA9ICcnO1xuICBsZXQgbnVtYmVyT2ZMaW5lcyA9IDE7XG5cbiAgZm9yIChsZXQgbiA9IDA7IG4gPCB3b3Jkcy5sZW5ndGg7IG4rKykge1xuICAgIGlmICh3b3Jkc1tuXSA9PT0gJ1xcbicpIHtcbiAgICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gICAgICBsaW5lID0gJyc7XG4gICAgICB5ICs9IGxpbmVIZWlnaHQ7XG4gICAgICBudW1iZXJPZkxpbmVzKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxldCB0ZXN0TGluZSA9IGxpbmUgKyB3b3Jkc1tuXSArICcnO1xuICAgICAgLy8gbGV0IG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRlc3RMaW5lKTtcbiAgICAgIC8vIGxldCB0ZXN0V2lkdGggPSBtZXRyaWNzLndpZHRoO1xuICAgICAgLy8gaWYgKHRlc3RXaWR0aCA+IG1heFdpZHRoICYmIG4gPiAwKSB7XG4gICAgICAvLyAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gICAgICAvLyAgIGxpbmUgPSB3b3Jkc1tuXSArICcnO1xuICAgICAgLy8gICB5ICs9IGxpbmVIZWlnaHQ7XG4gICAgICAvLyAgIG51bWJlck9mTGluZXMrKztcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGxpbmUgPSB0ZXN0TGluZTtcbiAgICAgIC8vIH1cbiAgICAgIGxldCB0ZXN0TGluZSA9IGxpbmUgKyB3b3Jkc1tuXSArICcnO1xuICAgICAgbGluZSA9IHRlc3RMaW5lO1xuICAgIH1cblxuICB9XG4gIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gIHJldHVybiBudW1iZXJPZkxpbmVzO1xufVxuXG5cbmV4cG9ydCB7IGRyYXdEaWFtb25kLCBkcmF3VGV4dCB9OyIsICJpbXBvcnQgeyBkcmF3VGV4dCB9IGZyb20gXCIuLi91dGlscy9kcmF3U2hhcGVzLmpzXCI7XG5cbmNsYXNzIERyYXdUZXh0IHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBpZCwgc2VsZWN0ZWRUaGVtZSkge1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmluaXRpYWxUZXh0ID0gJyc7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuZGJsY2xpY2sgPSB0aGlzLm9uZGJsY2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRCb3hDb250YWluZXJJZCcpO1xuICAgIHRoaXMudGV4dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0QXJlYUlkJyk7XG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkVGhlbWUgPSBzZWxlY3RlZFRoZW1lO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMudGV4dEJveC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5vbkJsdXIpO1xuICAgIHRoaXMudGV4dEJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMudGV4dEJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5vbkJsdXIpO1xuICAgIHRoaXMudGV4dEJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gIH1cblxuICBvbkNsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLnRleHRCb3gpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEcmF3aW5nIHRleHQnLCB0aGlzLnRleHRCb3guaW5uZXJIVE1MKTtcbiAgICAgIGxldCB0ZXh0ID0gdGhpcy50ZXh0Qm94LmlubmVySFRNTC5yZXBsYWNlKC88ZGl2Pi9nLCBcIlxcblwiKS5yZXBsYWNlKC88XFwvZGl2Pi9nLCBcIlwiKS5yZXBsYWNlKC88YnI+L2csIFwiXFxuXCIpLnJlcGxhY2UoJyZuYnNwOycsICcgJyk7XG4gICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICAgIGxldCBjb2xvciA9IHRoaXMuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjRkZGRkZGXCIgOiAnIzAwMDAwMCc7XG5cblxuXG4gICAgICAvLyBUT0RPOiBSZXBsYWNlIHVuZGVmaW5lZCB3aXRoIGV4YWN0IGxpbmUgaGVpZ2h0XG4gICAgICBsZXQgdGV4dGFyZWFTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMudGV4dEJveCk7XG4gICAgICBsZXQgdGV0eHRhcmVhQ2xpZW50U3R5bGUgPSB0aGlzLnRleHRCb3guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zb2xlLmxvZyh0ZXh0YXJlYVN0eWxlKTtcbiAgICAgIGxldCB3aWR0aCA9IE1hdGguY2VpbChOdW1iZXIodGV4dGFyZWFTdHlsZS53aWR0aC5zbGljZSgwLCAtMikpKTtcbiAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmNlaWwoTnVtYmVyKHRleHRhcmVhU3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSkpO1xuICAgICAgY29uc29sZS5sb2cod2lkdGgpO1xuICAgICAgLy9sZXQgbnVtYmVyT2ZMaW5lcyA9IGRyYXdUZXh0KHRleHQsIHRoaXMudGVtcENvbnRleHQsIHRldHh0YXJlYUNsaWVudFN0eWxlLngsIHRldHh0YXJlYUNsaWVudFN0eWxlLnksIE1hdGguY2VpbCh3aWR0aCksIHVuZGVmaW5lZCwgY29sb3IsIHRoaXMuYmFzZUZvbnRTaXplKTtcblxuXG4gICAgICAvL2xldCB0ZXh0TWV0cmljcyA9IHRoaXMudGVtcENvbnRleHQubWVhc3VyZVRleHQodGV4dCk7XG5cbiAgICAgIC8vIEFkZGluZyBidWZmZXIgMTAgdG8gdGhlIGhlaWdodCBhbmQgd2lkdGggdmFsdWVzXG4gICAgICAvL2xldCBoZWlnaHQgPSBNYXRoLmFicyh0ZXh0TWV0cmljcy5mb250Qm91bmRpbmdCb3hBc2NlbnQpICsgTWF0aC5hYnModGV4dE1ldHJpY3MuZm9udEJvdW5kaW5nQm94RGVzY2VudCkgKyAxMDtcbiAgICAgIC8vbGV0IHdpZHRoID0gTWF0aC5hYnModGV4dE1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hMZWZ0KSArIE1hdGguYWJzKHRleHRNZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94UmlnaHQpICsgMTA7XG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgeDogdGV0eHRhcmVhQ2xpZW50U3R5bGUubGVmdCxcbiAgICAgICAgeTogdGV0eHRhcmVhQ2xpZW50U3R5bGUudG9wLFxuICAgICAgICB0ZXh0Q29udGVudDogdGV4dCxcbiAgICAgICAgaW5uZXJIdG1sOiB0aGlzLnRleHRCb3guaW5uZXJIVE1MLFxuICAgICAgICBlbmRYOiB0aGlzLnN0YXJ0WCArIHdpZHRoLFxuICAgICAgICBlbmRZOiB0aGlzLnN0YXJ0WSArIGhlaWdodCxcbiAgICAgICAgLy93aWR0aDogTWF0aC5hYnModGV4dE1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hMZWZ0KSArIE1hdGguYWJzKHRleHRNZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94UmlnaHQpLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9KTtcblxuICAgICAgLy8gcmVzZXR0aW5nIHRoZSB0ZXh0YXJlYSB2YWx1ZXNcbiAgICAgIC8vIHRoaXMudGV4dEJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5vbkJsdXIpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUubWluV2lkdGggPSAnMXB4JztcbiAgICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSAnNDJweCc7XG4gICAgICB0aGlzLnRleHRCb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLnRleHRCb3hDb250YWluZXIgPSBudWxsO1xuICAgICAgdGhpcy50ZXh0Qm94ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvbmRibGNsaWNrKGV2LCBlbmNsb3NlZEVsZW1lbnQsIHsgc2Nyb2xsWCwgc2Nyb2xsWSwgc2NhbGluZ0ZhY3RvciB9KSB7XG4gICAgLy8gVE9ETzogQ3VycmVudGx5IGltcGxlbWVudGVkIGZvciByZWN0YW5nbGUgZW5jbG9zZWQgZWxlbWVudC4gQ2hlY2sgcG9zc2liaWxpdHkgZm9yIGFsbCBvdGhlciBzaGFwZXNcbiAgICB0aGlzLnN0YXJ0WCA9IGV2Lng7XG4gICAgdGhpcy5zdGFydFkgPSBldi55O1xuICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtldi55fXB4YDtcbiAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUubGVmdCA9IGAke2V2Lnh9cHhgO1xuICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLnRleHRCb3guZm9jdXMoKTtcblxuICAgIGlmIChlbmNsb3NlZEVsZW1lbnQpIHtcbiAgICAgIGlmIChlbmNsb3NlZEVsZW1lbnQudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgLy8gdG8gaGF2ZSBlcXVpIHNwYWNlIGFyb3VuZCB0aGUgaG9yaXpvbnRhbCBlZGdlXG4gICAgICAgIC8vIGxldCBkaWZmWCA9IE1hdGguYWJzKE1hdGguYWJzKGVuY2xvc2VkRWxlbWVudC54ICogc2NhbGluZ0ZhY3RvcikgLSBNYXRoLmFicyhldi5feCkpO1xuICAgICAgICAvLyBsZXQgZW5jbG9zZWRYID0gTWF0aC5hYnMoTWF0aC5hYnMoZW5jbG9zZWRFbGVtZW50LmVuZFggKiBzY2FsaW5nRmFjdG9yKSAtIGRpZmZYKTtcbiAgICAgICAgLy8gbGV0IGRpZmZZID0gTWF0aC5hYnMoTWF0aC5hYnMoZW5jbG9zZWRFbGVtZW50LnkgKiBzY2FsaW5nRmFjdG9yKSAtIE1hdGguYWJzKGV2Ll95KSk7XG4gICAgICAgIC8vIGxldCBlbmNsb3NlZFkgPSBNYXRoLmFicyhNYXRoLmFicyhlbmNsb3NlZEVsZW1lbnQuZW5kWSAqIHNjYWxpbmdGYWN0b3IpIC0gZGlmZlkpO1xuXG4gICAgICAgIC8vIHRoaXMud2lkdGggPSBgJHtNYXRoLmFicyhlbmNsb3NlZFggLSBldi5feCl9YDtcbiAgICAgICAgLy8gdGhpcy5oZWlnaHQgPSBgJHtNYXRoLmFicyhlbmNsb3NlZFkgLSBldi5feSl9YDtcblxuICAgICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0gZWxzZSBpZiAoZW5jbG9zZWRFbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUudG9wID0gYCR7ZW5jbG9zZWRFbGVtZW50LnkgKiBzY2FsaW5nRmFjdG9yICsgc2Nyb2xsWX1weGA7XG4gICAgICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7ZW5jbG9zZWRFbGVtZW50LnggKiBzY2FsaW5nRmFjdG9yICsgc2Nyb2xsWH1weGA7XG4gICAgICAgIHRoaXMudGV4dEJveC5pbm5lckhUTUwgPSBlbmNsb3NlZEVsZW1lbnQuaW5uZXJIdG1sO1xuICAgICAgICB0aGlzLndpZHRoID0gZW5jbG9zZWRFbGVtZW50LndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGVuY2xvc2VkRWxlbWVudC5oZWlnaHQ7XG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5zZWxlY3RBbGxDaGlsZHJlbih0aGlzLnRleHRCb3gpXG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZVRvRW5kKCk7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRYID0gZW5jbG9zZWRFbGVtZW50Lng7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRZID0gZW5jbG9zZWRFbGVtZW50Lnk7XG4gICAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVE9ETzogdG8gaGF2ZSBlcXVpIHNwYWNlIGFyb3VuZCB0aGUgaG9yaXpvbnRhbCBlZGdlXG5cbiAgICAgICAgLy8gdGhpcy53aWR0aCA9IGAke01hdGguYWJzKHRoaXMudGVtcENhbnZhcy53aWR0aCAtIGV2LngpIC0gMTB9YDtcbiAgICAgICAgLy8gdGhpcy5oZWlnaHQgPSBgJHtNYXRoLmFicyh0aGlzLnRlbXBDYW52YXMuaGVpZ2h0IC0gZXYueSkgLSAxMH1gO1xuICAgICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IEltcGxlbWVudCBmb3IgYWxsIHNoYXBlc1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPOiB0byBoYXZlIGVxdWkgc3BhY2UgYXJvdW5kIHRoZSBob3Jpem9udGFsIGVkZ2VcblxuICAgICAgLy8gdGhpcy53aWR0aCA9IGAke01hdGguYWJzKHRoaXMudGVtcENhbnZhcy53aWR0aCAtIGV2LngpIC0gMTB9YDtcbiAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gYCR7TWF0aC5hYnModGhpcy50ZW1wQ2FudmFzLmhlaWdodCAtIGV2LnkpIC0gMTB9YDtcbiAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd1RleHQ7IiwgImNsYXNzIExpbmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wQ2FudmFzLCB0ZW1wQ29udGV4dCwgY2FsbGJhY2ssIGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbMF0pOyAvLyBjbGVhcmlnIGxpbmUgZGFzaGVkXG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZShlKTtcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIHg6IHRoaXMuc3RhcnRYLFxuICAgICAgICB5OiB0aGlzLnN0YXJ0WSxcbiAgICAgICAgc3RhcnRYOiBNYXRoLm1pbih0aGlzLnN0YXJ0WCwgZS5feCksIC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgc3RhcnRZOiBNYXRoLm1pbih0aGlzLnN0YXJ0WSwgZS5feSksLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICB3aWR0aDogTWF0aC5hYnModGhpcy5zdGFydFggLSBlLl94KSwgLy8gQ2hlY2sgaWYgaXQgaXMgd3JvbmcgY2FsY3VsYXRpb24uXG4gICAgICAgIGhlaWdodDogTWF0aC5hYnModGhpcy5zdGFydFkgLSBlLl95KSwgLy9DaGVjayBpZiBpdCBpcyB3cm9uZyBjYWxjdWxhdGlvblxuICAgICAgICBlbmRYOiBlLl94LFxuICAgICAgICBlbmRZOiBlLl95XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMuc3RhcnRYID0gZS5feDtcbiAgICB0aGlzLnN0YXJ0WSA9IGUuX3k7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZS5feCwgZS5feSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmU7IiwgImltcG9ydCB7IGRyYXdEaWFtb25kLCBkcmF3VGV4dCB9IGZyb20gXCIuLi91dGlscy9kcmF3U2hhcGVzLmpzXCI7XG5cbmNsYXNzIE1vdmVUb29sIHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBlbGVtZW50LCB0aGVtZSkge1xuICAgIHRoaXMuaWQgPSBlbGVtZW50LmlkO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zZWxlY3RlZFRoZW1lID0gdGhlbWU7XG4gICAgLy90aGlzLmRyYXdFeGlzaXRpbmdFbGVtZW50T25UZW1wKCk7XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSBlLl94O1xuICAgIHRoaXMuc3RhcnRZID0gZS5feTtcbiAgICAvLyBUZW1wIENoZWNrLiBOZWVkIHRvIGFkb3B0IHRvIGFsbCB0aGlzLmVsZW1lbnRzLiBkb2luZyB0aGlzIGZvciByZWN0YW5nbGUgY2hlY2sgaW5pdGlhbC5cbiAgICB0aGlzLmRpZmZYID0gTWF0aC5hYnModGhpcy5lbGVtZW50LnggLSB0aGlzLnN0YXJ0WCk7XG4gICAgdGhpcy5kaWZmWSA9IE1hdGguYWJzKHRoaXMuZWxlbWVudC55IC0gZS55KTtcbiAgICB0aGlzLmRyYXdFeGlzaXRpbmdFbGVtZW50T25UZW1wKCk7XG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMubW91c2VNb3ZlKGUpO1xuICAgICAgLy8gRm9yIHJlY3RhbmdsZVxuICAgICAgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgICBpZDogdGhpcy5lbGVtZW50LmlkLFxuICAgICAgICAgIHR5cGU6ICdyZWN0YW5nbGUnLFxuICAgICAgICAgIHg6IGUuX3gsXG4gICAgICAgICAgeTogZS5feSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtZW50LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtZW50LmhlaWdodCxcbiAgICAgICAgICBlbmRYOiBlLl94LFxuICAgICAgICAgIGVuZFk6IGUuX3lcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICAgIGxldCBlbmRYID0gdGhpcy5lbGVtZW50LmVuZFggPiB0aGlzLmVsZW1lbnQueCA/IGUuX3ggKyB0aGlzLmVsZW1lbnQud2lkdGggOiBlLl94IC0gdGhpcy5lbGVtZW50LndpZHRoO1xuICAgICAgICBsZXQgZW5kWSA9IHRoaXMuZWxlbWVudC5lbmRZID4gdGhpcy5lbGVtZW50LnkgPyBlLl95ICsgdGhpcy5lbGVtZW50LmhlaWdodCA6IGUuX3kgLSB0aGlzLmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICB0eXBlOiAnYXJyb3cnLFxuICAgICAgICAgIHg6IGUuX3gsXG4gICAgICAgICAgeTogZS5feSxcbiAgICAgICAgICBzdGFydFg6IE1hdGgubWluKGVuZFgsIGUuX3gpLCAvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgICAgc3RhcnRZOiBNYXRoLm1pbihlbmRZLCBlLl95KSwvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxlbWVudC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbWVudC5oZWlnaHQsXG4gICAgICAgICAgZW5kWCxcbiAgICAgICAgICBlbmRZXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIGxldCBlbmRYID0gdGhpcy5lbGVtZW50LmVuZFggPiB0aGlzLmVsZW1lbnQueCA/IGUuX3ggKyB0aGlzLmVsZW1lbnQud2lkdGggOiBlLl94IC0gdGhpcy5lbGVtZW50LndpZHRoO1xuICAgICAgICBsZXQgZW5kWSA9IHRoaXMuZWxlbWVudC5lbmRZID4gdGhpcy5lbGVtZW50LnkgPyBlLl95ICsgdGhpcy5lbGVtZW50LmhlaWdodCA6IGUuX3kgLSB0aGlzLmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgeDogZS5feCxcbiAgICAgICAgICB5OiBlLl95LFxuICAgICAgICAgIHN0YXJ0WDogTWF0aC5taW4oZS5feCwgZW5kWCksIC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgICBzdGFydFk6IE1hdGgubWluKGUuX3ksIGVuZFkpLC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtZW50LndpZHRoLCAvLyBDaGVjayBpZiBpdCBpcyB3cm9uZyBjYWxjdWxhdGlvbi5cbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbWVudC5oZWlnaHQsIC8vQ2hlY2sgaWYgaXQgaXMgd3JvbmcgY2FsY3VsYXRpb25cbiAgICAgICAgICBlbmRYLFxuICAgICAgICAgIGVuZFlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgICB4OiBlLl94LFxuICAgICAgICAgIHk6IGUuX3ksXG4gICAgICAgICAgcmFkaXVzOiB0aGlzLmVsZW1lbnQucmFkaXVzLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1lbnQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1lbnQuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgIHR5cGU6ICdkaWFtb25kJyxcbiAgICAgICAgICB4OiBlLl94LFxuICAgICAgICAgIHk6IGUuX3ksXG4gICAgICAgICAgc3RhcnRYOiBlLl94IC0gKHRoaXMuZWxlbWVudC53aWR0aCAvIDIpLFxuICAgICAgICAgIHN0YXJ0WTogZS5feSAtICh0aGlzLmVsZW1lbnQud2lkdGggLyAyKSxcbiAgICAgICAgICAvLyB4Q2VudGVyOiB0aGlzLnN0YXJ0WCxcbiAgICAgICAgICAvLyB5Q2VudGVyOiBlLl95LFxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1lbnQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1lbnQuaGVpZ2h0LFxuICAgICAgICAgIGVuZFg6IGUuX3ggKyAodGhpcy5lbGVtZW50LndpZHRoIC8gMiksXG4gICAgICAgICAgZW5kWTogZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHg6IGUuX3gsXG4gICAgICAgICAgeTogZS5feSxcbiAgICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5lbGVtZW50LnRleHRDb250ZW50LFxuICAgICAgICAgIGVuZFg6IGUuX3ggKyBOdW1iZXIodGhpcy5lbGVtZW50LndpZHRoKSxcbiAgICAgICAgICBlbmRZOiBlLl95ICsgdGhpcy5lbGVtZW50LmhlaWdodCxcbiAgICAgICAgICAvL3dpZHRoOiBNYXRoLmFicyh0ZXh0TWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveExlZnQpICsgTWF0aC5hYnModGV4dE1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hSaWdodCksXG4gICAgICAgICAgd2lkdGg6IE51bWJlcih0aGlzLmVsZW1lbnQud2lkdGgpLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtZW50LmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QoZS5feCwgZS5feSwgdGhpcy5lbGVtZW50LndpZHRoLCB0aGlzLmVsZW1lbnQuaGVpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgbGV0IGhlYWRsZW4gPSAxMDtcbiAgICAgIGxldCBkaWZmWCA9IE1hdGguYWJzKHRoaXMuZWxlbWVudC54IC0gZS5feCk7XG4gICAgICBsZXQgZGlmZlkgPSBNYXRoLmFicyh0aGlzLmVsZW1lbnQueSAtIGUuX3kpO1xuICAgICAgbGV0IHggPSB0aGlzLmVsZW1lbnQueCArIGRpZmZYO1xuICAgICAgbGV0IHkgPSB0aGlzLmVsZW1lbnQueSArIGRpZmZZO1xuICAgICAgbGV0IGVuZFg7XG4gICAgICBsZXQgZW5kWTtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuZW5kWCA+IHRoaXMuZWxlbWVudC54KSB7XG4gICAgICAgIGVuZFggPSBlLl94ICsgdGhpcy5lbGVtZW50LndpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kWCA9IGUuX3ggLSB0aGlzLmVsZW1lbnQud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuZW5kWSA+IHRoaXMuZWxlbWVudC55KSB7XG4gICAgICAgIGVuZFkgPSBlLl95ICsgdGhpcy5lbGVtZW50LmhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFkgPSBlLl95IC0gdGhpcy5lbGVtZW50LmhlaWdodDtcbiAgICAgIH1cblxuXG4gICAgICBsZXQgZHggPSBlbmRYIC0geDtcbiAgICAgIGxldCBkeSA9IGVuZFkgLSB5O1xuICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKGUuX3gsIGUuX3kpXG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYLCBlbmRZKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gNiksIGVuZFkgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gNikpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZW5kWCwgZW5kWSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDYpLCBlbmRZIC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdsaW5lJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIGxldCBlbmRYO1xuICAgICAgbGV0IGVuZFk7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LmVuZFggPiB0aGlzLmVsZW1lbnQueCkge1xuICAgICAgICBlbmRYID0gZS5feCArIHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFggPSBlLl94IC0gdGhpcy5lbGVtZW50LndpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50LmVuZFkgPiB0aGlzLmVsZW1lbnQueSkge1xuICAgICAgICBlbmRZID0gZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRZID0gZS5feSAtIHRoaXMuZWxlbWVudC5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZS5feCwgZS5feSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYLCBlbmRZKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYXJjKGUuX3gsIGUuX3ksIHRoaXMuZWxlbWVudC5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgZHJhd0RpYW1vbmQoZS5feCwgZS5feSwgdGhpcy5lbGVtZW50LndpZHRoIC8gMiwgdGhpcy50ZW1wQ29udGV4dClcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICBsZXQgY29sb3IgPSB0aGlzLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnO1xuICAgICAgZHJhd1RleHQodGhpcy5lbGVtZW50LnRleHRDb250ZW50LCB0aGlzLnRlbXBDb250ZXh0LCBlLl94LCBlLl95LCB0aGlzLmVsZW1lbnQud2lkdGgsIHVuZGVmaW5lZCwgY29sb3IpXG4gICAgfVxuICB9XG5cblxuXG5cbiAgZHJhd0V4aXNpdGluZ0VsZW1lbnRPblRlbXAoKSB7XG4gICAgLy8gIHR5cGUgPT09ICdyZWN0YW5nbGUnXG4gICAgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHRoaXMuZWxlbWVudC54LCB0aGlzLmVsZW1lbnQueSwgdGhpcy5lbGVtZW50LndpZHRoLCB0aGlzLmVsZW1lbnQuaGVpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICBsZXQgaGVhZGxlbiA9IDEwO1xuICAgICAgbGV0IGR4ID0gdGhpcy5lbGVtZW50LmVuZFggLSB0aGlzLmVsZW1lbnQueDtcbiAgICAgIGxldCBkeSA9IHRoaXMuZWxlbWVudC5lbmRZIC0gdGhpcy5lbGVtZW50Lnk7XG4gICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8odGhpcy5lbGVtZW50LngsIHRoaXMuZWxlbWVudC55KVxuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8odGhpcy5lbGVtZW50LmVuZFgsIHRoaXMuZWxlbWVudC5lbmRZKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKHRoaXMuZWxlbWVudC5lbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLCB0aGlzLmVsZW1lbnQuZW5kWSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyh0aGlzLmVsZW1lbnQuZW5kWCwgdGhpcy5lbGVtZW50LmVuZFkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8odGhpcy5lbGVtZW50LmVuZFggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksIHRoaXMuZWxlbWVudC5lbmRZIC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdsaW5lJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHRoaXMuZWxlbWVudC54LCB0aGlzLmVsZW1lbnQueSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyh0aGlzLmVsZW1lbnQuZW5kWCwgdGhpcy5lbGVtZW50LmVuZFkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmFyYyh0aGlzLmVsZW1lbnQueCwgdGhpcy5lbGVtZW50LnksIHRoaXMuZWxlbWVudC5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICBsZXQgeENlbnRlciA9IHRoaXMuZWxlbWVudC54O1xuICAgICAgbGV0IHlDZW50ZXIgPSB0aGlzLmVsZW1lbnQueTtcbiAgICAgIGxldCBzaXplID0gdGhpcy5lbGVtZW50LnggLSB0aGlzLmVsZW1lbnQuZW5kWDtcbiAgICAgIGRyYXdEaWFtb25kKHhDZW50ZXIsIHlDZW50ZXIsIHNpemUsIHRoaXMudGVtcENvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgbGV0IGNvbG9yID0gdGhpcy5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiNGRkZGRkZcIiA6ICcjMDAwMDAwJztcbiAgICAgIGRyYXdUZXh0KHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCwgdGhpcy50ZW1wQ29udGV4dCwgdGhpcy5lbGVtZW50LngsIHRoaXMuZWxlbWVudC55LCB0aGlzLmVsZW1lbnQud2lkdGgsIHVuZGVmaW5lZCwgY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZlVG9vbDsiLCAiY2xhc3MgUmVjdCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbMF0pO1xuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUoZSk7XG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdHlwZTogJ3JlY3RhbmdsZScsXG4gICAgICAgIHg6IE1hdGgubWluKHRoaXMuc3RhcnRYLCBlLl94KSxcbiAgICAgICAgeTogTWF0aC5taW4odGhpcy5zdGFydFksIGUuX3kpLFxuICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgZW5kWDogTWF0aC5tYXgodGhpcy5zdGFydFgsIGUuX3gpLFxuICAgICAgICBlbmRZOiBNYXRoLm1heCh0aGlzLnN0YXJ0WSwgZS5feSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuX3g7XG4gICAgdGhpcy5zdGFydFkgPSBlLl95O1xuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICBsZXQgeCA9IE1hdGgubWluKGUuX3gsIHRoaXMuc3RhcnRYKTtcbiAgICAgIGxldCB5ID0gTWF0aC5taW4oZS5feSwgdGhpcy5zdGFydFkpO1xuICAgICAgbGV0IHdpZHRoID0gTWF0aC5hYnMoZS5feCAtIHRoaXMuc3RhcnRYKTtcbiAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmFicyhlLl95IC0gdGhpcy5zdGFydFkpO1xuXG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuXG4gICAgICBpZiAoIXdpZHRoIHx8ICFoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3Q7IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuZnVuY3Rpb24gVGV4dFRvb2woKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fSBjbGFzc05hbWU9XCJ0ZXh0VG9vbFwiIGlkPVwidGV4dEJveENvbnRhaW5lcklkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRhcmVhXCIgaWQ9XCJ0ZXh0QXJlYUlkXCIgcm9sZT1cInRleHRib3hcIiBjb250ZW50RWRpdGFibGUgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUZXh0VG9vbDsiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gWm9vbUNvbnRhaW5lcih7IHpvb21SYW5nZSwgem9vbUluLCB6b29tT3V0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInpvb21Db250YWluZXJcIj5cbiAgICAgIDxzcGFuIGlkPVwibWludXNcIiBjbGFzc05hbWU9XCJ6b29tLXNpZ25cIiBvbkNsaWNrPXt6b29tSW59PlxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgZD1cIk0zLjEyNSAxMi41QzMuMTI1IDEyLjA2ODUgMy40NzQ3OCAxMS43MTg4IDMuOTA2MjUgMTEuNzE4OEgyMS4wOTM4QzIxLjUyNTIgMTEuNzE4OCAyMS44NzUgMTIuMDY4NSAyMS44NzUgMTIuNUMyMS44NzUgMTIuOTMxNSAyMS41MjUyIDEzLjI4MTIgMjEuMDkzOCAxMy4yODEySDMuOTA2MjVDMy40NzQ3OCAxMy4yODEyIDMuMTI1IDEyLjkzMTUgMy4xMjUgMTIuNVpcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRjb2xvclwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gaWQ9XCJ6b29tUmFuZ2VcIiBjbGFzc05hbWU9XCJ6b29tLXJhbmdlXCI+e01hdGguZmxvb3Ioem9vbVJhbmdlICogMTAwKX08L3NwYW4+XG4gICAgICA8c3BhbiBpZD1cInBsdXNcIiBjbGFzc05hbWU9XCJ6b29tLXNpZ25cIiBvbkNsaWNrPXt6b29tT3V0fT5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNMTIuNSAzLjEyNUMxMi45MzE1IDMuMTI1IDEzLjI4MTIgMy40NzQ3OCAxMy4yODEyIDMuOTA2MjVWMTEuNzE4OEgyMS4wOTM4QzIxLjUyNTIgMTEuNzE4OCAyMS44NzUgMTIuMDY4NSAyMS44NzUgMTIuNUMyMS44NzUgMTIuOTMxNSAyMS41MjUyIDEzLjI4MTIgMjEuMDkzOCAxMy4yODEySDEzLjI4MTJWMjEuMDkzOEMxMy4yODEyIDIxLjUyNTIgMTIuOTMxNSAyMS44NzUgMTIuNSAyMS44NzVDMTIuMDY4NSAyMS44NzUgMTEuNzE4NyAyMS41MjUyIDExLjcxODcgMjEuMDkzOFYxMy4yODEySDMuOTA2MjVDMy40NzQ3OCAxMy4yODEyIDMuMTI1IDEyLjkzMTUgMy4xMjUgMTIuNUMzLjEyNSAxMi4wNjg1IDMuNDc0NzggMTEuNzE4OCAzLjkwNjI1IDExLjcxODhIMTEuNzE4OFYzLjkwNjI1QzExLjcxODggMy40NzQ3OCAxMi4wNjg1IDMuMTI1IDEyLjUgMy4xMjVaXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Y29sb3JcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc3Bhbj5cblxuXG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFpvb21Db250YWluZXI7IiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2U0YTY5M2E2JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC0ySUY2UEY3Ty5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVNBVUEyN0kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtMjRBMlNBR1IuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1aUUdEUEZVVy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1FNEE2OTNBNi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8s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
