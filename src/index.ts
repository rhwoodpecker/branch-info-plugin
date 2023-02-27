const path = require('path');
const fs = require('fs');
// 同步子进程
const execSync = require('child_process').execSync;
// 时间格式生成
function dateFormat(date: Date) {
    const y = date.getFullYear();
    const M = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${y}-${M}-${d} ${h}:${m}:${s}`;
}
// 获取当前git分支信息
function getBranchVersionInfo(): string {
    // 当前分支名 git name-rev --name-only HEAD 这个命令会在终端输出你当前的版本或标签信息。
    const vName = execSync('git name-rev --name-only HEAD').toString().trim();
    // 提交的commit hash
    const commitHash = execSync('git show -s --format=%H').toString().trim();
    // 提交人姓名
    const name = execSync('git show -s --format=%cn').toString().trim();
    // 提交日期
    const date = dateFormat(new Date(execSync('git show -s --format=%cd').toString()));
    // 提交描述
    const message = execSync('git show -s --format=%s').toString().trim();
    return `
    当前分支名：${vName}\n
    提交的hash：${commitHash}\n
    提交人姓名：${name}\n
    提交日期：${date}\n
    提交描述：${message}
  `;
}

function vitePluginGitInfo() {
  let outDir
  return {
    name: 'vite-plugin-git-info',
    configResolved(config) {
      outDir = config.build.outDir;
      
    },
    closeBundle() {
      const buildInfo = getBranchVersionInfo();
      fs.writeFile(path.join(outDir, "build.txt"), buildInfo, (err) => {
        if (err) throw err;
        console.log(`Git info saved to ${outDir}/build.txt`);
      });
    }
  };
}

class BranchWebpackPlugin {
    constructor() {
        // options 为调用时传的参数
        console.log('BranchWebpackPlugin init');
    }
    /**
     * compiler: webpack 的实例 所有的内容
     * compilation: 本次打包的内容
     * */

    apply(compiler) {
        // 异步方法，生成打包目录时：生成文件
        compiler.hooks.emit.tapAsync('BranchWebpackPlugin', (compilation, cb) => {
            // 添加分支版本信息文件
            const branchVersionInfo = getBranchVersionInfo();
            compilation.assets['build.txt'] = {
                source: () => branchVersionInfo,
                size: () => branchVersionInfo.length
            };
            cb();
        });
    }
}


export {
    BranchWebpackPlugin,
    vitePluginGitInfo
}

