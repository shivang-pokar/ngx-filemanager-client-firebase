import { OnDestroy } from '@angular/core';
import { OptimisticFilesystem } from './optimistic-filesystem.interface';
import { ClientFileSystemService } from './client-filesystem.service';
import { LoggerService } from '../logging/logger.service';
import { NotificationService } from './notification.service';
import { CoreTypes, FileSystemProvider } from '../../../core-types';
import { FilemanagerStatusService } from '../state/status.service';
export declare class OptimisticFilesystemService implements OptimisticFilesystem, OnDestroy {
    private logger;
    private notifications;
    private status;
    private serverFilesystem;
    private clientFilesystem;
    private static instanceCount;
    private instanceCountIncr;
    private instanceCountDecr;
    get instances(): number;
    constructor(logger: LoggerService, notifications: NotificationService, status: FilemanagerStatusService);
    ngOnDestroy(): void;
    get $CurrentPath(): import("rxjs").Observable<string>;
    get $SelectedFile(): import("rxjs").Observable<CoreTypes.ResFile>;
    get $FilesWithIcons(): import("rxjs").Observable<CoreTypes.ResFile[]>;
    private refreshEmitter;
    private destroyed;
    initialize(serverFilesystem: FileSystemProvider, clientFilesystem: ClientFileSystemService): void;
    private reportError;
    private updateListFromServer;
    HandleList(directoryPath: string): Promise<any>;
    HandleCreateFolder(newPath: string, disableNoClobber?: boolean): Promise<any>;
    HandleUpload(uploadedFiles: string[]): Promise<any>;
    HandleCopy(singleFileName: string, newPath: string): Promise<any>;
    HandleMove(item: string, newPath: string): Promise<any>;
    HandleRename(item: string, newItemPath: string): Promise<any>;
    HandleEdit(item: string, content: string): Promise<any>;
    HandleGetcontent(item: string): Promise<string>;
    HandleSetPermissions(item: string, role: CoreTypes.PermissionsRole, entity: CoreTypes.FilePermissionEntity, recursive?: boolean): Promise<any>;
    HandleMoveMultiple(items: string[], newPath: string): Promise<any>;
    HandleCopyMultiple(items: string[], newPath: string): Promise<any>;
    HandleSetPermissionsMultiple(items: string[], role: CoreTypes.PermissionsRole, entity: CoreTypes.FilePermissionEntity, recursive?: boolean): Promise<any>;
    HandleSetPermissionsObjectMultiple(items: string[], permissionsObj: CoreTypes.FilePermissionsObject, recursive?: boolean): Promise<any>;
    HandleRemove(items: string[]): Promise<any>;
    HandleNavigateUp(): Promise<any>;
    onSelectItem(file: CoreTypes.ResFile): Promise<void>;
    GetItemByName(filePath: string): CoreTypes.ResFile;
    onSelectItemByName(filePath: string): void;
    private selectFirstInCurrentDirectory;
    CloneProvider(): OptimisticFilesystemService;
}
