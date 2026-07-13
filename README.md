# create-devrig

One command to scaffold a [devrig](https://github.com/lakpriya1s/devrig) workspace — no cloning, no separate setup step.

```bash
npx create-devrig my-project
```

This:

1. Fetches the devrig template into `my-project/` (no git history — just the files).
2. Initializes a fresh git repository there.
3. Launches devrig's interactive `setup.sh` wizard immediately, so you configure your project name, GitHub org, repos, issue tracker, and toggles in the same command.

Omit the directory and you'll be prompted for one:

```bash
npx create-devrig
```

## Requirements

- Node.js 18+
- `git`
- `bash` (native on macOS/Linux; on Windows, run this inside WSL or Git Bash — devrig's `setup.sh` is a bash script)

## What this package does *not* do

It doesn't reimplement any of devrig's setup logic — it only fetches the template and hands off to its own `setup.sh`. Updates to devrig's setup flow, skills, or config schema take effect automatically the next time someone runs `npx create-devrig`; this package itself rarely needs to change.

## See also

- [devrig](https://github.com/lakpriya1s/devrig) — the template itself
- Prefer GitHub's UI? Use the [**Use this template**](https://github.com/lakpriya1s/devrig/generate) button instead.

## License

MIT
