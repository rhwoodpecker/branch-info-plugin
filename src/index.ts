import { getBranchVersionInfo } from './utils';
const path = require('path');
const fs = require('fs');

interface vitePluginBranchInfoProps {
    outputFile?: string;
}

// 默认输出文件名
const DefaultOutputFile = 'lastGitInfo.txt';

// 遵循vite插件命名
const vitePluginBranchInfo = (options: vitePluginBranchInfoProps = {}) => {
    const filename = options.outputFile || DefaultOutputFile;
    let outDir: string;
    return {
        name: 'vite-plugin-branch-info',
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

interface BranchInfoWebpackPluginProps {
    outputFile?: string;
}

//  遵循webpack插件命名
class BranchInfoWebpackPlugin {
    static defaultOptions = {
        outputFile: 'lastGitInfo.txt'
    };
    options: BranchInfoWebpackPluginProps;

    constructor(options: BranchInfoWebpackPluginProps = {}) {
        this.options = { ...BranchInfoWebpackPlugin.defaultOptions, ...options };
    }

    apply(compiler) {
        const pluginName = BranchInfoWebpackPlugin.name;
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

export { BranchInfoWebpackPlugin, vitePluginBranchInfo };
