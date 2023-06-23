import { OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FileManagerConfig, NameUid } from '../../configuration/client-configuration';
import { CoreTypes } from '../../../core-types';
import { LoggerService } from '../../services/logging/logger.service';
export interface PermissionsDialogInterface {
    files: CoreTypes.ResFile[];
    config: FileManagerConfig;
}
export interface PermissionsDialogResponseInterface {
    role: CoreTypes.PermissionsRole;
    entity: CoreTypes.FilePermissionEntity;
    files: CoreTypes.ResFile[];
}
export declare class AppDialogPermissionsSetComponent implements OnDestroy {
    private logger;
    dialogRef: MatDialogRef<AppDialogPermissionsSetComponent>;
    data: PermissionsDialogInterface;
    items: CoreTypes.ResFile[];
    roleControl: FormControl;
    roleOptions: CoreTypes.PermissionsRole[];
    entityTypeControl: FormControl;
    entityTypeOptions: ('user' | 'group')[];
    entityControl: FormControl;
    $users: Observable<NameUid[]>;
    $groups: Observable<NameUid[]>;
    destroyed: Subject<unknown>;
    constructor(logger: LoggerService, dialogRef: MatDialogRef<AppDialogPermissionsSetComponent>, data: PermissionsDialogInterface);
    ngOnDestroy(): void;
    get EntityControlLabel(): "User" | "Group";
    get HasSelectedUser(): boolean;
    onSubmit(): void;
    onCancel(): void;
}
