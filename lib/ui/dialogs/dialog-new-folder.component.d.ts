import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
export declare class AppDialogNewFolderComponent {
    dialogRef: MatDialogRef<AppDialogNewFolderComponent>;
    folderName: FormControl;
    constructor(dialogRef: MatDialogRef<AppDialogNewFolderComponent>);
    onSubmit(): void;
    onCancel(): void;
}
