interface vitePluginGitInfoProps {
    outputFile?: string;
}
declare const vitePluginGitInfo: (options?: vitePluginGitInfoProps) => {
    name: string;
    configResolved(config: any): void;
    closeBundle(): void;
};
interface BranchWebpackPluginProps {
    outputFile?: string;
}
declare class BranchWebpackPlugin {
    static defaultOptions: {
        outputFile: string;
    };
    options: BranchWebpackPluginProps;
    constructor(options?: BranchWebpackPluginProps);
    apply(compiler: any): void;
}
export { BranchWebpackPlugin, vitePluginGitInfo };
