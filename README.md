# branch-info-plugin
`webpack` 和 `vite` 插件，获取最后一次 `git` 提交信息并输出在打包根目录下 `build.txt` 文本内，方便线上版本溯源。

## Install
`npm install branch-info-plugin`
## Usage
```js
import branchInfoPlugin from 'branch-info-plugin'

// in webpakck
plugins: [new branchInfoPlugin({ webpack: true })]

// in vite
plugins: [new branchInfoPlugin({ vite: true })]
```
