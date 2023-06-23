import { CoreTypes } from '../../../core-types';
export interface OptimisticFilesystem {
    HandleList(path: string): Promise<any>;
    HandleCreateFolder(newPath: string, disableNoClobber?: boolean): Promise<any>;
    HandleCopy(singleFileName: string, newPath: string): Promise<any>;
    HandleMove(item: string, newPath: string): Promise<any>;
    HandleRename(item: string, newItemPath: string): Promise<any>;
    HandleEdit(item: string, content: string): Promise<any>;
    HandleGetcontent(item: string): Promise<string>;
    HandleSetPermissions(item: string, role: CoreTypes.PermissionsRole, entity: CoreTypes.FilePermissionEntity, recursive?: boolean): Promise<any>;
    HandleMoveMultiple(items: string[], newPath: string): Promise<any>;
    HandleCopyMultiple(items: string[], newPath: string): Promise<any>;
    HandleSetPermissionsMultiple(items: string[], role: CoreTypes.PermissionsRole, entity: CoreTypes.FilePermissionEntity, recursive?: boolean): Promise<any>;
    HandleSetPermissionsObjectMultiple(items: string[], permissionsObj: CoreTypes.FilePermissionsObject, recursive?: boolean): Promise<void>;
    HandleRemove(items: string[]): Promise<any>;
}
