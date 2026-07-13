<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-logo-dark.png">
  <img src="../assets/create-devrig-logo-light.png" alt="create-devrig" width="420">
</picture>

**[devrig](https://github.com/lakpriya1s/devrig) workspace එකක් එක command එකකින් සාදන්න — clone කිරීමක් නැත, වෙනම setup step එකක් නැත.**

[![npm version](https://img.shields.io/npm/v/create-devrig?color=22D3EE&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![npm downloads](https://img.shields.io/npm/dm/create-devrig?color=3B82F6&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6?style=flat-square)](../LICENSE)

[English](../README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [Português](README.pt-BR.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [한국어](README.ko.md) · **සිංහල**

</div>

---

```bash
npx create-devrig my-project
```

ඒ තරම්ම. මෙම command එකෙන්:

1. [devrig](https://github.com/lakpriya1s/devrig) template එක `my-project/` වෙත **fetch** කරයි — git history නොමැතිව, ගොනු පමණයි.
2. devrig හි own template files (branding assets, translated docs, `CITATION.cff`, `CONTRIBUTING.md`, `LICENSE`) **ඉවත් කරයි**, එවිට workspace එක පිරිසිදුව ආරම්භ වේ — මෙය devrig ගේ නොව ඔබේ ව්‍යාපෘතියයි.
3. එහි නව git repository එකක් **initialize** කරයි.
4. devrig හි interactive setup wizard එක වහාම **launch** කරයි, එවිට ඔබට ව්‍යාපෘති නම, විස්තරය, GitHub org, repos, issue tracker, සහ feature toggles එකම command එකේදී සකසා ගත හැක — wizard එක devrig ගේ වෙනුවට *ඔබේ* ව්‍යාපෘතිය සඳහා `README.md` එකක්ද සාදයි.

Directory එක අත්හැරියොත් ඔබෙන් අසනු ලැබේ:

```bash
npx create-devrig
```

## අවශ්‍යතා

| | |
|---|---|
| **Node.js** | 18+ |
| **git** | අවශ්‍යයි — template එක fetch කිරීමට සහ ඔබේ නව repo එක initialize කිරීමට භාවිත වේ |
| **bash** | macOS/Linux හි native. Windows හි නම් WSL හෝ Git Bash තුළ ධාවනය කරන්න — devrig හි `setup.sh` යනු bash script එකකි |

## මෙම package එක *නොකරන* දේ

එය devrig හි setup logic නැවත implement නොකරයි — එය template එක fetch කර, template-only files ඉවත් කර, එහි own `setup.sh` වෙත භාර දෙයි (එයද ඒවා ඉවත් කරන බැවින්, GitHub "Use this template" මාර්ගයද එකම ප්‍රතිඵලයක් ලබා දේ). devrig හි setup flow, skills, හෝ config schema යාවත්කාලීන වූ විට, ඊළඟට කවුරුන් හෝ `npx create-devrig` ධාවනය කරන විට ඒවා ස්වයංක්‍රීයව ක්‍රියාත්මක වේ; මෙම package එකට වෙනස් කිරීමට කලාතුරකින් අවශ්‍ය වේ.

## npx භාවිත කිරීමට අකමැතිද?

GitHub UI එකද එසේම හොඳින් වැඩ කරයි:

1. [devrig](https://github.com/lakpriya1s/devrig) repo එකේ [**Use this template**](https://github.com/lakpriya1s/devrig/generate) ක්ලික් කරන්න.
2. Clone කර ඔබම `./setup.sh` ධාවනය කරන්න.

මාර්ග දෙකම හරියටම එකම interactive wizard එකට ගෙන යයි.

## දායක වන්න

මෙම package එක හිතාමතාම කුඩාව තබා ඇත — එක ගොනුවක්, එක dependency එකක් ([`degit`](https://github.com/Rich-Harris/degit))। Bug වාර්තා සහ කුඩා fixes [issues](https://github.com/lakpriya1s/create-devrig/issues) හෝ PR හරහා සාදරයෙන් පිළිගනිමු. ඔබට ඇත්තටම වෙනස් කිරීමට අවශ්‍ය setup flow, skills, හෝ config schema නම්, ඒවා තිබෙන්නේ මෙතන නොව [devrig](https://github.com/lakpriya1s/devrig) තුළමය.

## බලපත්‍රය

MIT — බලන්න [LICENSE](../LICENSE)।

<div align="center">
<sub><a href="https://github.com/lakpriya1s/devrig">devrig</a> ව්‍යාපෘතියේ කොටසක් ·
<picture><source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-icon-dark.png"><img src="../assets/create-devrig-icon-light.png" width="14" alt=""></picture>
create-devrig</sub>
</div>
