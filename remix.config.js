/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  //server: "./server.js",
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  publicPath: "/build/"
};
