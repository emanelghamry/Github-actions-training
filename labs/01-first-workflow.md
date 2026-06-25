# Lab 01: First workflow

## Objective

Create your first GitHub Actions workflow and inspect the workflow logs.

## What you will build

A workflow file at `.github/workflows/first-ci.yml` that runs on every push.

## Prerequisites

Complete Lab 00 and push access to your GitHub repository.

## Steps


1. Create the workflow directory.
   Make sure you are on the root of the repo

   ```bash
   mkdir -p .github/workflows
   ```

2. Create `.github/workflows/first-ci.yml`.

   ```yaml
   name: First CI

   on:
     push:

   jobs:
     hello:
       runs-on: ubuntu-latest
       steps:
         - name: Say hello
           run: echo "Hello from GitHub Actions"

         - name: Print runner info
           run: |
             echo "Runner OS: ${{ runner.os }}"
             echo "Commit SHA: ${{ github.sha }}"
   ```

3. Commit and push the workflow.

   ```bash
   git add .github/workflows/first-ci.yml
   git commit -m "Add first GitHub Actions workflow"
   git push
   ```

4. Open GitHub, go to **Actions**, select **First CI**, and open the latest run.


## Validation


Expected result:

- The workflow appears in the Actions tab.
- The run has one job named `hello`.
- The logs include `Hello from GitHub Actions`, runner OS, and commit SHA.


## Common errors


| Problem | Fix |
| --- | --- |
| Workflow does not appear | Confirm the path is exactly `.github/workflows/first-ci.yml`. |
| Workflow did not run | Push a new commit to the branch. |
| YAML error | Check indentation. YAML uses spaces, not tabs. |


## Cleanup or next step

Keep the workflow or compare it with `solutions/workflows/01-first-ci.yml`.
