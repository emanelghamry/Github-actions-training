# Lab 04: Matrix strategy

## Objective

Run the same CI checks against multiple Node.js versions.

## What you will build

A matrix workflow that tests Node.js 20, 22, and 24.

## Prerequisites

Complete Lab 02. The app should pass locally.

## Steps


1. Create `.github/workflows/matrix-ci.yml`.

   ```yaml
   name: Matrix CI

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
     test:
       runs-on: ubuntu-latest
       strategy:
         matrix:
           node-version: [20, 22, 24]
       steps:
         - uses: actions/checkout@v6

         - uses: actions/setup-node@v6
           with:
             node-version: ${{ matrix.node-version }}

         - run: npm ci
         - run: npm run lint
         - run: npm test
         - run: npm run build
   ```

2. Commit and push the workflow.


## Validation


Expected result:

The Actions UI shows separate job runs for Node.js 20, 22, and 24.


## Common errors


| Problem | Fix |
| --- | --- |
| One Node version fails | Open that matrix job and read the failing step. |
| Matrix value is empty | Check the expression: `${{ matrix.node-version }}`. |
| Too many jobs | Keep the matrix small and purposeful. |


## Cleanup or next step

Compare with `solutions/workflows/04-matrix-ci.yml`.
