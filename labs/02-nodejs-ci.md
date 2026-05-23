# Lab 02: Node.js CI

## Objective

Create a real CI workflow for the sample Node.js application.

## What you will build

A workflow that checks out code, installs dependencies, lints, tests, and builds the app.

## Prerequisites

Complete Lab 01. The app lives inside the `app/` directory.

## Steps


1. Create `.github/workflows/nodejs-ci.yml`.

   ```yaml
   name: Node.js CI

   on:
     push:
       branches:
         - main
     pull_request:
       branches:
         - main

   permissions:
     contents: read

   defaults:
     run:
       working-directory: app

   jobs:
     ci:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout repository
           uses: actions/checkout@v6

         - name: Setup Node.js
           uses: actions/setup-node@v6
           with:
             node-version: "24"

         - name: Install dependencies
           run: npm ci

         - name: Lint
           run: npm run lint

         - name: Test
           run: npm test

         - name: Build
           run: npm run build
   ```

2. Commit and push.

   ```bash
   git add .github/workflows/nodejs-ci.yml
   git commit -m "Add Node.js CI workflow"
   git push
   ```


## Validation


Expected result:

- CI runs on push to `main`.
- Logs show `npm ci`, lint, test, and build.
- Build logs end with `Build complete: dist/`.


## Common errors


| Problem | Fix |
| --- | --- |
| `package.json` not found | Use `defaults.run.working-directory: app` or set `working-directory: app` per step. |
| `npm ci` fails | Make sure `app/package-lock.json` exists. |
| Missing files in runner | Add `actions/checkout@v6`. |


## Cleanup or next step

Compare with `solutions/workflows/02-nodejs-ci.yml`, then continue to Lab 03.
