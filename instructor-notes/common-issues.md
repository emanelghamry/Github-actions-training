# Common Issues and Fixes

| Issue | Likely cause | Fix |
| --- | --- | --- |
| Workflow not appearing | Wrong path or file extension | Use `.github/workflows/<name>.yml`. |
| Wrong workflow path | Directory was created under `app/` | Workflows must be at repository root under `.github/workflows`. |
| YAML indentation error | Misaligned keys or tabs | Use spaces and compare with solution workflows. |
| Missing checkout | Runner has no repository files | Add `actions/checkout@v6`. |
| Wrong working directory | App is inside `app/` | Use `defaults.run.working-directory: app`. |
| `npm ci` fails | Missing `package-lock.json` | Run `npm install` locally and commit the lockfile. |
| Docker login unauthorized | Bad username or token | Check `DOCKERHUB_USERNAME` variable and `DOCKERHUB_TOKEN` secret. |
| Secret or variable mismatch | Name differs from workflow | Names must match exactly. |
| Environment approval not appearing | Job does not reference environment | Add `environment: production` and configure required reviewer. |
| Workflow not triggered | Branch filter does not match | Confirm the pushed branch matches `branches:`. |
