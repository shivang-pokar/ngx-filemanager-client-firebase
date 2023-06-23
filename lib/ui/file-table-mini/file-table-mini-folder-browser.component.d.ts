import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CoreTypes } from '../../../core-types';
import { Subject } from 'rxjs';
import { LoggerService } from '../../services/logging/logger.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MainActionDefinition } from '../actions-toolbars/MainActionDefinition';
export declare class AppFileTableMiniFolderBrowserComponent implements OnInit, OnDestroy {
    private logger;
    selectedItem: SelectionModel<string>;
    folders: CoreTypes.ResFile[];
    mainActions: MainActionDefinition[];
    enterDirectory: EventEmitter<string>;
    selectedDirectory: EventEmitter<string>;
    destroyed: Subject<unknown>;
    constructor(logger: LoggerService);
    ngOnInit(): Promise<void>;
    ngOnDestroy(): void;
    onEnterFolder(folderPath: string): Promise<void>;
}
