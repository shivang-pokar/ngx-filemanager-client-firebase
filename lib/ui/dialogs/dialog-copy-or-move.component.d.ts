import { OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CoreTypes } from '../../../core-types';
import { LoggerService } from '../../services/logging/logger.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { ActionHandlersService } from '../main-file-manager/action-handlers.service';
import { MainActionDefinition } from '../actions-toolbars/MainActionDefinition';
export interface CopyDialogInterface {
    files: CoreTypes.ResFile[];
    isCopy: boolean;
    actionHandler: ActionHandlersService;
}
export declare class AppDialogCopyComponent implements OnDestroy {
    private logger;
    dialogRef: MatDialogRef<AppDialogCopyComponent>;
    data: CopyDialogInterface;
    copyToPathRelative: string;
    copyToPath: string;
    srcDirectory: string;
    items: CoreTypes.ResFile[];
    actionHandlers: ActionHandlersService;
    mainActions: MainActionDefinition[];
    folders: CoreTypes.ResFile[];
    OkLabel: string;
    OkIcon: string;
    destroyed: Subject<unknown>;
    $copyPathChanged: BehaviorSubject<string>;
    constructor(logger: LoggerService, dialogRef: MatDialogRef<AppDialogCopyComponent>, data: CopyDialogInterface);
    init(): Promise<void>;
    ngOnDestroy(): void;
    get SelectedFolder(): boolean;
    get SameAsSrcFolder(): boolean;
    get DisableCopy(): boolean;
    private setCopyToPath;
    private setSrcDirectory;
    onEnterDirectory(directoryPath: string): Promise<any>;
    onSelectedDirectory(directoryPath: string): void;
    onSubmit(): void;
    onCancel(): void;
}
