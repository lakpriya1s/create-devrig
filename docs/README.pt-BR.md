<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-logo-dark.png">
  <img src="../assets/create-devrig-logo-light.png" alt="create-devrig" width="420">
</picture>

**Um único comando para criar um workspace [devrig](https://github.com/lakpriya1s/devrig) — sem clonar, sem um passo de configuração separado.**

[![npm version](https://img.shields.io/npm/v/create-devrig?color=22D3EE&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![npm downloads](https://img.shields.io/npm/dm/create-devrig?color=3B82F6&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6?style=flat-square)](../LICENSE)

[English](../README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · **Português** · [日本語](README.ja.md) · [Français](README.fr.md) · [한국어](README.ko.md) · [සිංහල](README.si.md)

</div>

---

```bash
npx create-devrig my-project
```

Só isso. Esse único comando:

1. **Busca** o template [devrig](https://github.com/lakpriya1s/devrig) em `my-project/` — sem histórico de git, só os arquivos.
2. **Remove** os arquivos próprios do template devrig (assets de marca, docs traduzidos, `CITATION.cff`, `CONTRIBUTING.md`, `LICENSE`) para que o workspace comece limpo — é o seu projeto, não o do devrig.
3. **Inicializa** um repositório git novo ali.
4. **Lança** o assistente de configuração interativo do devrig imediatamente, para você configurar o nome do projeto, a descrição, a organização do GitHub, os repos, o gestor de tickets e os toggles de funcionalidades no mesmo comando — o assistente também gera um `README.md` para *seu* projeto no lugar do do devrig.

Se você omitir o diretório, será perguntado por um:

```bash
npx create-devrig
```

## Requisitos

| | |
|---|---|
| **Node.js** | 18+ |
| **git** | necessário — usado para buscar o template e inicializar seu novo repo |
| **bash** | nativo no macOS/Linux. No Windows, rode isso dentro do WSL ou Git Bash — o `setup.sh` do devrig é um script bash |

## O que este pacote *não* faz

Ele não reimplementa nenhuma lógica de configuração do devrig — só busca o template, remove os arquivos próprios do template, e passa para o próprio `setup.sh` dele (que também os remove, então o caminho do GitHub "Use this template" fica idêntico). Atualizações no fluxo de setup, nas skills, ou no esquema de config do devrig entram em vigor automaticamente na próxima vez que alguém rodar `npx create-devrig`; este pacote em si quase nunca precisa mudar.

## Prefere não usar npx?

A interface do GitHub funciona igual de bem:

1. Clique em [**Use this template**](https://github.com/lakpriya1s/devrig/generate) no repo do [devrig](https://github.com/lakpriya1s/devrig).
2. Clone e rode `./setup.sh` você mesmo.

Os dois caminhos levam exatamente ao mesmo assistente interativo.

## Contribuindo

Este pacote é propositalmente pequeno — um arquivo, uma dependência ([`degit`](https://github.com/Rich-Harris/degit)). Relatos de bugs e correções pequenas são bem-vindos via [issues](https://github.com/lakpriya1s/create-devrig/issues) ou um PR. Se o que você realmente quer mudar é o fluxo de setup, as skills, ou o esquema de config, isso vive no [devrig](https://github.com/lakpriya1s/devrig), não aqui.

## Licença

MIT — veja [LICENSE](../LICENSE).

<div align="center">
<sub>Parte do projeto <a href="https://github.com/lakpriya1s/devrig">devrig</a> ·
<picture><source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-icon-dark.png"><img src="../assets/create-devrig-icon-light.png" width="14" alt=""></picture>
create-devrig</sub>
</div>
