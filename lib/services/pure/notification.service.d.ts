import { MatSnackBar } from '@angular/material/snack-bar';
export declare class NotificationService {
    private matSnackbar;
    constructor(matSnackbar: MatSnackBar);
    notify(msg: string, title?: string): import("@angular/material/snack-bar").MatSnackBarRef<import("@angular/material/snack-bar").TextOnlySnackBar>;
    notifyCancelled(): import("@angular/material/snack-bar").MatSnackBarRef<import("@angular/material/snack-bar").TextOnlySnackBar>;
}
