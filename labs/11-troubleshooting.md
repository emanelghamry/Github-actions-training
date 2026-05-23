# Lab 11: Troubleshooting

## Objective

Practice debugging broken GitHub Actions workflows using common failure patterns.

## What you will build

Five broken workflow exercises from `solutions/broken-workflows/`.

## Prerequisites

Complete the earlier labs and know how to read workflow logs.

## Steps


Copy one broken workflow at a time into `.github/workflows/`, push it, observe the failure, then fix it.

### Exercise 1: Missing checkout

- File: `solutions/broken-workflows/missing-checkout.yml`
- Symptom: The workflow cannot find `app/package.json` or the `app` directory.
- Student task: Identify why repository files are missing.
- Hint: Runners do not automatically contain your repository files.
- Expected fix: Add `actions/checkout@v6` before running npm commands.
- Explanation: Checkout downloads the repository into the runner workspace.

### Exercise 2: Bad branch trigger

- File: `solutions/broken-workflows/bad-branch-trigger.yml`
- Symptom: The workflow does not run when pushing to `main`.
- Student task: Inspect the trigger branch filter.
- Hint: The branch name in the workflow must match the branch you push.
- Expected fix: Change the branch filter to `main`.
- Explanation: Branch filters decide whether the event starts a workflow.

### Exercise 3: Bad YAML indentation

- File: `solutions/broken-workflows/bad-yaml-indentation.yml`
- Symptom: GitHub reports an invalid workflow file.
- Student task: Fix indentation until the workflow parses.
- Hint: YAML structure is indentation-sensitive.
- Expected fix: Align `steps` under the job and list items under `steps`.
- Explanation: YAML is not just text formatting; indentation defines structure.

### Exercise 4: Missing secret

- File: `solutions/broken-workflows/missing-secret.yml`
- Symptom: Docker login fails or receives an empty password.
- Student task: Find which secret or variable the workflow expects.
- Hint: Compare the workflow names with repository secrets and variables.
- Expected fix: Add `DOCKERHUB_TOKEN` secret and `DOCKERHUB_USERNAME` variable, or correct the names.
- Explanation: Workflows cannot read secrets that do not exist or are named differently.

### Exercise 5: Wrong working directory

- File: `solutions/broken-workflows/wrong-working-directory.yml`
- Symptom: `npm ci` fails because `package.json` is not found.
- Student task: Locate the app folder and set the working directory.
- Hint: The Node.js app is inside `app/`.
- Expected fix: Add `defaults.run.working-directory: app` or set `working-directory: app` per step.
- Explanation: Commands run from the repository root unless told otherwise.


## Validation


For each exercise, students should provide:

- The first failing step
- The error message
- The root cause
- The corrected workflow change


## Common errors


| Problem | Fix |
| --- | --- |
| Too many workflows run at once | Copy one broken file at a time. |
| Student fixes symptom, not cause | Ask them to identify the first failed command. |
| Broken YAML blocks GitHub UI run | Fix syntax locally before pushing again. |


## Cleanup or next step

Use the final homework to combine the skills into one complete pipeline.
