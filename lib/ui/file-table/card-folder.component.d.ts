import { EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { CoreTypes } from '../../../core-types';
import { FileActionDefinition } from './FileActionDefinition';
import { FileManagerConfig } from '../../configuration/client-configuration';
export declare class CardFolderComponent {
    get isChecked(): boolean;
    get isSelected(): boolean;
    folder: CoreTypes.ResFile;
    actions: FileActionDefinition[];
    checkedItems: SelectionModel<string>;
    selectedItem: SelectionModel<string>;
    config: FileManagerConfig;
    enterFolder: EventEmitter<string>;
    onSelect(): void;
    onCheck(): void;
    onUnCheck(): void;
    onDoubleClick(): void;
    getFolderSize(folder: CoreTypes.ResFile): any;
}
