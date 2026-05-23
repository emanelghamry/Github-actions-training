# Lab 06: Artifacts

## Objective

Upload build output from a workflow run as a downloadable artifact.

## What you will build

A CI workflow that uploads `app/dist` after the build step.

## Prerequisites

Complete Lab 02. The build script should create `app/dist`.

## Steps


1. Create `.github/workflows/artifact-ci.yml`.

   ```yaml
   name: Artifact CI

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
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v6

         - uses: actions/setup-node@v6
           with:
             node-version: "24"

         - run: npm ci
         - run: npm run lint
         - run: npm test
         - run: npm run build

         - name: Upload build artifact
           uses: actions/upload-artifact@v4
           with:
             name: node-app-dist
             path: app/dist
   ```

2. Commit and push.
3. Open the workflow run and download the artifact named `node-app-dist`.


## Validation


Expected result:

The workflow run includes an artifact named `node-app-dist` containing the build output.


## Common errors


| Problem | Fix |
| --- | --- |
| Artifact upload says no files found | Confirm `npm run build` created `app/dist`. |
| Wrong artifact path | Use `app/dist` because upload-artifact runs from the repository root. |
| Cache vs artifact confusion | Cache is reused by future runs; artifact is output from this run. |


## Cleanup or next step

Continue to Docker packaging in Lab 07.
