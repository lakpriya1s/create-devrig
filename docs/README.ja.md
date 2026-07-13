<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-logo-dark.png">
  <img src="../assets/create-devrig-logo-light.png" alt="create-devrig" width="420">
</picture>

**[devrig](https://github.com/lakpriya1s/devrig) ワークスペースをコマンド一つで — クローン不要、別途セットアップ手順も不要。**

[![npm version](https://img.shields.io/npm/v/create-devrig?color=22D3EE&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![npm downloads](https://img.shields.io/npm/dm/create-devrig?color=3B82F6&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6?style=flat-square)](../LICENSE)

[English](../README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [हिन्दी](README.hi.md) · [Português](README.pt-BR.md) · **日本語** · [Français](README.fr.md) · [한국어](README.ko.md) · [සිංහල](README.si.md)

</div>

---

```bash
npx create-devrig my-project
```

これだけです。このコマンド一つで：

1. [devrig](https://github.com/lakpriya1s/devrig) テンプレートを `my-project/` に **取得**（git 履歴なし、ファイルのみ）。
2. devrig 自身のテンプレートファイル(ブランディング資産、翻訳ドキュメント、`CITATION.cff`、`CONTRIBUTING.md`、`LICENSE`)を **削除** し、ワークスペースをクリーンな状態から始められるようにします — これは devrig のプロジェクトではなく、あなたのプロジェクトです。
3. そこに新しい git リポジトリを **初期化**。
4. devrig の対話式セットアップウィザードを即座に **起動** — プロジェクト名、説明、GitHub org、リポジトリ、課題管理ツール、機能トグルを同じコマンド内で設定できます。ウィザードは devrig の README の代わりに*あなたの*プロジェクト用の `README.md` も生成します。

ディレクトリを省略すると、入力を求められます：

```bash
npx create-devrig
```

## 必要環境

| | |
|---|---|
| **Node.js** | 18以上 |
| **git** | 必須 — テンプレートの取得と新しいリポジトリの初期化に使用 |
| **bash** | macOS/Linux ではネイティブ対応。Windows では WSL または Git Bash 内で実行してください — devrig の `setup.sh` は bash スクリプトです |

## このパッケージが*しない*こと

devrig のセットアップロジックを再実装することはありません — テンプレートを取得し、テンプレート専用のファイルを取り除いて、devrig 自身の `setup.sh` に引き渡すだけです(`setup.sh` 側もそれらを取り除くため、GitHub の「Use this template」経由でも同じ結果になります)。devrig のセットアップフロー、スキル、設定スキーマの更新は、次回誰かが `npx create-devrig` を実行したときに自動的に反映されます。このパッケージ自体が変更を必要とすることはほとんどありません。

## npx を使いたくない場合

GitHub の UI でも同じように使えます：

1. [devrig](https://github.com/lakpriya1s/devrig) リポジトリで [**Use this template**](https://github.com/lakpriya1s/devrig/generate) をクリック。
2. クローンして自分で `./setup.sh` を実行。

どちらの方法でも、まったく同じ対話式ウィザードにたどり着きます。

## コントリビュート

このパッケージは意図的に小さく保たれています — ファイル1つ、依存関係1つ（[`degit`](https://github.com/Rich-Harris/degit)）。バグ報告や小さな修正は [issues](https://github.com/lakpriya1s/create-devrig/issues) や PR で歓迎します。セットアップフロー、スキル、設定スキーマそのものを変更したい場合は、それは [devrig](https://github.com/lakpriya1s/devrig) 側にあり、ここではありません。

## ライセンス

MIT — [LICENSE](../LICENSE) を参照。

<div align="center">
<sub><a href="https://github.com/lakpriya1s/devrig">devrig</a> プロジェクトの一部 ·
<picture><source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-icon-dark.png"><img src="../assets/create-devrig-icon-light.png" width="14" alt=""></picture>
create-devrig</sub>
</div>
