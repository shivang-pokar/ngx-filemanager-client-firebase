import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LoggerService } from '../../services/logging/logger.service';
import { FormFilesConfiguration } from '../file-upload/form-file-firebase/form-file-firebase.component';
import { NotificationService } from '../../services/pure/notification.service';
export interface UploadDialogInterface {
    currentDirectory: string;
    firebaseConfig: {};
    bucketName: string;
}
export interface UploadDialogResponseInterface {
    uploaded: string[];
}
export declare class AppDialogUploadFilesComponent {
    private logger;
    private notifications;
    dialogRef: MatDialogRef<AppDialogUploadFilesComponent>;
    data: UploadDialogInterface;
    filesControl: FormControl;
    currentDirectory: string;
    config: FormFilesConfiguration;
    isUploading: BehaviorSubject<boolean>;
    constructor(logger: LoggerService, notifications: NotificationService, dialogRef: MatDialogRef<AppDialogUploadFilesComponent>, data: UploadDialogInterface);
    onSubmit(): void;
    onCancel(): void;
}
