import { OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FileManagerConfig } from '../../configuration/client-configuration';
import { CoreTypes } from '../../../core-types';
import { LoggerService } from '../../services/logging/logger.service';
import { Tag } from '../tags-control/tags-control.component';
export interface PermissionsObjectDialogInterface {
    files: CoreTypes.ResFile[];
    config: FileManagerConfig;
}
export interface PermissionsObjectDialogResponseInterface {
    permissionsObj: CoreTypes.FilePermissionsObject;
    files: CoreTypes.ResFile[];
}
export declare class AppDialogPermissionsSetObjectComponent implements OnDestroy {
    private logger;
    dialogRef: MatDialogRef<AppDialogPermissionsSetObjectComponent>;
    data: PermissionsObjectDialogInterface;
    items: CoreTypes.ResFile[];
    othersControl: FormControl;
    othersOptions: CoreTypes.FilePermissionOthers[];
    allReadersControl: FormControl;
    allWritersControl: FormControl;
    $allEntities: Observable<Tag[]>;
    destroyed: Subject<unknown>;
    config: FileManagerConfig;
    constructor(logger: LoggerService, dialogRef: MatDialogRef<AppDialogPermissionsSetObjectComponent>, data: PermissionsObjectDialogInterface);
    ngOnDestroy(): void;
    initPermissions(files: CoreTypes.ResFile[]): void;
    getUniqueTags(inputEntities: string[][]): Tag[];
    strings2Tags(inputArr: string[]): Tag[];
    tags2Strings(inputArr: Tag[]): string[];
    onSubmit(): void;
    onCancel(): void;
}
