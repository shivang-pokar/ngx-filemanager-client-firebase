import { MatDialogRef } from '@angular/material/dialog';
export declare class AppDialogConfirmationComponent {
    dialogRef: MatDialogRef<AppDialogConfirmationComponent>;
    constructor(dialogRef: MatDialogRef<AppDialogConfirmationComponent>);
    onSubmit(): void;
    onCancel(): void;
}
