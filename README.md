# branch-info-plugin
`webpack` 和 `vite` 插件，获取最后一次 `git` 提交信息并输出到打包根目录下 `lastGitInfo.txt` ，方便线上版本溯源。

## Install
`npm install branch-info-plugin`
## Usage
```js
import { BranchWebpackPlugin, vitePluginGitInfo } from 'branch-info-plugin'

// in webpack，输出根目录可自定义配置
plugins: [new BranchWebpackPlugin({outputFile: 'commit.txt'})]

// in vite，输出在根目录 build.txt TODO 后续优化
plugins: [vitePluginGitInfo()]
```
