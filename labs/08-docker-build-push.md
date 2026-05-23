# Lab 08: Docker build and push

## Objective

Build and push the Docker image to Docker Hub.

## What you will build

A workflow that logs in to Docker Hub and pushes tags for `github.sha` and `latest`.

## Prerequisites

Docker Hub account, Docker Hub access token, and repository admin access in GitHub.

## Steps


1. Create a Docker Hub access token from Docker Hub account settings.
2. In GitHub, go to **Settings > Secrets and variables > Actions**.
3. Add repository variable:

   - `DOCKERHUB_USERNAME`

4. Add repository secret:

   - `DOCKERHUB_TOKEN`

5. Create `.github/workflows/docker-build-push.yml`.

   ```yaml
   name: Docker Build and Push

   on:
     push:
       branches:
         - main

   permissions:
     contents: read

   jobs:
     docker:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v6

         - uses: docker/setup-buildx-action@v3

         - uses: docker/login-action@v3
           with:
             username: ${{ vars.DOCKERHUB_USERNAME }}
             password: ${{ secrets.DOCKERHUB_TOKEN }}

         - uses: docker/build-push-action@v6
           with:
             context: app
             push: true
             tags: |
               ${{ vars.DOCKERHUB_USERNAME }}/github-actions-training-app:${{ github.sha }}
               ${{ vars.DOCKERHUB_USERNAME }}/github-actions-training-app:latest
   ```

6. Commit and push to `main`.


## Validation


Expected result:

Docker Hub contains an image named `github-actions-training-app` tagged with the commit SHA and `latest`.


## Common errors


| Problem | Fix |
| --- | --- |
| `unauthorized` | Check Docker Hub username and token. |
| Secret empty | Confirm the secret is named exactly `DOCKERHUB_TOKEN`. |
| Wrong image name | Use `${{ vars.DOCKERHUB_USERNAME }}/github-actions-training-app`. |
| Dockerfile not found | Use `context: app`. |

Security warning: never commit Docker Hub tokens or passwords.


## Cleanup or next step

Continue to manual deployment in Lab 09.
