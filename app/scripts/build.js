const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.cpSync(path.join(root, "src"), path.join(dist, "src"), { recursive: true });
fs.cpSync(path.join(root, "public"), path.join(dist, "public"), { recursive: true });
fs.copyFileSync(path.join(root, "package.json"), path.join(dist, "package.json"));

console.log("Build complete: dist/");
