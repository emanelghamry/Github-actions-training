# Lab 05: Cache

## Objective

Use dependency caching to speed up repeated npm installs.

## What you will build

A CI workflow that restores and saves the npm cache.

## Prerequisites

Complete Lab 02. The repository must include `app/package-lock.json`.

## Steps


1. Create `.github/workflows/cache-ci.yml`.

   ```yaml
   name: Cache CI

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
         - uses: actions/checkout@v6

         - uses: actions/setup-node@v6
           with:
             node-version: "24"

         - name: Cache npm
           uses: actions/cache@v4
           with:
             path: ~/.npm
             key: npm-${{ runner.os }}-${{ hashFiles('app/package-lock.json') }}
             restore-keys: |
               npm-${{ runner.os }}-

         - run: npm ci
         - run: npm test
         - run: npm run build
   ```

2. Commit and push.
3. Run the workflow twice and compare the cache logs.


## Validation


Expected result:

- First run may show a cache miss.
- Later runs should restore a cache when the key matches.


## Common errors


| Problem | Fix |
| --- | --- |
| Cache never hits | Confirm the key uses the correct lockfile path. |
| Cache does not improve correctness | Correct. Cache is for speed, not validation. |
| Path confusion | The cache path is runner-level `~/.npm`, not `app/node_modules`. |


## Cleanup or next step

Continue to Lab 06 to publish build output as an artifact.
