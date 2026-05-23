# Lab 09: Manual deployment

## Objective

Create a deployment workflow that runs manually with `workflow_dispatch`.

## What you will build

A workflow with a selectable deployment environment input.

## Prerequisites

Complete earlier CI labs and push the workflow to GitHub.

## Steps


1. Create `.github/workflows/manual-deploy.yml`.

   ```yaml
   name: Manual Deploy

   on:
     workflow_dispatch:
       inputs:
         environment:
           description: "Target environment"
           required: true
           default: dev
           type: choice
           options:
             - dev
             - staging

   permissions:
     contents: read

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Show deployment target
           run: echo "Deploying to ${{ inputs.environment }}"
   ```

2. Commit and push.
3. Open **Actions > Manual Deploy > Run workflow**.
4. Choose `dev` or `staging`, then run the workflow.


## Validation


Expected result:

The workflow runs only when triggered manually and logs the selected environment.


## Common errors


| Problem | Fix |
| --- | --- |
| Run workflow button missing | The workflow must exist on the default branch. |
| Input not available | Check the `workflow_dispatch.inputs` indentation. |
| Workflow does real deployment | This lab uses `echo` only. |


## Cleanup or next step

Continue to Lab 10 for protected environments and approvals.
