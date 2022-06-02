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

// app/components/ConfigTool/ConfigTool.js
init_react();
var import_react = __toESM(require("react"));

// app/components/ConfigTool/ConfigTool.css
var ConfigTool_default = "/build/_assets/ConfigTool-5OWJ5SE4.css";

// app/components/ConfigTool/ConfigTool.js
function ConfigToolLinks() {
  return [{ rel: "stylesheet", href: ConfigTool_default }];
}
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
var ConfigTool_default2 = ConfigTool;

// app/components/main.js
init_react();
var import_react5 = __toESM(require("react"));

// app/components/main.css
var main_default = "/build/_assets/main-YLJ6JLO4.css";

// app/components/SelectTool/SelectTool.js
init_react();
var import_react2 = __toESM(require("react"));

// app/components/SelectTool/SelectTool.css
var SelectTool_default = "/build/_assets/SelectTool-ZIZDDKIP.css";

// app/components/SelectTool/SelectTool.js
function SelectToolLinks() {
  return [{ rel: "stylesheet", href: SelectTool_default }];
}
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
var import_react3 = __toESM(require("react"));

// app/components/TextTool/TextTool.css
var TextTool_default = "/build/_assets/TextTool-UMOFHWRZ.css";

// app/components/TextTool/TextTool.js
function TextToolLinks() {
  return [{ rel: "stylesheet", href: TextTool_default }];
}
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
var TextTool_default2 = TextTool;

// app/components/ZoomContainer/ZoomContainer.js
init_react();
var import_react4 = __toESM(require("react"));

// app/components/ZoomContainer/zoomContainer.css
var zoomContainer_default = "/build/_assets/zoomContainer-Y6YPOOBE.css";

// app/components/ZoomContainer/ZoomContainer.js
function ZoomContainerLinks() {
  return [{ rel: "stylesheet", href: zoomContainer_default }];
}
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
    }))), /* @__PURE__ */ import_react5.default.createElement(SelectTool_default2, {
      selectedTool: this.state.selectedTool,
      updateTool: this.onClickTool
    }), /* @__PURE__ */ import_react5.default.createElement(ConfigTool_default2, {
      toggleTheme: this.updateTheme
    }), /* @__PURE__ */ import_react5.default.createElement(TextTool_default2, null), /* @__PURE__ */ import_react5.default.createElement(ZoomContainer_default, {
      zoomRange: this.state.scalingFactor,
      zoomOut: this.zoomOut,
      zoomIn: this.zoomIn
    }));
  }
};
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
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(main_default2, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "e71a2df3", "entry": { "module": "/build/entry.client-2IF6PF7O.js", "imports": ["/build/_shared/chunk-ESAUA27I.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-24A2SAGR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-2VPW3KT2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E71A2DF3.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGU6L1VzZXJzL2luZHJhZ2l0aC9QcmFjdGljZS9yZW1peC1sZWFybi9teS1yZW1peC1hcHAvYXBwL3Jvb3QuanN4IiwgInJvdXRlOi9Vc2Vycy9pbmRyYWdpdGgvUHJhY3RpY2UvcmVtaXgtbGVhcm4vbXktcmVtaXgtYXBwL2FwcC9yb3V0ZXMvaW5kZXguanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NvbmZpZ1Rvb2wvQ29uZmlnVG9vbC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9tYWluLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NlbGVjdFRvb2wvU2VsZWN0VG9vbC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvQXJyb3cuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2hhcGVzL0NoYWxrLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9DaXJjbGUuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvdXRpbHMvZ2V0RWxlbWVudHNBdFBvc2l0aW9uLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9EaWFtb25kLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL3V0aWxzL2RyYXdTaGFwZXMuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2hhcGVzL0RyYXdUZXh0LmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9MaW5lLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1NoYXBlcy9Nb3ZlVG9vbC5qcyIsICIuLi9hcHAvY29tcG9uZW50cy9TaGFwZXMvUmVjdGFuZ2xlLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1RleHRUb29sL1RleHRUb29sLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL1pvb21Db250YWluZXIvWm9vbUNvbnRhaW5lci5qcyIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcblxuaW1wb3J0ICogYXMgc2VydmVyQnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcblxuLy8gUmVtaXggZmluZ2VycHJpbnRzIGl0cyBhc3NldHMgc28gd2UgY2FuIGNhY2hlIGZvcmV2ZXIuXG5hcHAudXNlKFxuICBcIi9idWlsZFwiLFxuICBleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiBcIjF5XCIgfSlcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XG5cbmFwcC51c2UobW9yZ2FuKFwidGlueVwiKSk7XG5cbmFwcC5hbGwoXG4gIFwiKlwiLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KVxuKTtcblxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvaW5kcmFnaXRoL1ByYWN0aWNlL3JlbWl4LWxlYXJuL215LXJlbWl4LWFwcC9hcHAvZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvaW5kcmFnaXRoL1ByYWN0aWNlL3JlbWl4LWxlYXJuL215LXJlbWl4LWFwcC9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2luZHJhZ2l0aC9QcmFjdGljZS9yZW1peC1sZWFybi9teS1yZW1peC1hcHAvYXBwL3JvdXRlcy9pbmRleC5qc3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBDb25maWdUb29sTGlua3MgfSBmcm9tIFwifi9jb21wb25lbnRzL0NvbmZpZ1Rvb2wvQ29uZmlnVG9vbFwiO1xuaW1wb3J0IE1haW5Db21wb25lbnQsIHsgTWFpbkNvbXBvbmVudFN0eWxlcyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvbWFpblwiO1xuaW1wb3J0IHsgU2VsZWN0VG9vbExpbmtzIH0gZnJvbSBcIn4vY29tcG9uZW50cy9TZWxlY3RUb29sL1NlbGVjdFRvb2xcIjtcbmltcG9ydCB7IFRleHRUb29sTGlua3MgfSBmcm9tIFwifi9jb21wb25lbnRzL1RleHRUb29sL1RleHRUb29sXCI7XG5pbXBvcnQgeyBab29tQ29udGFpbmVyTGlua3MgfSBmcm9tIFwifi9jb21wb25lbnRzL1pvb21Db250YWluZXIvWm9vbUNvbnRhaW5lclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlcy5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW1xuICAuLi5NYWluQ29tcG9uZW50U3R5bGVzKCksXG4gIC4uLlNlbGVjdFRvb2xMaW5rcygpLFxuICAuLi5Db25maWdUb29sTGlua3MoKSxcbiAgLi4uVGV4dFRvb2xMaW5rcygpLFxuICAuLi5ab29tQ29udGFpbmVyTGlua3MoKSxcbiAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpLCBzYW5zLXNlcmlmXCIsIGxpbmVIZWlnaHQ6IFwiMS40XCIgfX0+XG4gICAgICA8TWFpbkNvbXBvbmVudCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29uZmlnVG9vbC5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29uZmlnVG9vbExpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxufVxuXG5cbmZ1bmN0aW9uIENvbmZpZ1Rvb2woeyB0b2dnbGVUaGVtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25maWdUb29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbmZpZ0xhYmVsXCI+RGFyayBNb2RlPC9zcGFuPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DbGljaz17dG9nZ2xlVGhlbWV9IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCIgaWQ9XCJ0b2dnbGVEYXJrTW9kZVwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1Rvb2w7IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFpbi5jc3MnO1xuaW1wb3J0IENvbmZpZ1Rvb2wgZnJvbSAnLi9Db25maWdUb29sL0NvbmZpZ1Rvb2wnO1xuaW1wb3J0IFNlbGVjdFRvb2wgZnJvbSAnLi9TZWxlY3RUb29sL1NlbGVjdFRvb2wnO1xuaW1wb3J0IEFycm93IGZyb20gJy4vU2hhcGVzL0Fycm93JztcbmltcG9ydCBDaGFsayBmcm9tICcuL1NoYXBlcy9DaGFsayc7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vU2hhcGVzL0NpcmNsZSc7XG5pbXBvcnQgRGlhbW9uZCBmcm9tICcuL1NoYXBlcy9EaWFtb25kJztcbmltcG9ydCBEcmF3VGV4dCBmcm9tICcuL1NoYXBlcy9EcmF3VGV4dCc7XG5pbXBvcnQgTGluZSBmcm9tICcuL1NoYXBlcy9MaW5lJztcbmltcG9ydCBNb3ZlVG9vbCBmcm9tICcuL1NoYXBlcy9Nb3ZlVG9vbCc7XG5pbXBvcnQgUmVjdCBmcm9tICcuL1NoYXBlcy9SZWN0YW5nbGUnO1xuaW1wb3J0IFRleHRUb29sIGZyb20gJy4vVGV4dFRvb2wvVGV4dFRvb2wnO1xuaW1wb3J0IHsgZHJhd0RpYW1vbmQsIGRyYXdUZXh0IH0gZnJvbSAnLi91dGlscy9kcmF3U2hhcGVzJztcbmltcG9ydCB7IGdldEVsZW1lbnRzQXRQb3NpdGlvbiB9IGZyb20gJy4vdXRpbHMvZ2V0RWxlbWVudHNBdFBvc2l0aW9uJztcbmltcG9ydCBab29tQ29udGFpbmVyIGZyb20gJy4vWm9vbUNvbnRhaW5lci9ab29tQ29udGFpbmVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIE1haW5Db21wb25lbnRTdHlsZXMoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dO1xufVxuXG5cbmxldCB0b29scyA9IHtcbiAgbW92ZTogJycsXG4gIGNoYWxrOiBDaGFsayxcbiAgbGluZTogTGluZSxcbiAgcmVjdDogUmVjdCxcbiAgYXJyb3c6IEFycm93LFxuICB0ZXh0OiBEcmF3VGV4dCxcbiAgY2lyY2xlOiBDaXJjbGUsXG4gIGRpYW1vbmQ6IERpYW1vbmQsXG4gIHNlbGVjdDogJ3NlbGVjdCdcbn07XG5cbmxldCBiYXNlQ29uZmlnID0ge1xuICBzY2FsaW5nRmFjdG9yOiAxLFxuICBiYXNlRm9udFNpemU6IDI0LFxuICBiYXNlTGluZUhlaWdodDogKDE1MCAqIDI0KSAvIDEwMFxufVxuXG5cblxuY2xhc3MgTWFpbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYW52YXNXaWR0aDogMCxcbiAgICAgIGNhbnZhc0hlaWdodDogMCxcbiAgICAgIHNlbGVjdGVkVGhlbWU6ICdsaWdodCcsXG4gICAgICBzZWxlY3RlZFRvb2w6ICdjaGFsaycsXG4gICAgICBzaGFwZXM6IFtdLFxuICAgICAgLi4uYmFzZUNvbmZpZ1xuICAgIH07XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVRvb2wgPSB0aGlzLnVwZGF0ZVRvb2wuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tUb29sID0gdGhpcy5vbkNsaWNrVG9vbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25FdmVudCA9IHRoaXMub25FdmVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlVG9UZXh0VG9vbCA9IHRoaXMuY2hhbmdlVG9UZXh0VG9vbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IHRoaXMub25Eb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldERyYWdnaW5nVmFsdWVzID0gdGhpcy5yZXNldERyYWdnaW5nVmFsdWVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbldoZWVsTW92ZSA9IHRoaXMub25XaGVlbE1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmltZ1VwZGF0ZSA9IHRoaXMuaW1nVXBkYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3SW1hZ2UgPSB0aGlzLmRyYXdJbWFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVGhlbWUgPSB0aGlzLnVwZGF0ZVRoZW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnpvb21JbiA9IHRoaXMuem9vbUluLmJpbmQodGhpcyk7XG4gICAgdGhpcy56b29tT3V0ID0gdGhpcy56b29tT3V0LmJpbmQodGhpcyk7XG5cblxuICAgIHRoaXMubWFpbkNhbnZhcyA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xuXG4gICAgLy8gc2VxdWV1bmNlIGlkIFxuICAgIHRoaXMuaWQgPSAwO1xuXG4gICAgLy8gVG8gY2hlY2sgd2hldGhlciB0aGUgdXNlciBpcyBkcmFnZ2luZy5cbiAgICB0aGlzLm1vdXNlWFBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLm1vdXNlWVBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLmlzVXNlckRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2luZ0VsZW1lbnQgPSBudWxsO1xuXG5cblxuICAgIC8vIFRvIGVtdWxhdGUgc2Nyb2xsIGJlaGF2aW91clxuICAgIHRoaXMuc2Nyb2xsWCA9IDA7XG4gICAgdGhpcy5zY3JvbGxZID0gMDtcblxuICAgIC8vIHNjYWxpbmcgZmFjdG9yXG5cbiAgICAvL3RoaXMudXBkYXRlRm9udFByb3BlcnRpZXMoKTtcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhbnZhc1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgY2FudmFzSGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSlcbiAgICB0aGlzLm1haW5Db250ZXh0ID0gdGhpcy5tYWluQ2FudmFzLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiNGRkZGRkZcIiA6ICcjMDAwMDAwJzsvLyBEZWZhdWx0IGxpbmUgY29sb3IuIFxuICAgIHRoaXMudGVtcENvbnRleHQubGluZVdpZHRoID0gMS4wOy8vIERlZmF1bHQgc3Ryb2tlIHdlaWdodC4gXG5cbiAgICAvLyBGaWxsIHRyYW5zcGFyZW50IGNhbnZhcyB3aXRoIGRhcmsgZ3JleSAoU28gd2UgY2FuIHVzZSB0aGUgY29sb3IgdG8gZXJhc2UpLiBcbiAgICB0aGlzLnRlbXBDb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjNDI0MjQyXCIgOiAnI0ZGRkZGRic7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTsvL1RvcCwgTGVmdCwgV2lkdGgsIEhlaWdodCBvZiBjYW52YXNcblxuICAgIHRoaXMudG9vbHMgPSB0b29scztcblxuICAgIGxldCBzZWxlY3RlZE9uZSA9IHRoaXMudG9vbHNbdGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2xdO1xuXG4gICAgdGhpcy50b29sID0gbmV3IHNlbGVjdGVkT25lKHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCB0aGlzLnRlbXBDb250ZXh0LCB0aGlzLmltZ1VwZGF0ZSwgdGhpcy5pZCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbkV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25FdmVudCwgZmFsc2UpO1xuICAgIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcy5jaGFuZ2VUb1RleHRUb29sLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uRG9jdW1lbnRDbGljaywgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbldoZWVsTW92ZSwgZmFsc2UpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpO1xuXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsdXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuem9vbU91dCwgZmFsc2UpO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW51cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy56b29tSW4sIGZhbHNlKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25FdmVudCwgZmFsc2UpO1xuICAgIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25FdmVudCwgZmFsc2UpO1xuICAgIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMuY2hhbmdlVG9UZXh0VG9vbCwgZmFsc2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93biwgZmFsc2UpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2ssIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbE1vdmUsIGZhbHNlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSk7XG4gIH1cblxuXG4gIHpvb21JbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yIDw9IDAuMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKChwcmV2c3RhdGUpID0+IHtcbiAgICAgIGxldCBiYXNlRm9udFNpemUgPSBwcmV2c3RhdGUuYmFzZUZvbnRTaXplIC0gMztcbiAgICAgIGxldCBiYXNlTGluZUhlaWdodCA9ICgxNTAgKiBiYXNlRm9udFNpemUpIC8gMTAwXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2c3RhdGUsXG4gICAgICAgIHNjYWxpbmdGYWN0b3I6IHByZXZzdGF0ZS5zY2FsaW5nRmFjdG9yIC0gMC4xLFxuICAgICAgICBiYXNlRm9udFNpemUsXG4gICAgICAgIGJhc2VMaW5lSGVpZ2h0XG4gICAgICB9XG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHpvb21PdXQoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2NhbGluZ0ZhY3RvciA+PSAyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZzdGF0ZSkgPT4ge1xuICAgICAgbGV0IGJhc2VGb250U2l6ZSA9IHByZXZzdGF0ZS5iYXNlRm9udFNpemUgKyAzO1xuICAgICAgbGV0IGJhc2VMaW5lSGVpZ2h0ID0gKDE1MCAqIGJhc2VGb250U2l6ZSkgLyAxMDBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZzdGF0ZSxcbiAgICAgICAgc2NhbGluZ0ZhY3RvcjogcHJldnN0YXRlLnNjYWxpbmdGYWN0b3IgKyAwLjEsXG4gICAgICAgIGJhc2VGb250U2l6ZSxcbiAgICAgICAgYmFzZUxpbmVIZWlnaHRcbiAgICAgIH1cbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH0pO1xuICB9XG5cblxuICB1cGRhdGVUb29sKHZhbHVlLCBpZCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy50b29sc1t2YWx1ZV0pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFRvb2w6IHZhbHVlIH0sICgpID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdGVkT25lID0gdGhpcy50b29sc1t0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbF07XG4gICAgICAgIGlmICghc2VsZWN0ZWRPbmUgfHwgc2VsZWN0ZWRPbmUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBzdG9yaW5nIHRoZSBzaGFwZXMuIHdlIGFyZSBnZW5lcmF0aW5nIGlkcy5cbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkICsgMTtcbiAgICAgICAgICB0aGlzLnRvb2wgPSBuZXcgc2VsZWN0ZWRPbmUodGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuaW1nVXBkYXRlLCB0aGlzLmlkLCB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9vbCA9IG5ldyBzZWxlY3RlZE9uZSh0aGlzLnRlbXBDYW52YXMuY3VycmVudCwgdGhpcy50ZW1wQ29udGV4dCwgdGhpcy5pbWdVcGRhdGUsIGlkLCB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2FudmFzV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBjYW52YXNIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH0pXG4gIH1cblxuICBvbkV2ZW50KGV2KSB7XG4gICAgZXYuX3ggPSBldi54O1xuICAgIGV2Ll95ID0gZXYueTtcblxuICAgIC8vIGxldCBpc1VzZXJEcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAnc2VsZWN0Jykge1xuICAgICAgaWYgKGV2LnR5cGUgPT09ICdtb3VzZWRvd24nKSB7XG4gICAgICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBldi5feDtcbiAgICAgICAgdGhpcy5tb3VzZVlQb3NpdGlvbiA9IGV2Ll95O1xuICAgICAgfSBlbHNlIGlmIChldi50eXBlID09PSAnbW91c2Vtb3ZlJykge1xuICAgICAgICBpZiAodGhpcy5tb3VzZVlQb3NpdGlvbiAmJiB0aGlzLm1vdXNlWFBvc2l0aW9uKSB7XG4gICAgICAgICAgbGV0IGRpZmZYID0gTWF0aC5hYnModGhpcy5tb3VzZVhQb3NpdGlvbiAtIGV2Ll94KTtcbiAgICAgICAgICBsZXQgZGlmZlkgPSBNYXRoLmFicyh0aGlzLm1vdXNlWVBvc2l0aW9uIC0gZXYuX3kpO1xuICAgICAgICAgIGlmIChkaWZmWCA+IDIwIHx8IGRpZmZZID4gMjApIHtcbiAgICAgICAgICAgIHRoaXMuaXNVc2VyRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1VzZXJEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vdXNlWFBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb3VzZVlQb3NpdGlvbiA9IG51bGw7XG4gICAgICB9XG5cblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzVXNlckRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLm1vdXNlWFBvc2l0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBudWxsO1xuICAgIH1cbiAgICAvLyBHZXQgdGhlIHRvb2wncyBldmVudCBoYW5kbGVyLiBcblxuICAgIGlmICh0aGlzLmlzVXNlckRyYWdnaW5nKSB7XG4gICAgICAvLyBIYW5kbGlubmcgdGhlIGNhc2UgZm9yIG1vdmVcbiAgICAgIC8vdGhpcy5zZWxlY3RlZFRvb2wgPSAnbW92ZSc7XG4gICAgICAvLyBzaW5jZSB3ZSBhcmUgbW92aW5nIGFjcm9zcyB0aGUgY2FudmFzLiB3ZSBuZWVkIHRvIHRha2UgaW50byB0aGUgYWNjb3VudCBvZiBzY3JvbGx4IGFuZCBzY3JvbGx5IHZhbHVlc1xuXG4gICAgICAvLy9DSEFOR0UgPz8/XG4gICAgICAvLyBldi5feCA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnggLSB0aGlzLnNjcm9sbFgpO1xuICAgICAgLy8gZXYuX3kgPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi55IC0gdGhpcy5zY3JvbGxZKTtcbiAgICAgIC8vL0NIQU5HRSA/Pz8gTW92ZWQgaW5zaWRlIGNvbmRpdGlvblxuICAgICAgaWYgKCF0aGlzLmRyYWdnaW5nRWxlbWVudCkge1xuICAgICAgICBldi5feCA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnggLSB0aGlzLnNjcm9sbFgpO1xuICAgICAgICBldi5feSA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnkgLSB0aGlzLnNjcm9sbFkpO1xuICAgICAgICAvLyBGaXJzdCBjYXNlIG9mIG1vdmUgdG9vbCAtPiBVc2VyIGp1c3Qgc2VsZWN0ZWQgdGhlIGVsZW1lbnQuZXZlbnRzIHNob3VsZCBiZSBtb3VzZWRvd25cbiAgICAgICAgbGV0IGVsZW1lbnRTZWxlY3RlZCA9IGdldEVsZW1lbnRzQXRQb3NpdGlvbih0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcih0aGlzLm1vdXNlWFBvc2l0aW9uIC0gdGhpcy5zY3JvbGxYKSwgdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IodGhpcy5tb3VzZVlQb3NpdGlvbiAtIHRoaXMuc2Nyb2xsWSksIHRoaXMuc3RhdGUuc2hhcGVzKTtcbiAgICAgICAgaWYgKGVsZW1lbnRTZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFbGVtZW50ID0gZWxlbWVudFNlbGVjdGVkO1xuICAgICAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gc2hhcGUuaWQgIT09IGVsZW1lbnRTZWxlY3RlZC5pZCk7XG4gICAgICAgICAgLy9yZWRyYXdpZyB3aXRob3V0IGVsZW1lbnQgc2VsZWN0ZWRcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVzOiBzaGFwZXMsIHNlbGVjdGVkVG9vbDogJ21vdmUnIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nRWxlbWVudCA9IGVsZW1lbnRTZWxlY3RlZDtcbiAgICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpO1xuICAgICAgICAgICAgLy9tb2RpZnlpZyB0aGUgc2VsZWN0ZWRFbGVtZW50XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0ge1xuICAgICAgICAgICAgICAuLi50aGlzLnNlbGVjdGVkRWxlbWVudCxcbiAgICAgICAgICAgICAgeDogdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC54KSxcbiAgICAgICAgICAgICAgeTogdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC55KSxcbiAgICAgICAgICAgICAgZW5kWDogdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5lbmRYKSxcbiAgICAgICAgICAgICAgZW5kWTogdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5lbmRZKSxcbiAgICAgICAgICAgICAgc3RhcnRYOiB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnN0YXJ0WCksXG4gICAgICAgICAgICAgIHN0YXJ0WTogdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5zdGFydFkpLFxuICAgICAgICAgICAgICByYWRpdXM6IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQucmFkaXVzKSxcbiAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc2VsZWN0ZWRFbGVtZW50LndpZHRoID8gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC53aWR0aCkgOiBudWxsLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmhlaWdodCA/IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuaGVpZ2h0KSA6IG51bGwsXG4gICAgICAgICAgICAgIHNjYWxpbmdGYWN0b3I6IHRoaXMuc3RhdGUuc2NhbGluZ0ZhY3RvclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50b29sID0gbmV3IE1vdmVUb29sKHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCB0aGlzLnRlbXBDb250ZXh0LCB0aGlzLmltZ1VwZGF0ZSwgc2VsZWN0ZWRFbGVtZW50LCB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUpO1xuICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBwcmVzZW50LiB3ZSBuZWVkIHRvIGNhbGwgbW92ZXRvb2xcbiAgICAgICAgICAgIHRoaXMudG9vbFsnbW91c2Vkb3duJ10oZXYpO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyA/PyBcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3VzZVhQb3NpdGlvbiAhPT0gbnVsbCAmJiB0aGlzLm1vdXNlWVBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIC8vIGV2ZW50cyBhcmUgbW91c2Vtb3ZlIG9yIG1vdXNldXAuIE5lZWQgdG8gY2hlY2sgd2hldGhlciB0aGlzIGNvbmRpdGlvbiBpcyByZXF1aXJlZFxuICAgICAgICBpZiAoZXYudHlwZSA9PT0gJ21vdXNlbW92ZScgfHwgZXYudHlwZSA9PT0gJ21vdXNldXAnKSB7XG4gICAgICAgICAgLy8gbW92ZXRvb2wgaW5zdGFjZSBzaG91bGQgYWxyZWFkeSBieSBwcmVzZW50XG4gICAgICAgICAgaWYgKHRoaXMudG9vbCkge1xuICAgICAgICAgICAgdGhpcy50b29sW2V2LnR5cGVdKGV2KTtcbiAgICAgICAgICAgIGlmIChldi50eXBlID09PSAnbW91c2V1cCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1VzZXJEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLm1vdXNlWFBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5tb3VzZVlQb3NpdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudG9vbCkge1xuICAgICAgbGV0IGZ1bmMgPSB0aGlzLnRvb2xbZXYudHlwZV07XG4gICAgICBpZiAoZnVuYykge1xuICAgICAgICBmdW5jKGV2KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVG9vbChlKSB7XG4gICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICB0aGlzLnVwZGF0ZVRvb2woZS5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgfVxuXG4gIGNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihjb29yZHMpIHtcbiAgICByZXR1cm4gY29vcmRzIC8gdGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yO1xuICB9XG5cbiAgY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IoY29vcmRzKSB7XG4gICAgcmV0dXJuIGNvb3JkcyAqIHRoaXMuc3RhdGUuc2NhbGluZ0ZhY3RvcjtcbiAgfVxuXG5cbiAgZHJhd0ltYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2hhcGVzLCB0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCk7XG4gICAgdGhpcy5yZXNldERyYWdnaW5nVmFsdWVzKCk7XG5cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cbiAgICAgIC8vIGlmIHRoZSBhY3Rpb24gaXMgZGVsZXRlIG9yIG1vdmUuIHdlZSBubmVlZCB0byBjYWxsIHJlc2V0RHJhZ2dpbmdWYWx1ZXNcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAnbW92ZScgfHwgdGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wgPT09ICd0ZXh0Jykge1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRUb29sOiAnc2VsZWN0JyB9KTtcbiAgICAgICAgdGhpcy50b29sID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRleHQuZHJhd0ltYWdlKHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCAwLCAwKTtcbiAgICAgICAgLy8vdGhpcy50ZW1wQ29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpO1xuICAgICAgICAvL3RoaXMucmVuZGVyUGFydGljdWxhclNoYXBlKG1vZGlmaWVkSW1hZ2UpO1xuXG4gICAgICAgIC8vIENoYW5naW5nIHRvIHNlbGVjdCB0b29sIG9uY2Ugd2UgaGF2ZSBkcmF3biBhIHNoYXBlIGV4Y2VwdCB0byB0eXBpbmcgdGV4dFxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFRvb2wgIT09ICd0ZXh0Jykge1xuXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVG9vbDogJ3NlbGVjdCcgfSk7XG4gICAgICAgICAgdGhpcy50b29sID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gdGhpcy5yZWRyYXcoKTtcblxuICAgIH0pXG4gIH1cblxuXG4gIGltZ1VwZGF0ZShkcmF3ZW5JbWFnZSkge1xuICAgIGlmIChkcmF3ZW5JbWFnZSAmJiBkcmF3ZW5JbWFnZS50eXBlKSB7XG4gICAgICAvKiogVE9ETzogQ2hhbmdlIHRoaXMgbG9naWMgdG8gb2JqZWN0IGtleSB2YWx1ZSBzdHJ1Y3R1cmUgKi9cblxuICAgICAgbGV0IG1vZGlmaWVkSW1hZ2UgPSB7XG4gICAgICAgIC4uLmRyYXdlbkltYWdlLFxuICAgICAgICB4OiB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS54IC0gdGhpcy5zY3JvbGxYKSxcbiAgICAgICAgeTogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2UueSAtIHRoaXMuc2Nyb2xsWSksXG4gICAgICAgIGVuZFg6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLmVuZFggLSB0aGlzLnNjcm9sbFgpLFxuICAgICAgICBlbmRZOiB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS5lbmRZIC0gdGhpcy5zY3JvbGxZKSxcbiAgICAgICAgc3RhcnRYOiB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS5zdGFydFggLSB0aGlzLnNjcm9sbFgpLFxuICAgICAgICBzdGFydFk6IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGRyYXdlbkltYWdlLnN0YXJ0WSAtIHRoaXMuc2Nyb2xsWSksXG4gICAgICAgIHJhZGl1czogdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2UucmFkaXVzKSxcbiAgICAgICAgd2lkdGg6IGRyYXdlbkltYWdlLndpZHRoID8gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZHJhd2VuSW1hZ2Uud2lkdGgpIDogbnVsbCxcbiAgICAgICAgaGVpZ2h0OiBkcmF3ZW5JbWFnZS5oZWlnaHQgPyB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3RvcihkcmF3ZW5JbWFnZS5oZWlnaHQpIDogbnVsbCxcbiAgICAgICAgc2NhbGluZ0ZhY3RvcjogdGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yXG4gICAgICB9XG4gICAgICBsZXQgZmlsdGVyZWRTaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gc2hhcGUuaWQgIT09IGRyYXdlbkltYWdlLmlkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFwZXM6IFsuLi5maWx0ZXJlZFNoYXBlcywgbW9kaWZpZWRJbWFnZV0gfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLmRyYXdJbWFnZSgpO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoKTtcbiAgICB9XG5cblxuICB9XG5cbiAgcmVkcmF3KCkge1xuICAgIGNvbnNvbGUubG9nKCdyZWRyYXcnKVxuICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC5oZWlnaHQpO1xuICAgIHRoaXMudGVtcENvbnRleHQucmVzdG9yZSgpO1xuICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnOztcbiAgICB0aGlzLnRlbXBDb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjNDI0MjQyXCIgOiAnIzAwMDAwMCc7O1xuXG4gICAgdGhpcy5zdGF0ZS5zaGFwZXMuZm9yRWFjaChzaGFwZSA9PiB7XG4gICAgICBpZiAoc2hhcGUudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFgsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueSkgKyB0aGlzLnNjcm9sbFksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUud2lkdGgpLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLmhlaWdodCkpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICAgIGxldCBoZWFkbGVuID0gMTA7XG4gICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICBsZXQgZW5kWCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUuZW5kWCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgIGxldCBlbmRZID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS5lbmRZKSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgbGV0IGR4ID0gZW5kWCAtIHg7XG4gICAgICAgIGxldCBkeSA9IGVuZFkgLSB5O1xuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHgsIHkpXG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFgsIGVuZFkpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLCBlbmRZIC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZW5kWCwgZW5kWSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksIGVuZFkgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJIC8gNikpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnbGluZScpIHtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8odGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS54KSArIHRoaXMuc2Nyb2xsWCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUuZW5kWCkgKyB0aGlzLnNjcm9sbFgsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUuZW5kWSkgKyB0aGlzLnNjcm9sbFkpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiNGRkZGRkZcIiA6ICcjMDAwMDAwJztcbiAgICAgICAgZHJhd1RleHQoc2hhcGUudGV4dENvbnRlbnQsIHRoaXMudGVtcENvbnRleHQsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFgsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueSkgKyB0aGlzLnNjcm9sbFksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUud2lkdGgpLCB0aGlzLnN0YXRlLmJhc2VMaW5lSGVpZ2h0LCBjb2xvciwgdGhpcy5zdGF0ZS5iYXNlRm9udFNpemUpO1xuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5hcmMoeCwgeSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS5yYWRpdXMpLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgICBsZXQgeENlbnRlciA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3Ioc2hhcGUueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgIGxldCB5Q2VudGVyID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3RvcihzaGFwZS55KSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHNoYXBlLnggLSBzaGFwZS5lbmRYKTtcbiAgICAgICAgZHJhd0RpYW1vbmQoeENlbnRlciwgeUNlbnRlciwgc2l6ZSwgdGhpcy50ZW1wQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIGNsZWFyIHRoZSBwcmVzZW50IGNhbnZhc1xuICAgIHRoaXMubWFpbkNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMubWFpbkNhbnZhcy5jdXJyZW50LndpZHRoLCB0aGlzLm1haW5DYW52YXMuY3VycmVudC5oZWlnaHQpO1xuICAgIHRoaXMubWFpbkNvbnRleHQuZHJhd0ltYWdlKHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCAwLCAwKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnJlc3RvcmUoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTtcbiAgfVxuXG4gIGNoYW5nZVRvVGV4dFRvb2woZXYpIHtcbiAgICBldi5feCA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnggLSB0aGlzLnNjcm9sbFgpO1xuICAgIGV2Ll95ID0gdGhpcy5jaGFuZ2VUb09uZVNjYWxpbmdGYWN0b3IoZXYueSAtIHRoaXMuc2Nyb2xsWSk7XG5cbiAgICBsZXQgZW5jbG9zZWRFbGVtZW50ID0gZ2V0RWxlbWVudHNBdFBvc2l0aW9uKGV2Ll94LCBldi5feSwgdGhpcy5zdGF0ZS5zaGFwZXMpO1xuXG4gICAgLy8gVGVtcG9yYXJpbHkgdXBkYXRpbmcgdG9vbCBtYW51YWxseVxuICAgIC8vdGhpcy51cGRhdGVUb29sKCd0ZXh0JywgZW5jbG9zZWRFbGVtZW50ICYmIGVuY2xvc2VkRWxlbWVudC50eXBlID09PSAndGV4dCcgPyBlbmNsb3NlZEVsZW1lbnQuaWQgOiBudWxsKTtcbiAgICB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFRvb2w6ICd0ZXh0JyB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0RHJhZ2dpbmdWYWx1ZXMoKTtcblxuICAgICAgbGV0IHRleHRJZCA9IG51bGw7XG4gICAgICBpZiAoZW5jbG9zZWRFbGVtZW50ICYmIGVuY2xvc2VkRWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgdGV4dElkID0gZW5jbG9zZWRFbGVtZW50LmlkO1xuICAgICAgICBsZXQgc2hhcGVzID0gdGhpcy5zdGF0ZS5zaGFwZXMuZmlsdGVyKHNoYXBlID0+IHNoYXBlLmlkICE9PSB0aGlzLnNlbGVjdGVkRWxlbWVudC5pZCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFwZXMgfSwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuaWQgKyAxO1xuICAgICAgICB0ZXh0SWQgPSB0aGlzLmlkO1xuICAgICAgfVxuICAgICAgdGhpcy50b29sID0gbmV3IERyYXdUZXh0KHRoaXMudGVtcENhbnZhcy5jdXJyZW50LCB0aGlzLnRlbXBDb250ZXh0LCB0aGlzLmltZ1VwZGF0ZSwgdGV4dElkLCB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUpO1xuICAgICAgLy8gaWYgKGVuY2xvc2VkRWxlbWVudCAmJiBlbmNsb3NlZEVsZW1lbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAvLyAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gc2hhcGUuaWQgIT09IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmlkKTtcbiAgICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlcyB9LCAoKSA9PiB7XG4gICAgICAvLyAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9XG5cbiAgICAgIGxldCBmdW5jID0gdGhpcy50b29sW2V2LnR5cGVdO1xuICAgICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gZnVuYyB3aWxsIGJlIGRiY2xpY2sgaW4gZHJhd3RleHRcbiAgICAgICAgZnVuYyhldiwgZW5jbG9zZWRFbGVtZW50LCB7IHNjcm9sbFg6IHRoaXMuc2Nyb2xsWCwgc2Nyb2xsWTogdGhpcy5zY3JvbGxZLCBzY2FsaW5nRmFjdG9yOiB0aGlzLnN0YXRlLnNjYWxpbmdGYWN0b3IgfSk7XG4gICAgICB9XG4gICAgfSlcblxuXG5cbiAgfVxuXG4gIG9uS2V5RG93bihldikge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3RleHQnKSB7XG4gICAgICAvLyBFYXJseSBSZXR1cm4gYXMgd2UgZG9udCBuZWVkIHRvIGxpc3RlbiB3aGlsZSB0ZXh0YXJlYSBpcyBzaG93blxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKGV2LmtleUNvZGUgPj0gNDggJiYgZXYua2V5Q29kZSA8PSA1NykgfHwgKGV2LmtleUNvZGUgPj0gNjUgJiYgZXYua2V5Q29kZSA8PSA5MCkpIHtcbiAgICAgIC8vIDQ4IC0gNTcgbnVtYmVyIDAgLSA5IGFuZCA2NSAtIDkwIEFscGhhYmV0eXNcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzcGVjaWFsIGtleXMgXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgICAgLy8gQmFja3NwYWNlIG9yIGRlbGV0ZSBrZXlcbiAgICAgICAgaWYgKGV2LndoaWNoID09PSA0NiB8fCBldi53aGljaCA9PT0gOCkge1xuICAgICAgICAgIGxldCBzaGFwZXMgPSB0aGlzLnN0YXRlLnNoYXBlcy5maWx0ZXIoc2hhcGUgPT4gc2hhcGUuaWQgIT09IHRoaXMuc2VsZWN0ZWRFbGVtZW50LmlkKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVzIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Eb2N1bWVudENsaWNrKGV2KSB7XG4gICAgZXYuX3ggPSB0aGlzLmNoYW5nZVRvT25lU2NhbGluZ0ZhY3Rvcihldi54IC0gdGhpcy5zY3JvbGxYKTtcbiAgICBldi5feSA9IHRoaXMuY2hhbmdlVG9PbmVTY2FsaW5nRmFjdG9yKGV2LnkgLSB0aGlzLnNjcm9sbFkpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAndGV4dCcpIHtcbiAgICAgIC8vUmV2ZXJ0dGluZyB0eWhpdXMgaXMgcmVxdWlyZWQuXG5cblxuICAgICAgdGhpcy50b29sWydvbkJsdXInXSgpO1xuICAgICAgLy8gdGhpcy5zZWxlY3RlZFRvb2wgPSAnc2VsZWN0JztcbiAgICAgIC8vIHRoaXMudG9vbCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRUb29sID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQud2lkdGgsIHRoaXMudGVtcENhbnZhcy5jdXJyZW50LmhlaWdodCk7XG4gICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gZ2V0RWxlbWVudHNBdFBvc2l0aW9uKGV2Ll94LCBldi5feSwgdGhpcy5zdGF0ZS5zaGFwZXMpO1xuICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSBzZWxlY3RlZEVsZW1lbnQ7XG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEVsZW1lbnQpO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbNl0pO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh4IC0gNSwgeSAtIDUsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGgpICsgMTAsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuaGVpZ2h0KSArIDEwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAnbGluZScgfHwgdGhpcy5zZWxlY3RlZEVsZW1lbnQudHlwZSA9PT0gJ2Fycm93Jykge1xuICAgICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5zdGFydFgpICsgdGhpcy5zY3JvbGxYO1xuICAgICAgICAgIGxldCB5ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5zdGFydFkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzZdKTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QoeCAtIDUsIHkgLSA1LCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LndpZHRoKSArIDEwLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmhlaWdodCkgKyAxMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEVsZW1lbnQudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueCkgKyB0aGlzLnNjcm9sbFg7XG4gICAgICAgICAgbGV0IHkgPSB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnkpICsgdGhpcy5zY3JvbGxZO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc2V0TGluZURhc2goWzZdKTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuYXJjKHgsIHksIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQucmFkaXVzKSArIDEwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudC50eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgICAgICBsZXQgeCA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRYKSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQuc3RhcnRZKSArIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFs2XSk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHggLSA1LCB5IC0gNSwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC53aWR0aCkgKyAxMCwgdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC5oZWlnaHQpICsgMTApO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRFbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgIGxldCB4ID0gdGhpcy5jaGFuZ2VGcm9tT25lU2NhbGluZ0ZhY3Rvcih0aGlzLnNlbGVjdGVkRWxlbWVudC54KSArIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICBsZXQgeSA9IHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQueSkgKyB0aGlzLnNjcm9sbFk7XG4gICAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbNl0pO1xuICAgICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlUmVjdCh4IC0gNSwgeSAtIDUsIHRoaXMuY2hhbmdlRnJvbU9uZVNjYWxpbmdGYWN0b3IodGhpcy5zZWxlY3RlZEVsZW1lbnQud2lkdGgpLCB0aGlzLmNoYW5nZUZyb21PbmVTY2FsaW5nRmFjdG9yKHRoaXMuc2VsZWN0ZWRFbGVtZW50LmhlaWdodCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25XaGVlbE1vdmUoZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkVG9vbCA9PT0gJ3RleHQnKSB7XG4gICAgICAvLyBEcmF3aW5nIHRleHQgb24gY2FudmFzIGJlZm9yZSBzY3JvbGwgbW92ZVxuICAgICAgdGhpcy50b29sWydvbkJsdXInXSgpO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbFggPSB0aGlzLnNjcm9sbFggLSBlLmRlbHRhWDtcbiAgICB0aGlzLnNjcm9sbFkgPSB0aGlzLnNjcm9sbFkgLSBlLmRlbHRhWTtcbiAgICB0aGlzLnJlZHJhdygpO1xuICB9XG5cbiAgcmVzZXREcmFnZ2luZ1ZhbHVlcygpIHtcbiAgICB0aGlzLmlzVXNlckRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2luZ0VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMubW91c2VYUG9zaXRpb24gPSBudWxsO1xuICAgIHRoaXMubW91c2VZUG9zaXRpb24gPSBudWxsO1xuICB9XG5cblxuICB1cGRhdGVUaGVtZShlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgKHByZXZzdGF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnByZXZzdGF0ZSxcbiAgICAgICAgICBzZWxlY3RlZFRoZW1lOiBwcmV2c3RhdGUuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJ1xuICAgICAgICB9XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnOy8vIERlZmF1bHQgbGluZSBjb2xvci4gXG4gICAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVdpZHRoID0gMS4wOy8vIERlZmF1bHQgc3Ryb2tlIHdlaWdodC4gXG5cbiAgICAgICAgLy8gRmlsbCB0cmFuc3BhcmVudCBjYW52YXMgd2l0aCBkYXJrIGdyZXkgKFNvIHdlIGNhbiB1c2UgdGhlIGNvbG9yIHRvIGVyYXNlKS4gXG4gICAgICAgIHRoaXMudGVtcENvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiM0MjQyNDJcIiA6ICcjRkZGRkZGJztcbiAgICAgICAgdGhpcy50ZW1wQ29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMuY3VycmVudC53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmN1cnJlbnQuaGVpZ2h0KTsvL1RvcCwgTGVmdCwgV2lkdGgsIEhlaWdodCBvZiBjYW52YXNcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgJy0tZm9udC1zaXplJzogYCR7dGhpcy5zdGF0ZS5iYXNlRm9udFNpemV9cHhgLCAnLS1saW5lLWhlaWdodCc6IGAke3RoaXMuc3RhdGUuYmFzZUxpbmVIZWlnaHR9cHhgIH19XG4gICAgICAgIGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyAnZGFyay1tb2RlJyA6ICdsaWdodC1tb2RlJ31gfT5cbiAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIiA+XG4gICAgICAgICAgPGRpdiBpZD1cImJsYWNrYm9hcmRQbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cImRyYXdpbmdDYW52YXNcIiByZWY9e3RoaXMubWFpbkNhbnZhc30gd2lkdGg9e3RoaXMuc3RhdGUuY2FudmFzV2lkdGh9IGhlaWdodD17dGhpcy5zdGF0ZS5jYW52YXNIZWlnaHR9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJub3NjcmlwdFwiPldlJ3JlIHNvcnJ5LCB0aGlzIHdlYiBhcHBsaWNhdGlvbiBpcyBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCB3aXRoIHlvdXIgYnJvd3Nlci4gUGxlYXNlIHVzZVxuICAgICAgICAgICAgICAgIGFuIGFsdGVybmF0ZSBicm93c2VyIG9yIGRvd25sb2FkIGEgc3VwcG9ydGVkIDxiciAvPmJyb3dzZXIuU3VwcG9ydGVkIGJyb3dzZXJzOiA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWVcIj5Hb29nbGUgQ2hyb21lPC9hPiwgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlcmEuY29tXCI+T3BlcmE8L2E+LCA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5tb3ppbGxhLmNvbVwiPkZpcmVmb3g8L2E+LCA8YSBocmVmPVwiaHR0cDovL3d3dy5hcHBsZS5jb20vc2FmYXJpXCI+U2FmYXJpPC9hPiwgPGJyIC8+YW5kIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29ucXVlcm9yLm9yZ1wiPktvbnF1ZXJvcjwvYT4uIEFsc28gbWFrZSBzdXJlIHlvdXIgSmF2YVNjcmlwdCBpcyBlbmFibGVkLjwvcD5cbiAgICAgICAgICAgIDwvY2FudmFzPlxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cInRlbXBDYW52YXNcIiByZWY9e3RoaXMudGVtcENhbnZhc30gd2lkdGg9e3RoaXMuc3RhdGUuY2FudmFzV2lkdGh9IGhlaWdodD17dGhpcy5zdGF0ZS5jYW52YXNIZWlnaHR9PjwvY2FudmFzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U2VsZWN0VG9vbCBzZWxlY3RlZFRvb2w9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUb29sfSB1cGRhdGVUb29sPXt0aGlzLm9uQ2xpY2tUb29sfSAvPlxuICAgICAgICA8Q29uZmlnVG9vbCB0b2dnbGVUaGVtZT17dGhpcy51cGRhdGVUaGVtZX0gLz5cbiAgICAgICAgPFRleHRUb29sIC8+XG4gICAgICAgIDxab29tQ29udGFpbmVyIHpvb21SYW5nZT17dGhpcy5zdGF0ZS5zY2FsaW5nRmFjdG9yfSB6b29tT3V0PXt0aGlzLnpvb21PdXR9IHpvb21Jbj17dGhpcy56b29tSW59IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbXBvbmVudDsiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3RUb29sLmNzcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdFRvb2xMaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV07XG59XG5cblxuZnVuY3Rpb24gU2VsZWN0VG9vbCh7IHNlbGVjdGVkVG9vbCwgdXBkYXRlVG9vbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RUb29sXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdzZWxlY3QnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwic2VsZWN0XCIgb25DbGljaz17dXBkYXRlVG9vbH0+XG5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRjb2xvclwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTExLjk0NzYgMC4yMjg4MjNDMTIuMjUyNyAtMC4wNzYyNzQzIDEyLjc0NzMgLTAuMDc2Mjc0MyAxMy4wNTI0IDAuMjI4ODIzTDE2LjE3NzQgMy4zNTM4MkMxNi40ODI1IDMuNjU4OTIgMTYuNDgyNSA0LjE1MzU4IDE2LjE3NzQgNC40NTg2OEMxNS44NzIzIDQuNzYzNzcgMTUuMzc3NyA0Ljc2Mzc3IDE1LjA3MjYgNC40NTg2OEwxMy4yODEyIDIuNjY3MzVWOC41OTM3NUMxMy4yODEyIDkuMDI1MjIgMTIuOTMxNSA5LjM3NSAxMi41IDkuMzc1QzEyLjA2ODUgOS4zNzUgMTEuNzE4OCA5LjAyNTIyIDExLjcxODggOC41OTM3NVYyLjY2NzM1TDkuOTI3NDMgNC40NTg2OEM5LjYyMjMzIDQuNzYzNzcgOS4xMjc2NyA0Ljc2Mzc3IDguODIyNTcgNC40NTg2OEM4LjUxNzQ4IDQuMTUzNTggOC41MTc0OCAzLjY1ODkyIDguODIyNTcgMy4zNTM4MkwxMS45NDc2IDAuMjI4ODIzWk0xMi41IDE1LjYyNUMxMi45MzE1IDE1LjYyNSAxMy4yODEyIDE1Ljk3NDggMTMuMjgxMiAxNi40MDYyVjIyLjMzMjZMMTUuMDcyNiAyMC41NDEzQzE1LjM3NzcgMjAuMjM2MiAxNS44NzIzIDIwLjIzNjIgMTYuMTc3NCAyMC41NDEzQzE2LjQ4MjUgMjAuODQ2NCAxNi40ODI1IDIxLjM0MTEgMTYuMTc3NCAyMS42NDYyTDEzLjA1MjQgMjQuNzcxMkMxMi43NDczIDI1LjA3NjMgMTIuMjUyNyAyNS4wNzYzIDExLjk0NzYgMjQuNzcxMkw4LjgyMjU3IDIxLjY0NjJDOC41MTc0OCAyMS4zNDExIDguNTE3NDggMjAuODQ2NCA4LjgyMjU3IDIwLjU0MTNDOS4xMjc2NyAyMC4yMzYyIDkuNjIyMzMgMjAuMjM2MiA5LjkyNzQzIDIwLjU0MTNMMTEuNzE4NyAyMi4zMzI2VjE2LjQwNjJDMTEuNzE4NyAxNS45NzQ4IDEyLjA2ODUgMTUuNjI1IDEyLjUgMTUuNjI1WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNMC4yMjg4MjMgMTMuMDUyNEMtMC4wNzYyNzQzIDEyLjc0NzMgLTAuMDc2Mjc0MyAxMi4yNTI3IDAuMjI4ODIzIDExLjk0NzZMMy4zNTM4MiA4LjgyMjU3QzMuNjU4OTIgOC41MTc0OCA0LjE1MzU4IDguNTE3NDggNC40NTg2OCA4LjgyMjU3QzQuNzYzNzcgOS4xMjc2NyA0Ljc2Mzc3IDkuNjIyMzMgNC40NTg2OCA5LjkyNzQzTDIuNjY3MzUgMTEuNzE4OEw4LjU5Mzc1IDExLjcxODhDOS4wMjUyMiAxMS43MTg4IDkuMzc1IDEyLjA2ODUgOS4zNzUgMTIuNUM5LjM3NSAxMi45MzE1IDkuMDI1MjIgMTMuMjgxMyA4LjU5Mzc1IDEzLjI4MTNMMi42NjczNSAxMy4yODEyTDQuNDU4NjggMTUuMDcyNkM0Ljc2Mzc3IDE1LjM3NzcgNC43NjM3NyAxNS44NzIzIDQuNDU4NjggMTYuMTc3NEM0LjE1MzU4IDE2LjQ4MjUgMy42NTg5MiAxNi40ODI1IDMuMzUzODIgMTYuMTc3NEwwLjIyODgyMyAxMy4wNTI0Wk0xNS42MjUgMTIuNUMxNS42MjUgMTIuMDY4NSAxNS45NzQ4IDExLjcxODggMTYuNDA2MiAxMS43MTg4SDIyLjMzMjZMMjAuNTQxMyA5LjkyNzQzQzIwLjIzNjIgOS42MjIzMyAyMC4yMzYyIDkuMTI3NjcgMjAuNTQxMyA4LjgyMjU3QzIwLjg0NjQgOC41MTc0OCAyMS4zNDExIDguNTE3NDggMjEuNjQ2MiA4LjgyMjU3TDI0Ljc3MTIgMTEuOTQ3NkMyNS4wNzYzIDEyLjI1MjcgMjUuMDc2MyAxMi43NDczIDI0Ljc3MTIgMTMuMDUyNEwyMS42NDYyIDE2LjE3NzRDMjEuMzQxMSAxNi40ODI1IDIwLjg0NjQgMTYuNDgyNSAyMC41NDEzIDE2LjE3NzRDMjAuMjM2MiAxNS44NzIzIDIwLjIzNjIgMTUuMzc3NyAyMC41NDEzIDE1LjA3MjZMMjIuMzMyNiAxMy4yODEzSDE2LjQwNjJDMTUuOTc0OCAxMy4yODEzIDE1LjYyNSAxMi45MzE1IDE1LjYyNSAxMi41WlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2wtaWNvbiAke3NlbGVjdGVkVG9vbCA9PT0gJ3JlY3QnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwicmVjdFwiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Y29sb3JcIlxuICAgICAgICAgICAgZD1cIk0yMS44NzUgMS41NjI1QzIyLjczNzkgMS41NjI1IDIzLjQzNzUgMi4yNjIwNiAyMy40Mzc1IDMuMTI1VjIxLjg3NUMyMy40Mzc1IDIyLjczNzkgMjIuNzM3OSAyMy40Mzc1IDIxLjg3NSAyMy40Mzc1SDMuMTI1QzIuMjYyMDYgMjMuNDM3NSAxLjU2MjUgMjIuNzM3OSAxLjU2MjUgMjEuODc1VjMuMTI1QzEuNTYyNSAyLjI2MjA2IDIuMjYyMDYgMS41NjI1IDMuMTI1IDEuNTYyNUgyMS44NzVaTTMuMTI1IDBDMS4zOTkxMSAwIDAgMS4zOTkxMSAwIDMuMTI1VjIxLjg3NUMwIDIzLjYwMDkgMS4zOTkxMSAyNSAzLjEyNSAyNUgyMS44NzVDMjMuNjAwOSAyNSAyNSAyMy42MDA5IDI1IDIxLjg3NVYzLjEyNUMyNSAxLjM5OTExIDIzLjYwMDkgMCAyMS44NzUgMEgzLjEyNVpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdjaXJjbGUnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwiY2lyY2xlXCIgb25DbGljaz17dXBkYXRlVG9vbH0+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Y29sb3JcIlxuICAgICAgICAgICAgZD1cIk0xMi41IDIzLjQzNzVDNi40NTkzOSAyMy40Mzc1IDEuNTYyNSAxOC41NDA2IDEuNTYyNSAxMi41QzEuNTYyNSA2LjQ1OTM5IDYuNDU5MzkgMS41NjI1IDEyLjUgMS41NjI1QzE4LjU0MDYgMS41NjI1IDIzLjQzNzUgNi40NTkzOSAyMy40Mzc1IDEyLjVDMjMuNDM3NSAxOC41NDA2IDE4LjU0MDYgMjMuNDM3NSAxMi41IDIzLjQzNzVaTTEyLjUgMjVDMTkuNDAzNiAyNSAyNSAxOS40MDM2IDI1IDEyLjVDMjUgNS41OTY0NCAxOS40MDM2IDAgMTIuNSAwQzUuNTk2NDQgMCAwIDUuNTk2NDQgMCAxMi41QzAgMTkuNDAzNiA1LjU5NjQ0IDI1IDEyLjUgMjVaXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdG9vbC1pY29uICR7c2VsZWN0ZWRUb29sID09PSAnYXJyb3cnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwiYXJyb3dcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cblxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgMjUgMjVcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNMS41NjI1IDEyLjVDMS41NjI1IDEyLjA2ODUgMS45MTIyOCAxMS43MTg3IDIuMzQzNzUgMTEuNzE4N0gyMC43NzAxTDE1Ljg1MzggNi44MDI0M0MxNS41NDg3IDYuNDk3MzMgMTUuNTQ4NyA2LjAwMjY3IDE1Ljg1MzggNS42OTc1N0MxNi4xNTg5IDUuMzkyNDcgMTYuNjUzNiA1LjM5MjQ3IDE2Ljk1ODcgNS42OTc1N0wyMy4yMDg3IDExLjk0NzZDMjMuNTEzOCAxMi4yNTI3IDIzLjUxMzggMTIuNzQ3MyAyMy4yMDg3IDEzLjA1MjRMMTYuOTU4NyAxOS4zMDI0QzE2LjY1MzYgMTkuNjA3NSAxNi4xNTg5IDE5LjYwNzUgMTUuODUzOCAxOS4zMDI0QzE1LjU0ODcgMTguOTk3MyAxNS41NDg3IDE4LjUwMjcgMTUuODUzOCAxOC4xOTc2TDIwLjc3MDEgMTMuMjgxMkgyLjM0Mzc1QzEuOTEyMjggMTMuMjgxMiAxLjU2MjUgMTIuOTMxNSAxLjU2MjUgMTIuNVpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdsaW5lJyA/ICdzZWxlY3RlZCcgOiAnJ31gfSBpZD1cImxpbmVcIiBvbkNsaWNrPXt1cGRhdGVUb29sfT5cbiAgICAgICAgPHN2ZyBoZWlnaHQ9XCIyNVwiIHdpZHRoPVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCI+XG4gICAgICAgICAgPGxpbmUgeDE9XCIwXCIgeTE9XCIxMFwiIHgyPVwiMjVcIiB5Mj1cIjI1XCIgc3Ryb2tlPVwidmFyKC0taWNvbi1jb2xvcilcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvb2wtaWNvbiAke3NlbGVjdGVkVG9vbCA9PT0gJ2RpYW1vbmQnID8gJ3NlbGVjdGVkJyA6ICcnfWB9IGlkPVwiZGlhbW9uZFwiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Y29sb3JcIlxuICAgICAgICAgICAgZD1cIk0xMC44NjAzIDAuNjc5MTg1QzExLjc2NTkgLTAuMjI2Mzk2IDEzLjIzNDEgLTAuMjI2Mzk0IDE0LjEzOTcgMC42NzkxODZMMjQuMzIwOCAxMC44NjAzQzI1LjIyNjQgMTEuNzY1OSAyNS4yMjY0IDEzLjIzNDEgMjQuMzIwOCAxNC4xMzk3TDE0LjEzOTcgMjQuMzIwOEMxMy4yMzQxIDI1LjIyNjQgMTEuNzY1OSAyNS4yMjY0IDEwLjg2MDMgMjQuMzIwOEwwLjY3OTE4NSAxNC4xMzk3Qy0wLjIyNjM5NiAxMy4yMzQxIC0wLjIyNjM5NCAxMS43NjU5IDAuNjc5MTg2IDEwLjg2MDNMMTAuODYwMyAwLjY3OTE4NVpNMTMuMDQ2NiAxLjc3MjMyQzEyLjc0NDcgMS40NzA0NiAxMi4yNTUzIDEuNDcwNDYgMTEuOTUzNCAxLjc3MjMyTDEuNzcyMzIgMTEuOTUzNEMxLjQ3MDQ2IDEyLjI1NTMgMS40NzA0NiAxMi43NDQ3IDEuNzcyMzIgMTMuMDQ2NkwxMS45NTM0IDIzLjIyNzdDMTIuMjU1MyAyMy41Mjk1IDEyLjc0NDcgMjMuNTI5NSAxMy4wNDY2IDIzLjIyNzdMMjMuMjI3NyAxMy4wNDY2QzIzLjUyOTUgMTIuNzQ0NyAyMy41Mjk1IDEyLjI1NTMgMjMuMjI3NyAxMS45NTM0TDEzLjA0NjYgMS43NzIzMlpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2B0b29sLWljb24gJHtzZWxlY3RlZFRvb2wgPT09ICdjaGFsaycgPyAnc2VsZWN0ZWQnIDogJyd9YH0gaWQ9XCJjaGFsa1wiIG9uQ2xpY2s9e3VwZGF0ZVRvb2x9PlxuXG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxnIGNsaXBQYXRoPVwidXJsKCNjbGlwMF8xMjg3XzM0OTgpXCI+XG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudGNvbG9yXCJcbiAgICAgICAgICAgICAgZD1cIk0xOC45Nzg4IDAuMjI4ODIzQzE5LjI4MzkgLTAuMDc2Mjc0MyAxOS43Nzg2IC0wLjA3NjI3NDMgMjAuMDgzNyAwLjIyODgyM0wyNC43NzEyIDQuOTE2MzJDMjUuMDc2MyA1LjIyMTQyIDI1LjA3NjMgNS43MTYwOCAyNC43NzEyIDYuMDIxMThMOS4xNDYyIDIxLjY0NjJDOS4wNzEzOSAyMS43MjEgOC45ODIxNiAyMS43Nzk4IDguODgzOTIgMjEuODE5MUwxLjA3MTQyIDI0Ljk0NDFDMC43ODEyNTIgMjUuMDYwMiAwLjQ0OTgzMiAyNC45OTIyIDAuMjI4ODQ2IDI0Ljc3MTJDMC4wMDc4NTkyIDI0LjU1MDIgLTAuMDYwMTY3NCAyNC4yMTg4IDAuMDU1OTAwNCAyMy45Mjg2TDMuMTgwOSAxNi4xMTYxQzMuMjIwMTkgMTYuMDE3OSAzLjI3OTAzIDE1LjkyODYgMy4zNTM4NSAxNS44NTM4TDE4Ljk3ODggMC4yMjg4MjNaTTE3LjUxMTEgMy45MDYyNUwyMS4wOTM4IDcuNDg4OUwyMy4xMTM5IDUuNDY4NzVMMTkuNTMxMyAxLjg4NjFMMTcuNTExMSAzLjkwNjI1Wk0xOS45ODg5IDguNTkzNzVMMTYuNDA2MyA1LjAxMTFMNi4yNTAwMiAxNS4xNjc0VjE1LjYyNUg3LjAzMTI3QzcuNDYyNzUgMTUuNjI1IDcuODEyNTIgMTUuOTc0OCA3LjgxMjUyIDE2LjQwNjJWMTcuMTg3NUg4LjU5Mzc3QzkuMDI1MjUgMTcuMTg3NSA5LjM3NTAyIDE3LjUzNzMgOS4zNzUwMiAxNy45Njg4VjE4Ljc1SDkuODMyNjdMMTkuOTg4OSA4LjU5Mzc1Wk00LjczNjk4IDE2LjY4MDRMNC41NzIwOSAxNi44NDUzTDIuMTgzNjYgMjIuODE2NEw4LjE1NDczIDIwLjQyNzlMOC4zMTk2MiAyMC4yNjNDOC4wMjMzOCAyMC4xNTIgNy44MTI1MiAxOS44NjYzIDcuODEyNTIgMTkuNTMxMlYxOC43NUg3LjAzMTI3QzYuNTk5OCAxOC43NSA2LjI1MDAyIDE4LjQwMDIgNi4yNTAwMiAxNy45Njg4VjE3LjE4NzVINS40Njg3N0M1LjEzMzc3IDE3LjE4NzUgNC44NDgwMSAxNi45NzY2IDQuNzM2OTggMTYuNjgwNFpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMF8xMjg3XzM0OThcIj5cbiAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgICAgPC9kZWZzPlxuICAgICAgICA8L3N2Zz5cblxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0VG9vbDsiLCAiY2xhc3MgQXJyb3cge1xuICBjb25zdHJ1Y3Rvcih0ZW1wQ2FudmFzLCB0ZW1wQ29udGV4dCwgY2FsbGJhY2ssIGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbMF0pO1xuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUoZSk7XG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdHlwZTogJ2Fycm93JyxcbiAgICAgICAgeDogdGhpcy5zdGFydFgsXG4gICAgICAgIHk6IHRoaXMuc3RhcnRZLFxuICAgICAgICBzdGFydFg6IE1hdGgubWluKHRoaXMuc3RhcnRYLCBlLl94KSwgLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICBzdGFydFk6IE1hdGgubWluKHRoaXMuc3RhcnRZLCBlLl95KSwvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgIHdpZHRoOiBNYXRoLmFicyh0aGlzLnN0YXJ0WCAtIGUuX3gpLFxuICAgICAgICBoZWlnaHQ6IE1hdGguYWJzKHRoaXMuc3RhcnRZIC0gZS5feSksXG4gICAgICAgIGVuZFg6IGUuX3gsXG4gICAgICAgIGVuZFk6IGUuX3lcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5zdGFydFggPSBlLl94O1xuICAgIHRoaXMuc3RhcnRZID0gZS5feTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgIC8qKiAqL1xuICAgIGxldCBjb3NwaXggPSAwLjg2NjAyNTQwNDtcbiAgICBsZXQgaGVhZGxlbiA9IDEwO1xuICAgIGxldCBkeCA9IGUuX3ggLSB0aGlzLnN0YXJ0WDtcbiAgICBsZXQgZHkgPSBlLl95IC0gdGhpcy5zdGFydFk7XG4gICAgbGV0IGxlbmd0aCA9IE1hdGguc3FydChkeSAqIGR5ICsgZHggKiBkeCk7IC8vbGVuZ3RoIG9mIGFycm93XG4gICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8odGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlLl94LCBlLl95KTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlLl94IC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLCBlLl95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlIC0gTWF0aC5QSSAvIDYpKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyhlLl94LCBlLl95KTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlLl94IC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDYpLCBlLl95IC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZSgpO1xuICAgIHRoaXMudGVtcENvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyb3c7IiwgImNsYXNzIENoYWxrIHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGUuX3gsIGUuX3kpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZS5feCwgZS5feSk7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdXNlVXAoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlKGUpO1xuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYWxrOyIsICJpbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gXCIuLi91dGlscy9nZXRFbGVtZW50c0F0UG9zaXRpb24uanNcIjtcblxuY2xhc3MgQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLnRlbXBDYW52YXMgPSB0ZW1wQ2FudmFzO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0ZW1wQ29udGV4dDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5tb3VzZXVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZWRvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vtb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFswXSk7XG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZShlKTtcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgbGV0IHJhZGl1cyA9IGdldERpc3RhbmNlKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgZS5feCwgZS5feSk7XG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICB4OiB0aGlzLnN0YXJ0WCxcbiAgICAgICAgeTogdGhpcy5zdGFydFksXG4gICAgICAgIHdpZHRoOiByYWRpdXMgKiByYWRpdXMsXG4gICAgICAgIGhlaWdodDogcmFkaXVzICogcmFkaXVzLFxuICAgICAgICBlbmRYOiBlLl94LFxuICAgICAgICBlbmRZOiBlLl95LFxuICAgICAgICByYWRpdXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuX3g7XG4gICAgdGhpcy5zdGFydFkgPSBlLl95O1xuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgbGV0IHJhZGl1cyA9IGdldERpc3RhbmNlKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgZS5feCwgZS5feSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5hcmModGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZTsiLCAiZnVuY3Rpb24gZ2V0RWxlbWVudHNBdFBvc2l0aW9uKHgsIHksIHNoYXBlcykge1xuICBsZXQgcmV0dXJuRWxlbWVudCA9IG51bGw7XG4gIGxldCBkaWZmWCA9IG51bGw7XG4gIGxldCBkaWZmWSA9IG51bGw7XG4gIGlmIChzaGFwZXMubGVuZ3RoID4gMCkge1xuICAgIHNoYXBlcy5mb3JFYWNoKHNoYXBlID0+IHtcbiAgICAgIGlmIChzaGFwZS50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgICBsZXQgd2lkdGggPSBzaGFwZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHNoYXBlLmhlaWdodDtcbiAgICAgICAgbGV0IGVuZFggPSBzaGFwZS54ICsgd2lkdGg7XG4gICAgICAgIGxldCBlbmRZID0gc2hhcGUueSArIGhlaWdodDtcbiAgICAgICAgaWYgKHNoYXBlLnggPD0geCAmJiB4IDw9IGVuZFgpIHtcbiAgICAgICAgICBpZiAoc2hhcGUueSA8PSB5ICYmIHkgPD0gZW5kWSkge1xuICAgICAgICAgICAgaWYgKCFkaWZmWCB8fCAhZGlmZlkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICBkaWZmWCA9IE1hdGgubWluKHggLSBzaGFwZS54LCBlbmRYIC0geCk7XG4gICAgICAgICAgICAgIGRpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnksIGVuZFkgLSB5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50RGlmZlggPSBNYXRoLm1pbih4IC0gc2hhcGUueCwgZW5kWCAtIHgpO1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnksIGVuZFkgLSB5KTtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnREaWZmWCA8IGRpZmZYIHx8IGN1cnJlbnREaWZmWSA8IGRpZmZZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICAgIGRpZmZYID0gY3VycmVudERpZmZYO1xuICAgICAgICAgICAgICAgIGRpZmZZID0gY3VycmVudERpZmZZO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gJ2xpbmUnIHx8IHNoYXBlLnR5cGUgPT09ICdhcnJvdycpIHtcbiAgICAgICAgbGV0IHN0YXJ0aW5nWEJ1ZmZlciA9IHNoYXBlLnggLSAxMDtcbiAgICAgICAgbGV0IGVuZGluZ1hCdWZmZXIgPSBzaGFwZS5lbmRYICsgMTA7XG4gICAgICAgIGxldCBzdGFydGluZ1lCdWZmZXIgPSBzaGFwZS55IC0gMTA7XG4gICAgICAgIGxldCBlbmRpbmdZQnVmZmVyID0gc2hhcGUuZW5kWSArIDEwO1xuXG4gICAgICAgIGxldCBtYXhYID0gTWF0aC5tYXgoc3RhcnRpbmdYQnVmZmVyLCBlbmRpbmdYQnVmZmVyKTtcbiAgICAgICAgbGV0IG1heFkgPSBNYXRoLm1heChzdGFydGluZ1lCdWZmZXIsIGVuZGluZ1lCdWZmZXIpO1xuXG4gICAgICAgIGxldCBtaW5YID0gTWF0aC5taW4oc3RhcnRpbmdYQnVmZmVyLCBlbmRpbmdYQnVmZmVyKTtcbiAgICAgICAgbGV0IG1pblkgPSBNYXRoLm1pbihzdGFydGluZ1lCdWZmZXIsIGVuZGluZ1lCdWZmZXIpO1xuXG4gICAgICAgIGlmIChtaW5YIDw9IHggJiYgeCA8PSBtYXhYKSB7XG4gICAgICAgICAgaWYgKG1pblkgPD0geSAmJiB5IDw9IG1heFkpIHtcbiAgICAgICAgICAgIGlmICghZGlmZlggfHwgIWRpZmZZKSB7XG4gICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgZGlmZlggPSBNYXRoLm1pbih4IC0gbWluWCwgbWF4WCAtIHgpO1xuICAgICAgICAgICAgICBkaWZmWSA9IE1hdGgubWluKHkgLSBtaW5ZLCBtYXhZIC0geSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZYID0gTWF0aC5taW4oeCAtIG1pblgsIG1heFggLSB4KTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJlbnREaWZmWSA9IE1hdGgubWluKHkgLSBtaW5ZLCBtYXhZIC0geSk7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50RGlmZlggPCBkaWZmWCB8fCBjdXJyZW50RGlmZlkgPCBkaWZmWSkge1xuICAgICAgICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgICAgICAgICBkaWZmWCA9IGN1cnJlbnREaWZmWDtcbiAgICAgICAgICAgICAgICBkaWZmWSA9IGN1cnJlbnREaWZmWTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgLy9cbiAgICAgICAgaWYgKHNoYXBlLnggPD0geCAmJiB4IDw9IHNoYXBlLmVuZFgpIHtcbiAgICAgICAgICBpZiAoc2hhcGUueSA8PSB5ICYmIHkgPD0gc2hhcGUuZW5kWSkge1xuICAgICAgICAgICAgaWYgKCFkaWZmWCB8fCAhZGlmZlkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICBkaWZmWCA9IE1hdGgubWluKHggLSBzaGFwZS54LCBzaGFwZS5lbmRYIC0geCk7XG4gICAgICAgICAgICAgIGRpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnksIHNoYXBlLmVuZFkgLSB5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50RGlmZlggPSBNYXRoLm1pbih4IC0gc2hhcGUueCwgc2hhcGUuZW5kWCAtIHgpO1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnksIHNoYXBlLmVuZFkgLSB5KTtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnREaWZmWCA8IGRpZmZYIHx8IGN1cnJlbnREaWZmWSA8IGRpZmZZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICAgIGRpZmZYID0gY3VycmVudERpZmZYO1xuICAgICAgICAgICAgICAgIGRpZmZZID0gY3VycmVudERpZmZZO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgIGxldCBkaXN0YW5jZXNxdWFyZWQgPSAoeCAtIHNoYXBlLngpICogKHggLSBzaGFwZS54KSArICh5IC0gc2hhcGUueSkgKiAoeSAtIHNoYXBlLnkpO1xuICAgICAgICBpZiAoZGlzdGFuY2VzcXVhcmVkIDw9IHNoYXBlLnJhZGl1cyAqIHNoYXBlLnJhZGl1cykge1xuICAgICAgICAgIC8vID8/PyBob3cgdG8gY2FsY3VsYXRlIGRpZmYuIGJ1Z2d5IGJlaGF2aW91clxuICAgICAgICAgIHJldHVybkVsZW1lbnQgPSBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgICAvLyBsZXQgc3RhcnRYID0gc2hhcGUueCAtIChzaGFwZS53aWR0aCAvIDIpO1xuICAgICAgICAvLyBsZXQgc3RhcnRZID0gc2hhcGUueTtcbiAgICAgICAgbGV0IHdpZHRoID0gc2hhcGUud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSBzaGFwZS5oZWlnaHQ7XG4gICAgICAgIGxldCBlbmRYID0gc2hhcGUuc3RhcnRYICsgd2lkdGg7XG4gICAgICAgIGxldCBlbmRZID0gc2hhcGUuc3RhcnRZICsgaGVpZ2h0O1xuICAgICAgICBpZiAoc2hhcGUuc3RhcnRYIDw9IHggJiYgeCA8PSBlbmRYKSB7XG4gICAgICAgICAgaWYgKHNoYXBlLnN0YXJ0WSA8PSB5ICYmIHkgPD0gZW5kWSkge1xuICAgICAgICAgICAgaWYgKCFkaWZmWCB8fCAhZGlmZlkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuRWxlbWVudCA9IHNoYXBlO1xuICAgICAgICAgICAgICBkaWZmWCA9IE1hdGgubWluKHggLSBzaGFwZS5zdGFydFgsIGVuZFggLSB4KTtcbiAgICAgICAgICAgICAgZGlmZlkgPSBNYXRoLm1pbih5IC0gc2hhcGUuc3RhcnRZLCBlbmRZIC0geSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZYID0gTWF0aC5taW4oeCAtIHNoYXBlLnN0YXJ0WCwgZW5kWCAtIHgpO1xuICAgICAgICAgICAgICBsZXQgY3VycmVudERpZmZZID0gTWF0aC5taW4oeSAtIHNoYXBlLnN0YXJ0WSwgZW5kWSAtIHkpO1xuICAgICAgICAgICAgICBpZiAoY3VycmVudERpZmZYIDwgZGlmZlggfHwgY3VycmVudERpZmZZIDwgZGlmZlkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5FbGVtZW50ID0gc2hhcGU7XG4gICAgICAgICAgICAgICAgZGlmZlggPSBjdXJyZW50RGlmZlg7XG4gICAgICAgICAgICAgICAgZGlmZlkgPSBjdXJyZW50RGlmZlk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJldHVybkVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldERpc3RhbmNlKHAxWCwgcDFZLCBwMlgsIHAyWSkge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAxWCAtIHAyWCwgMikgKyBNYXRoLnBvdyhwMVkgLSBwMlksIDIpKVxufVxuXG5cbmV4cG9ydCB7IGdldEVsZW1lbnRzQXRQb3NpdGlvbiwgZ2V0RGlzdGFuY2UgfTsiLCAiaW1wb3J0IHsgZHJhd0RpYW1vbmQgfSBmcm9tIFwiLi4vdXRpbHMvZHJhd1NoYXBlcy5qc1wiO1xuXG5jbGFzcyBEaWFtb25kIHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICAgIHRoaXMud2lkdGggPSBudWxsO1xuICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLnRlbXBDYW52YXMgPSB0ZW1wQ2FudmFzO1xuICAgIHRoaXMudGVtcENvbnRleHQgPSB0ZW1wQ29udGV4dDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5tb3VzZXVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZWRvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vtb3ZlID0gdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LnNldExpbmVEYXNoKFswXSk7XG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZShlKTtcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgbGV0IHdpZHRoID0gKE1hdGguYWJzKHRoaXMuc3RhcnRYIC0gZS5feCkpICogMjtcbiAgICAgIC8vIHdpZHRoIGFuZCBoZWlnaHQgd2lsbCBiZSBzYW1lIGZvciB0aGUgZGlhbW9uZCBcbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdHlwZTogJ2RpYW1vbmQnLFxuICAgICAgICB4OiB0aGlzLnN0YXJ0WCxcbiAgICAgICAgeTogZS5feSxcbiAgICAgICAgc3RhcnRYOiB0aGlzLnN0YXJ0WCAtICh3aWR0aCAvIDIpLFxuICAgICAgICBzdGFydFk6IGUuX3kgLSAod2lkdGggLyAyKSxcbiAgICAgICAgLy8geENlbnRlcjogdGhpcy5zdGFydFgsXG4gICAgICAgIC8vIHlDZW50ZXI6IGUuX3ksXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aWR0aCxcbiAgICAgICAgZW5kWDogZS5feCxcbiAgICAgICAgZW5kWTogZS5feVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKGUpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRYID0gZS5feDtcbiAgICB0aGlzLnN0YXJ0WSA9IGUuX3k7XG4gIH1cblxuICBtb3VzZU1vdmUoZSkge1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIGxldCBzaXplID0gdGhpcy5zdGFydFggLSBlLl94O1xuXG4gICAgICBsZXQgeENlbnRlciA9IHRoaXMuc3RhcnRYO1xuICAgICAgbGV0IHlDZW50ZXIgPSBlLl95O1xuXG5cbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICAvLyB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgLy8gdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oeENlbnRlciArIHNpemUgKiBNYXRoLmNvcygwKSwgeUNlbnRlciArIHNpemUgKiBNYXRoLnNpbigwKSk7XG5cbiAgICAgIC8vIGZvciAodmFyIGkgPSAxOyBpIDw9IG51bWJlck9mU2lkZXM7IGkgKz0gMSkge1xuICAgICAgLy8gICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyh4Q2VudGVyICsgc2l6ZSAqIE1hdGguY29zKGkgKiAyICogTWF0aC5QSSAvIG51bWJlck9mU2lkZXMpLCB5Q2VudGVyICsgc2l6ZSAqIE1hdGguc2luKGkgKiAyICogTWF0aC5QSSAvIG51bWJlck9mU2lkZXMpKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcblxuICAgICAgZHJhd0RpYW1vbmQoeENlbnRlciwgeUNlbnRlciwgc2l6ZSwgdGhpcy50ZW1wQ29udGV4dClcblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFtb25kOyIsICJmdW5jdGlvbiBkcmF3RGlhbW9uZCh4Q2VudGVyLCB5Q2VudGVyLCBzaXplLCBjb250ZXh0KSB7XG4gIGxldCBudW1iZXJPZlNpZGVzID0gNDtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgY29udGV4dC5tb3ZlVG8oeENlbnRlciArIHNpemUgKiBNYXRoLmNvcygwKSwgeUNlbnRlciArIHNpemUgKiBNYXRoLnNpbigwKSk7XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPD0gbnVtYmVyT2ZTaWRlczsgaSArPSAxKSB7XG4gICAgY29udGV4dC5saW5lVG8oeENlbnRlciArIHNpemUgKiBNYXRoLmNvcyhpICogMiAqIE1hdGguUEkgLyBudW1iZXJPZlNpZGVzKSwgeUNlbnRlciArIHNpemUgKiBNYXRoLnNpbihpICogMiAqIE1hdGguUEkgLyBudW1iZXJPZlNpZGVzKSk7XG4gIH1cblxuICBjb250ZXh0LnN0cm9rZSgpO1xufVxuXG5mdW5jdGlvbiBkcmF3VGV4dCh0ZXh0LCBjb250ZXh0LCB4LCB5LCBtYXhXaWR0aCwgbGluZUhlaWdodCA9IDMyLCBjb2xvciwgZm9udFNpemUgPSAyNCkge1xuICBjb250ZXh0LmZvbnQgPSBgbm9ybWFsICR7Zm9udFNpemV9cHgvJHtsaW5lSGVpZ2h0fXB4IENvbWljIFNhbnMgTVNgO1xuICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICBjb250ZXh0LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG4gIGxldCB3b3JkcyA9IHRleHQuc3BsaXQoJycpO1xuICBsZXQgbGluZSA9ICcnO1xuICBsZXQgbnVtYmVyT2ZMaW5lcyA9IDE7XG5cbiAgZm9yIChsZXQgbiA9IDA7IG4gPCB3b3Jkcy5sZW5ndGg7IG4rKykge1xuICAgIGlmICh3b3Jkc1tuXSA9PT0gJ1xcbicpIHtcbiAgICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gICAgICBsaW5lID0gJyc7XG4gICAgICB5ICs9IGxpbmVIZWlnaHQ7XG4gICAgICBudW1iZXJPZkxpbmVzKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxldCB0ZXN0TGluZSA9IGxpbmUgKyB3b3Jkc1tuXSArICcnO1xuICAgICAgLy8gbGV0IG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRlc3RMaW5lKTtcbiAgICAgIC8vIGxldCB0ZXN0V2lkdGggPSBtZXRyaWNzLndpZHRoO1xuICAgICAgLy8gaWYgKHRlc3RXaWR0aCA+IG1heFdpZHRoICYmIG4gPiAwKSB7XG4gICAgICAvLyAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gICAgICAvLyAgIGxpbmUgPSB3b3Jkc1tuXSArICcnO1xuICAgICAgLy8gICB5ICs9IGxpbmVIZWlnaHQ7XG4gICAgICAvLyAgIG51bWJlck9mTGluZXMrKztcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGxpbmUgPSB0ZXN0TGluZTtcbiAgICAgIC8vIH1cbiAgICAgIGxldCB0ZXN0TGluZSA9IGxpbmUgKyB3b3Jkc1tuXSArICcnO1xuICAgICAgbGluZSA9IHRlc3RMaW5lO1xuICAgIH1cblxuICB9XG4gIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gIHJldHVybiBudW1iZXJPZkxpbmVzO1xufVxuXG5cbmV4cG9ydCB7IGRyYXdEaWFtb25kLCBkcmF3VGV4dCB9OyIsICJpbXBvcnQgeyBkcmF3VGV4dCB9IGZyb20gXCIuLi91dGlscy9kcmF3U2hhcGVzLmpzXCI7XG5cbmNsYXNzIERyYXdUZXh0IHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBpZCwgc2VsZWN0ZWRUaGVtZSkge1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmluaXRpYWxUZXh0ID0gJyc7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuZGJsY2xpY2sgPSB0aGlzLm9uZGJsY2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRCb3hDb250YWluZXJJZCcpO1xuICAgIHRoaXMudGV4dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0QXJlYUlkJyk7XG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkVGhlbWUgPSBzZWxlY3RlZFRoZW1lO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMudGV4dEJveC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5vbkJsdXIpO1xuICAgIHRoaXMudGV4dEJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVyKCkge1xuICAgIHRoaXMudGV4dEJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5vbkJsdXIpO1xuICAgIHRoaXMudGV4dEJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gIH1cblxuICBvbkNsaWNrKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLnRleHRCb3gpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEcmF3aW5nIHRleHQnLCB0aGlzLnRleHRCb3guaW5uZXJIVE1MKTtcbiAgICAgIGxldCB0ZXh0ID0gdGhpcy50ZXh0Qm94LmlubmVySFRNTC5yZXBsYWNlKC88ZGl2Pi9nLCBcIlxcblwiKS5yZXBsYWNlKC88XFwvZGl2Pi9nLCBcIlwiKS5yZXBsYWNlKC88YnI+L2csIFwiXFxuXCIpLnJlcGxhY2UoJyZuYnNwOycsICcgJyk7XG4gICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICAgIGxldCBjb2xvciA9IHRoaXMuc2VsZWN0ZWRUaGVtZSA9PT0gJ2RhcmsnID8gXCIjRkZGRkZGXCIgOiAnIzAwMDAwMCc7XG5cblxuXG4gICAgICAvLyBUT0RPOiBSZXBsYWNlIHVuZGVmaW5lZCB3aXRoIGV4YWN0IGxpbmUgaGVpZ2h0XG4gICAgICBsZXQgdGV4dGFyZWFTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMudGV4dEJveCk7XG4gICAgICBsZXQgdGV0eHRhcmVhQ2xpZW50U3R5bGUgPSB0aGlzLnRleHRCb3guZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zb2xlLmxvZyh0ZXh0YXJlYVN0eWxlKTtcbiAgICAgIGxldCB3aWR0aCA9IE1hdGguY2VpbChOdW1iZXIodGV4dGFyZWFTdHlsZS53aWR0aC5zbGljZSgwLCAtMikpKTtcbiAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmNlaWwoTnVtYmVyKHRleHRhcmVhU3R5bGUuaGVpZ2h0LnNsaWNlKDAsIC0yKSkpO1xuICAgICAgY29uc29sZS5sb2cod2lkdGgpO1xuICAgICAgLy9sZXQgbnVtYmVyT2ZMaW5lcyA9IGRyYXdUZXh0KHRleHQsIHRoaXMudGVtcENvbnRleHQsIHRldHh0YXJlYUNsaWVudFN0eWxlLngsIHRldHh0YXJlYUNsaWVudFN0eWxlLnksIE1hdGguY2VpbCh3aWR0aCksIHVuZGVmaW5lZCwgY29sb3IsIHRoaXMuYmFzZUZvbnRTaXplKTtcblxuXG4gICAgICAvL2xldCB0ZXh0TWV0cmljcyA9IHRoaXMudGVtcENvbnRleHQubWVhc3VyZVRleHQodGV4dCk7XG5cbiAgICAgIC8vIEFkZGluZyBidWZmZXIgMTAgdG8gdGhlIGhlaWdodCBhbmQgd2lkdGggdmFsdWVzXG4gICAgICAvL2xldCBoZWlnaHQgPSBNYXRoLmFicyh0ZXh0TWV0cmljcy5mb250Qm91bmRpbmdCb3hBc2NlbnQpICsgTWF0aC5hYnModGV4dE1ldHJpY3MuZm9udEJvdW5kaW5nQm94RGVzY2VudCkgKyAxMDtcbiAgICAgIC8vbGV0IHdpZHRoID0gTWF0aC5hYnModGV4dE1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hMZWZ0KSArIE1hdGguYWJzKHRleHRNZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94UmlnaHQpICsgMTA7XG4gICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgeDogdGV0eHRhcmVhQ2xpZW50U3R5bGUubGVmdCxcbiAgICAgICAgeTogdGV0eHRhcmVhQ2xpZW50U3R5bGUudG9wLFxuICAgICAgICB0ZXh0Q29udGVudDogdGV4dCxcbiAgICAgICAgaW5uZXJIdG1sOiB0aGlzLnRleHRCb3guaW5uZXJIVE1MLFxuICAgICAgICBlbmRYOiB0aGlzLnN0YXJ0WCArIHdpZHRoLFxuICAgICAgICBlbmRZOiB0aGlzLnN0YXJ0WSArIGhlaWdodCxcbiAgICAgICAgLy93aWR0aDogTWF0aC5hYnModGV4dE1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hMZWZ0KSArIE1hdGguYWJzKHRleHRNZXRyaWNzLmFjdHVhbEJvdW5kaW5nQm94UmlnaHQpLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9KTtcblxuICAgICAgLy8gcmVzZXR0aW5nIHRoZSB0ZXh0YXJlYSB2YWx1ZXNcbiAgICAgIC8vIHRoaXMudGV4dEJveC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5vbkJsdXIpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUubWluV2lkdGggPSAnMXB4JztcbiAgICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSAnNDJweCc7XG4gICAgICB0aGlzLnRleHRCb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLnRleHRCb3hDb250YWluZXIgPSBudWxsO1xuICAgICAgdGhpcy50ZXh0Qm94ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvbmRibGNsaWNrKGV2LCBlbmNsb3NlZEVsZW1lbnQsIHsgc2Nyb2xsWCwgc2Nyb2xsWSwgc2NhbGluZ0ZhY3RvciB9KSB7XG4gICAgLy8gVE9ETzogQ3VycmVudGx5IGltcGxlbWVudGVkIGZvciByZWN0YW5nbGUgZW5jbG9zZWQgZWxlbWVudC4gQ2hlY2sgcG9zc2liaWxpdHkgZm9yIGFsbCBvdGhlciBzaGFwZXNcbiAgICB0aGlzLnN0YXJ0WCA9IGV2Lng7XG4gICAgdGhpcy5zdGFydFkgPSBldi55O1xuICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtldi55fXB4YDtcbiAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUubGVmdCA9IGAke2V2Lnh9cHhgO1xuICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLnRleHRCb3guZm9jdXMoKTtcblxuICAgIGlmIChlbmNsb3NlZEVsZW1lbnQpIHtcbiAgICAgIGlmIChlbmNsb3NlZEVsZW1lbnQudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgICAgLy8gdG8gaGF2ZSBlcXVpIHNwYWNlIGFyb3VuZCB0aGUgaG9yaXpvbnRhbCBlZGdlXG4gICAgICAgIC8vIGxldCBkaWZmWCA9IE1hdGguYWJzKE1hdGguYWJzKGVuY2xvc2VkRWxlbWVudC54ICogc2NhbGluZ0ZhY3RvcikgLSBNYXRoLmFicyhldi5feCkpO1xuICAgICAgICAvLyBsZXQgZW5jbG9zZWRYID0gTWF0aC5hYnMoTWF0aC5hYnMoZW5jbG9zZWRFbGVtZW50LmVuZFggKiBzY2FsaW5nRmFjdG9yKSAtIGRpZmZYKTtcbiAgICAgICAgLy8gbGV0IGRpZmZZID0gTWF0aC5hYnMoTWF0aC5hYnMoZW5jbG9zZWRFbGVtZW50LnkgKiBzY2FsaW5nRmFjdG9yKSAtIE1hdGguYWJzKGV2Ll95KSk7XG4gICAgICAgIC8vIGxldCBlbmNsb3NlZFkgPSBNYXRoLmFicyhNYXRoLmFicyhlbmNsb3NlZEVsZW1lbnQuZW5kWSAqIHNjYWxpbmdGYWN0b3IpIC0gZGlmZlkpO1xuXG4gICAgICAgIC8vIHRoaXMud2lkdGggPSBgJHtNYXRoLmFicyhlbmNsb3NlZFggLSBldi5feCl9YDtcbiAgICAgICAgLy8gdGhpcy5oZWlnaHQgPSBgJHtNYXRoLmFicyhlbmNsb3NlZFkgLSBldi5feSl9YDtcblxuICAgICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0gZWxzZSBpZiAoZW5jbG9zZWRFbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUudG9wID0gYCR7ZW5jbG9zZWRFbGVtZW50LnkgKiBzY2FsaW5nRmFjdG9yICsgc2Nyb2xsWX1weGA7XG4gICAgICAgIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7ZW5jbG9zZWRFbGVtZW50LnggKiBzY2FsaW5nRmFjdG9yICsgc2Nyb2xsWH1weGA7XG4gICAgICAgIHRoaXMudGV4dEJveC5pbm5lckhUTUwgPSBlbmNsb3NlZEVsZW1lbnQuaW5uZXJIdG1sO1xuICAgICAgICB0aGlzLndpZHRoID0gZW5jbG9zZWRFbGVtZW50LndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGVuY2xvc2VkRWxlbWVudC5oZWlnaHQ7XG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5zZWxlY3RBbGxDaGlsZHJlbih0aGlzLnRleHRCb3gpXG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5jb2xsYXBzZVRvRW5kKCk7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRYID0gZW5jbG9zZWRFbGVtZW50Lng7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRZID0gZW5jbG9zZWRFbGVtZW50Lnk7XG4gICAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVE9ETzogdG8gaGF2ZSBlcXVpIHNwYWNlIGFyb3VuZCB0aGUgaG9yaXpvbnRhbCBlZGdlXG5cbiAgICAgICAgLy8gdGhpcy53aWR0aCA9IGAke01hdGguYWJzKHRoaXMudGVtcENhbnZhcy53aWR0aCAtIGV2LngpIC0gMTB9YDtcbiAgICAgICAgLy8gdGhpcy5oZWlnaHQgPSBgJHtNYXRoLmFicyh0aGlzLnRlbXBDYW52YXMuaGVpZ2h0IC0gZXYueSkgLSAxMH1gO1xuICAgICAgICAvLyB0aGlzLnRleHRCb3hDb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IEltcGxlbWVudCBmb3IgYWxsIHNoYXBlc1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPOiB0byBoYXZlIGVxdWkgc3BhY2UgYXJvdW5kIHRoZSBob3Jpem9udGFsIGVkZ2VcblxuICAgICAgLy8gdGhpcy53aWR0aCA9IGAke01hdGguYWJzKHRoaXMudGVtcENhbnZhcy53aWR0aCAtIGV2LngpIC0gMTB9YDtcbiAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gYCR7TWF0aC5hYnModGhpcy50ZW1wQ2FudmFzLmhlaWdodCAtIGV2LnkpIC0gMTB9YDtcbiAgICAgIC8vIHRoaXMudGV4dEJveENvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgLy8gdGhpcy50ZXh0Qm94Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd1RleHQ7IiwgImNsYXNzIExpbmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wQ2FudmFzLCB0ZW1wQ29udGV4dCwgY2FsbGJhY2ssIGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbMF0pOyAvLyBjbGVhcmlnIGxpbmUgZGFzaGVkXG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZShlKTtcbiAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIHg6IHRoaXMuc3RhcnRYLFxuICAgICAgICB5OiB0aGlzLnN0YXJ0WSxcbiAgICAgICAgc3RhcnRYOiBNYXRoLm1pbih0aGlzLnN0YXJ0WCwgZS5feCksIC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgc3RhcnRZOiBNYXRoLm1pbih0aGlzLnN0YXJ0WSwgZS5feSksLy8gZm9yIGRyYXdpbmcgcmVjdGFuZ2xlIGFyb3VuZCBhcnJvdy4gRGVsZXRpb24gcHVycG9zZVxuICAgICAgICB3aWR0aDogTWF0aC5hYnModGhpcy5zdGFydFggLSBlLl94KSwgLy8gQ2hlY2sgaWYgaXQgaXMgd3JvbmcgY2FsY3VsYXRpb24uXG4gICAgICAgIGhlaWdodDogTWF0aC5hYnModGhpcy5zdGFydFkgLSBlLl95KSwgLy9DaGVjayBpZiBpdCBpcyB3cm9uZyBjYWxjdWxhdGlvblxuICAgICAgICBlbmRYOiBlLl94LFxuICAgICAgICBlbmRZOiBlLl95XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMuc3RhcnRYID0gZS5feDtcbiAgICB0aGlzLnN0YXJ0WSA9IGUuX3k7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG1vdXNlTW92ZShlKSB7XG4gICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8oZS5feCwgZS5feSk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmU7IiwgImltcG9ydCB7IGRyYXdEaWFtb25kLCBkcmF3VGV4dCB9IGZyb20gXCIuLi91dGlscy9kcmF3U2hhcGVzLmpzXCI7XG5cbmNsYXNzIE1vdmVUb29sIHtcbiAgY29uc3RydWN0b3IodGVtcENhbnZhcywgdGVtcENvbnRleHQsIGNhbGxiYWNrLCBlbGVtZW50LCB0aGVtZSkge1xuICAgIHRoaXMuaWQgPSBlbGVtZW50LmlkO1xuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIHRoaXMudGVtcENhbnZhcyA9IHRlbXBDYW52YXM7XG4gICAgdGhpcy50ZW1wQ29udGV4dCA9IHRlbXBDb250ZXh0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm1vdXNldXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlZG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zZWxlY3RlZFRoZW1lID0gdGhlbWU7XG4gICAgLy90aGlzLmRyYXdFeGlzaXRpbmdFbGVtZW50T25UZW1wKCk7XG4gIH1cblxuICBtb3VzZURvd24oZSkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSBlLl94O1xuICAgIHRoaXMuc3RhcnRZID0gZS5feTtcbiAgICAvLyBUZW1wIENoZWNrLiBOZWVkIHRvIGFkb3B0IHRvIGFsbCB0aGlzLmVsZW1lbnRzLiBkb2luZyB0aGlzIGZvciByZWN0YW5nbGUgY2hlY2sgaW5pdGlhbC5cbiAgICB0aGlzLmRpZmZYID0gTWF0aC5hYnModGhpcy5lbGVtZW50LnggLSB0aGlzLnN0YXJ0WCk7XG4gICAgdGhpcy5kaWZmWSA9IE1hdGguYWJzKHRoaXMuZWxlbWVudC55IC0gZS55KTtcbiAgICB0aGlzLmRyYXdFeGlzaXRpbmdFbGVtZW50T25UZW1wKCk7XG4gIH1cblxuICBtb3VzZVVwKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMubW91c2VNb3ZlKGUpO1xuICAgICAgLy8gRm9yIHJlY3RhbmdsZVxuICAgICAgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgICBpZDogdGhpcy5lbGVtZW50LmlkLFxuICAgICAgICAgIHR5cGU6ICdyZWN0YW5nbGUnLFxuICAgICAgICAgIHg6IGUuX3gsXG4gICAgICAgICAgeTogZS5feSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtZW50LndpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtZW50LmhlaWdodCxcbiAgICAgICAgICBlbmRYOiBlLl94LFxuICAgICAgICAgIGVuZFk6IGUuX3lcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICAgIGxldCBlbmRYID0gdGhpcy5lbGVtZW50LmVuZFggPiB0aGlzLmVsZW1lbnQueCA/IGUuX3ggKyB0aGlzLmVsZW1lbnQud2lkdGggOiBlLl94IC0gdGhpcy5lbGVtZW50LndpZHRoO1xuICAgICAgICBsZXQgZW5kWSA9IHRoaXMuZWxlbWVudC5lbmRZID4gdGhpcy5lbGVtZW50LnkgPyBlLl95ICsgdGhpcy5lbGVtZW50LmhlaWdodCA6IGUuX3kgLSB0aGlzLmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICB0eXBlOiAnYXJyb3cnLFxuICAgICAgICAgIHg6IGUuX3gsXG4gICAgICAgICAgeTogZS5feSxcbiAgICAgICAgICBzdGFydFg6IE1hdGgubWluKGVuZFgsIGUuX3gpLCAvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgICAgc3RhcnRZOiBNYXRoLm1pbihlbmRZLCBlLl95KSwvLyBmb3IgZHJhd2luZyByZWN0YW5nbGUgYXJvdW5kIGFycm93LiBEZWxldGlvbiBwdXJwb3NlXG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxlbWVudC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbWVudC5oZWlnaHQsXG4gICAgICAgICAgZW5kWCxcbiAgICAgICAgICBlbmRZXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIGxldCBlbmRYID0gdGhpcy5lbGVtZW50LmVuZFggPiB0aGlzLmVsZW1lbnQueCA/IGUuX3ggKyB0aGlzLmVsZW1lbnQud2lkdGggOiBlLl94IC0gdGhpcy5lbGVtZW50LndpZHRoO1xuICAgICAgICBsZXQgZW5kWSA9IHRoaXMuZWxlbWVudC5lbmRZID4gdGhpcy5lbGVtZW50LnkgPyBlLl95ICsgdGhpcy5lbGVtZW50LmhlaWdodCA6IGUuX3kgLSB0aGlzLmVsZW1lbnQuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgeDogZS5feCxcbiAgICAgICAgICB5OiBlLl95LFxuICAgICAgICAgIHN0YXJ0WDogTWF0aC5taW4oZS5feCwgZW5kWCksIC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgICBzdGFydFk6IE1hdGgubWluKGUuX3ksIGVuZFkpLC8vIGZvciBkcmF3aW5nIHJlY3RhbmdsZSBhcm91bmQgYXJyb3cuIERlbGV0aW9uIHB1cnBvc2VcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtZW50LndpZHRoLCAvLyBDaGVjayBpZiBpdCBpcyB3cm9uZyBjYWxjdWxhdGlvbi5cbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbWVudC5oZWlnaHQsIC8vQ2hlY2sgaWYgaXQgaXMgd3JvbmcgY2FsY3VsYXRpb25cbiAgICAgICAgICBlbmRYLFxuICAgICAgICAgIGVuZFlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrKHtcbiAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgICB4OiBlLl94LFxuICAgICAgICAgIHk6IGUuX3ksXG4gICAgICAgICAgcmFkaXVzOiB0aGlzLmVsZW1lbnQucmFkaXVzLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1lbnQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1lbnQuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgIHR5cGU6ICdkaWFtb25kJyxcbiAgICAgICAgICB4OiBlLl94LFxuICAgICAgICAgIHk6IGUuX3ksXG4gICAgICAgICAgc3RhcnRYOiBlLl94IC0gKHRoaXMuZWxlbWVudC53aWR0aCAvIDIpLFxuICAgICAgICAgIHN0YXJ0WTogZS5feSAtICh0aGlzLmVsZW1lbnQud2lkdGggLyAyKSxcbiAgICAgICAgICAvLyB4Q2VudGVyOiB0aGlzLnN0YXJ0WCxcbiAgICAgICAgICAvLyB5Q2VudGVyOiBlLl95LFxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1lbnQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1lbnQuaGVpZ2h0LFxuICAgICAgICAgIGVuZFg6IGUuX3ggKyAodGhpcy5lbGVtZW50LndpZHRoIC8gMiksXG4gICAgICAgICAgZW5kWTogZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHg6IGUuX3gsXG4gICAgICAgICAgeTogZS5feSxcbiAgICAgICAgICB0ZXh0Q29udGVudDogdGhpcy5lbGVtZW50LnRleHRDb250ZW50LFxuICAgICAgICAgIGVuZFg6IGUuX3ggKyBOdW1iZXIodGhpcy5lbGVtZW50LndpZHRoKSxcbiAgICAgICAgICBlbmRZOiBlLl95ICsgdGhpcy5lbGVtZW50LmhlaWdodCxcbiAgICAgICAgICAvL3dpZHRoOiBNYXRoLmFicyh0ZXh0TWV0cmljcy5hY3R1YWxCb3VuZGluZ0JveExlZnQpICsgTWF0aC5hYnModGV4dE1ldHJpY3MuYWN0dWFsQm91bmRpbmdCb3hSaWdodCksXG4gICAgICAgICAgd2lkdGg6IE51bWJlcih0aGlzLmVsZW1lbnQud2lkdGgpLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtZW50LmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ3JlY3RhbmdsZScpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QoZS5feCwgZS5feSwgdGhpcy5lbGVtZW50LndpZHRoLCB0aGlzLmVsZW1lbnQuaGVpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgbGV0IGhlYWRsZW4gPSAxMDtcbiAgICAgIGxldCBkaWZmWCA9IE1hdGguYWJzKHRoaXMuZWxlbWVudC54IC0gZS5feCk7XG4gICAgICBsZXQgZGlmZlkgPSBNYXRoLmFicyh0aGlzLmVsZW1lbnQueSAtIGUuX3kpO1xuICAgICAgbGV0IHggPSB0aGlzLmVsZW1lbnQueCArIGRpZmZYO1xuICAgICAgbGV0IHkgPSB0aGlzLmVsZW1lbnQueSArIGRpZmZZO1xuICAgICAgbGV0IGVuZFg7XG4gICAgICBsZXQgZW5kWTtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuZW5kWCA+IHRoaXMuZWxlbWVudC54KSB7XG4gICAgICAgIGVuZFggPSBlLl94ICsgdGhpcy5lbGVtZW50LndpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kWCA9IGUuX3ggLSB0aGlzLmVsZW1lbnQud2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuZW5kWSA+IHRoaXMuZWxlbWVudC55KSB7XG4gICAgICAgIGVuZFkgPSBlLl95ICsgdGhpcy5lbGVtZW50LmhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFkgPSBlLl95IC0gdGhpcy5lbGVtZW50LmhlaWdodDtcbiAgICAgIH1cblxuXG4gICAgICBsZXQgZHggPSBlbmRYIC0geDtcbiAgICAgIGxldCBkeSA9IGVuZFkgLSB5O1xuICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKGUuX3gsIGUuX3kpXG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYLCBlbmRZKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKGVuZFggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgLSBNYXRoLlBJIC8gNiksIGVuZFkgLSBoZWFkbGVuICogTWF0aC5zaW4oYW5nbGUgLSBNYXRoLlBJIC8gNikpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZW5kWCwgZW5kWSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSAvIDYpLCBlbmRZIC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdsaW5lJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy50ZW1wQ2FudmFzLndpZHRoLCB0aGlzLnRlbXBDYW52YXMuaGVpZ2h0KTtcbiAgICAgIGxldCBlbmRYO1xuICAgICAgbGV0IGVuZFk7XG4gICAgICBpZiAodGhpcy5lbGVtZW50LmVuZFggPiB0aGlzLmVsZW1lbnQueCkge1xuICAgICAgICBlbmRYID0gZS5feCArIHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFggPSBlLl94IC0gdGhpcy5lbGVtZW50LndpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50LmVuZFkgPiB0aGlzLmVsZW1lbnQueSkge1xuICAgICAgICBlbmRZID0gZS5feSArIHRoaXMuZWxlbWVudC5oZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRZID0gZS5feSAtIHRoaXMuZWxlbWVudC5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8oZS5feCwgZS5feSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyhlbmRYLCBlbmRZKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYXJjKGUuX3gsIGUuX3ksIHRoaXMuZWxlbWVudC5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuICAgICAgZHJhd0RpYW1vbmQoZS5feCwgZS5feSwgdGhpcy5lbGVtZW50LndpZHRoIC8gMiwgdGhpcy50ZW1wQ29udGV4dClcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMudGVtcENhbnZhcy53aWR0aCwgdGhpcy50ZW1wQ2FudmFzLmhlaWdodCk7XG4gICAgICBsZXQgY29sb3IgPSB0aGlzLnNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJyA/IFwiI0ZGRkZGRlwiIDogJyMwMDAwMDAnO1xuICAgICAgZHJhd1RleHQodGhpcy5lbGVtZW50LnRleHRDb250ZW50LCB0aGlzLnRlbXBDb250ZXh0LCBlLl94LCBlLl95LCB0aGlzLmVsZW1lbnQud2lkdGgsIHVuZGVmaW5lZCwgY29sb3IpXG4gICAgfVxuICB9XG5cblxuXG5cbiAgZHJhd0V4aXNpdGluZ0VsZW1lbnRPblRlbXAoKSB7XG4gICAgLy8gIHR5cGUgPT09ICdyZWN0YW5nbGUnXG4gICAgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAncmVjdGFuZ2xlJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2VSZWN0KHRoaXMuZWxlbWVudC54LCB0aGlzLmVsZW1lbnQueSwgdGhpcy5lbGVtZW50LndpZHRoLCB0aGlzLmVsZW1lbnQuaGVpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC50eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICBsZXQgaGVhZGxlbiA9IDEwO1xuICAgICAgbGV0IGR4ID0gdGhpcy5lbGVtZW50LmVuZFggLSB0aGlzLmVsZW1lbnQueDtcbiAgICAgIGxldCBkeSA9IHRoaXMuZWxlbWVudC5lbmRZIC0gdGhpcy5lbGVtZW50Lnk7XG4gICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5tb3ZlVG8odGhpcy5lbGVtZW50LngsIHRoaXMuZWxlbWVudC55KVxuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8odGhpcy5lbGVtZW50LmVuZFgsIHRoaXMuZWxlbWVudC5lbmRZKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubGluZVRvKHRoaXMuZWxlbWVudC5lbmRYIC0gaGVhZGxlbiAqIE1hdGguY29zKGFuZ2xlIC0gTWF0aC5QSSAvIDYpLCB0aGlzLmVsZW1lbnQuZW5kWSAtIGhlYWRsZW4gKiBNYXRoLnNpbihhbmdsZSAtIE1hdGguUEkgLyA2KSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0Lm1vdmVUbyh0aGlzLmVsZW1lbnQuZW5kWCwgdGhpcy5lbGVtZW50LmVuZFkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5saW5lVG8odGhpcy5lbGVtZW50LmVuZFggLSBoZWFkbGVuICogTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJIC8gNiksIHRoaXMuZWxlbWVudC5lbmRZIC0gaGVhZGxlbiAqIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSAvIDYpKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICdsaW5lJykge1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQubW92ZVRvKHRoaXMuZWxlbWVudC54LCB0aGlzLmVsZW1lbnQueSk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmxpbmVUbyh0aGlzLmVsZW1lbnQuZW5kWCwgdGhpcy5lbGVtZW50LmVuZFkpO1xuICAgICAgdGhpcy50ZW1wQ29udGV4dC5zdHJva2UoKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmFyYyh0aGlzLmVsZW1lbnQueCwgdGhpcy5lbGVtZW50LnksIHRoaXMuZWxlbWVudC5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgIHRoaXMudGVtcENvbnRleHQuc3Ryb2tlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQudHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICBsZXQgeENlbnRlciA9IHRoaXMuZWxlbWVudC54O1xuICAgICAgbGV0IHlDZW50ZXIgPSB0aGlzLmVsZW1lbnQueTtcbiAgICAgIGxldCBzaXplID0gdGhpcy5lbGVtZW50LnggLSB0aGlzLmVsZW1lbnQuZW5kWDtcbiAgICAgIGRyYXdEaWFtb25kKHhDZW50ZXIsIHlDZW50ZXIsIHNpemUsIHRoaXMudGVtcENvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgbGV0IGNvbG9yID0gdGhpcy5zZWxlY3RlZFRoZW1lID09PSAnZGFyaycgPyBcIiNGRkZGRkZcIiA6ICcjMDAwMDAwJztcbiAgICAgIGRyYXdUZXh0KHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCwgdGhpcy50ZW1wQ29udGV4dCwgdGhpcy5lbGVtZW50LngsIHRoaXMuZWxlbWVudC55LCB0aGlzLmVsZW1lbnQud2lkdGgsIHVuZGVmaW5lZCwgY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZlVG9vbDsiLCAiY2xhc3MgUmVjdCB7XG4gIGNvbnN0cnVjdG9yKHRlbXBDYW52YXMsIHRlbXBDb250ZXh0LCBjYWxsYmFjaywgaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICB0aGlzLmhlaWdodCA9IG51bGw7XG4gICAgdGhpcy50ZW1wQ2FudmFzID0gdGVtcENhbnZhcztcbiAgICB0aGlzLnRlbXBDb250ZXh0ID0gdGVtcENvbnRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubW91c2V1cCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW91c2Vkb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdXNlbW92ZSA9IHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZW1wQ29udGV4dC5zZXRMaW5lRGFzaChbMF0pO1xuICB9XG5cbiAgbW91c2VVcChlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUoZSk7XG4gICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FsbGJhY2soe1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgdHlwZTogJ3JlY3RhbmdsZScsXG4gICAgICAgIHg6IE1hdGgubWluKHRoaXMuc3RhcnRYLCBlLl94KSxcbiAgICAgICAgeTogTWF0aC5taW4odGhpcy5zdGFydFksIGUuX3kpLFxuICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgZW5kWDogTWF0aC5tYXgodGhpcy5zdGFydFgsIGUuX3gpLFxuICAgICAgICBlbmRZOiBNYXRoLm1heCh0aGlzLnN0YXJ0WSwgZS5feSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0WCA9IGUuX3g7XG4gICAgdGhpcy5zdGFydFkgPSBlLl95O1xuICB9XG5cbiAgbW91c2VNb3ZlKGUpIHtcbiAgICBpZiAodGhpcy5zdGFydGVkKSB7XG4gICAgICBsZXQgeCA9IE1hdGgubWluKGUuX3gsIHRoaXMuc3RhcnRYKTtcbiAgICAgIGxldCB5ID0gTWF0aC5taW4oZS5feSwgdGhpcy5zdGFydFkpO1xuICAgICAgbGV0IHdpZHRoID0gTWF0aC5hYnMoZS5feCAtIHRoaXMuc3RhcnRYKTtcbiAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmFicyhlLl95IC0gdGhpcy5zdGFydFkpO1xuXG4gICAgICB0aGlzLnRlbXBDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnRlbXBDYW52YXMud2lkdGgsIHRoaXMudGVtcENhbnZhcy5oZWlnaHQpO1xuXG4gICAgICBpZiAoIXdpZHRoIHx8ICFoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLnRlbXBDb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3Q7IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dFRvb2wuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRleHRUb29sTGlua3MoKSB7XG4gIHJldHVybiBbeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH1dXG59XG5cbmZ1bmN0aW9uIFRleHRUb29sKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX0gY2xhc3NOYW1lPVwidGV4dFRvb2xcIiBpZD1cInRleHRCb3hDb250YWluZXJJZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0YXJlYVwiIGlkPVwidGV4dEFyZWFJZFwiIHJvbGU9XCJ0ZXh0Ym94XCIgY29udGVudEVkaXRhYmxlIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVGV4dFRvb2w7IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vem9vbUNvbnRhaW5lci5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gWm9vbUNvbnRhaW5lckxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dXG59XG5cbmZ1bmN0aW9uIFpvb21Db250YWluZXIoeyB6b29tUmFuZ2UsIHpvb21Jbiwgem9vbU91dCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ6b29tQ29udGFpbmVyXCI+XG4gICAgICA8c3BhbiBpZD1cIm1pbnVzXCIgY2xhc3NOYW1lPVwiem9vbS1zaWduXCIgb25DbGljaz17em9vbUlufT5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiB2aWV3Qm94PVwiMCAwIDI1IDI1XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGQ9XCJNMy4xMjUgMTIuNUMzLjEyNSAxMi4wNjg1IDMuNDc0NzggMTEuNzE4OCAzLjkwNjI1IDExLjcxODhIMjEuMDkzOEMyMS41MjUyIDExLjcxODggMjEuODc1IDEyLjA2ODUgMjEuODc1IDEyLjVDMjEuODc1IDEyLjkzMTUgMjEuNTI1MiAxMy4yODEyIDIxLjA5MzggMTMuMjgxMkgzLjkwNjI1QzMuNDc0NzggMTMuMjgxMiAzLjEyNSAxMi45MzE1IDMuMTI1IDEyLjVaXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Y29sb3JcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGlkPVwiem9vbVJhbmdlXCIgY2xhc3NOYW1lPVwiem9vbS1yYW5nZVwiPntNYXRoLmZsb29yKHpvb21SYW5nZSAqIDEwMCl9PC9zcGFuPlxuICAgICAgPHNwYW4gaWQ9XCJwbHVzXCIgY2xhc3NOYW1lPVwiem9vbS1zaWduXCIgb25DbGljaz17em9vbU91dH0+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTEyLjUgMy4xMjVDMTIuOTMxNSAzLjEyNSAxMy4yODEyIDMuNDc0NzggMTMuMjgxMiAzLjkwNjI1VjExLjcxODhIMjEuMDkzOEMyMS41MjUyIDExLjcxODggMjEuODc1IDEyLjA2ODUgMjEuODc1IDEyLjVDMjEuODc1IDEyLjkzMTUgMjEuNTI1MiAxMy4yODEyIDIxLjA5MzggMTMuMjgxMkgxMy4yODEyVjIxLjA5MzhDMTMuMjgxMiAyMS41MjUyIDEyLjkzMTUgMjEuODc1IDEyLjUgMjEuODc1QzEyLjA2ODUgMjEuODc1IDExLjcxODcgMjEuNTI1MiAxMS43MTg3IDIxLjA5MzhWMTMuMjgxMkgzLjkwNjI1QzMuNDc0NzggMTMuMjgxMiAzLjEyNSAxMi45MzE1IDMuMTI1IDEyLjVDMy4xMjUgMTIuMDY4NSAzLjQ3NDc4IDExLjcxODggMy45MDYyNSAxMS43MTg4SDExLjcxODhWMy45MDYyNUMxMS43MTg4IDMuNDc0NzggMTIuMDY4NSAzLjEyNSAxMi41IDMuMTI1WlwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudGNvbG9yXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L3NwYW4+XG5cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBab29tQ29udGFpbmVyOyIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidlNzFhMmRmMycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtMklGNlBGN08uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVTQVVBMjdJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTI0QTJTQUdSLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtMlZQVzNLVDIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtRTcxQTJERjMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxl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
