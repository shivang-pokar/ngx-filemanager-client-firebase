export declare class IconUrlResolverService {
    private baseHref;
    iconAssetDirectory: string;
    constructor(baseHref: string);
    getFileIconUrl(filename: string): any;
    getFolderIconUrl(filename: string): any;
}
