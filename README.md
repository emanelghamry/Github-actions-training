# GitHub Actions CI/CD + CI Fundamentals

Hands-on labs for the **GitHub Actions CI/CD + CI Fundamentals** training.

## Who this repo is for

This repository is for junior DevOps engineers, developers, and students who already know basic Git and want practical experience with GitHub Actions.

## What students will build

Students start with a small Node.js Express application and gradually create real GitHub Actions workflows for CI, pull request checks, matrix builds, cache, artifacts, Docker image builds, Docker Hub publishing, manual deployment workflows, environments, approvals, and troubleshooting.

## Labs

| Lab | Topic |
| --- | --- |
| 00 | [Prerequisites](labs/00-prerequisites.md) |
| 01 | [First workflow](labs/01-first-workflow.md) |
| 02 | [Node.js CI](labs/02-nodejs-ci.md) |
| 03 | [Pull request checks](labs/03-pull-request-checks.md) |
| 04 | [Matrix strategy](labs/04-matrix-strategy.md) |
| 05 | [Cache](labs/05-cache.md) |
| 06 | [Artifacts](labs/06-artifacts.md) |
| 07 | [Docker build](labs/07-docker-build.md) |
| 08 | [Docker build and push](labs/08-docker-build-push.md) |
| 09 | [Manual deployment](labs/09-manual-deployment.md) |
| 10 | [Environments and approvals](labs/10-environments-approvals.md) |
| 11 | [Troubleshooting](labs/11-troubleshooting.md) |
| 12 | [Final homework mini-project](labs/12-final-homework.md) |

## Required tools

- Git
- GitHub account
- Node.js 20 or newer
- npm
- Docker Desktop
- Docker Hub account for the Docker push lab
- VS Code recommended

## Clone the repo

```bash
git clone https://github.com/davabdallah/Github-actions-training.git
cd Github-actions-training
```

## Run the app locally

```bash
cd app
npm install
npm start
```

Open:

- http://localhost:3000
- http://localhost:3000/health
- http://localhost:3000/version

## Run tests locally

```bash
cd app
npm test
npm run lint
npm run build
```

## Follow the labs

Start at [Lab 00](labs/00-prerequisites.md), then complete the labs in order. Solution workflow files are available under [solutions/workflows](solutions/workflows/) for instructor review or self-checking.

## Secrets warning

Never commit real secrets, access tokens, passwords, or private keys. Use GitHub Actions secrets and variables for sensitive or environment-specific values.

## Instructor note

These labs map directly to the 6-hour theory deck: **GitHub Actions CI/CD + CI Fundamentals**. The theory explains the concepts; this repository turns those concepts into practical workflows.
