import { CoreTypes } from '../../../core-types';
import { ClientCache } from './client-filesystem.cache';
import { Observable } from 'rxjs';
export declare class ClientFileSystemDataStore {
    private cache;
    private _$currentFiles;
    private _$currentPath;
    private _$selectedFile;
    private logger;
    SetCache(cache: ClientCache): void;
    get $currentFiles(): Observable<CoreTypes.ResFile[]>;
    get $currentPath(): Observable<string>;
    get $selectedFile(): Observable<CoreTypes.ResFile>;
    CurrentPath(): string;
    CurrentFiles(): CoreTypes.ResFile[];
    GetCached(directoryPath: string): CoreTypes.ResFile[];
    SetDirectoryFiles(files: CoreTypes.ResFile[], directoryPath: string): void;
    SetPath(path: string): void;
    SelectFile(item: CoreTypes.ResFile): void;
    exists(fullPath: string, cwd: string): boolean;
    CloneStore(): ClientFileSystemDataStore;
}
