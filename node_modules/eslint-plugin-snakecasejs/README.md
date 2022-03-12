[![ESLint Plugin: snakecasejs](https://raw.githubusercontent.com/ptkdev/eslint-plugin-snakecasejs/master/.github/assets/eslint_plugin_snakecasejs_logo.png)](https://www.npmjs.com/package/eslint-plugin-snakecasejs)

# 🐍 ESLint Plugin: snakecasejs

[![](https://img.shields.io/badge/version-v2.2.0-lightgrey.svg)](https://github.com/ptkdev/eslint-plugin-snakecasejs/releases) [![](https://img.shields.io/npm/v/eslint-plugin-snakecasejs.svg)](https://www.npmjs.com/package/eslint-plugin-snakecasejs) [![](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/ptkdev/eslint-plugin-snakecasejs/blob/master/LICENSE.md) [![](https://img.shields.io/badge/ES-9-F7DF1E.svg)](https://wikipedia.org/wiki/ECMAScript) [![](https://img.shields.io/badge/powered%20by-eslint-46aef7.svg)](https://www.npmjs.com/package/eslint) [![](https://snyk.io/test/npm/eslint-plugin-snakecasejs/badge.svg)](https://snyk.io/test/github/eslint-plugin-snakecasejs)

> ESLint Plugin to enforce a style of snake_case in your project, rather than just disabling camelCase.

## 🎁 Support: Donate
> This project is **free**, **open source** and I try to provide excellent **free support**. Why donate? I work on this project several hours in my spare time and try to keep it up to date and working. **THANK YOU!**

[![](https://img.shields.io/badge/donate-paypal-005EA6.svg)](https://www.paypal.me/ptkdev) [![](https://img.shields.io/badge/donate-patreon-F87668.svg)](https://www.patreon.com/ptkdev) [![](https://img.shields.io/badge/buy%20me-coffee-4B788C.svg)](https://ko-fi.com/ptkdev)

![](https://img.shields.io/badge/bitcoin-35jQmZCy4nsxoMM3QPFrnZePDVhdKaHMRH-E38B29.svg) ![](https://img.shields.io/badge/ethereum-0x8b8171661bEb032828e82baBb0B5B98Ba8fBEBFc-4E8EE9.svg)

## 📎 Menu
- 💡 [Features](#-features)
- 🚀 [How to use](#-fast-setup)
- 🧩 Configs:
	- 🔧 [--fix](#---fix)
	- 📋 [whitelist](#-white-list)
	- 🚬 [filters](#-filter)
- 📚 [Documentation](#-documentation)
- ❤️ [Contributing](#-contributing)
- 🐛 [Known Bugs](https://github.com/ptkdev/eslint-plugin-snakecasejs/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
- 🍻 Community:
  - 🐔 [Discord](http://discord.ptkdev.io)
  - 🐓 [Slack](http://slack.ptkdev.io)
  - 🐤 [Twitter](http://twitter.ptkdev.io)

## 💡 Features
* [✔️] Easy to use
* [✔️] MIT License
* [✔️] Compatible with latest version of ESLint
* [✔️] Compatible with CamelCase (Class name or similar)
* [✔️] Compatible with --fix (convert automatically camelCase to snake_case)
* [✔️] White list array for methods or variables with camelCase syntax from other libraries/npm package.

## 🚀 Fast setup
1. Install eslint: `npm install eslint --save-dev`
2. Install snakecasejs plugin: `npm install eslint-plugin-snakecasejs --save-dev`
3. Create `.eslintrc.json` file with:
```json
{
    "plugins": [
        "snakecasejs"
    ],
    "settings":
    {
        "snakecasejs/filter": ["ClassDeclaration", "NewExpression"],
        "snakecasejs/whitelist": ["externalPath", "setNumber"]
    },
    "rules":
    {
        "snakecasejs/snakecasejs": "error"
    }
}
```
4. If it works add a star 🌟 at this project ❤️
5. If you want to help me: **donate on [paypal](https://www.paypal.me/ptkdev)/[ko-fi](https://ko-fi.com/ptkdev)** or become a **[backer on patreon](https://www.patreon.com/ptkdev)**.

NOTE: switch `error` to `warn` if you don't need snake_case as mandatory rule.

## 🔧 --fix
This eslint parameter fix simple rules of linter and with this plugin convert all camelCase variables or function name to snake_case.
Fix command support whitelist. Run this command in your project directory:

`eslint ./ --cache --ignore-pattern .gitignore --fix`

**WARNING:** You need install eslint globally for this feature: `npm install eslint -g`

## 📋 White list
Ignore variables, methods, etc... without snake_case syntax. Add to settings: `"snakecasejs/whitelist": ["NewPageClass"]` with array of variables with camelCase that you can not convert to snake_case (example: for external library naming convention).

Plugin ignore check on this variables/methods. Example: `"snakecasejs/whitelist": ["externalPath","setNumber"]`

## 🚬 Filter
Ignore global checks for class declarations, all methods, etc... Add to settings: `"snakecasejs/filter": []` with array of eslint expression or declaration, default value: `["ClassDeclaration", "NewExpression"]` for better compatibility with camel case class.

## 📚 Documentation
Run `npm run docs`

## 👑 Sponsors
Support this project by becoming a sponsor. 🙏 Become a sponsor on [patreon](https://www.patreon.com/join/ptkdev) or become top3 sponsor on [ko-fi](https://ko-fi.com/ptkdev). Your logo will show up here with a link to your website.

[![](https://api.ptkdev.io/backers/sponsor1.png)](https://api.ptkdev.io/backers/sponsor1.html) [![](https://api.ptkdev.io/backers/sponsor2.png)](https://api.ptkdev.io/backers/sponsor2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi1.png)](https://api.ptkdev.io/backers/sponsor-kofi1.html) [![](https://api.ptkdev.io/backers/sponsor-kofi2.png)](https://api.ptkdev.io/backers/sponsor-kofi2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi3.png)](https://api.ptkdev.io/backers/sponsor-kofi3.html) [![](https://api.ptkdev.io/backers/sponsor3.png)](https://api.ptkdev.io/backers/sponsor3.html) [![](https://api.ptkdev.io/backers/sponsor4.png)](https://api.ptkdev.io/backers/sponsor4.html) [![](https://api.ptkdev.io/backers/sponsor5.png)](https://api.ptkdev.io/backers/sponsor5.html) [![](https://api.ptkdev.io/backers/sponsor6.png)](https://api.ptkdev.io/backers/sponsor6.html) [![](https://api.ptkdev.io/backers/sponsor7.png)](https://api.ptkdev.io/backers/sponsor7.html) [![](https://api.ptkdev.io/backers/sponsor8.png)](https://api.ptkdev.io/backers/sponsor8.html) [![](https://api.ptkdev.io/backers/sponsor9.png)](https://api.ptkdev.io/backers/sponsor9.html) [![](https://api.ptkdev.io/backers/sponsor10.png)](https://api.ptkdev.io/backers/sponsor10.html) [![](https://api.ptkdev.io/backers/sponsor11.png)](https://api.ptkdev.io/backers/sponsor11.html) [![](https://api.ptkdev.io/backers/sponsor12.png)](https://api.ptkdev.io/backers/sponsor12.html) [![](https://api.ptkdev.io/backers/sponsor13.png)](https://api.ptkdev.io/backers/sponsor13.html) [![](https://api.ptkdev.io/backers/sponsor14.png)](https://api.ptkdev.io/backers/sponsor14.html) [![](https://api.ptkdev.io/backers/sponsor15.png)](https://api.ptkdev.io/backers/sponsor15.html)

## 🦄 Backers
Thank you to all our backers! 🙏 Become a backer on [patreon](https://www.patreon.com/join/ptkdev).

[![](https://api.ptkdev.io/backers/backer1.png)](https://api.ptkdev.io/backers/backer1.html) [![](https://api.ptkdev.io/backers/backer2.png)](https://api.ptkdev.io/backers/backer2.html) [![](https://api.ptkdev.io/backers/backer3.png)](https://api.ptkdev.io/backers/backer3.html) [![](https://api.ptkdev.io/backers/backer4.png)](https://api.ptkdev.io/backers/backer4.html) [![](https://api.ptkdev.io/backers/backer5.png)](https://api.ptkdev.io/backers/backer5.html) [![](https://api.ptkdev.io/backers/backer6.png)](https://api.ptkdev.io/backers/backer6.html) [![](https://api.ptkdev.io/backers/backer7.png)](https://api.ptkdev.io/backers/backer7.html) [![](https://api.ptkdev.io/backers/backer8.png)](https://api.ptkdev.io/backers/backer8.html) [![](https://api.ptkdev.io/backers/backer9.png)](https://api.ptkdev.io/backers/backer9.html) [![](https://api.ptkdev.io/backers/backer10.png)](https://api.ptkdev.io/backers/backer10.html) [![](https://api.ptkdev.io/backers/backer11.png)](https://api.ptkdev.io/backers/backer11.html) [![](https://api.ptkdev.io/backers/backer12.png)](https://api.ptkdev.io/backers/backer12.html) [![](https://api.ptkdev.io/backers/backer13.png)](https://api.ptkdev.io/backers/backer13.html) [![](https://api.ptkdev.io/backers/backer14.png)](https://api.ptkdev.io/backers/backer14.html) [![](https://api.ptkdev.io/backers/backer15.png)](https://api.ptkdev.io/backers/backer15.html)

## ❤️ Contributing
I 💟 contributions! I will happily accept your pull request! Translations, grammatical corrections (GrammarNazi you are welcome! Yes my English is bad, sorry), etc... Do not be afraid, if the code is not perfect we will work together 👯 and remember to insert your name in `.all-contributorsrc` and `package.json` file.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://ptk.dev"><img src="https://avatars1.githubusercontent.com/u/442844?v=4" width="100px;" alt=""/><br /><sub><b>Patryk Rzucidło</b></sub></a><br /><a href="https://github.com/ptkdev/eslint-plugin-snakecasejs/commits?author=ptkdev" title="Code">💻</a></td>
    <td align="center"><a href="https://deecewan.github.io"><img src="https://avatars1.githubusercontent.com/u/4755785?v=4" width="100px;" alt=""/><br /><sub><b>David Buchan-Swanson</b></sub></a><br /><a href="https://github.com/ptkdev/eslint-plugin-snakecasejs/commits?author=deecewan" title="Code">💻</a></td>
    <td align="center"><a href="https://rozpuszczalny.com"><img src="https://avatars1.githubusercontent.com/u/7627635?v=4" width="100px;" alt=""/><br /><sub><b>Tomasz Domański</b></sub></a><br /><a href="https://github.com/ptkdev/eslint-plugin-snakecasejs/commits?author=rozpuszczalny" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

> 💰 In the future, if the donations allow it, I would like to share some of the success with those who helped me the most. For me open source is share of code, share development knowledges and share donations!

## 📲 Tools
[![](https://img.shields.io/badge/portfolio-ptkdev-000000.svg)](https://ptk.dev/)
[![](https://img.shields.io/badge/app-meingifs-E1215B.svg)](https://meingifs.pics/)
[![](https://img.shields.io/badge/stickers-ptkdev-128C7E.svg)](https://stickers.ptkdev.io/)

[![](https://img.shields.io/badge/app-social%20manager%20tools-ff7f19.svg)](http://socialmanager.tools/)
[![](https://img.shields.io/badge/api-instagram%20bot-895a4d.svg)](https://github.com/social-manager-tools/socialmanagertools-igbot)
[![](https://img.shields.io/badge/api-twitter%20bot-21B7F4.svg)](https://github.com/social-manager-tools/socialmanagertools-twbot)
[![](https://img.shields.io/badge/api-facebook%20bot-3b5998.svg)](https://github.com/social-manager-tools/socialmanagertools-fbbot)
[![](https://img.shields.io/badge/telegram%20bot-feed%20rss%20for%20wordpress%20&amp;%20medium-00AB6C.svg)](https://github.com/social-manager-tools/socialmanagertools-tgbot)

## 💫 License
* Code and Contributions have **MIT License**
* Images and logos have **CC BY-NC 4.0 License** ([Freepik](https://it.freepik.com/) Premium License)
* Documentations and Translations have **CC BY 4.0 License**

###### Copyleft (c) 2018-2019 [Patryk Rzucidło](https://ptk.dev) ([@PTKDev](https://twitter.com/ptkdev)) <[support@ptkdev.io](mailto:support@ptkdev.io)>