# Lab 12: Final homework mini-project

## Objective

Build a complete CI/CD pipeline from memory using the concepts practiced in the labs.

## What you will build

Three workflows: `ci.yml`, `docker.yml`, and `deploy.yml`, plus README screenshots and explanations.

## Prerequisites

Complete Labs 01 through 11.

## Steps


Create the following workflows from memory.

### 1. `ci.yml`

Requirements:

- Runs on `push` and `pull_request`
- Uses `actions/checkout@v6`
- Uses `actions/setup-node@v6`
- Runs lint, test, and build
- Uploads `app/dist` as an artifact

### 2. `docker.yml`

Requirements:

- Runs on push to `main` only
- Builds and pushes Docker image
- Uses `vars.DOCKERHUB_USERNAME`
- Uses `secrets.DOCKERHUB_TOKEN`
- Tags with `${{ github.sha }}` and `latest`

### 3. `deploy.yml`

Requirements:

- Manual trigger with `workflow_dispatch`
- `deploy-dev` job
- `deploy-production` job
- `production` environment approval

### 4. README screenshots

Add screenshots for:

- Successful CI
- Failed CI and explanation
- Artifact output
- Docker Hub image
- Manual deploy approval


## Validation


Submit a repository link and make sure all workflows are visible in the Actions tab.


## Common errors


| Problem | Fix |
| --- | --- |
| Docker push fails | Verify secret, variable, and Docker Hub repository. |
| Deploy has no approval | Confirm the production environment has a required reviewer. |
| Artifact missing | Confirm build creates `app/dist` before upload. |


## Cleanup or next step


## Grading rubric

| Area | Points |
| --- | ---: |
| CI workflow | 25 |
| Matrix/cache/artifact | 20 |
| Docker build/push | 25 |
| Manual deployment/environments | 20 |
| README/screenshots/explanation | 10 |
| **Total** | **100** |

