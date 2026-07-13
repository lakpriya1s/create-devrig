<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-logo-dark.png">
  <img src="../assets/create-devrig-logo-light.png" alt="create-devrig" width="420">
</picture>

**Une seule commande pour créer un workspace [devrig](https://github.com/lakpriya1s/devrig) — sans cloner, sans étape de configuration séparée.**

[![npm version](https://img.shields.io/npm/v/create-devrig?color=22D3EE&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![npm downloads](https://img.shields.io/npm/dm/create-devrig?color=3B82F6&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6?style=flat-square)](../LICENSE)

[English](../README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [Português](README.pt-BR.md) · [日本語](README.ja.md) · **Français** · [한국어](README.ko.md) · [සිංහල](README.si.md)

</div>

---

```bash
npx create-devrig my-project
```

C'est tout. Cette seule commande :

1. **Récupère** le template [devrig](https://github.com/lakpriya1s/devrig) dans `my-project/` — sans historique git, juste les fichiers.
2. **Supprime** les fichiers propres au template devrig (assets de marque, docs traduites, `CITATION.cff`, `CONTRIBUTING.md`, `LICENSE`) pour que le workspace démarre propre — c'est votre projet, pas celui de devrig.
3. **Initialise** un nouveau dépôt git sur place.
4. **Lance** l'assistant de configuration interactif de devrig immédiatement, pour que vous configuriez le nom du projet, la description, l'organisation GitHub, les dépôts, le gestionnaire de tickets et les options en une seule commande — l'assistant génère aussi un `README.md` pour *votre* projet à la place de celui de devrig.

Si vous omettez le répertoire, on vous en demandera un :

```bash
npx create-devrig
```

## Prérequis

| | |
|---|---|
| **Node.js** | 18+ |
| **git** | requis — utilisé pour récupérer le template et initialiser votre nouveau dépôt |
| **bash** | natif sur macOS/Linux. Sur Windows, exécutez ceci dans WSL ou Git Bash — le `setup.sh` de devrig est un script bash |

## Ce que ce paquet ne fait *pas*

Il ne réimplémente aucune logique de configuration de devrig — il ne fait que récupérer le template, retirer les fichiers propres au template, et le transmettre à son propre `setup.sh` (qui les retire aussi, donc le chemin GitHub « Use this template » aboutit au même résultat). Les mises à jour du flux de configuration, des skills ou du schéma de config de devrig prennent effet automatiquement la prochaine fois que quelqu'un exécute `npx create-devrig` ; ce paquet lui-même a rarement besoin de changer.

## Vous préférez ne pas utiliser npx ?

L'interface de GitHub fonctionne tout aussi bien :

1. Cliquez sur [**Use this template**](https://github.com/lakpriya1s/devrig/generate) sur le dépôt [devrig](https://github.com/lakpriya1s/devrig).
2. Clonez-le et exécutez `./setup.sh` vous-même.

Les deux chemins vous mènent exactement au même assistant interactif.

## Contribuer

Ce paquet est volontairement minuscule — un fichier, une dépendance ([`degit`](https://github.com/Rich-Harris/degit)). Les rapports de bugs et les petites corrections sont les bienvenus via les [issues](https://github.com/lakpriya1s/create-devrig/issues) ou une PR. Si ce que vous voulez vraiment changer, c'est le flux de configuration, les skills, ou le schéma de config, cela se trouve dans [devrig](https://github.com/lakpriya1s/devrig) lui-même, pas ici.

## Licence

MIT — voir [LICENSE](../LICENSE).

<div align="center">
<sub>Fait partie du projet <a href="https://github.com/lakpriya1s/devrig">devrig</a> ·
<picture><source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-icon-dark.png"><img src="../assets/create-devrig-icon-light.png" width="14" alt=""></picture>
create-devrig</sub>
</div>
