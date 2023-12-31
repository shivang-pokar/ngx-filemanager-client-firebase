import { CoreTypes, FileSystemProvider } from '../../../core-types';
import { ConsoleLoggerService } from '../logging/console-logger.service';
export declare class FileSystemStub implements FileSystemProvider {
    private fakeDelayMs;
    logger: ConsoleLoggerService;
    files: CoreTypes.ResFile[];
    setFakeDelay(newDelay: number): void;
    private fakeDelay;
    private selectMatches;
    private isInDirectory;
    List(inputPath: string): Promise<CoreTypes.ResBodyList>;
    Rename(item: string, newItemPath: string): Promise<CoreTypes.ResBodyRename>;
    Move(item: string, newPath: string): Promise<CoreTypes.ResBodyMove>;
    Copy(singleFileName: string, newPath: string): Promise<CoreTypes.ResBodyCopy>;
    Edit(item: string, content: string): Promise<CoreTypes.ResBodyEdit>;
    Getcontent(item: string): Promise<CoreTypes.ResBodyGetContent>;
    GetSingle(item: string): Promise<CoreTypes.ResBodyGetSingle>;
    CreateFolder(newPath: string, disableNoClobber?: boolean): Promise<CoreTypes.ResBodyCreateFolder>;
    private recursivelyTryToCreateFolder;
    SetPermissions(item: string, role: CoreTypes.PermissionsRole, entity: CoreTypes.FilePermissionEntity, recursive?: boolean): Promise<CoreTypes.ResBodySetPermissions>;
    CopyMultiple(items: string[], newPath: string): Promise<CoreTypes.ResBodyCopy>;
    MoveMultiple(items: string[], newPath: string): Promise<CoreTypes.ResBodyMove>;
    SetPermissionsMultiple(items: string[], role: CoreTypes.PermissionsRole, entity: CoreTypes.FilePermissionEntity, recursive?: boolean): Promise<CoreTypes.ResBodySetPermissions>;
    Upload(item: string): Promise<boolean>;
    private recursivelyTryToAddFile;
    recursivelySetPermissions(items: string[], role: CoreTypes.PermissionsRole, entity: CoreTypes.FilePermissionEntity, recursive?: boolean): any;
    private setSinglePermission;
    SetPermissionsObjectMultiple(items: string[], permissionsObj: CoreTypes.FilePermissionsObject, recursive?: boolean): Promise<CoreTypes.ResBodySetPermissions>;
    recursivelySetPermissionsObjects(items: string[], permissionsObj: CoreTypes.FilePermissionsObject, recursive?: boolean): any;
    Remove(items: string[]): Promise<CoreTypes.ResBodyRemove>;
    CloneProvider(): FileSystemProvider;
    private ensureTrailingSlash;
    private ensurePrefixSlash;
    GetUploadApiUrl(currentPath: string): string;
    CreateDownloadLink(file: CoreTypes.ResFile): Promise<string>;
}
