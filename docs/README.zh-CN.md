<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-logo-dark.png">
  <img src="../assets/create-devrig-logo-light.png" alt="create-devrig" width="420">
</picture>

**一条命令搭建 [devrig](https://github.com/lakpriya1s/devrig) 工作区 — 无需克隆，无需单独的安装步骤。**

[![npm version](https://img.shields.io/npm/v/create-devrig?color=22D3EE&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![npm downloads](https://img.shields.io/npm/dm/create-devrig?color=3B82F6&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6?style=flat-square)](../LICENSE)

[English](../README.md) · **简体中文** · [Español](README.es.md) · [हिन्दी](README.hi.md) · [Português](README.pt-BR.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [한국어](README.ko.md) · [සිංහල](README.si.md)

</div>

---

```bash
npx create-devrig my-project
```

就这样。这一条命令会：

1. **拉取** [devrig](https://github.com/lakpriya1s/devrig) 模板到 `my-project/` — 不含 git 历史，只有文件。
2. **初始化** 一个全新的 git 仓库。
3. **启动** devrig 的交互式安装向导，让你在同一条命令中配置项目名、GitHub 组织、仓库列表、工单系统和功能开关 — 无需再分开执行 `cd` + 编辑配置文件 + 运行安装的步骤。

省略目录参数，系统会提示你输入：

```bash
npx create-devrig
```

## 环境要求

| | |
|---|---|
| **Node.js** | 18+ |
| **git** | 必需 — 用于拉取模板并初始化你的新仓库 |
| **bash** | macOS/Linux 原生支持。Windows 上请在 WSL 或 Git Bash 中运行 — devrig 的 `setup.sh` 是一个 bash 脚本 |

## 这个包*不*做什么

它不会重新实现 devrig 的任何安装逻辑 — 只负责拉取模板并交给它自己的 `setup.sh`。devrig 的安装流程、技能或配置结构一旦更新，下次运行 `npx create-devrig` 时会自动生效；这个包本身很少需要改动。

## 不想用 npx？

GitHub 的界面同样好用：

1. 在 [devrig](https://github.com/lakpriya1s/devrig) 仓库上点击 [**Use this template**](https://github.com/lakpriya1s/devrig/generate)。
2. 克隆后自己运行 `./setup.sh`。

两条路径最终都会进入完全相同的交互式向导。

## 参与贡献

这个包刻意保持精简 — 一个文件，一个依赖（[`degit`](https://github.com/Rich-Harris/degit)）。欢迎通过 [issues](https://github.com/lakpriya1s/create-devrig/issues) 或 PR 提交 bug 报告和小修复。如果你想改动的其实是安装流程、技能或配置结构，那些都在 [devrig](https://github.com/lakpriya1s/devrig) 本身，而不是这里。

## 许可证

MIT — 见 [LICENSE](../LICENSE)。

<div align="center">
<sub>devrig 项目的一部分 ·
<picture><source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-icon-dark.png"><img src="../assets/create-devrig-icon-light.png" width="14" alt=""></picture>
create-devrig</sub>
</div>
