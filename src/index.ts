import { getBranchVersionInfo } from './utils';
const path = require('path');
const fs = require('fs');

interface vitePluginGitInfoProps {
    outputFile?: string;
}

// 默认输出文件名
const DefaultOutputFile = 'lastGitInfo.txt';

const vitePluginGitInfo = (options: vitePluginGitInfoProps = {}) => {
    const filename = options.outputFile || DefaultOutputFile;
    let outDir: string;
    return {
        name: 'vite-plugin-git-info',
        configResolved(config) {
            outDir = config.build.outDir;
        },
        closeBundle() {
            const buildInfo = getBranchVersionInfo();
            fs.writeFile(path.join(outDir, filename), buildInfo, (err) => {
                if (err) throw err;
                console.log(`Git info saved to ${path.join(outDir, filename)}`);
            });
        }
    };
};

interface BranchWebpackPluginProps {
    outputFile?: string;
}
class BranchWebpackPlugin {
    static defaultOptions = {
        outputFile: 'lastGitInfo.txt'
    };
    options: BranchWebpackPluginProps;

    constructor(options: BranchWebpackPluginProps = {}) {
        this.options = { ...BranchWebpackPlugin.defaultOptions, ...options };
    }

    apply(compiler) {

        const pluginName = BranchWebpackPlugin.name
        // 异步方法，生成打包目录时：生成文件
        compiler.hooks.emit.tapAsync(pluginName, (compilation, cb) => {
            // 添加分支版本信息文件
            const branchVersionInfo = getBranchVersionInfo();
            
            compilation.assets[this.options.outputFile] = {
                source: () => branchVersionInfo,
                size: () => branchVersionInfo.length
            };
            cb();
        });
    }
}

export { BranchWebpackPlugin, vitePluginGitInfo };
