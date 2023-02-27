declare function vitePluginGitInfo(): {
    name: string;
    configResolved(config: any): void;
    closeBundle(): void;
};
declare class BranchWebpackPlugin {
    constructor();
    /**
     * compiler: webpack 的实例 所有的内容
     * compilation: 本次打包的内容
     * */
    apply(compiler: any): void;
}
export { BranchWebpackPlugin, vitePluginGitInfo };
