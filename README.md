# branch-info-plugin
`webpack` 和 `vite` 插件，获取最后一次 `git` 提交信息并输出到打包根目录下 `lastGitInfo.txt` ，方便线上版本溯源。

## Install
`npm install branch-info-plugin`
## Usage
```js
import { BranchWebpackPlugin, vitePluginGitInfo } from 'branch-info-plugin'

// in webpack，输出根目录可自定义配置
plugins: [new BranchWebpackPlugin({outputFile: 'commit.txt'})]

// in vite，输出在根目录 lastGitInfo.txt TODO 后续优化
plugins: [vitePluginGitInfo()]
```
## Example
打包完成输出内容：

```txt

    当前分支名：rhwoodpecker/master

    提交的hash：cd7994775050d4252312466d3e7c937b567

    提交人姓名：‘renhao’

    提交日期：2023-02-24 18:07:10

    提交描述：chore: update README.md
  
```
