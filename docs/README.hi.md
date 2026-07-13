<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-logo-dark.png">
  <img src="../assets/create-devrig-logo-light.png" alt="create-devrig" width="420">
</picture>

**[devrig](https://github.com/lakpriya1s/devrig) workspace बनाने के लिए एक ही command — clone करने की ज़रूरत नहीं, अलग setup step की ज़रूरत नहीं।**

[![npm version](https://img.shields.io/npm/v/create-devrig?color=22D3EE&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![npm downloads](https://img.shields.io/npm/dm/create-devrig?color=3B82F6&style=flat-square)](https://www.npmjs.com/package/create-devrig)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6?style=flat-square)](../LICENSE)

[English](../README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · **हिन्दी** · [Português](README.pt-BR.md) · [日本語](README.ja.md) · [Français](README.fr.md) · [한국어](README.ko.md) · [සිංහල](README.si.md)

</div>

---

```bash
npx create-devrig my-project
```

बस इतना ही। यह एक कमांड:

1. [devrig](https://github.com/lakpriya1s/devrig) टेम्पलेट को `my-project/` में **fetch** करती है — git history के बिना, सिर्फ फ़ाइलें।
2. devrig के अपने टेम्पलेट फ़ाइलों (branding assets, translated docs, `CITATION.cff`, `CONTRIBUTING.md`, `LICENSE`) को **हटाती** है, ताकि workspace साफ़ शुरू हो — यह आपका प्रोजेक्ट है, devrig का नहीं।
3. वहाँ एक नया git repository **initialize** करती है।
4. devrig का इंटरैक्टिव setup wizard तुरंत **launch** करती है, ताकि आप प्रोजेक्ट नाम, विवरण, GitHub org, repos, issue tracker, और feature toggles उसी command में सेट कर सकें — wizard *आपके* प्रोजेक्ट के लिए devrig की जगह एक `README.md` भी जनरेट करता है।

Directory न दें तो आपसे पूछा जाएगा:

```bash
npx create-devrig
```

## आवश्यकताएँ

| | |
|---|---|
| **Node.js** | 18+ |
| **git** | ज़रूरी — टेम्पलेट fetch करने और आपकी नई repo initialize करने के लिए इस्तेमाल होता है |
| **bash** | macOS/Linux पर native. Windows पर इसे WSL या Git Bash के अंदर चलाएं — devrig का `setup.sh` एक bash स्क्रिप्ट है |

## यह package क्या *नहीं* करता

यह devrig के setup logic को दोबारा implement नहीं करता — यह सिर्फ टेम्पलेट fetch करता है, टेम्पलेट-केवल फ़ाइलें हटाता है, और उसे उसके अपने `setup.sh` को सौंप देता है (जो उन्हें भी हटाता है, ताकि GitHub का "Use this template" तरीका भी वैसा ही नतीजा दे)। devrig के setup flow, skills, या config schema में अपडेट अगली बार कोई `npx create-devrig` चलाने पर अपने आप लागू हो जाते हैं; यह package खुद शायद ही कभी बदलने की ज़रूरत पड़े।

## npx इस्तेमाल नहीं करना चाहते?

GitHub का UI भी उतना ही अच्छा काम करता है:

1. [devrig](https://github.com/lakpriya1s/devrig) repo पर [**Use this template**](https://github.com/lakpriya1s/devrig/generate) क्लिक करें।
2. Clone करें और खुद `./setup.sh` चलाएं।

दोनों रास्ते बिल्कुल एक ही इंटरैक्टिव wizard पर ले जाते हैं।

## योगदान दें

यह package जान-बूझकर बहुत छोटा रखा गया है — एक फ़ाइल, एक dependency ([`degit`](https://github.com/Rich-Harris/degit))। Bug रिपोर्ट और छोटे fixes [issues](https://github.com/lakpriya1s/create-devrig/issues) या PR के ज़रिए स्वागत योग्य हैं। अगर आप असल में setup flow, skills, या config schema बदलना चाहते हैं, तो वह [devrig](https://github.com/lakpriya1s/devrig) में है, यहाँ नहीं।

## लाइसेंस

MIT — देखें [LICENSE](../LICENSE)।

<div align="center">
<sub><a href="https://github.com/lakpriya1s/devrig">devrig</a> प्रोजेक्ट का हिस्सा ·
<picture><source media="(prefers-color-scheme: dark)" srcset="../assets/create-devrig-icon-dark.png"><img src="../assets/create-devrig-icon-light.png" width="14" alt=""></picture>
create-devrig</sub>
</div>
