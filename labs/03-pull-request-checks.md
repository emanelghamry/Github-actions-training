# Lab 03: Pull request checks

## Objective

Run CI on pull requests and observe how failed checks protect the merge path.

## What you will build

A pull request workflow that reports CI status before code is merged.

## Prerequisites

Complete Lab 02 and have permission to open pull requests.

## Steps


1. Update the CI trigger to include pull requests if it is not already present.

   ```yaml
   on:
     push:
       branches:
         - main
     pull_request:
       branches:
         - main
   ```

2. Create a feature branch.

   ```bash
   git checkout -b feature/break-health-test
   ```

3. Break the health test intentionally. In `app/test/app.test.js`, change:

   ```js
   assert.deepEqual(body, { status: "ok" });
   ```

   to:

   ```js
   assert.deepEqual(body, { status: "broken" });
   ```

4. Commit and push.

   ```bash
   git add app/test/app.test.js
   git commit -m "Break health test for PR check demo"
   git push -u origin feature/break-health-test
   ```

5. Open a pull request to `main`.
6. Watch the CI check fail.
7. Fix the test, commit again, and push.


## Validation


Expected result:

- The pull request shows a failed check after the intentional test break.
- After fixing the test, the check turns green.
- Students can explain how branch protection can require checks before merging.


## Common errors


| Problem | Fix |
| --- | --- |
| Workflow runs only on push | Add the `pull_request` trigger. |
| PR check does not update | Push another commit to the PR branch. |
| Branch protection not configured | This lab does not require it; instructors can enable it as an optional demo. |


## Cleanup or next step

Do not merge the intentionally broken commit. Continue when checks are green.
