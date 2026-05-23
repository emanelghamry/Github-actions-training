# Lab 00: Prerequisites

## Objective

Prepare your local machine and GitHub account for the hands-on GitHub Actions labs.

## What you will build

A ready local checkout of the training repository and verified local tools.

## Prerequisites

- GitHub account
- Git installed
- Node.js installed
- npm installed
- Docker Desktop installed and running
- Docker Hub account for Lab 08
- VS Code recommended
- Basic Git knowledge

## Steps


1. Fork or clone the repository.

   ```bash
   git clone https://github.com/davabdallah/Github-actions-training.git
   cd Github-actions-training
   ```

2. Check tool versions.

   ```bash
   git --version
   node --version
   npm --version
   docker --version
   ```

3. Install app dependencies.

   ```bash
   cd app
   npm install
   ```

4. Run the app locally.

   ```bash
   npm start
   ```

5. In another terminal, test the endpoints.

   ```bash
   curl http://localhost:3000/health
   curl http://localhost:3000/version
   ```


## Validation


Expected output:

```json
{ "status": "ok" }
```

The app should start on port 3000 and the version endpoint should return the app name and version.


## Common errors


| Problem | Fix |
| --- | --- |
| `node` command not found | Install Node.js 20 or newer. |
| Docker command fails | Start Docker Desktop and wait until it is ready. |
| Port 3000 already used | Stop the other process or run with `PORT=3001 npm start`. |


## Cleanup or next step

Continue to [Lab 01: First workflow](01-first-workflow.md).
