import { EventEmitter } from '@angular/core';
import { BulkActionDefinition } from './BulkActionDefinition';
import { CoreTypes } from '../../../core-types';
import { Observable } from 'rxjs';
export declare class AppBulkActionsComponent {
    bulkActions: BulkActionDefinition[];
    bulkSelected$: Observable<CoreTypes.ResFile[]>;
    clearSelected: EventEmitter<void>;
    executeAction(action: BulkActionDefinition, selected: CoreTypes.ResFile[]): Promise<void>;
}
