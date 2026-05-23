const express = require("express");
const packageJson = require("../package.json");

function rootPayload() {
  return {
    message: "Hello from the GitHub Actions training app",
    service: packageJson.name,
  };
}

function healthPayload() {
  return { status: "ok" };
}

function versionPayload() {
  return {
    name: packageJson.name,
    version: packageJson.version,
  };
}

function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.json(rootPayload());
  });

  app.get("/health", (req, res) => {
    res.json(healthPayload());
  });

  app.get("/version", (req, res) => {
    res.json(versionPayload());
  });

  return app;
}

function start(port = process.env.PORT || 3000) {
  const app = createApp();
  return app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

if (require.main === module) {
  start();
}

module.exports = {
  createApp,
  healthPayload,
  rootPayload,
  start,
  versionPayload,
};
