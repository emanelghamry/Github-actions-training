# Lab 10: Environments and approvals

## Objective

Use GitHub environments to model dev and production deployment gates.

## What you will build

A workflow with `deploy-dev` and `deploy-production`, where production waits for dev and uses a protected environment.

## Prerequisites

Repository admin access or instructor-provided repository permissions.

## Steps


1. In GitHub, go to **Settings > Environments**.
2. Create an environment named `dev`.
3. Create an environment named `production`.
4. Add a required reviewer to `production`.
5. Create `.github/workflows/env-approval-deploy.yml`.

   ```yaml
   name: Environment Approval Deploy

   on:
     workflow_dispatch:

   permissions:
     contents: read

   jobs:
     deploy-dev:
       runs-on: ubuntu-latest
       environment: dev
       steps:
         - name: Deploy to dev
           run: echo "Deploying to dev"

     deploy-production:
       needs: deploy-dev
       runs-on: ubuntu-latest
       environment: production
       steps:
         - name: Deploy to production
           run: echo "Deploying to production"
   ```

6. Commit and push.
7. Run the workflow manually.
8. Observe that production waits for approval.


## Validation


Expected result:

- `deploy-dev` runs first.
- `deploy-production` waits for environment approval.
- After approval, production job runs and logs the echo command.


## Common errors


| Problem | Fix |
| --- | --- |
| Approval does not appear | Confirm the job uses `environment: production`. |
| Production runs before dev | Add `needs: deploy-dev`. |
| Cannot add required reviewer | Ask the instructor or repository owner for permissions. |


## Cleanup or next step

Continue to Lab 11 for troubleshooting practice.
