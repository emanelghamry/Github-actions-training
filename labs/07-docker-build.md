# Lab 07: Docker build

## Objective

Build a Docker image in GitHub Actions without pushing it to a registry.

## What you will build

A workflow that validates the Dockerfile and tags the image with the Git SHA.

## Prerequisites

Dockerfile exists at `app/Dockerfile`.

## Steps


1. Test the Docker build locally.

   ```bash
   docker build -t github-actions-training-app:test app/
   ```

2. Create `.github/workflows/docker-build.yml`.

   ```yaml
   name: Docker Build

   on:
     push:
       branches:
         - main
     pull_request:
       branches:
         - main

   permissions:
     contents: read

   jobs:
     docker-build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v6

         - name: Build Docker image
           run: docker build -t github-actions-training-app:${{ github.sha }} app/
   ```

3. Commit and push.


## Validation


Expected result:

The workflow logs show Docker build layers and a successful image tag using the commit SHA.


## Common errors


| Problem | Fix |
| --- | --- |
| Dockerfile not found | Use build context `app/`. |
| npm install fails inside Docker | Confirm `app/package-lock.json` is committed. |
| Image is not visible in Docker Hub | This lab builds only; it does not push. |


## Cleanup or next step

Continue to Lab 08 to push to Docker Hub.
