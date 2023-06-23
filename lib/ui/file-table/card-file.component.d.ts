import { SelectionModel } from '@angular/cdk/collections';
import { CoreTypes } from '../../../core-types';
import { FileActionDefinition } from './FileActionDefinition';
export declare class CardFileComponent {
    get isChecked(): boolean;
    get isSelected(): boolean;
    file: CoreTypes.ResFile;
    actions: FileActionDefinition[];
    checkedItems: SelectionModel<string>;
    selectedItem: SelectionModel<string>;
    onSelect(): void;
    onCheck(): void;
    onUnCheck(): void;
}
