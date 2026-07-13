<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/create-devrig-logo-dark.png">
  <img src="assets/create-devrig-logo-light.png" alt="create-devrig" width="420">
</picture>

**One command to scaffold a [devrig](https://github.com/lakpriya1s/devrig) workspace — no cloning, no separate setup step.**

[![npm version](https://img.shields.io/npm/v/create-devrig?color=22D3EE&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![npm downloads](https://img.shields.io/npm/dm/create-devrig?color=3B82F6&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6?style=flat-square)](LICENSE)

**English** · [简体中文](docs/README.zh-CN.md) · [Español](docs/README.es.md) · [हिन्दी](docs/README.hi.md) · [Português](docs/README.pt-BR.md) · [日本語](docs/README.ja.md) · [Français](docs/README.fr.md) · [한국어](docs/README.ko.md) · [සිංහල](docs/README.si.md)

</div>

---

```bash
npx create-devrig my-project
```

That's it. This one command:

1. **Fetches** the [devrig](https://github.com/lakpriya1s/devrig) template into `my-project/` — no git history, just the files.
2. **Strips** devrig's own repo furniture (branding assets, translated docs, `CITATION.cff`, `CONTRIBUTING.md`, `LICENSE`) so the workspace starts clean — it's your project, not devrig's.
3. **Initializes** a fresh git repository there.
4. **Launches** devrig's interactive setup wizard immediately, so you configure your project name, description, GitHub org, repos, issue tracker, and feature toggles in the same command — the wizard also generates a `README.md` for *your* project in place of devrig's.

Omit the directory and you'll be prompted for one:

```bash
npx create-devrig
```

## Requirements

| | |
|---|---|
| **Node.js** | 18+ |
| **git** | required — used to fetch the template and initialize your new repo |
| **bash** | native on macOS/Linux. On Windows, run this inside WSL or Git Bash — devrig's `setup.sh` is a bash script |

## What this package does *not* do

It doesn't reimplement any of devrig's setup logic — it only fetches the template, trims the template-only files, and hands off to its own `setup.sh` (which trims them too, so the GitHub "Use this template" path ends up identical). Updates to devrig's setup flow, skills, or config schema take effect automatically the next time someone runs `npx create-devrig`; this package itself rarely needs to change.

## Prefer not to use npx?

GitHub's UI works just as well:

1. Click [**Use this template**](https://github.com/lakpriya1s/devrig/generate) on the [devrig](https://github.com/lakpriya1s/devrig) repo.
2. Clone it and run `./setup.sh` yourself.

Both paths land you in the exact same interactive wizard.

## Contributing

This package is intentionally tiny — one file, one dependency ([`degit`](https://github.com/Rich-Harris/degit)). Bug reports and small fixes are welcome via [issues](https://github.com/lakpriya1s/create-devrig/issues) or a PR. If what you actually want to change is the setup flow, skills, or config schema, that lives in [devrig](https://github.com/lakpriya1s/devrig) itself, not here.

## License

MIT — see [LICENSE](LICENSE).

<div align="center">
<sub>Part of the <a href="https://github.com/lakpriya1s/devrig">devrig</a> project ·
<picture><source media="(prefers-color-scheme: dark)" srcset="assets/create-devrig-icon-dark.png"><img src="assets/create-devrig-icon-light.png" width="14" alt=""></picture>
create-devrig</sub>
</div>
