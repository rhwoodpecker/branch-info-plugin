# branch-info-plugin
`webpack` 和 `vite` 插件，获取最后一次 `git` 提交信息并输出 `build.txt` 文本内，方便线上版本溯源。

## Install
`npm install branch-info-plugin`
## Usage
```js
import { BranchWebpackPlugin, vitePluginGitInfo } from 'branch-info-plugin'

// in webpakck，输出在assets目录下
plugins: [new BranchWebpackPlugin()]

// in vite，输出在根目录
plugins: [vitePluginGitInfo()]
```
