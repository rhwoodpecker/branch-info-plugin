interface vitePluginBranchInfoProps {
    outputFile?: string;
}
declare const vitePluginBranchInfo: (options?: vitePluginBranchInfoProps) => {
    name: string;
    configResolved(config: any): void;
    closeBundle(): void;
};
interface BranchInfoWebpackPluginProps {
    outputFile?: string;
}
declare class BranchInfoWebpackPlugin {
    static defaultOptions: {
        outputFile: string;
    };
    options: BranchInfoWebpackPluginProps;
    constructor(options?: BranchInfoWebpackPluginProps);
    apply(compiler: any): void;
}
export { BranchInfoWebpackPlugin, vitePluginBranchInfo };
