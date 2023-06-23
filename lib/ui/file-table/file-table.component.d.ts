import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { CoreTypes } from '../../../core-types';
import { Subject, Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { FileActionDefinition } from './FileActionDefinition';
import { FileManagerConfig } from '../../configuration/client-configuration';
export declare class AppFileTableComponent implements OnInit, OnDestroy {
    checkedItems: SelectionModel<string>;
    selectedItem: SelectionModel<string>;
    clearSelected: Subject<unknown>;
    $triggerClearSelected: Observable<void>;
    fileActions: FileActionDefinition[];
    folderActions: FileActionDefinition[];
    files: CoreTypes.ResFile[];
    folders: CoreTypes.ResFile[];
    config: FileManagerConfig;
    checkedChanged: EventEmitter<CoreTypes.ResFile[]>;
    selectedChanged: EventEmitter<string>;
    enterFolder: EventEmitter<string>;
    private destroyed;
    ngOnInit(): void;
    ngOnDestroy(): void;
    get areAllFoldersChecked(): boolean;
    get areAllFilesChecked(): boolean;
    onCheckAllFolders(): void;
    onUnCheckAllFolders(): void;
    onCheckAllFiles(): void;
    onUnCheckAllFiles(): void;
}
