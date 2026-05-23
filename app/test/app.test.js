const assert = require("node:assert/strict");
const test = require("node:test");
const { healthPayload, rootPayload, versionPayload } = require("../src/app");

test("healthPayload returns ok", () => {
  assert.deepEqual(healthPayload(), { status: "ok" });
});

test("versionPayload returns app metadata", () => {
  assert.deepEqual(versionPayload(), {
    name: "github-actions-training-app",
    version: "1.0.0",
  });
});

test("rootPayload returns service message", () => {
  assert.equal(rootPayload().service, "github-actions-training-app");
  assert.match(rootPayload().message, /GitHub Actions training app/);
});
