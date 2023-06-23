import { CoreTypes } from '../../../core-types';
export declare class ClientCache {
    private logger;
    private cachedFolders;
    private cacheLimit;
    GetCached(input: string): CoreTypes.ResFile[];
    SetCached(input: string, newFolderFiles: CoreTypes.ResFile[]): void;
    private get cachedCount();
    private removeRandomFolderPath;
}
