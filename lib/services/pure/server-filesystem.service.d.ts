import { HttpClient } from '@angular/common/http';
import { CoreTypes, FileSystemProvider } from '../../../core-types';
import { LoggerService } from '../logging/logger.service';
export declare class ServerFilesystemProviderService implements FileSystemProvider {
    private http;
    private logger;
    private bucketname;
    private apiEndpoint;
    private isAdmin;
    private LOG_ID;
    constructor(http: HttpClient, logger: LoggerService);
    private makeAPIRequest;
    Initialize(config: {
        bucketname: string;
        apiEndpoint: string;
        isAdmin: boolean;
    }): void;
    List(path: string): Promise<CoreTypes.ResBodyList>;
    CreateFolder(newPath: string, disableNoClobber?: boolean): Promise<CoreTypes.ResBodyCreateFolder>;
    Copy(singleFileName: string, newPath: string): Promise<CoreTypes.ResBodyCopy>;
    Move(item: string, newPath: string): Promise<CoreTypes.ResBodyMove>;
    Rename(item: string, newItemPath: string): Promise<CoreTypes.ResBodyRename>;
    Edit(item: string, content: string): Promise<CoreTypes.ResBodyEdit>;
    Getcontent(item: string): Promise<CoreTypes.ResBodyGetContent>;
    SetPermissions(item: string, role: CoreTypes.PermissionsRole, entity: CoreTypes.FilePermissionEntity, recursive?: boolean): Promise<CoreTypes.ResBodySetPermissions>;
    MoveMultiple(items: string[], newPath: string): Promise<CoreTypes.ResBodyMove>;
    CopyMultiple(items: string[], newPath: string): Promise<CoreTypes.ResBodyCopy>;
    SetPermissionsMultiple(items: string[], role: CoreTypes.PermissionsRole, entity: CoreTypes.FilePermissionEntity, recursive?: boolean): Promise<CoreTypes.ResBodySetPermissions>;
    SetPermissionsObjectMultiple(items: string[], permissionsObj: CoreTypes.FilePermissionsObject, recursive?: boolean): Promise<CoreTypes.ResBodySetPermissions>;
    Remove(items: string[]): Promise<CoreTypes.ResBodyRemove>;
    GetSingle(item: string): Promise<CoreTypes.ResBodyGetSingle>;
    GetUploadApiUrl(currentPath: string): string;
    CloneProvider(): FileSystemProvider;
    CreateDownloadLink(file: CoreTypes.ResFile): Promise<string>;
    Upload(item: string): Promise<boolean>;
}
