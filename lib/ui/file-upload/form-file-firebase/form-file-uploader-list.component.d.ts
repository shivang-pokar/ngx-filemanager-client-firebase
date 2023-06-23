import { EventEmitter } from '@angular/core';
import { FormArrayFileObject } from './FormArrayFileObject';
export declare class FormFileUploadedFileListComponent {
    disabled: boolean;
    uploadedFiles: FormArrayFileObject[];
    clickRemoveTag: EventEmitter<FormArrayFileObject>;
    getProgress(file: FormArrayFileObject): number;
    isDone(file: FormArrayFileObject): boolean;
}
