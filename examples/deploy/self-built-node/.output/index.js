"use strict";
const fs = require("node:fs/promises");
const path = require("node:path");
const { createProdServer } = require("@modern-js/prod-server");
;
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "production";
}
async function loadRoutes(routeFilepath) {
  try {
    await fs.access(routeFilepath);
    const content = await fs.readFile(routeFilepath, "utf-8");
    const routeSpec = JSON.parse(content);
    return routeSpec.routes || [];
  } catch (error) {
    console.warn("route.json not found or invalid, continuing with empty routes.");
    return [];
  }
}
async function main() {
  const routeFilepath = path.join(__dirname, "route.json");
  const routes = await loadRoutes(routeFilepath);
  const dynamicProdOptions = {"config":{"server":{"port":8080},"bff":{},"output":{"distPath":{"root":"."}}},"serverConfigFile":"modern.server-runtime.config"};
  const prodServerOptions = {
    pwd: __dirname,
    routes,
    disableCustomHook: true,
    appContext: {
      sharedDirectory: path.join(__dirname, "shared"),
      apiDirectory: path.join(__dirname, "api"),
      lambdaDirectory: path.join(__dirname, "api/lambda")
    },
    plugins: [],
    ...dynamicProdOptions
  };
  const app = await createProdServer(prodServerOptions);
  const port = process.env.PORT || 8080;
  app.listen({
    host: "::",
    port
  }, () => {
    console.log(`\x1B[32mServer is listening on http://[::]:${port}`, "\x1B[0m");
  });
}
main();
