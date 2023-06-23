import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
export interface RenameDialogInterface {
    currentPath: string;
}
export declare class AppDialogRenameComponent {
    dialogRef: MatDialogRef<AppDialogRenameComponent>;
    data: RenameDialogInterface;
    renamedItem: FormControl;
    constructor(dialogRef: MatDialogRef<AppDialogRenameComponent>, data: RenameDialogInterface);
    onSubmit(): void;
    onCancel(): void;
    get newPath(): any;
    get IsDir(): boolean;
}
