<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-logo-dark.png">
  <img src="../assets/create-devrig-logo-light.png" alt="create-devrig" width="420">
</picture>

**Un solo comando para crear un workspace [devrig](https://github.com/lakpriya1s/devrig) — sin clonar, sin un paso de configuración aparte.**

[![npm version](https://img.shields.io/npm/v/create-devrig?color=22D3EE&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![npm downloads](https://img.shields.io/npm/dm/create-devrig?color=3B82F6&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6?style=flat-square)](../LICENSE)

[English](../README.md) · [简体中文](README.zh-CN.md) · **Español** · [हिन्दी](README.hi.md) · [Português](README.pt-BR.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [한국어](README.ko.md) · [සිංහල](README.si.md)

</div>

---

```bash
npx create-devrig my-project
```

Y ya está. Este único comando:

1. **Descarga** la plantilla [devrig](https://github.com/lakpriya1s/devrig) en `my-project/` — sin historial de git, solo los archivos.
2. **Inicializa** un repositorio git nuevo ahí mismo.
3. **Lanza** el asistente de configuración interactivo de devrig de inmediato, para que configures el nombre del proyecto, la organización de GitHub, los repos, el gestor de tickets y los toggles de funciones en el mismo comando — sin los pasos separados de `cd` + editar un archivo de configuración + ejecutar el setup.

Si omites el directorio, se te pedirá uno:

```bash
npx create-devrig
```

## Requisitos

| | |
|---|---|
| **Node.js** | 18+ |
| **git** | necesario — se usa para descargar la plantilla e inicializar tu nuevo repo |
| **bash** | nativo en macOS/Linux. En Windows, ejecuta esto dentro de WSL o Git Bash — el `setup.sh` de devrig es un script de bash |

## Lo que este paquete *no* hace

No reimplementa nada de la lógica de configuración de devrig — solo descarga la plantilla y se la entrega a su propio `setup.sh`. Las actualizaciones al flujo de configuración, las skills o el esquema de configuración de devrig surten efecto automáticamente la próxima vez que alguien ejecute `npx create-devrig`; este paquete en sí casi nunca necesita cambiar.

## ¿Prefieres no usar npx?

La interfaz de GitHub funciona igual de bien:

1. Haz clic en [**Use this template**](https://github.com/lakpriya1s/devrig/generate) en el repo de [devrig](https://github.com/lakpriya1s/devrig).
2. Clónalo y ejecuta `./setup.sh` tú mismo.

Ambos caminos te llevan exactamente al mismo asistente interactivo.

## Contribuir

Este paquete es intencionalmente pequeño — un archivo, una dependencia ([`degit`](https://github.com/Rich-Harris/degit)). Los reportes de bugs y las correcciones pequeñas son bienvenidos vía [issues](https://github.com/lakpriya1s/create-devrig/issues) o un PR. Si lo que realmente quieres cambiar es el flujo de configuración, las skills o el esquema de configuración, eso vive en [devrig](https://github.com/lakpriya1s/devrig), no aquí.

## Licencia

MIT — ver [LICENSE](../LICENSE).

<div align="center">
<sub>Parte del proyecto <a href="https://github.com/lakpriya1s/devrig">devrig</a> ·
<picture><source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-icon-dark.png"><img src="../assets/create-devrig-icon-light.png" width="14" alt=""></picture>
create-devrig</sub>
</div>
